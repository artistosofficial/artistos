"use client"

import { createContext, useContext, useState, useCallback } from "react"
import type { ReactNode } from "react"

type Source = "hero" | "navbar" | "cta" | "pricing"

interface EmailCaptureContextValue {
  isOpen: boolean
  source: Source
  openModal: (source: Source) => void
  closeModal: () => void
}

const EmailCaptureContext = createContext<EmailCaptureContextValue | null>(null)

export function EmailCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState<Source>("hero")

  const openModal = useCallback((source: Source) => {
    setSource(source)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <EmailCaptureContext.Provider value={{ isOpen, source, openModal, closeModal }}>
      {children}
    </EmailCaptureContext.Provider>
  )
}

export function useEmailCapture() {
  const context = useContext(EmailCaptureContext)
  if (!context) {
    throw new Error("useEmailCapture must be used within EmailCaptureProvider")
  }
  return context
}
