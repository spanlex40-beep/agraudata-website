'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20tengo%20un%20negocio%20y%20me%20gustar%C3%ADa%20contarte%20mi%20caso.'

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

const sectors = [
  {
    label: 'Clínicas', v: 'dark',
    items: ['Control de citas y agenda', 'Ingresos por especialidad o profesional', 'Facturación mensual y previsión', 'Costes de personal y material clínico'],
  },
  {
    label: 'Talleres', v: 'light',
    items: ['Control de órdenes de trabajo', 'Facturación por reparación o cliente', 'Stock de recambios y proveedores', 'Productividad por operario'],
  },
  {
    label: 'Asesorías', v: 'muted',
    items: ['Contabilizar y clasificar facturas', 'Control de cartera de clientes', 'Horas facturables por expediente', 'Dashboard de rentabilidad por cliente'],
  },
  {
    label: 'Inmobiliarias', v: 'light',
    items: ['Seguimiento de leads y oportunidades', 'Comisiones y previsión de cobro', 'Control del portfolio de propiedades', 'Informes de ventas y pipeline'],
  },
  {
    label: 'Comercios', v: 'dark',
    items: ['Ventas por producto, familia o turno', 'Control de stock y rotación', 'Márgenes reales por artículo', 'Comparativa entre periodos'],
  },
  {
    label: 'Distribución', v: 'muted',
    items: ['Pedidos, rutas y entregas', 'Control de clientes y frecuencia', 'Margen real por producto o zona', 'Análisis de devoluciones e incidencias'],
  },
  {
    label: 'Retail', v: 'light',
    items: ['Ventas por turno, vendedor o tienda', 'Stock en tiempo real', 'Comparativa entre puntos de venta', 'Tendencias y estacionalidad'],
  },
  {
    label: 'Oficinas', v: 'dark',
    items: ['Proyectos activos y horas dedicadas', 'Costes por equipo o departamento', 'Facturación y previsión de ingresos', 'KPIs internos de rendimiento'],
  },
  {
    label: 'Negocios familiares', v: 'muted',
    items: ['Visión financiera clara y sencilla', 'Separar lo personal de lo profesional', 'Control de caja y gastos recurrentes', 'Previsión de tesorería a corto plazo'],
  },
  {
    label: 'Eventos', v: 'light',
    items: ['Presupuestos vs. costes reales', 'Control de proveedores y pagos', 'Rentabilidad evento a evento', 'Margen neto por proyecto'],
  },
  {
    label: 'Centros estéticos', v: 'dark',
    items: ['Servicios más rentables por cabina', 'Control de agenda y ocupación', 'Costes de producto por tratamiento', 'Seguimiento de clientes recurrentes'],
  },
  {
    label: 'Empresas de servicios', v: 'muted',
    items: ['Rentabilidad por cliente o contrato', 'Horas facturables y no facturables', 'Costes operativos bajo control', 'Previsión de ingresos y caja'],
  },
]

const problems = [
  { title: 'Tienes datos, pero no claridad', desc: 'Tienes ventas, gastos, facturas e informes… pero no una visión clara para decidir.' },
  { title: 'Los datos están por todos lados', desc: 'Un Excel aquí, otro allá, el contable tiene los suyos y nadie ve la foto completa.' },
  { title: 'Procesos que se hacen a mano', desc: 'Si algo se repite cada semana, probablemente se puede automatizar.' },
  { title: 'No tienes tiempo de mirar los números', desc: 'El día a día se come el análisis. Sabes que hay cosas que revisar, pero nunca es el momento.' },
]

const solutions = [
  { icon: '⚙️', title: 'Menos trabajo manual', desc: 'Automatizo tareas repetitivas para que no pierdas tiempo copiando, pegando o revisando lo mismo cada semana.' },
  { icon: '📂', title: 'Todo en un solo sitio', desc: 'Ventas, gastos, informes o datos dispersos. La idea es tener una visión clara sin depender de diez archivos distintos.' },
  { icon: '📊', title: 'Decidir con datos reales', desc: 'Entiendes qué funciona, qué no y dónde se mueve realmente el negocio.' },
]

const faqs = [
  {
    q: '¿Trabajas con negocios que no son hostelería?',
    a: 'Sí. He trabajado con clínicas, asesorías, talleres, inmobiliarias y comercios. El sector cambia, el problema de fondo es casi siempre el mismo: datos dispersos y poca visibilidad real.',
  },
  {
    q: '¿Necesito cambiar mis herramientas?',
    a: 'No. Trabajo con lo que ya tienes: tu Excel, tu ERP, tu software de facturación o lo que sea que uses. Si en algún momento hay que cambiar algo, te lo digo antes de empezar, no a mitad.',
  },
  {
    q: '¿Puedes ayudarme aunque no sepa bien lo que necesito?',
    a: 'Sí. Muchas veces la conversación empieza por "algo no cuadra pero no sé exactamente qué". Con eso ya es suficiente. La primera conversación sirve para entender tu situación, sin compromiso.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del proyecto. Hay trabajos puntuales de un par de días y proyectos más continuados. Te doy un precio cerrado antes de empezar, sin sorpresas ni horas extra que no acordamos.',
  },
  {
    q: '¿Cuánto tiempo lleva ver resultados?',
    a: 'En proyectos de análisis o dashboards, normalmente en una semana ya tienes algo funcionando. Para automatizaciones más complejas puede llevar más, pero siempre con entregas parciales para que veas el avance.',
  },
  {
    q: '¿Tengo que tener un volumen mínimo de datos o facturación?',
    a: 'No. He trabajado con negocios de una sola persona y con empresas de veinte empleados. Lo que importa es que tengas claro que hay algo que mejorar, no el tamaño.',
  },
  {
    q: '¿Qué pasa con mis datos? ¿Son confidenciales?',
    a: 'Sí, siempre. Trabajo con la información que me compartes exclusivamente para el proyecto. No la uso para nada más ni la comparto con nadie. Si lo prefieres, podemos firmar un acuerdo de confidencialidad.',
  },
  {
    q: '¿Trabajas solo online o también en persona?',
    a: 'Las dos cosas. La mayoría del trabajo se puede hacer en remoto sin problema. Si estás en la zona de la Costa del Sol o Cádiz y prefieres una reunión presencial, también es posible.',
  },
  {
    q: '¿Tengo que ser una empresa grande para que tenga sentido?',
    a: 'Al contrario. Los negocios pequeños y medianos suelen ser los que más partido sacan porque parten de cero y cada mejora se nota de inmediato. No necesitas un equipo de datos ni un presupuesto enorme.',
  },
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

function SectoresBlock() {
  const [active, setActive] = useState<string | null>(null)
  const activeSector = sectors.find(s => s.label === active) ?? null

  return (
    <section className="py-24 bg-white border-b border-[#E8E8E4]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">Sectores</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#0F0F1A] mt-3 mb-5 leading-tight">
              Negocios con los que suelo trabajar.
            </h2>
            <p className="font-body text-base text-[#4A4A5A] leading-relaxed mb-8">
              Cada negocio funciona distinto.<br />
              Pero casi todos terminan teniendo los mismos problemas: datos dispersos, procesos manuales y poca visibilidad real.
            </p>

            {/* Panel detalle — aparece al seleccionar */}
            <AnimatePresence mode="wait">
              {activeSector ? (
                <motion.div
                  key={activeSector.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0F0F1A] rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-white text-lg">{activeSector.label}</span>
                    <button
                      onClick={() => setActive(null)}
                      className="w-6 h-6 rounded-full border border-[#3A3A4A] flex items-center justify-center hover:border-[#c8f135] transition-colors"
                      aria-label="Cerrar"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#9B9BA8" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  <ul className="space-y-2.5">
                    {activeSector.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-3.5 h-3.5 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                          <svg width="6" height="5" viewBox="0 0 7 5" fill="none" aria-hidden>
                            <path d="M1 2.5l1.5 1.5 3.5-3.5" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="font-body text-sm text-[#94A3B8] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-body text-sm text-[#9B9BA8] flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M7 1v6M7 9.5v1" stroke="#9B9BA8" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="7" cy="7" r="6" stroke="#9B9BA8" strokeWidth="1.2"/>
                  </svg>
                  Pulsa en un sector para ver qué puedo hacer.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Derecha — pills */}
          <div className="flex flex-wrap gap-2.5">
            {sectors.map((s, i) => {
              const isActive = active === s.label
              return (
                <motion.button
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setActive(isActive ? null : s.label)}
                  className={`
                    inline-flex items-center px-4 py-2 rounded-full text-sm font-body font-medium
                    border transition-all duration-200 cursor-pointer select-none
                    ${isActive
                      ? 'bg-[#c8f135] text-[#0F0F1A] border-[#c8f135] scale-105'
                      : s.v === 'dark'
                      ? 'bg-[#0F0F1A] text-white border-[#0F0F1A] hover:opacity-80'
                      : s.v === 'muted'
                      ? 'bg-[#F2F2EF] text-[#4A4A5A] border-[#E8E8E4] hover:border-[#0F0F1A] hover:text-[#0F0F1A]'
                      : 'bg-white text-[#0F0F1A] border-[#D8D8D4] hover:border-[#0F0F1A]'
                    }
                  `}
                >
                  {s.label}
                </motion.button>
              )
            })}

            {/* Pill especial — no abre panel */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: sectors.length * 0.04 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body font-semibold
                bg-[#c8f135]/10 text-[#4A4A5A] border border-[#c8f135]/40 select-none"
            >
              <span>✦</span>
              Y otros negocios que quieren más control
            </motion.span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function NegociosPage() {
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
                Para negocios
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-5">
                Ordena tus datos.<br />Entiende tu negocio.<br />
                <span className="text-[#c8f135]">Decide con claridad.</span>
              </h1>
              <p className="font-body text-lg text-[#94A3B8] mb-8 leading-relaxed">
                Clínicas, talleres, asesorías, comercios. El sector cambia. El problema de fondo suele ser el mismo: datos dispersos y costes que nadie controla bien.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-base px-7 py-4 rounded-xl hover:bg-[#b8e020] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cuéntame tu caso
              </a>
            </div>
            <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/foto/negocios-hero.png"
                alt="Negocio revisando datos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <SectoresBlock />

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
                className="bg-white rounded-2xl p-6 border border-[#E8E8E4]">
                <span className="inline-block w-8 h-8 rounded-full bg-[#F2F2EF] border border-[#E8E8E4] text-[#9B9BA8] font-display font-black text-sm flex items-center justify-center mb-4">{i + 1}</span>
                <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2 leading-snug">{p.title}</h3>
                <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">El proceso</span>
          <h2 className="font-display font-black text-3xl text-[#0F0F1A] mt-3 mb-10 leading-tight">Sin rodeos, sin burocracia.</h2>
          <div className="space-y-4">
            {[
              { num: '01', title: 'Me cuentas tu situación', desc: 'Por WhatsApp o videollamada. 30 minutos son suficientes para entender qué está pasando.' },
              { num: '02', title: 'Te digo lo que veo', desc: 'Si puedo ayudarte, te explico cómo y qué implicaría. Si no puedo, te lo digo también.' },
              { num: '03', title: 'Empezamos a ordenar', desc: 'Trabajo con lo que tienes. Sin cambiar tu sistema, sin proyectos infinitos.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-[#E8E8E4]">
                <span className="font-display font-black text-3xl text-[#c8f135] flex-shrink-0 leading-none">{step.num}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-[#6B6B7A] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini caso real */}
      <section className="py-20 bg-[#0F0F1A]">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-body font-semibold text-[#c8f135] uppercase tracking-widest">Un ejemplo sencillo</span>
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <p className="font-display font-black text-2xl md:text-3xl text-white leading-snug">
              Un negocio tenía ventas, compras y gastos repartidos en varios Excels.
            </p>
            <p className="font-body text-lg text-[#94A3B8] mt-5 leading-relaxed">
              En pocos días pasó a tener una visión clara en un único dashboard, con márgenes, evolución mensual y datos listos para decidir.
            </p>
          </motion.blockquote>
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
      <section className="py-20 bg-[#0F0F1A]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-5 leading-tight">
            Si algo no cuadra<br />en tu negocio,<br />
            <span className="text-[#c8f135]">probablemente tengas razón.</span>
          </h2>
          <p className="font-body text-[#94A3B8] mb-8">Escríbeme. Lo vemos sin compromiso y sin prisa.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#c8f135] text-[#0F0F1A] font-body font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#b8e020] transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
