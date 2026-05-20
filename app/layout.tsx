import './globals.css'

import { IBM_Plex_Serif, Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
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
const inter = Inter({ subsets: ['latin'] })
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${
          inter.className + ' ' + ibmPlexSerif.className
        } ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
