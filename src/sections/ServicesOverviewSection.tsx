/**
 * Service Overview Layer (Decision Layer) — B2B.
 * Map of the full system before detail. Enables quick self-identification:
 * Platform → Execution modes → "I need THIS" → click.
 * Not "Our Services" — positioned as "The System" / execution layers.
 */
import { motion } from 'motion/react'
import theFactoryImg from '../assets/the_factory.jpg'

/** Accent for card decoration (CSS + SVG). */
const CARD_ACCENTS = ['amber', 'emerald', 'amber', 'emerald'] as const

const EXECUTION_SERVICES = [
  {
    tagline: 'AI Execution Layer',
    title: 'The Glitch',
    value: 'Generate and test content at scale using AI talent.',
    forLabel: 'For performance marketing teams',
    ctaLabel: 'View AI execution',
    href: '#the-glitch',
  },
  {
    tagline: 'Creator Execution Layer',
    title: 'The Hook Hunter',
    value: 'UGC creators optimized for performance hooks and conversions.',
    forLabel: 'For growth teams',
    ctaLabel: 'View creator execution',
    href: '#the-hook-hunter',
  },
  {
    tagline: 'Scaling Layer',
    title: 'The Amplifier',
    value: 'Turn winning content into consistent volume and reach.',
    forLabel: 'For performance brands',
    ctaLabel: 'Scale campaigns',
    href: '#amplifier',
  },
  {
    tagline: 'Market Domination Layer',
    title: 'Empire Mode',
    value: 'Own your category with multi-creator feed saturation.',
    forLabel: 'For category leaders',
    ctaLabel: 'Dominate the feed',
    href: '#empire',
  },
]

/** Decorative SVG: soft arc + dot pattern for execution cards (pure SVG, no img). */
function CardDecoration({ accent }: { accent: (typeof CARD_ACCENTS)[number] }) {
  const isAmber = accent === 'amber'
  const stroke = isAmber ? 'rgba(251, 191, 36, 0.25)' : 'rgba(52, 211, 153, 0.25)'
  const fill = isAmber ? 'rgba(251, 191, 36, 0.06)' : 'rgba(52, 211, 153, 0.06)'
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-2/5 max-w-[220px] opacity-80"
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Soft arc */}
      <path
        d="M 0 40 Q 120 20 200 80 T 180 280"
        stroke={stroke}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Second arc */}
      <path
        d="M 40 0 Q 160 60 200 140"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Small circles */}
      <circle cx="160" cy="60" r="3" fill={fill} />
      <circle cx="180" cy="120" r="2" fill={fill} />
      <circle cx="140" cy="180" r="2.5" fill={fill} />
      {/* System node: flow → connection → execution point */}
      <circle cx="180" cy="40" r="6" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="180" cy="40" r="2" fill={stroke} />
    </svg>
  )
}

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export function ServicesOverviewSection() {
  return (
    <section id="system-overview" className="scroll-mt-24">
      <motion.div
        className="grid gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Micro headline */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 md:text-sm">
            The La Neta System
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
            One platform. Five execution modes.
          </h2>
        </div>

        {/* Platform card — full width, horizontal, authority */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div
            aria-hidden
            className="absolute inset-0"
          >
            <img
              src={theFactoryImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-amber-500/80 via-emerald-400/60 to-amber-500/80"
          />
          <div className="relative z-10 flex flex-col justify-end px-6 py-8 md:aspect-[21/9] md:min-h-0 md:px-10 md:py-10 lg:px-12">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
            />
            <div className="relative text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 md:text-sm">
                Platform / Operating System
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                The Ad Factory
              </h3>
              <p className="mt-2 text-base text-slate-300 md:text-lg">
                Your content operating system
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-400 md:gap-3">
                <span>Strategy</span>
                <span className="text-slate-500" aria-hidden>→</span>
                <span>Production</span>
                <span className="text-slate-500" aria-hidden>→</span>
                <span>Distribution</span>
                <span className="text-slate-500" aria-hidden>→</span>
                <span className="font-semibold text-amber-400">Scale</span>
              </p>
              <a
                href="#service-presentation"
                onClick={(e) => scrollToSection(e, '#service-presentation')}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500/20 px-6 py-3 text-sm font-semibold text-amber-300 ring-1 ring-amber-400/30 transition-colors hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Explore platform
                <span className="text-lg leading-none" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Execution cards — 2x2 grid, compact */}
        <div className="grid gap-6 md:grid-cols-2">
          {EXECUTION_SERVICES.map((service, index) => {
            const accent = CARD_ACCENTS[index]
            const isAmber = accent === 'amber'
            return (
            <motion.a
              key={service.href + service.title}
              href={service.href}
              onClick={(e) => scrollToSection(e, service.href)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/80 p-6 text-left ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] hover:ring-amber-400/30 hover:ring-emerald-400/20 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              {/* 1. Technical grid texture — estructura tipo dashboard */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px',
                }}
              />
              {/* 2. Directional light sweep — profundidad, luz implícita */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(600px circle at 85% 20%, rgba(255,255,255,0.08), transparent 60%)',
                }}
              />
              {/* Bonus: noise texture — elimina flat digital */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              {/* CSS-only gradient blob — hover: micro-energy */}
              <div
                aria-hidden
                className={`absolute -bottom-12 -left-12 h-36 w-36 rounded-full blur-2xl opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50 ${
                  isAmber ? 'bg-amber-500/30' : 'bg-emerald-500/30'
                }`}
              />
              {/* 5. Edge glow — módulo activándose al hover */}
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isAmber
                    ? 'bg-gradient-to-r from-transparent via-amber-400/60 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent'
                }`}
              />
              {/* Left edge accent (CSS gradient) */}
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
              />
              <CardDecoration accent={accent} />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <p className="relative text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-sm">
                {service.tagline}
              </p>
              <h4 className="relative mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                {service.title}
              </h4>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
                {service.value}
              </p>
              <p className="relative mt-3 text-xs text-white/60">
                {service.forLabel}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors group-hover:text-amber-200">
                {service.ctaLabel}
                <span className="text-lg leading-none transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </span>
            </motion.a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
