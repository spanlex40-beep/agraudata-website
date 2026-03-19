'use client'

import { motion } from 'framer-motion'
import DashboardMockup from './DashboardMockup'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0F1E] flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB] opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left: copy */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#c8f135] bg-[#c8f135]/10 border border-[#c8f135]/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-pulse" />
              Especialistas en hostelería
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-5xl xl:text-[3.2rem] text-white leading-[1.1] tracking-tight mb-5"
          >
            Controla los costes.{' '}
            <span className="text-[#2563EB]">Conoce tu margen.</span>{' '}
            Gestiona con datos.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-body text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg"
          >
            Dashboards de ventas, control de stock, escandallos y automatización
            para restaurantes que quieren dejar de gestionar a ciegas.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-body font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1D4ED8] transition-colors duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.35)]"
            >
              Solicitar demo
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center gap-2 text-[#94A3B8] font-body font-medium px-7 py-3.5 rounded-xl border border-[#1E293B] hover:border-[#334155] hover:text-white transition-all duration-200"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            {...fadeUp(0.45)}
            className="mt-10 pt-8 border-t border-[#1E293B] flex items-center gap-6"
          >
            {[
              { value: '70%+', label: 'menos tiempo en reporting', green: true },
              { value: '€0', label: 'costes de plataforma SaaS', green: false },
              { value: '100%', label: 'tuyo, sin suscripciones', green: false },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`font-display font-bold text-lg ${stat.green ? 'text-[#c8f135]' : 'text-white'}`}>{stat.value}</p>
                <p className="text-xs text-[#64748B] leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: dashboard */}
        <div className="flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>

      {/* Bottom fade to light */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
    </section>
  )
}
