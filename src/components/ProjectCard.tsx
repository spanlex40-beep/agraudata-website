'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group bg-white rounded-2xl p-6 border border-[#E3E1DC] shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,71,255,0.12),0_24px_48px_rgba(0,0,0,0.08)] hover:border-[#C8D8FF] transition-shadow duration-300 cursor-pointer h-full flex flex-col"
    >
      <Link href={`/proyectos/${project.slug}`} className="flex flex-col flex-1">
        {/* Sector badge */}
        <div className="mb-4">
          <span className="inline-block text-xs font-body font-semibold text-[#0047FF] bg-[#E8EFFF] px-3 py-1 rounded-full">
            {project.sector}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2 group-hover:text-[#0047FF] transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="font-body text-sm text-[#6B6B7A] mb-5 leading-relaxed flex-1">
          {project.shortDesc}
        </p>

        {/* Result highlight */}
        <div className="bg-[#F7F6F3] rounded-xl p-3.5 mb-4">
          <p className="text-[0.7rem] font-body font-semibold text-[#0F0F1A] uppercase tracking-wider mb-1">
            Resultado clave
          </p>
          <p className="text-sm font-body text-[#6B6B7A]">{project.result}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body text-[#6B6B7A] bg-[#F7F6F3] border border-[#E3E1DC] px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow hint */}
        <div className="mt-4 flex items-center gap-1 text-[#0047FF] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="font-body text-sm font-medium">Ver proyecto</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}
