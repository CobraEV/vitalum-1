'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavChild = { href: string; label: string }
type NavItem = { href: string; label: string; children?: NavChild[] }

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/dienstleistungen',
    label: 'Dienstleistungen',
    children: [
      { href: '/dienstleistungen#angebot', label: 'Angebot' },
      { href: '/dienstleistungen#angehoerigenpflege', label: 'Angehörigenpflege' },
      { href: '/dienstleistungen#einsatzgebiet', label: 'Einsatzgebiet' },
      { href: '/dienstleistungen#tarife', label: 'Tarife' },
    ],
  },
  {
    href: '/ueber-uns',
    label: 'Über Uns',
    children: [
      { href: '/ueber-uns#team', label: 'Team' },
      { href: '/ueber-uns#vision-leitbild', label: 'Vision / Leitbild' },
      { href: '/ueber-uns#feedback', label: 'Feedback-Formular' },
    ],
  },
  { href: '/jobs', label: 'Jobs' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<Record<string, boolean>>({})

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Zur Startseite"
          >
            <Image
              src="/Logo_Vitalum.svg"
              alt="Vitalum Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className={cn('relative group')}>
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                  'text-muted-foreground'
                )}
              >
                {item.label}
                {item.children && (
                  <span className="mt-0.5 inline-block border-x-4 border-t-4 border-b-0 border-x-transparent border-t-current text-xs opacity-60" />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border border-border bg-popover p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                  <ul className="flex flex-col">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <Link href="/termin">Termin buchen</Link>
          </Button>
          <Button asChild>
            <Link href="/kontakt">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {/* Hamburger / Close icon */}
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform',
                  mobileOpen && 'translate-y-[7px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-[7px] h-0.5 w-5 bg-foreground transition-opacity',
                  mobileOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-[14px] h-0.5 w-5 bg-foreground transition-transform',
                  mobileOpen && '-translate-y-[7px] -rotate-45'
                )}
              />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn('lg:hidden', mobileOpen ? 'block' : 'hidden')}>
        <div className="border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-1 p-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="w-full">
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={!!mobileSubOpen[item.href]}
                    onClick={() =>
                      setMobileSubOpen((s) => ({ ...s, [item.href]: !s[item.href] }))
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        'transition-transform',
                        mobileSubOpen[item.href] && 'rotate-180'
                      )}
                    >
                      ▼
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && mobileSubOpen[item.href] && (
                  <ul className="mt-1 space-y-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-[15px] text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/termin" onClick={() => setMobileOpen(false)}>
                  Termin buchen
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/kontakt" onClick={() => setMobileOpen(false)}>
                  Kontakt
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
