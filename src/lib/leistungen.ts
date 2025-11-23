// app/leistungen/data.ts

export interface Leistung {
  slug: string
  title: string
  intro: string
  list: {
    title: string
    desc: string
  }[]
  footer?: string
}

export const leistungen: Leistung[] = [
  // 1. Akut- und Übergangspflege
  {
    slug: 'akutpflege',
    title:
      'Akut- und Übergangspflege – Pflege und Begleitung in der Übergangsphase',
    intro:
      'Direkt nach einem Spitalaufenthalt bieten wir eine Akut- und Übergangspflege für bis zu 14 Tage an. In enger Kooperation mit dem behandelnden Spital stellen wir sicher, dass medizinische Vorgaben eingehalten werden und Sie umfassend und sicher in Ihrem Zuhause gepflegt und betreut werden.',
    list: [
      {
        title: 'Pflege nach Verordnung',
        desc: 'Pflege und Betreuung nach ärztlicher Anordnung.',
      },
      {
        title: 'Begleitung in der Übergangsphase',
        desc: 'Sichere Rückkehr in den Alltag nach Spitalaufenthalt.',
      },
      {
        title: 'Koordination',
        desc: 'Zusammenarbeit mit Ärzten und weiteren Gesundheitsorganisationen.',
      },
      {
        title: 'Beratung & Anleitung',
        desc: 'Information und Schulung für Klientinnen, Klienten und Angehörige.',
      },
      {
        title: 'Pflegeplanung',
        desc: 'Individuelle Planung der weiteren Pflege und Betreuung.',
      },
    ],
    footer:
      'Anmeldung: Die Anmeldung für die Akut- und Übergangspflege erfolgt durch den Spitalarzt. Ärztlich verordnete Leistungen werden direkt mit der Krankenkasse abgerechnet.',
  },

  // 2. Grundpflege
  {
    slug: 'grundpflege',
    title: 'Grundpflege – professionelle Unterstützung im Alltag',
    intro:
      'Die Grundpflege umfasst pflegerische Massnahmen, die der Erhaltung und Förderung von Gesundheit, Hygiene und Wohlbefinden dienen. Die Leistungen werden mit hoher Fachkompetenz, Sorgfalt und Respekt erbracht und individuell auf die Bedürfnisse, Gewohnheiten und den Gesundheitszustand der Klienten abgestimmt.',
    list: [
      {
        title: 'Körperpflege',
        desc: 'Unterstützung bei der individuellen Körperpflege wie z. B Dusche, Ganzkörper- oder Teilwäsche im Bett oder Lavabo, Mund- und Zahnpflege, Zahnprothesenpflege, Fuss- und Zehennägel schneiden.',
      },
      {
        title: 'Essen & Trinken',
        desc: 'Unterstützung beim Essen und Trinken, auch bei Schluckbeschwerden.',
      },
      {
        title: 'Mobilität',
        desc: 'Transfers, Lagerungen und Bewegungsübungen zur Förderung der Eigenaktivität.',
      },
      {
        title: 'An- und Auskleiden',
        desc: 'Hilfe beim wettergerechten An- und Auskleiden.',
      },
      {
        title: 'Ausscheidung',
        desc: 'Begleitung zur Toilette und Wechsel von Inkontinenzmaterial.',
      },
      {
        title: 'Prophylaxen',
        desc: 'Dekubitus-, Kontrakturen-, Thrombose- und Pneumonieprophylaxen.',
      },
      {
        title: 'Hautpflege',
        desc: 'Eincremen sowie Beobachtung und Versorgung von Druckstellen.',
      },
    ],
    footer:
      'Ärztlich verordnete Leistungen werden direkt mit der Krankenkasse abgerechnet.',
  },

  // 3. Behandlungspflege
  {
    slug: 'behandlungspflege',
    title: 'Behandlungspflege – kompetent, individuell und zuverlässig',
    intro:
      'Ziel der Behandlungspflege ist es, die medizinische Versorgung sicherzustellen und den Genesungsprozess bestmöglich zu unterstützen. Alle Massnahmen werden fachgerecht, nach ärztlicher Verordnung und unter Einhaltung höchster Qualitätsstandards durchgeführt.',
    list: [
      {
        title: 'Vitalzeichenkontrolle',
        desc: 'Messung von Blutdruck, Puls, Temperatur, O2-Sättigung und Gewicht.',
      },
      {
        title: 'Wundversorgung',
        desc: 'Behandlung akuter und chronischer Wunden.',
      },
      {
        title: 'Stomapflege',
        desc: 'Reinigung, Hautpflege sowie Wechsel und Anpassung der Stomaversorgung. Unterstützung bei Undichtigkeiten oder Hautreizungen.',
      },
      { title: 'Blutzucker & Insulin', desc: 'Messung und Insulintherapie.' },
      {
        title: 'Medikamentenmanagement',
        desc: 'Verabreichung und Organisation von Medikamenten.',
      },
      {
        title: 'Katheterpflege',
        desc: 'Reinigung und Kontrolle des Katheters, den Wechsel von Beuteln und Schläuchen, die Überwachung auf mögliche Komplikationen.',
      },
      {
        title: 'Injektionen & Infusionen',
        desc: 'intramuskuläre Injektionen und Infusion Therapien.',
      },
      {
        title: 'Ernährung',
        desc: 'Enterale Ernährung über die Magen- oder PEG-Sonde. Parenterale Ernährung direkt über den venösen oder zentralen Zugang.',
      },
      {
        title: 'Atemtherapie',
        desc: 'Nichtinvasive Atmungsunterstützung (NIV)',
      },
      {
        title: 'Beratung & Krisenbegleitung',
        desc: 'Unterstützung und Instruktion für Klientinnen, Klienten und Angehörige.',
      },
    ],
    footer:
      'Ärztlich verordnete Leistungen werden direkt mit der Krankenkasse abgerechnet.',
  },

  // 4. Angehörigenpflege
  {
    slug: 'angehoerige',
    title:
      'Unterstützung für pflegende Angehörige – Entlastung und Anerkennung',
    intro:
      'Pflegende Angehörige leisten unglaublich viel. Wir unterstützen sie gezielt, damit Pflege und Selbstfürsorge im Gleichgewicht bleiben und sie ihre Aufgabe langfristig gut bewältigen können.',
    list: [
      {
        title: 'Fachliche Unterstützung',
        desc: 'Begleitung und Schulung durch Pflegefachpersonen.',
      },
      {
        title: 'Entlastungsangebote',
        desc: 'Zeitweise Übernahme der Pflege zur Erholung.',
      },
      {
        title: 'Gesundheitsförderung',
        desc: 'Beratung zu Selbstfürsorge und Balance.',
      },
      {
        title: 'Regelmässiges Einkommen',
        desc: 'Möglichkeiten zur finanziellen Entschädigung.',
      },
      {
        title: 'Sozialversicherungsangelegenheiten',
        desc: 'Beratung zu Vorsorge- und Versicherungslösungen.',
      },
    ],
  },

  // 5. Abklärung & Beratung
  {
    slug: 'abklaerung-beratung',
    title: 'Abklärung und Beratung – individuelle Pflegeplanung mit Kompetenz',
    intro:
      'Vor Beginn unserer Pflegeeinsätze klären wir gemeinsam mit Ihnen Ihren individuellen Pflegebedarf ab. Dabei berücksichtigen wir Ihre gesundheitliche, soziale und persönliche Situation.',
    list: [
      {
        title: 'Pflegebedarf & Umfeld',
        desc: 'Ermittlung der individuellen Pflegesituation.',
      },
      {
        title: 'Spitalplanung',
        desc: 'Planung von Spitalaufenthalten und Austritten.',
      },
      {
        title: 'Information & Schulung',
        desc: 'Beratung und Aufklärung für Klientinnen, Klienten und Angehörige.',
      },
      {
        title: 'Hilfsmittelorganisation',
        desc: 'Bereitstellung und Koordination von Hilfsmitteln.',
      },
      {
        title: 'Koordination',
        desc: 'Zusammenarbeit mit Ärzten und weiteren Fachstellen.',
      },
    ],
  },

  // 6. Begleitung & Betreuung
  {
    slug: 'begleitung',
    title: 'Begleitung & Betreuung – Gemeinsam den Alltag gestalten',
    intro:
      'Begleitung und Betreuung fördern ein aktives und selbstbestimmtes Leben im gewohnten Umfeld und stärken soziale Teilhabe.',
    list: [
      {
        title: 'Gespräche & Aktivitäten',
        desc: 'Spiele, Gespräche und gemeinsame Erlebnisse.',
      },
      {
        title: 'Spaziergänge',
        desc: 'Individuell begleitete Bewegung im Freien.',
      },
      {
        title: 'Begleitung zu Terminen',
        desc: 'Unterstützung bei Arzt-, Therapie- oder Behördenbesuchen.',
      },
      {
        title: 'Alltagsgestaltung',
        desc: 'Struktur und Abwechslung im Tagesablauf.',
      },
      {
        title: 'Gesellschaft & Präsenz',
        desc: 'Verlässliche Anwesenheit zur Vorbeugung von Einsamkeit.',
      },
    ],
  },

  // 7. Hauswirtschaft
  {
    slug: 'hauswirtschaft',
    title:
      'Hauswirtschaftliche Leistungen – Entlastung für ein gepflegtes Zuhause',
    intro:
      'Zusätzlich zu KLV-Leistungen bieten wir umfassende Unterstützung im Haushalt, individuell angepasst an Ihre Bedürfnisse.',
    list: [
      { title: 'Reinigung', desc: 'Wohnungs- und Unterhaltsreinigung.' },
      {
        title: 'Wäscheservice',
        desc: 'Waschen, Bügeln und Pflege Ihrer Wäsche.',
      },
      {
        title: 'Mahlzeitenzubereitung',
        desc: 'Kochen und Anrichten individueller Mahlzeiten.',
      },
    ],
  },
]
