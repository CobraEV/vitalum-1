import ContactForm from '@/components/ContactForm'
import { ClockIcon, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function KontaktPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      {/* 💚 Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Kontakt</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Sie möchten mehr über unsere Dienstleistungen erfahren oder einen
          Termin vereinbaren? Wir sind gerne für Sie da – telefonisch, per
          E-Mail oder direkt über das Formular.
        </p>
      </section>

      {/* ✨ Kontaktbereich */}
      <section className="relative rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.15)] p-8 sm:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 📞 Kontaktinformationen */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-primary">
              So erreichen Sie uns
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: <Phone className="h-5 w-5 text-primary" />,
                  label: 'Telefon',
                  value: '+41 55 511 93 93',
                  href: 'tel:+41555119393',
                },
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  label: 'E-Mail',
                  value: 'info@spitex-vitalum.ch',
                  href: 'mailto:info@spitex-vitalum.ch',
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  label: 'Adresse',
                  value: 'Postweg 18, 8754 Netstal',
                  href: 'https://maps.google.com/?q=Postweg+18,+8754+Netstal',
                },
                {
                  icon: <ClockIcon className="h-5 w-5 text-primary" />,
                  label: 'Öffnungszeiten',
                  value: 'Montag-Freitag: 08:00 - 12:00, 13:00 - 16:00',
                  href: 'https://maps.google.com/?q=Postweg+18,+8754+Netstal',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-primary">{item.label}</p>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition text-sm"
                    >
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 💌 Kontaktformular */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-border shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
              Schreiben Sie uns
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
