import { Mail, Shield, FileText } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function HinContactSection() {
  return (
    <section className='bg-gradient-to-br from-muted via-background to-muted border-y border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
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

          {/* Zusätzliche Info */}
          <div className='mt-6 text-center'>
            <p className='text-sm text-muted-foreground'>
              Allgemeine Anfragen? Besuchen Sie unsere{' '}
              <Link
                href='/kontakt'
                className='text-secondary hover:text-secondary/80 font-medium underline'
              >
                Kontaktseite
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
