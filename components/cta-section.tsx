"use client"

import { useEmailCapture } from "@/lib/email-capture-context"

export function CTASection() {
  const { openModal } = useEmailCapture()

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight max-w-2xl">
            Handle the business.
            <br />
            Focus on the art.
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Join DJs and producers who stopped winging it and started building a real career.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => openModal("cta")}
              className="px-6 py-3 text-[#E85002] font-medium rounded-lg transition-colors text-sm border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
            >
              Get Early Access
            </button>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="text-[#E85002]">★★★★★</span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
