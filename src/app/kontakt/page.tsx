'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function KontaktPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
      {/* 💚 Header */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold text-primary sm:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Kontakt
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Sie möchten mehr über unsere Dienstleistungen erfahren oder einen
          Termin vereinbaren? Wir sind gerne für Sie da – telefonisch, per
          E-Mail oder direkt über das Formular.
        </motion.p>
      </section>

      {/* ✨ Kontaktbereich */}
      <section className="relative rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.15)] p-8 sm:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 📞 Kontaktinformationen */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-primary">
              Kontaktinformationen
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Unser Büro befindet sich im Herzen von Netstal. Sie erreichen uns
              telefonisch, per E-Mail oder über unser Kontaktformular.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: <Phone className="h-5 w-5 text-primary" />,
                  label: 'Telefon',
                  value: '+41 55 511 93 93',
                  href: 'tel:+41555119393',
                },
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  label: 'E-Mail',
                  value: 'info@spitex-vitalum.ch',
                  href: 'mailto:info@spitex-vitalum.ch',
                },
                {
                  icon: <Globe className="h-5 w-5 text-primary" />,
                  label: 'Webseite',
                  value: 'www.spitex-vitalum.ch',
                  href: 'https://www.spitex-vitalum.ch',
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  label: 'Adresse',
                  value: 'Postweg 18, 8754 Netstal',
                  href: 'https://maps.google.com/?q=Postweg+18,+8754+Netstal',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-primary">{item.label}</p>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition text-sm"
                    >
                      {item.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💌 Kontaktformular */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-white/70 backdrop-blur-sm border border-border shadow-sm p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
              Schreiben Sie uns
            </h2>

            <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Vorname" required />
                <Input placeholder="Nachname" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="E-Mail" required />
                <Input type="tel" placeholder="Telefonnummer" />
              </div>
              <Textarea placeholder="Ihre Nachricht" rows={5} required />
              <div className="text-center">
                <Button type="submit" className="px-8">
                  Nachricht senden
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
