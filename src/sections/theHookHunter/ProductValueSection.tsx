import { motion } from 'motion/react'
import { TbMapPin, TbTrendingUp, TbWorld } from 'react-icons/tb'

const BENEFITS = [
  {
    icon: TbMapPin,
    title: 'Your place on the digital map',
    description:
      'In this era, visibility is territory. The Hook Hunter finds the angles that put your brand on the map—discoverable, relevant, and impossible to scroll past. Hooks that convert turn views into followers and followers into customers.',
    accent: 'var(--laneta-orange)',
  },
  {
    icon: TbTrendingUp,
    title: 'Tendenzia — set the trend',
    description:
      "Don't follow the feed; lead it. We identify what's resonating before it peaks and craft content that positions your brand as the source. The Amplifier and Empire Mode scale that signal so your voice dominates the conversation.",
    accent: '#f59e0b',
  },
  {
    icon: TbWorld,
    title: 'Globalization, one hook at a time',
    description:
      'UGC that travels. Content built on high-performing hooks transcends borders—same impact, multiple markets. Reach global audiences without losing authenticity. Your message, amplified across languages and cultures.',
    accent: '#10b981',
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
      <div className="mb-12 text-center md:mb-16">
        <p
          className="mb-4 inline-block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider text-amber-700"
          style={{ backgroundColor: 'rgba(251, 191, 36, 0.22)' }}
        >
          What The Hook Hunter delivers
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          What this service means for your brand
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-700 md:text-xl">
          Utility. Positioning. Results. Hooks that convert and content that scales—locally and globally.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {BENEFITS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-lg ring-1 ring-slate-200/80"
          >
            <div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-15 blur-2xl"
              style={{ backgroundColor: item.accent }}
            />
            <div
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${item.accent}22` }}
            >
              <item.icon
                className="size-7"
                style={{ color: item.accent }}
                aria-hidden
              />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900 md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-amber-300 bg-amber-50 px-8 py-6 text-center md:mt-16 md:px-12 md:py-8">
        <p className="text-lg font-bold text-slate-900 md:text-xl">
          People buy from other people.{' '}
          <span className="text-amber-700">
            The Hook Hunter turns your audience into believers.
          </span>
        </p>
      </div>
    </motion.section>
  )
}
