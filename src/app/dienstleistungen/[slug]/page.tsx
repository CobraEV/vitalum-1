import { notFound } from 'next/navigation'
import { ServiceCard } from '@/components/service-card'
import { leistungen } from '@/lib/leistungen'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Page({ params }: { params: { slug: string } }) {
  const data = leistungen.find((item) => item.slug === params.slug)
  if (!data) return notFound()

  return (
    <section className="relative bg-muted py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl">
        {/* 🔙 Back link */}
        <div className="mb-10">
          <Link
            href="/dienstleistungen"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Alle Dienstleistungen</span>
          </Link>
        </div>

        {/* 🔹 HEADER */}
        <header className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </header>

        {/* 🔹 LEISTUNGEN */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Unsere Leistungen im Überblick
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {data.list.map((item, i) => (
              <ServiceCard key={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        {/* 🔹 FOOTER-HINWEIS */}
        {data.footer && (
          <div className="mt-20 flex justify-center">
            <div className="bg-secondary/10 border border-secondary/20 text-foreground px-8 py-6 rounded-2xl shadow-sm max-w-xl text-center">
              <p className="text-base leading-relaxed">{data.footer}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }))
}
