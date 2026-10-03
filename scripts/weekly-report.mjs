// Resumen semanal de visitas (GA4 Data API) -> email con Resend.
// Uso: node scripts/weekly-report.mjs [--dry]   (--dry imprime el email sin enviarlo)
import { google } from 'googleapis'
import { Resend } from 'resend'

const DRY = process.argv.includes('--dry')

function need(name) {
  const v = process.env[name]
  if (!v) throw new Error(`Falta la variable ${name}`)
  return v
}

const propertyId = need('GA_PROPERTY_ID')
const auth = new google.auth.JWT({
  email: need('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
  key: need('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
})
const data = google.analyticsdata({ version: 'v1beta', auth })

const THIS = { startDate: '7daysAgo', endDate: 'yesterday' }
const PREV = { startDate: '14daysAgo', endDate: '8daysAgo' }

async function report(requestBody) {
  const res = await data.properties.runReport({ property: `properties/${propertyId}`, requestBody })
  return res.data.rows ?? []
}

const num = (r, i) => Number(r?.metricValues?.[i]?.value ?? 0)
const dim = (r, i) => r.dimensionValues?.[i]?.value ?? ''
const fmtSecs = (s) => `${Math.floor(s / 60)}m ${String(Math.round(s % 60)).padStart(2, '0')}s`
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function delta(cur, prev) {
  if (!prev) return cur ? 'nuevo' : '–'
  const p = Math.round(((cur - prev) / prev) * 100)
  return `${p > 0 ? '+' : ''}${p}%`
}

const [totals, topPages, sources] = await Promise.all([
  report({
    dateRanges: [THIS, PREV],
    metrics: [
      { name: 'sessions' },
      { name: 'activeUsers' },
      { name: 'engagedSessions' },
      { name: 'averageSessionDuration' },
    ],
  }),
  report({
    dateRanges: [THIS],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'userEngagementDuration' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 8,
  }),
  report({
    dateRanges: [THIS],
    dimensions: [{ name: 'sessionSource' }, { name: 'sessionMedium' }],
    metrics: [{ name: 'sessions' }, { name: 'averageSessionDuration' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 8,
  }),
])

// Con dos dateRanges GA añade la dimensión "dateRange" (date_range_0 / date_range_1).
const pick = (key) => totals.find((r) => dim(r, 0) === key)
const cur = pick('date_range_0')
const prev = pick('date_range_1')

const sessions = num(cur, 0), users = num(cur, 1), engaged = num(cur, 2), avg = num(cur, 3)
const pSessions = num(prev, 0), pUsers = num(prev, 1)

const rowsPages = topPages
  .map((r) => {
    const views = num(r, 0), users = num(r, 2)
    const secs = users ? num(r, 1) / users : 0
    return `<tr><td>${esc(dim(r, 0))}</td><td align="right">${views}</td><td align="right">${fmtSecs(secs)}</td></tr>`
  })
  .join('')

const rowsSources = sources
  .map((r) => `<tr><td>${esc(dim(r, 0))} / ${esc(dim(r, 1))}</td><td align="right">${num(r, 0)}</td><td align="right">${fmtSecs(num(r, 1))}</td></tr>`)
  .join('')

const readRate = sessions ? Math.round((engaged / sessions) * 100) : 0

const html = `
<div style="font-family:Arial,sans-serif;max-width:560px;color:#111">
  <h2 style="margin:0 0 4px">AgrauData — resumen semanal</h2>
  <p style="margin:0 0 16px;color:#666">Últimos 7 días (hasta ayer) vs. los 7 anteriores</p>
  <table cellpadding="6" style="border-collapse:collapse;width:100%">
    <tr><td><b>Visitantes</b></td><td align="right">${users} (${delta(users, pUsers)})</td></tr>
    <tr><td><b>Visitas</b></td><td align="right">${sessions} (${delta(sessions, pSessions)})</td></tr>
    <tr><td><b>Visitas que se quedaron a leer</b></td><td align="right">${engaged} (${readRate}%)</td></tr>
    <tr><td><b>Tiempo medio por visita</b></td><td align="right">${fmtSecs(avg)}</td></tr>
  </table>
  <h3>Páginas más vistas</h3>
  <table cellpadding="4" style="width:100%"><tr style="color:#666"><td>Página</td><td align="right">Vistas</td><td align="right">Tiempo/visitante</td></tr>${rowsPages || '<tr><td colspan="3">Sin datos</td></tr>'}</table>
  <h3>De dónde vienen</h3>
  <table cellpadding="4" style="width:100%"><tr style="color:#666"><td>Origen / medio</td><td align="right">Visitas</td><td align="right">Tiempo medio</td></tr>${rowsSources || '<tr><td colspan="3">Sin datos</td></tr>'}</table>
  <p style="color:#888;font-size:12px">"Se quedaron a leer" = sesiones con más de 10 s, 2+ páginas o una conversión (criterio de GA4).</p>
</div>`

const subject = `AgrauData web: ${users} visitantes esta semana (${delta(users, pUsers)})`

if (DRY) {
  console.log(subject)
  console.log(html)
} else {
  const resend = new Resend(need('RESEND_API_KEY'))
  const { error } = await resend.emails.send({
    from: need('EMAIL_FROM'),
    to: need('EMAIL_TO'),
    subject,
    html,
  })
  if (error) throw new Error(`Resend: ${error.message}`)
  console.log('Resumen enviado')
}
