import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      label: 'Grundpflege',
      description:
        'Unterstützung bei täglicher Körperpflege, An- und Auskleiden sowie Mobilisation.',
      href: '/dienstleistungen#angebot',
      icon: '/icons/hair-washing.svg',
    },
    {
      label: 'Behandlungspflege',
      description:
        'Medizinische Versorgung wie Wundpflege, Medikamentenabgabe und Injektionen.',
      href: '/dienstleistungen#angebot',
      icon: '/icons/healthcare.svg',
    },
    {
      label: 'Hauswirtschaft',
      description:
        'Hilfe im Haushalt wie Einkaufen, Kochen, Reinigung, Wäsche und Organisation.',
      href: '/dienstleistungen#angebot',
      icon: '/icons/cleaning.svg',
    },
    {
      label: 'Akut- und Übergangspflege',
      description:
        'Kurzzeitige, intensive Unterstützung nach Spitalaufenthalt, Krankheit oder Unfall.',
      href: '/dienstleistungen#angebot',
      icon: '/icons/check-up.svg',
    },
    {
      label: 'Angehörigenpflege',
      description:
        'Entlastung, Anleitung und Unterstützung für pflegende Angehörige im Alltag.',
      href: '/dienstleistungen#angehoerigenpflege',
      icon: '/icons/family_1.svg',
    },
    {
      label: 'Begleitung & Betreuung',
      description:
        'Verlässliche Präsenz: Gespräche, Terminbegleitung und aktivierende Beschäftigung.',
      href: '/dienstleistungen#angebot',
      icon: '/icons/nursing-home.svg',
    },
  ] as const

  return (
    <section className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8 lg:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-bold tracking-tight text-foreground text-2xl sm:text-3xl">
              Dienstleistungen
            </h2>
            <p className="mt-2 text-muted-foreground">
              Ein Auszug unserer Angebote – individuell, verlässlich und nah.
            </p>
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <li key={item.label}>
              <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <Link href={item.href} className="flex items-start gap-4">
                  <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Image src={item.icon} alt="" width={26} height={26} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-secondary transition-colors">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/dienstleistungen">Alle Dienstleistungen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
