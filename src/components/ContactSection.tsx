'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '', sector: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Error al enviar. Inténtalo de nuevo.')
      } else {
        setSent(true)
      }
    } catch {
      setError('Error de conexión. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-24 bg-[#0A0F1E] relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#2563EB] opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body font-semibold text-[#2563EB] uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4 leading-tight">
              Solicita una demo gratuita
            </h2>
            <p className="font-body text-[#94A3B8] leading-relaxed mb-8 max-w-sm">
              Cuéntame cómo gestionas tu negocio ahora. En 48 horas te muestro qué se puede
              mejorar y cómo lo haríamos.
            </p>

            <div className="space-y-4">
              {[
                { icon: '✓', text: 'Demo personalizada con tus datos reales' },
                { icon: '✓', text: 'Sin compromiso ni coste' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-body text-sm text-[#94A3B8]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#1E293B]">
              <p className="font-body text-xs text-[#64748B] mb-2">O escríbeme directamente</p>
              <a
                href="mailto:info@agraudata.com"
                className="font-body text-sm font-medium text-[#2563EB] hover:underline underline-offset-4"
              >
                info@agraudata.com
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {sent ? (
              <div className="bg-[#0F172A] rounded-2xl p-10 border border-[#1E293B] text-center">
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path d="M4 10l4 4 8-8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Mensaje recibido
                </h3>
                <p className="font-body text-[#94A3B8] text-sm">
                  Gracias por tu mensaje. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0F172A] rounded-2xl p-8 border border-[#1E293B] space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                      Negocio
                    </label>
                    <input
                      type="text"
                      maxLength={200}
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Nombre del local"
                      className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                    Sector
                  </label>
                  <select
                    required
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2563EB] transition-colors appearance-none"
                  >
                    <option value="" disabled>Selecciona tu sector</option>
                    <option value="restaurante">🍽️ Restaurante / Hostelería</option>
                    <option value="clinica">🏥 Clínica / Salud</option>
                    <option value="asesoria">📁 Asesoría / Gestoría</option>
                    <option value="taller">🔧 Taller / Industria</option>
                    <option value="autonomo">👤 Autónomo / Freelance</option>
                    <option value="otro">🏢 Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-medium text-[#94A3B8] mb-1.5">
                    ¿Qué necesitas mejorar?
                  </label>
                  <textarea
                    required
                    rows={4}
                    maxLength={3000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntame en qué punto estás y qué problema quieres resolver..."
                    className="w-full font-body text-sm bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="font-body text-xs text-red-400 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2563EB] text-white font-body font-semibold text-sm py-3.5 rounded-xl hover:bg-[#1D4ED8] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Solicitar demo gratuita →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
