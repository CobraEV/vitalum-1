import { Button } from '@/components/ui/button'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const TEAM_MEMBERS = [
  {
    name: 'Arzana Sabedini',
    role: 'CEO',
    image: '/team/platzhalter-frau.png',
    phone: '+41 55 511 93 93',
    email: 'arzana.sabedini@spitex-vitalum.ch',
  },
  {
    name: 'Lumnije Jaiji',
    role: 'CNO und Stv. CEO',
    image: '/team/LJ.png',
    phone: '+41 55 511 93 93',
    email: 'lumnije.jaiji@spitex-vitalum.ch',
  },
]

export default function UeberUnsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-0 space-y-0">
      {/* 🌿 Vision */}
      <section
        id="vision"
        className="scroll-mt-24 bg-background py-20 sm:py-24 text-center space-y-6"
      >
        <h2 className="text-3xl font-semibold text-primary">Unsere Vision</h2>

        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Unsere Vision ist es, Menschen durch qualitativ hochwertige,
            verlässliche und empathische Pflege ein selbstbestimmtes Leben in
            ihrer gewohnten Umgebung zu ermöglichen. Wir schaffen Vertrauen
            durch Fachkompetenz, Innovation und Menschlichkeit – und gestalten
            eine Pflege, die den Menschen in seiner Ganzheit sieht.
          </p>

          <p>
            Als zukunftsorientierte Spitex stehen wir für eine nachhaltige,
            vernetzte und verantwortungsbewusste Gesundheitsversorgung. Wir
            fördern eine Pflegekultur, die auf Respekt, Qualität und
            kontinuierlicher Weiterentwicklung basiert – zum Wohl unserer
            Klienten und der Gesellschaft.
          </p>

          <p className="text-sm text-muted-foreground italic">
            Vernetzt mit Ärzte Netstal AG, Akut Care, Care Solutions GmbH
          </p>
        </div>
      </section>

      {/* 🧭 Leitbild */}
      <section
        id="leitbild"
        className="scroll-mt-24 bg-muted py-20 sm:py-24 text-center space-y-6"
      >
        <h2 className="text-3xl font-semibold text-primary">Leitbild</h2>

        <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          <p>
            Wir setzen uns für eine professionelle, empathische und individuelle
            Pflege und Betreuung im gewohnten Umfeld unserer Klienten. Mit
            innovativen Lösungen, Fachkompetenz und Menschlichkeit fördern wir
            Lebensqualität, Selbstständigkeit und Sicherheit Zuhause. Unser
            Handeln ist geprägt von Respekt, Verantwortung und Qualität sowie
            dem Streben nach kontinuierlicher Weiterentwicklung.
          </p>
        </div>
      </section>

      {/* 👩‍⚕️ Team */}
      <section
        id="team"
        className="scroll-mt-24 bg-background py-20 sm:py-24 text-center space-y-2"
      >
        <h2 className="text-3xl font-semibold text-primary">Unser Team</h2>

        <p className="text-center max-w-2xl mx-auto text-muted-foreground">
          Unsere Mitarbeitenden sind das Herz von Vitalum – qualifiziert,
          empathisch und immer mit einem Lächeln für Sie da.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 mt-10">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.email}
              className="group relative flex flex-col items-center text-center rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] via-background to-secondary/[0.08] p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Portrait */}
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Name & Rolle */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium">{member.role}</p>
              </div>

              {/* Kontakt */}
              <div className="mt-4 text-sm text-muted-foreground space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📝 Feedback */}
      <section
        id="feedback"
        className="scroll-mt-24 bg-muted py-20 sm:py-24 text-center space-y-6"
      >
        <h2 className="text-3xl font-semibold text-primary">
          Feedback-Formular
        </h2>

        <p className="max-w-2xl mx-auto text-muted-foreground">
          Ihre Meinung ist uns wichtig. Teilen Sie Ihre Erfahrungen – damit wir
          noch besser werden können.
        </p>

        <div className="mt-8">
          <Button asChild>
            <Link
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=PUqYERdLMkCnnfVFJNu4atsh9v4yD_BOrfrCt4IoaENUN1NUUkUxWURQUTNQRlBLNDY5SEsxOFJaUC4u"
              target="_blank"
            >
              Zum Formular
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
