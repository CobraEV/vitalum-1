'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const images = [
  '/assets/images/hero-1.jpg',
  '/assets/images/hero-2.jpg',
  '/assets/images/hero-3.jpg',
  '/assets/images/hero-4.jpg',
]

export default function Hero() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const duration = 6000 // ms

  const nextSlide = useCallback(() => {
    setIndex(([prev]) => [(prev + 1) % images.length, 1])
  }, [])

  const prevSlide = useCallback(() => {
    setIndex(([prev]) => [(prev - 1 + images.length) % images.length, -1])
  }, [])

  const startTimer = useCallback(() => {
    const start = Date.now()
    timerRef.current = setInterval(() => nextSlide(), duration)
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min(elapsed / duration, 1))
    }, 50)
  }, [nextSlide, duration])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    setProgress(0)
    startTimer()
  }, [startTimer])

  const goToSlide = useCallback(
    (i: number) => {
      resetTimer()
      setIndex(([prev]) => [i, i > prev ? 1 : -1])
    },
    [resetTimer]
  )

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [startTimer])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
      zIndex: 0,
    }),
    center: {
      x: 0,
      zIndex: 1,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 1,
      zIndex: 0,
    }),
  }

  const swipeConfidenceThreshold = 8000
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity

  return (
    <div className="relative">
      <section className="relative h-[90vh] w-full overflow-hidden touch-pan-y select-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 250, damping: 30, mass: 0.7 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              resetTimer()
              if (swipe < -swipeConfidenceThreshold) nextSlide()
              else if (swipe > swipeConfidenceThreshold) prevSlide()
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[index]}
              alt="Hero Image"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- Text unten links --- */}
        <div className="absolute bottom-20 left-10 z-10 max-w-5xl text-white px-4 sm:px-6">
          <motion.h1
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
            className="text-3xl font-bold sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Vertrau­te <span className="text-secondary">Pflege</span> -
            verbunden mit Ihrem <span className="text-secondary">Zuhause</span>
          </motion.h1>
          <motion.p
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
            className="mt-5 text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Wir unterstützen Sie mit Herz und Kompetenz im Alltag – individuell,
            zuverlässig und nah.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 transition-transform hover:translate-y-[-2px]"
            >
              <Link href="/kontakt">Termin vereinbaren</Link>
            </Button>
          </motion.div>
        </div>

        {/* ◀️▶️ Pfeile */}
        <button
          onClick={() => {
            resetTimer()
            prevSlide()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={() => {
            resetTimer()
            nextSlide()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
          aria-label="Nächstes Bild"
        >
          <ChevronRight size={32} />
        </button>

        {/* 🔘 Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                i === index
                  ? 'bg-secondary scale-110 shadow-md'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>

        {/* 📊 Fortschrittsbalken */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden z-10">
          <motion.div
            className="h-full bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ ease: 'linear', duration: 0.05 }}
          />
        </div>
      </section>
    </div>
  )
}
