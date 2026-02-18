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

/** The Ad Factory as platform (not a card). */
const AD_FACTORY_PLATFORM = {
  pageUrl: '/the-ad-factory',
  title: 'The Ad Factory',
  tagline: 'From brief to feed.',
  description:
    "Strategy, talent, production, and distribution under one roof. One point of control. You don't hire creators or buy one-off ads. You run a system built to generate, test, and scale content with clear ownership and timelines.",
  ctaLabel: 'Explore the platform',
  imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Ad-Factory.jpg',
}

/** Execution modes inside The Ad Factory (same card design, B2B framing). */
const EXECUTION_MODES: ServiceCTA[] = [
  {
    pageUrl: '/the-glitch',
    title: 'AI Execution Layer',
    tagline: 'Powered by The Glitch',
    description:
      "Fully AI-generated talent with strong narrative and content around your brand. Creators that embody what you sell, with authentic storytelling and on-brand presence. Designed to connect with your audience and scale your message. Your ideas, executed by AI.",
    ctaLabel: 'Activate AI Execution',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the-glitch.jpg',
    imagePosition: 'center 35%',
  },
  {
    pageUrl: '/the-hook-hunter',
    title: 'Creator Execution Layer',
    tagline: 'Powered by The Hook Hunter',
    description:
      "UGC creators and hooks that convert. Choose one talent, scale to three with The Amplifier, or own the feed with five in Empire Mode. We find and craft the angles that grab attention and drive action. Your ideas, executed by real people at scale.",
    ctaLabel: 'Activate Creator Execution',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/ugc_creator.jpg',
  },
]

type PlatformConfig = typeof AD_FACTORY_PLATFORM

function PlatformBlock({ platform }: { platform: PlatformConfig }) {
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
        <div className="relative aspect-[21/9] overflow-hidden bg-slate-100 md:aspect-[3/1]">
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
            {service.badge && (
              <p className="mb-2 inline-flex w-fit rounded-full border border-[var(--laneta-pink)]/50 bg-[var(--laneta-pink)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--laneta-pink)]">
                {service.badge}
              </p>
            )}
            <p className="mb-3 inline-flex rounded-full bg-[var(--laneta-purple)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--laneta-purple)]">
              {service.tagline}
            </p>
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              {service.title}
            </h3>
            <p className="mb-6 flex-1 text-slate-600 text-sm leading-relaxed md:mb-8 md:text-base">
              {service.description}
            </p>
            <a
              href={service.pageUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--laneta-pink)] hover:shadow-[var(--laneta-pink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--laneta-pink)] focus:ring-offset-2"
            >
              {service.ctaLabel}
              <span className="text-lg leading-none" aria-hidden>→</span>
            </a>
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
        <motion.header
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-[var(--laneta-blue)]">
            Your content operating system
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl lg:text-5xl">
            <span className="text-[var(--laneta-pink)]">The Ad Factory</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            One pipeline. Multiple execution modes. Activate AI talent or your creator network through the same system.
          </p>
        </motion.header>

        {/* Platform block: The Ad Factory (not a card choice) */}
        <div className="mb-10 md:mb-14">
          <PlatformBlock platform={AD_FACTORY_PLATFORM} />
        </div>

        {/* Pipeline visualization */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600 md:mb-14 md:gap-4 md:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span>Brief</span>
          <span className="text-slate-400" aria-hidden>→</span>
          <span>Strategy</span>
          <span className="text-slate-400" aria-hidden>→</span>
          <span>Production</span>
          <span className="text-slate-400" aria-hidden>→</span>
          <span>Distribution</span>
          <span className="text-slate-400" aria-hidden>→</span>
          <span className="text-[var(--laneta-purple)]">Scale</span>
        </motion.div>

        {/* Execution Modes: 2 cards (same design as before) */}
        <div className="mb-16 md:mb-20">
          <h3 className="mb-6 text-center text-lg font-bold text-slate-700 md:text-xl">
            Execution modes
          </h3>
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {EXECUTION_MODES.map((service, index) => (
              <ServiceCard key={service.pageUrl} service={service} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
