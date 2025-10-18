import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-3xl border border-primary/15 bg-primary text-primary-foreground p-8 sm:p-12 text-center shadow-sm">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-foreground/10 ring-1 ring-inset ring-primary-foreground/20">
            <Phone className="size-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Wir sind für Sie da
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-primary-foreground/90">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            Gemeinsam finden wir die beste Lösung für Ihre Bedürfnisse.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="secondary" className="min-w-48">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="min-w-48 border border-secondary text-white bg-transparent hover:bg-primary-foreground/10"
            >
              <a href="tel:+41555119393">Jetzt anrufen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
