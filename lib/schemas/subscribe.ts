import { z } from "zod"

export const subscribeSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  source: z.enum(["hero", "navbar", "cta", "pricing"]),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>
