'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const actions = [
  {
    label: 'Soy hostelero',
    icon: '🍽️',
    href: '/hosteleria',
    dark: true,
  },
  {
    label: 'Quiero automatizar',
    icon: '⚙️',
    href: '/negocios',
    dark: false,
  },
  {
    label: 'Maqueta gratis',
    icon: '🖥️',
    href: '/productos#webs',
    dark: false,
  },
  {
    label: 'Ver productos',
    icon: '📦',
    href: '/productos',
    dark: false,
  },
]

export default function FloatingQuickNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-fit"
        >
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#E8E8E4] rounded-2xl shadow-[0_8px_32px_rgba(15,15,26,0.14)] px-3 py-2.5 overflow-x-auto no-scrollbar">
            <span className="font-body text-xs text-[#9B9BA8] whitespace-nowrap pr-2 border-r border-[#E8E8E4] mr-1 hidden sm:block">
              ¿Por dónde empiezas?
            </span>
            {actions.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className={`flex items-center gap-1.5 whitespace-nowrap font-body font-semibold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex-shrink-0 ${
                  a.dark
                    ? 'bg-[#0F0F1A] text-white hover:bg-[#c8f135] hover:text-[#0F0F1A]'
                    : 'bg-[#F4F4F0] text-[#0F0F1A] hover:bg-[#0F0F1A] hover:text-white'
                }`}
              >
                <span className="text-sm leading-none">{a.icon}</span>
                {a.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
