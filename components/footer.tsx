export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-zinc-500 text-sm">
            © 2026 ArtistOS. All rights reserved.
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
              Features
            </a>
            <a href="#pricing" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
              Pricing
            </a>
            <a href="#faq" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
              FAQ
            </a>
            <a href="mailto:hello@artistos.pro" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
