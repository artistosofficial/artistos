"use client"

export function HeroCTA() {
  return (
    <a
      href="#pricing"
      onClick={() => (window as any).gtag?.('event', 'cta_click', { button_location: 'hero' })}
      className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[#E85002]/60 bg-[#E85002]/10 text-[#E85002] text-sm font-medium hover:bg-[#E85002]/20 transition-colors"
    >
      Get 60% Off Today
    </a>
  )
}
