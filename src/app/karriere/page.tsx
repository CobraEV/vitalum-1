import { AktuelleStellenSection } from '@/components/AktuelleStellenSection'
import { Briefcase, Home, Sparkles, Star, Users } from 'lucide-react'

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-0 space-y-0">
      {/* 🌿 Intro */}
      <section className="scroll-mt-24 bg-background py-20 sm:py-24 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Werde Teil von Spitex Vitalum
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Verstärke unser Team und gestalte mit uns die Pflege von morgen.
            Spitex Vitalum – nah am Menschen, professionell und kompetent
          </p>
        </div>
      </section>

      {/* 📋 Aktuelle Stellen */}
      <AktuelleStellenSection />

      {/* 💎 Benefits */}
      <section className="scroll-mt-24 bg-background py-20 sm:py-24 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary">
            Benefits, die dich erwarten
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Wir bieten dir ein modernes Arbeitsumfeld, das Fachkompetenz,
            Menschlichkeit und Lebensqualität verbindet.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BenefitCard icon={<Star size={32} />} title="25 Ferientage" />
          <BenefitCard
            icon={<Home size={32} />}
            title="Vereinbarkeit von Beruf & Familie"
          />
          <BenefitCard
            icon={<Sparkles size={32} />}
            title="Individuelle Förderung"
          />
          <BenefitCard
            icon={<Briefcase size={32} />}
            title="Faire Entlohnung & Sozialleistungen"
          />
          <BenefitCard
            icon={<Users size={32} />}
            title="Mitarbeiterevents & Teamkultur"
          />
        </div>
      </section>
    </main>
  )
}

function BenefitCard({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.08] shadow-sm transition-transform hover:scale-[1.02] flex flex-col items-center text-center space-y-3">
      <div className="text-primary">{icon}</div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
    </div>
  )
}
