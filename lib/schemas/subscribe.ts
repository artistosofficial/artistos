import { z } from "zod"

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  source: z.enum(["hero", "navbar", "cta", "pricing"]),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>
