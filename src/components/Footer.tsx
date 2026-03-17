export default function Footer() {
  return (
    <footer className="py-6 bg-[#060B15] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-white tracking-tight">AgrauData</span>
        <p className="font-body text-xs text-[#475569]">© AgrauData · 2025 · Especialistas en hostelería</p>
        <a
          href="mailto:info@agraudata.com"
          className="font-body text-xs text-[#2563EB] hover:underline underline-offset-4"
        >
          info@agraudata.com
        </a>
      </div>
    </footer>
  )
}
