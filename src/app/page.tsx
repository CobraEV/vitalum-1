import Einsatzgebiet from '@/components/Einsatzgebiet'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Hero />
      <div className="bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
          <h2 className="font-bold tracking-tight text-foreground text-center text-2xl sm:text-3xl">
            Über uns – Spitex Vitalum
          </h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground">
            Bei Spitex Vitalum steht der Mensch im Mittelpunkt, mit all seinen
            individuellen Bedürfnissen, Wünschen und alternativen
            Lebensumständen. Unser Antrieb ist es, Menschen dort zu
            unterstützen, wo sie sich am wohlsten fühlen: in ihrem eigenen
            Zuhause. Pflege ist mehr als eine Dienstleistung, sie ist Begegnung,
            Vertrauen und Begleitung auf Augenhöhe.
          </p>

          <p className="text-center max-w-2xl mx-auto text-muted-foreground">
            Der Name Spitex Vitalum stammt vom lateinischen vita - „Leben“ - und
            steht für Lebenskraft, Vitalität und Lebensfreude. Die Endung -lum
            verleiht dem Namen eine lichtvolle Dimension und symbolisiert Wärme,
            Zuversicht und Hoffnung - Werte, die wir tagtäglich in unsere Arbeit
            einbringen.
          </p>
        </div>
      </div>
      <section className="relative border-t border-border bg-background">
        <div className="container py-12 lg:py-16">
          {/* 🔹 Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Dienstleistungen
            </h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              Unser vielfältiges Leistungsangebot für Ihre individuelle Pflege
              und Betreuung
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>

      <div className="bg-background border-t border-border">
        <div className="container py-12 lg:py-16 flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight">
            Unsere Partner
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-8 items-center justify-evenly">
            <Link
              href="https://www.spitex.ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ASPS"
            >
              <Image src="/asps.png" height={150} width={200} alt="ASPS" />
            </Link>

            {/* <Link
              href="https://www.opanspitex.ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OPAN"
            >
              <Image src="/opan.png" height={150} width={200} alt="OPAN" />
            </Link> */}

            <Link
              href="https://www.srk-glarus.ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SRK Glarus"
            >
              <Image
                src="/logo-srk-glarus.svg"
                height={200}
                width={400}
                alt="SRK Glarus"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-muted">
        <div className="container py-8 lg:py-12">
          <Einsatzgebiet />
        </div>
      </div>
    </>
  )
}

export default Page
