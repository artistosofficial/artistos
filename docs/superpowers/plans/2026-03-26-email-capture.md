# Email Capture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Capture visitor emails from landing page CTAs into Supabase and send a welcome email via Resend.

**Architecture:** React context provides a shared `openModal(source)` function to all CTA buttons. A single modal component handles email input. On submit, a Next.js API route validates with Zod, inserts into Supabase, and fires a welcome email via Resend.

**Tech Stack:** Next.js 16, Supabase (Postgres), Resend, React Hook Form, Zod, shadcn Dialog, Sonner toasts.

**Spec:** `docs/superpowers/specs/2026-03-26-email-capture-design.md`

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `lib/supabase.ts` | Create | Supabase server client (service role) |
| `lib/email-capture-context.tsx` | Create | React context for modal open/close + source tracking |
| `lib/schemas/subscribe.ts` | Create | Shared Zod schema for email + source validation |
| `components/email-capture-modal.tsx` | Create | Modal dialog with email form |
| `components/hero-cta.tsx` | Create | Client button for hero CTA |
| `app/api/subscribe/route.ts` | Create | POST endpoint: validate, save, send email |
| `components/hero-3d-stage.tsx` | Modify | Wrap with EmailCaptureProvider, change hero CTA |
| `components/navbar.tsx` | Modify | Change CTA to use context |
| `components/cta-section.tsx` | Modify | Add "use client", change CTA to use context |
| `components/pricing-section.tsx` | Modify | Change CTA to use context |

---

### Task 1: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install Supabase and Resend**

```bash
cd /Users/cristoforoperrone/basestudios && npm install @supabase/supabase-js resend
```

- [ ] **Step 2: Verify installation**

```bash
cd /Users/cristoforoperrone/basestudios && node -e "require('@supabase/supabase-js'); require('resend'); console.log('OK')"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add supabase and resend dependencies"
```

---

### Task 2: Create Supabase table

**Files:**
- None (Supabase dashboard)

- [ ] **Step 1: Run this SQL in Supabase SQL Editor**

```sql
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text not null check (source in ('hero', 'navbar', 'cta', 'pricing')),
  created_at timestamptz default now()
);

alter table subscribers enable row level security;
```

- [ ] **Step 2: Verify table exists**

In Supabase dashboard, go to Table Editor and confirm `subscribers` table appears with the correct columns.

---

### Task 3: Create Supabase server client

**Files:**
- Create: `lib/supabase.ts`

- [ ] **Step 1: Create the Supabase client**

```typescript
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
```

- [ ] **Step 2: Commit**

```bash
git add lib/supabase.ts
git commit -m "feat: add Supabase server client"
```

---

### Task 4: Create shared Zod schema

**Files:**
- Create: `lib/schemas/subscribe.ts`

- [ ] **Step 1: Create the validation schema**

```typescript
import { z } from "zod"

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  source: z.enum(["hero", "navbar", "cta", "pricing"]),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>
```

- [ ] **Step 2: Commit**

```bash
git add lib/schemas/subscribe.ts
git commit -m "feat: add subscribe validation schema"
```

---

### Task 5: Create API route

**Files:**
- Create: `app/api/subscribe/route.ts`

- [ ] **Step 1: Create the API route**

```typescript
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { supabaseAdmin } from "@/lib/supabase"
import { subscribeSchema } from "@/lib/schemas/subscribe"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    )
  }

  const parsed = subscribeSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid email address." },
      { status: 400 }
    )
  }

  const { email, source } = parsed.data

  const { error: dbError } = await supabaseAdmin
    .from("subscribers")
    .insert({ email, source })

  if (dbError) {
    if (dbError.code === "23505") {
      return NextResponse.json({
        success: true,
        data: { message: "You're already on the list!", alreadySubscribed: true },
      })
    }
    console.error("Supabase insert error:", dbError)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }

  try {
    await resend.emails.send({
      from: "ArtistOS <hello@artistos.pro>",
      to: email,
      subject: "Welcome to the ArtistOS waitlist",
      text: "Thanks for joining the ArtistOS waitlist. We'll let you know when it's ready.",
    })
  } catch (emailError) {
    console.error("Resend email error:", emailError)
  }

  return NextResponse.json(
    { success: true, data: { message: "You're on the list!" } },
    { status: 201 }
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/subscribe/route.ts
git commit -m "feat: add subscribe API route with Supabase and Resend"
```

---

### Task 6: Create email capture context

**Files:**
- Create: `lib/email-capture-context.tsx`

- [ ] **Step 1: Create the context provider**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add lib/email-capture-context.tsx
git commit -m "feat: add email capture context provider"
```

---

### Task 7: Create email capture modal component

**Files:**
- Create: `components/email-capture-modal.tsx`

- [ ] **Step 1: Create the modal**

```typescript
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
    defaultValues: { email: "", source: "hero" },
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
          <div className="text-center py-6">
            <div className="text-3xl mb-3">&#10003;</div>
            <h3 className="text-xl font-semibold text-white mb-2">You're in!</h3>
            <p className="text-zinc-400 text-sm">{submittedMessage}</p>
          </div>
        ) : (
          <div className="py-4">
            <h3 className="text-xl font-semibold text-white text-center mb-2">
              Get Early Access to ArtistOS
            </h3>
            <p className="text-zinc-400 text-sm text-center mb-6">
              Be the first to know when we launch.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E85002]/60 transition-colors"
                  autoFocus
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
```

- [ ] **Step 2: Commit**

```bash
git add components/email-capture-modal.tsx
git commit -m "feat: add email capture modal component"
```

---

### Task 8: Wire up Hero3DStage with provider and modal

**Files:**
- Modify: `components/hero-3d-stage.tsx:1-207`

- [ ] **Step 1: Add imports and wrap with provider**

Add these imports at the top:
```typescript
import { EmailCaptureProvider } from "@/lib/email-capture-context"
import { EmailCaptureModal } from "./email-capture-modal"
import { HeroCTA } from "./hero-cta"
```

- [ ] **Step 2: Replace only the hero "Get Early Access" link**

Replace ONLY the `<a href="#pricing" ...>Get Early Access</a>` element (lines 99-104) with `<HeroCTA />`. Keep the "Watch the walkthrough" link (lines 105-110) unchanged. The result should be:

```typescript
<HeroCTA />
<a
  href="#demo"
  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-medium hover:bg-zinc-800/50 transition-colors"
>
  Watch the walkthrough
</a>
```

- [ ] **Step 3: Wrap the return JSX with EmailCaptureProvider**

Wrap the entire `<>...</>` fragment with `<EmailCaptureProvider>` and add `<EmailCaptureModal />` inside it.

- [ ] **Step 4: Create HeroCTA client component**

Create `components/hero-cta.tsx`:
```typescript
"use client"

import { useEmailCapture } from "@/lib/email-capture-context"

export function HeroCTA() {
  const { openModal } = useEmailCapture()

  return (
    <button
      onClick={() => openModal("hero")}
      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg border border-[#E85002]/60 bg-[#E85002]/10 text-[#E85002] text-sm font-medium hover:bg-[#E85002]/20 transition-colors"
    >
      Get Early Access
    </button>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add components/hero-3d-stage.tsx components/hero-cta.tsx
git commit -m "feat: wire hero section to email capture modal"
```

---

### Task 9: Update Navbar CTA

**Files:**
- Modify: `components/navbar.tsx:1-35`

- [ ] **Step 1: Add context import and replace CTA**

Replace the `<a href="#pricing" ...>Get ArtistOS</a>` at line 23-27 with a button that calls `openModal("navbar")`. Add `useEmailCapture` import.

```typescript
"use client"

import { useEmailCapture } from "@/lib/email-capture-context"

export function Navbar() {
  const { openModal } = useEmailCapture()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">ArtistOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal("navbar")}
              className="text-sm text-[#E85002] px-3.5 py-1.5 rounded-md transition-colors border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
            >
              Get ArtistOS
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/navbar.tsx
git commit -m "feat: wire navbar CTA to email capture modal"
```

---

### Task 10: Update CTA Section

**Files:**
- Modify: `components/cta-section.tsx:1-31`

- [ ] **Step 1: Add "use client" and context, replace CTA**

```typescript
"use client"

import { useEmailCapture } from "@/lib/email-capture-context"

export function CTASection() {
  const { openModal } = useEmailCapture()

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight max-w-2xl">
            Handle the business.
            <br />
            Focus on the art.
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Join DJs and producers who stopped winging it and started building a real career.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => openModal("cta")}
              className="px-6 py-3 text-[#E85002] font-medium rounded-lg transition-colors text-sm border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
            >
              Get Early Access
            </button>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="text-[#E85002]">★★★★★</span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/cta-section.tsx
git commit -m "feat: wire CTA section to email capture modal"
```

---

### Task 11: Update Pricing Section CTA

**Files:**
- Modify: `components/pricing-section.tsx:77-82`

- [ ] **Step 1: Add context import, hook declaration, and replace CTA**

Add `useEmailCapture` import at the top. Add `const { openModal } = useEmailCapture()` inside the `PricingSection` function. Replace the `<a href="#" ...>Get Early Access</a>` at lines 77-82 with a button:

```typescript
import { useEmailCapture } from "@/lib/email-capture-context"
```

Inside `PricingSection()`, add before `return`:
```typescript
const { openModal } = useEmailCapture()
```

Replace the anchor with:
```typescript
<button
  onClick={() => openModal("pricing")}
  className="block w-full py-4 text-center text-[#E85002] font-medium rounded-lg transition-colors text-base border border-[#E85002]/60 bg-[#E85002]/10 hover:bg-[#E85002]/20"
>
  Get Early Access
</button>
```

- [ ] **Step 2: Commit**

```bash
git add components/pricing-section.tsx
git commit -m "feat: wire pricing section CTA to email capture modal"
```

---

### Task 12: Add Toaster to layout

**Files:**
- Modify: `app/layout.tsx:1-29`

- [ ] **Step 1: Add Sonner Toaster**

Add `import { Toaster } from "sonner"` and place `<Toaster theme="dark" />` after `<Analytics />` in the body.

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Sonner toaster to root layout"
```

---

### Task 13: Smoke test

- [ ] **Step 1: Start dev server**

```bash
cd /Users/cristoforoperrone/basestudios && npm run dev
```

- [ ] **Step 2: Verify in browser**

1. Open `http://localhost:3000`
2. Click any "Get Early Access" button
3. Confirm modal opens with email input
4. Submit a test email
5. Confirm toast notification appears
6. Check Supabase dashboard for the new subscriber row
7. Check Resend dashboard for the sent email

- [ ] **Step 3: Test duplicate submission**

Submit the same email again. Confirm "You're already on the list!" message.

- [ ] **Step 4: Test invalid email**

Type "notanemail" and submit. Confirm client-side validation error.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete email capture system with Supabase and Resend"
```
