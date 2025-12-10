import Image from 'next/image'

const Einsatzgebiet = () => {
  return (
    <section id="einsatzgebiet" className="scroll-mt-24 space-y-10 text-center">
      {/* 🟢 Header mit Wappen */}
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 text-center sm:text-left">
        {/* Wappen */}
        {/* <div className="flex justify-center sm:justify-end realtive lg:absolute left-0">
          <Image
            src="/St_Gallen.svg"
            alt="Wappen Kanton St. Gallen"
            width={100}
            height={100}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        </div> */}

        {/* Textblock */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary mb-2">
            Unser Einsatzgebiet
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Aktuell sind wir im Kanton{' '}
            <span className="text-secondary font-semibold">St. Gallen</span> und{' '}
            <span className="text-secondary font-semibold">Glarus</span> für Sie
            unterwegs. Unser Einsatzgebiet wird laufend erweitert.
            <br />
            <br />
            <span className="font-medium text-foreground">
              Büro-Öffnungszeiten:
            </span>{' '}
            Montag bis Freitag 08.00 – 12.00 / 13.00 – 16.00 Uhr.
          </p>
        </div>
      </div>

      {/* 🗺 Karte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full relative mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346955.72254295053!2d8.991083518745597!3d47.20500592092091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac3248b0a10a1%3A0xbae7aba15ca8dea!2sSt.%20Gallen!5e0!3m2!1sde!2sch!4v1760123427209!5m2!1sde!2sch"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-full relative mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279912.4118315416!2d8.798357811070442!3d47.012283862445635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47852db123ac8c1b%3A0xec224b87a0991355!2sGlarus!5e0!3m2!1sde!2sch!4v1765391424545!5m2!1sde!2sch"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Einsatzgebiet
