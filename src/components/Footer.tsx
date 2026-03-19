export default function Footer() {
  return (
    <footer className="py-8 bg-[#060B15] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logo.svg" alt="AgrauData" style={{ height: '32px', width: 'auto' }} />
        <p className="font-body text-xs text-[#475569]">
          © AgrauData · 2025 ·{' '}
          <span className="text-[#c8f135]/70">Especialistas en hostelería</span>
        </p>
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
