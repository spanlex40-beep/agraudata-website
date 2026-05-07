'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const benefits = [
  { stat: '5 min', label: 'para hacer el cuadrante de la semana' },
  { stat: '0€', label: 'de cuota mensual. Pagas una vez.' },
  { stat: '30 días', label: 'de prueba gratis, sin tarjeta' },
]

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20quiero%20probar%20Time%20Manager%20gratis.'

export default function TimeManagerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="time-manager" className="py-24 bg-[#0F0F1A]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Izquierda — texto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-pulse" />
              Producto
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
              ¿Sigues haciendo<br />los cuadrantes a mano?
            </h2>
            <p className="font-body text-[#94A3B8] text-lg leading-relaxed mb-8">
              Time Manager organiza tus turnos, controla horas y evita errores. En 5 minutos tienes el cuadrante de la semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/time-manager"
                className="inline-flex items-center justify-center gap-2 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-7 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200"
              >
                Ver Time Manager
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[#c8f135] font-body font-semibold text-base px-7 py-4 rounded-xl border border-[#c8f135]/30 hover:border-[#c8f135]/70 hover:bg-[#c8f135]/5 transition-all duration-200"
              >
                Prueba gratis 30 días
              </a>
            </div>
          </motion.div>

          {/* Derecha — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
              >
                <span className="font-display font-black text-3xl text-[#c8f135] flex-shrink-0 w-20 text-center">
                  {b.stat}
                </span>
                <span className="font-body text-[#94A3B8] leading-snug">{b.label}</span>
              </motion.div>
            ))}

            <div className="text-center pt-2">
              <span className="font-body text-xs text-[#4A4A5A]">
                Desde 29€ · Pago único · Windows · Sin internet
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
