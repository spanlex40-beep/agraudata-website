'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F6F3]">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8EFFF] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#FFF3EE] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-[#E8EFFF] blur-2xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-[#E8EFFF] text-[#0047FF] text-sm font-body font-medium px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] animate-pulse" />
            Automation & Data Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-[5.25rem] text-[#0F0F1A] leading-[1.04] tracking-tight mb-6 max-w-4xl"
        >
          Automate your business.{' '}
          <span className="text-[#0047FF]">Control your data.</span>{' '}
          Make better decisions.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.22)}
          className="font-body text-lg md:text-xl text-[#6B6B7A] max-w-2xl mb-12 leading-relaxed"
        >
          Ayudo a empresas a eliminar tareas manuales, organizar su información y
          construir sistemas que funcionan todos los días.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.34)}>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 bg-[#0047FF] text-white font-body font-semibold text-base px-8 py-4 rounded-2xl hover:bg-[#0038CC] transition-colors duration-200 shadow-[0_4px_16px_rgba(0,71,255,0.24)]"
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-body text-xs text-[#6B6B7A]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#6B6B7A] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
