'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const sectors = [
  {
    id: 'restaurantes',
    icon: '🍽️',
    name: 'Restaurantes',
    headline: 'Controla cada euro de tu negocio',
    desc: 'La hostelería tiene márgenes ajustados. Sin datos reales de costes, stock y personal, el margen se evapora sin que lo notes.',
    services: [
      { name: 'Dashboard de ventas en tiempo real', detail: 'Food cost, margen, ticket medio y comensales de un vistazo' },
      { name: 'Control de stock y mermas', detail: 'Inventarios diarios, alertas automáticas y trazabilidad de pérdidas' },
      { name: 'Escandallos digitales', detail: 'Coste real por plato actualizado con el precio actual de ingredientes' },
      { name: 'Menu engineering', detail: 'Saber qué platos vender más y cuáles retirar o reformular' },
      { name: 'Cuadrantes y RRHH', detail: 'Planificación de personal, control de horas y gestión de vacaciones' },
    ],
    stat: { value: '28–35%', label: 'food cost objetivo alcanzable con control real' },
    color: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
    accent: '#2563EB',
  },
  {
    id: 'clinicas',
    icon: '🏥',
    name: 'Clínicas',
    headline: 'Gestión operativa sin papel ni caos',
    desc: 'Entre citas, personal sanitario y facturación, la carga administrativa consume tiempo que debería ir a los pacientes.',
    services: [
      { name: 'Control de agenda y ocupación', detail: 'Visualiza tasas de ocupación, huecos y picos de demanda' },
      { name: 'KPIs de facturación', detail: 'Ingresos por profesional, por servicio y por período' },
      { name: 'Control de costes operativos', detail: 'Material sanitario, suministros y personal en un solo dashboard' },
      { name: 'Reporting para dirección', detail: 'Resumen ejecutivo mensual generado automáticamente' },
      { name: 'Automatización administrativa', detail: 'Recordatorios, informes y tareas repetitivas sin intervención manual' },
    ],
    stat: { value: '5h/semana', label: 'de media ahorradas en tareas administrativas' },
    color: 'bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]',
    accent: '#16A34A',
  },
  {
    id: 'asesorias',
    icon: '📁',
    name: 'Asesorías',
    headline: 'Más clientes, menos trabajo manual',
    desc: 'El volumen de documentación y seguimiento de clientes crece, pero el equipo no. La automatización es la única salida.',
    services: [
      { name: 'Seguimiento de cartera de clientes', detail: 'Estado de cada expediente, fechas clave y alertas de vencimiento' },
      { name: 'Automatización de informes', detail: 'Generación automática de reportes periódicos por cliente' },
      { name: 'Control de rentabilidad por cliente', detail: 'Horas invertidas vs facturación para identificar clientes poco rentables' },
      { name: 'Dashboard de KPIs del despacho', detail: 'Facturación, cartera activa y carga de trabajo del equipo' },
      { name: 'Plantillas y flujos estandarizados', detail: 'Documentos y procesos repetibles sin errores' },
    ],
    stat: { value: '40%', label: 'menos tiempo en tareas documentales repetitivas' },
    color: 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]',
    accent: '#EA580C',
  },
  {
    id: 'talleres',
    icon: '🔧',
    name: 'Talleres',
    headline: 'Stock, órdenes y rentabilidad bajo control',
    desc: 'Un taller sin control de piezas y tiempos pierde dinero en cada reparación sin saberlo.',
    services: [
      { name: 'Control de stock de piezas', detail: 'Inventario actualizado, alertas de mínimos y rotación de material' },
      { name: 'Órdenes de trabajo digitales', detail: 'Registro de tiempo, materiales y coste real por intervención' },
      { name: 'Rentabilidad por servicio', detail: 'Saber qué tipos de reparación dan más margen' },
      { name: 'Control de proveedores', detail: 'Comparativa de precios y gestión de pedidos de recambios' },
      { name: 'Facturación y seguimiento', detail: 'Historial de cliente, presupuestos y seguimiento de cobros' },
    ],
    stat: { value: '15–20%', label: 'de margen recuperable con control de costes reales' },
    color: 'bg-[#FAF5FF] text-[#7C3AED] border-[#DDD6FE]',
    accent: '#7C3AED',
  },
  {
    id: 'autonomos',
    icon: '👤',
    name: 'Autónomos',
    headline: 'Claridad total sobre tu tiempo y dinero',
    desc: 'Sin estructura de empresa, cada hora mal gestionada es dinero perdido. Saber dónde va tu tiempo cambia todo.',
    services: [
      { name: 'Control de proyectos y horas', detail: 'Tiempo real invertido por cliente y proyecto' },
      { name: 'Seguimiento de facturación', detail: 'Emitido, cobrado y pendiente siempre visible' },
      { name: 'Rentabilidad por cliente', detail: 'Identifica qué clientes te aportan más y cuáles te cuestan' },
      { name: 'Dashboard de ingresos', detail: 'Evolución mensual y proyección de cierre de año' },
      { name: 'Automatización de reportes', detail: 'Informes para clientes generados sin esfuerzo manual' },
    ],
    stat: { value: '€0', label: 'en software SaaS — herramientas tuyas para siempre' },
    color: 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]',
    accent: '#E11D48',
  },
]

export default function OtherSectorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)

  const sector = sectors[active]

  return (
    <section id="sectores" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-body font-semibold text-[#64748B] uppercase tracking-widest">
            Sectores
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F172A] mt-2">
            ¿En qué sector estás?
          </h2>
        </motion.div>

        {/* Sector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {sectors.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? `${s.color} border-current`
                  : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <span>{s.icon}</span>
              {s.name}
            </button>
          ))}
        </motion.div>

        {/* Active sector panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left: info */}
          <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
            <div
              className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-xl border mb-4 ${sector.color}`}
            >
              {sector.icon} {sector.name}
            </div>
            <h3 className="font-display font-bold text-xl text-[#0F172A] mb-2">
              {sector.headline}
            </h3>
            <p className="font-body text-sm text-[#64748B] leading-relaxed mb-6">
              {sector.desc}
            </p>

            {/* Stat highlight */}
            <div
              className="rounded-xl p-4 border"
              style={{
                backgroundColor: `${sector.accent}10`,
                borderColor: `${sector.accent}30`,
              }}
            >
              <p
                className="font-display font-extrabold text-2xl mb-0.5"
                style={{ color: sector.accent }}
              >
                {sector.stat.value}
              </p>
              <p className="font-body text-xs text-[#64748B]">{sector.stat.label}</p>
            </div>

            <a
              href="#contacto"
              className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-colors duration-200"
              style={{ backgroundColor: sector.accent }}
            >
              Contactar
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1.5 6.5h10M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: services */}
          <div className="space-y-3">
            {sector.services.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E2E8F0]"
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: sector.accent }}
                />
                <div>
                  <p className="font-body font-semibold text-sm text-[#0F172A]">{item.name}</p>
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
