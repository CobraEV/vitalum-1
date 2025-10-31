import { Briefcase, HeartHandshake, Sparkles } from 'lucide-react'

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* 💼 Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          Arbeiten bei Vitalum
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Pflege mit Herz, Kompetenz und Menschlichkeit – dafür steht unser
          Team. Wir wachsen stetig und freuen uns über engagierte Menschen, die
          unsere Vision teilen.
        </p>
      </section>

      {/* ✨ Icon-Highlights */}
      <section className="grid gap-10 sm:grid-cols-3 text-center">
        <div className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm transition-transform hover:scale-[1.03]">
          <HeartHandshake className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Wertschätzung
          </h3>
          <p className="text-sm text-muted-foreground">
            Bei uns zählt der Mensch – Respekt, Vertrauen und Teamgeist stehen
            im Mittelpunkt.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm transition-transform hover:scale-[1.03]">
          <Sparkles className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Entwicklung
          </h3>
          <p className="text-sm text-muted-foreground">
            Wir fördern Weiterbildungen und schaffen Raum für persönliche und
            berufliche Entfaltung.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm transition-transform hover:scale-[1.03]">
          <Briefcase className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-lg font-semibold text-primary mb-1">
            Moderne Arbeitsbedingungen
          </h3>
          <p className="text-sm text-muted-foreground">
            Flexible Arbeitszeiten, faire Entlohnung und ein starkes
            Miteinander.
          </p>
        </div>
      </section>

      {/* 📋 Aktuelle Stellen */}
      <section
        id="stellen"
        className="scroll-mt-24 text-center space-y-6 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-primary">
          Aktuelle Stellen
        </h2>

        <p className="text-muted-foreground">
          Momentan sind keine offenen Stellen ausgeschrieben.
          <br />
          Wir freuen uns jedoch immer über engagierte Menschen, die sich mit
          unserer Philosophie identifizieren.
        </p>
      </section>
    </main>
  )
}
