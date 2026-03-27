"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"
import { useEmailCapture } from "@/lib/email-capture-context"
import { subscribeSchema, type SubscribeInput } from "@/lib/schemas/subscribe"

export function EmailCaptureModal() {
  const { isOpen, source, closeModal } = useEmailCapture()
  const [submitted, setSubmitted] = useState(false)
  const [submittedMessage, setSubmittedMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { firstName: "", lastName: "", email: "", source: "hero" },
  })

  async function onSubmit(data: SubscribeInput) {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.error || "Something went wrong.")
        return
      }

      setSubmittedMessage(result.data.message)
      setSubmitted(true)
      toast.success(result.data.message)
    } catch {
      toast.error("Something went wrong. Please try again.")
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal()
      setTimeout(() => {
        setSubmitted(false)
        setSubmittedMessage("")
        reset()
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-zinc-950 border border-zinc-800 sm:max-w-md">
        <DialogTitle className="sr-only">Get Early Access</DialogTitle>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full border-2 border-[#E85002] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#E85002]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{submittedMessage}</h3>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto">
              Check your inbox for a confirmation. We'll reach out when ArtistOS is ready to launch.
            </p>
          </div>
        ) : (
          <div className="py-4">
            <h3 className="text-xl font-semibold text-white text-center mb-2">
              Get Early Access to ArtistOS
            </h3>
            <p className="text-zinc-400 text-sm text-center mb-6">
              Be the first to know when we launch.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E85002]/60 transition-colors"
                    autoFocus
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E85002]/60 transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E85002]/60 transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-[#E85002] font-medium rounded-lg transition-colors text-sm border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
