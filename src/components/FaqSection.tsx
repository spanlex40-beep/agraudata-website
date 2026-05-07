'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Necesito cambiar mi sistema actual?',
    a: 'No. Trabajo con lo que ya tienes. Un Excel, un informe del TPV, una exportación de tu software. No tienes que instalar nada ni cambiar cómo trabajas.',
  },
  {
    q: '¿Cuánto tiempo tarda?',
    a: 'La primera sesión es una conversación de 30-45 minutos. A partir de ahí depende del proyecto. Hay cosas que se resuelven en una semana y otras que llevan más. Te lo digo desde el principio, sin rodeos.',
  },
  {
    q: '¿Trabajas solo con hostelería?',
    a: 'Mi especialidad es hostelería, pero trabajo con cualquier negocio que tenga procesos manuales, datos sin orden o falta de control financiero. Si tienes ese problema, puedo ayudarte.',
  },
  {
    q: '¿Qué pasa si no ves que puedes ayudarme?',
    a: 'Te lo digo directamente. No voy a alargar una conversación si no veo valor real para ti. Prefiero no perder tu tiempo ni el mío.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del proyecto. Primero hablo contigo, entiendo lo que necesitas y entonces te doy un precio claro. Sin sorpresas, sin letra pequeña. El Time Manager tiene precio fijo: desde 29€.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-[#E8E8E4] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-[#0F0F1A] group-hover:text-[#4A4A5A] transition-colors duration-200 leading-snug">
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          open
            ? 'bg-[#c8f135] border-[#c8f135]'
            : 'border-[#E8E8E4] group-hover:border-[#c8f135]'
        }`}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          >
            <path d="M6 2v8M2 6h8" stroke={open ? '#0F0F1A' : '#6B6B7A'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-[#4A4A5A] leading-relaxed pb-5 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 leading-tight">
            Lo que suele preguntar<br />la gente antes de escribirme.
          </h2>
        </motion.div>

        {isInView && (
          <div className="bg-[#FAFAF8] rounded-2xl px-8 divide-y divide-[#E8E8E4] border border-[#E8E8E4]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
