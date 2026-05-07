'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ImagePlaceholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`w-full ${tall ? 'aspect-[4/3]' : 'aspect-[16/9]'} rounded-xl border-2 border-dashed border-[#D8D8D4] bg-[#F2F2EF] flex flex-col items-center justify-center gap-2`}>
      <div className="w-10 h-10 rounded-xl bg-[#E2E2DE] flex items-center justify-center">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden>
          <path d="M7 2H13L15 4H18C19.1 4 20 4.9 20 6V15C20 16.1 19.1 17 18 17H2C0.9 17 0 16.1 0 15V6C0 4.9 0.9 4 2 4H5L7 2Z" stroke="#9B9BA8" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="10" cy="10.5" r="3" stroke="#9B9BA8" strokeWidth="1.5"/>
        </svg>
      </div>
      <span className="font-body text-xs text-[#9B9BA8] text-center px-6 leading-snug">{label}</span>
    </div>
  )
}

const hospitality = [
  'Restaurantes y bares',
  'Hoteles con F&B',
  'Cafeterías y grupos gastronómicos',
  'Negocios con varios puntos de venta',
]

const others = [
  'Clínicas y centros de salud',
  'Talleres y pequeña industria',
  'Asesorías y gestorías',
  'Autónomos con procesos manuales',
]

export default function SectorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sectores" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
            ¿Con quién trabajo?
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 leading-tight">
            Mi foco es la hostelería.<br />
            <span className="text-[#6B6B7A] font-bold">También trabajo con otros negocios.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Hostelería — bloque grande */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#0F0F1A] rounded-2xl p-8 flex flex-col gap-6"
          >
            <div>
              <span className="inline-block text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest mb-3">
                Principal
              </span>
              <h3 className="font-display font-black text-2xl text-white mb-2">
                🍽️ Hostelería
              </h3>
              <p className="font-body text-[#94A3B8] leading-relaxed">
                He trabajado en sala. Sé lo que pasa cuando el servicio está lleno, los costes no cuadran y nadie tiene tiempo de mirar los números. Por eso entiendo el negocio desde dentro.
              </p>
            </div>

            <ImagePlaceholder
              label="Imagen: cocina en servicio, equipo trabajando, ambiente de restaurante real"
              tall
            />

            <ul className="space-y-2">
              {hospitality.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
                      <path d="M1 3l2 2 4-4" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-sm text-[#94A3B8]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Otros negocios — bloque pequeño */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#E8E8E4] flex flex-col gap-5"
          >
            <div>
              <span className="inline-block text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest mb-3">
                También
              </span>
              <h3 className="font-display font-bold text-xl text-[#0F0F1A] mb-2">
                🏢 Otros negocios
              </h3>
              <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">
                Si tienes procesos manuales, datos sin orden o no sabes exactamente cuánto ganas, puedo ayudarte igual.
              </p>
            </div>

            <ImagePlaceholder label="Imagen: oficina, persona trabajando con ordenador, entorno de trabajo general" />

            <ul className="space-y-2">
              {others.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8C8C4] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[#6B6B7A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
