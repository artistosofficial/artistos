"use client"

import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import { EmailCaptureProvider } from "@/lib/email-capture-context"
import { EmailCaptureModal } from "./email-capture-modal"
import { HeroCTA } from "./hero-cta"
import { Navbar } from "./navbar"
import { FeatureCardsSection } from "./feature-cards-section"
import { ProductDirectionSection } from "./product-direction-section"
import { BookingsARSection } from "./bookings-ar-section"
import { ContentAISection } from "./content-ai-section"
import { WorkflowsSection } from "./workflows-section"
import { BeforeAfterSection } from "./before-after-section"
import { WhoItsForSection } from "./who-its-for-section"
import { VideoSection } from "./video-section"
import { TestimonialsSection } from "./testimonials-section"
import { HowItWorksSection } from "./how-it-works-section"
import { PricingSection } from "./pricing-section"
import { FAQSection } from "./faq-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"
import { NotionTemplatePreview } from "./notion-template-preview"

export function Hero3DStage() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = async () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const isMd = window.matchMedia("(min-width: 768px)").matches

      if (prefersReduced) {
        animate(".anim-pill", { opacity: 1, y: 0 }, { duration: 0 })
        animate(".anim-headline", { opacity: 1, y: 0 }, { duration: 0 })
        animate(".anim-subhead", { opacity: 1, y: 0 }, { duration: 0 })
        animate(".anim-ctas", { opacity: 1, y: 0 }, { duration: 0 })
        if (isMd) {
          animate(".anim-dashboard", { opacity: 1, y: 0, scale: 1 }, { duration: 0 })
          animate(".anim-glow-group", { opacity: 1, scale: 1 }, { duration: 0 })
        }
        return
      }

      animate(".anim-pill", { opacity: 1, y: 0 }, { duration: 0.45, delay: 0.15, ease: "easeOut" })
      animate(".anim-headline", { opacity: 1, y: 0 }, { duration: 0.45, delay: 0.25, ease: "easeOut" })
      animate(".anim-subhead", { opacity: 1, y: 0 }, { duration: 0.45, delay: 0.35, ease: "easeOut" })
      animate(".anim-ctas", { opacity: 1, y: 0 }, { duration: 0.45, delay: 0.45, ease: "easeOut" })

      if (isMd) {
        animate(".anim-dashboard", { opacity: 1, y: 0, scale: 1 }, { duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] })
        animate(".anim-glow-group", { opacity: 1, scale: [0.7, 1.03, 1] }, { duration: 0.8, delay: 0.7, ease: "easeOut" })
      }
    }

    sequence()
  }, [animate])

  return (
    <EmailCaptureProvider>
      <EmailCaptureModal />
      <section ref={scope} className="relative md:min-h-screen pt-16 overflow-hidden bg-[#09090B]">
        <Navbar />

        {/* Content Layer */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Text - centered on mobile, left-aligned on md+ */}
          <div className="pt-20 pb-6 md:pt-24 md:pb-8 text-center md:text-left">
            {/* Pill Label */}
            <motion.div
              className="anim-pill"
              initial={{ opacity: 0, y: 12 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-zinc-700 text-zinc-400">
                Built for Serious Artists
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              className="anim-headline text-[1.75rem] sm:text-4xl md:text-[2.8rem] lg:text-[3.5rem] font-semibold mt-6 mb-5 leading-[1.15] tracking-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent md:whitespace-nowrap"
            >
              Stop managing chaos.
              <br />
              Start managing a career.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              className="anim-subhead text-sm md:text-base text-zinc-400 max-w-sm md:max-w-md mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              ArtistOS gives serious DJs and producers one place to run every part of their career, with AI built into every workflow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              className="anim-ctas flex flex-row items-center md:items-start justify-center md:justify-start gap-3"
            >
              <HeroCTA />
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-lg border border-zinc-700 text-white text-sm font-medium hover:bg-zinc-800/50 transition-colors"
              >
                Watch walkthrough
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              className="anim-ctas mt-5 flex items-center justify-center md:justify-start gap-1.5 text-sm text-zinc-500"
            >
              <span className="text-[#E85002]">★★★★★</span>
              <span>Trusted by established DJs & producers</span>
            </motion.div>
          </div>

          {/* Notion Template Container (desktop only) */}
          <div className="relative mt-4 pb-8 hidden md:block">
            <div className="relative w-full max-w-[1300px] mx-auto">
              {/* Top-edge glow (desktop only) */}
              <motion.div
                className="anim-glow-group hidden md:block"
                initial={{ opacity: 0, scale: 0.7 }}
                style={{ transformOrigin: "50% 0%", position: "absolute", inset: "-16px", pointerEvents: "none", zIndex: 0 }}
              >
                {/* Centered top bloom */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse 60% 20% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 50%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
                {/* Wider ambient spread */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse 80% 12% at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)",
                    filter: "blur(18px)",
                  }}
                />
                {/* Subtle side glows */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `
                      radial-gradient(ellipse 15% 40% at 0% 30%, rgba(255,255,255,0.04) 0%, transparent 70%),
                      radial-gradient(ellipse 15% 40% at 100% 30%, rgba(255,255,255,0.04) 0%, transparent 70%)
                    `,
                    filter: "blur(10px)",
                  }}
                />
              </motion.div>

              {/* Dashboard panel - simple border on mobile, gradient on desktop */}
              <motion.div
                className="anim-dashboard relative w-full"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
              >
                {/* Desktop: gradient border */}
                <div
                  className="hidden md:block relative w-full rounded-xl"
                  style={{
                    padding: "1px",
                    background: `
                      radial-gradient(ellipse 50% 40% at 50% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 30%, transparent 55%),
                      radial-gradient(ellipse 15% 50% at 0% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(ellipse 15% 50% at 100% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.01) 100%)
                    `,
                  }}
                >
                  <div className="relative w-full bg-[#0a0a0a] rounded-[11px] overflow-hidden">
                    <NotionTemplatePreview />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* <LogoCloud /> */}
      <FeatureCardsSection />
      <ProductDirectionSection />
      <BookingsARSection />
      <ContentAISection />
      <WorkflowsSection />
      <BeforeAfterSection />
      <WhoItsForSection />
      <VideoSection />
      {/* <TestimonialsSection /> */}
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </EmailCaptureProvider>
  )
}
