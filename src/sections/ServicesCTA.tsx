import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const SECTION_ID = 'the-ad-factory'

/** Config para cada CTA de servicio **/
type ServiceCTA = {
  pageUrl: string
  title: string
  tagline: string
  description: string
  ctaLabel: string
  imageSrc: string
  imagePosition?: string
  /** Optional badge (e.g. "Our backbone") */
  badge?: string
}

/** The Ad Factory as core system (hero block). */
const AD_FACTORY_PLATFORM = {
  pageUrl: '/the-ad-factory',
  title: 'The Ad Factory',
  tagline: 'From brief to feed.',
  badge: 'Core System' as const,
  description:
    'A unified content production system designed to generate, test, and scale advertising continuously. Strategy, talent, production, and distribution operate under one workflow — giving brands speed, control, and predictable output.',
  ctaLabel: 'Explore the platform',
  imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Ad-Factory.jpg',
}

/** System capability layers (B2B framing). Descriptions normalized to 167 characters. Links to Services page sections. */
const CAPABILITY_LAYERS: ServiceCTA[] = [
  {
    pageUrl: '/the-ad-factory#the-glitch',
    title: 'The Glitch',
    tagline: 'Powered by The Glitch',
    badge: 'Capability',
    description:
      'AI-generated talent and content production designed for rapid iteration and scalable output. Launch campaigns faster, test more variations and maintain brand consistency without production bottlenecks.',
    ctaLabel: 'Activate AI Execution',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the-glitch.jpg',
    imagePosition: 'center 35%',
  },
  {
    pageUrl: '/the-ad-factory#the-hook-hunter',
    title: 'The Hook Hunter',
    tagline: 'Powered by The Hook Hunter',
    badge: 'Capability',
    description:
      'Performance-driven creator production built to identify winning hooks and scale them across multiple talents. Structured testing replaces guesswork—turning creators into a predictable acquisition channel.',
    ctaLabel: 'Activate Creator Execution',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/ugc_creator.jpg',
  },
  {
    pageUrl: '/the-ad-factory#amplifier',
    title: 'The Amplifier',
    tagline: 'Powered by The Hook Hunter',
    badge: 'Capability',
    description:
      'Scale winning hooks across three vetted UGC creators and 66 production-ready assets. Structured for feed dominance: validate once, multiply output and maintain consistency without diluting performance.',
    ctaLabel: 'Explore The Amplifier',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the_amplifier.jpg',
  },
  {
    pageUrl: '/the-ad-factory#empire',
    title: 'The Empire Mode',
    tagline: 'Powered by The Hook Hunter',
    badge: 'Capability',
    description:
      'Own your category with five talents UGC creators and 120 assets in one production cycle. Maximum coverage, one brief, one timeline — turn creators into a predictable channel that scales with your media spend.',
    ctaLabel: 'Explore Empire Mode',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the_empire_mode.jpg',
  },
]

type PlatformConfig = typeof AD_FACTORY_PLATFORM

function PlatformBlock({ platform, embedded }: { platform: PlatformConfig; embedded?: boolean }) {
  const imageBlock = (
    <div className="group relative aspect-[21/9] overflow-hidden rounded-xl bg-slate-100 md:aspect-[3/1]">
      <img
        src={platform.imageSrc}
        alt=""
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
      />
    </div>
  )
  const textBlock = (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--laneta-purple)]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--laneta-pink)]/20 blur-3xl"
      />
      <div className="relative">
        {'badge' in platform && platform.badge && (
          <p className="mb-2 inline-flex w-fit rounded-full border border-[var(--laneta-purple)]/50 bg-[var(--laneta-purple)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--laneta-purple)]">
            {platform.badge}
          </p>
        )}
        <p className="mb-3 inline-flex rounded-full bg-[var(--laneta-purple)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--laneta-purple)]">
          {platform.tagline}
        </p>
        <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
          {platform.title}
        </h3>
        <p className="mb-6 text-slate-600 text-sm leading-relaxed md:mb-8 md:text-base">
          {platform.description}
        </p>
        <a
          href={platform.pageUrl}
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--laneta-pink)] hover:shadow-[var(--laneta-pink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--laneta-pink)] focus:ring-offset-2"
        >
          {platform.ctaLabel}
          <span className="text-lg leading-none" aria-hidden>→</span>
        </a>
      </div>
    </div>
  )

  if (embedded) {
    return (
      <motion.div
        className="group relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 min-h-[380px] sm:min-h-[440px] md:aspect-[21/9] md:min-h-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0">
          <img
            src={platform.imageSrc}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_0%,black/40_100%)]"
        />
        <div className="relative flex h-full min-h-[380px] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[440px] sm:px-10 sm:py-16 md:min-h-0 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {'badge' in platform && platform.badge && (
              <span className="inline-flex rounded-full border border-white/4 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-sm">
                {platform.badge}
              </span>
            )}
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md sm:text-base">
              {platform.tagline}
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-4xl md:text-5xl lg:mt-6 lg:text-6xl">
            {platform.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-lg md:max-w-3xl md:text-xl md:leading-snug">
            {platform.description}
          </p>
          <a
            href={platform.pageUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(102,65,237,0.5)] transition-all hover:scale-[1.03] hover:bg-[var(--laneta-pink)] hover:shadow-[0_6px_28px_rgba(255,71,172,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/30 sm:mt-10 sm:px-10 sm:py-5 sm:text-lg"
          >
            {platform.ctaLabel}
            <span className="text-xl leading-none" aria-hidden>→</span>
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-200/50">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--laneta-purple)] via-[var(--laneta-pink)] to-[var(--laneta-blue)]"
        />
        {imageBlock}
        <div className="relative flex flex-1 flex-col overflow-hidden p-6 md:p-8">
          {textBlock}
        </div>
      </div>
    </motion.div>
  )
}

function ServiceCard({ service, index }: { service: ServiceCTA; index: number }) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-200/50">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--laneta-purple)] via-[var(--laneta-pink)] to-[var(--laneta-blue)]"
        />
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={service.imageSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          />
        </div>
        <div className="relative flex flex-1 flex-col overflow-hidden p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--laneta-purple)]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--laneta-pink)]/20 blur-3xl"
          />
          <div className="relative">
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              {service.title}
            </h3>
            <p className="mb-6 flex-1 text-slate-600 text-sm leading-relaxed md:mb-8 md:text-base">
              {service.description}
            </p>
            <Link
              to={service.pageUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--laneta-pink)] hover:shadow-[var(--laneta-pink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--laneta-pink)] focus:ring-offset-2"
            >
              {service.ctaLabel}
              <span className="text-lg leading-none" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesCTA() {
  return (
    <section
      id={SECTION_ID}
      className="relative -mt-px overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1680px] px-6 md:px-8">
        {/* One card = entire The Ad Factory section (header + hero + pipeline + capabilities) */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[var(--laneta-purple)]/[0.06] via-white via-40% to-[var(--laneta-pink)]/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-[var(--laneta-purple)] via-[var(--laneta-pink)] to-[var(--laneta-blue)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[var(--laneta-purple)]/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--laneta-pink)]/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[var(--laneta-blue)]/10 blur-3xl"
          />
          <div className="relative p-6 md:p-10 lg:p-12">
            <motion.header
              className="mb-8 text-center md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-xs font-semibold tracking-[0.25em] uppercase text-[var(--laneta-blue)] md:text-sm">
                Your content operating system
              </p>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                A centralized system to produce, test, and scale performance content continuously.
              </p>
            </motion.header>

            {/* Core system: hero image + copy + CTA (no nested card) */}
            <div className="mb-10 md:mb-14">
              <PlatformBlock platform={AD_FACTORY_PLATFORM} embedded />
            </div>

            {/* System capabilities: 4 layers inside the same card */}
            <div className="border-t border-slate-200/80 pt-10 md:pt-14">
              <h3 className="mb-2 text-center text-lg font-bold tracking-tight text-slate-800 md:text-xl">
                System capabilities inside The Ad Factory
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-slate-500 md:mb-10">
                Four operational layers that extend the core system. You&apos;re not buying separate services, but a single
                framework with modular capabilities.
              </p>
              <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {CAPABILITY_LAYERS.map((service, index) => (
                  <ServiceCard key={service.pageUrl} service={service} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
