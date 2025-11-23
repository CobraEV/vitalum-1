import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Spitex Vitalum',
  description:
    'Allgemeine Geschäftsbedingungen (AGB) der Spitex Vitalum GmbH – Regelungen zu Leistungen, Verträgen, Datenschutz, Haftung und weiteren Bestimmungen im Bereich der ambulanten Pflege.',
}

export default function AgbPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray dark:prose-invert max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Allgemeine Geschäftsbedingungen
      </h1>

      <p>
        Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln das
        Vertragsverhältnis zwischen der <strong>Spitex Vitalum GmbH</strong> und
        ihren Klientinnen und Klienten im Bereich der ambulanten Pflege und
        Betreuung. Sie gelten für sämtliche von uns angebotenen
        Dienstleistungen.
      </p>

      <hr className="my-8 border-border" />

      {/* 1 — Geltungsbereich */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          1. Geltungsbereich
        </h2>
        <p>
          Diese AGB gelten für alle ambulanten Pflege- und
          Betreuungsdienstleistungen, die durch Spitex Vitalum erbracht werden.
          Individuelle Abmachungen im Spitexvertrag haben Vorrang vor diesen
          AGB.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 2 — Leistungen */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">2. Leistungen</h2>
        <p>
          Spitex Vitalum erbringt ambulante Pflege- und Betreuungsleistungen für
          Menschen aller Altersgruppen. Die Art und der Umfang der Leistungen
          werden individuell vereinbart und im Spitexvertrag schriftlich
          festgehalten.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 3 — Vertragsabschluss */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. Vertragsabschluss
        </h2>
        <p>
          Der Vertrag kommt durch die Unterzeichnung des Spitexvertrags durch
          die Kundin oder den Kunden bzw. deren rechtliche Vertretung und Spitex
          Vitalum zustande. Der Vertrag definiert die vereinbarten Leistungen,
          Kosten, Zahlungsmodalitäten sowie weitere Regelungen.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 4 — Pflichten der Kunden */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Pflichten der Kundinnen und Kunden
        </h2>
        <ul>
          <li>
            Bereitstellung wahrheitsgemässer und vollständiger Angaben zu
            Gesundheit, Betreuungssituation und relevanten Umständen.
          </li>
          <li>
            Nutzung der vereinbarten Dienstleistungen gemäss Spitexvertrag.
          </li>
          <li>
            Information bei Änderungen des Gesundheitszustands oder der
            Betreuungssituation.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-border" />

      {/* 5 — Pflichten der Spitex Vitalum */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Pflichten von Spitex Vitalum
        </h2>
        <ul>
          <li>
            Sorgfältige, fachgerechte und qualitativ hochwertige Erbringung der
            vereinbarten Leistungen.
          </li>
          <li>
            Einsatz qualifizierter, geschulter und zuverlässiger Mitarbeitender.
          </li>
          <li>Einhaltung der Berufsgeheimnisse und der Schweigepflicht.</li>
        </ul>
      </section>

      <hr className="my-8 border-border" />

      {/* 6 — Haftung */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">6. Haftung</h2>
        <ul>
          <li>
            Spitex Vitalum haftet für Schäden, die durch vorsätzliches oder grob
            fahrlässiges Verhalten verursacht werden.
          </li>
          <li>
            Bei leichter Fahrlässigkeit ist die Haftung auf die Verletzung
            wesentlicher Vertragspflichten beschränkt.
          </li>
          <li>
            Für mittelbare Schäden oder Folgeschäden wird – soweit gesetzlich
            zulässig – keine Haftung übernommen.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-border" />

      {/* 7 — Datenschutz Hinweis */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          7. Datenschutz
        </h2>
        <p>
          Personenbezogene Daten werden ausschliesslich im Rahmen der
          Vertragserfüllung verwendet und vertraulich behandelt. Die Bearbeitung
          erfolgt gemäss den gesetzlichen Bestimmungen des Schweizer
          Datenschutzgesetzes (DSG). Details zur Datenbearbeitung finden Sie in
          unserer{' '}
          <a
            href="/datenschutz"
            className="text-primary font-medium underline underline-offset-2"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 8 — Änderungen der AGB */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          8. Änderungen der AGB
        </h2>
        <p>
          Spitex Vitalum behält sich das Recht vor, diese AGB jederzeit zu
          ändern. Kundinnen und Kunden werden über wesentliche Änderungen
          informiert. Änderungen gelten als akzeptiert, wenn innert angemessener
          Frist kein schriftlicher Widerspruch eingelegt wird.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 9 — Gerichtsstand */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          9. Gerichtsstand und anwendbares Recht
        </h2>
        <p>
          Für sämtliche Vertragsbeziehungen gilt ausschliesslich Schweizer
          Recht. Gerichtsstand ist – sofern gesetzlich zulässig – Glarus.
        </p>
      </section>

      <hr className="my-8 border-border" />

      {/* 10 — Salvatorische Klausel */}
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          10. Salvatorische Klausel
        </h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam
          sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
          Anstelle der unwirksamen Bestimmung gilt jene Regelung als vereinbart,
          die dem wirtschaftlichen Zweck am nächsten kommt.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="text-sm text-muted-foreground">
        <p>Letzte Aktualisierung: Oktober 2025</p>
      </section>
    </main>
  )
}
