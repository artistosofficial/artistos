"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Music, Calendar, DollarSign, Share2, Lightbulb, Users, Target, Disc3, Palette, Library, Plane, FolderKanban } from "lucide-react"

const modules = [
  { name: "Release Pipeline", icon: Music, selected: true, gpts: 1 },
  { name: "Bookings", icon: Calendar, selected: false, gpts: 2 },
  { name: "Financial Dashboard", icon: DollarSign, selected: false, gpts: 2 },
  { name: "Content Calendar", icon: Share2, selected: false, gpts: 6 },
  { name: "Music Production", icon: Lightbulb, selected: false, gpts: 1 },
  { name: "Booking & Contacts", icon: Users, selected: false, gpts: 2 },
  { name: "Goals & Milestones", icon: Target, selected: false, gpts: 1 },
  { name: "A&R & Labels", icon: Disc3, selected: false, gpts: 2 },
  { name: "Brand & Suppliers", icon: Palette, selected: false, gpts: 1 },
  { name: "Music Library", icon: Library, selected: false, gpts: 1 },
  { name: "Travel", icon: Plane, selected: false, gpts: 1 },
  { name: "Side Projects", icon: FolderKanban, selected: false, gpts: 2 },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#E85002]" />
            <span className="text-zinc-400 text-sm">14 AI assistants</span>
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
            Everything you need. Nothing you don't.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">One workspace, every area covered.</span> Each one designed for a specific
            part of your music business, all connected so nothing falls through the cracks.
          </motion.p>

          {/* Learn more button */}
          <motion.a
            href="#demo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm items-center gap-2 mb-16"
          >
            See it in action
            <ChevronRight className="w-4 h-4" />
          </motion.a>

          {/* Module selector mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay effect */}
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4 flex items-center justify-between">
                  <span className="text-zinc-500 italic">Choose a module...</span>
                  <span className="text-zinc-600 text-xs">Dedicated areas · 14 AI assistants</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {modules.map((module, index) => {
                    const Icon = module.icon
                    return (
                      <div
                        key={module.name}
                        style={
                          module.selected
                            ? {
                                transform: "scale(1.04) rotateX(17deg)",
                                background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                                borderRadius: "6px",
                                height: "48px",
                                position: "relative",
                                boxShadow:
                                  "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                                zIndex: 20,
                                marginLeft: "-12px",
                                marginRight: "-12px",
                              }
                            : {
                                opacity: 1 - index * 0.12,
                                height: "42px",
                              }
                        }
                      >
                        <div
                          className="flex items-center justify-between h-full"
                          style={{
                            paddingLeft: "24px",
                            paddingRight: "24px",
                            gap: "12px",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${module.selected ? "text-white" : "text-zinc-500"}`} />
                            <span className={module.selected ? "text-white font-medium" : "text-zinc-300"}>
                              {module.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${module.selected ? "bg-zinc-600/50 text-zinc-300" : "bg-zinc-800/50 text-zinc-500"}`}>
                              {module.gpts === 1 ? "1 GPT" : `${module.gpts} GPTs`}
                            </span>
                            {module.selected && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom divider with two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column - Release Pipeline */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Release Pipeline</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Track every single, EP, and album from idea to release. Never miss a deadline or forget a task.
                </p>

                {/* Release Card Preview */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Music className="w-4 h-4 text-white" />
                    <span className="text-zinc-500 text-sm">
                      Release <span className="text-zinc-300">Pipeline</span>
                    </span>
                  </div>

                  {/* Status Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Status</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm"
                        style={{ background: "#FFFFFF" }}
                      >
                        <span className="w-2 h-2 bg-zinc-400 rounded-full" />
                        <span className="text-zinc-900">Mastering</span>
                      </span>
                    </div>
                  </div>

                  {/* Release Date Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Release</span>
                    <span className="text-zinc-400 text-sm">Mar 15, 2025</span>
                  </div>

                  {/* Checklist */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-zinc-600 text-sm w-20 pt-1">Tasks</span>
                    <div className="flex flex-col gap-1.5">
                      <span className="flex items-center gap-2 text-zinc-400 text-sm">
                        <span className="w-3.5 h-3.5 rounded bg-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-zinc-900" />
                        </span>
                        Final mix approved
                      </span>
                      <span className="flex items-center gap-2 text-zinc-400 text-sm">
                        <span className="w-3.5 h-3.5 rounded bg-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-zinc-900" />
                        </span>
                        Artwork done
                      </span>
                      <span className="flex items-center gap-2 text-zinc-500 text-sm">
                        <span className="w-3.5 h-3.5 rounded border border-zinc-600" />
                        Distribution
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Financial Dashboard */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Financial Dashboard</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Track income from streams, gigs, and sales. See exactly where your money comes from and goes.
                </p>

                {/* Financial Preview */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <DollarSign className="w-4 h-4 text-zinc-400" />
                    <span className="text-zinc-500 text-sm font-sans">
                      Financial <span className="text-zinc-300">Overview</span>
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Streaming Income</span>
                      <span className="text-white">€1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Gig Payments</span>
                      <span className="text-white">€3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Sync Licenses</span>
                      <span className="text-white">€800</span>
                    </div>
                    <div className="h-px bg-zinc-700 my-2" />
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Total Revenue</span>
                      <span className="text-white font-medium">€5,547</span>
                    </div>
                  </div>

                  <div className="bg-zinc-800/40 rounded-lg p-4 font-sans">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">Monthly Expenses</span>
                      <span className="text-zinc-400 text-sm">€892</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-zinc-400 text-sm font-medium">Net Profit</span>
                      <span className="text-white font-medium">€4,655</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
