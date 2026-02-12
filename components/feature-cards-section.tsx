"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Music, Calendar, DollarSign, Share2 } from "lucide-react"

const painPoints = [
  {
    icon: Music,
    title: "Ideas everywhere, finished nowhere",
    description: "Voice memos, loops, and half-finished projects scattered across devices with no system to bring them home.",
  },
  {
    icon: Calendar,
    title: "Release day is always a scramble",
    description: "Artwork, distribution, promo assets — it's always a last-minute panic because nothing is tracked in one place.",
  },
  {
    icon: DollarSign,
    title: "No clue where the money goes",
    description: "Streams, gig payments, expenses — you know you made something, but you can't say how much or where it went.",
  },
  {
    icon: Share2,
    title: "Content feels like a second job",
    description: "You know you should post more, but without a plan, it's either random bursts or radio silence.",
  },
]

export function FeatureCardsSection() {
  return (
    <div id="features" className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Sound familiar?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Most producers juggle their music career across scattered notes, random folders, and mental to-do lists.
                ArtistOS brings everything into one organized workspace.
              </p>
            </motion.div>
          </div>

          {/* Pain point cards - 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative p-8"
                style={{
                  borderRadius: "24px",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-2">{card.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
