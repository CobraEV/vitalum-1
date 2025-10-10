'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative isolate bg-primary/10">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
          {/* 🖼️ IMAGE FIRST on mobile */}
          <motion.div
            className="relative order-1 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border shadow-sm lg:order-2 lg:aspect-[4/3]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/hero.jpg"
              alt="Vitalum Pflegedienst"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* 🧍 TEXT SECOND on mobile */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Vertrau­te Pflege, verbunden mit{' '}
              <span className="text-secondary">Zuhause</span>
            </h1>
            <p className="max-w-prose text-muted-foreground">
              Wir unterstützen Sie mit Herz und Kompetenz im Alltag –
              individuell, zuverlässig und nah. Erfahren Sie mehr über unsere
              Leistungen und vereinbaren Sie Ihren Termin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="transition-transform hover:translate-y-[-1px]"
              >
                <Link href="/termin">Termin buchen</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="transition-transform hover:translate-y-[-1px]"
              >
                <Link href="/dienstleistungen">Leistungen ansehen</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
