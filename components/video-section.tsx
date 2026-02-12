"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section id="demo" className="relative py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            See it in action
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Watch a 3-minute walkthrough of how ArtistOS works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
        >
          {/* Placeholder with gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)",
            }}
          />

          {/* Play button */}
          <button className="absolute inset-0 flex items-center justify-center group">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 bg-white"
            >
              <Play className="w-8 h-8 text-zinc-900 ml-1" fill="currentColor" />
            </div>
          </button>

          {/* Video thumbnail placeholder text */}
          <div className="absolute bottom-6 left-6">
            <p className="text-zinc-500 text-sm">3 min walkthrough</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
