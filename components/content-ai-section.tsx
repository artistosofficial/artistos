"use client"

import { motion } from "framer-motion"
import { ChevronRight, MessageSquare, LayoutGrid, Lightbulb, Smartphone, FileText, PenLine } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const contentGPTs: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: "Social Media Assistant", desc: "Captions, hooks, and hashtag strategy", icon: MessageSquare },
  { name: "Content Pillars GPT", desc: "Define your brand's content themes", icon: LayoutGrid },
  { name: "Content Ideas GPT", desc: "Never run out of things to post", icon: Lightbulb },
  { name: "Format Advisor", desc: "Best format for each platform", icon: Smartphone },
  { name: "Script Writer", desc: "Video scripts and talking points", icon: FileText },
  { name: "Copywriter", desc: "Bios, descriptions, and press copy", icon: PenLine },
]

export function ContentAISection() {
  return (
    <section className="relative py-40 px-6" style={{ backgroundColor: "#09090B" }}>
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
          <div className="w-3 h-3 rounded-full bg-white" />
          <span className="text-zinc-400 text-sm">Content creation</span>
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
          6 AI assistants. Zero creative blocks.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 max-w-md mb-16"
        >
          From content ideas to captions to scripts — ArtistOS has a specialized GPT for every step of your content workflow.
        </motion.p>

        {/* GPT cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentGPTs.map((gpt, index) => (
            <motion.div
              key={gpt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
            >
              <gpt.icon className="w-4 h-4 text-zinc-500 mb-3" />
              <h4 className="text-sm font-semibold text-zinc-200 mb-1">{gpt.name}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{gpt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
