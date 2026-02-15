import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FloatingCard } from '../../components/FloatingCard'
import { HiArrowRight, HiX } from 'react-icons/hi'

const LETS_TALK_IMAGE = '/assets/images/lets_talk.png'

type LetsWorkTogetherVariant = 'adFactory' | 'glitch' | 'hookHunter' | 'global'

const COPY = {
  global: {
    intro: "Have a vision you'd like to bring to life? Let's talk.",
    body: "Whether you need UGC ads, AI-powered content, high-performing hooks, or a full creative pipeline—we're here to help your brand scale. Share your goals, timelines, or a rough idea. We'll match you with the right solution and get back to you with next steps.",
    quote: 'You bring the idea.',
    quoteAccent: 'We bring the infrastructure—content, talent, and execution.',
    messagePlaceholder: "Tell us about your brand and what you're looking for. Campaign goals, preferred formats, timeline—whatever helps us get started.",
  },
  adFactory: {
    intro: "Do you have an idea you'd like to bring to life? Don't waste time and talk to us.",
    body: "Whether you need ads that convert, creative that stands out, or a full pipeline from brief to feed—we're here to turn your vision into reality. Share your goals, timelines, or a rough concept. We'll get back to you with next steps.",
    quote: 'You bring the idea.',
    quoteAccent: 'We bring the execution.',
    messagePlaceholder: 'What do you want to bring to life? Campaign goals, formats, timeline—share whatever helps us get started.',
  },
  glitch: {
    intro: "Ready to amplify your brand with AI-generated content? Let's talk about The Glitch.",
    body: "Whether you need AI avatars for your brand, a 24-asset content pack, or a full 21-day roadmap from kickoff to delivery—we're here to make it happen. Share your campaign goals and timelines. We'll get back to you with next steps.",
    quote: 'You bring the idea.',
    quoteAccent: "We bring the AI-powered content.",
    messagePlaceholder: "Tell us about your brand and campaign goals. Interested in The Glitch? Share your timeline and we'll reach out.",
  },
  hookHunter: {
    intro: "Ready for hooks that convert? Let's talk about The Hook Hunter, The Amplifier, or Empire Mode.",
    body: "Whether you want to validate winning hooks with 1 talent (The Hook Hunter), dominate your feed with 3 (The Amplifier), or own your category with 5 (Empire Mode)—we're here to turn your vision into UGC content that performs. Share your goals, timelines, or pack preference. We'll get back to you with next steps.",
    quote: 'You bring the idea.',
    quoteAccent: 'We bring the UGC talents and hooks that convert.',
    messagePlaceholder: 'Which pack interests you—Hunter, Amplifier, or Empire? Share your campaign goals, timeline, and we\'ll reach out.',
  },
}

function ContactFormModal({ onClose, variant = 'adFactory' }: { onClose: () => void; variant?: LetsWorkTogetherVariant }) {
  const copy = COPY[variant ?? 'adFactory']
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden
          className="h-1 w-full"
          style={{
            background: 'linear-gradient(90deg, var(--laneta-purple), var(--laneta-pink), var(--laneta-blue))',
          }}
        />
        <div className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="contact-modal-title" className="text-xl font-bold text-[var(--laneta-slate)] md:text-2xl">
              Let&apos;s talk
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close"
            >
              <HiX className="size-5" />
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-[var(--laneta-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--laneta-purple)]/20"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-[var(--laneta-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--laneta-purple)]/20"
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-slate-700">
                Company <span className="text-slate-400">(optional)</span>
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                placeholder="Your brand or company"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-[var(--laneta-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--laneta-purple)]/20"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Tell us about your idea
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder={copy.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-[var(--laneta-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--laneta-purple)]/20"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[var(--laneta-purple)]/90 hover:shadow-[var(--laneta-purple)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--laneta-purple)] focus:ring-offset-2"
            >
              Send message
              <HiArrowRight className="size-5" />
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

const HOOK_HUNTER_ACCENT = '#f59e0b'

export function LetsWorkTogetherSection({ variant = 'adFactory' }: { variant?: LetsWorkTogetherVariant }) {
  const [modalOpen, setModalOpen] = useState(false)
  const copy = COPY[variant ?? 'adFactory']
  const isDark = variant === 'hookHunter'

  const content = (
    <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-12 lg:gap-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: isDark ? `${HOOK_HUNTER_ACCENT}15` : 'rgba(102, 65, 237, 0.1)',
        }}
      />
      <div className="order-2 md:order-1 text-center md:text-left">
        <h2
          className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          style={{ color: isDark ? '#fff' : 'var(--laneta-slate)' }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          className="mt-4 text-lg leading-relaxed md:text-xl"
          style={{ color: isDark ? 'rgb(203 213 225)' : 'rgb(71 85 105)' }}
        >
          {copy.intro}
        </p>
        <p className="mt-3 leading-relaxed" style={{ color: isDark ? 'rgb(148 163 184)' : 'rgb(71 85 105)' }}>
          {copy.body}
        </p>
        <div
          className="mt-6 border-l-4 pl-5"
          style={{ borderColor: isDark ? HOOK_HUNTER_ACCENT : 'var(--laneta-purple)' }}
        >
          <p
            className="text-base font-medium md:text-lg"
            style={{ color: isDark ? '#fff' : 'var(--laneta-slate)' }}
          >
            {copy.quote}{' '}
            <span style={{ color: isDark ? HOOK_HUNTER_ACCENT : 'var(--laneta-purple)' }}>{copy.quoteAccent}</span>
          </p>
        </div>
        <div className="mt-8 flex justify-center md:justify-start">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: isDark ? HOOK_HUNTER_ACCENT : 'var(--laneta-purple)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgb(217 119 6)' : 'rgba(102, 65, 237, 0.9)'
              e.currentTarget.style.boxShadow = isDark ? '0 20px 40px rgba(245, 158, 11, 0.3)' : ''
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? HOOK_HUNTER_ACCENT : 'var(--laneta-purple)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            Talk to us
            <HiArrowRight className="size-5" />
          </button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
          <img
            src={LETS_TALK_IMAGE}
            alt="Let's work together — bring your idea to life"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-7xl px-4 md:px-6"
      >
        {isDark ? (
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm md:p-8">
            <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: HOOK_HUNTER_ACCENT }} />
            {content}
          </div>
        ) : (
          <FloatingCard className="group relative overflow-hidden">{content}</FloatingCard>
        )}
      </motion.section>

      <AnimatePresence>
        {modalOpen && (
          <ContactFormModal onClose={() => setModalOpen(false)} variant={variant} />
        )}
      </AnimatePresence>
    </>
  )
}
