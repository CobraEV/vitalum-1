import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

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

          {/* 🧭 Standort */}
          <div>
            <p className="text-sm font-medium text-foreground uppercase tracking-wide">
              Standort
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div>
                <Link
                  href="https://www.google.com/maps?q=Postweg+18,+8754+Netstal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Postweg 18
                  <br />
                  8754 Netstal
                </Link>
              </div>
            </div>
          </div>

          {/* 🌐 Social & Services */}
          <div>
            <p className="text-sm font-medium text-foreground uppercase tracking-wide">
              Vernetzt mit uns
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/spitexvitalum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/spitex-vitalum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>

              {/* ASPS */}
              <Link
                href="https://www.spitex.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors text-xs font-medium"
                aria-label="ASPS"
              >
                ASPS
              </Link>

              {/* OPAN */}
              <Link
                href="https://www.opanspitex.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors text-xs font-medium"
                aria-label="OPAN"
              >
                OPAN
              </Link>
            </div>
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
