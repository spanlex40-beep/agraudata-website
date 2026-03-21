import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — AgrauData`,
    description: project.shortDesc,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Top bar */}
      <div className="bg-[#060B15] border-b border-[#1E293B]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.svg" alt="AgrauData" style={{ height: '28px', width: 'auto' }} />
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-body text-sm text-[#64748B] hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver a proyectos
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Sector badge */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-2xl">{project.sectorIcon}</span>
          <span className="font-body text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
            {project.sector}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-3 leading-tight">
          {project.title}
        </h1>

        <p className="font-body text-sm text-[#475569] mb-12">
          {project.client}
        </p>

        {/* Description */}
        <div className="bg-[#0F172A] rounded-2xl p-8 border border-[#1E293B] mb-6">
          <h2 className="font-body text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-4">
            El caso
          </h2>
          <p className="font-body text-[#94A3B8] leading-relaxed">{project.longDesc}</p>
        </div>

        {/* Resultado principal */}
        <div className="bg-[#0F172A] rounded-2xl p-6 mb-4 border border-[#c8f135]/20">
          <p className="font-body text-xs font-semibold text-[#c8f135] uppercase tracking-wider mb-2">
            Resultado clave
          </p>
          <p className="font-display font-bold text-2xl text-white">{project.result}</p>
        </div>

        {/* Resultado detalle */}
        <div className="bg-[#0F172A] rounded-2xl p-6 mb-8 border border-[#1E293B]">
          <h2 className="font-body text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
            En detalle
          </h2>
          <p className="font-body text-[#94A3B8] leading-relaxed">{project.resultDetail}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-14">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-sm text-[#475569] bg-[#0F172A] border border-[#1E293B] px-3 py-1.5 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[#1E293B] pt-10">
          <p className="font-body text-[#64748B] mb-5">
            ¿Tu negocio tiene un reto similar?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-body font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#1D4ED8] transition-colors"
            >
              Solicitar demo gratuita
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 border border-[#1E293B] text-[#94A3B8] font-body text-sm px-6 py-3 rounded-xl hover:border-[#2563EB] hover:text-white transition-colors"
            >
              Ver más proyectos
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E293B] mt-10 py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] font-body">
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
