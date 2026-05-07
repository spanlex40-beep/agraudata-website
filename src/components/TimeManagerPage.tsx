'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_TRIAL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20quiero%20probar%20Time%20Manager%20gratis%2030%20d%C3%ADas.'
const WHATSAPP_BUY = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20quiero%20comprar%20Time%20Manager.'

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl border-2 border-dashed border-[#D8D8D4] bg-[#F2F2EF] flex flex-col items-center justify-center gap-2">
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

const benefits = [
  {
    title: 'Cuadrante en 5 minutos',
    desc: 'Creas la semana desde cero o duplicas la anterior. Sin papel, sin Excel, sin errores.',
    image: 'Imagen: cuadrante en papel lleno de correcciones vs pantalla limpia del programa',
  },
  {
    title: 'Ves quién trabaja y cuánto cuesta',
    desc: 'Horas por empleado, coste estimado por turno. El gasto de personal deja de ser un misterio.',
    image: 'Imagen: resumen de horas y costes de personal — tabla limpia con datos claros',
  },
  {
    title: 'Sin conflictos, sin llamadas',
    desc: 'El programa detecta solapamientos y te avisa antes de confirmar el cuadrante.',
    image: 'Imagen: conversación de WhatsApp caótica de cambios de turno — el problema que resuelve',
  },
]

const tiers = [
  {
    name: 'Básica',
    price: '29',
    desc: '1 local',
    highlight: false,
  },
  {
    name: 'Medium',
    price: '59',
    desc: 'Hasta 4 locales',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '99',
    desc: 'Hasta 10 locales',
    highlight: false,
  },
]

const faqs = [
  {
    q: '¿Necesito instalar Python o tener internet?',
    a: 'No. Es un .exe para Windows. Haces doble clic y funciona. Sin internet, sin instalaciones extra.',
  },
  {
    q: '¿Puedo importar mis empleados desde Excel?',
    a: 'Sí. Importas empleados, puestos y centros desde un Excel. No tienes que escribirlo todo a mano.',
  },
  {
    q: '¿Qué pasa si cambio de ordenador?',
    a: 'La licencia está ligada al PC. Si cambias de equipo, escríbeme y lo resolvemos sin problema.',
  },
  {
    q: '¿Funciona para varios locales o franquicias?',
    a: 'Sí. Los planes Medium (4 locales) y Premium (10 locales) están pensados para eso.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E8E8E4] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-bold text-[#0F0F1A] group-hover:text-[#4A4A5A] transition-colors leading-snug">
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${open ? 'bg-[#c8f135] border-[#c8f135]' : 'border-[#E8E8E4] group-hover:border-[#c8f135]'}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
            <path d="M6 2v8M2 6h8" stroke={open ? '#0F0F1A' : '#6B6B7A'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="font-body text-[#4A4A5A] leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TimeManagerPage() {
  return (
    <main className="bg-[#FAFAF8] pt-20">

      {/* Hero */}
      <section className="py-20 bg-[#0F0F1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-pulse" />
            Time Manager — AgrauData
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-5"
          >
            Deja de hacer<br />los cuadrantes a mano.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="font-body text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto"
          >
            Time Manager organiza los turnos de tu equipo en 5 minutos. Sin Excel, sin papel, sin llamadas de último momento.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href={WHATSAPP_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-8 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200"
            >
              Prueba gratis 30 días
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-semibold text-base px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-colors duration-200"
            >
              Ver precios
            </a>
          </motion.div>
          <p className="font-body text-xs text-[#4A4A5A] mt-4">Sin tarjeta · Sin compromiso · Windows</p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Qué resuelve</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 leading-tight">
              Menos tiempo en gestión.<br />Más control de tu equipo.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E8E8E4]"
              >
                <ImagePlaceholder label={b.image} />
                <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2 leading-snug">{b.title}</h3>
                <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-24 bg-[#0F0F1A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest">Precios</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-3">
              Pago único. Sin sorpresas.
            </h2>
            <p className="font-body text-[#94A3B8] mt-3">Sin cuota mensual. Sin renovaciones. Es tuyo para siempre.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative rounded-2xl p-7 border flex flex-col text-center ${
                  tier.highlight
                    ? 'bg-[#c8f135]/5 border-[#c8f135]/50 shadow-[0_0_40px_rgba(200,241,53,0.08)]'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c8f135] text-[#0F0F1A] text-xs font-bold px-3 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <p className="font-display font-bold text-white text-lg mb-1">{tier.name}</p>
                <p className="font-body text-xs text-[#64748B] mb-5">{tier.desc}</p>
                <p className="font-display font-black text-5xl text-white mb-1">{tier.price}<span className="text-2xl">€</span></p>
                <p className="font-body text-xs text-[#64748B] mb-8">pago único</p>
                <a
                  href={WHATSAPP_BUY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-body font-bold text-sm py-3.5 rounded-xl transition-colors duration-200 ${
                    tier.highlight
                      ? 'bg-[#c8f135] text-[#0F0F1A] hover:bg-[#b8e020]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Comprar {tier.name}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center font-body text-xs text-[#4A4A5A] mt-8">
            O prueba gratis 30 días — sin tarjeta, sin compromiso
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Preguntas frecuentes</span>
            <h2 className="font-display font-black text-3xl text-[#0F0F1A] mt-3">Lo que suele preguntar la gente.</h2>
          </div>
          <div className="bg-white rounded-2xl px-8 border border-[#E8E8E4]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#FAFAF8] border-t border-[#E8E8E4]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-3xl text-[#0F0F1A] mb-4 leading-tight">
            ¿Dudas? Escríbeme.<br />Te lo explico en 5 minutos.
          </h2>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-8 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200"
          >
            Escríbeme por WhatsApp
          </a>
          <p className="font-body text-xs text-[#9B9BA8] mt-4">Prueba gratis 30 días · Sin tarjeta · Windows</p>
        </div>
      </section>

    </main>
  )
}
