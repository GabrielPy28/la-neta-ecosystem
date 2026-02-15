import { motion } from 'motion/react'

const PACKS = [
  {
    id: 'hook-hunter',
    name: 'The Hook Hunter',
    tagline: 'Your entry point. One talent. Hooks that convert.',
    description: null,
    outcome: 'Validate winning hooks fast.',
    accent: '#f59e0b',
    assets: 24,
    production: ['1 UGC Talent', '2 videos of 15 seconds', '6 clips of 10 seconds', '3 video formats / 24 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
    mostChosen: false,
    scaleLevel: 1,
  },
  {
    id: 'amplifier',
    name: 'The Amplifier',
    tagline: 'We transform 3 signals into 66 echoes.',
    description:
      "We don't shoot in the dark; we surround your audience with UGC content that turns doubt into absolute confidence.",
    outcome: 'Dominate your niche feed.',
    accent: '#10b981',
    assets: 66,
    production: ['3 UGC Talents', '6 videos of 15 seconds', '16 clips of 10 seconds', '3 video formats / 66 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
    mostChosen: true,
    scaleLevel: 2,
  },
  {
    id: 'empire',
    name: 'Empire Mode',
    tagline: 'Strategic saturation.',
    description:
      'If your customer sees you everywhere with different faces, your brand becomes unquestionable.',
    outcome: 'Own your category visibility.',
    accent: '#8b5cf6',
    assets: 120,
    production: ['5 UGC Talents', '10 videos of 15 seconds', '30 clips of 10 seconds', '3 video formats / 120 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
    mostChosen: false,
    scaleLevel: 3,
  },
]

export function PackIncludesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[1610px] px-4 md:px-6"
    >
      <div className="mb-12 text-center md:mb-16">
        <p
          className="mb-4 inline-block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider text-amber-200/95"
          style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
        >
          Our packs
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
          Choose your scale
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-300 md:text-xl">
          From one talent to five. From 24 assets to 120. Same quality. Same delivery. Same hooks that convert.
        </p>
      </div>

      <div className="grid items-end gap-8 lg:grid-cols-3">
        {PACKS.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }}
            className={`relative flex flex-col overflow-visible rounded-2xl border bg-slate-900/60 backdrop-blur-sm ${
              pack.scaleLevel === 1 ? 'pt-6' : pack.scaleLevel === 2 ? 'pt-8' : 'pt-10'
            } ${pack.mostChosen ? 'border-white/25 ring-1 ring-white/15' : 'border-white/10'}`}
            style={{
              boxShadow: pack.mostChosen ? `0 20px 60px ${pack.accent}25` : undefined,
            }}
          >
            {pack.mostChosen && (
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <span className="rounded-full bg-white px-4 py-1 text-xs font-bold text-black shadow-lg">
                  Most chosen
                </span>
              </div>
            )}
            <div
              className="absolute left-0 right-0 top-0 z-0 h-1"
              style={{ backgroundColor: pack.accent }}
              aria-hidden
            />

            <div className="flex flex-1 flex-col p-6 md:p-8">
              {/* Progression visual */}
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500">Scale level {pack.scaleLevel}</p>
              <div className="mt-4 flex gap-1" aria-hidden>
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full ${idx <= pack.scaleLevel ? 'bg-white/60' : 'bg-white/10'}`}
                  />
                ))}
              </div>

              {/* Hero metric */}
              <p className="mt-6 text-5xl font-black text-white md:text-6xl">{pack.assets}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Total assets</p>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: pack.accent }}>
                {pack.name}
              </h3>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">{pack.tagline}</p>
              {pack.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">{pack.description}</p>
              )}

              {/* Outcome layer */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Expected outcome</p>
                <p className="mt-1 font-semibold text-white">{pack.outcome}</p>
              </div>

              {/* Features grouped */}
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Production</p>
                  <ul className="mt-2 space-y-1.5">
                    {pack.production.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: pack.accent }} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Delivery</p>
                  <ul className="mt-2 space-y-1.5">
                    {pack.delivery.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: pack.accent }} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Usage rights</p>
                  <ul className="mt-2 space-y-1.5">
                    {pack.rights.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: pack.accent }} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-slate-400 md:mt-12">
        Same strategy system across all plans — only scale changes.
      </p>
    </motion.section>
  )
}
