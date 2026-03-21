"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Get the template",
    description: "Purchase ArtistOS and receive instant access to the complete Notion workspace.",
  },
  {
    number: "2",
    title: "Duplicate to Notion",
    description: "One click to copy the entire workspace to your own Notion account. Free or paid.",
  },
  {
    number: "3",
    title: "Make it yours",
    description: "Customize it for your workflow. Add your releases, gigs, and goals. You're ready to go.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto">
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
            Up and running in 5 minutes
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            No complex setup. No learning curve. Just duplicate and start using.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              {/* Large number */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-[#E85002] border-2 border-[#E85002]/60 bg-[#E85002]/10"
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-white font-medium text-lg mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
