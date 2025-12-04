import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieBanner from '@/components/CookieBanner'

const siteUrl = 'https://spitex-vitalum.ch'
const siteName = 'Spitex Vitalum – Vertraut, Verbunden, Daheim'
const siteDescription =
  'Vitalum bietet professionelle Spitex- und Pflegeleistungen im Kanton St. Gallen. Individuell, zuverlässig und mit Herz – für mehr Lebensqualität zu Hause.'
const ogImage = `${siteUrl}/hero.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s | Spitex Vitalum',
  },
  description: siteDescription,
  keywords: [
    'Spitex St. Gallen',
    'Pflegedienst',
    'Hauspflege',
    'ambulante Pflege',
    'Vitalum',
    'Pflege mit Herz',
    'Angehörigenpflege',
    'Hauswirtschaft',
    'Behandlungspflege',
  ],
  authors: [{ name: 'Spitex Vitalum', url: siteUrl }],
  creator: 'Spitex Vitalum',
  publisher: 'Spitex Vitalum',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName,
    locale: 'de_CH',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Spitex Vitalum – Pflege mit Herz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage],
    creator: '@spitex_vitalum_ch', // optional: falls du später Twitter hast
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'Healthcare',
  applicationName: siteName,
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
    other: [
      {
        rel: 'icon',
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <GoogleAnalytics gaId="G-8541N0D00L" />
      <body
        className={`${poppins.className} antialiased min-h-svh flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
          <CookieBanner />
        </main>
        <Footer />
      </body>
    </html>
  )
}
