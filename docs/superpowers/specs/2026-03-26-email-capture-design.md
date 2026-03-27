# Email Capture System - Design Spec

## Overview

Capture emails from landing page visitors via a modal dialog triggered by CTA buttons. Store in Supabase, send welcome email via Resend.

## User Flow

1. Visitor clicks any "Get Early Access" or "Get ArtistOS" CTA button
2. Modal dialog opens with email input
3. Visitor enters email, clicks "Join the Waitlist"
4. API route validates, saves to Supabase, sends welcome email via Resend
5. Modal shows success state ("You're in!")
6. Toast notification confirms

## Modal Design

- **Style:** Branded with orange accent (#E85002)
- **Headline:** "Get Early Access to ArtistOS"
- **Subline:** "Be the first to know when we launch."
- **Input:** Email field with validation
- **Button:** "Join the Waitlist" (orange accent style matching existing CTAs)
- **Success state:** Swaps form for confirmation message
- **Loading state:** Button shows spinner during submission

## State Management

The modal is rendered once in `hero-3d-stage.tsx` (the page root). A React context provider (`EmailCaptureProvider`) wraps the page and exposes an `openModal(source)` function. All CTA buttons call this function instead of navigating to `#pricing`.

**Components that need `"use client"`:** `cta-section.tsx` and `pricing-section.tsx` currently lack it and must add it to support onClick handlers.

## CTA Buttons Modified

| Location | Component | Current Behavior | New Behavior |
|---|---|---|---|
| Navbar | navbar.tsx | `href="#pricing"` | Calls openModal("navbar") |
| Hero | hero-3d-stage.tsx | `href="#pricing"` | Calls openModal("hero") |
| CTA Section | cta-section.tsx | `href="#pricing"` | Calls openModal("cta") |
| Pricing | pricing-section.tsx | `href="#"` | Calls openModal("pricing") |

## API Route

**Endpoint:** `POST /api/subscribe`

**Request body:**
```json
{
  "email": "user@example.com",
  "source": "hero"
}
```

**Success response (201):**
```json
{
  "success": true,
  "data": { "message": "You're on the list!" }
}
```

**Duplicate response (200):**
```json
{
  "success": true,
  "data": { "message": "You're already on the list!", "alreadySubscribed": true }
}
```

**Error response (400/500):**
```json
{
  "success": false,
  "error": "Something went wrong. Please try again."
}
```

**Validation:**
- Email format validated with Zod on client and server
- Source must be one of: "hero", "navbar", "cta", "pricing"

## Supabase Schema

**Table: `subscribers`**

| Column | Type | Constraints |
|---|---|---|
| id | uuid | primary key, default gen_random_uuid() |
| email | text | unique, not null |
| source | text | not null, check (source in ('hero', 'navbar', 'cta', 'pricing')) |
| created_at | timestamptz | default now() |

**RLS Policy:** Service role key used server-side (no public insert access).

**Migration SQL:**
```sql
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text not null check (source in ('hero', 'navbar', 'cta', 'pricing')),
  created_at timestamptz default now()
);

alter table subscribers enable row level security;
```

## Resend Welcome Email

- **From:** hello@artistos.pro
- **Subject:** "Welcome to the ArtistOS waitlist"
- **Body:** Plain text - "Thanks for joining the ArtistOS waitlist. We'll let you know when it's ready." (copy to be refined)

## Error Handling

- **Duplicate email:** Detected via Supabase unique constraint (error code 23505), returns friendly 200 response
- **Invalid email:** Client-side Zod validation prevents submission; server-side validates again
- **Resend failure:** Email save still succeeds; welcome email failure is logged but not surfaced to user
- **Supabase failure:** Returns 500 with generic error message

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-side only)
- `RESEND_API_KEY` - Resend API key (server-side only)

## Dependencies

**New packages:**
- `@supabase/supabase-js` - Supabase client
- `resend` - Resend SDK

**Existing packages used:**
- `react-hook-form` - Form handling
- `zod` + `@hookform/resolvers` - Validation
- `sonner` - Toast notifications
- `@radix-ui/react-dialog` (via shadcn) - Modal

## Files to Create/Modify

**Create:**
- `lib/supabase.ts` - Supabase server client (service role)
- `lib/email-capture-context.tsx` - React context for modal state
- `app/api/subscribe/route.ts` - API endpoint
- `components/email-capture-modal.tsx` - Modal component

**Modify:**
- `components/hero-3d-stage.tsx` - Wrap with EmailCaptureProvider, change hero CTA
- `components/navbar.tsx` - Change CTA to use context
- `components/cta-section.tsx` - Add "use client", change CTA to use context
- `components/pricing-section.tsx` - Add "use client", change CTA to use context
