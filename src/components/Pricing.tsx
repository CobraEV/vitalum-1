import Link from 'next/link'

export default function Pricing() {
  return (
    <section
      id="tarife"
      className="scroll-mt-24 relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] px-6 py-20 shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.2)]"
    >
      {/* Lichtreflex */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(76,195,170,0.15)_0%,transparent_70%)]" />

      {/* Header */}
      <h2 className="relative z-10 text-4xl font-bold text-primary text-center tracking-tight">
        Tarife & Kosten
      </h2>

      <p className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-muted-foreground leading-relaxed">
        Unsere Tarife orientieren sich an den gängigen Ansätzen der
        Spitex-Leistungen gemäss kantonalen Richtlinien.
      </p>

      {/* Tariftabelle */}
      <div className="relative z-10 mx-auto mt-12 max-w-2xl divide-y divide-border border border-border rounded-xl bg-card/50 shadow-sm backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
          <span className="font-medium text-foreground">
            Abklärung, Beratung und Koordination
          </span>
          <span className="text-primary font-semibold">CHF 76.90 / Std.</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
          <span className="font-medium text-foreground">Grundpflege</span>
          <span className="text-primary font-semibold">CHF 52.60 / Std.</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
          <span className="font-medium text-foreground">
            Untersuchung und Behandlung
          </span>
          <span className="text-primary font-semibold">CHF 63.00 / Std.</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
          <span className="font-medium text-foreground">Hauswirtschaft</span>
          <span className="text-primary font-semibold">CHF 50.00 / Std.</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
          <span className="font-medium text-foreground">Betreuung</span>
          <span className="text-primary font-semibold">CHF 55.00 / Std.</span>
        </div>
      </div>

      {/* Zusatzinfos */}
      <div className="relative z-10 mx-auto mt-10 max-w-3xl space-y-6 text-sm text-muted-foreground leading-relaxed text-center">
        <p>
          Die <strong className="text-foreground">Patientenbeteiligung</strong>{' '}
          beträgt <strong className="text-foreground">CHF 15.35 / Tag</strong>.
          Für Personen unter 18 Jahren oder wenn die Kosten durch eine andere
          Versicherung (z. B. Invaliden-, Unfall- oder Militärversicherung)
          übernommen werden, entfällt die Patientenbeteiligung. In diesem Fall
          gelten die Tarife der jeweiligen Versicherung.
        </p>
        <p>
          Für Einsätze fällt eine{' '}
          <strong className="text-foreground">Wegpauschale</strong> zwischen{' '}
          <strong className="text-foreground">CHF 3.00 und CHF 6.00</strong> pro
          Besuch an, bei hauswirtschaftlichen Leistungen{' '}
          <strong className="text-foreground">CHF 8.00 pro Besuch</strong>.
          Nacht-, Wochenend- und Feiertagszuschläge werden mit{' '}
          <strong className="text-foreground">CHF 15.00 / Std.</strong>{' '}
          berechnet.
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-14 flex justify-center">
        <Link
          href="/kontakt"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 text-white font-medium shadow-md transition-all hover:shadow-lg hover:bg-primary/90"
        >
          <span className="relative z-10 transition-transform group-hover:-translate-y-[1px]">
            Persönliche Beratung anfragen
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* Sanfter Lichtschein */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 translate-y-1/3 rounded-full bg-primary/10 blur-3xl -z-10" />
    </section>
  )
}
