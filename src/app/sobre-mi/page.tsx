import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre mí — Alexandre Grau · AgrauData',
  description:
    'Consultor especialista en automatización y control de datos para hostelería y pymes. Experiencia real en control financiero de hoteles y restaurantes.',
}

const skills = [
  { name: 'Power BI', desc: 'Dashboards e informes interactivos', icon: '📊' },
  { name: 'Excel Avanzado + VBA', desc: 'Macros, modelos financieros y automatización interna', icon: '📗' },
  { name: 'SQL', desc: 'Extracción y consulta de bases de datos', icon: '🗄️' },
  { name: 'Python', desc: 'Automatización y análisis de datos', icon: '🐍' },
  { name: 'n8n', desc: 'Automatización de flujos entre sistemas', icon: '⚙️' },
  { name: 'Google Sheets', desc: 'Reporting ágil y colaborativo', icon: '📋' },
]

const values = [
  { number: '2', label: 'Programas propios desarrollados desde cero' },
  { number: '70%', label: 'Reducción media de tiempo en tareas manuales' },
  { number: '100%', label: 'Soluciones a medida, sin plantillas' },
]

export default function SobreMiPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <div className="bg-[#060B15] border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.svg" alt="AgrauData" style={{ height: '28px', width: 'auto' }} />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/proyectos" className="font-body text-sm text-[#64748B] hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="/#contacto" className="font-body text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-xl hover:bg-[#1D4ED8] transition-colors">
              Solicitar demo
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Foto */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2563EB]/30 to-[#c8f135]/10 blur-xl" />
              <img
                src="/Alexandre.jpg"
                alt="Alexandre Grau — AgrauData"
                className="relative w-72 h-80 object-cover object-top rounded-3xl border border-[#1E293B]"
                style={{ objectPosition: 'center 10%' }}
              />
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl px-4 py-3 shadow-xl">
                <p className="font-body text-xs text-[#64748B]">Especialidad</p>
                <p className="font-display font-bold text-sm text-white">Hostelería & Pymes</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 lg:order-1">
            <span className="text-xs font-body font-semibold text-[#2563EB] uppercase tracking-widest">
              Sobre mí
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-6 leading-tight">
              Alexandre Grau
            </h1>

            {/* Frase clave */}
            <div className="border-l-4 border-[#c8f135] pl-5 mb-8">
              <p className="font-display font-semibold text-lg text-white leading-snug">
                "No vendo tecnología. Te ayudo a ahorrar tiempo, reducir errores y ganar dinero con tus datos."
              </p>
            </div>

            <div className="space-y-4 font-body text-[#94A3B8] leading-relaxed">
              <p>
                Soy especialista en control y automatización de procesos en hostelería.
                Durante años he trabajado en el control financiero de hoteles y restaurantes,
                analizando costes, ventas y operativa diaria.
              </p>
              <p>
                He visto el mismo problema una y otra vez: negocios que pierden tiempo y
                dinero por procesos manuales, falta de control y herramientas mal utilizadas.
              </p>
              <p>
                Con AgrauData ayudo a solucionar eso: automatizo tareas, organizo la
                información y convierto los datos en decisiones claras que mejoran la
                rentabilidad del negocio.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contacto"
                className="font-body text-sm font-semibold bg-[#2563EB] text-white px-6 py-3 rounded-xl hover:bg-[#1D4ED8] transition-colors"
              >
                Solicitar demo gratuita →
              </Link>
              <Link
                href="/proyectos"
                className="font-body text-sm font-medium border border-[#1E293B] text-[#94A3B8] px-6 py-3 rounded-xl hover:border-[#2563EB] hover:text-white transition-colors"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="border-y border-[#1E293B] bg-[#060B15]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.label} className="text-center">
                <p className="font-display font-extrabold text-4xl text-[#c8f135]">{v.number}</p>
                <p className="font-body text-sm text-[#64748B] mt-1">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="text-xs font-body font-semibold text-[#2563EB] uppercase tracking-widest">
          Herramientas
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white mt-2 mb-10">
          Con lo que trabajo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 hover:border-[#2563EB]/50 transition-colors"
            >
              <span className="text-2xl mb-3 block">{skill.icon}</span>
              <p className="font-display font-semibold text-white text-base">{skill.name}</p>
              <p className="font-body text-sm text-[#64748B] mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#060B15] border-t border-[#1E293B]">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¿Hablamos de tu negocio?
          </h2>
          <p className="font-body text-[#94A3B8] mb-8">
            Sin compromiso. En 48 horas te muestro qué se puede mejorar y cómo lo haríamos.
          </p>
          <Link
            href="/#contacto"
            className="inline-block font-body text-sm font-semibold bg-[#2563EB] text-white px-8 py-4 rounded-xl hover:bg-[#1D4ED8] transition-colors"
          >
            Solicitar demo gratuita →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-[#1E293B] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] font-body">
          <span>© AgrauData · 2025</span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
