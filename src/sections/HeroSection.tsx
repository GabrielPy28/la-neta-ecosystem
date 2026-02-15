import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { gsap } from 'gsap'
import {
  HiLightningBolt,
  HiUserGroup,
  HiClipboardList,
  HiFire,
  HiChartBar,
  HiSearchCircle,
  HiCash,
} from 'react-icons/hi'
import { MdAddReaction } from 'react-icons/md'
import { ImEye } from 'react-icons/im'
import { FaPhotoVideo } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const STATS = [
  { value: 2, suffix: 'B', label: 'Billion impressions', unit: 'billion', icon: MdAddReaction },
  { value: 1, suffix: 'M', label: 'Million dollars', unit: 'million', icon: HiCash },
  { value: 100, suffix: 'M', label: 'Million views per year', unit: 'million', icon: ImEye },
  { value: 2, suffix: 'k+', label: 'Videos produced', unit: 'k', icon: FaPhotoVideo },
] as const

const OFFER_SLIDES = [
  {
    icon: HiLightningBolt,
    title: 'Strategy & Creative',
    metric: '3x',
    metricLabel: 'higher engagement vs. standard ads',
    impact: 'Campaigns that break through the noise.',
    copy: 'High-impact concepts designed to go viral. We don’t follow trends—we set them. From insight to execution, every idea is built to dominate feeds and convert.',
  },
  {
    icon: HiUserGroup,
    title: 'Top-Tier Talent',
    metric: '1,000+',
    metricLabel: 'vetted creators in our network',
    impact: 'Real people. Real results. No dead weight.',
    copy: 'We handpick creators who actually move the needle. Access to the best talent across niches and regions. Your brand in the right hands, every time.',
  },
  {
    icon: HiClipboardList,
    title: 'Flawless Ops',
    metric: '21',
    metricLabel: 'days from brief to delivery',
    impact: 'You focus on the vision. We handle the rest.',
    copy: 'Contracts, invoices, rights, and logistics—all managed. One point of contact, clear timelines, zero surprises. Scale without the operational headache.',
  },
  {
    icon: HiFire,
    title: 'Full-Service Fire',
    metric: '100%',
    metricLabel: 'turnkey production',
    impact: 'From idea to live campaign—we own it.',
    copy: 'Strategy, talent, production, and distribution under one roof. You bring the vision; we bring the creative execution that makes you global.',
  },
  {
    icon: HiChartBar,
    title: 'Data & Analytics',
    metric: 'Clear',
    metricLabel: 'reports that show what worked',
    impact: 'Stop guessing. Start optimizing.',
    copy: 'Performance dashboards that tell you exactly what drove results. Attribution, benchmarks, and actionable insights so every dollar works harder.',
  },
  {
    icon: HiSearchCircle,
    title: 'Elite Scouting',
    metric: '24/7',
    metricLabel: 'talent discovery & vetting',
    impact: 'We find the creators your competitors haven’t.',
    copy: 'Our team constantly discovers and vets new talent. First access to rising stars and niche experts. The right face for your brand, before everyone else.',
  },
]

const OFFER_AUTO_ADVANCE_MS = 5500

const VIDEO_PLAYBACK_RATE = 0.55

function StatCard({
  value,
  suffix,
  label,
  unit,
  index,
  icon: Icon,
}: {
  value: number
  suffix: string
  label: string
  unit: string
  index: number
  icon: IconType
}) {
  const numRef = useRef<HTMLSpanElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = numRef.current
    const labelEl = labelRef.current
    if (!el) return
    const end =
      unit === 'billion' ? 2 : unit === 'million' ? (value === 100 ? 100 : 1) : 2
    const delay = 0.9 + index * 0.2
    if (labelEl) gsap.set(labelEl, { opacity: 0, y: 8 })
    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: end,
        duration: 2.4,
        delay,
        ease: 'power2.out',
        snap: { textContent: 1 },
        overwrite: true,
        onStart: () => {
          if (cardRef.current) {
            gsap.to(cardRef.current, {
              scale: 1.02,
              duration: 0.3,
              boxShadow:
                '0 25px 50px -12px rgba(0,0,0,0.35), 0 0 30px -8px rgba(102,65,237,0.35)',
            })
          }
        },
        onComplete: () => {
          if (cardRef.current) {
            gsap.to(cardRef.current, {
              scale: 1,
              duration: 0.4,
              ease: 'back.out(1.2)',
              boxShadow:
                '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
            })
          }
          if (labelEl) {
            gsap.to(labelEl, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
          }
        },
      }
    )
  }, [index, value, unit])

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-2xl backdrop-blur-sm"
      style={{
        background: 'linear-gradient(135deg, rgba(102,65,237,0.2) 0%, rgba(255,71,172,0.1) 100%)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.65,
        delay: 0.35 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.06,
        transition: { duration: 0.25 },
      }}
      onHoverStart={() => {
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            boxShadow:
              '0 28px 56px -12px rgba(0,0,0,0.35), 0 0 48px -12px rgba(102,65,237,0.45), 0 0 0 1px rgba(255,255,255,0.08)',
            duration: 0.3,
          })
        }
      }}
      onHoverEnd={() => {
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            boxShadow:
              '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
            duration: 0.3,
          })
        }
      }}
    >
      {/* Background icon */}
      <span
        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-white/10 md:right-2"
        aria-hidden
      >
        <Icon size={96} />
      </span>
      <p className="relative mb-1 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
        <span ref={numRef}>0</span>
        <span className="text-[var(--laneta-pink)]">{suffix}</span>
      </p>
      <p ref={labelRef} className="relative text-sm font-medium text-white/80">
        {label}
      </p>
    </motion.div>
  )
}

const HERO_VIDEO_SRC = '/assets/videos/record_video.mp4'

function OfferCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  const total = OFFER_SLIDES.length

  const goTo = (next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + total) % total)
    setProgress(0)
    startTimeRef.current = Date.now()
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total)
      setDirection(1)
      setProgress(0)
      startTimeRef.current = Date.now()
    }, OFFER_AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    startTimeRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total)
      setDirection(1)
      setProgress(0)
      startTimeRef.current = Date.now()
    }, OFFER_AUTO_ADVANCE_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [total])

  useEffect(() => {
    startTimeRef.current = Date.now()
  }, [index])

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(Math.min((Date.now() - startTimeRef.current) / OFFER_AUTO_ADVANCE_MS, 1))
    }, 80)
    return () => clearInterval(t)
  }, [])

  const slide = OFFER_SLIDES[index]

  return (
    <motion.div
      className="rounded-2xl border border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(3,7,18,0.85) 100%)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <h2 className="text-lg font-bold text-white md:text-xl">What we offer</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1, -1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Previous service"
          >
            <span className="text-lg">←</span>
          </button>
          <span className="min-w-[4ch] text-center text-sm font-medium text-white/80">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1, 1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Next service"
          >
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
      <div className="relative min-h-[483px] pb-2 md:min-h-[414px] md:pb-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 px-6 pt-6 pb-4 md:px-10 md:py-10"
          >
            <motion.span
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl text-4xl text-white md:h-32 md:w-32 md:text-6xl"
              style={{
                background: 'linear-gradient(135deg, var(--laneta-purple), var(--laneta-pink))',
                boxShadow: '0 12px 40px rgba(102,65,237,0.5)',
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.35 }}
            >
              <slide.icon />
            </motion.span>
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-2xl font-bold text-white md:text-4xl mb-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {slide.title}
              </motion.h3>
              <motion.div
                className="flex flex-wrap items-baseline gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-mono text-4xl font-bold text-[var(--laneta-pink)] md:text-5xl">
                  {slide.metric}
                </span>
                <span className="text-base text-white/80 md:text-lg">{slide.metricLabel}</span>
              </motion.div>
              <motion.p
                className="text-base font-semibold text-white/95 mb-4 md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {slide.impact}
              </motion.p>
              <motion.p
                className="text-base text-white/75 leading-relaxed max-w-2xl md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slide.copy}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className="relative z-10 flex items-center gap-2 border-t border-white/10 bg-slate-900/40 px-6 py-4 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(3,7,18,0.6) 100%)',
        }}
      >
        <div className="flex-1 h-1.5 min-w-0 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--laneta-purple)] to-[var(--laneta-pink)]"
            style={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex shrink-0 gap-1.5">
          {OFFER_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [heroInView, setHeroInView] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        setHeroInView(!!entries[0]?.isIntersecting)
      },
      { rootMargin: '0px', threshold: 0 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (heroInView) {
      video.playbackRate = VIDEO_PLAYBACK_RATE
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [heroInView])

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el
    if (el) {
      el.playbackRate = VIDEO_PLAYBACK_RATE
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background video: solo se reproduce cuando el hero está en vista */}
      <div className="absolute inset-0">
        <video
          ref={setVideoRef}
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE
          }}
          onCanPlay={(e) => {
            e.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE
            if (heroInView) e.currentTarget.play().catch(() => {})
          }}
          src={HERO_VIDEO_SRC}
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,23,42,0.75) 0%, rgba(102,65,237,0.6) 50%, rgba(3,7,18,0.85) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Labels */}
        <motion.p
          className="mb-3 text-sm font-medium tracking-[0.2em] text-white/70 uppercase md:mb-4 md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Global · Digital · Creators
        </motion.p>

        {/* Title */}
        <motion.h1
          className="mb-8 max-w-5xl overflow-visible md:mb-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        >
          <span className="block text-4xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] md:text-5xl lg:text-6xl xl:text-7xl">
          <span
            className="mt-2 pb-1 leading-[1.35] bg-gradient-to-r from-[var(--laneta-blue)] via-[var(--laneta-purple)] to-[#a78bfa] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl md:pb-1.5 lg:text-6xl xl:text-7xl"
            style={{
              filter: 'drop-shadow(0 0 24px rgba(238, 34, 211, 0.46)) drop-shadow(0 2px 12px rgba(23, 103, 207, 0.25))',
            }}
          >La Neta</span> - Leaders of the digital ecosystem
          </span>
          <span
            className="mt-2 block pb-1 leading-[1.35] bg-gradient-to-r from-[var(--laneta-blue)] via-[var(--laneta-purple)] to-[#a78bfa] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl md:pb-1.5 lg:text-6xl xl:text-7xl"
            style={{
              filter: 'drop-shadow(0 0 24px rgba(121,188,247,0.35)) drop-shadow(0 2px 12px rgba(102,65,237,0.25))',
            }}
          >
            on a global scale
          </span>
        </motion.h1>

        {/* Slogan */}
        <motion.div
          className="mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="mb-2 text-base text-white/80 md:text-lg">
            We don’t just manage campaigns.
          </p>
          <p className="inline-block rounded-xl bg-white/10 px-5 py-2.5 text-xl font-bold tracking-tight text-white shadow-[0_0_30px_rgba(102,65,237,0.3)] ring-1 ring-white/20 backdrop-blur-sm md:text-2xl">
            We Dominate Feeds.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mb-18 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              unit={stat.unit}
              index={index}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Positioning statement */}
        <motion.p
          className="mb-12 max-w-3xl text-lg font-medium leading-relaxed text-white/90 md:mb-14 md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're not an agency. We're the content, data, and talent infrastructure your brand needs to scale today.
        </motion.p>

        {/* Offer carousel */}
        <OfferCarousel />
      </div>
    </section>
  )
}
