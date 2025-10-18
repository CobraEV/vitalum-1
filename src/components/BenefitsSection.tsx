import Image from 'next/image'
import { Clock, ShieldCheck } from 'lucide-react'

export default function BenefitsSection() {
  const items = [
    {
      title: 'Mit Herz',
      description:
        'Einfühlsame und individuelle Betreuung für jeden Patienten.',
      renderIcon: () => (
        <Image src="/icons/heart.svg" alt="" width={28} height={28} />
      ),
    },
    {
      title: 'Erfahrenes Team',
      description: 'Qualifizierte Fachkräfte mit langjähriger Erfahrung.',
      renderIcon: () => (
        <Image src="/icons/users.svg" alt="" width={28} height={28} />
      ),
    },
    {
      title: '24/7 Erreichbar',
      description: 'Rund um die Uhr für Sie da, wenn Sie uns brauchen.',
      renderIcon: () => <Clock className="size-7" />,
    },
    {
      title: 'Zertifiziert',
      description: 'Höchste Qualitätsstandards und Sicherheit.',
      renderIcon: () => <ShieldCheck className="size-7" />,
    },
  ] as const

  return (
    <section className="relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Warum Spitex Vitalum?
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Wir bieten mehr als nur Pflege – wir schaffen Vertrauen und
            Lebensqualität.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full text-primary ring-1 ring-inset ring-secondary">
                <div className="text-primary">{item.renderIcon()}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
