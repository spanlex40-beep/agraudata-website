'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20quiero%20ver%20mis%20datos%20en%20un%20dashboard.'

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="dashboard" className="py-24 bg-[#0F0F1A] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest">
            En acción
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-3 mb-5 leading-tight">
            Esto es lo que pasa cuando<br className="hidden sm:block" /> ves tus datos bien.
          </h2>
          <div className="max-w-xl mx-auto space-y-2">
            <p className="font-display font-bold text-2xl text-[#c8f135]">
              Me traes tu Excel. En 5 minutos ves esto.
            </p>
            <p className="font-body text-[#94A3B8]">
              Sin instalar nada. Sin cambiar tu sistema. Solo entender lo que ya tienes.
            </p>
          </div>
        </motion.div>

        {/* Screenshot principal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
        >
          {/* Barra de navegador simulada */}
          <div className="bg-[#1E2336] px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 mx-4 bg-[#2A3050] rounded-md px-3 py-1.5 text-xs text-[#64748B] font-body">
              AgrauData Demonstration — Dashboard
            </div>
          </div>
          <Image
            src="/foto/dashboard-1.png"
            alt="Dashboard de ventas AgrauData — vista general"
            width={1060}
            height={650}
            className="w-full h-auto"
            priority={false}
          />
        </motion.div>

        {/* Screenshot secundario */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
        >
          <div className="bg-[#1E2336] px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 mx-4 bg-[#2A3050] rounded-md px-3 py-1.5 text-xs text-[#64748B] font-body">
              AgrauData Demonstration — Detalle por hora y artículo
            </div>
          </div>
          <Image
            src="/foto/dashboard-2.png"
            alt="Dashboard AgrauData — ventas por hora y ranking de artículos"
            width={1060}
            height={650}
            className="w-full h-auto"
          />
        </motion.div>

        {/* 3 puntos clave + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            {[
              { icon: '📥', text: 'Traes tu Excel del TPV' },
              { icon: '⚡', text: 'En 5 minutos tienes el dashboard' },
              { icon: '📊', text: 'Ves ventas, artículos, horas pico y más' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-body text-sm text-[#94A3B8]">{item.text}</span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-7 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200 whitespace-nowrap"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quiero ver mis datos así
          </a>
        </motion.div>

      </div>
    </section>
  )
}
