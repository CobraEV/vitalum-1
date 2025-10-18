'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { CheckCircle2, Loader2, XCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { sendMail } from '@/actions/send-mail'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>(
    'idle'
  )
  const [dialogOpen, setDialogOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    setStatus('sending')
    const result = await sendMail(formData)
    setStatus(result.success ? 'done' : 'error')
    setDialogOpen(true)
    if (result.success) formRef.current?.reset()
  }

  return (
    <>
      <form
        ref={formRef}
        action={handleSubmit}
        className="grid gap-5 text-left"
        autoComplete="on"
      >
        {/* 👤 Name */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-foreground"
            >
              Vorname <span className="text-red-500">*</span>
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              inputMode="text"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-foreground"
            >
              Nachname <span className="text-red-500">*</span>
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              inputMode="text"
            />
          </div>
        </div>

        {/* 📧 Kontakt */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              E-Mail <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="tel"
              className="text-sm font-medium text-foreground"
            >
              Telefonnummer
            </label>
            <Input
              id="tel"
              name="tel"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        </div>

        {/* ✍️ Nachricht */}
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Ihre Nachricht <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            autoComplete="off"
            inputMode="text"
          />
        </div>

        {/* 📨 Submit */}
        <div className="text-center space-y-2">
          <motion.div
            initial={false}
            animate={status === 'sending' ? { scale: 0.97 } : { scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              type="submit"
              className="relative px-8 overflow-hidden"
              disabled={status === 'sending'}
            >
              {status === 'sending' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 blur-md opacity-60"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.1,
                    ease: 'easeInOut',
                  }}
                />
              )}
              <span className="relative flex items-center justify-center gap-2">
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  'Nachricht senden'
                )}
              </span>
            </Button>
          </motion.div>
        </div>
      </form>

      {/* 💬 Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md rounded-3xl p-8 bg-gradient-to-b from-background to-muted shadow-2xl border border-border/60 text-center">
          <DialogHeader className="space-y-4">
            <AnimatePresence mode="wait">
              {status === 'done' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-inner"
                >
                  <CheckCircle2 className="size-9" />
                </motion.div>
              ) : (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-inner"
                >
                  <XCircle className="size-9" />
                </motion.div>
              )}
            </AnimatePresence>

            <DialogTitle className="text-2xl font-semibold text-center">
              {status === 'done'
                ? 'Vielen Dank für Ihre Nachricht'
                : 'Fehler beim Senden'}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed text-center">
              {status === 'done' ? (
                <>
                  Wir haben Ihre Nachricht erhalten und melden uns so bald wie
                  möglich persönlich bei Ihnen.
                </>
              ) : (
                <>
                  Leider konnte Ihre Nachricht nicht gesendet werden.
                  <br />
                  Bitte versuchen Sie es später erneut oder rufen Sie uns an:
                  <br />
                  <a
                    href="tel:+41555119393"
                    className="text-primary font-medium hover:underline"
                  >
                    +41 55 511 93 93
                  </a>
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-6">
            <Button
              onClick={() => setDialogOpen(false)}
              className="w-full text-base font-medium rounded-xl"
            >
              {status === 'done' ? 'Schliessen' : 'Erneut versuchen'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
