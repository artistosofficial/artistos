"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Disc3, DollarSign, Share2, Headphones } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const painPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: "Contacts scattered everywhere",
    description: "Booking contacts scattered across DMs, emails, and notes apps — you lose opportunities because follow-up falls through the cracks.",
  },
  {
    icon: Disc3,
    title: "No system for releases",
    description: "Tracks, labels, deadlines, and promos are managed in your head or a messy spreadsheet. Release day is always a last-minute panic.",
  },
  {
    icon: DollarSign,
    title: "No clue where the money goes",
    description: "Finances? You have a vague idea. Tax season is a nightmare. You don't actually know what you earned or spent on music last year.",
  },
  {
    icon: Share2,
    title: "Content is reactive, not strategic",
    description: "You post when you remember, not when it matters. No strategy, no system, no consistency — just random bursts or radio silence.",
  },
  {
    icon: Headphones,
    title: "More managing than making music",
    description: "You spend more time managing chaos than actually making music — which is why you started this in the first place.",
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">The problem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-2xl mb-16"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            You're talented. Your career systems are a mess.
          </motion.h2>

          {/* Two-column layout: pain points + solution card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Pain points list */}
            <div className="space-y-0">
              {painPoints.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-4 py-5 border-b border-zinc-800 last:border-b-0"
                >
                  <card.icon className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-sm leading-relaxed">{card.description}</span>
                </motion.div>
              ))}
            </div>

            {/* Right: Solution card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/50 border border-zinc-700 p-10 flex flex-col justify-center"
              style={{ borderRadius: "20px" }}
            >
              <h3
                className="text-2xl md:text-3xl text-white mb-4"
                style={{
                  letterSpacing: "-0.0325em",
                  fontVariationSettings: '"opsz" 28',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                There's a better way.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                ArtistOS gives you the exact infrastructure that serious independent artists use to run their careers — without hiring a manager or a team. One workspace. Every area of your career. Built-in AI assistants to do the heavy lifting. So you can focus on the music.
              </p>
              <p className="text-zinc-300 text-sm font-medium">
                Built by artists who needed this and couldn't find it anywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
