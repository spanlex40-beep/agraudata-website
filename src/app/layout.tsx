import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'AgrauData — Automation & Data Intelligence Consultant',
  description:
    'Ayudo a empresas a automatizar procesos y tomar mejores decisiones con datos. Servicios de Business Intelligence, automatización y análisis financiero.',
  openGraph: {
    title: 'AgrauData — Automation & Data Intelligence Consultant',
    description:
      'Ayudo a empresas a automatizar procesos y tomar mejores decisiones con datos.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
