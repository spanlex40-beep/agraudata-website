import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal — AgrauData',
  description: 'Aviso legal e información sobre el titular del sitio web AgrauData.',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
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
          Aviso Legal
        </h1>
        <p className="font-body text-sm text-[#64748B] mb-12">
          Última actualización: marzo de 2025
        </p>

        <div className="space-y-10 font-body text-[#94A3B8] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              1. Datos identificativos del titular
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de
              la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes
              datos del titular del sitio web:
            </p>
            <div className="mt-4 p-4 bg-[#0F172A] rounded-xl border border-[#1E293B] space-y-1.5 text-sm">
              <p><span className="text-white font-medium">Titular:</span> Alexandre Grau</p>
              <p><span className="text-white font-medium">Actividad:</span> Consultoría de Automatización y Datos</p>
              <p>
                <span className="text-white font-medium">Email:</span>{' '}
                <a href="mailto:info@agraudata.com" className="text-[#2563EB] hover:underline">
                  info@agraudata.com
                </a>
              </p>
              <p><span className="text-white font-medium">Sitio web:</span> agraudata.com</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el uso del sitio web <strong className="text-white">agraudata.com</strong>{' '}
              (en adelante, "el sitio web"), del que es titular Alexandre Grau.
            </p>
            <p className="mt-3">
              El acceso y uso del sitio web implica la aceptación plena y sin reservas de las
              presentes condiciones legales. El titular se reserva el derecho a modificar el
              contenido de este aviso en cualquier momento.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              3. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código
              fuente, estructura y selección de contenidos) son propiedad de Alexandre Grau o
              de terceros que han autorizado su uso, y están protegidos por la legislación
              vigente en materia de propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública o transformación
              total o parcial de los contenidos de este sitio web sin autorización expresa y por
              escrito del titular.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              4. Condiciones de uso
            </h2>
            <p>El usuario se compromete a:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Usar el sitio web de forma lícita y conforme a la buena fe.',
                'No introducir contenidos ilícitos, dañinos o que vulneren derechos de terceros.',
                'No utilizar el sitio web para enviar comunicaciones comerciales no solicitadas.',
                'No realizar acciones que dañen, inutilicen o deterioren el sitio web o sus sistemas.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              5. Exclusión de responsabilidad
            </h2>
            <p>
              El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza
              que pudieran derivarse del uso del sitio web, de la imposibilidad de acceso al mismo,
              o del uso de información contenida en él.
            </p>
            <p className="mt-3">
              El sitio web puede contener enlaces a webs de terceros. El titular no controla
              dichos sitios y no asume ninguna responsabilidad sobre sus contenidos o políticas
              de privacidad.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              6. Política de cookies
            </h2>
            <p>
              Este sitio web no utiliza cookies de seguimiento ni publicidad de terceros.
              Únicamente se utilizan cookies técnicas estrictamente necesarias para el
              funcionamiento del sitio (sesión, preferencias de usuario), que no requieren
              consentimiento del usuario según la normativa vigente.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-semibold text-lg text-white mb-3">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier
              controversia derivada del uso de este sitio web, las partes se someten,
              con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales
              competentes conforme a la normativa vigente.
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E293B] mt-16 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] font-body">
          <span>© AgrauData · 2025</span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
