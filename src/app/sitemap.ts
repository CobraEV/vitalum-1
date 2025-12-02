import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date()

  return [
    {
      url: 'https://spitex-vitalum.ch',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://spitex-vitalum.ch/ueber-uns',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://spitex-vitalum.ch/dienstleistungen',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://spitex-vitalum.ch/karriere',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://spitex-vitalum.ch/kontakt',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://spitex-vitalum.ch/agb',
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://spitex-vitalum.ch/impressum',
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://spitex-vitalum.ch/datenschutz',
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
