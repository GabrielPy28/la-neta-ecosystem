import { motion } from 'motion/react'
import { FloatingCard } from '../../components/FloatingCard'

const IMAGE_SRC = 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/blank_slate.jpg'

const PACK_ITEMS = [
  {
    title: '1 AI Avatar',
    description:
      'Your custom AI-generated spokesperson. Trained to match your brand voice, tone, and style. One consistent face across all content—no actors, no scheduling conflicts.',
    accent: 'var(--laneta-blue)',
  },
  {
    title: '2 videos of 15 seconds',
    description:
      'Two full-length hero videos for campaigns, ads, or landing pages. Scripted, produced, and ready to publish. Perfect for feed ads, website headers, or social hero content.',
    accent: 'var(--laneta-pink)',
  },
  {
    title: '6 clips of 10 seconds',
    description:
      'Short, punchy clips for stories, reels, and quick hooks. Ideal for product demos, UGC-style content, and high-frequency testing. Each clip is optimized for scroll-stopping impact.',
    accent: 'var(--laneta-purple)',
  },
  {
    title: '3 video formats / 24 total contents',
    description:
      'Your content delivered in three formats—vertical (9:16), square (1:1), and horizontal (16:9). That\'s 24 assets in total, ready for Meta, TikTok, YouTube, and more. One production, full platform coverage.',
    accent: 'var(--laneta-orange)',
  },
  {
    title: 'Delivery within 21 business days',
    description:
      'From brief to final delivery in three weeks. No endless revisions or back-and-forth—we work in sprints. You get a clear timeline and deliverables on schedule.',
    accent: 'var(--laneta-blue)',
  },
  {
    title: '1 year of image use',
    description:
      'Full commercial license for 12 months. Use your AI avatar and content across paid ads, owned channels, and campaigns. No usage caps or additional fees during the term.',
    accent: 'var(--laneta-pink)',
  },
]

export function PackIncludesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <div className="mb-10 text-center md:mb-12">
        <p
          className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90"
          style={{ backgroundColor: 'rgba(121, 188, 247, 0.25)' }}
        >
          The complete pack
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          Everything included.
          <span className="block text-[var(--laneta-blue)] md:inline md:ml-2">Nothing hidden.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300 md:text-lg">
          One pack, 24 assets, 21 days. Here&apos;s exactly what you get.
        </p>
      </div>

      <FloatingCard withAccentBar={false} className="overflow-hidden [&>div]:p-0">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <div className="relative flex aspect-[4/3] items-end overflow-hidden lg:aspect-auto lg:min-h-[480px]">
            <img
              src={IMAGE_SRC}
              alt="Your blank slate — ready for AI-generated content"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
            />
            <div className="relative w-full p-6 md:p-8">
              <p className="text-xl font-semibold text-white md:text-2xl">
                Your blank slate.
              </p>
              <p className="mt-1 text-white/90">
                We fill it with AI-generated content that scales.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
            {PACK_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-slate-200/60 py-5 first:pt-0 last:border-0 last:pb-0"
              >
                <h3
                  className="text-base font-bold md:text-lg"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FloatingCard>
    </motion.section>
  )
}
