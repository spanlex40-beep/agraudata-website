/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Evita que la web se incruste en iframes (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Evita que el navegador adivine el tipo de contenido
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Controla el referrer en los enlaces salientes
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Fuerza HTTPS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Permisos de APIs del navegador
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // La API solo acepta peticiones con Content-Type JSON
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
    ]
  },
}

export default nextConfig
