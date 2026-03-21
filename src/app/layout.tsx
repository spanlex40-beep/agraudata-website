import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from '@/components/WhatsAppButton'
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
  title: 'AgrauData — Consultor de Automatización y Datos',
  description:
    'Ayudo a negocios de hostelería y pymes a automatizar procesos, controlar costes y tomar mejores decisiones con datos. Dashboard, P&L, Menu Engineering y más.',
  openGraph: {
    title: 'AgrauData — Consultor de Automatización y Datos',
    description:
      'Automatización, dashboards y control financiero para hostelería y pymes. Soluciones a medida sin plantillas.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://agraudata.com',
    siteName: 'AgrauData',
  },
  metadataBase: new URL('https://agraudata.com'),
  alternates: {
    canonical: 'https://agraudata.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="G-CGXVRNNBB2" />
    </html>
  )
}
