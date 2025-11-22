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
        Unsere Tarife richten sich nach den kantonalen Vorgaben sowie den
        Standards der ASPS Schweiz. KVG-pflichtige Leistungen werden nach den
        gesetzlichen Richtlinien finanziert. Nicht-KVG-Leistungen werden direkt
        mit Klientinnen, Klienten oder Angehörigen abgerechnet.
      </p>

      {/* 🩺 KVG-pflichtige Leistungen */}
      <div className="relative z-10 mx-auto mt-12 max-w-2xl">
        <h3 className="text-xl font-semibold text-primary mb-4 text-center">
          🩺 Pflegeleistungen (KVG-pflichtig)
        </h3>

        <div className="divide-y divide-border border border-border rounded-xl bg-card/50 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
            <span className="font-medium text-foreground">
              Abklärung, Beratung & Koordination
            </span>
            <span className="text-primary font-semibold">CHF 76.90 / Std.</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
            <span className="font-medium text-foreground">Grundpflege</span>
            <span className="text-primary font-semibold">CHF 52.60 / Std.</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
            <span className="font-medium text-foreground">
              Untersuchung & Behandlung
            </span>
            <span className="text-primary font-semibold">CHF 63.00 / Std.</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
          Diese Leistungen werden gemäss Krankenversicherungsgesetz (KVG) und
          Krankenpflege-Leistungsverordnung (KLV) finanziert. Die Kosten werden
          durch Krankenkasse, öffentliche Hand und Patientinnen/Patienten
          getragen.
        </p>
      </div>

      {/* 🏡 Nicht-KVG-pflichtige Leistungen */}
      <div className="relative z-10 mx-auto mt-16 max-w-2xl">
        <h3 className="text-xl font-semibold text-primary mb-4 text-center">
          🏡 Nicht-KVG-pflichtige Leistungen (Selbstzahler)
        </h3>

        <div className="divide-y divide-border border border-border rounded-xl bg-card/50 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
            <div className="flex flex-col">
              <span className="font-medium text-foreground">
                Hauswirtschaft
              </span>
              <span className="text-xs text-muted-foreground">
                Abrechnung über Zusatzversicherung teilweise möglich
              </span>
            </div>
            <span className="text-primary font-semibold">CHF 50.00 / Std.</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4">
            <span className="font-medium text-foreground">Betreuung</span>
            <span className="text-primary font-semibold">CHF 55.00 / Std.</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
          Diese Leistungen werden nicht von der Krankenkasse übernommen und
          direkt mit der betreuten Person oder den Angehörigen abgerechnet.
        </p>
      </div>

      {/* 👛 Patientenbeteiligung */}
      <div className="relative z-10 mx-auto mt-16 max-w-3xl text-center">
        <h3 className="text-xl font-semibold text-primary mb-4">
          👛 Patientenbeteiligung
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Die gesetzliche Patientenbeteiligung beträgt max.{' '}
          <strong className="text-foreground">CHF 15.35 pro Tag</strong>.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-2xl mx-auto">
          Sie entfällt für:
        </p>

        <ul className="text-sm text-muted-foreground leading-relaxed mt-2 space-y-1">
          <li>• Personen unter 18 Jahren</li>
          <li>
            • Fälle, in denen IV, UV, MV oder andere Versicherungen die Kosten
            übernehmen
          </li>
        </ul>

        <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-2xl mx-auto">
          In diesen Situationen gelten die Tarife des jeweiligen Kostenträgers.
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

      {/* Soft Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 translate-y-1/3 rounded-full bg-primary/10 blur-3xl -z-10" />
    </section>
  )
}
