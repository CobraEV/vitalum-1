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
      <div className="container py-8 lg:py-12">
        <div className="mb-8 lg:mb-10 flex items-center justify-center gap-4">
          <h2 className="font-bold tracking-tight text-foreground text-center text-2xl sm:text-3xl">
            Dienstleistungen
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <li key={item.label} className="h-full">
              <div className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4">
                    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Image src={item.icon} alt="" width={32} height={32} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug group-hover:text-secondary transition-colors">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* 🧭 Mehr erfahren Button */}
                  <div className="mt-auto pt-6">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-center transition-colors"
                    >
                      <Link href={item.href}>Mehr erfahren</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
