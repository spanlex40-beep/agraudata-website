'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'Automatización de procesos',
  'Business Intelligence',
  'Análisis financiero',
  'Excel avanzado + VBA',
  'Power BI',
  'Herramientas internas',
  'Optimización operativa',
  'Gestión de datos',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="text-xs font-body font-semibold text-[#0047FF] uppercase tracking-widest">
              Sobre mí
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F0F1A] mt-2 mb-6 leading-tight">
              Soluciones prácticas,<br />no solo informes
            </h2>

            <div className="space-y-4 font-body text-[#6B6B7A] leading-relaxed">
              <p>
                Trabajo ayudando a empresas a mejorar su forma de trabajar mediante
                automatización y análisis de datos.
              </p>
              <p>
                Mi enfoque no es solo crear dashboards o informes, sino construir sistemas
                que realmente se usan en el día a día: control financiero, planificación
                de recursos, automatización de tareas y organización de la información.
              </p>
              <p>
                Combino experiencia real en gestión empresarial con herramientas técnicas
                para crear soluciones prácticas, claras y escalables.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="font-display font-semibold text-xs text-[#0F0F1A] uppercase tracking-wider mb-3">
                Especialidades
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm text-[#0F0F1A] bg-[#F7F6F3] border border-[#E3E1DC] px-3 py-1.5 rounded-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Base card */}
              <div className="absolute inset-0 rounded-3xl bg-[#E8EFFF]" />

              {/* Decorative shapes */}
              <div className="absolute top-10 right-10 w-28 h-28 rounded-2xl bg-[#0047FF] opacity-10" />
              <div className="absolute bottom-16 left-10 w-20 h-20 rounded-full bg-[#0047FF] opacity-8" />
              <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/60" />

              {/* Center logo card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white rounded-3xl shadow-[0_8px_32px_rgba(0,71,255,0.14)] flex items-center justify-center">
                <span className="font-display font-extrabold text-4xl text-[#0047FF] tracking-tight">
                  AG
                </span>
              </div>

              {/* Stat card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute bottom-10 right-8 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-4"
              >
                <p className="font-body text-xs text-[#6B6B7A] mb-0.5">Tiempo ahorrado</p>
                <p className="font-display font-extrabold text-2xl text-[#0047FF]">70%+</p>
              </motion.div>

              {/* Top label */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute top-8 right-14 bg-white rounded-xl shadow-sm px-3 py-2"
              >
                <p className="font-body text-xs text-[#0F0F1A] font-medium">Automatización real</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
