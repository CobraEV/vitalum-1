import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
              Spitex Vitalum
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
                <br />
                <br />
                <div>
                  <Link href="tel:+415515119393" className="hover:text-primary">
                    055 511 93 93
                  </Link>
                </div>
                <div>
                  <Link
                    href="mailto:info@spitex-vitalum.ch"
                    className="hover:text-primary"
                  >
                    info@spitex-vitalum.ch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 🌐 Social & Services */}
          <div>
            <p className="text-sm font-medium text-foreground uppercase tracking-wide">
              Vernetzt mit uns
            </p>
            <TooltipProvider delayDuration={100}>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Instagram */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.instagram.com/spitexvitalum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">Instagram</TooltipContent>
                </Tooltip>

                {/* LinkedIn */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.linkedin.com/company/spitex-vitalum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">LinkedIn</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.facebook.com/spitexvitalum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">Facebook</TooltipContent>
                </Tooltip>

                {/* LinkedIn */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.tiktok.com/spitex-vitalum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Image
                        alt="TikTok"
                        src={`/icons/tiktok.svg`}
                        height={18}
                        width={18}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">TikTok</TooltipContent>
                </Tooltip>

                {/* ASPS */}
                {/* <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.spitex.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors text-xs font-medium"
                      aria-label="ASPS"
                    >
                      <Image
                        src="/asps.png"
                        height={50}
                        width={50}
                        alt="ASPS"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    Spitex Verband Schweiz (ASPS)
                  </TooltipContent>
                </Tooltip> */}

                {/* OPAN */}
                {/* <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.opanspitex.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white transition-colors text-xs font-medium"
                      aria-label="OPAN"
                    >
                      <Image
                        src="/opan.png"
                        height={50}
                        width={50}
                        alt="OPAN"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">OPAN Spitex</TooltipContent>
                </Tooltip> */}
              </div>
            </TooltipProvider>
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
