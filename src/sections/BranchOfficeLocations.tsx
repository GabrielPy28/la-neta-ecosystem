import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'motion/react'

const SECTION_ID = 'branch-offices'

const INTRO = {
  where: "We're present in the United States, Mexico, Colombia, and across Latin America. Each office is rooted in its market and connected to our global network.",
  what: "We represent local talent with global standards: creativity, production, and strategy that feel native to each region while delivering the quality and scale your brand expects.",
  who: "We're for brands that want to grow in the Americas without losing relevance—whether you're entering a new market or doubling down where you already play.",
}

const LOCATIONS = [
  {
    id: 'usa',
    name: 'United States',
    video: '/assets/video/USA.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/USA.mp4',
    image: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/ceo.jpg',
    leader: 'Jorge de los Santos',
    role: 'CEO',
    quote: 'Designed in the USA. Scaled for the world. We design campaigns with American standards and global reach—world-class talent, flawless execution, results that cross borders.',
  },
  {
    id: 'mexico',
    name: 'Mexico',
    video: '/assets/video/mexico.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/mexico.mp4',
    image: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/tech_lead.jpg',
    leader: 'Daniel Ramirez',
    role: 'IT Lead',
    quote: 'Talent that breaks the mold. Mexican creativity at the service of big ideas—precise execution, local flavor, and the energy you only find here.',
  },
  {
    id: 'colombia',
    name: 'Colombia',
    video: '/assets/video/colombia.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/colombia.mp4',
    image: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/sales_lead.jpg',
    leader: 'Jose Hijar',
    role: 'Sales Lead',
    quote: 'Creativity without filter. Results without excuses. Colombia doesn\'t follow trends—it sets them. Cultural sensitivity, fresh narrative, and an obsession with quality.',
  },
  {
    id: 'latam',
    name: 'LATAM',
    video: '/assets/video/colombia.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/latam.mp4',
    image: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/campaigns.jpg',
    leader: 'Giovina Varela',
    role: 'RR.HH. Director',
    quote: 'From Latin America, to the world. We operate with a global vision—the same quality, the same impact, with the warmth and resilience that set us apart.',
  },
]

function LocationSlide({
  location,
  onVideoRef,
}: {
  location: (typeof LOCATIONS)[number]
  onVideoRef: (el: HTMLVideoElement | null) => void
}) {
  return (
    <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-slate-900 md:min-h-0 md:flex-none">
      {/* Video: en móvil más alto para apreciarlo; en desktop aspect-video con overlay */}
      <div className="relative w-full shrink-0 basis-auto md:aspect-video md:min-h-[280px]">
        <div className="aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
          <video
            ref={onVideoRef}
            src={location.video}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-hidden
            onError={(e) => {
              const v = e.currentTarget
              if (v.src !== location.fallbackVideo) v.src = location.fallbackVideo
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:block" />
      </div>

      {/* Tarjeta del personal: en móvil debajo del video (siempre visible); en desktop superpuesta */}
      <div className="relative z-10 flex shrink-0 flex-col justify-end bg-gradient-to-t from-slate-900 to-slate-900/95 px-4 py-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:shrink-0 md:bg-transparent md:p-6 md:pb-6 md:pt-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6 md:gap-6">
          <div className="flex shrink-0 items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white/30 shadow-xl md:h-24 md:w-24">
              <img
                src={location.image}
                alt={location.leader}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white">{location.leader}</p>
              <p className="text-sm text-white/80">{location.role}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--laneta-blue)]">{location.name}</p>
            </div>
          </div>
          <blockquote className="min-h-0 flex-1 border-l-2 border-[var(--laneta-pink)] pl-4 text-sm leading-relaxed text-white/95 md:text-base">
            {location.quote}
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export function BranchOfficeLocations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [sectionInView, setSectionInView] = useState(false)

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    setSelectedIndex(index)
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Solo avanzar el carrusel en automático cuando la sección está visible
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        setSectionInView(!!entries[0]?.isIntersecting)
      },
      { rootMargin: '50px', threshold: 0 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!emblaApi || !sectionInView) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi, sectionInView])

  // Pausar todos los videos al salir de la sección; reproducir solo el del slide activo al entrar
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (sectionInView && i === selectedIndex) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [sectionInView, selectedIndex])

  const setVideoRef = useCallback((index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el
  }, [])

  return (
    <section
      ref={sectionRef}
      id={SECTION_ID}
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Intro: title + prominent message cards */}
        <motion.header
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-[var(--laneta-blue)]">
            Where we are
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl lg:text-5xl">
            Branch Office <span className="text-[var(--laneta-pink)]">Locations</span>
          </h2>
        </motion.header>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-center text-lg text-slate-600 md:mb-10 md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Local roots, global reach—here's what that means for you.
        </motion.p>

        <motion.div
          className="mb-14 grid gap-6 md:mb-20 md:grid-cols-3 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--laneta-blue)]" aria-hidden />
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              Where we're present
            </h3>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {INTRO.where}
            </p>
          </div>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--laneta-pink)]" aria-hidden />
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              What we represent
            </h3>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {INTRO.what}
            </p>
          </div>
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--laneta-blue)]" aria-hidden />
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              Who we're for
            </h3>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {INTRO.who}
            </p>
          </div>
        </motion.div>

        {/* Main carousel */}
        <div className="embla__viewport rounded-2xl" ref={emblaRef}>
          <div className="embla__container">
            {LOCATIONS.map((location, index) => (
              <div key={location.id} className="embla__slide">
                <LocationSlide
                  location={location}
                  onVideoRef={setVideoRef(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Paginación: en móvil grid 4 columnas para que quepan USA, Mexico, Colombia, LATAM; en desktop flex */}
        <div className="mt-6 grid min-w-0 grid-cols-4 gap-2 pb-2 md:mt-8 md:flex md:justify-center md:gap-4">
          {LOCATIONS.map((location, index) => (
            <button
              key={location.id}
              type="button"
              onClick={() => scrollTo(index)}
              className={`relative flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border-2 p-2 transition-all md:min-w-[8.5rem] md:min-h-[4.5rem] md:shrink-0 md:flex-row md:gap-3 md:px-4 md:py-3 ${
                selectedIndex === index
                  ? 'border-[var(--laneta-pink)] bg-white shadow-md ring-2 ring-[var(--laneta-pink)]/30'
                  : 'border-slate-200 bg-white/80 hover:border-slate-300'
              }`}
              aria-label={`View ${location.name}`}
              aria-pressed={selectedIndex === index}
            >
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg md:h-14 md:w-14">
                <img
                  src={location.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span
                className={`line-clamp-2 min-h-[2rem] text-center text-xs font-medium leading-tight md:min-h-0 md:line-clamp-none md:text-base ${
                  selectedIndex === index ? 'text-[var(--laneta-pink)]' : 'text-slate-700'
                }`}
              >
                {location.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
