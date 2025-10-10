'use client'

import { motion } from 'framer-motion'
import { Briefcase, HeartHandshake, Sparkles } from 'lucide-react'

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* 💼 Header */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold text-primary sm:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Arbeiten bei Vitalum
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Pflege mit Herz, Kompetenz und Menschlichkeit – dafür steht unser
          Team. Wir wachsen stetig und freuen uns über engagierte Menschen, die
          unsere Vision teilen.
        </motion.p>
      </section>

      {/* ✨ Icon-Highlights */}
      <section className="grid gap-10 sm:grid-cols-3 text-center">
        <motion.div
          className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm"
          whileHover={{ scale: 1.03 }}
        >
          <HeartHandshake className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Wertschätzung
          </h3>
          <p className="text-sm text-muted-foreground">
            Bei uns zählt der Mensch – Respekt, Vertrauen und Teamgeist stehen
            im Mittelpunkt.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm"
          whileHover={{ scale: 1.03 }}
        >
          <Sparkles className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Entwicklung
          </h3>
          <p className="text-sm text-muted-foreground">
            Wir fördern Weiterbildungen und schaffen Raum für persönliche und
            berufliche Entfaltung.
          </p>
        </motion.div>

        <motion.div
          className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm"
          whileHover={{ scale: 1.03 }}
        >
          <Briefcase className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Moderne Arbeitsbedingungen
          </h3>
          <p className="text-sm text-muted-foreground">
            Flexible Arbeitszeiten, faire Entlohnung und ein starkes
            Miteinander.
          </p>
        </motion.div>
      </section>

      {/* 📋 Aktuelle Stellen */}
      <section
        id="stellen"
        className="scroll-mt-24 text-center space-y-6 max-w-2xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-semibold text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aktuelle Stellen
        </motion.h2>

        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Momentan sind keine offenen Stellen ausgeschrieben.
          <br />
          Wir freuen uns jedoch immer über engagierte Menschen, die sich mit
          unserer Philosophie identifizieren.
        </motion.p>
      </section>
    </main>
  )
}
