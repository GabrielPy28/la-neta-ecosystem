import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ROTATE_IMAGE_MS = 4000

const OPTION_IMAGES = [
  'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/option_1.jpg',
  'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/option_2.jpg',
  'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/option_3.jpg',
  'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/option_4.jpg',
] as const

type PresentationVariant = '1' | '2' | '3' | '4'

const TAGLINE = 'Hooks that stop the scroll.'
const DESCRIPTION =
  'UGC creators and content built around hooks that convert. We find and craft the angles that grab attention and drive action—including The Amplifier and Empire Mode for brands ready to own the feed at scale.'

type ServicePresentationSectionProps = {
  variant?: PresentationVariant
}

function Option1() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % OPTION_IMAGES.length)
    }, ROTATE_IMAGE_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative">
      {/* Reflejo — cubre imagen + información, detrás de todo */}
      <div className="absolute -inset-[6%] z-0 overflow-hidden rounded-3xl">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={OPTION_IMAGES[index]}
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-top select-none pointer-events-none"
              style={{
                filter: 'blur(24px)',
                opacity: 0.45,
                transform: 'translateZ(0)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12">
        {/* Columna imagen — cuadro principal nítido */}
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10 shadow-2xl">
        {/* Depth overlay — contraste y nitidez percibida */}
        <div
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-black/20 via-transparent to-white/5"
          aria-hidden
        />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1.04,
              filter: 'blur(6px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'center center' }}
          >
            {/* Parallax sutil — zoom imperceptible tipo cinematográfico */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.06 }}
              transition={{
                duration: ROTATE_IMAGE_MS / 1000,
                ease: 'linear',
              }}
              style={{ transformOrigin: 'center center' }}
            >
              <img
                src={OPTION_IMAGES[index]}
                alt="The Hook Hunter — high-performing hooks system"
                className="h-full w-full select-none object-cover object-top pointer-events-none"
                loading="eager"
                decoding="sync"
                draggable={false}
                fetchPriority="high"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
        </div>
        <div className="flex flex-col justify-center md:py-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
          High-performing hooks system
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          The Hook Hunter
        </h1>
        <p className="mt-4 text-xl font-semibold text-amber-200/90 md:text-2xl">
          {TAGLINE}
        </p>
        <p className="mt-4 text-base leading-relaxed font-medium text-slate-100 md:text-lg">
          {DESCRIPTION}
        </p>
        <div className="mt-6 border-l-[6px] border-amber-500 pl-6">
          <p className="text-lg font-bold text-white md:text-xl">
            People buy from other people.
          </p>
          <p className="mt-1 text-base font-semibold text-amber-200/90 md:text-lg">
            It generates 45% more immediate trust.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-bold text-amber-300">
            The Amplifier
          </span>
          <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
            Empire Mode
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

function Option2({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl md:min-h-[520px]">
      <img
        src={imageSrc}
        alt="The Hook Hunter"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center p-6 pb-12 md:p-10 md:pb-16">
        <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-slate-900/80 px-8 py-8 backdrop-blur-xl ring-1 ring-white/10">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            The Hook Hunter
          </h1>
          <p className="mt-2 text-center text-lg text-amber-200/95">
            {TAGLINE}
          </p>
          <p className="mt-4 text-center text-sm leading-relaxed text-slate-300">
            {DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  )
}

function Option3({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7 lg:pr-6">
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-sm md:p-10 lg:min-h-[380px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              SaaS · Hooks system
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              The Hook Hunter
            </h1>
            <p className="mt-3 text-lg text-slate-200">
              {TAGLINE}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {DESCRIPTION}
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mt-16 lg:mb-16">
          <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10">
            <img
              src={imageSrc}
              alt="The Hook Hunter — hooks that convert"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Option4({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          High-performing hooks system
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          The Hook Hunter
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-300">
          {TAGLINE}
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10">
        <img
          src={imageSrc}
          alt="The Hook Hunter"
          className="aspect-[21/9] w-full object-cover object-center"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="leading-relaxed text-slate-400">
          {DESCRIPTION}
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <span className="rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-300">
            The Amplifier
          </span>
          <span className="rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
            Empire Mode
          </span>
        </div>
      </div>
    </div>
  )
}

export function ServicePresentationSection({ variant = '1' }: ServicePresentationSectionProps) {
  const imageSrc = OPTION_IMAGES[Number(variant) - 1]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px]"
      />
      <div className="relative">
        {variant === '1' && <Option1 />}
        {variant === '2' && <Option2 imageSrc={imageSrc} />}
        {variant === '3' && <Option3 imageSrc={imageSrc} />}
        {variant === '4' && <Option4 imageSrc={imageSrc} />}
      </div>
    </motion.section>
  )
}
