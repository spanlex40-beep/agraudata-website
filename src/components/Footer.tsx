import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F0F1A] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logo.svg" alt="AgrauData" style={{ height: '28px', width: 'auto' }} />

        <div className="flex flex-col items-center gap-2">
          <p className="font-body text-xs text-[#A1A1AA]">
            © AgrauData · 2026
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacidad"
              className="font-body text-xs text-[#A1A1AA] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
            <span className="text-[#2A2A3A]">·</span>
            <Link
              href="/aviso-legal"
              className="font-body text-xs text-[#A1A1AA] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Aviso Legal
            </Link>
          </div>
        </div>

        <a
          href="mailto:info@agraudata.com"
          className="font-body text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          info@agraudata.com
        </a>
      </div>
    </footer>
  )
}
