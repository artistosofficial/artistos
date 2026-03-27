"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const VIDEO_URL = "https://nzvtlstmfgufcshunlhw.supabase.co/storage/v1/object/public/videos/artistos-walkthrough-web.mp4"

export function VideoSection() {
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handlePlay() {
    if (!videoRef.current) return
    videoRef.current.play()
    setHasStarted(true)
  }

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
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="w-full h-full object-cover"
            playsInline
            controls={hasStarted}
            preload="metadata"
          />

          {/* Play overlay - only shown before first play */}
          {!hasStarted && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 bg-white">
                <Play className="w-8 h-8 text-zinc-900 ml-1" fill="currentColor" />
              </div>
            </button>
          )}

          {/* Duration label */}
          {!hasStarted && (
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <p className="text-zinc-500 text-sm">3 min walkthrough</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
