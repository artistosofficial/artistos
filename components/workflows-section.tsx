"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Music, Calendar, DollarSign, Share2, Lightbulb, Users, Target, Piano, Mic, Headphones, Sparkles, Disc3, Palette, Library, Plane, FolderKanban } from "lucide-react"

const moduleCards = [
  {
    id: 1,
    category: "Release Pipeline",
    title: "Track every single, EP, album from idea to release",
    icon: Music,
    color: "white",
    gpt: "Release GPT included",
  },
  {
    id: 2,
    category: "Bookings",
    title: "Bookings, contracts, riders, and payment tracking",
    icon: Calendar,
    color: "blue",
    gpt: "Booking GPT included",
  },
  {
    id: 3,
    category: "Financial Dashboard",
    title: "Income, expenses, and P&L at a glance",
    icon: DollarSign,
    color: "emerald",
    gpt: "Finance GPT included",
  },
  {
    id: 4,
    category: "Content Calendar",
    title: "Plan social media around your releases",
    icon: Share2,
    color: "pink",
    gpt: "Content GPT included",
  },
  {
    id: 5,
    category: "Music Production",
    title: "Track projects from idea to release with sessions, stems, and feedback",
    icon: Lightbulb,
    color: "yellow",
    gpt: "Production GPT included",
  },
  {
    id: 6,
    category: "Booking & Contacts",
    title: "Promoters, labels, collaborators organized",
    icon: Users,
    color: "orange",
    gpt: "Booking GPT included",
  },
  {
    id: 7,
    category: "Goals & Milestones",
    title: "Quarterly goals and career milestones",
    icon: Target,
    color: "cyan",
    gpt: "Strategy GPT included",
  },
  {
    id: 8,
    category: "A&R & Labels",
    title: "Track submissions, label contacts, and A&R feedback",
    icon: Disc3,
    color: "white",
    gpt: "A&R GPT included",
  },
  {
    id: 9,
    category: "Brand & Suppliers",
    title: "Designers, photographers, merch vendors all in one place",
    icon: Palette,
    color: "white",
    gpt: "Brand GPT included",
  },
  {
    id: 10,
    category: "Music Library",
    title: "Catalog every track, remix, and version with metadata",
    icon: Library,
    color: "white",
    gpt: "Library GPT included",
  },
  {
    id: 11,
    category: "Travel",
    title: "Flights, hotels, and logistics for every gig and tour",
    icon: Plane,
    color: "white",
    gpt: "Travel GPT included",
  },
  {
    id: 12,
    category: "Side Projects",
    title: "Aliases, collabs, and side hustles tracked separately",
    icon: FolderKanban,
    color: "white",
    gpt: "Projects GPT included",
  },
]

function ReleasePipelineMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="space-y-2">
        {["Demo", "Mix", "Master", "Release"].map((stage, i) => (
          <div key={stage} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${i < 2 ? "bg-white" : i === 2 ? "bg-zinc-400" : "bg-zinc-600"}`} />
            <span className={`text-xs ${i < 3 ? "text-zinc-300" : "text-zinc-500"}`}>{stage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GigManagerMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="space-y-2">
        {[
          { venue: "Club XYZ", date: "Mar 15", fee: "€500" },
          { venue: "Festival Main", date: "Apr 2", fee: "€1,200" },
        ].map((gig) => (
          <div key={gig.venue} className="bg-zinc-800/50 rounded px-2 py-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-300">{gig.venue}</span>
              <span className="text-white">{gig.fee}</span>
            </div>
            <span className="text-[10px] text-zinc-500">{gig.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinancialMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="text-center">
        <div className="text-2xl font-bold text-white">€5,547</div>
        <div className="text-xs text-zinc-500">This month</div>
      </div>
      <div className="flex justify-around text-xs mt-2">
        <div className="text-center">
          <div className="text-zinc-300">€3,500</div>
          <div className="text-zinc-500">Gigs</div>
        </div>
        <div className="text-center">
          <div className="text-zinc-300">€1,247</div>
          <div className="text-zinc-500">Streams</div>
        </div>
      </div>
    </div>
  )
}

function ContentMockup() {
  return (
    <div className="grid grid-cols-7 gap-1 p-4 h-full">
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className={`aspect-square rounded ${
            [2, 5, 8, 11].includes(i) ? "bg-white/50" : "bg-zinc-800/50"
          }`}
        />
      ))}
    </div>
  )
}

function VaultMockup() {
  const items = [
    { icon: Piano, label: "Chord progression idea" },
    { icon: Mic, label: "Vocal sample - rainy" },
    { icon: Headphones, label: "Drop reference" },
  ]
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-800/30 rounded px-2 py-1.5">
          <item.icon className="w-3 h-3 text-zinc-500" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function CRMMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">N</div>
        <div>
          <div className="text-xs text-zinc-300">DJ Nova</div>
          <div className="text-[10px] text-zinc-500">Collab partner</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">D</div>
        <div>
          <div className="text-xs text-zinc-300">Deep Records</div>
          <div className="text-[10px] text-zinc-500">Label contact</div>
        </div>
      </div>
    </div>
  )
}

function GoalsMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="text-xs text-zinc-400 mb-1">Q1 Goals</div>
      {[
        { goal: "Release 2 EPs", progress: 50 },
        { goal: "10 gigs booked", progress: 80 },
      ].map((item) => (
        <div key={item.goal}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-zinc-300">{item.goal}</span>
            <span className="text-zinc-500">{item.progress}%</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${item.progress}%`, backgroundColor: '#E85002' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function ARLabelsMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="space-y-2">
        {[
          { label: "Defected Records", status: "Sent" },
          { label: "Afterlife", status: "Follow up" },
          { label: "Drumcode", status: "Accepted" },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between bg-zinc-800/50 rounded px-2 py-1.5">
            <span className="text-xs text-zinc-300">{item.label}</span>
            <span className={`text-[10px] ${item.status === "Accepted" ? "text-white" : "text-zinc-500"}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandSuppliersMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      {[
        { name: "Studio Visuals Co.", type: "Designer" },
        { name: "Merch Factory EU", type: "Merch vendor" },
        { name: "Lens & Light", type: "Photographer" },
      ].map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">
            {item.name[0]}
          </div>
          <div>
            <div className="text-xs text-zinc-300">{item.name}</div>
            <div className="text-[10px] text-zinc-500">{item.type}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function MusicLibraryMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="space-y-2">
        {[
          { track: "Midnight Run", bpm: "126", key: "Am" },
          { track: "Deep State (Remix)", bpm: "130", key: "Fm" },
          { track: "Cascade", bpm: "124", key: "Cm" },
        ].map((item) => (
          <div key={item.track} className="bg-zinc-800/50 rounded px-2 py-1.5">
            <div className="text-xs text-zinc-300">{item.track}</div>
            <div className="flex gap-3 text-[10px] text-zinc-500">
              <span>{item.bpm} BPM</span>
              <span>{item.key}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TravelMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="space-y-2">
        {[
          { route: "BER → AMS", date: "Mar 14", type: "Flight" },
          { route: "Hotel Central", date: "Mar 14-16", type: "Stay" },
        ].map((item) => (
          <div key={item.route} className="bg-zinc-800/50 rounded px-2 py-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-300">{item.route}</span>
              <span className="text-zinc-500">{item.type}</span>
            </div>
            <span className="text-[10px] text-zinc-500">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SideProjectsMockup() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      {[
        { name: "Dark alias", tracks: "4 tracks" },
        { name: "Collab w/ JVNE", tracks: "2 tracks" },
        { name: "Ambient side", tracks: "7 tracks" },
      ].map((item) => (
        <div key={item.name} className="flex items-center justify-between bg-zinc-800/30 rounded px-2 py-1.5">
          <span className="text-xs text-zinc-400">{item.name}</span>
          <span className="text-[10px] text-zinc-500">{item.tracks}</span>
        </div>
      ))}
    </div>
  )
}

function CardMockup({ type }: { type: number }) {
  switch (type) {
    case 1:
      return <ReleasePipelineMockup />
    case 2:
      return <GigManagerMockup />
    case 3:
      return <FinancialMockup />
    case 4:
      return <ContentMockup />
    case 5:
      return <VaultMockup />
    case 6:
      return <CRMMockup />
    case 7:
      return <GoalsMockup />
    case 8:
      return <ARLabelsMockup />
    case 9:
      return <BrandSuppliersMockup />
    case 10:
      return <MusicLibraryMockup />
    case 11:
      return <TravelMockup />
    case 12:
      return <SideProjectsMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 4
  }

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    const visible = getVisibleCount()
    setScrollPosition(Math.min(moduleCards.length - visible, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Violet indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E85002' }} />
              <span className="text-sm text-zinc-400">Dedicated areas for your career</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Built for how producers
              <br />
              actually work
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            Every module is designed around the real workflows of DJs and producers. No bloat, no learning curve.
            just the tools you actually need.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-x-auto scrollbar-hide lg:overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {moduleCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.id} className="flex-shrink-0 w-[calc(100%-8px)] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
                  <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                    {/* Mockup area */}
                    <div className="flex-1 relative overflow-hidden">
                      <CardMockup type={card.id} />
                      {/* Fade overlay */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                        style={{
                          background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                        }}
                      />
                    </div>

                    {/* Card footer */}
                    <div className="p-4 border-t border-zinc-800/30">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                          <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                        </div>
                        {/* Icon button */}
                        <button
                          className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </button>
                      </div>
                      {/* GPT badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-[11px] font-medium text-zinc-400">
                        <Sparkles className="w-3 h-3" />
                        {card.gpt}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= moduleCards.length - 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
