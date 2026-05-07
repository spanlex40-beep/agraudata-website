'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-[#D8D8D4] bg-[#F2F2EF] flex flex-col items-center justify-center gap-2 mb-5">
      <div className="w-10 h-10 rounded-xl bg-[#E2E2DE] flex items-center justify-center">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden>
          <path d="M7 2H13L15 4H18C19.1 4 20 4.9 20 6V15C20 16.1 19.1 17 18 17H2C0.9 17 0 16.1 0 15V6C0 4.9 0.9 4 2 4H5L7 2Z" stroke="#9B9BA8" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="10" cy="10.5" r="3" stroke="#9B9BA8" strokeWidth="1.5"/>
        </svg>
      </div>
      <span className="font-body text-xs text-[#9B9BA8] text-center px-4 leading-snug">{label}</span>
    </div>
  )
}

const problems = [
  {
    title: 'No sabes tu rentabilidad real',
    desc: 'Facturar bien no es ganar bien. El margen real, después de compras, mermas y personal, es otro número.',
    image: 'Imagen: Excel abierto con muchas columnas, números dispersos, caos visual',
  },
  {
    title: 'El personal se lleva el 40–50% del gasto',
    desc: 'Horas extra sin control, cuadrantes hechos a mano. El mayor coste del negocio sin visibilidad real.',
    image: 'Imagen: cuadrante de turnos en papel / pizarra / post-its',
  },
  {
    title: 'Proveedores subiendo precios',
    desc: 'Sin historial de precios es imposible negociar. Te enteras tarde, o no te enteras.',
    image: 'Imagen: pila de albaranes y facturas de proveedores encima de una mesa',
  },
  {
    title: 'Food cost descontrolado',
    desc: 'Los precios suben, la carta no cambia. El margen se evapora mes a mes sin que nadie lo vea.',
    image: 'Imagen: cocina en servicio, cocinero con ingredientes, stock visible al fondo',
  },
]

export default function ProblemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
            El problema
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 mb-3 leading-tight">
            ¿Te suena esto?
          </h2>
          <p className="font-body text-[#4A4A5A] text-lg max-w-lg">
            Los mismos problemas, en casi todos los negocios de hostelería.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#c8f135] hover:shadow-[0_4px_24px_rgba(200,241,53,0.12)] transition-all duration-250"
            >
              <ImagePlaceholder label={p.image} />
              <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
