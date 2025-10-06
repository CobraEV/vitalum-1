'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function DienstleistungenPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-16">
      <header className="space-y-2">
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Dienstleistungen
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Wir unterstützen Sie mit individuellen Leistungen – verlässlich,
          kompetent und nah.
        </motion.p>
      </header>

      <section id="angebot" className="scroll-mt-24 space-y-6">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Angebot
        </motion.h2>
        <div className="rounded-xl border border-border bg-card p-2 sm:p-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="grundpflege">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-inset ring-primary/20">
                    <Image
                      src="/icons/hair-washing.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="font-medium">Grundpflege</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 text-muted-foreground">
                Unterstützung bei Körperpflege, Mobilität und Ernährung. Wir
                fördern Selbstständigkeit und begleiten mit Respekt – so viel
                Hilfe wie nötig, so selbstbestimmt wie möglich.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="behandlungspflege">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-inset ring-primary/20">
                    <Image
                      src="/icons/healthcare.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="font-medium">Behandlungspflege</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 text-muted-foreground">
                Fachgerechte medizinische Pflege nach ärztlicher Verordnung – z.
                B. Wundversorgung, Medikamentenmanagement, Injektionen oder
                Vitalzeichenkontrolle – sicher und zuverlässig.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hauswirtschaft">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-inset ring-primary/20">
                    <Image
                      src="/icons/cleaning.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="font-medium">Hauswirtschaft</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 text-muted-foreground">
                Hilfe im Alltag: Einkaufen, Kochen, Reinigung, Wäsche und
                Organisation. Wir entlasten, damit Sie Energie für die wirklich
                wichtigen Dinge haben.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="akut-uebergang">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-inset ring-primary/20">
                    <Image
                      src="/icons/check-up.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="font-medium">Akut- und Übergangspflege</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 text-muted-foreground">
                Kurzzeitige, intensive Unterstützung nach Spitalaufenthalt,
                Krankheit oder Unfall. Wir stabilisieren, planen die Nachsorge
                und bringen Sie sicher zurück in den Alltag.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="begleitung-betreuung">
              <AccordionTrigger className="px-2">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-inset ring-primary/20">
                    <Image
                      src="/icons/nursing-home.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="font-medium">Begleitung & Betreuung</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 text-muted-foreground">
                Verlässliche Präsenz im Alltag: Gespräche, Spaziergänge,
                Terminbegleitung, aktivierende Beschäftigung – für mehr
                Lebensqualität und soziale Teilhabe zu Hause.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="einsatzgebiet" className="scroll-mt-24 space-y-4">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Einsatzgebiet
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-prose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Wir sind in der Region unterwegs. Kontaktieren Sie uns, um die
          Versorgung an Ihrer Adresse abzustimmen.
        </motion.p>
        <motion.div
          className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Karte / Liste der Gemeinden kann hier folgen.
        </motion.div>
      </section>

      <section id="tarife" className="scroll-mt-24 space-y-4">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tarife
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-prose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Transparente Konditionen gemäss Richtlinien. Wir beraten Sie zu
          Leistungen der Krankenkassen und möglichen Kostenbeteiligungen.
        </motion.p>
        <motion.div
          className="rounded-lg border border-border p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Abrechnung der ärztlich verordneten Leistungen gemäss Tarif</li>
            <li>Hauswirtschaftliche Leistungen nach Aufwand</li>
            <li>Individuelle Offerten auf Anfrage</li>
          </ul>
        </motion.div>
      </section>

      <div className="pt-2">
        <Link href="/kontakt" className="text-primary hover:underline">
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  )
}
