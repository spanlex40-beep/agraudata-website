'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectar a un backend de formularios (ej: Formspree, Resend)
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 bg-[#F7F6F3]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body font-semibold text-[#0047FF] uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F0F1A] mt-2 mb-4 leading-tight">
              Let&apos;s build something<br />that works
            </h2>
            <p className="font-body text-[#6B6B7A] text-base leading-relaxed mb-8 max-w-sm">
              Si quieres automatizar procesos, mejorar tu control de datos o construir
              herramientas internas para tu empresa, hablemos.
            </p>

            <a
              href="mailto:hello@agraudata.com"
              className="inline-flex items-center gap-2 font-body text-[#0047FF] font-medium hover:underline underline-offset-4"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              hello@agraudata.com
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {sent ? (
              <div className="bg-white rounded-2xl p-10 border border-[#E3E1DC] text-center">
                <div className="w-12 h-12 bg-[#E8EFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="#0047FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-[#0F0F1A] mb-2">
                  Mensaje enviado
                </h3>
                <p className="font-body text-[#6B6B7A] text-sm leading-relaxed">
                  Gracias por tu mensaje. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-[#E3E1DC] space-y-5"
              >
                <div>
                  <label className="block font-body text-sm font-medium text-[#0F0F1A] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full font-body text-sm bg-[#F7F6F3] border border-[#E3E1DC] rounded-xl px-4 py-3 text-[#0F0F1A] placeholder-[#A0A0A8] focus:outline-none focus:border-[#0047FF] focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-[#0F0F1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full font-body text-sm bg-[#F7F6F3] border border-[#E3E1DC] rounded-xl px-4 py-3 text-[#0F0F1A] placeholder-[#A0A0A8] focus:outline-none focus:border-[#0047FF] focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-[#0F0F1A] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntame en qué te puedo ayudar..."
                    className="w-full font-body text-sm bg-[#F7F6F3] border border-[#E3E1DC] rounded-xl px-4 py-3 text-[#0F0F1A] placeholder-[#A0A0A8] focus:outline-none focus:border-[#0047FF] focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0047FF] text-white font-body font-semibold text-sm py-3.5 rounded-xl hover:bg-[#0038CC] transition-colors duration-200 shadow-[0_4px_12px_rgba(0,71,255,0.2)]"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
