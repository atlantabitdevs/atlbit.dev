import './globals.css'

import { IBM_Plex_Serif, Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import { metaupdata } from '@/metaupdata'
import { switchThemeDuration } from '@/lib/utils'

const {
  city: { name, position },
  description,
} = metaupdata
const inter = Inter({ subsets: ['latin'] })
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    position === 'right'
      ? `BitDevs ${name} | ${description}`
      : `${name} BitDevs | ${description}`,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={metaupdata.image} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="" />
      </head>
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
