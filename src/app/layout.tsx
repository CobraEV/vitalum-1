import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = 'https://www.vitalum.ch'
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
  authors: [{ name: 'Vitalum', url: siteUrl }],
  creator: 'Vitalum',
  publisher: 'Vitalum',
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
        alt: 'Vitalum – Pflege mit Herz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage],
    creator: '@vitalum_ch', // optional: falls du später Twitter hast
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Healthcare',
  icons: {
    icon: '/favicon-96x96.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
      <body
        className={`${poppins.className} antialiased min-h-svh flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
