import Einsatzgebiet from '@/components/Einsatzgebiet'
import Pricing from '@/components/Pricing'
import ServicesSection from '@/components/ServicesSection'

export default function DienstleistungenPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 🩺 Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Unsere Dienstleistungen
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Unsere Dienstleistungen unterstützen Sie individuell und zuverlässig
          in jeder Lebenslage. Wir verbinden Fachkompetenz mit Menschlichkeit,
          für ein Leben in gewohnter Umgebung.
        </p>
      </section>

      <ServicesSection />

      {/* 🗺 Einsatzgebiet */}
      <Einsatzgebiet />

      <Pricing />
    </main>
  )
}
