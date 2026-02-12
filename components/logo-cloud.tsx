"use client"

import { motion } from "framer-motion"

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Trusted by 100+ DJs & producers
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            From bedroom producers to touring artists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-zinc-400 text-sm ml-2">5.0 from 50+ reviews</span>
            </div>

            {/* Platform icons */}
            <div className="flex items-center gap-12 opacity-60">
              {/* Beatport-style icon */}
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                </svg>
                <span className="text-sm font-medium">Beatport</span>
              </div>
              {/* Spotify-style icon */}
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 10c3-1 6-1 8 0" stroke="#09090B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M7 13c4-1 7-1 10 0" stroke="#09090B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M9 16c2.5-0.5 5-0.5 7 0" stroke="#09090B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
                <span className="text-sm font-medium">Spotify</span>
              </div>
              {/* SoundCloud-style icon */}
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 14v4M6 12v6M9 10v8M12 8v10M15 11v7M18 9v9M21 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                <span className="text-sm font-medium">SoundCloud</span>
              </div>
              {/* YouTube-style icon */}
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="5" width="20" height="14" rx="3" />
                  <path d="M10 9l5 3-5 3V9z" fill="#09090B" />
                </svg>
                <span className="text-sm font-medium">YouTube</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
