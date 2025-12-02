import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/intern/'],
    },
    sitemap: 'https://spitex-vitalum.ch/sitemap.xml',
    host: 'https://spitex-vitalum.ch',
  }
}
