export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-[#E3E1DC]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-[#0F0F1A] tracking-tight">
          AgrauData
        </span>
        <p className="font-body text-sm text-[#6B6B7A]">© AgrauData · 2025</p>
        <a
          href="mailto:hello@agraudata.com"
          className="font-body text-sm text-[#0047FF] hover:underline underline-offset-4"
        >
          hello@agraudata.com
        </a>
      </div>
    </footer>
  )
}
