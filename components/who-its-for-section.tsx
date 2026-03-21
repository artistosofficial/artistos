"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const personas = [
  {
    title: "You're getting gigs",
    description:
      "You're playing shows, building your network, and starting to get real opportunities, but managing it all is becoming a second full-time job.",
  },
  {
    title: "You're releasing music",
    description:
      "You have tracks in progress, label relationships to manage, and releases that need real planning. Not just a group chat and a prayer.",
  },
  {
    title: "You're building a brand",
    description:
      "You understand that the music alone isn't enough. You need content, positioning, and consistent presence. You just need the system to make it happen.",
  },
]

export function WhoItsForSection() {
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
          className="mb-6"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Who it's for</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-white mb-4"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Built for DJs and producers who are serious about their careers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-400 max-w-lg mb-16"
        >
          ArtistOS is not for beginners. It's for DJs and producers who are serious about building a career, not just a hobby.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-medium text-lg mb-3">{persona.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{persona.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
