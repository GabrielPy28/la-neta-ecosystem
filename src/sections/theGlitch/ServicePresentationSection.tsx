import { motion } from 'motion/react'

const HERO_IMAGE = 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the_glitch.png'

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
        {/* Hero — en móvil más alto, imagen que rellena, título abajo legible; en desktop igual que antes */}
        <div className="group relative min-h-[max(70vh,380px)] overflow-hidden rounded-2xl bg-slate-900 md:min-h-0">
          <img
            src={HERO_IMAGE}
            alt="The Glitch — AI-generated influencers that speak your brand"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:relative md:aspect-video md:h-auto md:object-contain"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-b md:from-black/40 md:via-transparent md:to-transparent"
          />
          <div className="absolute inset-0 flex items-end p-4 pb-6 md:p-8">
            <div className="w-full rounded-xl bg-black/50 px-5 py-4 backdrop-blur-md ring-1 ring-white/10 md:max-w-2xl md:px-8 md:py-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90 md:text-xs">
                AI-driven creator platform
              </p>
              <h1 className="mt-1 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:mt-1 md:text-4xl lg:text-5xl">
                The Glitch
              </h1>
              <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg md:text-xl">
                AI never rests. An endless testing engine to discover which messages sell best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
