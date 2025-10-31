import Einsatzgebiet from '@/components/Einsatzgebiet'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'

const Page = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <div className="bg-muted">
        <div className="container py-8 lg:py-12">
          <Einsatzgebiet />
        </div>
      </div>
    </>
  )
}

export default Page
