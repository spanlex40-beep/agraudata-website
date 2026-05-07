'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const sections = [
  {
    label: 'El principio',
    text: 'Empecé en sala. Maître, jefe de sala. Viví la operativa real: turnos, proveedores, costes que nadie controlaba de verdad.',
  },
  {
    label: 'El cambio',
    text: 'Pasé al control financiero. Y vi lo mismo desde otro ángulo: los números estaban ahí, pero nadie los estaba leyendo bien.',
  },
  {
    label: 'Lo que hago ahora',
    text: 'Ayudo a negocios a ver lo que tienen. No llego con una presentación. Llego con tus propios datos y te muestro dónde se va el dinero.',
  },
]

const bullets = [
  '15+ años en hostelería y control financiero',
  'Trabajo con tus datos reales, no con ejemplos',
  'Sin cuotas mensuales, sin letra pequeña',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="quien-soy" className="py-24 bg-[#FAFAF8] border-t border-[#E8E8E4]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#c8f135]/20" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_16px_48px_rgba(15,15,26,0.1)]">
              <Image
                src="/foto/hero.png"
                alt="Alexandre — AgrauData"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
                Quién soy
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] leading-tight mt-3 mb-4">
                He estado dentro del negocio.<br />
                <span className="text-[#6B6B7A] font-bold">No hablo desde fuera.</span>
              </h2>
            </motion.div>

            {/* Secciones */}
            <div className="space-y-8 mb-10">
              {sections.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-1.5">
                    {s.label}
                  </p>
                  <p className="font-body text-base text-[#0F0F1A] leading-relaxed">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bloque cita */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-7 mb-6"
            >
              {/* Comillas */}
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden className="mb-5 opacity-40">
                <path d="M0 22V13.6C0 9.87 1.08 6.8 3.24 4.38 5.4 1.96 8.4.4 12.24 0l1.08 2.16C9.72 2.88 7.44 4.08 5.88 5.76 4.32 7.44 3.6 9.36 3.6 11.52h3.84V22H0zm15.12 0V13.6c0-3.73 1.08-6.8 3.24-9.22C20.52 1.96 23.52.4 27.36 0l1.08 2.16c-3.6.72-5.88 1.92-7.44 3.6-1.56 1.68-2.28 3.6-2.28 5.76h3.84V22h-7.44z" fill="#c8f135"/>
              </svg>

              <p className="font-display font-black text-xl text-white leading-snug mb-5">
                No soy una agencia.<br />
                <span className="text-[#c8f135]">Trabajo contigo.</span>
              </p>
              <p className="font-body text-sm text-[#94A3B8] leading-relaxed mb-6">
                No te mando un informe y desaparezco.<br />
                Me siento contigo, entiendo tu negocio<br />
                y buscamos juntos dónde mejorar.<br /><br />
                Si no veo que puedo ayudarte, te lo digo.
              </p>
              <p className="font-body text-xs text-[#4A4A5A] tracking-wide">— Alexandre</p>
            </motion.div>

            {/* Bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.52 }}
              className="space-y-3"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                      <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-sm text-[#4A4A5A]">{b}</span>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  )
}
