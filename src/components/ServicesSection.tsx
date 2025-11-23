import { Button } from '@/components/ui/button'
import { services } from '@/lib/services'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <ul className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((item) => (
        <li key={item.label} className="flex">
          <div className="group flex flex-col flex-1 justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex flex-col flex-1">
              {/* Icon + Text */}
              <div className="flex items-start gap-4">
                <div className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-auto pt-6">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-center border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <Link href={item.href}>Mehr erfahren</Link>
                </Button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
