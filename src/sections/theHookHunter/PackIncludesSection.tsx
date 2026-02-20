import { motion } from 'motion/react'

type ExecutionStrategy = {
  id: string
  name: string
  strategyHeadline: string
  forWho: string
  description: string
  outcome: string
  accent: string
  production: string[]
  delivery: string[]
  rights: string[]
  assets: number
}

const STRATEGIES: ExecutionStrategy[] = [
  {
    id: 'hook-hunter',
    name: 'The Hook Hunter',
    strategyHeadline: 'Validate winning hooks with one voice.',
    forWho: 'Brands and growth teams testing creative direction.',
    description:
      'A single UGC talent executes your hooks so you can prove what resonates before scaling. Built for teams that need fast validation, clear performance signals, and a lean footprint—one face, one narrative, 24 assets ready for feed dominance.',
    outcome: 'Winning angles validated. Clear signal on what to scale.',
    accent: '#f59e0b',
    assets: 24,
    production: ['1 UGC Talent', '2 videos of 15 seconds', '6 clips of 10 seconds', '3 video formats / 24 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
  },
  {
    id: 'amplifier',
    name: 'The Amplifier',
    strategyHeadline: 'Surround your audience with consistent proof.',
    forWho: 'Brands ready to dominate a niche or launch.',
    description:
      'Three UGC talents carry your message so your audience sees multiple faces, one brand. We don’t shoot in the dark—we turn validated hooks into 66 assets that build repeat exposure and trust. Ideal for product launches, category entry, or campaigns where presence matters.',
    outcome: 'Niche feed dominance. Doubt turned into confidence.',
    accent: '#10b981',
    assets: 66,
    production: ['3 UGC Talents', '6 videos of 15 seconds', '16 clips of 10 seconds', '3 video formats / 66 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
  },
  {
    id: 'empire',
    name: 'Empire Mode',
    strategyHeadline: 'Own category visibility. Strategic saturation.',
    forWho: 'Brands that need to own the feed and the conversation.',
    description:
      'Five UGC talents. One hundred twenty assets. If your customer sees you everywhere with different, authentic faces, your brand becomes unquestionable. Designed for market leaders and ambitious brands that want to own their category—not just participate.',
    outcome: 'Category ownership. Unquestionable brand presence.',
    accent: '#8b5cf6',
    assets: 120,
    production: ['5 UGC Talents', '10 videos of 15 seconds', '30 clips of 10 seconds', '3 video formats / 120 total contents'],
    delivery: ['Delivery within 21 business days'],
    rights: ['1 year of image use'],
  },
]

function StrategyBlock({ strategy, index }: { strategy: ExecutionStrategy; index: number }) {
  return (
    <motion.article
      id={strategy.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl ring-1 ring-white/10 scroll-mt-24"
    >
      <div
        className="absolute left-0 right-0 top-0 z-0 h-1"
        style={{ backgroundColor: strategy.accent }}
        aria-hidden
      />
      <div className="relative p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Strategy narrative — B2B focused */}
          <div className="min-w-0 flex-1">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] md:text-sm"
              style={{ color: strategy.accent }}
            >
              {strategy.name}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {strategy.strategyHeadline}
            </h3>
            <p className="mt-3 text-sm font-medium text-slate-400 md:text-base">
              {strategy.forWho}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {strategy.description}
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Strategic outcome
              </p>
              <p className="mt-1 font-semibold text-white">{strategy.outcome}</p>
            </div>
          </div>

          {/* What this strategy delivers — factual, not “pack” */}
          <div className="shrink-0 lg:w-[320px]">
            <div className="rounded-xl border border-white/10 bg-slate-800/50 px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What this strategy delivers
              </p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {strategy.assets} <span className="text-sm font-medium text-slate-400">assets</span>
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Production
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {strategy.production.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: strategy.accent }}
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Delivery & rights
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {strategy.delivery.concat(strategy.rights).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: strategy.accent }}
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

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
          Execution strategies
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
          Three strategies. Each with a defined role.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-300 md:text-xl">
          Each variant is built around a specific B2B objective—validation, dominance, or category ownership. Choose the strategy that matches where you are.
        </p>
      </div>

      <div className="space-y-10 md:space-y-12">
        {STRATEGIES.map((strategy, i) => (
          <StrategyBlock key={strategy.id} strategy={strategy} index={i} />
        ))}
      </div>
    </motion.section>
  )
}
