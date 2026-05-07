'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20gustar%C3%ADa%20contarte%20mi%20caso.'

const SECTORS = [
  { value: 'restaurante', label: 'Hostelería (restaurante, bar, hotel…)' },
  { value: 'clinica',     label: 'Clínica o centro de salud' },
  { value: 'asesoria',    label: 'Asesoría o gestoría' },
  { value: 'taller',      label: 'Taller o empresa de servicios técnicos' },
  { value: 'autonomo',    label: 'Autónomo / freelance' },
  { value: 'otro',        label: 'Otro tipo de negocio' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function InputField({
  label, id, type = 'text', required = false, placeholder, value, onChange, optional = false,
}: {
  label: string; id: string; type?: string; required?: boolean
  placeholder?: string; value: string; onChange: (v: string) => void; optional?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-body text-sm font-semibold text-[#0F0F1A] flex items-center gap-1.5">
        {label}
        {optional && <span className="font-normal text-[#9B9BA8] text-xs">(opcional)</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl border border-[#E8E8E4] bg-white px-4 py-3 font-body text-sm text-[#0F0F1A] placeholder:text-[#B0B0BC]
          focus:outline-none focus:border-[#0F0F1A] focus:ring-2 focus:ring-[#c8f135]/30 transition-all duration-200"
      />
    </div>
  )
}

function ContactForm() {
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [phone,    setPhone]    = useState('')
  const [business, setBusiness] = useState('')
  const [sector,   setSector]   = useState('')
  const [message,  setMessage]  = useState('')
  const [status,   setStatus]   = useState<Status>('idle')
  const [errMsg,   setErrMsg]   = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, business, sector: sector || 'otro', message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Error desconocido')
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrMsg(err instanceof Error ? err.message : 'Algo salió mal. Inténtalo de nuevo.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-[#E8E8E4] p-10 flex flex-col items-center text-center gap-4"
      >
        <span className="w-14 h-14 rounded-full bg-[#c8f135] flex items-center justify-center">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden>
            <path d="M2 10l7 7L22 2" stroke="#0F0F1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3 className="font-display font-black text-xl text-[#0F0F1A]">Mensaje recibido</h3>
        <p className="font-body text-sm text-[#4A4A5A] leading-relaxed max-w-xs">
          Te he enviado un correo de confirmación. Normalmente respondo en menos de 2 horas.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8E8E4] p-8 flex flex-col gap-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Nombre" id="name" required placeholder="Tu nombre" value={name} onChange={setName} />
        <InputField label="Email" id="email" type="email" required placeholder="tu@email.com" value={email} onChange={setEmail} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Teléfono" id="phone" type="tel" placeholder="+34 600 000 000" value={phone} onChange={setPhone} optional />
        <InputField label="Nombre del negocio" id="business" placeholder="Mi negocio SL" value={business} onChange={setBusiness} optional />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="sector" className="font-body text-sm font-semibold text-[#0F0F1A] flex items-center gap-1.5">
          Tipo de negocio
          <span className="font-normal text-[#9B9BA8] text-xs">(opcional)</span>
        </label>
        <select
          id="sector"
          value={sector}
          onChange={e => setSector(e.target.value)}
          className="w-full rounded-xl border border-[#E8E8E4] bg-white px-4 py-3 font-body text-sm text-[#0F0F1A]
            focus:outline-none focus:border-[#0F0F1A] focus:ring-2 focus:ring-[#c8f135]/30 transition-all duration-200
            appearance-none cursor-pointer"
        >
          <option value="">Selecciona tu sector…</option>
          {SECTORS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-sm font-semibold text-[#0F0F1A]">
          ¿Qué está pasando en tu negocio? <span className="text-[#c8f135]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Cuéntame tu situación. No hace falta que sea perfecto."
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full rounded-xl border border-[#E8E8E4] bg-white px-4 py-3 font-body text-sm text-[#0F0F1A] placeholder:text-[#B0B0BC]
            focus:outline-none focus:border-[#0F0F1A] focus:ring-2 focus:ring-[#c8f135]/30 transition-all duration-200 resize-none"
        />
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-body text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-100"
          >
            {errMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2.5 bg-[#0F0F1A] text-white font-body font-bold text-sm
          px-6 py-4 rounded-xl hover:bg-[#1e1e2e] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Enviando…
          </>
        ) : (
          <>
            Enviar mensaje
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="font-body text-xs text-[#9B9BA8] text-center">
        Sin spam. Sin letra pequeña. Solo te escribo si puedo ayudarte.
      </p>
    </form>
  )
}

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contacto" className="py-24 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Izquierda — texto + WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-[#0F0F1A] mt-4 mb-5 leading-tight">
              Si algo no cuadra<br />en tu negocio,<br />
              <span className="text-[#6B6B7A]">probablemente tengas razón.</span>
            </h2>
            <p className="font-body text-base text-[#4A4A5A] mb-8 leading-relaxed">
              Cuéntame tu caso. Rellena el formulario o escríbeme directamente por WhatsApp. Sin compromiso y sin prisa.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c8f135] text-[#0F0F1A] font-body font-black text-base px-8 py-4 rounded-2xl
                hover:bg-[#b8e020] transition-colors duration-200 shadow-[0_8px_32px_rgba(200,241,53,0.3)] mb-10"
            >
              <WhatsAppIcon size={20} />
              Escríbeme por WhatsApp
            </a>

            <div className="flex flex-col gap-3 pt-8 border-t border-[#E8E8E4]">
              {[
                'Sin compromiso',
                'Normalmente respondo en menos de 2 horas',
                'Si no puedo ayudarte, te lo digo',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
                      <path d="M1 3l2 2 4-4" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-sm text-[#4A4A5A]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
