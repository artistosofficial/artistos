import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'
import Script from 'next/script'


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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7ZQ2QXEXVE" strategy="afterInteractive" />
<Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-7ZQ2QXEXVE');`}</Script>
      </body>
    </html>
  )
}
