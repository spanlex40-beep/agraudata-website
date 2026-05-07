'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-[#D8D8D4] bg-[#F2F2EF] flex flex-col items-center justify-center gap-2 mb-5">
      <div className="w-9 h-9 rounded-xl bg-[#E2E2DE] flex items-center justify-center">
        <svg width="18" height="16" viewBox="0 0 20 18" fill="none" aria-hidden>
          <path d="M7 2H13L15 4H18C19.1 4 20 4.9 20 6V15C20 16.1 19.1 17 18 17H2C0.9 17 0 16.1 0 15V6C0 4.9 0.9 4 2 4H5L7 2Z" stroke="#9B9BA8" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="10" cy="10.5" r="3" stroke="#9B9BA8" strokeWidth="1.5"/>
        </svg>
      </div>
      <span className="font-body text-xs text-[#9B9BA8] text-center px-4 leading-snug">{label}</span>
    </div>
  )
}

const services = [
  {
    tag: 'Control financiero',
    title: 'Sabes dónde va cada euro.',
    desc: 'Costes, márgenes y rentabilidad real. Sin esperar al contable. Sin sorpresas a fin de mes.',
    image: 'Imagen: Excel desordenado con muchas hojas y columnas — el caos antes de tener control',
  },
  {
    tag: 'Personal y operativa',
    title: 'Tu equipo, organizado.',
    desc: 'Cuadrantes, horas, costes de personal. El gasto más alto de tu negocio, bajo control.',
    image: 'Imagen: cuadrante de turnos hecho a mano en papel o pizarra — refleja el problema',
  },
  {
    tag: 'Datos y herramientas',
    title: 'Tus datos, en 5 minutos.',
    desc: 'Traes tu Excel. Yo lo convierto en un dashboard que puedes leer, entender y usar.',
    image: 'Imagen: dashboard limpio en pantalla frente a facturas y papeles — el contraste',
  },
]

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicios" className="py-24 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 leading-tight">
            La solución a lo que te pasa.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#E8E8E4] flex flex-col"
            >
              <ImagePlaceholder label={s.image} />
              <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest mb-2">
                {s.tag}
              </span>
              <h3 className="font-display font-bold text-xl text-[#0F0F1A] mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
