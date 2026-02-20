import { motion } from 'motion/react'
import { FloatingCard } from '../../components/FloatingCard'
import {
  TbRocket,
  TbChartLine,
  TbStars,
  TbWorld,
} from 'react-icons/tb'

const BENEFITS = [
  {
    icon: TbRocket,
    title: 'Integrate into your business model',
    description:
      'Drop AI-generated talent into your existing workflow. No new teams, no long onboarding. The Glitch slots into your strategy, content calendar, and distribution channels—so you can scale creative output without scaling headcount.',
    accent: 'var(--laneta-blue)',
  },
  {
    icon: TbChartLine,
    title: 'Set trends, don’t follow them',
    description:
      'Your brand becomes the source of what’s next. AI lets you test hundreds of angles, hooks, and formats in weeks—not months. Discover what resonates before competitors copy, and position your brand as the one driving the conversation.',
    accent: 'var(--laneta-pink)',
  },
  {
    icon: TbStars,
    title: 'Results that move the needle',
    description:
      'Higher engagement, stronger recall, faster iteration. Brands using The Glitch see measurable lifts in performance metrics and audience connection. Every asset is optimized for your audience—because the engine learns what works.',
    accent: 'var(--laneta-purple)',
  },
  {
    icon: TbWorld,
    title: 'Unlock a new horizon',
    description:
      'Go beyond traditional creative limits. Infinite variants. 24/7 production. New markets and audiences without the usual friction. The Glitch doesn’t just improve what you do—it unlocks what was previously impossible.',
    accent: 'var(--laneta-orange)',
  },
]

export function ProductValueSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <div className="mb-10 text-center md:mb-12">
        <p
          className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--laneta-blue)]"
          style={{ backgroundColor: 'rgba(121, 188, 247, 0.15)' }}
        >
          What The Glitch delivers
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl lg:text-4xl">
          Your brand, amplified by AI
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 md:text-lg">
          Implement The Glitch and transform how you create, test, and scale. Here’s what changes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {BENEFITS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <FloatingCard variant="light" withAccentBar={false} className="h-full">
              <div className="flex gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${item.accent}18` }}
                >
                  <item.icon
                    className="size-6"
                    style={{ color: item.accent }}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 border-t border-slate-200 pt-10 text-center">
        <p className="text-lg font-medium text-slate-700 md:text-xl">
          AI never rests.{' '}
          <span className="text-[var(--laneta-blue)]">
            Your brand should never stop testing.
          </span>
        </p>
      </div>
    </motion.section>
  )
}
