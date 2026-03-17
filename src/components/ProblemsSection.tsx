'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  {
    icon: '📊',
    stat: '8 de cada 10',
    title: 'No saben cuánto ganan realmente',
    desc: 'Facturan bien, pero el margen real después de costes, mermas y personal es un misterio.',
  },
  {
    icon: '📋',
    stat: '67%',
    title: 'Escandallos desactualizados o inexistentes',
    desc: 'El precio de los ingredientes sube y el precio de la carta no cambia. El margen se evapora.',
  },
  {
    icon: '📦',
    stat: '15-20%',
    title: 'Pérdidas de stock sin control',
    desc: 'Roturas, robos internos, caducidades. Sin inventario real, es imposible detectarlos.',
  },
  {
    icon: '⏱️',
    stat: '6h/semana',
    title: 'Tiempo perdido en tareas manuales',
    desc: 'Cuadrantes en papel, pedidos por WhatsApp, cierres en Excel. Todo a mano, todo lento.',
  },
  {
    icon: '👥',
    stat: '1 de cada 3',
    title: 'Conflictos por gestión de personal',
    desc: 'Sin cuadrantes claros ni control de horas, los errores y la rotación se disparan.',
  },
]

export default function ProblemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body font-semibold text-[#EF4444] uppercase tracking-widest">
            El problema
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F172A] mt-2">
            ¿Te suena familiar?
          </h2>
          <p className="font-body text-[#64748B] mt-3 max-w-xl mx-auto">
            La mayoría de restaurantes tienen los mismos puntos ciegos. Y cuestan mucho dinero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-6 border border-[#E2E8F0] ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <div className="font-display font-bold text-2xl text-[#EF4444] mb-1">
                {p.stat}
              </div>
              <h3 className="font-display font-semibold text-[#0F172A] mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
