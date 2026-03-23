'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const webs = [
  {
    name: 'Restaurante El Mirador',
    sector: 'Hosteleria',
    icon: '🍽️',
    desc: 'Landing con carta digital, reservas online y galeria de platos. Diseño oscuro y elegante para atraer clientes desde Google.',
    tags: ['Reservas online', 'Carta digital', 'SEO local'],
    accent: '#2563EB',
    heroBg: '#0A1628',
    tagBg: '#EFF6FF',
    tagColor: '#2563EB',
  },
  {
    name: 'Clinica DentaPlus',
    sector: 'Salud',
    icon: '🏥',
    desc: 'Web con cita previa online, presentacion del equipo medico y blog de salud dental. Genera confianza desde el primer clic.',
    tags: ['Cita previa', 'Blog de salud', 'Formulario'],
    accent: '#16A34A',
    heroBg: '#071A0E',
    tagBg: '#F0FDF4',
    tagColor: '#16A34A',
  },
  {
    name: 'Taller AutoMax',
    sector: 'Automocion',
    icon: '🔧',
    desc: 'Web de taller mecanico con presupuesto online, catalogo de servicios y boton directo de WhatsApp. Simple y efectiva.',
    tags: ['Presupuesto online', 'WhatsApp directo', 'Galeria'],
    accent: '#EA580C',
    heroBg: '#1A0C04',
    tagBg: '#FFF7ED',
    tagColor: '#EA580C',
  },
  {
    name: 'Gestoria Prieto & Asoc.',
    sector: 'Asesoria',
    icon: '📁',
    desc: 'Web profesional con areas de servicio, blog fiscal actualizado y formulario de consulta gratuita. Credibilidad al instante.',
    tags: ['Blog fiscal', 'Consulta gratis', 'Corporativa'],
    accent: '#7C3AED',
    heroBg: '#0F0820',
    tagBg: '#FAF5FF',
    tagColor: '#7C3AED',
  },
]

function BrowserMockup({ w }: { w: typeof webs[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md">
      {/* Chrome bar */}
      <div className="bg-[#F1F5F9] px-3 py-2 flex items-center gap-2 border-b border-[#E2E8F0]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white rounded h-3.5" />
      </div>

      {/* Hero area */}
      <div className="h-28 relative" style={{ backgroundColor: w.heroBg }}>
        {/* Fake navbar */}
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="h-2 w-12 rounded" style={{ backgroundColor: w.accent }} />
          <div className="flex gap-2">
            <div className="h-1.5 w-7 rounded bg-white/20" />
            <div className="h-1.5 w-7 rounded bg-white/20" />
            <div className="h-1.5 w-7 rounded bg-white/20" />
          </div>
        </div>
        {/* Fake headline + CTA */}
        <div className="px-3 mt-1 space-y-1.5">
          <div className="h-3 w-3/4 rounded bg-white/85" />
          <div className="h-2 w-1/2 rounded bg-white/40" />
          <div className="h-2 w-3/5 rounded bg-white/25" />
          <div
            className="mt-2 h-4 w-16 rounded"
            style={{ backgroundColor: w.accent }}
          />
        </div>
      </div>

      {/* Content below hero */}
      <div className="bg-[#F8F9FA] px-3 py-2.5 flex gap-3">
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-full rounded bg-[#E2E8F0]" />
          <div className="h-2 w-5/6 rounded bg-[#E2E8F0]" />
          <div className="h-2 w-4/6 rounded bg-[#E2E8F0]" />
        </div>
        <div
          className="w-14 h-10 rounded"
          style={{ backgroundColor: `${w.accent}20` }}
        />
      </div>
    </div>
  )
}

export default function WebDesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="web" className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-body font-semibold text-[#7C3AED] uppercase tracking-widest">
            Paginas web
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F172A] mt-2 max-w-xl">
            Tu negocio merece una web que trabaje contigo
          </h2>
          <p className="font-body text-[#64748B] mt-3 max-w-lg leading-relaxed">
            Diseñamos webs rapidas, modernas y orientadas a captar clientes.
            Sin plantillas genericas — cada web refleja tu negocio.
          </p>
        </motion.div>

        {/* Free mockup CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden mb-14 p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
          }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-pulse" />
                Oferta sin compromiso
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight mb-2">
                Pide tu maqueta gratis
              </h3>
              <p className="font-body text-white/75 text-base leading-relaxed max-w-md">
                Antes de comprometerte con nada, te enviamos un render visual
                de como quedaria tu web. Gratis. Sin condiciones.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F172A] font-body font-bold px-7 py-4 rounded-xl hover:bg-[#d4f855] transition-colors duration-200 shadow-[0_4px_20px_rgba(200,241,53,0.35)] text-base"
              >
                Quiero mi maqueta gratis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="font-body text-white/50 text-xs mt-2.5 text-center">
                Sin coste · Sin compromiso
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-6"
        >
          Algunos trabajos anteriores
        </motion.p>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {webs.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-5 border border-[#E2E8F0] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <BrowserMockup w={w} />

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{w.icon}</span>
                  <h3 className="font-display font-bold text-[#0F172A] text-base">
                    {w.name}
                  </h3>
                </div>
                <p className="font-body text-sm text-[#64748B] leading-relaxed mb-3">
                  {w.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: w.tagBg,
                        color: w.tagColor,
                        borderColor: `${w.accent}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
