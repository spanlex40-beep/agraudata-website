'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const options = [
  {
    href: '/hosteleria',
    label: 'SOY HOSTELERO',
    sub: 'Controla costes, personal y márgenes.',
    cta: 'Ver cómo te ayudo',
    dark: true,
  },
  {
    href: '/negocios',
    label: 'TENGO OTRO NEGOCIO',
    sub: 'Ordena tus datos. Automatiza lo que sobra.',
    cta: 'Ver cómo te ayudo',
    dark: false,
  },
  {
    href: '/productos',
    label: 'QUIERO HERRAMIENTAS',
    sub: 'Software, webs o algo hecho a medida.',
    cta: 'Ver productos',
    dark: false,
  },
]

export default function HubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 bg-white border-t border-[#E8E8E4]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35 }}
          className="font-body text-xs font-semibold text-[#9B9BA8] uppercase tracking-widest mb-8"
        >
          ¿Qué describes mejor tu situación?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((opt, i) => (
            <motion.a
              key={opt.href}
              href={opt.href}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group flex flex-col justify-between rounded-2xl p-8 border transition-all duration-200 hover:-translate-y-1 ${
                opt.dark
                  ? 'bg-[#0F0F1A] border-[#0F0F1A] hover:border-[#c8f135] hover:shadow-[0_12px_40px_rgba(15,15,26,0.2)]'
                  : 'bg-[#FAFAF8] border-[#E8E8E4] hover:border-[#0F0F1A] hover:shadow-[0_8px_24px_rgba(15,15,26,0.07)]'
              }`}
            >
              <div>
                <p className={`font-display font-black text-xl md:text-2xl leading-tight mb-3 ${opt.dark ? 'text-white' : 'text-[#0F0F1A]'}`}>
                  {opt.label}
                </p>
                <p className={`font-body text-sm leading-snug ${opt.dark ? 'text-[#6B6B7A]' : 'text-[#6B6B7A]'}`}>
                  {opt.sub}
                </p>
              </div>

              <div className={`mt-8 inline-flex items-center gap-2 font-body font-bold text-sm ${opt.dark ? 'text-[#c8f135]' : 'text-[#0F0F1A]'}`}>
                {opt.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
