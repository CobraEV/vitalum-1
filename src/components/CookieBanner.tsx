'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_NAME = 'vitalum_cookie_notice'
const COOKIE_MAX_AGE_DAYS = 365

export default function CookieNotice() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))

    if (!cookie) setShow(true)
  }, [])

  const accept = () => {
    document.cookie = `${COOKIE_NAME}=accepted; path=/; max-age=${
      COOKIE_MAX_AGE_DAYS * 24 * 60 * 60
    }; SameSite=Lax`
    setShow(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-1/2 z-[999] w-[95%] max-w-2xl -translate-x-1/2 rounded-xl border border-border bg-background p-5 shadow-lg backdrop-blur-lg"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Spitex Vitalum verwendet Cookies, die für die Funktionalität und
            eine benutzerfreundliche Nutzung der Website notwendig sind. Durch
            die weitere Verwendung unserer Website stimmen Sie der Nutzung von
            Cookies zu, wie in unserer{' '}
            <a
              href="/datenschutz"
              className="text-secondary underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>{' '}
            beschrieben.
          </p>

          <div className="mt-4 flex justify-end">
            <Button
              onClick={accept}
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              OK, verstanden
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
