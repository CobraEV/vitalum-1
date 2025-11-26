import Link from 'next/link'

export function AktuelleStellenSection() {
  const jobs = [
    'Dipl. Pflegefachfrau / -mann HF / FH',
    'Fachfrau / -mann Gesundheit EFZ',
    'Pflegehelfer:in SRK',
    'Mitarbeiter:in Hauswirtschaft',
  ]

  return (
    <section
      id="stellen"
      className="scroll-mt-24 bg-muted py-20 sm:py-24 text-center space-y-10"
    >
      {/* 🏷 Header */}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-primary">
          Aktuell suchen wir
        </h2>
      </div>

      {/* 💼 Stellenliste */}
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {jobs.map((title) => {
          const mailHref = `mailto:bewerbung@spitex-vitalum.ch?subject=Bewerbung%20–%20${encodeURIComponent(
            title
          )}`
          return (
            <Link
              key={title}
              href={mailHref}
              className="relative group flex items-center justify-center rounded-2xl border border-border bg-background py-10 px-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-center leading-snug">
                {title}
              </span>

              {/* sanftes Licht beim Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-secondary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          )
        })}
      </div>

      {/* 🤝 Zusatzinfo & Button */}
      <div className="space-y-6 mt-10">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Auch pensionierte Pflegefachpersonen oder Rückkehrende in den
          Pflegeberuf sind bei uns herzlich willkommen.
        </p>

        <div className="mt-8">
          <Link
            href="mailto:bewerbung@spitex-vitalum.ch"
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-white font-medium shadow-md transition-all hover:shadow-lg hover:bg-primary/90"
          >
            Kontaktiere uns
          </Link>
        </div>
      </div>
    </section>
  )
}
