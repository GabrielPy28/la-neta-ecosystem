import { motion } from 'motion/react'
import { FloatingCard } from '../../components/FloatingCard'

const AI_VIDEOS = [
  {
    src: '/assets/videos/IA_Agent.mp4',
    label: 'AI Agent',
    title: 'Conversational AI that sells',
    description:
      'AI-generated spokespeople that deliver your message with natural expression and brand voice. No casting, no shoots—scale across markets and languages in days.',
    metrics: [
      { value: '10x', label: 'Faster production' },
      { value: '90%', label: 'Cost reduction' },
      { value: '24/7', label: 'Always on' },
    ],
    accent: 'var(--laneta-blue)',
  },
  {
    src: '/assets/videos/umboxing.mp4',
    label: 'Unboxing',
    title: 'Product content at scale',
    description:
      'Unboxing, demos, and product showcases—generated on demand. Test multiple angles and formats without a single physical shoot or reshoot.',
    metrics: [
      { value: '∞', label: 'Infinite variants' },
      { value: '0', label: 'Reshoots needed' },
      { value: 'Instant', label: 'Localization' },
    ],
    accent: 'var(--laneta-pink)',
  },
  {
    src: '/assets/videos/the_glitch.mp4',
    label: 'The Glitch',
    title: 'Brand-native AI talent',
    description:
      'Fully customizable AI personas that embody your brand. Consistent across campaigns, optimized for performance, and ready to connect with your audience.',
    metrics: [
      { value: '100%', label: 'Brand-aligned' },
      { value: '2x', label: 'Engagement lift' },
      { value: 'Global', label: 'Reach' },
    ],
    accent: 'var(--laneta-purple)',
  },
]

export function AIAgentVideosSection() {
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
          AI in action
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          Our AI Agents
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300 md:text-lg">
          Fully AI-generated talent. No actors, no shoots—just scalable creative that performs.
        </p>
      </div>

      <div className="space-y-8">
        {AI_VIDEOS.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <FloatingCard variant="dark" withAccentBar={false} className="overflow-hidden">
              <div
                className={`grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10 ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`aspect-video overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10 lg:aspect-[16/10] ${
                    i % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <video
                    src={video.src}
                    className={`h-full w-full object-cover ${video.src.includes('IA_Agent') ? 'object-[center_28%]' : ''}`}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    aria-label={`AI Agent example: ${video.label}`}
                  >
                    <track kind="captions" />
                    Your browser does not support video playback.
                  </video>
                </div>
                <div
                  className={`flex flex-col justify-center space-y-4 lg:py-4 ${
                    i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: video.accent }}
                  >
                    {video.label}
                  </span>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {video.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {video.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {video.metrics.map((m, j) => (
                      <div
                        key={j}
                        className="rounded-xl bg-slate-800/80 px-5 py-3 ring-1 ring-white/10"
                      >
                        <p
                          className="text-xl font-bold"
                          style={{ color: video.accent }}
                        >
                          {m.value}
                        </p>
                        <p className="text-xs font-medium text-slate-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
