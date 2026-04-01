"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const PRODUCT_LINK = process.env.NEXT_PUBLIC_ARTISTOS_PRODUCT_LINK
  || "https://honey-justice-ee1.notion.site/Getting-Started-with-ArtistOS-334925ffb4e881ef9f1afd9fb87162e3"

export default function SuccessPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#09090B" }}
    >
      {/* Backdrop blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 max-w-md w-full bg-zinc-900/80 border border-zinc-800 rounded-2xl p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-[#E85002]/20 border-2 border-[#E85002] flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-8 h-8 text-[#E85002]" />
        </motion.div>

        <h1
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          You're in.
        </h1>

        <p className="text-zinc-400 text-lg mb-2">
          Your ArtistOS is ready.
        </p>

        <p className="text-zinc-500 text-sm mb-8">
          Check your email for the setup link, or click below to get started now.
        </p>

        <a
          href={PRODUCT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center text-[#E85002] font-medium rounded-lg transition-colors text-base border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20 mb-4"
        >
          Get Started
        </a>

        <Link
          href="/"
          className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors"
        >
          Back to artistos.pro
        </Link>
      </motion.div>
    </div>
  )
}
