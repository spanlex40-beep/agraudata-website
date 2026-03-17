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
    <main className="min-h-screen bg-[#F7F6F3]">
      {/* Top bar */}
      <div className="border-b border-[#E3E1DC] bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-[#6B6B7A] hover:text-[#0047FF] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver al portfolio
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Sector */}
        <div className="mb-4">
          <span className="inline-block text-xs font-body font-semibold text-[#0047FF] bg-[#E8EFFF] px-3 py-1 rounded-full">
            {project.sector}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#0F0F1A] mb-3 leading-tight">
          {project.title}
        </h1>

        <p className="font-body text-sm text-[#6B6B7A] mb-12">
          Cliente: {project.client}
        </p>

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 border border-[#E3E1DC] mb-6">
          <h2 className="font-display font-semibold text-sm text-[#0F0F1A] uppercase tracking-wider mb-3">
            Descripción
          </h2>
          <p className="font-body text-[#0F0F1A] leading-relaxed">{project.longDesc}</p>
        </div>

        {/* Result */}
        <div className="bg-[#E8EFFF] rounded-2xl p-6 mb-8 border border-[#C8D8FF]">
          <p className="font-body text-xs font-semibold text-[#0047FF] uppercase tracking-wider mb-1">
            Resultado clave
          </p>
          <p className="font-display font-bold text-xl text-[#0F0F1A]">{project.result}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-sm text-[#0F0F1A] bg-white border border-[#E3E1DC] px-3 py-1.5 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[#E3E1DC] pt-10">
          <p className="font-body text-[#6B6B7A] mb-4">
            ¿Te interesa algo similar para tu empresa?
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#0047FF] text-white font-body font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#0038CC] transition-colors duration-200"
          >
            Hablemos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
