'use client'

import { cn } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  {
    id: 'grundpflege',
    icon: '/icons/hair-washing.svg',
    title: 'Grundpflege',
    text: 'Unterstützung bei Körperpflege, Mobilität und Ernährung. Wir fördern Selbstständigkeit und begleiten mit Respekt – so viel Hilfe wie nötig, so selbstbestimmt wie möglich.',
  },
  {
    id: 'behandlungspflege',
    icon: '/icons/healthcare.svg',
    title: 'Behandlungspflege',
    text: 'Fachgerechte medizinische Pflege nach ärztlicher Verordnung – z. B. Wundversorgung, Medikamentenmanagement, Injektionen oder Vitalzeichenkontrolle – sicher und zuverlässig.',
  },
  {
    id: 'hauswirtschaft',
    icon: '/icons/cleaning.svg',
    title: 'Hauswirtschaft',
    text: 'Hilfe im Alltag: Einkaufen, Kochen, Reinigung, Wäsche und Organisation. Wir entlasten, damit Sie Energie für die wirklich wichtigen Dinge haben.',
  },
  {
    id: 'akut-uebergang',
    icon: '/icons/check-up.svg',
    title: 'Akut- & Übergangspflege',
    text: 'Kurzzeitige, intensive Unterstützung nach Spitalaufenthalt, Krankheit oder Unfall. Wir stabilisieren, planen die Nachsorge und bringen Sie sicher zurück in den Alltag.',
  },
  {
    id: 'angehoerigenpflege',
    icon: '/icons/family_1.svg',
    title: 'Angehörigenpflege',
    text: 'Entlastung, Anleitung und Unterstützung für pflegende Angehörige – wir stärken Sie mit Rat, Tat und Herz.',
  },
  {
    id: 'begleitung-betreuung',
    icon: '/icons/nursing-home.svg',
    title: 'Begleitung & Betreuung',
    text: 'Verlässliche Präsenz im Alltag: Gespräche, Spaziergänge, Terminbegleitung, aktivierende Beschäftigung – für mehr Lebensqualität zu Hause.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: 'easeOut' },
  }),
}

export default function DienstleistungenPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 🩺 Header */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Unsere Dienstleistungen
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Mit Herz, Kompetenz und Nähe – wir unterstützen Sie und Ihre
          Angehörigen in allen Lebenslagen. Unser Ziel ist Ihr Wohlbefinden zu
          Hause.
        </motion.p>
      </section>

      {/* 💚 Services */}
      <section id="angebot" className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className={cn(
                'rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300',
                'hover:-translate-y-1 hover:bg-card'
              )}
            >
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Image
                    src={s.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🗺 Einsatzgebiet */}
      <section
        id="einsatzgebiet"
        className="scroll-mt-24 space-y-6 text-center"
      >
        <motion.h2
          className="text-3xl font-semibold text-primary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Unser Einsatzgebiet
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Wir sind im gesamten{' '}
          <span className="text-secondary font-semibold">
            Kanton St. Gallen
          </span>{' '}
          für Sie unterwegs. Ob Stadt oder Land – unser Team kommt zuverlässig
          zu Ihnen nach Hause.
        </motion.p>
        <motion.div
          className="relative mx-auto rounded-2xl overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346955.72254295053!2d8.991083518745597!3d47.20500592092091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac3248b0a10a1%3A0xbae7aba15ca8dea!2sSt.%20Gallen!5e0!3m2!1sde!2sch!4v1760123427209!5m2!1sde!2sch"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      {/* 💰 Tarife */}
      <section
        id="tarife"
        className="scroll-mt-24 relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] px-6 py-20 shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.2)]"
      >
        {/* Glanz / Licht */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(76,195,170,0.15)_0%,transparent_70%)]" />

        <motion.h2
          className="relative z-10 text-4xl font-bold text-primary text-center tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tarife & Kosten
        </motion.h2>

        <motion.p
          className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Wir glauben an Klarheit und Vertrauen. Unsere Tarife sind fair,
          nachvollziehbar und orientieren sich an den Richtlinien des{' '}
          <strong>Kantons St. Gallen</strong> sowie der Krankenkassen.
        </motion.p>

        <motion.div
          className="relative z-10 mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3 text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Punkt 1 */}
          <div className="flex flex-col items-start space-y-3 sm:items-center sm:text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/icons/healthcare.svg"
                alt=""
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-foreground">Pflegeleistungen</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ärztlich verordnete Pflege wird direkt von der Grundversicherung
              übernommen.
            </p>
          </div>

          {/* Punkt 2 */}
          <div className="flex flex-col items-start space-y-3 sm:items-center sm:text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/icons/cleaning.svg"
                alt=""
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-foreground">
              Hauswirtschaft & Betreuung
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leistungen ausserhalb der ärztlichen Verordnung werden nach
              Aufwand berechnet.
            </p>
          </div>

          {/* Punkt 3 */}
          <div className="flex flex-col items-start space-y-3 sm:items-center sm:text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/icons/family_1.svg"
                alt=""
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-foreground">
              Individuelle Offerten
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wir beraten Sie persönlich und erstellen eine transparente
              Kostenübersicht – abgestimmt auf Ihre Situation.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="relative z-10 mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/kontakt"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-white font-medium shadow-md transition-all hover:shadow-lg hover:bg-primary/90"
          >
            <span className="relative z-10 transition-transform group-hover:translate-y-[-1px]">
              Persönliche Beratung anfragen
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>

        {/* Sanfter Lichtschein */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
      </section>
    </main>
  )
}
