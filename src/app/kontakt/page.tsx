import ContactForm from '@/components/ContactForm'
import { ClockIcon, Mail, MapPin, Phone, Shield, FileText } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function KontaktPage() {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8'>
      {/* 💚 Header */}
      <section className='text-center space-y-4'>
        <h1 className='text-4xl font-bold text-primary sm:text-5xl'>Kontakt</h1>
        <p className='max-w-2xl mx-auto text-muted-foreground leading-relaxed'>
          Sie möchten mehr über unsere Dienstleistungen erfahren oder einen
          Termin vereinbaren? Wir sind gerne für Sie da – telefonisch, per
          E-Mail oder direkt über das Formular.
        </p>
      </section>

      {/* ✨ Kontaktbereich */}
      <section className='relative rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.15)] p-8 sm:p-12'>
        <div className='grid lg:grid-cols-2 gap-8 items-start'>
          {/* 📞 Kontaktinformationen */}
          <div className='space-y-8'>
            <h2 className='text-2xl font-semibold text-primary'>
              So erreichen Sie uns
            </h2>

            <div className='space-y-5'>
              {[
                {
                  icon: <Phone className='h-5 w-5 text-primary' />,
                  label: 'Telefon',
                  value: '+41 55 511 93 93',
                  href: 'tel:+41555119393',
                },
                {
                  icon: <Mail className='h-5 w-5 text-primary' />,
                  label: 'E-Mail',
                  value: 'info@spitex-vitalum.ch',
                  href: 'mailto:info@spitex-vitalum.ch',
                },
                {
                  icon: <MapPin className='h-5 w-5 text-primary' />,
                  label: 'Adresse',
                  value: 'Postweg 18, 8754 Netstal',
                  href: 'https://maps.google.com/?q=Postweg+18,+8754+Netstal',
                },
                {
                  icon: <ClockIcon className='h-5 w-5 text-primary' />,
                  label: 'Öffnungszeiten',
                  value: 'Montag-Freitag: 08:00 - 12:00, 13:00 - 16:00',
                  href: 'https://maps.google.com/?q=Postweg+18,+8754+Netstal',
                },
              ].map((item, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-medium text-primary'>{item.label}</p>
                    <Link
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary transition text-sm'
                    >
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 💌 Kontaktformular */}
          <div className='rounded-2xl bg-white/70 backdrop-blur-sm border border-border shadow-sm p-6 sm:p-8'>
            <h2 className='text-2xl font-semibold text-primary mb-6 text-center'>
              Schreiben Sie uns
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 🏥 HIN E-Mail für Fachpersonen */}
      <section className='relative rounded-[2rem] border border-border bg-gradient-to-br from-muted via-background to-muted shadow-sm p-8 sm:p-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Überschrift */}
          <div className='text-center mb-8'>
            <div className='inline-flex items-center gap-2 mb-3'>
              <Shield className='h-6 w-6 text-primary' />
              <span className='text-sm font-semibold text-primary uppercase tracking-wide'>
                Für medizinische Fachpersonen
              </span>
            </div>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3'>
              Sichere Datenübermittlung via HIN
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Spitäler und Hausärzte können Patientendokumente sicher und
              datenschutzkonform über unser HIN-Mail übermitteln
            </p>
          </div>

          {/* HIN Email Card */}
          <div className='bg-card rounded-lg shadow-md border border-border p-6 sm:p-8'>
            <div className='flex flex-col sm:flex-row items-center gap-6'>
              {/* Icon */}
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center'>
                  <Mail className='h-8 w-8 text-secondary' />
                </div>
              </div>

              {/* Content */}
              <div className='flex-grow text-center sm:text-left'>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Unsere sichere HIN E-Mail-Adresse
                </h3>
                <a
                  href='mailto:spitex.vitalum@hin.ch'
                  className='text-2xl sm:text-3xl font-bold text-secondary hover:text-secondary/80 transition-colors break-all'
                >
                  spitex.vitalum@hin.ch
                </a>
                <p className='text-sm text-muted-foreground mt-2'>
                  Für die sichere Übermittlung von Patientendaten und Dokumenten
                </p>
              </div>

              {/* Button */}
              <div className='flex-shrink-0'>
                <Button
                  asChild
                  size='lg'
                  className='bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                >
                  <a href='mailto:spitex.vitalum@hin.ch'>
                    <Mail className='h-4 w-4 mr-2' />
                    E-Mail senden
                  </a>
                </Button>
              </div>
            </div>

            {/* Info Box */}
            <div className='mt-6 pt-6 border-t border-border'>
              <div className='flex items-start gap-3 text-sm text-muted-foreground'>
                <FileText className='h-5 w-5 text-secondary flex-shrink-0 mt-0.5' />
                <p>
                  <strong className='text-foreground'>Wichtig:</strong> Diese
                  E-Mail-Adresse ist speziell für medizinische Fachpersonen
                  bestimmt. Patientendaten, Arztberichte und andere sensible
                  Dokumente werden über das sichere Health Info Net (HIN)
                  verschlüsselt übertragen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
