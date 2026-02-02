import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface Language {
  name: string
  flagSrc: string
  flagAlt: string
  note?: string
}

const languages: Language[] = [
  {
    name: 'Deutsch',
    flagSrc: '/sprachen/deutschland.jpg',
    flagAlt: 'Deutschland Flagge',
  },
  {
    name: 'Albanisch',
    flagSrc: '/sprachen/Albanien.png',
    flagAlt: 'Albanien Flagge',
  },
  {
    name: 'Türkisch',
    flagSrc: '/sprachen/Tuerkei.svg',
    flagAlt: 'Türkei Flagge',
    note: 'Dolmetscherin',
  },
  {
    name: 'Italienisch',
    flagSrc: '/sprachen/Italien.svg',
    flagAlt: 'Italien Flagge',
    note: 'Dolmetscherin',
  },
]

export default function LanguagesSection() {
  return (
    <section className='border-t border-border bg-muted'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center tracking-tight mb-4'>
          Unsere Sprachen
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Wir kommunizieren mit unseren Patienten in mehreren Sprachen, um eine
          individuelle und verständnisvolle Betreuung zu gewährleisten.
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {languages.map((language) => (
            <div key={language.name} className='relative'>
              <Card className='flex flex-col items-center justify-center p-8 hover:shadow-lg transition-shadow'>
                <div className='relative w-28 h-20 mb-4'>
                  <Image
                    src={language.flagSrc}
                    alt={language.flagAlt}
                    fill
                    className='object-contain rounded'
                  />
                </div>
                <h3 className='font-semibold text-lg text-center'>
                  {language.name}
                </h3>
              </Card>
              {language.note && (
                <p className='absolute -bottom-8 left-0 right-0 text-sm text-muted-foreground text-center'>
                  {language.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
