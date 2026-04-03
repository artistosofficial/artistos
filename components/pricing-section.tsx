"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  "Dedicated areas for every part of your career",
  "14 AI assistants to do the work with you",
  "Lifetime access. Pay once, use forever",
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
            Simple pricing.
            <br />
            Serious results.
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
          className="bg-zinc-900/50 border-2 border-[#E85002] rounded-2xl p-8"
        >
          {/* Pricing */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-zinc-500 line-through text-2xl">&euro;149</span>
              <span className="text-white text-5xl font-semibold" style={{ letterSpacing: "-0.03em" }}>&euro;59</span>
            </div>
            <p className="text-[#E85002] text-sm font-medium mb-3">You'll never see this price again</p>
            <p className="text-zinc-300 text-lg font-medium">Everything you need. One workspace.</p>
            <p className="text-zinc-500 mt-1">No subscriptions. No hidden fees.</p>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#E85002]" />
                <span className="text-zinc-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 text-center text-[#E85002] font-medium rounded-lg transition-colors text-base border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
          onClick={() => (window as any).gtag?.('event', 'buy_button_click', { button_location: 'pricing' })}

            >
            Buy Now
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
