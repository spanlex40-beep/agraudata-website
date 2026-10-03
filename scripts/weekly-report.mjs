// Resumen semanal de visitas (Umami propio) -> email con Resend.
// Uso: node scripts/weekly-report.mjs [--dry]   (--dry imprime el email sin enviarlo)
import { Resend } from 'resend'

const DRY = process.argv.includes('--dry')
const DAY = 24 * 60 * 60 * 1000

function need(name) {
  const v = process.env[name]
  if (!v) throw new Error(`Falta la variable ${name}`)
  return v
}

const baseUrl = need('UMAMI_URL').replace(/\/$/, '')
const websiteId = need('UMAMI_WEBSITE_ID')

async function api(path, { token, body } = {}) {
  const res = await fetch(`${baseUrl}/api${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`Umami ${path}: HTTP ${res.status}`)
  return res.json()
}

const { token } = await api('/auth/login', {
  body: { username: need('UMAMI_USERNAME'), password: need('UMAMI_PASSWORD') },
})
if (!token) throw new Error('Umami no devolvio token de sesion')

// Ventanas de 7 dias terminando a las 00:00 UTC de hoy (el dia en curso queda fuera).
const end = Math.floor(Date.now() / DAY) * DAY
const cur = { startAt: end - 7 * DAY, endAt: end }
const prev = { startAt: end - 14 * DAY, endAt: end - 7 * DAY }

// Umami 2.x devuelve {valor:{value,prev}}; 3.x devuelve numeros planos. Aceptamos ambos.
const val = (v) => (v && typeof v === 'object' ? Number(v.value ?? 0) : Number(v ?? 0))

async function stats(range) {
  const s = await api(`/websites/${websiteId}/stats?startAt=${range.startAt}&endAt=${range.endAt}`, { token })
  return {
    pageviews: val(s.pageviews),
    visitors: val(s.visitors),
    visits: val(s.visits),
    bounces: val(s.bounces),
    totaltime: val(s.totaltime),
  }
}

async function metrics(types, range) {
  for (const type of types) {
    try {
      return await api(
        `/websites/${websiteId}/metrics?type=${type}&startAt=${range.startAt}&endAt=${range.endAt}&limit=8`,
        { token },
      )
    } catch (e) {
      if (type === types[types.length - 1]) throw e
    }
  }
  return []
}

const [now, before, pages, referrers] = await Promise.all([
  stats(cur),
  stats(prev),
  metrics(['path', 'url'], cur),
  metrics(['referrer'], cur),
])

const fmtSecs = (s) => `${Math.floor(s / 60)}m ${String(Math.round(s % 60)).padStart(2, '0')}s`
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function delta(c, p) {
  if (!p) return c ? 'nuevo' : '–'
  const pct = Math.round(((c - p) / p) * 100)
  return `${pct > 0 ? '+' : ''}${pct}%`
}

const readers = Math.max(now.visits - now.bounces, 0)
const readRate = now.visits ? Math.round((readers / now.visits) * 100) : 0
const avg = now.visits ? now.totaltime / now.visits : 0

const rowsPages = pages
  .map((r) => `<tr><td>${esc(r.x || '/')}</td><td align="right">${Number(r.y)}</td></tr>`)
  .join('')
const rowsSources = referrers
  .map((r) => `<tr><td>${esc(r.x || 'Directo / WhatsApp / correo')}</td><td align="right">${Number(r.y)}</td></tr>`)
  .join('')

const html = `
<div style="font-family:Arial,sans-serif;max-width:560px;color:#111">
  <h2 style="margin:0 0 4px">AgrauData — resumen semanal</h2>
  <p style="margin:0 0 16px;color:#666">Últimos 7 días (hasta ayer) vs. los 7 anteriores</p>
  <table cellpadding="6" style="border-collapse:collapse;width:100%">
    <tr><td><b>Visitantes</b></td><td align="right">${now.visitors} (${delta(now.visitors, before.visitors)})</td></tr>
    <tr><td><b>Visitas</b></td><td align="right">${now.visits} (${delta(now.visits, before.visits)})</td></tr>
    <tr><td><b>Visitas que navegaron más de una página</b></td><td align="right">${readers} (${readRate}%)</td></tr>
    <tr><td><b>Tiempo medio por visita</b></td><td align="right">${fmtSecs(avg)}</td></tr>
  </table>
  <h3>Páginas más vistas</h3>
  <table cellpadding="4" style="width:100%"><tr style="color:#666"><td>Página</td><td align="right">Vistas</td></tr>${rowsPages || '<tr><td colspan="2">Sin datos</td></tr>'}</table>
  <h3>De dónde vienen</h3>
  <table cellpadding="4" style="width:100%"><tr style="color:#666"><td>Origen</td><td align="right">Visitas</td></tr>${rowsSources || '<tr><td colspan="2">Sin datos</td></tr>'}</table>
  <p style="color:#888;font-size:12px">Analítica propia sin cookies. "Navegaron más de una página" = visitas que no rebotaron.</p>
</div>`

const subject = `AgrauData web: ${now.visitors} visitantes esta semana (${delta(now.visitors, before.visitors)})`

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
