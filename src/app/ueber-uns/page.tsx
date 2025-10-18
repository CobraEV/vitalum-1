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
    role: 'Pflegedienstleitung & Stv. CEO',
    image: '/team/platzhalter-frau.png',
    phone: '+41 55 511 93 93',
    email: 'lumnije.jaiji@spitex-vitalum.ch',
  },
]

export default function UeberUnsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* 👩‍⚕️ Team */}
      <section id="team" className="scroll-mt-24 space-y-2">
        <h2 className="text-3xl font-semibold text-primary text-center">
          Unser Team
        </h2>

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
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-border shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* 💚 Vision / Leitbild */}
      <section
        id="vision-leitbild"
        className="scroll-mt-24 relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] py-10 sm:py-16 lg:py-24 shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.2)]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* 🖼 Bild */}
            <div className="relative order-1 lg:order-none aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/assets/images/getty-images-WrcKIGP--sQ-unsplash.jpg"
                alt="Pflege mit Herz – Vitalum Vision"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* 📖 Text */}
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-primary">
                Vision & Leitbild
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir glauben an eine Pflege, die mehr ist als nur Versorgung –
                  sie ist Begleitung, Vertrauen und Nähe.
                </p>
                <p>
                  Unser Leitbild ist geprägt von Menschlichkeit,
                  Professionalität und Respekt. Jeder Mensch verdient Würde und
                  Aufmerksamkeit – unabhängig von Alter oder Lebenssituation.
                </p>
                <p>
                  Gemeinsam gestalten wir Pflege, die stärkt, entlastet und
                  verbindet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📝 Feedback-Formular */}
      <section id="feedback" className="scroll-mt-24 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-primary">
          Feedback-Formular
        </h2>

        <p className="max-w-2xl mx-auto text-muted-foreground">
          Ihre Meinung ist uns wichtig. Teilen Sie Ihre Erfahrungen – damit wir
          noch besser werden können.
        </p>

        <div className="mt-8">
          <Button asChild>
            <Link href="/ueber-uns/feedback">Zum Formular</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
