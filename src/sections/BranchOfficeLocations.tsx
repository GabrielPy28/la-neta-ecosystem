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
    image: '/assets/images/ceo.jpg',
    leader: 'Jorge de los Santos',
    role: 'CEO',
    quote: 'Designed in the USA. Scaled for the world. We design campaigns with American standards and global reach—world-class talent, flawless execution, results that cross borders.',
  },
  {
    id: 'mexico',
    name: 'Mexico',
    video: '/assets/video/mexico.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/mexico.mp4',
    image: '/assets/images/tech_lead.jpg',
    leader: 'Daniel Ramirez',
    role: 'IT Lead',
    quote: 'Talent that breaks the mold. Mexican creativity at the service of big ideas—precise execution, local flavor, and the energy you only find here.',
  },
  {
    id: 'colombia',
    name: 'Colombia',
    video: '/assets/video/colombia.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/colombia.mp4',
    image: '/assets/images/sales_lead.jpg',
    leader: 'Jose Hijar',
    role: 'Sales Lead',
    quote: 'Creativity without filter. Results without excuses. Colombia doesn\'t follow trends—it sets them. Cultural sensitivity, fresh narrative, and an obsession with quality.',
  },
  {
    id: 'latam',
    name: 'LATAM',
    video: '/assets/video/colombia.mp4',
    fallbackVideo: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/latam.mp4',
    image: '/assets/images/campaigns.jpg',
    leader: 'Ana Romero',
    role: 'Campaigns Director',
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
    <div className="relative h-full overflow-hidden rounded-2xl bg-slate-900">
      {/* Video: city / location */}
      <div className="aspect-video w-full">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Team member card: image + words — reflects their message over the city */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex shrink-0 items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/30 shadow-xl md:h-24 md:w-24">
              <img
                src={location.image}
                alt={location.leader}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">{location.leader}</p>
              <p className="text-sm text-white/80">{location.role}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--laneta-blue)]">{location.name}</p>
            </div>
          </div>
          <blockquote className="flex-1 border-l-2 border-[var(--laneta-pink)] pl-4 text-sm leading-relaxed text-white/95 md:text-base">
            {location.quote}
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export function BranchOfficeLocations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

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

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const setVideoRef = useCallback((index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el
  }, [])

  return (
    <section
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

        {/* Thumbnails */}
        <div className="mt-6 flex justify-center gap-3 overflow-x-auto pb-2 md:mt-8 md:gap-4">
          {LOCATIONS.map((location, index) => (
            <button
              key={location.id}
              type="button"
              onClick={() => scrollTo(index)}
              className={`relative flex shrink-0 flex-col items-center gap-2 rounded-xl border-2 p-2 transition-all md:flex-row md:gap-3 md:px-4 md:py-3 ${
                selectedIndex === index
                  ? 'border-[var(--laneta-pink)] bg-white shadow-md ring-2 ring-[var(--laneta-pink)]/30'
                  : 'border-slate-200 bg-white/80 hover:border-slate-300'
              }`}
              aria-label={`View ${location.name}`}
              aria-pressed={selectedIndex === index}
            >
              <div className="h-12 w-12 overflow-hidden rounded-lg md:h-14 md:w-14">
                <img
                  src={location.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <span className={`text-sm font-medium md:text-base ${selectedIndex === index ? 'text-[var(--laneta-pink)]' : 'text-slate-700'}`}>
                {location.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
