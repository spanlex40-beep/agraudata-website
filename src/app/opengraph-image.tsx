import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AgrauData — Consultor de Datos y Automatización'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F0F1A',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '36px' }}>
            <div style={{ width: '7px', height: '12px', background: '#c8f135', opacity: 0.3, borderRadius: '4px' }} />
            <div style={{ width: '7px', height: '20px', background: '#c8f135', opacity: 0.55, borderRadius: '4px' }} />
            <div style={{ width: '7px', height: '28px', background: '#c8f135', opacity: 0.8, borderRadius: '4px' }} />
            <div style={{ width: '7px', height: '36px', background: '#c8f135', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '32px', color: '#ffffff', fontWeight: 300, letterSpacing: '-0.5px' }}>
            Agrau<span style={{ fontWeight: 700, color: '#c8f135' }}>Data</span>
          </span>
        </div>

        {/* Titular */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '62px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}
          >
            Tus números están ahí.
          </div>
          <div
            style={{
              fontSize: '62px',
              fontWeight: 900,
              color: '#c8f135',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}
          >
            Te ayudo a entenderlos.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '20px', color: '#64748B' }}>
            Hostelería · Pymes · Costa del Sol
          </span>
          <span style={{ fontSize: '20px', color: '#64748B' }}>
            agraudata.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
