"use client"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Bot,
  Search,
  Mail,
  Tag,
  DollarSign,
  Target,
  Music,
  Megaphone,
  MessageSquare,
  LayoutGrid,
  PenLine,
  Palette,
  Library,
  Plane,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const allGPTs: { name: string; area: string; desc: string; icon: LucideIcon }[] = [
  { name: "Artist Context Generator", area: "System", desc: "Interviews the artist and generates context for all other GPTs", icon: Bot },
  { name: "Club Researcher GPT", area: "Bookings", desc: "Research venues and festivals that match your sound", icon: Search },
  { name: "Booker GPT", area: "Bookings", desc: "Write personalized booking pitches and follow-ups", icon: Mail },
  { name: "Label GPT", area: "A&R & Labels", desc: "Find matching labels for your genre and style", icon: Tag },
  { name: "Business & Strategy GPT", area: "Finances", desc: "Financial planning, career strategy, and business decisions", icon: DollarSign },
  { name: "Career Coach GPT", area: "Goals", desc: "Help artists set smart goals and track progress", icon: Target },
  { name: "Music Production GPT", area: "Production", desc: "Production assistant for arrangement, mixing, and sound design", icon: Music },
  { name: "Release Promo Assistant", area: "Releases", desc: "Plan and execute release promotion campaigns", icon: Megaphone },
  { name: "Content Strategist GPT", area: "Content", desc: "Your social media strategist for captions, hooks, and hashtags", icon: MessageSquare },
  { name: "Content Pillars GPT", area: "Content", desc: "Help define and refine your brand's content themes", icon: LayoutGrid },
  { name: "Writer GPT", area: "Content", desc: "Write video scripts, hooks, talking points, and copy", icon: PenLine },
  { name: "Branding Assistant", area: "Brand", desc: "Help build and maintain the artist's visual identity", icon: Palette },
  { name: "Music Discovery GPT", area: "Music Library", desc: "Help discover new music for DJ sets and inspiration", icon: Library },
  { name: "Travel Assistant GPT", area: "Travel", desc: "Help plan gig travel logistics and itineraries", icon: Plane },
]

export function ContentAISection() {
  return (
    <section className="relative py-16 md:py-40 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-3 h-3 rounded-full bg-[#E85002]" />
          <span className="text-zinc-400 text-sm">AI assistants</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          14 AI assistants. Zero creative blocks.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 max-w-lg mb-16"
        >
          Every area of ArtistOS comes with a dedicated AI assistant. From booking pitches to release promos to production feedback, they do the work with you.
        </motion.p>

        {/* GPT cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allGPTs.map((gpt, index) => (
            <motion.div
              key={gpt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <gpt.icon className="w-4 h-4 text-zinc-500" />
                <span className="text-[10px] text-zinc-600 font-mono uppercase">{gpt.area}</span>
              </div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-1">{gpt.name}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{gpt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
