import { motion } from 'motion/react'

const TALENTS = [
  {
    name: 'Maya',
    category: 'Fashion & Style',
    categoryEn: 'Fashion',
    media: 'image',
    src: '/assets/images/Maya_Influencer_Moda.jpg',
    accent: '#f59e0b',
    unique: 'Authentic fashion voice that converts browsers into buyers.',
    impact: '2.4x higher engagement vs. generic fashion UGC.',
    differentiator: 'Pre-vetted for brand alignment. No casting headaches.',
    metrics: ['+127% CTR', '2.1x saves', '89% brand lift'],
  },
  {
    name: 'Victoria',
    category: 'Food & Bakery',
    categoryEn: 'Food & Beverage',
    media: 'image',
    src: '/assets/images/Victoria_Influencer_Food.jpg',
    accent: '#10b981',
    unique: 'Content that makes people hungry—and click.',
    impact: 'Hook-first approach: first 3 seconds decide the sale.',
    differentiator: 'Food that feels real, not staged. Higher trust.',
    metrics: ['+156% watch time', '3.2x shares', '67% conversion lift'],
  },
  {
    name: 'Jezael',
    category: 'Tech & Gaming',
    categoryEn: 'Geek',
    media: 'image',
    src: '/assets/images/jezael_influencer_geek.jpg',
    accent: '#8b5cf6',
    unique: 'Speaks the language of tech and gaming audiences.',
    impact: 'Credibility that generic influencers can\'t fake.',
    differentiator: 'Community-native. Your brand, their authenticity.',
    metrics: ['+94% engagement', '1.8x add-to-cart', '72% trust score'],
  },
  {
    name: 'Andrew',
    category: 'Lifestyle & Design',
    categoryEn: 'Lifestyle & Design',
    media: 'image',
    src: '/assets/images/flip_influencer_lifestyle.jpg',
    accent: '#ec4899',
    unique: 'Aesthetic that elevates your brand, not just your product.',
    impact: 'Lifestyle content that sells the dream, not just the item.',
    differentiator: 'Design-forward. Premium feel. Scroll-stopping.',
    metrics: ['+112% saves', '2.5x reach', '84% brand recall'],
  },
]

export function UGCTalentsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <div className="mb-12 text-center md:mb-16">
        <p
          className="mb-4 inline-block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider text-amber-200/95"
          style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
        >
          Meet our UGC talents
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
          Talents that sync with your style
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-300 md:text-xl">
          You have your identity. Our talents create synergy with your brand
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TALENTS.map((talent, i) => (
          <motion.div
            key={talent.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 ring-1 ring-white/5"
          >
            <div className="relative aspect-[3/4] shrink-0 overflow-hidden">
              {talent.media === 'video' && talent.src ? (
                <video
                  src={talent.src}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  aria-hidden
                />
              ) : (
                <img
                  src={talent.src}
                  alt={`${talent.name} — ${talent.categoryEn}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: `${talent.accent}cc` }}
                >
                  {talent.category}
                </span>
                <p className="mt-2 text-lg font-bold text-white md:text-xl">{talent.name}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm font-bold md:text-base" style={{ color: talent.accent }}>
                {talent.unique}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400 md:text-sm">{talent.impact}</p>
              <p className="mt-2 text-xs italic text-slate-500 md:text-sm">{talent.differentiator}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {talent.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-lg px-2.5 py-1 text-xs font-bold"
                    style={{ backgroundColor: `${talent.accent}25`, color: talent.accent }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-8 py-8 text-center backdrop-blur-sm md:mt-16 md:px-12 md:py-10">
        <p className="text-xl font-bold text-white md:text-2xl">
          Your brand deserves to grow.{' '}
          <span className="text-amber-300">Our talents are ready to take it there.</span>
        </p>
        <p className="mt-2 text-base font-medium text-slate-300 md:text-lg">
          You have your identity. We create the synergy.
        </p>
      </div>
    </motion.section>
  )
}
