'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Link href="/" aria-label="Zur Startseite" className="inline-flex">
              <Image src="/Logo_Vitalum.svg" alt="Vitalum Logo" width={180} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-primary" href="/">Home</Link></li>
              <li><Link className="hover:text-primary" href="/dienstleistungen">Dienstleistungen</Link></li>
              <li><Link className="hover:text-primary" href="/ueber-uns">Über Uns</Link></li>
              <li><Link className="hover:text-primary" href="/jobs">Jobs</Link></li>
              <li><Link className="hover:text-primary" href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>E-Mail: info@spitex-vitalum.ch</li>
              <li>Telefon: +41 55 511 93 93</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SPITEX VITALUM. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-primary" href="/impressum">Impressum</Link>
            <Link className="hover:text-primary" href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


