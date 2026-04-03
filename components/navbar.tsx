"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-mark.svg" alt="ArtistOS" width={24} height={22} />
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
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:block text-sm text-[#E85002] px-4 py-2 rounded-md transition-colors border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
              onClick={() => (window as any).gtag?.('event', 'cta_click', { button_location: 'navbar' })}
              >
              Get ArtistOS
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-white transition-colors py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-white transition-colors py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-white transition-colors py-2"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              onClick={() => { setMenuOpen(false); (window as any).gtag?.('event', 'cta_click', { button_location: 'navbar' }); }}
              className="w-full text-sm text-[#E85002] px-4 py-3 rounded-md transition-colors border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20 text-center"
            >
              Get ArtistOS
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
