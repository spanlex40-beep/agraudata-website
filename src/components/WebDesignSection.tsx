'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20gustar%C3%ADa%20ver%20una%20maqueta%20gratis%20para%20mi%20web.'

export default function WebDesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="web" className="py-16 bg-white border-t border-[#E8E8E4]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-body text-xs font-semibold text-[#6B6B7A] uppercase tracking-widest mb-1">
              También hago webs
            </p>
            <h3 className="font-display font-bold text-xl text-[#0F0F1A]">
              ¿No tienes web o la tienes anticuada?
            </h3>
            <p className="font-body text-sm text-[#6B6B7A] mt-1">
              Te hago una maqueta gratis para que veas cómo quedaría antes de decidir nada.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F0F1A] text-white font-body font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#1a1a2e] transition-colors duration-200 whitespace-nowrap"
          >
            Pedir maqueta gratis
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
