import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { supabaseAdmin } from "@/lib/supabase"
import { subscribeSchema } from "@/lib/schemas/subscribe"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

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
      { success: false, error: "Please fill in all fields correctly." },
      { status: 400 }
    )
  }

  const { firstName, lastName, email, source } = parsed.data

  const { error: dbError } = await supabaseAdmin
    .from("subscribers")
    .insert({ first_name: firstName, last_name: lastName, email, source })

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
    await transporter.sendMail({
      from: `ArtistOS <${process.env.SMTP_USER}>`,
      to: email,
      subject: `${firstName}, you're on the ArtistOS waitlist`,
      text: [
        `Hey ${firstName},`,
        "",
        "There are artists who make music. And there are artists who build careers. You just told us which one you are.",
        "",
        "ArtistOS is the system that backs that up. One workspace for your releases, gigs, finances, content, and networking, with AI built into every workflow.",
        "",
        "You'll be among the first to get access when we launch. We'll reach out with updates along the way.",
        "",
        "If you have questions or ideas for what you'd want in ArtistOS, just reply to this email. We read everything.",
        "",
        "Talk soon,",
        "The ArtistOS Team",
        "artistos.pro",
      ].join("\n"),
    })
  } catch (emailError) {
    console.error("SMTP email error:", emailError)
  }

  return NextResponse.json(
    { success: true, data: { message: `${firstName}, you're on the list!` } },
    { status: 201 }
  )
}
