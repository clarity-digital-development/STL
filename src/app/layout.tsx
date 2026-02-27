import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/layout/MobileCTA'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { ScrollReveal } from '@/components/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | Nashville's Premium Craftsman Contractor`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Nashville's premium craftsman contractor. Custom fences, decks, pergolas, screened enclosures, concrete, and interior work. Serving Brentwood, Franklin, Belle Meade, Clarksville, and greater Middle Tennessee.",
  keywords: [
    'Nashville contractor',
    'custom deck builder Nashville',
    'fence installation Nashville TN',
    'pergola Nashville',
    'screened enclosures Nashville',
    'Brentwood contractor',
    'Franklin TN contractor',
    'custom woodwork Nashville',
    'deck staining Nashville',
    'outdoor living Nashville',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Nashville's Premium Craftsman Contractor`,
    description:
      "Nashville's premium craftsman contractor. Custom fences, decks, pergolas, screened enclosures, and finish work.",
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <LocalBusinessSchema />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-wood focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Spacer so footer content isn't hidden behind the floating mobile CTA */}
        <div className="h-[68px] md:hidden" aria-hidden="true" />
        <MobileCTA />
        <ScrollReveal />
      </body>
    </html>
  )
}
