'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  {
    icon: '🍽️',
    label: 'Hostelería',
    id: 'hosteleria',
    color: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
    accent: '#2563EB',
    title: 'Control total de tu restaurante',
    desc: 'Desde la compra del producto hasta el cierre de caja. Todo medido, todo visible.',
    items: [
      { name: 'Control de stock', detail: 'Inventarios, mermas y alertas automáticas' },
      { name: 'Escandallos digitales', detail: 'Coste real por plato actualizado siempre' },
      { name: 'Menu engineering', detail: 'Identifica qué platos te dan margen y cuáles no' },
      { name: 'Control de costes', detail: 'Visión clara de dónde va cada euro' },
      { name: 'Dashboard de ventas', detail: 'KPIs en tiempo real: margen, food cost, ticket medio' },
    ],
  },
  {
    icon: '⚙️',
    label: 'Automatización',
    id: 'automatizacion',
    color: 'bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]',
    accent: '#16A34A',
    title: 'Menos trabajo manual',
    desc: 'Los procesos repetitivos que robaban horas cada semana, automatizados.',
    items: [
      { name: 'Cuadrantes de personal', detail: 'Planificación visual, control de horas y vacaciones' },
      { name: 'Pedidos a proveedores', detail: 'Alertas de stock mínimo y órdenes automáticas' },
      { name: 'Cierres de caja', detail: 'Informes diarios generados sin intervención manual' },
      { name: 'Reporting mensual', detail: 'P&L automático con los datos de tu operación' },
    ],
  },
  {
    icon: '📈',
    label: 'Dashboards',
    id: 'dashboards',
    color: 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]',
    accent: '#EA580C',
    title: 'Datos que se entienden',
    desc: 'No más hojas de cálculo imposibles. Dashboards claros para tomar decisiones.',
    items: [
      { name: 'KPIs operativos', detail: 'Ventas, food cost, margen, ticket medio' },
      { name: 'Análisis de rentabilidad', detail: 'Por turno, por día, por categoría de plato' },
      { name: 'Control presupuestario', detail: 'Real vs objetivo siempre visible' },
      { name: 'Informes para dirección', detail: 'Resumen ejecutivo listo en minutos' },
    ],
  },
  {
    icon: '💻',
    label: 'Software a medida',
    id: 'software',
    color: 'bg-[#FAF5FF] text-[#7C3AED] border-[#DDD6FE]',
    accent: '#7C3AED',
    title: 'Tu herramienta, no una suscripción',
    desc: 'Programas personalizados que se adaptan a cómo trabajas tú, no al revés.',
    items: [
      { name: 'Apps de escritorio locales', detail: 'Sin internet, sin mensualidades, tuyo para siempre' },
{ name: 'Excel avanzado + VBA', detail: 'Herramientas potentes sin cambiar lo que ya usas' },
      { name: 'Formación incluida', detail: 'Te enseñamos a sacarle el máximo partido' },
    ],
  },
]

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)

  return (
    <section id="soluciones" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body font-semibold text-[#2563EB] uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F172A] mt-2">
            La solución a cada problema
          </h2>
        </motion.div>

        {/* Tab nav */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {groups.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? `${g.color} border-current`
                  : 'bg-[#F8F9FA] text-[#64748B] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <span>{g.icon}</span>
              {g.label}
            </button>
          ))}
        </motion.div>

        {/* Active panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left: text */}
          <div>
            <div
              className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-xl border mb-4 ${groups[active].color}`}
            >
              {groups[active].icon} {groups[active].label}
            </div>
            <h3 className="font-display font-bold text-2xl text-[#0F172A] mb-3">
              {groups[active].title}
            </h3>
            <p className="font-body text-[#64748B] leading-relaxed mb-6">
              {groups[active].desc}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors duration-200"
              style={{ backgroundColor: groups[active].accent }}
            >
              Solicitar información
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1.5 6.5h10M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: items */}
          <div className="space-y-3">
            {groups[active].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className="group relative flex items-start gap-3 bg-[#F8F9FA] hover:bg-white rounded-xl p-4 border border-[#E2E8F0] overflow-hidden cursor-default transition-all duration-200"
                style={{
                  ['--accent' as string]: groups[active].accent,
                }}
              >
                {/* Glow de fondo */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${groups[active].accent}08, transparent)` }}
                />
                {/* Borde izquierdo que se enciende */}
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full rounded-full transition-all duration-300"
                  style={{ backgroundColor: groups[active].accent }}
                />

                <div
                  className="relative w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                  style={{ backgroundColor: groups[active].accent }}
                />
                <div className="relative">
                  <p
                    className="font-body font-semibold text-sm text-[#0F172A] transition-colors duration-200"
                    style={{ color: undefined }}
                  >
                    <span className="group-hover:text-current" style={{ color: 'inherit' }}>
                      {item.name}
                    </span>
                  </p>
                  <p className="font-body text-xs text-[#64748B] mt-0.5">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
