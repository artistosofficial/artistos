"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  "12 integrated modules — each with a custom GPT assistant",
  "Lifetime access — pay once, use forever",
  "All future updates included",
  "Works with free or paid Notion",
  "Duplicate in seconds, customize as you like",
  "30-day money-back guarantee",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-xl mx-auto">
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
            Simple pricing. Serious results.
          </h2>
          <p className="text-zinc-400">
            One price. Everything included. Forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900/50 border-2 border-white rounded-2xl p-8"
        >
          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-white">€49</span>
              <span className="text-zinc-500">one-time</span>
            </div>
            <p className="text-zinc-400 mt-2">No subscriptions. No hidden fees.</p>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-white" />
                <span className="text-zinc-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#"
            className="block w-full py-4 text-center text-zinc-900 font-medium rounded-lg transition-colors text-base bg-white hover:bg-zinc-200"
          >
            Get ArtistOS Now
          </a>

          {/* Guarantee */}
          <p className="text-center text-zinc-500 text-sm mt-4">
            30-day money-back guarantee. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
