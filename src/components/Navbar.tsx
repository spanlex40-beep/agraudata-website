'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/34618737606?text=Hola%20Alexandre%2C%20me%20gustar%C3%ADa%20contarte%20mi%20caso.'

const links = [
  { label: 'Hostelería', href: '/hosteleria' },
  { label: 'Otros negocios', href: '/negocios' },
  { label: 'Productos', href: '/productos' },
  { label: 'Quién soy', href: '/#quien-soy' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A] border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="AgrauData" style={{ height: '32px', width: 'auto' }} />
        </Link>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={label}
                href={href}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  active ? 'text-white' : 'text-[#D4D4D8] hover:text-white'
                }`}
              >
                {label}
                {active && (
                  <span className="block h-0.5 bg-[#c8f135] rounded-full mt-0.5" />
                )}
              </Link>
            )
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-bold bg-[#c8f135] text-[#0F0F1A] px-4 py-2 rounded-xl hover:bg-[#b8e020] transition-colors duration-200"
          >
            Escríbeme
          </a>
        </div>

        {/* Burger — mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F1A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm font-medium py-1 transition-colors duration-200 ${
                pathname === href ? 'text-white' : 'text-[#D4D4D8] hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center font-body text-sm font-bold bg-[#c8f135] text-[#0F0F1A] px-4 py-3 rounded-xl hover:bg-[#b8e020] transition-colors duration-200"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      )}
    </motion.nav>
  )
}
