import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from '@/components/WhatsAppButton'
import '@/styles/globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'AgrauData — Consultor de Datos y Automatización · Costa del Sol',
  description:
    'Ayudo a negocios de hostelería y pymes de la Costa del Sol a automatizar procesos, controlar costes y tomar mejores decisiones con datos. Dashboard, P&L, Menu Engineering y más.',
  openGraph: {
    title: 'AgrauData — Consultor de Datos y Automatización · Costa del Sol',
    description:
      'Automatización, dashboards y control financiero para hostelería y pymes. Soluciones a medida sin plantillas.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://agraudata.com',
    siteName: 'AgrauData',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgrauData — Consultor de Datos y Automatización',
    description: 'Automatización, dashboards y control financiero para hostelería y pymes.',
  },
  metadataBase: new URL('https://agraudata.com'),
  alternates: {
    canonical: 'https://agraudata.com',
  },
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AgrauData',
  description: 'Consultor de automatización y datos para hostelería y pymes en la Costa del Sol. Dashboards, control financiero y herramientas a medida.',
  url: 'https://agraudata.com',
  email: 'info@agraudata.com',
  telephone: '+34618737606',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.5101,
      longitude: -4.8826,
    },
    geoRadius: '100000',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Andalucía',
    addressCountry: 'ES',
  },
  sameAs: [
    'https://www.linkedin.com/in/alexandre-grau',
  ],
  priceRange: '€€',
  knowsAbout: ['automatización de datos', 'dashboards', 'hostelería', 'control financiero', 'Power BI', 'Excel'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
        {children}
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-CGXVRNNBB2" />
      </body>
    </html>
  )
}
