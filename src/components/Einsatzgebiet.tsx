const Einsatzgebiet = () => {
  return (
    <section id="einsatzgebiet" className="scroll-mt-24 space-y-6 text-center">
      <h2 className="text-3xl font-semibold text-primary">
        Unser Einsatzgebiet
      </h2>
      <p className="max-w-2xl mx-auto text-muted-foreground">
        Wir sind im gesamten{' '}
        <span className="text-secondary font-semibold">Kanton St. Gallen</span>{' '}
        für Sie unterwegs. Ob Stadt oder Land – unser Team kommt zuverlässig zu
        Ihnen nach Hause.
      </p>
      <div className="relative mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346955.72254295053!2d8.991083518745597!3d47.20500592092091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac3248b0a10a1%3A0xbae7aba15ca8dea!2sSt.%20Gallen!5e0!3m2!1sde!2sch!4v1760123427209!5m2!1sde!2sch"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Einsatzgebiet
