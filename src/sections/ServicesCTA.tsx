import { motion } from 'motion/react'
import {
  SiMeta,
  SiPinterest,
  SiAmd,
  SiAudi,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
} from 'react-icons/si'
import { HiSpeakerphone, HiSwitchVertical, HiThumbUp, HiUserGroup } from 'react-icons/hi'
import { FaPhotoVideo } from 'react-icons/fa'
import { TbHandClick } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import Rating from '@mui/material/Rating'

const SECTION_ID = 'services-cta'

/** Config para cada CTA de servicio **/
type ServiceCTA = {
  pageUrl: string
  title: string
  tagline: string
  description: string
  ctaLabel: string
  imageSrc: string
  imagePosition?: string
}

type CreatorProfile = {
  id: string
  name: string
  slogan: string
  niche: string
  rating: number
  imageSrc: string
  brands: ({ type: 'icon'; icon: IconType; iconSize?: number } | { type: 'image'; src: string })[]
  stats: { ads: number; videos: number; engagement: string; likes: string; followers: string; ctr: string }
  socials: { platform: string; icon: IconType }[]
}

const SERVICE_CTAS: ServiceCTA[] = [
  {
    pageUrl: '/the-ad-factory',
    title: 'The Ad Factory',
    tagline: 'Where ideas become ads.',
    description:
      'Our full-service creative engine: strategy, talent, production, and distribution under one roof. From brief to feed—we own the entire pipeline so you can scale without the operational headache.',
    ctaLabel: 'Discover The Ad Factory',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Ad-Factory.jpg',
  },
  {
    pageUrl: '/the-glitch',
    title: 'The Glitch',
    tagline: 'AI-generated influencers that speak your brand.',
    description:
      'Fully AI-generated talent with strong narrative and content built around your brand. Creators that embody what you sell—authentic storytelling and on-brand presence, designed to connect with your audience and scale your message.',
    ctaLabel: 'Discover The Glitch',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/the-glitch.jpg',
    imagePosition: 'center 35%',
  },
  {
    pageUrl: '/the-hook-hunter',
    title: 'The Hook Hunter',
    tagline: 'Hooks that stop the scroll.',
    description:
      'UGC creators and content built around hooks that convert. We find and craft the angles that grab attention and drive action—including The Amplifier and Empire Mode for brands ready to own the feed at scale.',
    ctaLabel: 'Discover The Hook Hunter',
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/ugc_creator.jpg',
  },
]

const CREATOR_PROFILES: CreatorProfile[] = [
  {
    id: 'carolyn',
    name: 'Carolyn',
    slogan: 'Authentic fashion voice that turns browsers into buyers.',
    niche: 'Fashion & Style',
    rating: 4.9,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/fashion_influencer.jpg',
    brands: [{ type: 'icon', icon: SiMeta }, { type: 'icon', icon: SiPinterest }],
    stats: { ads: 42, videos: 128, engagement: '2.4x', likes: '1.2M', followers: '285K', ctr: '4.8%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'TikTok', icon: SiTiktok },
    ],
  },
  {
    id: 'david',
    name: 'David',
    slogan: 'Content that makes people hungry—and click.',
    niche: 'Food & Beverage',
    rating: 4.8,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/influencer_food_male.jpg',
    brands: [{ type: 'icon', icon: SiPinterest }, { type: 'icon', icon: SiMeta }],
    stats: { ads: 38, videos: 94, engagement: '3.2x', likes: '890K', followers: '192K', ctr: '5.1%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'TikTok', icon: SiTiktok },
      { platform: 'YouTube', icon: SiYoutube },
    ],
  },
  {
    id: 'stiven',
    name: 'Stiven',
    slogan: 'Speaks the language of tech and gaming audiences.',
    niche: 'Tech & Gaming',
    rating: 4.7,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/influencer_geek.jpg',
    brands: [{ type: 'icon', icon: SiAmd, iconSize: 32 }, { type: 'icon', icon: SiMeta }],
    stats: { ads: 31, videos: 76, engagement: '1.8x', likes: '540K', followers: '420K', ctr: '3.9%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'YouTube', icon: SiYoutube },
    ],
  },
  {
    id: 'luis-julia',
    name: 'Luis & Julia',
    slogan: 'Travel that inspires—and converts. Discovery content that drives action.',
    niche: 'Travel & Discovery',
    rating: 4.8,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Luis_Julia_influencers_travel.jpg',
    brands: [{ type: 'icon', icon: SiPinterest }, { type: 'icon', icon: SiMeta }],
    stats: { ads: 29, videos: 82, engagement: '2.5x', likes: '720K', followers: '318K', ctr: '4.2%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'Facebook', icon: SiFacebook },
      { platform: 'YouTube', icon: SiYoutube },
    ],
  },
  {
    id: 'matt',
    name: 'Matt',
    slogan: 'Sports and fitness energy that connects with your audience.',
    niche: 'Sports',
    rating: 4.6,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/Matt_influencer_sport.jpg',
    brands: [{ type: 'icon', icon: SiPinterest }, { type: 'icon', icon: SiAudi }],
    stats: { ads: 24, videos: 61, engagement: '2.9x', likes: '380K', followers: '156K', ctr: '4.5%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'TikTok', icon: SiTiktok },
      { platform: 'YouTube', icon: SiYoutube },
    ],
  },
  {
    id: 'samantha',
    name: 'Samantha',
    slogan: 'Raw energy and authenticity that converts.',
    niche: 'Art & Music',
    rating: 4.5,
    imageSrc: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/samantha.jpg',
    brands: [{ type: 'icon', icon: SiMeta }, { type: 'icon', icon: SiPinterest }],
    stats: { ads: 18, videos: 45, engagement: '2.1x', likes: '290K', followers: '98K', ctr: '3.6%' },
    socials: [
      { platform: 'Instagram', icon: SiInstagram },
      { platform: 'TikTok', icon: SiTiktok },
    ],
  },
]

function ServiceCard({ service, index }: { service: ServiceCTA; index: number }) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-200/50">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--laneta-purple)] via-[var(--laneta-pink)] to-[var(--laneta-blue)]"
        />
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={service.imageSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          />
        </div>
        <div className="relative flex flex-1 flex-col overflow-hidden p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--laneta-purple)]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--laneta-pink)]/20 blur-3xl"
          />
          <div className="relative">
            <p className="mb-3 inline-flex rounded-full bg-[var(--laneta-purple)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--laneta-purple)]">
              {service.tagline}
            </p>
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl">
              {service.title}
            </h3>
            <p className="mb-6 flex-1 text-slate-600 text-sm leading-relaxed md:mb-8 md:text-base">
              {service.description}
            </p>
            <a
              href={service.pageUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--laneta-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--laneta-pink)] hover:shadow-[var(--laneta-pink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--laneta-pink)] focus:ring-offset-2"
            >
              {service.ctaLabel}
              <span className="text-lg leading-none" aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CreatorProfileCard({ creator, index }: { creator: CreatorProfile; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-200/50 transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-slate-100">
        <img
          src={creator.imageSrc}
          alt={`${creator.name} — ${creator.niche}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 backdrop-blur-sm">
            {creator.niche}
          </span>
          <h3 className="mt-1.5 text-base font-bold text-white">{creator.name}</h3>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-3">
        <p className="line-clamp-2 text-base font-semibold leading-snug text-slate-700">
          {creator.slogan}
        </p>

        <div className="mt-2 flex items-center gap-1.5">
          <Rating
            name="read-only"
            value={creator.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              '& .MuiRating-icon': { fontSize: 20 },
              '& .MuiRating-iconFilled': { color: '#f59e0b' },
              '& .MuiRating-iconEmpty': { color: '#e5e7eb' },
            }}
          />
          <span className="text-base font-bold text-slate-600">{creator.rating}</span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-sm font-medium text-slate-500">Brands:</span>
          {creator.brands.map((b, i) =>
            b.type === 'icon' ? (
              <div
                key={i}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-600"
                title="Brand partner"
              >
                <b.icon
                  className="shrink-0"
                  style={{ width: b.iconSize ?? 20, height: b.iconSize ?? 20, minWidth: b.iconSize ?? 20, minHeight: b.iconSize ?? 20 }}
                  aria-hidden
                />
              </div>
            ) : (
              <img
                key={i}
                src={b.src}
                alt=""
                className="h-9 w-9 shrink-0 object-contain"
                aria-hidden
              />
            ),
          )}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5 text-base">
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <HiSpeakerphone className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.ads}</span><span className="ml-0.5 text-slate-500">ads</span></span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <FaPhotoVideo className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.videos}</span><span className="ml-0.5 text-slate-500">videos</span></span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <HiSwitchVertical className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.engagement}</span><span className="ml-0.5 text-slate-500">eng</span></span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <HiThumbUp className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.likes}</span><span className="ml-0.5 text-slate-500">likes</span></span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <HiUserGroup className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.followers}</span><span className="ml-0.5 text-slate-500">followers</span></span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-1.5">
            <TbHandClick className="size-4 shrink-0 text-slate-500" aria-hidden />
            <span><span className="font-bold text-slate-800">{creator.stats.ctr}</span><span className="ml-0.5 text-slate-500">CTR (%)</span></span>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-2">
          <span className="text-sm font-medium text-slate-500">Present on:</span>
          {creator.socials.map((s) => {
            const Icon = s.icon
            return (
              <span
                key={s.platform}
                className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-sm text-slate-600"
                title={s.platform}
              >
                <Icon className="size-5" aria-hidden />
                <span>{s.platform}</span>
              </span>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}

export function ServicesCTA() {
  return (
    <section
      id={SECTION_ID}
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1680px] px-6 md:px-8">
        <motion.header
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-[var(--laneta-blue)]">
            Services & business model
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl lg:text-5xl">
            How we <span className="text-[var(--laneta-pink)]">operate</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            The Ad Factory, The Glitch, and The Hook Hunter—each built to turn your vision into content that performs.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {SERVICE_CTAS.map((service, index) => (
            <ServiceCard key={service.pageUrl} service={service} index={index} />
          ))}
        </div>

        {/* Creator Network subsection */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-[var(--laneta-purple)]">
              Our creator network
            </p>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 md:text-3xl lg:text-4xl">
              More than <span className="text-[var(--laneta-pink)]">1,000 creators</span> ready to record
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              Pre-vetted talent across fashion, food, tech, lifestyle, and more. Each creator in our registry is ready to bring your brand to life with authentic UGC that converts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CREATOR_PROFILES.map((creator, index) => (
              <CreatorProfileCard key={creator.id} creator={creator} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
