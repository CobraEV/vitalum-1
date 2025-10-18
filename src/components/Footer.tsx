import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 🟢 Logo */}
          <div className="space-y-3">
            <Link href="/" aria-label="Zur Startseite" className="inline-flex">
              <Image
                src="/Logo_Vitalum.svg"
                alt="Vitalum Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ihr Partner für kompetente, herzliche und professionelle Pflege zu
              Hause.
            </p>
          </div>

          {/* 🧭 Navigation */}
          <div>
            <p className="text-sm font-medium text-foreground uppercase tracking-wide">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/dienstleistungen"
                >
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/ueber-uns"
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/jobs"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/kontakt"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* 📞 Kontakt */}
          <div>
            <p className="text-sm font-medium text-foreground uppercase tracking-wide">
              Kontakt
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary shrink-0" />
                <Link
                  href="mailto:info@spitex-vitalum.ch"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@spitex-vitalum.ch
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary shrink-0" />
                <Link
                  href="tel:+41555119393"
                  className="hover:text-primary transition-colors"
                >
                  +41 55 511 93 93
                </Link>
              </li>
              <li className="pt-1 text-xs text-muted-foreground/80">
                Postweg 18, 8754 Netstal
              </li>
            </ul>
          </div>
        </div>

        {/* ⚖️ Footer-Bottom */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Spitex Vitalum. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-primary" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-primary" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
