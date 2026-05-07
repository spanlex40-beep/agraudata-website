'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20tengo%20un%20negocio%20de%20hosteler%C3%ADa%20y%20me%20gustar%C3%ADa%20contarte%20mi%20caso.'

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-[#D8D8D4] bg-[#F2F2EF] flex flex-col items-center justify-center gap-2">
      <svg width="24" height="22" viewBox="0 0 20 18" fill="none" aria-hidden>
        <path d="M7 2H13L15 4H18C19.1 4 20 4.9 20 6V15C20 16.1 19.1 17 18 17H2C0.9 17 0 16.1 0 15V6C0 4.9 0.9 4 2 4H5L7 2Z" stroke="#9B9BA8" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="10" cy="10.5" r="3" stroke="#9B9BA8" strokeWidth="1.5"/>
      </svg>
      <span className="font-body text-xs text-[#9B9BA8] text-center px-4 leading-snug">{label}</span>
    </div>
  )
}

const problems = [
  { title: 'No sabes tu rentabilidad real', desc: 'Facturar no es ganar. Entre costes, mermas y personal, el margen real es otro.', src: '/foto/problemas-1.png' },
  { title: 'Coste de personal sin control', desc: '¿Está entre el 30–40% de tus ventas netas… o no lo sabes seguro? Sin control, es el gasto que más se desborda.', src: '/foto/problemas-3.png' },
  { title: 'Proveedores subiendo precios', desc: '¿Estás controlando precios… o reaccionas cuando ya es tarde? El proveedor nota rápido quién controla y quién no.', src: '/foto/problemas-2.png' },
  { title: 'No tienes controlados tus escandallos', desc: 'Sin escandallos, vendes a ciegas. Es como vender zapatos sin saber cuánto te cuestan.', src: '/foto/problemas-4.png' },
]


const faqs = [
  { q: '¿Tengo que cambiar mi sistema o TPV?', a: 'No. Trabajo con lo que ya tienes. Excel, TPV, informes… lo que uses ahora mismo.' },
  { q: '¿Cuánto tiempo se tarda en ver resultados?', a: 'En la primera revisión ya ves cosas. En pocos días tienes claro qué está pasando en tu negocio.' },
  { q: '¿Esto es solo para restaurantes grandes?', a: 'No. Funciona especialmente bien en negocios pequeños y medianos. Ahí es donde más impacto tiene.' },
  { q: '¿Y si mis datos están desordenados?', a: 'Es lo normal. Parte del trabajo es ordenarlos para que tengan sentido.' },
  { q: '¿Voy a tener que aprender algo complicado?', a: 'No. Yo me encargo de todo. Y si quieres, te dejo el sistema montado y te enseño a usarlo.' },
  { q: '¿Esto me sirve si ya tengo gestor o asesor?', a: 'Sí. El gestor mira impuestos. Yo te ayudo a entender tu negocio.' },
  { q: '¿Qué tipo de datos necesitas?', a: 'Trabajo con lo que ya tienes. Y si no tienes nada, lo construyo contigo desde cero.' },
  { q: '¿Qué pasa si al final no puedes ayudarme?', a: 'Te lo digo claro. Prefiero eso a vender algo que no sirve.' },
  { q: '¿Cuánto cuesta?', a: 'Depende del caso. Primero vemos qué necesitas y si tiene sentido para ti.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E8E8E4] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left group">
        <span className="font-display font-bold text-[#0F0F1A] group-hover:text-[#4A4A5A] transition-colors leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${open ? 'bg-[#c8f135] border-[#c8f135]' : 'border-[#E8E8E4] group-hover:border-[#c8f135]'}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
            <path d="M6 2v8M2 6h8" stroke={open ? '#0F0F1A' : '#6B6B7A'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="font-body text-[#4A4A5A] leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HoseleriaPage() {
  return (
    <main className="bg-[#FAFAF8] pt-20">

      {/* Hero */}
      <section className="py-20 bg-[#0F0F1A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="/" className="inline-flex items-center gap-2 font-body text-xs text-[#4A4A5A] hover:text-[#c8f135] transition-colors mb-6">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M12 7H2M6.5 3L2 7l4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Volver al inicio
              </a>
              <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest block mb-4">
                Para hostelería
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-5">
                Entiende qué está<br />pasando en<br />tu negocio.
              </h1>
              <p className="font-body text-lg text-[#94A3B8] mb-8 leading-relaxed">
                Trabajo con tus propios datos para que veas claro dónde estás ganando, dónde estás perdiendo y por qué.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-7 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cuéntame tu caso
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                <Image src="/foto/hosteleria-hero.png" alt="Cocina en servicio" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Lo que veo siempre</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 leading-tight">¿Te suena esto?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E4]">
                <div className="relative w-full aspect-[16/9]">
                  <Image src={p.src} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2 leading-snug">{p.title}</h3>
                  <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard — 4 bloques alternados */}
      <section className="bg-[#0F0F1A]">

        {/* Bloque 1: texto izq, imagen der */}
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest block mb-4">En acción</span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                Primero vemos cómo funciona tu negocio.
              </h2>
              <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                Analizamos tus ventas, ticket medio, número de clientes y cuándo vendes más. Ves claramente qué días, qué horas y qué momentos son clave.
              </p>
              <ul className="space-y-3">
                {['Ventas totales y evolución', 'Ticket medio y número de clientes', 'Días y horas con más volumen', 'Qué estás vendiendo realmente'].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                        <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-body text-sm text-[#94A3B8]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
              <div className="bg-[#1E2336] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
              </div>
              <Image src="/foto/dashboard-1.png" alt="Visión general del negocio" width={1060} height={650} className="w-full h-auto" />
            </div>

          </div>
        </div>

        {/* Bloque 2: imagen izq, texto der */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] order-2 lg:order-1">
                <div className="bg-[#1E2336] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                </div>
                <Image src="/foto/dashboard-2.png" alt="Detalle por artículos" width={1060} height={650} className="w-full h-auto" />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                  Luego bajamos al detalle.
                </h2>
                <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                  Analizamos artículo por artículo: qué vendes, cuánto pesa cada uno y cuándo se vende.
                </p>
                <ul className="space-y-3">
                  {['Productos más vendidos', 'Peso real en ventas', 'Precio medio por artículo', 'Comportamiento por hora o día'].map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                          <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-body text-sm text-[#94A3B8]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bloque 3: texto izq, imagen der — Costes clave */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div>
                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                  Controlas los costes que de verdad importan.
                </h2>
                <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                  Aquí es donde se va el dinero del negocio.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Personal:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Entre el 25% y el 35% de tus ventas netas. Si no lo controlas bien, se dispara sin que te des cuenta.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Compras:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Los proveedores saben perfectamente quién controla precios y quién no. Y ahí es donde empiezan a subir sin que lo veas venir.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Inventario:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Parte fundamental del negocio. Te permite controlar el stock y valorar lo que tienes.</p>
                      <p className="font-body text-sm text-white/60 mt-2 font-mono tracking-tight">EI + Compras − EF = Consumo real</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/foto/costes-inventario.png" alt="Control de costes e inventario" fill className="object-cover" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bloque 4: imagen izq, texto der — Rentabilidad */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/foto/rentabilidad.png" alt="Rentabilidad y menú engineering" fill className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                  Entiendes lo que realmente ganas.
                </h2>
                <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                  No es lo que facturas. Es lo que te queda.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Escandallos:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Imprescindible. Es como tener una zapatería sin saber cuánto te cuesta un zapato y vender a ojo. No sabes si ganas o pierdes dinero cada vez que vendes un plato.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Menú engineering:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">El gran olvidado en hostelería. Te dice qué platos son rentables, cuáles no, y qué tienes que empujar. A veces, subir 1€ un plato puede aumentar tu beneficio más de un 10% sin que el cliente lo note.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bloque 5: texto izq, imagen der — Gastos operativos */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div>
                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                  Controlas todo lo que no se ve.
                </h2>
                <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                  Son pequeños, pero juntos hacen mucho daño.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Suministros:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Luz, agua, gas… suben solos si no los vigilas.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Alquiler:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">El coste fijo más importante del negocio.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden><path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <span className="font-body text-sm font-semibold text-white">Otros gastos:</span>
                      <p className="font-body text-sm text-[#94A3B8] mt-0.5">Seguros, gestoría, mantenimiento… Todo lo que pagas aunque no vendas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/foto/gastos-facturas.png" alt="Control de gastos y facturas" fill className="object-cover" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Frases grandes — puente visual */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
            <p className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Con esto controlas el{' '}
              <span className="text-[#c8f135]">80% de tu negocio.</span>
            </p>
            <p className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white/40 leading-tight">
              El otro{' '}
              <span className="text-white/70">20%</span>{' '}
              es lo que marca la diferencia.
            </p>
          </div>
        </div>

        {/* Bloque 4: imagen izq, texto der — Control financiero */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Placeholder foto bloque 4 */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/foto/forecast.png" alt="Forecast y presupuesto anual" fill className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest block mb-4">El 20% restante</span>
                <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-4">
                  Y aquí es donde empiezas a anticiparte.
                </h2>
                <p className="font-body text-[#94A3B8] leading-relaxed mb-7">
                  Cuando todo lo anterior está ordenado, dejas de mirar el pasado y empiezas a decidir el futuro.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Presupuesto anual', desc: 'Sabes a dónde quieres llegar.' },
                    { label: 'EBITDA', desc: 'Ves lo que realmente gana tu negocio.' },
                    { label: 'Forecast', desc: 'Anticipas meses buenos y malos.' },
                    { label: 'Cash Flow', desc: 'Controlas el dinero real.' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="w-4 h-4 mt-0.5 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                          <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div>
                        <span className="font-body text-sm font-semibold text-white">{item.label}:</span>{' '}
                        <span className="font-body text-sm text-[#94A3B8]">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Frase dramática */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="font-display font-black text-lg text-white leading-snug">
                    Aquí es donde dejas de reaccionar…
                  </p>
                  <p className="font-display font-black text-lg text-[#c8f135] leading-snug">
                    y empiezas a dirigir tu negocio.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA final de la sección */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-display font-bold text-lg text-white text-center sm:text-left">
              Todo esto con los datos que ya tienes.{' '}
              <span className="text-[#c8f135]">Sin cambiar tu sistema.</span>
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-sm px-7 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200 whitespace-nowrap"
            >
              Cuéntame tu caso
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Preguntas frecuentes</span>
          <h2 className="font-display font-black text-3xl text-[#0F0F1A] mt-3 mb-10">Lo que suele preguntar la gente.</h2>
          <div className="bg-[#FAFAF8] rounded-2xl px-8 border border-[#E8E8E4]">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-28 bg-[#0F0F1A]">
        <div className="max-w-lg mx-auto px-6 text-center">

          <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-5">
            Si algo no te cuadra,<br />
            <span className="text-[#c8f135]">probablemente tengas razón.</span>
          </h2>

          <p className="font-body text-[#94A3B8] text-base leading-relaxed mb-10">
            Cuéntame tu caso. Lo vemos claro en pocos minutos y sin compromiso.<br />
            Si puedo ayudarte, te lo digo. Y si no, también.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-8 py-5 rounded-2xl hover:bg-[#b8e020] transition-colors duration-200 mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cuéntame tu caso por WhatsApp
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-5">
            {['Sin compromiso', 'Respuesta rápida', 'Sin letra pequeña'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                  <svg width="6" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                    <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-body text-xs text-[#6B6B7A]">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-[#3A3A5A]">Normalmente respondo en menos de 2 horas.</p>

        </div>
      </section>

    </main>
  )
}
