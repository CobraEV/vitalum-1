import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Spitex Vitalum',
  description:
    'Datenschutzerklärung der Spitex Vitalum – Informationen zum Umgang mit Ihren persönlichen Daten gemäss Schweizer Datenschutzgesetz (DSG).',
}

export default function DatenschutzPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray dark:prose-invert max-w-3xl">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Datenschutzerklärung
      </h1>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
        Diese Datenschutzerklärung informiert Sie darüber, wie wir bei{' '}
        <strong>Spitex Vitalum</strong> mit personenbezogenen Daten umgehen und
        welche Rechte Ihnen gemäss dem Schweizer Datenschutzgesetz (DSG)
        zustehen.
      </p>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          1. Verantwortliche Stelle
        </h2>
        <p>
          <strong>Spitex Vitalum</strong>
          <br />
          Postweg 18
          <br />
          8754 Netstal
          <br />
          Schweiz
          <br />
          <br />
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

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          2. Erhebung und Verarbeitung personenbezogener Daten
        </h2>
        <p>
          Wir erheben und verarbeiten personenbezogene Daten, die Sie uns
          freiwillig übermitteln – z.&nbsp;B. über unser Kontaktformular, per
          E-Mail, telefonisch oder im Rahmen unserer Pflege- und
          Betreuungsdienstleistungen.
        </p>
        <p>Dazu gehören insbesondere:</p>
        <ul>
          <li>Kontaktdaten (Name, Adresse, Telefonnummer, E-Mail-Adresse)</li>
          <li>
            Gesundheits- und Betreuungsinformationen im Rahmen unserer Tätigkeit
          </li>
          <li>Abrechnungs- und Vertragsdaten</li>
        </ul>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. Zweck der Datenverarbeitung
        </h2>
        <p>Die erhobenen Daten werden verwendet für:</p>
        <ul>
          <li>die Erbringung und Organisation unserer Spitex-Leistungen,</li>
          <li>die Kommunikation mit Ihnen, Ihren Angehörigen oder Ärzten,</li>
          <li>die Abwicklung von Verträgen und Abrechnungen,</li>
          <li>
            die Erfüllung gesetzlicher Pflichten (z.&nbsp;B. Gesundheitsgesetz).
          </li>
        </ul>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Weitergabe von Daten
        </h2>
        <p>
          Ihre Daten werden nur an Dritte weitergegeben, wenn dies für die
          Erfüllung unserer Dienstleistungen erforderlich ist (z.&nbsp;B. an
          behandelnde Ärzte, Spitäler, Krankenkassen) oder wenn eine gesetzliche
          Verpflichtung besteht. Eine Weitergabe zu Werbezwecken erfolgt nicht.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Datensicherheit
        </h2>
        <p>
          Wir treffen angemessene technische und organisatorische Massnahmen, um
          Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu
          schützen. Unsere IT-Systeme werden regelmässig überprüft und
          aktualisiert.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          6. Ihre Rechte
        </h2>
        <p>Sie haben das Recht:</p>
        <ul>
          <li>
            Auskunft über Ihre gespeicherten personenbezogenen Daten zu
            erhalten,
          </li>
          <li>unrichtige Daten berichtigen zu lassen,</li>
          <li>die Löschung nicht mehr benötigter Daten zu verlangen,</li>
          <li>der Verarbeitung Ihrer Daten zu widersprechen.</li>
        </ul>
        <p>
          Bitte richten Sie entsprechende Anfragen an:{' '}
          <a
            href="mailto:info@spitex-vitalum.ch"
            className="text-primary hover:underline"
          >
            info@spitex-vitalum.ch
          </a>
          .
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          7. Aufbewahrungsdauer
        </h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies zur
          Erfüllung des jeweiligen Zwecks oder zur Einhaltung gesetzlicher
          Aufbewahrungspflichten erforderlich ist.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          8. Verwendung von Cookies & Analyse-Tools
        </h2>
        <p>
          Unsere Website verwendet technisch notwendige Cookies zur
          Gewährleistung der Funktionalität. Falls Analyse- oder Trackingtools
          eingesetzt werden, erfolgt dies nur anonymisiert und ausschliesslich
          zur Verbesserung der Benutzerfreundlichkeit.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          9. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen,
          um sie an aktuelle rechtliche Anforderungen oder Änderungen unserer
          Dienstleistungen anzupassen. Es gilt jeweils die auf unserer Website
          veröffentlichte Version.
        </p>
      </section>

      <hr className="my-8 border-border" />

      <section className="text-sm text-muted-foreground">
        <p>Letzte Aktualisierung: Oktober 2025</p>
      </section>
    </main>
  )
}
