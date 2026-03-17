'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F6F3]/90 backdrop-blur-md border-b border-[#E3E1DC] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-display font-bold text-xl text-[#0F0F1A] tracking-tight hover:text-[#0047FF] transition-colors duration-200"
        >
          AgrauData
        </a>

        <div className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-sm font-medium text-[#6B6B7A] hover:text-[#0F0F1A] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-body text-sm font-semibold bg-[#0047FF] text-white px-4 py-2 rounded-xl hover:bg-[#0038CC] transition-colors duration-200"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
