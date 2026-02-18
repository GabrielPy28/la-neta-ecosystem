import { motion } from 'motion/react'
import { BsGearWideConnected } from 'react-icons/bs'
import { FaGears } from 'react-icons/fa6'
import { GiGears } from 'react-icons/gi'

const STEPS = [
  {
    id: 'create',
    number: '01',
    title: 'We create ads',
    description: 'Strategy, talent, and production under one roof. From your brief to ad-ready content—we own the creative pipeline from day one.',
    icon: BsGearWideConnected,
    accent: 'var(--laneta-purple)',
  },
  {
    id: 'edit',
    number: '02',
    title: 'We edit the results',
    description: 'Every frame is crafted for impact. We cut, pace, and optimize for the platform—so what you get is ready to perform, not just to ship.',
    icon: FaGears,
    accent: 'var(--laneta-pink)',
  },
  {
    id: 'variations',
    number: '03',
    title: 'We generate AI-powered variations',
    description: 'Scale what works. We turn winning creative into multiple angles, formats, and hooks—so you test more and scale faster without starting from zero.',
    icon: GiGears,
    accent: 'var(--laneta-blue)',
  },
]

export function ModusOperandiSection() {
  return (
    <motion.section
      id="modus-operandi"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      {/* One bold card container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 shadow-[0_0_80px_-20px_rgba(102,65,237,0.4),0_0_40px_-20px_rgba(255,71,172,0.2)] ring-1 ring-white/10">
        {/* Top gradient bar — full width, thick */}
        <div
          className="h-1.5 w-full"
          style={{
            background: 'linear-gradient(90deg, var(--laneta-purple), var(--laneta-pink), var(--laneta-blue))',
          }}
          aria-hidden
        />

        {/* Ambient glows behind each step */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--laneta-purple)]/25 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--laneta-pink)]/20 blur-[90px]" />
          <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--laneta-blue)]/25 blur-[100px]" />
        </div>

        {/* Header inside card */}
        <div className="relative border-b border-white/10 px-6 py-8 text-center md:px-12 md:py-10">
          <p
            className="mb-3 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--laneta-purple)', backgroundColor: 'rgba(102, 65, 237, 0.2)' }}
          >
            How we operate
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            The engine behind The Ad Factory
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 md:text-lg">
            Three gears that run in sync. Create. Edit. Scale.
          </p>
        </div>

        {/* Three steps — large gears + strong typography */}
        <div className="relative grid gap-0 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex flex-col items-center border-white/10 px-6 py-10 md:border-r md:last:border-r-0 md:py-14 md:px-8"
              >
                {/* Step number — large, accent */}
                <span
                  className="absolute left-6 top-6 text-5xl font-black opacity-20 md:left-8 md:top-8 md:text-6xl"
                  style={{ color: step.accent }}
                  aria-hidden
                >
                  {step.number}
                </span>

                {/* Gear — large, with glow and subtle rotation on hover */}
                <motion.div
                  className="relative flex shrink-0 items-center justify-center"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-60"
                    style={{ backgroundColor: step.accent }}
                    aria-hidden
                  />
                  <div
                    className="relative flex size-32 items-center justify-center rounded-full md:size-40"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${step.accent}35, ${step.accent}15)`,
                      boxShadow: `0 0 0 2px ${step.accent}50, 0 20px 60px -15px ${step.accent}40`,
                    }}
                    aria-hidden
                  >
                    <Icon
                      className="size-16 text-white drop-shadow-lg md:size-20"
                      style={{ color: 'white', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                      aria-hidden
                    />
                  </div>
                </motion.div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-slate-300 md:text-base">
                  {step.description}
                </p>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <div className="relative border-t border-white/10 px-6 py-5 text-center md:px-12">
          <p className="text-sm font-semibold text-slate-400 md:text-base">
            Same pipeline. No handoffs. <span className="text-white">From brief to feed.</span>
          </p>
        </div>
      </div>
    </motion.section>
  )
}
