/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          // Evita que la web se incruste en iframes (clickjacking)
          { key: 'X-Frame-Options',           value: 'DENY' },
          // Evita que el navegador adivine el tipo de contenido
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          // Controla el referrer en los enlaces salientes
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          // Fuerza HTTPS durante 2 años en todos los subdominios
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Permisos de APIs del navegador
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Content Security Policy
          { key: 'Content-Security-Policy',   value: csp },
          // Evita que el navegador abra archivos directamente
          { key: 'X-Download-Options',        value: 'noopen' },
          // Protección DNS rebinding
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag',   value: 'noindex' },
          { key: 'Cache-Control',  value: 'no-store, no-cache, must-revalidate' },
        ],
      },
    ]
  },
}

export default nextConfig
