"use client"

import { useEmailCapture } from "@/lib/email-capture-context"

export function HeroCTA() {
  const { openModal } = useEmailCapture()

  return (
    <button
      onClick={() => openModal("hero")}
      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg border border-[#E85002]/60 bg-[#E85002]/10 text-[#E85002] text-sm font-medium hover:bg-[#E85002]/20 transition-colors"
    >
      Get Early Access
    </button>
  )
}
