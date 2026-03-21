import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#060B15] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logo.svg" alt="AgrauData" style={{ height: '32px', width: 'auto' }} />

        <div className="flex flex-col items-center gap-2">
          <p className="font-body text-xs text-[#475569]">
            © AgrauData · 2025 ·{' '}
            <span className="text-[#c8f135]/70">Deja que los datos trabajen por ti.</span>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacidad"
              className="font-body text-xs text-[#475569] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
            <span className="text-[#1E293B]">·</span>
            <Link
              href="/aviso-legal"
              className="font-body text-xs text-[#475569] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Aviso Legal
            </Link>
          </div>
        </div>

        <a
          href="mailto:info@agraudata.com"
          className="font-body text-xs text-[#c8f135]/80 hover:text-[#c8f135] transition-colors underline-offset-4 hover:underline"
        >
          info@agraudata.com
        </a>
      </div>
    </footer>
  )
}
