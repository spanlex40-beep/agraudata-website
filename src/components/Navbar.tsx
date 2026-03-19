'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#soluciones' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#1E293B]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="AgrauData" height={36} style={{ height: '36px', width: 'auto' }} />
        </a>

        <div className="flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-body text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-xl hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
