"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Music,
  Calendar,
  DollarSign,
  Share2,
  Lightbulb,
  Users,
  Target,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  Star,
  Clock,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
              <Music className="w-3 h-3 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">ArtistOS</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav - ArtistOS Modules */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={Music} label="Release Pipeline" badge={2} active />
          <NavItem icon={Calendar} label="Gig Manager" />
        </div>

        {/* Workspace section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Modules
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={DollarSign} label="Financial Dashboard" hasSubmenu />
            <NavItem icon={Share2} label="Content Calendar" hasSubmenu />
            <NavItem icon={Lightbulb} label="Creative Vault" hasSubmenu />
            <NavItem icon={Users} label="Network CRM" hasSubmenu />
          </div>
        </div>

        {/* Goals section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Goals
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Target} label="Q1 2025" color="text-white" />
            <NavItem icon={Star} label="Career Milestones" color="text-zinc-400" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto p-3 border-t border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 text-xs">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700" />
            <span>Your Workspace</span>
          </div>
        </div>
      </motion.div>

      {/* Release List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Release Pipeline</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <ReleaseItem
            title="Summer Nights EP"
            label="Mastering"
            date="Mar 15"
            status="in-progress"
            active
          />
          <ReleaseItem
            title="Remix - After Hours"
            label="Waiting on stems"
            date="Mar 22"
            status="pending"
          />
          <ReleaseItem
            title="Club Edit Pack Vol. 3"
            label="Released"
            date="Feb 28"
            status="done"
          />
          <ReleaseItem
            title="Collab with DJ Nova"
            label="Demo phase"
            date="Apr 5"
            status="idea"
          />
          <ReleaseItem
            title="Festival Anthem 2025"
            label="Mix review"
            date="Mar 30"
            status="in-progress"
          />
          <ReleaseItem
            title="Deep House Single"
            label="Artwork needed"
            date="Apr 12"
            status="pending"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Release Pipeline</span>
            <span className="text-zinc-600">›</span>
            <span className="text-white">Summer Nights EP</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Summer Nights EP</h2>
              <p className="text-zinc-500 text-sm">4 tracks • Deep House / Melodic Techno</p>
            </div>
          </div>

          {/* Status cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-lg p-3">
              <p className="text-zinc-500 text-xs mb-1">Status</p>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-400" />
                <span className="text-white text-sm">Mastering</span>
              </div>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-lg p-3">
              <p className="text-zinc-500 text-xs mb-1">Release Date</p>
              <span className="text-white text-sm">Mar 15, 2025</span>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-lg p-3">
              <p className="text-zinc-500 text-xs mb-1">Label</p>
              <span className="text-white text-sm">Self-Release</span>
            </div>
          </div>

          {/* Checklist */}
          <div className="mb-6">
            <h4 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">Release Checklist</h4>
            <div className="space-y-2">
              <ChecklistItem done label="Final mix approved" />
              <ChecklistItem done label="Artwork commissioned" />
              <ChecklistItem done label="Mastering scheduled" />
              <ChecklistItem label="Distribution submitted" />
              <ChecklistItem label="Pre-save campaign" />
              <ChecklistItem label="Press kit ready" />
            </div>
          </div>

          {/* Timeline */}
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Activity</div>
            <div className="space-y-3">
              <TimelineItem
                icon={<Music className="w-3 h-3" />}
                text="Mastering session booked with Studio One"
                time="2 days ago"
              />
              <TimelineItem
                icon={<Clock className="w-3 h-3" />}
                text="Artwork draft received from designer"
                time="4 days ago"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
      }`}
    >
      <Icon className={`w-4 h-4 ${color || ""}`} />
      <span className="flex-1 text-xs">{label}</span>
      {badge && (
        <span className="bg-white/80 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function ReleaseItem({
  title,
  label,
  date,
  status,
  active,
}: {
  title: string
  label: string
  date: string
  status: "in-progress" | "pending" | "done" | "idea"
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    "in-progress": "bg-zinc-400",
    pending: "bg-zinc-500",
    done: "bg-white",
    idea: "bg-zinc-600",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-2 h-2 rounded-full ${statusColors[status]} mt-1.5`} />
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-medium truncate leading-tight">{title}</p>
          <p className="text-zinc-500 text-[10px] mt-0.5">{label}</p>
        </div>
        <span className="text-zinc-600 text-[10px] shrink-0">{date}</span>
      </div>
    </div>
  )
}

function ChecklistItem({ done, label }: { done?: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded border flex items-center justify-center ${
          done ? "bg-white border-white" : "border-zinc-600"
        }`}
      >
        {done && (
          <svg className="w-2.5 h-2.5 text-zinc-900" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <span className={`text-sm ${done ? "text-zinc-500 line-through" : "text-zinc-300"}`}>{label}</span>
    </div>
  )
}

function TimelineItem({ icon, text, time }: { icon: React.ReactNode; text: string; time: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-zinc-400 text-xs">{text}</p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}
