import { NextResponse } from "next/server"
import Stripe from "stripe"
import nodemailer from "nodemailer"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const PRODUCT_LINK = process.env.ARTISTOS_PRODUCT_LINK || "https://artistos.pro/get-started"

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: `Webhook verification failed: ${message}` }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_details?.email
    const name = session.customer_details?.name?.split(" ")[0] || "there"

    if (email) {
      try {
        await transporter.sendMail({
          from: `ArtistOS <${process.env.SMTP_USER}>`,
          to: email,
          subject: `${name}, your ArtistOS is ready`,
          text: [
            `Hey ${name},`,
            "",
            "Thank you for purchasing ArtistOS. You made a great decision.",
            "",
            `Here's your link to get started: ${PRODUCT_LINK}`,
            "",
            "How to set up:",
            "1. Click the link above",
            '2. Click "Duplicate" to add it to your Notion workspace',
            "3. Start building your music career like a pro",
            "",
            "If you need any help, just reply to this email. We're here for you.",
            "",
            "Talk soon,",
            "The ArtistOS Team",
            "artistos.pro",
          ].join("\n"),
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #333; padding: 20px 0;">
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 14px;">Hey ${name},</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 14px;">Thank you for purchasing ArtistOS. You made a great decision.</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 14px;"><a href="${PRODUCT_LINK}" style="color: #E85002; text-decoration: none;">Here's your link to get started</a></p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 6px;"><strong>How to set up:</strong></p>
              <ol style="font-size: 15px; line-height: 1.8; color: #555; margin: 0 0 14px; padding-left: 20px;">
                <li>Click the link above</li>
                <li>Click "Duplicate" to add it to your Notion workspace</li>
                <li>Start building your music career like a pro</li>
              </ol>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 14px;">If you need any help, just reply to this email. We're here for you.</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 0;">Talk soon,<br><strong>The ArtistOS Team</strong><br><span style="color: #999;">artistos.pro</span></p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send fulfillment email:", emailError)
      }
    }
  }

  return NextResponse.json({ received: true })
}
