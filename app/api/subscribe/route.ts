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
