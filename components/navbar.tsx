"use client"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">ArtistOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="text-sm text-[#E85002] px-3.5 py-1.5 rounded-md transition-colors border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
            >
              Get ArtistOS
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
