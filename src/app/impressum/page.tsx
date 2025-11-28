import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum | Spitex Vitalum',
  description:
    'Impressum der Spitex Vitalum – Ihre Spitex für professionelle, herzliche Pflege und Betreuung zu Hause im Kanton St. Gallen.',
}

export default function ImpressumPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray dark:prose-invert max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">Impressum</h1>

      <section className="space-y-2">
        <p>
          Dieses Impressum gilt für die Website{' '}
          <a
            href="https://spitex-vitalum.ch"
            className="text-primary hover:underline"
          >
            www.spitex-vitalum.ch
          </a>{' '}
          sowie für alle zugehörigen Unterseiten und Online-Dienste.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground">
          Verantwortlich für den Inhalt
        </h2>
        <p>
          <strong>Spitex Vitalum</strong>
          <br />
          Postweg 18
          <br />
          8754 Netstal
          <br />
          Schweiz
        </p>

        <p className="mt-2">
          Telefon:{' '}
          <a href="tel:+41555119393" className="text-primary hover:underline">
            +41 55 511 93 93
          </a>
          <br />
          E-Mail:{' '}
          <a
            href="mailto:info@spitex-vitalum.ch"
            className="text-primary hover:underline"
          >
            info@spitex-vitalum.ch
          </a>
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground">
          Rechtliche Hinweise
        </h2>
        <p>
          Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Videos
          etc.) sind urheberrechtlich geschützt. Jede Nutzung, Vervielfältigung
          oder Weitergabe ist nur mit ausdrücklicher schriftlicher Zustimmung
          der Spitex Vitalum zulässig.
        </p>
        <p>
          Trotz sorgfältiger Prüfung übernehmen wir keine Haftung für die
          Richtigkeit, Vollständigkeit oder Aktualität der Inhalte. Für Inhalte
          externer Links sind ausschliesslich deren Betreiber verantwortlich.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground">Datenschutz</h2>
        <p>
          Informationen zum Umgang mit personenbezogenen Daten finden Sie in
          unserer{' '}
          <a
            href="/datenschutz"
            className="text-primary hover:underline font-medium"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="text-sm text-muted-foreground">
        <p>Letzte Aktualisierung: Oktober 2025</p>
      </section>

      <hr className="my-8 border-border" />

      <section className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground">
          Haftungsausschluss
        </h2>
        <p>
          Spitex Vitalum übernimmt keine Haftung für Schäden materieller oder
          immaterieller Art, die durch den Zugriff oder die Nutzung der
          veröffentlichten Informationen, durch Missbrauch der Verbindung oder
          durch technische Störungen entstehen könnten.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* ⭐ EdelByte Design & Development */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">
          Technische Umsetzung & Design
        </h2>

        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-center sm:justify-between gap-4 p-4 border border-border rounded-lg bg-muted/30">
          {/* Text */}
          <p className="text-sm text-muted-foreground max-w-md text-center sm:text-left">
            Diese Website wurde technisch entwickelt und gestaltet von{' '}
            <Link
              href="https://edelbyte.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              EdelByte
            </Link>
            .
          </p>

          {/* Logo */}
          <Link
            href="https://edelbyte.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/EdelByte_Logo_Light_Square.png"
              alt="EdelByte Logo"
              height={200}
              width={500}
              className="h-24 w-auto"
            />
          </Link>
        </div>
      </section>

      <hr className="my-8" />

      <section className="text-sm text-muted-foreground">
        <p>Letzte Aktualisierung: Oktober 2025</p>
      </section>
    </main>
  )
}
