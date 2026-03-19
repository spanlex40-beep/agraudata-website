'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '📊',
    title: 'Dashboards',
    desc: 'KPIs en tiempo real para tomar decisiones con datos, no con intuición.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: '🌐',
    title: 'Páginas web',
    desc: 'Sitios profesionales, rápidos y diseñados para convertir visitas en clientes.',
    color: '#7C3AED',
    bg: '#FAF5FF',
  },
  {
    icon: '⚙️',
    title: 'Automatización',
    desc: 'Elimina tareas repetitivas. Tus procesos trabajan solos mientras tú te enfocas en lo importante.',
    color: '#16A34A',
    bg: '#F0FDF4',
  },
  {
    icon: '💻',
    title: 'Herramientas a medida',
    desc: 'Software personalizado que se adapta a cómo trabajas tú, sin suscripciones mensuales.',
    color: '#EA580C',
    bg: '#FFF7ED',
  },
  {
    icon: '📈',
    title: 'Análisis de datos',
    desc: 'Convierte tus datos en informes claros y accionables para dirección.',
    color: '#0891B2',
    bg: '#ECFEFF',
  },
  {
    icon: '📦',
    title: 'Control de stock',
    desc: 'Inventarios, escandallos y alertas automáticas para que no pierdas ni un euro en mermas.',
    color: '#c8f135',
    bg: '#f7ffe6',
  },
]

export default function ServicesStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest">
            Qué hacemos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F172A] mt-2">
            Todo lo que tu negocio necesita
          </h2>
          <p className="font-body text-[#64748B] mt-3 max-w-lg mx-auto">
            Desde la primera página web hasta el dashboard más avanzado. Un solo equipo, todo resuelto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-current hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-default"
              style={{ '--hover-color': s.color } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: s.bg }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-lg text-[#0F172A] mb-2 group-hover:transition-colors duration-200"
                style={{ color: undefined }}
              >
                <span className="group-hover:text-current transition-colors duration-200"
                  style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
                >
                  {s.title}
                </span>
              </h3>

              {/* Desc */}
              <p className="font-body text-sm text-[#64748B] leading-relaxed">{s.desc}</p>

              {/* Bottom accent line */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                style={{ backgroundColor: s.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
