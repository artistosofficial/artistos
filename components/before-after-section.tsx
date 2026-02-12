"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const beforeItems = [
  "Ideas scattered across Notes, Voice Memos, and random folders",
  "Release day panic — scrambling for artwork and assets",
  "No idea how much you actually made this year",
  "Posting content randomly with no plan",
  "Forgetting who you met at that festival",
  "Setting goals but never tracking them",
]

const afterItems = [
  "Every idea captured in your Creative Vault",
  "Releases planned weeks ahead with clear checklists",
  "Real-time financial dashboard with P&L",
  "Content calendar synced to your releases",
  "Network CRM for every industry contact",
  "Quarterly goals with progress tracking",
]

export function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            The difference is night and day
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Most producers are running their career on vibes. Here's what changes with ArtistOS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                <X className="w-4 h-4 text-zinc-400" />
              </div>
              <span className="text-zinc-400 font-medium">Before ArtistOS</span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/30 border border-white rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">With ArtistOS</span>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
