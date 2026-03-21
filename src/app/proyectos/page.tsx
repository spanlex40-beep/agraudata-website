import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Proyectos — AgrauData',
  description:
    'Casos de éxito reales: automatización, control financiero y dashboards para hostelería, asesorías y autónomos.',
}

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <div className="bg-[#060B15] border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.svg" alt="AgrauData" style={{ height: '28px', width: 'auto' }} />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/sobre-mi" className="font-body text-sm text-[#64748B] hover:text-white transition-colors">
              Sobre mí
            </Link>
            <Link href="/#contacto" className="font-body text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-xl hover:bg-[#1D4ED8] transition-colors">
              Solicitar demo
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="text-xs font-body font-semibold text-[#2563EB] uppercase tracking-widest">
          Casos de éxito
        </span>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-4 leading-tight">
          Proyectos reales,<br />resultados concretos
        </h1>
        <p className="font-body text-[#94A3B8] text-lg max-w-xl">
          Ejemplos basados en proyectos reales con datos anonimizados. Cada caso parte de un problema
          concreto y termina con un resultado medible.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group bg-[#0F172A] border border-[#1E293B] rounded-2xl p-7 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Sector badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{project.sectorIcon}</span>
                <span className="font-body text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                  {project.sector}
                </span>
              </div>

              <h2 className="font-display font-bold text-lg text-white leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                {project.title}
              </h2>

              <p className="font-body text-sm text-[#64748B] leading-relaxed mb-6 flex-1">
                {project.shortDesc}
              </p>

              {/* Resultado destacado */}
              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 mb-5">
                <p className="font-body text-xs text-[#64748B] mb-0.5">Resultado</p>
                <p className="font-display font-bold text-sm text-[#c8f135]">{project.result}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs text-[#475569] bg-[#0A0F1E] border border-[#1E293B] px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="font-body text-sm text-[#2563EB] font-medium group-hover:underline underline-offset-4">
                Ver caso completo →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060B15] border-t border-[#1E293B]">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            ¿Tu negocio podría ser el siguiente?
          </h2>
          <p className="font-body text-[#94A3B8] mb-8">
            Cuéntame tu situación. En 48 horas te muestro qué se puede mejorar.
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
