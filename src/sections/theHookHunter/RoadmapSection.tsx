import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaCheckCircle } from 'react-icons/fa'
import { TbUsers, TbCheck } from 'react-icons/tb'
import { CssVarsProvider } from '@mui/joy/styles'
import Stepper from '@mui/joy/Stepper'
import Step from '@mui/joy/Step'
import StepButton from '@mui/joy/StepButton'
import StepIndicator from '@mui/joy/StepIndicator'
import type { RoadmapStep } from './roadmapData'
import { ROADMAP_STEPS } from './roadmapData'

const PHASE_LABELS: Record<string, string> = {
  discovery: 'Discovery',
  create: 'Create',
  deliver: 'Deliver',
}

const AUTO_ADVANCE_MS = 20000
const SLIDE_DIRECTION = { next: 1, prev: -1 }
const ACCENT_PRIMARY = '#f59e0b'

function StepCard({
  step,
  stepIndex,
  totalSteps,
  isLast,
}: {
  step: RoadmapStep
  stepIndex: number
  totalSteps: number
  isLast: boolean
}) {
  const dayLabel =
    step.startDay === step.endDay
      ? `Day ${step.startDay}`
      : `Days ${step.startDay}–${step.endDay}`

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
      style={{
        borderColor: `${step.accent}40`,
        boxShadow: isLast ? `0 0 40px ${step.accent}25` : undefined,
      }}
    >
      <div className="grid min-h-0 auto-rows-auto items-stretch md:grid-cols-[minmax(355px,415px)_1fr] md:min-h-[560px] lg:grid-cols-[minmax(395px,455px)_1fr]">
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-slate-800 md:h-full md:min-h-[280px]">
          {step.media === 'video' && step.src && (
            <video
              src={step.src}
              className="absolute inset-0 h-full w-full object-cover object-center"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-hidden
            />
          )}
          {step.media === 'image' && step.src && (
            <img
              src={step.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          )}
          {step.media === 'icon' && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: `${step.accent}20` }}
            >
              <TbUsers
                className="size-20 opacity-70 md:size-24"
                style={{ color: step.accent }}
                aria-hidden
              />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-3">
            <span className="text-sm font-semibold text-white">{dayLabel}</span>
          </div>
        </div>

        <div className="flex min-h-0 flex-col justify-center overflow-y-auto p-5 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="text-xs font-bold uppercase tracking-widest md:text-sm"
              style={{ color: step.accent }}
            >
              {dayLabel}
            </span>
            <span className="text-slate-500">·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-slate-300 md:px-3 md:py-1 md:text-sm">
              Step {stepIndex + 1} of {totalSteps}
            </span>
            {step.phase && (
              <>
                <span className="text-slate-500">·</span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold md:px-3 md:py-1 md:text-sm"
                  style={{
                    backgroundColor: `${step.accent}25`,
                    color: step.accent,
                  }}
                >
                  {PHASE_LABELS[step.phase] ?? step.phase}
                </span>
              </>
            )}
          </div>
          <h3 className="mt-2 text-xl font-bold text-white md:mt-3 md:text-3xl lg:text-4xl">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium italic text-slate-400 md:mt-2 md:text-base md:text-lg">
            {step.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:mt-4 md:text-base md:text-lg">
            {step.description}
          </p>

          {step.outcome && (
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 md:mt-6 md:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 md:text-xs">
                By the end of this phase, you&apos;ll have…
              </p>
              <p className="mt-1 text-sm font-semibold text-white md:mt-1.5 md:text-base">{step.outcome}</p>
            </div>
          )}

          {step.clientEffort && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:mt-4 md:text-sm">
              <span className="text-slate-500">Your effort:</span>
              <span
                className="inline-flex items-center gap-1.5 font-semibold"
                style={{ color: step.accent }}
              >
                <span
                  className="inline-block h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor:
                      step.clientEffort === 'Low'
                        ? '#10b981'
                        : step.clientEffort === 'Medium'
                          ? '#f59e0b'
                          : '#8b5cf6',
                  }}
                  aria-hidden
                />
                {step.clientEffort === 'Low' && 'Low'}
                {step.clientEffort === 'Medium' && 'Medium'}
                {step.clientEffort === 'High' && 'High'}
              </span>
              <span className="text-slate-500">· We handle the rest.</span>
            </div>
          )}

          {step.behindTheScenes && step.behindTheScenes.length > 0 && (
            <ul className="mt-3 space-y-1 md:mt-4 md:space-y-1.5">
              {step.behindTheScenes.map((line) => (
                <li key={line} className="flex items-center gap-2 text-xs text-slate-400 md:text-sm">
                  <TbCheck className="size-4 shrink-0 text-emerald-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}

          {step.deliverables && step.deliverables.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5 md:mt-5 md:gap-2">
              {step.deliverables.map((d) => (
                <span
                  key={d}
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold md:px-4 md:py-2 md:text-sm"
                  style={{
                    backgroundColor: `${step.accent}25`,
                    color: step.accent,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function RoadmapSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSteps = ROADMAP_STEPS.length
  const step = ROADMAP_STEPS[activeStep]

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => {
      setDirection(SLIDE_DIRECTION.next)
      setActiveStep((prev) => (prev + 1) % totalSteps)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(t)
  }, [isPaused, totalSteps])

  const goToStep = (index: number) => {
    setDirection(index >= activeStep ? SLIDE_DIRECTION.next : SLIDE_DIRECTION.prev)
    setActiveStep(index)
  }

  const firstStepIndexForPhase = (phase: 'discovery' | 'create' | 'deliver') =>
    ROADMAP_STEPS.findIndex((s) => s.phase === phase)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-6 md:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-10 text-center md:mb-12">
        <p
          className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200/95"
          style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
        >
          8 steps · 21 days
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          21-day roadmap
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300 md:text-lg">
          From your idea to delivered content. Same process for The Hook Hunter, The Amplifier, and Empire Mode—only scale changes.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
          Auto-plays; hover to pause.
        </p>
        <div className="mx-auto mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          <span className="text-slate-500">
            <span className="font-semibold text-amber-200">Week 1</span>
            <span className="text-slate-400"> — Strategy &amp; Alignment</span>
          </span>
          <span className="text-slate-500">
            <span className="font-semibold text-emerald-300">Week 2</span>
            <span className="text-slate-400"> — Creation &amp; Optimization</span>
          </span>
          <span className="text-slate-500">
            <span className="font-semibold text-violet-300">Week 3</span>
            <span className="text-slate-400"> — Production &amp; Delivery</span>
          </span>
        </div>
      </div>

      <CssVarsProvider defaultColorScheme="dark">
        <Stepper
          orientation="horizontal"
          size="sm"
          sx={{
            '--Stepper-connectorLine': 'rgba(255,255,255,0.2)',
            '--StepIndicator-size': '28px',
            '--Step-connectorLine': '1px solid rgba(255,255,255,0.2)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
            mb: 2,
          }}
        >
          {ROADMAP_STEPS.map((s, i) => (
            <Step
              key={s.title}
              active={activeStep === i}
              completed={activeStep > i}
              orientation="horizontal"
              indicator={
                <StepIndicator
                  variant={activeStep === i ? 'solid' : activeStep > i ? 'solid' : 'outlined'}
                  color="neutral"
                  sx={{
                    backgroundColor: activeStep === i ? ACCENT_PRIMARY : activeStep > i ? 'transparent' : 'transparent',
                    color: activeStep > i ? ACCENT_PRIMARY : activeStep === i ? '#030712' : 'rgba(255,255,255,0.6)',
                    borderColor: activeStep > i ? 'transparent' : 'rgba(255,255,255,0.3)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: activeStep === i ? ACCENT_PRIMARY : 'rgba(255,255,255,0.15)',
                    },
                  }}
                >
                  {activeStep > i ? (
                    <FaCheckCircle
                      className="shrink-0"
                      style={{
                        color: ACCENT_PRIMARY,
                        filter: 'brightness(1.15)',
                        fontSize: '0.85rem',
                      }}
                      aria-hidden
                    />
                  ) : (
                    i + 1
                  )}
                </StepIndicator>
              }
              sx={{
                '&::after': {
                  borderColor: activeStep > i ? ACCENT_PRIMARY : 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <StepButton
                onClick={() => goToStep(i)}
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  '&:hover': { color: '#fff' },
                }}
              >
                <span className="sr-only">{s.title}</span>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </CssVarsProvider>

      <div className="mb-4 mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: ACCENT_PRIMARY }}
          initial={false}
          animate={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
      <p className="mb-4 mt-1 text-center text-xs text-white/60">
        Step {activeStep + 1} of {totalSteps}
      </p>

      <div className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 px-4">
        {(['discovery', 'create', 'deliver'] as const).map((phase) => {
          const stepIndex = firstStepIndexForPhase(phase)
          const isActive = step.phase === phase
          return (
            <button
              key={phase}
              type="button"
              onClick={() => goToStep(stepIndex)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors cursor-pointer hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isActive ? 'bg-amber-500/20 text-white' : 'text-slate-500'
              }`}
              aria-pressed={isActive}
              aria-label={`Go to ${PHASE_LABELS[phase]} (step ${stepIndex + 1})`}
            >
              {PHASE_LABELS[phase]}
            </button>
          )
        })}
      </div>

      <div className="relative min-h-0 overflow-visible rounded-2xl md:min-h-[650px] md:overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 80 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden rounded-2xl md:absolute md:inset-0"
          >
            <StepCard
              step={step}
              stepIndex={activeStep}
              totalSteps={totalSteps}
              isLast={activeStep === totalSteps - 1}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-5 text-center text-sm text-slate-400">
        Step {activeStep + 1} of {totalSteps} · {step.title}
      </p>

      <div className="mt-14 rounded-2xl border border-white/20 bg-white/5 px-6 py-8 text-center backdrop-blur-sm md:px-10 md:py-10">
        <p className="text-lg font-semibold text-white md:text-xl">
          Day 1: your idea.
        </p>
        <p className="mt-1 text-2xl font-bold md:text-3xl" style={{ color: ACCENT_PRIMARY }}>
          Day 21: hooks that convert.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
          One roadmap. Hunter, Amplifier, or Empire Mode—same strategy, only scale changes. Your brand, amplified by real UGC talents.
        </p>
      </div>
    </motion.section>
  )
}
