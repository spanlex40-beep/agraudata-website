'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_IDEA = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20tengo%20una%20idea%20para%20una%20herramienta%20y%20me%20gustar%C3%ADa%20contarte%20qu%C3%A9%20necesito.'
const WHATSAPP_TRIAL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20quiero%20probar%20Time%20Manager%20gratis%2030%20d%C3%ADas.'
const WHATSAPP_TIME_MANAGER = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20interesa%20Time%20Manager.%20Me%20puedes%20contar%20m%C3%A1s%3F'
const WHATSAPP_WEB = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20gustar%C3%ADa%20ver%20una%20maqueta%20gratis%20para%20mi%20web.'

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

const tmFeatures = [
  {
    icon: '🗓️',
    title: 'Cuadrantes en minutos',
    desc: 'Crea la semana, asigna turnos por empleado y puesto, y duplica semanas anteriores con un clic. Sin fórmulas, sin errores de Excel.',
  },
  {
    icon: '⚠️',
    title: 'Incidencias y festivos integrados',
    desc: 'Bajas, vacaciones, permisos y festivos visibles en el cuadrante. El sistema los tiene en cuenta automáticamente.',
  },
  {
    icon: '📊',
    title: 'Gantt semanal y anual',
    desc: 'Ve de un vistazo los huecos de cobertura semana a semana, o planifica el año entero con la vista anual.',
  },
  {
    icon: '🤖',
    title: 'Ayuda con IA',
    desc: 'Genera un prompt con el contexto completo de tu semana (empleados, turnos, incidencias, últimas 3 semanas) y pégalo en ChatGPT, Claude o Gemini. La app valida la respuesta y la aplica al cuadrante con tu aprobación.',
  },
  {
    icon: '📋',
    title: 'Informe individual por empleado',
    desc: 'Horas trabajadas, incidencias desglosadas, ausencias y tipo de contrato. Listo para imprimir o exportar a PDF.',
  },
  {
    icon: '💾',
    title: 'Historial completo',
    desc: 'Cada cambio queda registrado: quién lo hizo, cuándo, qué se modificó y el valor anterior. También guarda las propuestas de IA aplicadas.',
  },
]

const tmFaqs = [
  { q: '¿Funciona sin internet?', a: 'Sí. Time Manager es una app local para Windows. Funciona completamente offline. Tus datos no salen de tu equipo.' },
  { q: '¿Necesito instalar Python o algo técnico?', a: 'No. Se entrega como un archivo .exe. Haces doble clic y funciona. Sin instalaciones adicionales.' },
  { q: '¿Cómo funciona la ayuda con IA?', a: 'La app genera un prompt con el contexto completo de tu semana. Lo copias, lo pegas en ChatGPT, Claude o Gemini, y devuelves la respuesta. La app la valida y te muestra una preview antes de aplicarla.' },
  { q: '¿Cuántos centros incluye cada plan?', a: 'Básica: 1 centro. Medium: hasta 4. Premium: hasta 10. Si tienes más, hablamos.' },
  { q: '¿Puedo probar antes de comprar?', a: 'Sí. El plan Trial te da 30 días completos sin pagar. Sin tarjeta, sin compromiso.' },
  { q: '¿Qué pasa con mis datos si dejo de usarlo?', a: 'Son tuyos. Están en tu equipo, en una base de datos local. Puedes exportarlos a Excel en cualquier momento.' },
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

export default function ProductosPage() {
  return (
    <main className="bg-[#FAFAF8] pt-20">

      {/* Hero */}
      <section className="py-24 bg-[#0F0F1A]">
        <div className="max-w-6xl mx-auto px-6">
          <a href="/" className="inline-flex items-center gap-2 font-body text-xs text-[#4A4A5A] hover:text-[#c8f135] transition-colors mb-8">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M12 7H2M6.5 3L2 7l4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">

            <div>
              <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest block mb-5">
                Herramientas y software
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                Herramientas hechas<br />para tu negocio.
              </h1>
              <p className="font-body text-lg text-[#94A3B8] leading-relaxed mb-8">
                Creo programas y herramientas a medida para que trabajes mejor, más rápido y con más control. Sin funciones absurdas, sin contratos eternos y sin pagar una fortuna por cosas que no vas a usar.
              </p>

              {/* Frase destacada */}
              <div className="border-l-4 border-[#c8f135] pl-6">
                <p className="font-display font-black text-xl text-white leading-snug">
                  A veces no necesitas otro empleado.
                </p>
                <p className="font-display font-black text-xl text-[#c8f135] leading-snug">
                  Necesitas una herramienta mejor.
                </p>
              </div>
            </div>

            {/* Foto hero productos */}
            <div className="relative w-full mx-auto lg:mx-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#c8f135]/20" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/10">
                <Image src="/foto/crm.png" alt="CRM AgrauData" width={960} height={640} className="w-full h-auto" />
              </div>
              <p className="font-body text-xs text-[#4A4A5A] text-center mt-4 leading-snug">
                Mi CRM creado por AgrauData —<br />búsqueda de clientes automática vinculada a mi correo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Intro + frase "No adaptes" */}
      <section className="py-20 bg-[#FAFAF8] border-b border-[#E8E8E4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-5">
                Muchos negocios terminan usando programas enormes para aprovechar solo una pequeña parte. Prefiero crear herramientas sencillas, prácticas y adaptadas a cómo trabajas tú.
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed">
                Y si necesitas algo específico, lo hablamos.<br />
                <span className="font-semibold text-[#0F0F1A]">Si se puede hacer, lo hacemos.</span>
              </p>
            </div>

            {/* Quote card */}
            <div className="bg-[#0F0F1A] rounded-2xl p-8">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden className="mb-5 opacity-40">
                <path d="M0 22V13.6C0 9.87 1.08 6.8 3.24 4.38 5.4 1.96 8.4.4 12.24 0l1.08 2.16C9.72 2.88 7.44 4.08 5.88 5.76 4.32 7.44 3.6 9.36 3.6 11.52h3.84V22H0zm15.12 0V13.6c0-3.73 1.08-6.8 3.24-9.22C20.52 1.96 23.52.4 27.36 0l1.08 2.16c-3.6.72-5.88 1.92-7.44 3.6-1.56 1.68-2.28 3.6-2.28 5.76h3.84V22h-7.44z" fill="#c8f135"/>
              </svg>
              <p className="font-display font-black text-xl text-white leading-snug mb-2">
                No adaptes tu negocio al software.
              </p>
              <p className="font-display font-black text-xl text-[#c8f135] leading-snug">
                Adaptamos el software a tu negocio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Time Manager */}
      <section id="time-manager" className="py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-body font-semibold text-[#c8f135] bg-[#0F0F1A] rounded-full px-3 py-1 uppercase tracking-widest mb-5">
                Producto 01
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-[#0F0F1A] leading-tight mb-4">
                Time Manager<br />
                <span className="text-[#6B6B7A] font-bold text-2xl">Cuadrantes de personal sin Excel</span>
              </h2>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-3">
                Una app local para Windows que sustituye el Excel de turnos. Creas el cuadrante, controlas incidencias, ves el Gantt de la semana y generas informes individuales por empleado.
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-6">
                Sin internet, sin suscripción mensual, sin que tus datos salgan de tu equipo.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: '100%', label: 'sin internet' },
                  { value: '30 días', label: 'prueba gratis' },
                  { value: '0€/mes', label: 'pago único' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-[#E8E8E4] text-center">
                    <p className="font-display font-black text-xl text-[#0F0F1A]">{s.value}</p>
                    <p className="font-body text-xs text-[#6B6B7A] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={WHATSAPP_TRIAL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#b8e020] transition-colors duration-200">
                  Prueba gratis 30 días
                </a>
                <a href={WHATSAPP_TIME_MANAGER} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#0F0F1A] font-body font-bold text-sm px-6 py-3.5 rounded-xl border border-[#E8E8E4] hover:border-[#0F0F1A] transition-colors duration-200">
                  Más información
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl overflow-hidden border border-[#E8E8E4] shadow-[0_8px_24px_rgba(15,15,26,0.08)]">
                <Image src="/foto/time-manager-1.png" alt="Time Manager — cuadrante semanal" width={1060} height={650} className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E8E8E4] shadow-[0_8px_24px_rgba(15,15,26,0.08)]">
                <Image src="/foto/time-manager-2.png" alt="Time Manager — detalle de turnos" width={1060} height={650} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {tmFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#E8E8E4]">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-display font-bold text-base text-[#0F0F1A] mb-2">{f.title}</h3>
                <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Precios */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Precios</span>
              <h3 className="font-display font-black text-2xl text-[#0F0F1A] mt-2">Sin letra pequeña.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: 'Básica', price: '29€', period: 'pago único', centers: '1 local', highlight: false },
                { name: 'Medium', price: '59€', period: 'pago único', centers: 'hasta 4 locales', highlight: true },
                { name: 'Premium', price: '99€', period: 'pago único', centers: 'hasta 10 locales', highlight: false },
              ].map((plan, i) => (
                <div key={i} className={`rounded-2xl p-7 border ${plan.highlight ? 'bg-[#0F0F1A] border-[#0F0F1A]' : 'bg-white border-[#E8E8E4]'}`}>
                  <p className={`font-body text-xs font-semibold uppercase tracking-widest mb-3 ${plan.highlight ? 'text-[#c8f135]' : 'text-[#6B6B7A]'}`}>{plan.name}</p>
                  <p className={`font-display font-black text-4xl mb-1 ${plan.highlight ? 'text-white' : 'text-[#0F0F1A]'}`}>{plan.price}</p>
                  <p className={`font-body text-xs mb-4 ${plan.highlight ? 'text-[#64748B]' : 'text-[#9B9BA8]'}`}>{plan.period}</p>
                  <div className={`text-sm font-body font-semibold py-2 px-4 rounded-lg inline-block ${plan.highlight ? 'bg-white/10 text-white' : 'bg-[#FAFAF8] text-[#0F0F1A]'}`}>
                    {plan.centers}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-[#9B9BA8] mt-4">
              Trial gratuito disponible — 30 días, 1 local, sin pagar.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-2xl">
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Preguntas sobre Time Manager</span>
            <div className="bg-white rounded-2xl px-8 border border-[#E8E8E4] mt-6">
              {tmFaqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Webs */}
      <section id="webs" className="py-24 bg-[#FAFAF8] border-t border-[#E8E8E4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-block text-xs font-body font-semibold text-[#6B6B7A] bg-[#F2F2EF] rounded-full px-3 py-1 uppercase tracking-widest mb-5">
                Producto 02
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-[#0F0F1A] leading-tight mb-3">
                Webs que trabajan contigo.
              </h2>
              <p className="font-body text-sm font-semibold text-[#6B6B7A] uppercase tracking-widest mb-6">
                Maqueta gratis antes de decidir
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-3">
                Te hago una maqueta gratis para que veas cómo quedaría antes de decidir nada.
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-7">
                No hago webs genéricas. Cada negocio trabaja distinto y la web tiene que reflejar eso.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Diseño adaptado a tu negocio',
                  'Pensada para captar clientes',
                  'Sin plantillas genéricas',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                        <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-body text-sm text-[#4A4A5A]">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_WEB} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#b8e020] transition-colors duration-200">
                Pedir maqueta gratis
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Browser mockup */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E8E4] shadow-[0_16px_48px_rgba(15,15,26,0.1)]">
              {/* Barra del navegador */}
              <div className="bg-[#F2F2EF] px-4 py-3 flex items-center gap-3 border-b border-[#E8E8E4]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#D8D8D4]" />
                  <div className="w-3 h-3 rounded-full bg-[#D8D8D4]" />
                  <div className="w-3 h-3 rounded-full bg-[#D8D8D4]" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-[#E8E8E4]">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <circle cx="6" cy="6" r="5" stroke="#D8D8D4" strokeWidth="1.2"/>
                    <path d="M4 6h4M6 4v4" stroke="#D8D8D4" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-body text-xs text-[#C0C0BC]">tunegocio.com</span>
                </div>
              </div>

              {/* Contenido wireframe */}
              <div className="bg-white p-5 space-y-4">

                {/* Nav */}
                <div className="flex items-center justify-between">
                  <div className="w-20 h-3 bg-[#E8E8E4] rounded-full" />
                  <div className="flex gap-3">
                    <div className="w-10 h-2.5 bg-[#F2F2EF] rounded-full" />
                    <div className="w-10 h-2.5 bg-[#F2F2EF] rounded-full" />
                    <div className="w-10 h-2.5 bg-[#F2F2EF] rounded-full" />
                    <div className="w-16 h-6 bg-[#c8f135]/30 rounded-lg" />
                  </div>
                </div>

                {/* Hero */}
                <div className="bg-[#0F0F1A] rounded-xl p-6 space-y-3">
                  <div className="w-3/4 h-4 bg-white/20 rounded-full" />
                  <div className="w-1/2 h-4 bg-white/10 rounded-full" />
                  <div className="w-2/3 h-3 bg-white/10 rounded-full" />
                  <div className="w-28 h-8 bg-[#c8f135]/80 rounded-lg mt-2" />
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="bg-[#FAFAF8] rounded-lg p-3 border border-[#F2F2EF] space-y-2">
                      <div className="w-6 h-6 bg-[#E8E8E4] rounded-md" />
                      <div className="w-full h-2.5 bg-[#E8E8E4] rounded-full" />
                      <div className="w-3/4 h-2 bg-[#F2F2EF] rounded-full" />
                    </div>
                  ))}
                </div>

                {/* Texto bloque */}
                <div className="space-y-2 px-1">
                  <div className="w-full h-2 bg-[#F2F2EF] rounded-full" />
                  <div className="w-5/6 h-2 bg-[#F2F2EF] rounded-full" />
                  <div className="w-4/6 h-2 bg-[#F2F2EF] rounded-full" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Herramientas a medida */}
      <section id="medida" className="py-24 bg-white border-t border-[#E8E8E4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Placeholder — herramienta genérica */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E8E4] shadow-[0_16px_48px_rgba(15,15,26,0.08)]">

              {/* Cabecera */}
              <div className="bg-[#0F0F1A] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c8f135]" />
                  <div className="w-28 h-2.5 bg-white/20 rounded-full" />
                </div>
                <div className="font-body text-[10px] text-white/30 tracking-widest uppercase">AgrauData</div>
              </div>

              <div className="bg-[#FAFAF8] p-5 space-y-4">

                {/* KPIs genéricos */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Clientes activos', value: '148' },
                    { label: 'Facturación mes', value: '18.340 €' },
                    { label: 'Tiempo ahorrado', value: '6 h/sem' },
                  ].map((k) => (
                    <div key={k.label} className="bg-white rounded-xl p-3 border border-[#E8E8E4]">
                      <p className="font-body text-[10px] text-[#9B9BA8] mb-1 leading-tight">{k.label}</p>
                      <p className="font-display font-black text-sm text-[#0F0F1A]">{k.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tareas / procesos */}
                <div className="bg-white rounded-xl border border-[#E8E8E4] overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto_auto] px-4 py-2 bg-[#F2F2EF] border-b border-[#E8E8E4] gap-4">
                    {['Tarea', 'Estado', 'Tiempo'].map((h) => (
                      <span key={h} className="font-body text-[10px] font-semibold text-[#9B9BA8] uppercase tracking-wider">{h}</span>
                    ))}
                  </div>
                  {[
                    ['Informe semanal', 'Automático', '0 min'],
                    ['Envío de presupuesto', 'Automático', '0 min'],
                    ['Recordatorio clientes', 'Automático', '0 min'],
                    ['Resumen de gastos', 'Automático', '0 min'],
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-[1fr_auto_auto] px-4 py-2.5 gap-4 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                      <span className="font-body text-xs text-[#4A4A5A]">{row[0]}</span>
                      <span className="font-body text-[10px] font-semibold text-[#0F0F1A] bg-[#c8f135]/20 px-2 py-0.5 rounded-full whitespace-nowrap">{row[1]}</span>
                      <span className="font-body text-xs text-[#9B9BA8] text-right">{row[2]}</span>
                    </div>
                  ))}
                </div>

                {/* Barras — horas recuperadas */}
                <div className="space-y-2.5">
                  {[
                    { label: 'Informes', pct: 90 },
                    { label: 'Seguimiento clientes', pct: 75 },
                    { label: 'Gestión datos', pct: 65 },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-[10px] text-[#6B6B7A]">{b.label}</span>
                        <span className="font-body text-[10px] font-semibold text-[#c8f135]">−{b.pct}% tiempo</span>
                      </div>
                      <div className="h-1.5 bg-[#E8E8E4] rounded-full overflow-hidden">
                        <div className="h-full bg-[#c8f135] rounded-full" style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Texto */}
            <div>
              <span className="inline-block text-xs font-body font-semibold text-[#6B6B7A] bg-[#F2F2EF] rounded-full px-3 py-1 uppercase tracking-widest mb-5">
                Producto 03
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-[#0F0F1A] leading-tight mb-3">
                Herramientas a medida.
              </h2>
              <p className="font-body text-sm font-semibold text-[#6B6B7A] mb-6">
                Automatizaciones, dashboards y programas pensados para tu negocio.<br />
                Sin funciones absurdas. Sin pagar por cosas que no usas.
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-3">
                Hay tareas que hacen perder horas cada semana. Datos repetidos, procesos manuales, programas que no se conectan o Excels imposibles de mantener.
              </p>
              <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-7">
                Muchas veces no necesitas otro empleado.<br />
                <span className="font-semibold text-[#0F0F1A]">Necesitas una herramienta mejor.</span>
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Automatización de tareas repetitivas',
                  'Dashboards y reportes automáticos',
                  'Programas hechos para tu forma de trabajar',
                  'Conectar sistemas que no se hablan entre sí',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                        <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-body text-sm text-[#4A4A5A]">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_IDEA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F0F1A] text-white font-body font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#1a1a2e] transition-colors duration-200">
                Cuéntame tu idea
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Herramientas a medida */}
      <section className="py-20 bg-[#FAFAF8] border-t border-[#E8E8E4]">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Preguntas frecuentes</span>
          <h3 className="font-display font-black text-2xl text-[#0F0F1A] mt-3 mb-8 leading-tight">Lo que suelen preguntar.</h3>
          <div className="bg-white rounded-2xl px-8 border border-[#E8E8E4]">
            {[
              { q: '¿Tengo que cambiar los programas que ya uso?', a: 'No siempre. Muchas veces trabajamos sobre lo que ya tienes para mejorarlo o conectarlo entre sí.' },
              { q: '¿Y si no sé exactamente lo que necesito?', a: 'No pasa nada. Hablamos de cómo trabajas y vemos qué se puede automatizar o simplificar.' },
              { q: '¿Haces herramientas solo para hostelería?', a: 'No. Trabajo también con clínicas, talleres, asesorías, inmobiliarias y otros negocios.' },
              { q: '¿Las herramientas son complicadas de usar?', a: 'No deberían. La idea es justamente quitar complicaciones, no añadir más.' },
              { q: '¿Puedo pedir algo muy concreto?', a: 'Sí. Muchas veces las mejores herramientas salen de problemas muy específicos del día a día.' },
              { q: '¿Y si la idea es sencilla?', a: 'Mejor todavía. Si es algo pequeño o rápido, incluso puedo enseñarte una maqueta antes de que pagues nada.' },
              { q: 'Tengo un Excel que uso cada día, ¿se puede convertir en un programa?', a: 'Sí. Muchas herramientas empiezan siendo un Excel. Se puede transformar en algo más cómodo, más visual y más fácil de usar para el día a día.' },
            ].map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* En desarrollo */}
      <section className="py-24 bg-[#0F0F1A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <span className="inline-block text-xs font-body font-semibold text-[#c8f135] border border-[#c8f135]/30 rounded-full px-3 py-1 uppercase tracking-widest mb-4">
              En desarrollo
            </span>
            <h2 className="font-display font-black text-3xl text-white leading-tight">
              Lo que viene.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: 'EscandalloIA',
                desc: 'Control de costes y escandallos con IA y datos reales. Sabes exactamente cuánto te cuesta cada plato y cuánto ganas.',
                tag: 'Hostelería',
              },
              {
                name: 'Presupuesto Familiar',
                desc: 'Entiende en qué se va tu dinero y controla tus gastos de verdad. Sin bancos, sin apps raras, sin suscripciones.',
                tag: 'Personal',
              },
            ].map((p) => (
              <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-display font-black text-xl text-white">{p.name}</span>
                  <span className="flex-shrink-0 text-xs font-body font-semibold text-[#c8f135] border border-[#c8f135]/30 rounded-full px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-28 bg-[#0F0F1A] border-t border-white/10">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-5">
            Cuéntame qué necesitas.
          </h2>
          <p className="font-body text-[#94A3B8] text-base leading-relaxed mb-10">
            Si es algo sencillo, te enseño una maqueta antes de pagar nada.<br />
            Si no se puede hacer, te lo digo igual.
          </p>
          <a
            href={WHATSAPP_IDEA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-8 py-5 rounded-2xl hover:bg-[#b8e020] transition-colors duration-200 mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cuéntame tu idea
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-5">
            {['Sin compromiso', 'Maqueta gratis si aplica', 'Sin letra pequeña'].map((item) => (
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
