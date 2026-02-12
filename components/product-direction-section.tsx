"use client"

import { ChevronRight, Check } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-white" />
          <span className="text-zinc-400 text-sm">Release management</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Plan releases like a label, not a hobbyist
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">See your entire release pipeline at a glance.</span> Track every
          project from demo to distribution with clear milestones and deadlines.
        </p>

        {/* 3D Timeline Visualization */}
        <div
          className="relative w-full mb-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Timeline ruler with tick marks */}
            <div className="relative h-[400px]">
              {/* Diagonal dashed line */}
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  transform: "rotate(0deg)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              {/* Timeline header with dates and tick marks */}
              <div className="absolute top-0 left-0 right-0 flex items-end">
                {/* Tick marks row */}
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Date labels */}
              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>
                Week 1
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "22%", top: "55px" }}>
                Week 2
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "38%", top: "35px" }}>
                Week 3
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "52%", top: "15px" }}>
                Week 4
              </div>
              <div
                className="absolute px-3 py-1 rounded-md text-zinc-900 text-sm font-medium bg-white"
                style={{ left: "62%", top: "-10px" }}
              >
                RELEASE
              </div>

              {/* Project bars */}
              {/* Demo bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "5%",
                  top: "100px",
                  width: "25%",
                  height: "48px",
                }}
              >
                <div className="w-4 h-4 rounded bg-white/60 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-zinc-300 text-sm font-medium">Demo</span>
              </div>

              {/* Mix bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "15%",
                  top: "155px",
                  width: "30%",
                  height: "44px",
                }}
              >
                <div className="w-4 h-4 rounded bg-white/60 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-zinc-400 text-sm">Mix</span>
              </div>

              {/* Master bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "35%",
                  top: "155px",
                  width: "25%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-300 text-sm font-medium">Master</span>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 animate-pulse" />
              </div>

              {/* Release & Promo bar */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "50%",
                  top: "210px",
                  width: "40%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-500 text-sm">Release & Promo</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rounded border border-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded border border-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded border border-zinc-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Plan releases */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Every release, tracked end-to-end</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              From first idea to Spotify link — every step documented, every deadline visible, nothing forgotten.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Summer Nights EP</h4>

              {/* Properties row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Status</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded text-zinc-900 text-xs bg-white">
                    <span className="w-2 h-2 rounded-full bg-zinc-400" />
                    Mastering
                  </span>
                </div>
              </div>

              {/* Genre row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Genre</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-300 text-xs">
                    Deep House
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs">
                    Melodic Techno
                  </span>
                </div>
              </div>

              {/* Milestones row */}
              <div className="flex items-start gap-4">
                <span className="text-zinc-500 text-sm w-20 pt-1">Progress</span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-2.5 h-2.5 rounded bg-white" />
                    Demo Complete <span className="text-zinc-500">100%</span>
                  </span>
                  <span className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-2.5 h-2.5 rounded bg-white" />
                    Mix Approved <span className="text-zinc-500">100%</span>
                  </span>
                  <span className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-2.5 h-2.5 rounded border border-zinc-500 bg-transparent" />
                    Distribution <span className="text-zinc-500">0%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Know your numbers */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Finally know your numbers</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Track every euro in and out. See your real profit, not just vanity metrics.
            </p>

            <div className="relative h-48">
              {/* Background cards */}
              <div
                className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  January — €2,340
                </span>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  February — €3,890
                </span>
              </div>

              {/* Front card - current month */}
              <div
                className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 3v10M3 8l5 5 5-5" />
                    </svg>
                  </span>
                  <span className="text-white font-medium text-sm">March — €5,547</span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">Best month this year! +42% vs February</p>
                <span className="text-zinc-500 text-xs">3 gigs • 2 sync licenses • streaming</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {/* Release Pipeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="8" />
                <path d="M10 6v4l2 2" />
              </svg>
              <span className="text-zinc-200 font-medium">Release Pipeline</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Track every release from idea to distribution.</p>
          </div>

          {/* Gig Manager */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="4" width="14" height="12" rx="2" />
                <path d="M3 8h14M7 4v16" />
              </svg>
              <span className="text-zinc-200 font-medium">Gig Manager</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Bookings, contracts, riders, and payments.</p>
          </div>

          {/* Content Calendar */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-zinc-200 font-medium">Content Calendar</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Plan social content around your releases.</p>
          </div>

          {/* Creative Vault */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2L2 7v6l8 5 8-5V7l-8-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="text-zinc-200 font-medium">Creative Vault</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Store ideas, samples, and project notes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
