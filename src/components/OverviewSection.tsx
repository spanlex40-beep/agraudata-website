'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const areas = [
  {
    href: '/hosteleria',
    tag: '',
    title: 'Entiende qué está pasando en tu negocio.',
    summary: 'Trabajo con tus propios datos para que veas claro dónde estás ganando, dónde estás perdiendo y por qué.',
    bullets: [
      'Food cost y márgenes reales',
      'Personal y costes bajo control',
      'Datos claros en minutos, no a final de mes',
    ],
    cta: 'Ver cómo te ayudo',
    img: '/foto/hub-hosteleria.png',
    imgAlt: 'Cocina en servicio con equipo trabajando',
    dark: true,
    flip: false,
  },
  {
    href: '/negocios',
    tag: 'Clínicas · Talleres · Asesorías',
    title: 'Otros negocios',
    summary: 'Ordena tus datos y automatiza lo que te roba tiempo.',
    bullets: [
      'Datos ordenados y fáciles de entender',
      'Procesos manuales automatizados',
      'Sin cambiar lo que ya tienes',
    ],
    cta: 'Ver cómo te ayudo',
    img: '/foto/hub-negocios.png',
    imgAlt: 'Persona revisando datos en pantalla',
    dark: false,
    flip: true,
  },
  {
    href: '/productos',
    tag: 'Software · Webs · Herramientas',
    title: 'Productos',
    summary: 'Software y webs hechos para trabajar de verdad, sin cuotas de por vida.',
    bullets: [
      'Time Manager: cuadrantes de personal',
      'Tu propia web desde cero',
      'Herramientas a medida',
    ],
    cta: 'Ver productos',
    img: '/foto/hub-productos.png',
    imgAlt: 'Pantalla con aplicación de gestión de turnos',
    dark: false,
    flip: false,
  },
]

export default function OverviewSection() {
  return (
    <section className="bg-[#FAFAF8] border-t border-[#E8E8E4]">

      {/* Cabecera */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-body font-semibold text-[#9B9BA8] uppercase tracking-widest">
            En qué puedo ayudarte
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] leading-tight mt-3">
            Así es como trabajo contigo.
          </h2>
        </motion.div>
      </div>

      {/* Bloques */}
      <div className="divide-y divide-[#E8E8E4]">
        {areas.map((area) => (
          <motion.div
            key={area.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`py-20 ${area.dark ? 'bg-[#0F0F1A]' : 'bg-[#FAFAF8]'}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${area.flip ? 'lg:grid-flow-col-dense' : ''}`}>

                {/* Imagen */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${area.flip ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={area.img}
                    alt={area.imgAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Texto */}
                <div className={area.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  {area.tag && (
                    <p className={`font-body text-xs font-semibold uppercase tracking-widest mb-4 ${area.dark ? 'text-[#3A3A4A]' : 'text-[#9B9BA8]'}`}>
                      {area.tag}
                    </p>
                  )}
                  <h3 className={`font-display font-black text-3xl md:text-4xl leading-tight mb-4 ${area.dark ? 'text-white' : 'text-[#0F0F1A]'}`}>
                    {area.title}
                  </h3>
                  <p className={`font-body text-base leading-relaxed mb-7 ${area.dark ? 'text-[#94A3B8]' : 'text-[#4A4A5A]'}`}>
                    {area.summary}
                  </p>

                  <ul className="space-y-3 mb-9">
                    {area.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                          <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                            <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className={`font-body text-sm leading-snug ${area.dark ? 'text-[#94A3B8]' : 'text-[#4A4A5A]'}`}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={area.href}
                    className={`inline-flex items-center gap-2 font-body font-bold text-sm px-6 py-3 rounded-xl border transition-all duration-200 group ${
                      area.dark
                        ? 'bg-[#c8f135] text-[#0F0F1A] border-[#c8f135] hover:bg-[#b8e020]'
                        : 'bg-white text-[#0F0F1A] border-[#E8E8E4] hover:border-[#0F0F1A]'
                    }`}
                  >
                    {area.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
