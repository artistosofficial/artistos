"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need a paid Notion account?",
    answer: "No! ArtistOS works perfectly with the free Notion plan. You only need a paid Notion plan if you want to add more than 5 guests to collaborate with you.",
  },
  {
    question: "What exactly am I buying?",
    answer: "You're buying a complete Notion template (workspace) that you duplicate to your own account. It includes 12 integrated modules covering every area of your music career: Release Pipeline, Bookings, Financial Dashboard, Content Calendar, Music Production, Booking & Contacts, Goals & Milestones, A&R & Labels, Brand & Suppliers, Music Library, Travel, and Side Projects. Each module comes with its own custom GPT assistant.",
  },
  {
    question: "Can I customize it?",
    answer: "Absolutely! Once duplicated, it's your workspace. You can modify, add, remove, or rearrange anything to fit your workflow. That's the beauty of Notion.",
  },
  {
    question: "Is this a subscription?",
    answer: "No. It's a one-time purchase. Pay €49 once, own it forever. All future updates are included at no extra cost.",
  },
  {
    question: "What if it's not for me?",
    answer: "We offer a 30-day money-back guarantee. If ArtistOS doesn't work for you, just email us and we'll refund you. No questions asked.",
  },
  {
    question: "How do I get updates?",
    answer: "When we release updates, you'll get an email with a link to duplicate the new version. Your existing data stays in your workspace — you just add the new features.",
  },
  {
    question: "I'm not very technical. Is this hard to set up?",
    answer: "Not at all. If you can click a button, you can set up ArtistOS. You literally click 'Duplicate', and the entire workspace appears in your Notion. From there, you just start filling in your data.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-2xl mx-auto">
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
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-zinc-800"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
