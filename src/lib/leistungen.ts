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
  {
    slug: 'grundpflege',
    title: 'Grundpflege – professionelle Unterstützung im Alltag',
    intro:
      'Die Grundpflege umfasst pflegerische Massnahmen, die der Erhaltung und Förderung von Gesundheit, Hygiene und Wohlbefinden dienen. Die Leistungen werden mit hoher Fachkompetenz, Sorgfalt und Respekt erbracht und individuell auf die Bedürfnisse, Gewohnheiten und den Gesundheitszustand der Klientinnen und Klienten abgestimmt.',
    list: [
      {
        title: 'Körperpflege',
        desc: 'Unterstützung bei Dusche, Ganzkörper- oder Teilwäsche, Mund- und Zahnpflege, Zahnprothesenpflege sowie Fuss- und Zehennägel schneiden.',
      },
      {
        title: 'Essen & Trinken',
        desc: 'Unterstützung beim Essen und Trinken, auch bei Schluckbeschwerden.',
      },
      {
        title: 'Mobilität',
        desc: 'Aufstehen, hinsetzen, kinästhetische Transfers, individuelle Lagerungen sowie Förderung der Eigenaktivität durch Bewegungsübungen.',
      },
      {
        title: 'An- und Auskleiden',
        desc: 'Hilfe beim wettergerechten An- und Auskleiden.',
      },
      {
        title: 'Ausscheidung',
        desc: 'Begleitung zur Toilette, Bereitstellung von Hilfsmitteln und Wechsel von Inkontinenzmaterial.',
      },
      {
        title: 'Prophylaxen',
        desc: 'Dekubitus-, Kontrakturen-, Thrombose- und Pneumonieprophylaxen.',
      },
      {
        title: 'Hautpflege',
        desc: 'Eincremen sowie Beobachtung und Behandlung von Druckstellen.',
      },
    ],
    footer:
      'Ärztlich verordnete Leistungen werden direkt mit der Krankenkasse abgerechnet.',
  },

  {
    slug: 'behandlungspflege',
    title: 'Behandlungspflege – kompetent, individuell und zuverlässig',
    intro:
      'Ziel der Behandlungspflege ist es, die medizinische Versorgung sicherzustellen und den Genesungsprozess bestmöglich zu unterstützen. Alle Massnahmen werden fachgerecht, nach ärztlicher Verordnung und unter Einhaltung höchster Qualitätsstandards durchgeführt. Unsere Pflegefachpersonen arbeiten eng mit Ärzten und Angehörigen zusammen, um eine optimale Pflege und Koordination zu gewährleisten.',
    list: [
      {
        title: 'Vitalzeichenkontrolle',
        desc: 'Messung von Blutdruck, Puls, Temperatur, Sauerstoffsättigung und Gewicht.',
      },
      {
        title: 'Wundversorgung',
        desc: 'Fachgerechte Behandlung akuter und chronischer Wunden.',
      },
      {
        title: 'Stomapflege',
        desc: 'Pflege und Überwachung bei künstlichem Darmausgang.',
      },
      {
        title: 'Blutzucker & Insulin',
        desc: 'Durchführung von Blutzuckermessungen und Insulintherapie.',
      },
      {
        title: 'Medikamentenmanagement',
        desc: 'Verabreichung, Kontrolle und Organisation von Medikamenten.',
      },
      {
        title: 'Katheterpflege',
        desc: 'Betreuung und Hygiene bei Blasenkathetern.',
      },
      {
        title: 'Injektionen & Infusionen',
        desc: 'Durchführung von subkutanen oder intravenösen Therapien.',
      },
      {
        title: 'Ernährung',
        desc: 'Enterale und parenterale Ernährung, angepasst an den Gesundheitszustand.',
      },
      {
        title: 'Atemtherapie',
        desc: 'Inhalations- und Sauerstofftherapie zur Unterstützung der Atmung.',
      },
      {
        title: 'Beratung & Krisenbegleitung',
        desc: 'Unterstützung, Instruktion und Begleitung von Klientinnen, Klienten und Angehörigen.',
      },
    ],
    footer:
      'Ärztlich verordnete Leistungen werden direkt mit der Krankenkasse abgerechnet.',
  },

  {
    slug: 'hauswirtschaft',
    title:
      'Hauswirtschaftliche Leistungen – Entlastung für ein gepflegtes Zuhause',
    intro:
      'Zusätzlich zu den anerkannten KLV-Leistungen bietet die Spitex Vitalum umfassende Unterstützung im Bereich der Haushaltsführung an. Unsere Dienstleistungen erleichtern den Alltag und tragen zu mehr Komfort und Lebensqualität zu Hause bei. Je nach persönlicher Situation und Versicherung kann eine Kostenübernahme oder Teilvergütung möglich sein. Selbstverständlich können unsere Angebote auch privat in Anspruch genommen werden.',
    list: [
      {
        title: 'Reinigung',
        desc: 'Unterhalts- und Wohnungsreinigung nach Ihren Bedürfnissen.',
      },
      {
        title: 'Wäscheservice',
        desc: 'Waschen, Bügeln und Pflege Ihrer Kleidung und Haushaltswäsche.',
      },
      {
        title: 'Mahlzeitenzubereitung',
        desc: 'Kochen und Anrichten ausgewogener, individueller Mahlzeiten.',
      },
    ],
  },

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

  {
    slug: 'angehoerige',
    title:
      'Unterstützung für pflegende Angehörige – Entlastung und Anerkennung',
    intro:
      'Pflegende Angehörige leisten enorm viel, und wir schätzen ihre hochwertige Pflege rund um die Uhr. Egal, ob Sie sich um Familienmitglieder oder nahe Bezugspersonen kümmern – wir bieten Ihnen gezielte Hilfestellungen, Schulungen und Ressourcen, damit Sie Pflege und Selbstfürsorge besser miteinander verbinden können. Unser Ziel ist es, Ihnen Sicherheit, Entlastung und faire Rahmenbedingungen zu bieten, damit Sie Ihre verantwortungsvolle Aufgabe langfristig gut bewältigen können.',
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
        desc: 'Beratung zu Selbstfürsorge und Balance im Pflegealltag.',
      },
      {
        title: 'Regelmässiges Einkommen',
        desc: 'Optionen für faire finanzielle Entschädigung.',
      },
      {
        title: 'Sozialversicherungsschutz',
        desc: 'Beratung zu Versicherungs- und Vorsorgelösungen.',
      },
    ],
  },

  {
    slug: 'begleitung',
    title: 'Begleitung & Betreuung – Gemeinsam den Alltag gestalten',
    intro:
      'Begleitung und Betreuung fördern ein aktives und selbstbestimmtes Leben im gewohnten Umfeld. Durch verlässliche Präsenz, anregende Gespräche und gemeinsame Aktivitäten wird soziale Teilhabe gestärkt, Sicherheit vermittelt und das persönliche Wohlbefinden nachhaltig gefördert.',
    list: [
      {
        title: 'Gespräche & Aktivitäten',
        desc: 'Anregende Gespräche, Spiele und gemeinsame Erlebnisse.',
      },
      {
        title: 'Spaziergänge',
        desc: 'Bewegung und frische Luft – individuell und sicher begleitet.',
      },
      {
        title: 'Begleitung zu Terminen',
        desc: 'Unterstützung bei Arzt-, Therapie- oder Behördenbesuchen.',
      },
      {
        title: 'Alltagsgestaltung',
        desc: 'Struktur und Abwechslung im täglichen Leben.',
      },
      {
        title: 'Gesellschaft & Präsenz',
        desc: 'Verlässliche Anwesenheit, um Einsamkeit vorzubeugen.',
      },
    ],
  },

  {
    slug: 'abklaerung-beratung',
    title: 'Abklärung und Beratung – individuelle Pflegeplanung mit Kompetenz',
    intro:
      'Bevor unsere Pflegeeinsätze beginnen, klären wir gemeinsam mit Ihnen den Pflegebedarf bei Ihnen Zuhause ab. Ihre individuelle Pflegesituation wird durch unsere Pflegefachperson erfasst. Wir berücksichtigen Ihren Gesundheitszustand, Ihr soziales Umfeld und gehen auf Ihre Fragen und Wünsche ein. So stellen wir sicher, dass Sie genau die Unterstützung erhalten, die Sie benötigen. Gemeinsam definieren wir Ihre Pflegeziele und passen den Pflegebedarf laufend mit Ihnen an. Wir übernehmen sämtliche Korrespondenz mit Ihrer Krankenkasse oder anderen Einrichtungen.',
    list: [
      {
        title: 'Pflegebedarf & Umfeld',
        desc: 'Abklärung des individuellen Pflegebedarfs sowie der persönlichen und sozialen Situation.',
      },
      {
        title: 'Spitalplanung',
        desc: 'Organisation und Planung von Spitaleintritten und -austritten in Abstimmung mit allen Beteiligten.',
      },
      {
        title: 'Information & Schulung',
        desc: 'Aufklärung, Schulung und Beratung von Klientinnen, Klienten und Angehörigen.',
      },
      {
        title: 'Hilfsmittelorganisation',
        desc: 'Koordination und Bereitstellung notwendiger Hilfsmittel für den Alltag.',
      },
      {
        title: 'Koordination',
        desc: 'Zusammenarbeit mit Ärztinnen, Ärzten und weiteren Fachpersonen zur optimalen Pflegeplanung.',
      },
    ],
  },
]
