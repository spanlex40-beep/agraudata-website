import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { google } from 'googleapis'

// ─── Rate limiting (in-memory, suficiente para un formulario de contacto) ────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3          // máx 3 envíos
const RATE_WINDOW = 60 * 60 * 1000  // por hora

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

// ─── Sanitización para HTML (evita XSS en emails) ────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim()
}

// ─── Validación de email ──────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

// ─── Validación de teléfono (solo caracteres seguros) ────────────────────────
function isValidPhone(phone: string): boolean {
  return phone === '' || /^[\d\s\+\-\(\)\.]{0,20}$/.test(phone)
}

// ─── Etiquetas por sector ─────────────────────────────────────────────────────
const ALLOWED_SECTORS = ['restaurante', 'clinica', 'asesoria', 'taller', 'autonomo', 'otro']

const SECTOR_LABELS: Record<string, string> = {
  restaurante: 'restaurante',
  clinica:     'clínica',
  asesoria:    'asesoría',
  taller:      'taller',
  autonomo:    'autónomo / freelance',
  otro:        'empresa',
}

// ─── HTML del email al usuario ────────────────────────────────────────────────
function buildUserEmail(name: string, business: string, message: string, aiParagraph: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F8F9FA;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F9FA;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0A0F1E;border-radius:16px 16px 0 0;padding:28px 40px;text-align:center;">
            <div style="display:inline-flex;align-items:center;gap:10px;">
              <!-- Mini bar chart logo -->
              <div style="display:inline-flex;align-items:flex-end;gap:3px;height:28px;vertical-align:middle;">
                <div style="width:5px;height:10px;background:#c8f135;opacity:0.25;border-radius:3px;display:inline-block;"></div>
                <div style="width:5px;height:16px;background:#c8f135;opacity:0.5;border-radius:3px;display:inline-block;"></div>
                <div style="width:5px;height:22px;background:#c8f135;opacity:0.75;border-radius:3px;display:inline-block;"></div>
                <div style="width:5px;height:28px;background:#c8f135;border-radius:3px;display:inline-block;"></div>
              </div>
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:24px;color:#ffffff;font-weight:300;vertical-align:middle;letter-spacing:-0.5px;">Agrau<span style="font-weight:700;color:#c8f135;">Data</span></span>
            </div>
            <p style="margin:8px 0 0;font-size:11px;color:#475569;text-transform:uppercase;letter-spacing:2px;">
              Automation &amp; Data Intelligence
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:40px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">
            <p style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0F172A;">
              Hola, ${name} 👋
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#64748B;line-height:1.6;">
              Hemos recibido tu mensaje${business ? ` sobre <strong style="color:#0F172A;">${business}</strong>` : ''} y nos pondremos en contacto contigo en breve.
            </p>

            <!-- AI paragraph box -->
            <div style="background:#F0F7FF;border-left:3px solid #2563EB;border-radius:8px;padding:20px 24px;margin-bottom:28px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#2563EB;text-transform:uppercase;letter-spacing:1.5px;">
                Lo que podemos hacer por ti
              </p>
              <p style="margin:0;font-size:14px;color:#0F172A;line-height:1.7;">
                ${aiParagraph}
              </p>
            </div>

            <!-- Message recap -->
            <div style="background:#F8F9FA;border-radius:8px;padding:16px 20px;margin-bottom:28px;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">
                Tu mensaje
              </p>
              <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;font-style:italic;">
                "${message}"
              </p>
            </div>

            <p style="margin:0;font-size:14px;color:#64748B;line-height:1.6;">
              Cualquier duda, puedes escribirnos directamente a
              <a href="mailto:info@agraudata.com" style="color:#2563EB;text-decoration:none;font-weight:600;">info@agraudata.com</a>.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0A0F1E;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#475569;">
              © AgrauData ·
              <span style="color:#c8f135;">Deja que los datos trabajen por ti.</span>
            </p>
            <p style="margin:6px 0 0;font-size:11px;color:#334155;">
              <a href="mailto:info@agraudata.com" style="color:#64748B;text-decoration:none;">info@agraudata.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ─── HTML del email interno ───────────────────────────────────────────────────
function buildInternalEmail(
  name: string, email: string, phone: string, business: string,
  message: string, sector: string, aiSuggestion: string
): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:32px;background:#F8F9FA;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:580px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #E2E8F0;overflow:hidden;">
    <div style="background:#0A0F1E;padding:20px 28px;">
      <p style="margin:0;font-size:14px;font-weight:700;color:#c8f135;">🔔 Nuevo lead — AgrauData</p>
    </div>
    <div style="padding:28px;">
      <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:20px;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#64748B;width:110px;">Nombre</td>
            <td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#0F172A;font-weight:600;">${name}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#64748B;">Email</td>
            <td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#2563EB;">
              <a href="mailto:${email}" style="color:#2563EB;">${email}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#64748B;">Teléfono</td>
            <td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#0F172A;">
              ${phone ? `<a href="tel:${phone}" style="color:#0F172A;text-decoration:none;">${phone}</a>` : '—'}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#64748B;">Negocio</td>
            <td style="padding:8px 0;border-bottom:1px solid #F1F5F9;font-size:13px;color:#0F172A;">${business || '—'}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748B;">Sector</td>
            <td style="padding:8px 0;font-size:13px;color:#0F172A;">${SECTOR_LABELS[sector] ?? sector}</td></tr>
      </table>

      <div style="background:#F8F9FA;border-radius:8px;padding:16px 20px;margin-bottom:20px;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;">Mensaje</p>
        <p style="margin:0;font-size:13px;color:#0F172A;line-height:1.7;">${message}</p>
      </div>

      <div style="background:#ECFDF5;border-left:3px solid #10B981;border-radius:8px;padding:16px 20px;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;">🤖 Respuesta sugerida por Gemini</p>
        <p style="margin:0;font-size:13px;color:#0F172A;line-height:1.7;">${aiSuggestion}</p>
      </div>
    </div>
  </div>
</body>
</html>`
}

// ─── Google Sheets: añadir fila ───────────────────────────────────────────────
async function appendToSheet(values: string[]) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheets = google.sheets({ version: 'v4', auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'A1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [values] },
  })
}

// ─── Handler principal ────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Inténtalo de nuevo en una hora.' },
        { status: 429 }
      )
    }

    // Parsear body
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Solicitud mal formada.' }, { status: 400 })
    }

    const name     = typeof body.name     === 'string' ? body.name.trim()     : ''
    const email    = typeof body.email    === 'string' ? body.email.trim()    : ''
    const phone    = typeof body.phone    === 'string' ? body.phone.trim()    : ''
    const business = typeof body.business === 'string' ? body.business.trim() : ''
    const message  = typeof body.message  === 'string' ? body.message.trim()  : ''
    const sector   = typeof body.sector   === 'string' ? body.sector.trim()   : 'otro'

    // Validaciones
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'El email no tiene un formato válido.' }, { status: 400 })
    }
    if (name.length > 100 || business.length > 200 || message.length > 3000 || phone.length > 20) {
      return NextResponse.json({ error: 'Algún campo supera la longitud máxima permitida.' }, { status: 400 })
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: 'El teléfono contiene caracteres no válidos.' }, { status: 400 })
    }
    const safeSector = ALLOWED_SECTORS.includes(sector) ? sector : 'otro'

    // Verificar variables de entorno
    const { RESEND_API_KEY, GEMINI_API_KEY, EMAIL_TO, EMAIL_FROM } = process.env
    if (!RESEND_API_KEY || !GEMINI_API_KEY || !EMAIL_TO || !EMAIL_FROM) {
      console.error('[contact] Faltan variables de entorno')
      return NextResponse.json({ error: 'Error de configuración. Inténtalo más tarde.' }, { status: 500 })
    }

    // Sanitizar para HTML
    const safeName     = escapeHtml(name)
    const safeEmail    = escapeHtml(email)
    const safePhone    = escapeHtml(phone)
    const safeBusiness = escapeHtml(business)
    const safeMessage  = escapeHtml(message)
    const sectorLabel  = SECTOR_LABELS[safeSector] ?? 'empresa'

    // ── Gemini: generar párrafo personalizado ──────────────────────────────
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

    const prompt = `Eres el asistente de AgrauData, consultora especializada en automatización y datos para negocios.
Un potencial cliente del sector "${sectorLabel}" ha enviado este mensaje: "${message}"
Su negocio se llama: ${business || 'no especificado'}.

Escribe exactamente 3 líneas en español para incluir en su email de confirmación.
Cada línea debe empezar con un emoji relevante y describir un servicio concreto que AgrauData puede hacer por ese sector.
Ejemplos de servicios según sector:
- Restaurante: dashboards de ventas, escandallos digitales, control de stock y mermas, food cost, cuadrantes de personal
- Clínica: KPIs de facturación por profesional, control de agenda, automatización administrativa
- Asesoría: seguimiento de cartera de clientes, informes automáticos, control de rentabilidad por expediente
- Taller: control de stock de piezas, órdenes de trabajo digitales, rentabilidad por reparación
- Autónomo: control de proyectos y horas, seguimiento de facturación, dashboard de ingresos

Formato exacto (3 líneas, sin texto adicional):
📊 [servicio concreto 1 para ${sectorLabel}]
⚙️ [servicio concreto 2 para ${sectorLabel}]
📈 [servicio concreto 3 para ${sectorLabel}]`

    const FALLBACKS: Record<string, string> = {
      restaurante: '📊 Dashboard de ventas en tiempo real: food cost, margen y ticket medio de un vistazo\n⚙️ Escandallos digitales con el coste real por plato siempre actualizado\n📦 Control de stock y alertas automáticas de mermas para no perder ni un euro',
      clinica:     '📊 KPIs de facturación por profesional y por tipo de servicio\n⚙️ Control de agenda y tasa de ocupación para optimizar los huecos\n📋 Automatización de reportes administrativos y recordatorios',
      asesoria:    '📊 Seguimiento de cartera de clientes con estado y fechas clave de cada expediente\n⚙️ Generación automática de informes periódicos por cliente\n💰 Control de rentabilidad: horas invertidas vs facturación por cliente',
      taller:      '📦 Control de stock de piezas con alertas de mínimos y rotación de material\n⚙️ Órdenes de trabajo digitales con coste real por intervención\n📊 Análisis de rentabilidad por tipo de reparación para saber qué da más margen',
      autonomo:    '⏱️ Control de proyectos y horas: tiempo real invertido por cliente\n📊 Dashboard de ingresos mensual con evolución y proyección anual\n💰 Seguimiento de facturación: emitido, cobrado y pendiente siempre visible',
      otro:        '📊 Dashboard de control con los KPIs más importantes de tu negocio\n⚙️ Automatización de procesos repetitivos para ahorrar horas cada semana\n💻 Herramientas a medida que se adaptan a tu forma de trabajar, sin suscripciones',
    }

    let aiParagraph = (FALLBACKS[safeSector] ?? FALLBACKS['otro']).split('\n').join('<br>')

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
      const result = await model.generateContent(prompt)
      const text = result.response.text().trim()
      if (text.length > 20) {
        // Escapar HTML pero conservar saltos de línea como <br>
        aiParagraph = text
          .split('\n')
          .map((line) => escapeHtml(line.trim()))
          .filter(Boolean)
          .join('<br>')
      }
    } catch (err) {
      console.error('[contact] Gemini error:', err)
      // Fallback por sector — el resto del flujo continúa
    }

    // ── Resend: email al usuario ───────────────────────────────────────────
    const resend = new Resend(RESEND_API_KEY)

    await resend.emails.send({
      from:    `AgrauData <${EMAIL_FROM}>`,
      to:      email,
      subject: `Hemos recibido tu mensaje, ${name}`,
      html:    buildUserEmail(safeName, safeBusiness, safeMessage, aiParagraph),
    })

    // ── Resend: email interno ──────────────────────────────────────────────
    await resend.emails.send({
      from:    `AgrauData Web <${EMAIL_FROM}>`,
      to:      EMAIL_TO,
      subject: `🔔 Nuevo lead: ${name} — ${sectorLabel}`,
      html:    buildInternalEmail(safeName, safeEmail, safePhone, safeBusiness, safeMessage, safeSector, aiParagraph),
    })

    // ── Google Sheets: guardar lead ────────────────────────────────────────
    const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })
    try {
      await appendToSheet([fecha, name, email, phone, business, SECTOR_LABELS[safeSector] ?? safeSector, message])
    } catch (err) {
      console.error('[contact] Google Sheets error:', err)
      // No bloqueamos la respuesta si Sheets falla
    }

    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('[contact] Error inesperado:', err)
    return NextResponse.json(
      { error: 'Error interno. Inténtalo más tarde.' },
      { status: 500 }
    )
  }
}
