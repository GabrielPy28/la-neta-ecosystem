import { motion } from 'motion/react'

const HERO_IMAGE = '/assets/images/the_glitch.png'

export function ServicePresentationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--laneta-blue)]/10 blur-[100px]"
      />

      <div className="relative">
        {/* Hero — image as protagonist, floating title */}
        <div className="group relative overflow-hidden rounded-2xl bg-slate-900">
          <img
            src={HERO_IMAGE}
            alt="The Glitch — AI-generated influencers that speak your brand"
            className="aspect-video w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"
          />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div className="w-full rounded-xl bg-black/50 px-6 py-5 backdrop-blur-md ring-1 ring-white/10 md:max-w-2xl md:px-8 md:py-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                AI-driven creator platform
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl">
                The Glitch
              </h1>
              <p className="mt-2 text-lg leading-relaxed text-white md:text-xl">
                AI never rests. An endless testing engine to discover which messages sell best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
