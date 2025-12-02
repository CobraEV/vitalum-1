import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Spitex Vitalum',
    short_name: 'Vitalum',
    description:
      'Vitalum bietet professionelle Spitex- und Pflegeleistungen im Kanton St. Gallen – vertraut, verbunden, daheim.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#00587A',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
  }
}
