'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20gustar%C3%ADa%20contarte%20mi%20caso.'

const quickLinks = [
  { label: 'Soy hostelero', href: '/hosteleria' },
  { label: 'Otros sectores', href: '/negocios' },
  { label: 'Ver productos', href: '/productos' },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
})

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FAFAF8] flex items-center pt-16 lg:pt-0">
      <div className="max-w-6xl mx-auto px-6 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-24">

          {/* Columna izquierda */}
          <div className="order-1 lg:order-1">

            <motion.p
              {...fadeUp(0)}
              className="text-xs font-body font-semibold text-[#6B6B7A] uppercase tracking-widest mb-5"
            >
              Hostelería · Control financiero · Automatización
            </motion.p>

            <motion.h1
              {...fadeUp(0.05)}
              className="font-display font-black text-4xl md:text-5xl lg:text-[3.25rem] text-[#0F0F1A] leading-[1.1] tracking-tight mb-5"
            >
              Tus números están ahí.<br />
              <span className="relative inline-block">
                Te ayudo a entender tu negocio.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#c8f135] origin-left rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="font-body text-lg text-[#4A4A5A] leading-relaxed mb-2"
            >
              Trabajo con tus datos reales para que tengas claro cómo funciona tu negocio.
            </motion.p>

            <motion.p
              {...fadeUp(0.13)}
              className="font-body text-sm font-semibold text-[#0F0F1A] mb-8"
            >
              Trabajo contigo. No vendo humo.<br />
              Todo adaptado a tu negocio. Sin plantillas.
            </motion.p>

            {/* CTA principal — 3 caminos */}
            <motion.div {...fadeUp(0.18)} className="mb-5">
              <p className="font-body text-sm font-semibold text-[#6B6B7A] uppercase tracking-widest mt-2 mb-4">
                ¿Qué necesitas ahora?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex-1 text-center font-body font-bold text-sm px-5 py-4 rounded-xl bg-white border border-[#E8E8E4] text-[#0F0F1A] hover:bg-[#c8f135]/10 hover:border-[#c8f135] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(15,15,26,0.08)] transition-all duration-200 ease-out"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp — secundario */}
            <motion.div {...fadeUp(0.24)} className="mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[#6B6B7A] hover:text-[#0F0F1A] transition-colors duration-200"
              >
                <WhatsAppIcon />
                O escríbeme por WhatsApp
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              {...fadeUp(0.28)}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-[#E8E8E4]"
            >
              {['Sin compromiso', 'Respuesta rápida', 'Experiencia real en hostelería'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
                      <path d="M1 3l2 2 4-4" stroke="#0F0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-sm text-[#6B6B7A]">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="hidden lg:flex order-2 lg:order-2 justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#c8f135]/20" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_16px_48px_rgba(15,15,26,0.12)]">
                <Image
                  src="/foto/hero.png"
                  alt="Alexandre — AgrauData"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
