import './globals.css'

import { Hanken_Grotesk, Literata, Spline_Sans_Mono } from 'next/font/google'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import { meetup } from '@/meetup'
import { switchThemeDuration } from '@/lib/utils'
import {
  defaultMetadataImage,
  getSiteName,
  getSiteUrl,
} from '@/lib/site-metadata'

const { description } = meetup

// Sans: headings, UI, labels. Humanist grotesque, legible at projection distance.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Serif: long-form reading. Screen-reading serif, warm and sturdy.
const literata = Literata({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

// Mono: technical tokens only (BIP/CVE numbers, addresses, inline code).
const splineSansMono = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: getSiteName(),
  description,
  openGraph: {
    siteName: getSiteName(),
    title: getSiteName(),
    description,
    images: [
      {
        url: defaultMetadataImage,
        alt: getSiteName(),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: getSiteName(),
    description,
    images: [defaultMetadataImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${literata.variable} ${splineSansMono.variable}`}
    >
      <body className={`font-serif antialiased ${switchThemeDuration}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
