import Einsatzgebiet from '@/components/Einsatzgebiet'
import Hero from '@/components/Hero'
import HinContactSection from '@/components/HinContactSection'
import LanguagesSection from '@/components/LanguagesSection'
import ServicesSection from '@/components/ServicesSection'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Hero />
      <div className='bg-muted'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4'>
          <h2 className='font-bold tracking-tight text-foreground text-center text-2xl sm:text-3xl'>
            Über uns – Spitex Vitalum
          </h2>
          <p className='text-center max-w-2xl mx-auto text-muted-foreground'>
            Bei Spitex Vitalum steht der Mensch im Mittelpunkt, mit all seinen
            individuellen Bedürfnissen, Wünschen und alternativen
            Lebensumständen. Unser Antrieb ist es, Menschen dort zu
            unterstützen, wo sie sich am wohlsten fühlen: in ihrem eigenen
            Zuhause. Pflege ist mehr als eine Dienstleistung, sie ist Begegnung,
            Vertrauen und Begleitung auf Augenhöhe.
          </p>

          <p className='text-center max-w-2xl mx-auto text-muted-foreground'>
            Der Name Spitex Vitalum stammt vom lateinischen vita - „Leben“ - und
            steht für Lebenskraft, Vitalität und Lebensfreude. Die Endung -lum
            verleiht dem Namen eine lichtvolle Dimension und symbolisiert Wärme,
            Zuversicht und Hoffnung - Werte, die wir tagtäglich in unsere Arbeit
            einbringen.
          </p>
        </div>
      </div>
      <section className='relative border-t border-border bg-background'>
        <div className='container py-12 lg:py-16'>
          {/* 🔹 Heading */}
          <div className='mb-12 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-foreground'>
              Dienstleistungen
            </h2>
            <p className='mt-2 text-muted-foreground text-sm sm:text-base'>
              Unser vielfältiges Leistungsangebot für Ihre individuelle Pflege
              und Betreuung
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>

      <LanguagesSection />
      <HinContactSection />
      <div className='container py-12 lg:py-16 flex flex-col gap-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center tracking-tight'>
          Unsere Partner
        </h2>

        <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center m-auto text-center'>
          <Link
            href='https://www.opanspitex.ch'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='OPAN'
          >
            <Image
              src='/opan.png'
              height={150}
              width={200}
              alt='OPAN'
              className='m-auto text-center'
            />
          </Link>

          <Link
            href='https://www.spitex.ch'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='ASPS'
          >
            <Image
              className='m-auto text-center'
              // className="w-auto h-48 object-contain"
              src='/asps.png'
              height={150}
              width={200}
              alt='ASPS'
            />
          </Link>

          <Link
            href='https://www.srk-glarus.ch'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='SRK Glarus'
          >
            <Image
              className='m-auto text-center'
              src='/logo-srk-glarus.svg'
              height={200}
              width={400}
              alt='SRK Glarus'
              // className="w-auto h-24 object-contain"
            />
          </Link>

          <Link
            href='https://www.aerztenetstal.ch'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Ärzte Netstal AG'
          >
            <Image
              className='m-auto text-center'
              src='/aerztenetstal.png'
              height={200}
              width={400}
              alt='Ärzte Netstal AG'
              // className="w-auto h-24 object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Spenden Teaser */}
      <section className='bg-linear-to-br from-[#e8f7f4] via-background to-[#f7fbfa] border-t border-border'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20'>
          <div className='flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto'>
            <div className='shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-primary/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-primary'
                viewBox='0 0 24 24'
                fill='currentColor'
                fillOpacity='0.3'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </div>
            <div className='flex-1 text-center lg:text-left space-y-3'>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground'>
                Herzenswünsche erfüllen – dank Ihrer Spende möglich
              </h2>
              <p className='text-muted-foreground max-w-xl'>
                Mit Ihrer Spende unterstützen Sie uns dabei, Menschen in ihrem
                Zuhause liebevoll zu begleiten und ihre Lebensqualität zu
                stärken. Jede Spende kommt direkt den Menschen zugute, die wir
                betreuen.
              </p>
            </div>
            <div className='shrink-0'>
              <Link
                href='/spenden'
                className='inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' />
                </svg>
                Jetzt spenden
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-muted border-t border-border'>
        <div className='container py-8 lg:py-12'>
          <Einsatzgebiet />
        </div>
      </div>
    </>
  )
}

export default Page
