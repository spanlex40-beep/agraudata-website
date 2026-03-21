import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad — AgrauData',
  description: 'Información sobre el tratamiento de tus datos personales en AgrauData.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <div className="bg-[#060B15] border-b border-[#1E293B]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.svg" alt="AgrauData" style={{ height: '28px', width: 'auto' }} />
          </Link>
          <Link
            href="/"
            className="text-sm font-body text-[#64748B] hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
          Política de Privacidad
        </h1>
        <p className="font-body text-sm text-[#64748B] mb-12">
          Última actualización: marzo de 2025
        </p>

        <div className="space-y-10 font-body text-[#94A3B8] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),
              te informamos que el responsable del tratamiento de tus datos es:
            </p>
            <div className="mt-4 p-4 bg-[#0F172A] rounded-xl border border-[#1E293B] space-y-1 text-sm">
              <p><span className="text-white font-medium">Titular:</span> Alexandre Grau</p>
              <p><span className="text-white font-medium">Actividad:</span> Consultor de Automatización y Datos</p>
              <p><span className="text-white font-medium">Email de contacto:</span>{' '}
                <a href="mailto:info@agraudata.com" className="text-[#2563EB] hover:underline">
                  info@agraudata.com
                </a>
              </p>
              <p><span className="text-white font-medium">Web:</span> agraudata.com</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              2. Datos que recogemos
            </h2>
            <p>A través del formulario de contacto recogemos los siguientes datos:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Nombre y apellidos',
                'Dirección de correo electrónico',
                'Número de teléfono (opcional)',
                'Nombre del negocio (opcional)',
                'Sector de actividad',
                'Mensaje o consulta',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              No recogemos datos especialmente protegidos (salud, ideología, origen racial, etc.)
              ni datos de menores de 14 años.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              3. Finalidad y base jurídica del tratamiento
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#1E293B]">
                    <th className="text-left py-2 pr-6 text-white font-medium">Finalidad</th>
                    <th className="text-left py-2 text-white font-medium">Base jurídica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B]">
                  {[
                    ['Responder a tu consulta o solicitud de demo', 'Consentimiento (art. 6.1.a RGPD)'],
                    ['Enviarte información sobre servicios relacionados', 'Consentimiento (art. 6.1.a RGPD)'],
                    ['Registro interno de clientes potenciales', 'Interés legítimo (art. 6.1.f RGPD)'],
                  ].map(([fin, base]) => (
                    <tr key={fin}>
                      <td className="py-3 pr-6">{fin}</td>
                      <td className="py-3">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              4. Conservación de los datos
            </h2>
            <p>
              Tus datos se conservarán durante el tiempo necesario para gestionar tu solicitud y,
              en su caso, durante la relación comercial. Transcurrido dicho periodo, los datos
              serán bloqueados y posteriormente eliminados conforme a la normativa aplicable.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              5. Destinatarios y transferencias internacionales
            </h2>
            <p>
              Tus datos pueden ser tratados por los siguientes prestadores de servicios, con los
              que mantenemos acuerdos de tratamiento de datos conforme al RGPD:
            </p>
            <ul className="mt-3 space-y-3">
              {[
                {
                  name: 'Resend (resend.com)',
                  desc: 'Servicio de envío de emails transaccionales. Servidores en UE (Irlanda).',
                },
                {
                  name: 'Google Sheets / Google Cloud',
                  desc: 'Almacenamiento de registros de contacto. Google LLC, adherida al marco EU-US Data Privacy Framework.',
                },
                {
                  name: 'Google Gemini (Google AI)',
                  desc: 'Generación de respuestas personalizadas. Los datos se procesan de forma puntual y no se almacenan para entrenamiento.',
                },
                {
                  name: 'Vercel Inc.',
                  desc: 'Alojamiento web y ejecución de funciones serverless. Servidores en UE.',
                },
              ].map((p) => (
                <li key={p.name} className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1 flex-shrink-0">•</span>
                  <span>
                    <span className="text-white font-medium">{p.name}:</span> {p.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              No cedemos tus datos a terceros no autorizados ni los utilizamos con fines distintos
              a los indicados.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              6. Tus derechos
            </h2>
            <p>
              En cualquier momento puedes ejercer los siguientes derechos enviando un email a{' '}
              <a href="mailto:info@agraudata.com" className="text-[#2563EB] hover:underline">
                info@agraudata.com
              </a>{' '}
              indicando el derecho que deseas ejercer y adjuntando copia de tu documento de identidad:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['Acceso', 'Conocer qué datos tenemos sobre ti'],
                ['Rectificación', 'Corregir datos inexactos o incompletos'],
                ['Supresión', 'Solicitar la eliminación de tus datos'],
                ['Oposición', 'Oponerte a determinados tratamientos'],
                ['Limitación', 'Restringir el tratamiento en ciertos casos'],
                ['Portabilidad', 'Recibir tus datos en formato estructurado'],
              ].map(([title, desc]) => (
                <div key={title} className="p-3 bg-[#0F172A] rounded-lg border border-[#1E293B]">
                  <p className="text-white font-medium text-sm">{title}</p>
                  <p className="text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm">
              Si consideras que el tratamiento no cumple la normativa, puedes presentar una
              reclamación ante la{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline"
              >
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              7. Seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente
              a accesos no autorizados, pérdida o alteración. La web utiliza cifrado HTTPS, headers
              de seguridad y acceso restringido a los sistemas de almacenamiento.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              8. Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta política de privacidad para adaptarla a cambios legislativos
              o de nuestros servicios. La fecha de última actualización aparece al principio del
              documento. Te recomendamos revisarla periódicamente.
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E293B] mt-16 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] font-body">
          <span>© AgrauData · 2025</span>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
