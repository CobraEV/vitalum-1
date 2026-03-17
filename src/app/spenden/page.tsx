'use client'

import { QRCodeSVG } from 'qrcode.react'
import {
  Heart,
  Copy,
  Check,
  Building2,
  CreditCard,
  MessageSquare,
  MapPin,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Swiss QR code data (SPS-Standard)
// Format: each field on a separate line, LF-separated
const IBAN_PLAIN = 'CH8080808008042305621'
const IBAN_FORMATTED = 'CH80 8080 8008 0423 0562 1'

const swissQrPayload = [
  'SPC', // 1  Header
  '0200', // 2  Version
  '1', // 3  Coding (UTF-8)
  IBAN_PLAIN, // 4  IBAN
  'K', // 5  Creditor address type (K = combined)
  'Spitex Vitalum GmbH', // 6  Name
  'Postweg 18', // 7  Address line 1
  '8754 Netstal', // 8  Address line 2
  '', // 9  Postal code (empty for K)
  '', // 10 City (empty for K)
  'CH', // 11 Country
  '', // 12 Ultimate creditor type
  '', // 13 Ultimate creditor name
  '', // 14 Ultimate creditor addr 1
  '', // 15 Ultimate creditor addr 2
  '', // 16 Ultimate creditor postal
  '', // 17 Ultimate creditor city
  '', // 18 Ultimate creditor country
  '', // 19 Amount (empty = open)
  'CHF', // 20 Currency
  '', // 21 Debtor type
  '', // 22 Debtor name
  '', // 23 Debtor addr 1
  '', // 24 Debtor addr 2
  '', // 25 Debtor postal
  '', // 26 Debtor city
  '', // 27 Debtor country
  'NON', // 28 Reference type
  '', // 29 Reference (empty for NON)
  'Spende', // 30 Unstructured message
  'EPD', // 31 Trailer
].join('\n')

export default function SpendenPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(IBAN_FORMATTED)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
    }
  }

  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12'>
      {/* Header */}
      <section className='text-center space-y-5 max-w-2xl mx-auto'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto'>
          <Heart className='h-8 w-8 text-primary fill-primary/30' />
        </div>
        <h1 className='text-4xl font-bold text-primary sm:text-5xl'>Spenden</h1>
        <p className='text-lg text-muted-foreground leading-relaxed'>
          Herzenswünsche bei Spitex Vitalum erfüllen – dank Ihrer Spende
          möglich.
        </p>
      </section>

      {/* Herzenwunsch-Text */}
      <section className='relative rounded-[2rem] border border-border bg-gradient-to-br from-[#e8f7f4] via-background to-[#f7fbfa] shadow-[inset_0_2px_20px_-5px_rgba(76,195,170,0.15)] p-8 sm:p-12 max-w-4xl mx-auto'>
        <div className='space-y-4 text-muted-foreground leading-relaxed'>
          <p>
            Die Arbeit von Spitex Vitalum basiert auf Fachkompetenz, Engagement
            und Menschlichkeit. Mit Ihrer Spende unterstützen Sie uns dabei,
            Menschen in ihrem Zuhause liebevoll zu begleiten und ihre
            Lebensqualität zu stärken.
          </p>
          <p>Ihre Unterstützung hilft uns:</p>
          <ul className='space-y-2 pl-4'>
            {[
              'Besondere Betreuungsangebote zu ermöglichen',
              'Zusätzliche Zeit für persönliche Begleitung zu schaffen',
              'Projekte umzusetzen, die den Alltag unserer Klienten bereichern',
            ].map((item) => (
              <li key={item} className='flex items-start gap-2'>
                <Heart className='h-4 w-4 text-primary fill-primary/30 mt-0.5 shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className='font-medium text-foreground'>
            Jede Spende zählt und kommt direkt den Menschen zugute, die wir
            betreuen.
          </p>
        </div>
      </section>

      {/* Donation details + QR code */}
      <section className='max-w-4xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 items-start'>
          {/* Account info */}
          <div className='rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-primary'>Spendenkonto</h2>

            <div className='space-y-5'>
              {/* Recipient */}
              <div className='flex items-start gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 shrink-0'>
                  <Building2 className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                    Empfänger
                  </p>
                  <p className='font-semibold text-foreground'>
                    Spitex Vitalum GmbH
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 shrink-0'>
                  <MapPin className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                    Adresse
                  </p>
                  <p className='font-medium text-foreground'>
                    Postweg 18, 8754 Netstal
                  </p>
                </div>
              </div>

              {/* IBAN */}
              <div className='flex items-start gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 shrink-0'>
                  <CreditCard className='h-4 w-4 text-primary' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                    IBAN
                  </p>
                  <div className='flex items-center gap-2 mt-0.5'>
                    <p className='font-mono font-semibold text-foreground tracking-wider'>
                      {IBAN_FORMATTED}
                    </p>
                    <button
                      onClick={handleCopy}
                      title='IBAN kopieren'
                      className='shrink-0 rounded-md p-1 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors'
                      aria-label='IBAN in die Zwischenablage kopieren'
                    >
                      {copied ? (
                        <Check className='h-4 w-4 text-primary' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Vermerk */}
              <div className='flex items-start gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 shrink-0'>
                  <MessageSquare className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                    Zahlungszweck / Vermerk
                  </p>
                  <p className='font-medium text-foreground'>Spende</p>
                </div>
              </div>
            </div>

            <p className='text-xs text-muted-foreground border-t border-border pt-4'>
              Bitte geben Sie beim Überweisen immer den Empfängernamen{' '}
              <span className='font-medium text-foreground'>
                Spitex Vitalum GmbH
              </span>{' '}
              sowie die vollständige IBAN an.
            </p>
          </div>

          {/* Swiss QR Code */}
          <div className='rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col items-center gap-5 shadow-sm'>
            <h2 className='text-xl font-semibold text-primary self-start'>
              QR-Spende
            </h2>
            <p className='text-sm text-muted-foreground self-start'>
              Scannen Sie den QR-Code direkt in Ihrer E-Banking-App oder Twint
              um die Zahlungsdetails automatisch zu übernehmen.
            </p>

            <div className='rounded-xl border-2 border-primary/20 bg-white p-4 shadow-inner'>
              <QRCodeSVG value={swissQrPayload} size={220} level='M' />
            </div>

            <p className='text-xs text-center text-muted-foreground'>
              Swiss QR-Code gemäss SPS-Standard – kompatibel mit allen Schweizer
              E-Banking-Apps
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='text-center'>
        <p className='text-muted-foreground mb-4'>
          Haben Sie Fragen zu Ihrer Spende? Wir sind gerne für Sie da.
        </p>
        <Button asChild>
          <Link href='/kontakt'>Kontakt aufnehmen</Link>
        </Button>
      </section>
    </main>
  )
}
