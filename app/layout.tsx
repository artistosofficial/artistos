import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ArtistOS — The Notion Workspace for DJs & Producers',
  description: 'Organize your releases, gigs, finances, and creative workflow in one Notion workspace. Built for DJs and music producers.',
  generator: 'ArtistOS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
        <Toaster theme="dark" />
        <GoogleAnalytics gaId="G-7ZQ2QXEXVE" />
      </body>
    </html>
  )
}
