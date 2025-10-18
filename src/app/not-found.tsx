'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" aria-label="Zur Startseite">
          <Image
            src="/Logo_Vitalum.svg"
            alt="Spitex Vitalum Logo"
            width={200}
            height={60}
            className="mx-auto mb-6 h-12 w-auto"
            priority
          />
        </Link>
      </motion.div>

      {/* Titel */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-primary mb-2"
      >
        Seite nicht gefunden
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-muted-foreground max-w-md"
      >
        Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben.
        Bitte prüfen Sie die URL oder kehren Sie zur Startseite zurück.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <ArrowLeft className="size-4" />
          Zur Startseite
        </Link>
      </motion.div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-xs text-muted-foreground"
      >
        © {new Date().getFullYear()} Spitex Vitalum – Vertrauen. Verbunden.
        Daheim.
      </motion.div>
    </main>
  )
}
