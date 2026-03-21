"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "I used to track bookings in my Notes app and gig fees in my head. ArtistOS changed everything. I followed up on a venue I'd forgotten about for 3 months and landed a residency. The booking module alone is worth it.",
    author: "Marco R.",
    role: "DJ & Producer, Berlin",
    avatar: "M",
  },
  {
    quote: "The content AI assistant is insane. I described my sound in 2 sentences and it gave me 3 months of content ideas that actually fit my brand. I went from posting randomly to having a real strategy for the first time.",
    author: "Sofia K.",
    role: "Electronic Producer, Barcelona",
    avatar: "S",
  },
  {
    quote: "I've been releasing music for 4 years and never had a proper release workflow. ArtistOS showed me how much I was winging it. My last EP launch was the most organized thing I've ever done. It showed.",
    author: "Jorge L.",
    role: "DJ & Label Owner, Madrid",
    avatar: "J",
  },
]

export function TestimonialsSection() {
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
          className="text-center mb-16"
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
            Artists who stopped improvising.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#E85002]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 font-medium bg-white"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{testimonial.author}</p>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
