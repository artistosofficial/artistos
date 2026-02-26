"use client"

import { ChevronRight, Mail, Phone, Globe, Search, Disc3, ClipboardList, FileText, Music, Headphones, ListMusic } from "lucide-react"

export function BookingsARSection() {
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
          <span className="text-zinc-400 text-sm">Bookings & A&R</span>
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
          Your network is your career. Treat it like one.
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Every contact, every submission, every follow-up.</span> Stop losing
          opportunities to scattered DMs and forgotten emails.
        </p>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Contact CRM */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Every contact in one place</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Promoters, labels, collaborators, managers — all organized with context, history, and follow-up reminders.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Contacts</h4>

              {/* Contact entries */}
              <div className="space-y-3">
                {[
                  { name: "Nina Kraviz Mgmt", type: "Label", method: Mail, status: "Replied", statusColor: "text-white" },
                  { name: "Fabric London", type: "Venue", method: Phone, status: "Follow up", statusColor: "text-zinc-400" },
                  { name: "Resident Advisor", type: "Press", method: Globe, status: "Sent", statusColor: "text-zinc-500" },
                ].map((contact) => (
                  <div key={contact.name} className="flex items-center gap-3 bg-zinc-800/40 rounded-lg px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-medium">
                      {contact.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-zinc-200 text-sm font-medium">{contact.name}</div>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <contact.method className="w-3 h-3" />
                        <span>{contact.type}</span>
                      </div>
                    </div>
                    <span className={`text-xs ${contact.statusColor}`}>{contact.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - AI-powered outreach */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">AI-powered outreach</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              4 custom GPTs to research venues, write outreach, find labels, and manage submissions.
            </p>

            {/* GPT cards grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { name: "Club Researcher", desc: "Find and analyze venues that match your sound", icon: Search },
                { name: "Booker GPT", desc: "Draft outreach emails and follow-ups", icon: Mail },
                { name: "Label Finder", desc: "Discover labels that fit your genre and style", icon: Disc3 },
                { name: "Label Assistant", desc: "Manage submissions and track responses", icon: ClipboardList },
              ].map((gpt) => (
                <div key={gpt.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <gpt.icon className="w-4 h-4 text-zinc-500 mb-2" />
                  <h4 className="text-[13px] font-semibold text-zinc-200 mb-1">{gpt.name}</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{gpt.desc}</p>
                </div>
              ))}
            </div>

            {/* Resource items */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: FileText, label: "Artist Bio" },
                { icon: Music, label: "EPK / Press Kit" },
                { icon: Headphones, label: "Tech Rider" },
                { icon: ListMusic, label: "Set References" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 px-3 py-2 bg-zinc-800/30 rounded-lg text-xs text-zinc-400">
                  <item.icon className="w-3.5 h-3.5 text-zinc-500" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {/* Booking & Contacts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="7" cy="8" r="3" />
                <circle cx="13" cy="8" r="3" />
                <path d="M2 16c0-2.2 2.2-4 5-4s5 1.8 5 4" />
              </svg>
              <span className="text-zinc-200 font-medium">Booking & Contacts</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Every promoter, label, and collaborator organized.</p>
          </div>

          {/* A&R & Labels */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="7" />
                <circle cx="10" cy="10" r="3" />
              </svg>
              <span className="text-zinc-200 font-medium">A&R & Labels</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Track submissions, feedback, and label relationships.</p>
          </div>

          {/* Brand & Suppliers */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <path d="M3 10h14M10 3v14" />
              </svg>
              <span className="text-zinc-200 font-medium">Brand & Suppliers</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Designers, photographers, and merch vendors.</p>
          </div>

          {/* Travel */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 10l7-7 7 7M5 14h10" />
              </svg>
              <span className="text-zinc-200 font-medium">Travel</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Flights, hotels, and logistics for every gig.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
