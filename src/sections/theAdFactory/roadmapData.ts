export type RoadmapStepInput = {
  title: string
  days: number
  tagline: string
  description: string
  phase: 'discovery' | 'create' | 'deliver'
  media: 'image' | 'video' | 'icon'
  src?: string
  accent: string
  deliverables?: string[]
  outcome?: string
  clientEffort?: 'Low' | 'Medium' | 'High'
  behindTheScenes?: string[]
}

export type RoadmapStep = RoadmapStepInput & {
  startDay: number
  endDay: number
}

const ROADMAP_INPUT: RoadmapStepInput[] = [
  {
    title: 'Kickoff',
    days: 1,
    tagline: 'Your campaign goals meet our creative pipeline.',
    description:
      'We start with a live session to align on your brand, audience, and campaign objectives. You share the vision; we map it to our ad production pipeline. We define creative direction, key messages, and success metrics so every asset is built to perform from day one.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/kick-off.png',
    accent: 'var(--laneta-blue)',
    phase: 'discovery',
    outcome: 'A shared brief and clear success metrics. Campaign goals and creative direction locked from day one.',
    clientEffort: 'Medium',
    behindTheScenes: ['Strategy and creative on the call', 'Audience and KPIs defined', 'Timeline and formats agreed'],
  },
  {
    title: 'Creative Brief',
    days: 2,
    tagline: 'One brief. Every ad built from it.',
    description:
      'Our team turns the kickoff into a structured creative brief for your ads. We lock in tone, hooks, formats, and must-have elements. You receive a single source of truth for the entire campaign—no ambiguity, no last-minute changes once production starts.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/brief.jpg',
    accent: 'var(--laneta-pink)',
    phase: 'discovery',
    outcome: 'One creative brief that drives every ad. Tone, hooks, and formats locked—no surprises in production.',
    clientEffort: 'Low',
    behindTheScenes: ['Creative team writes the brief', 'Platform-specific angles', 'Human review before production'],
  },
  {
    title: 'Contracts & Rights',
    days: 2,
    tagline: 'Paperwork done. You focus on the ads.',
    description:
      'Contracts, usage rights, and project governance are finalized. We handle the paperwork so you can focus on creative. All approvals and sign-offs are collected, and we set clear ownership for feedback and delivery milestones.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/administration.jpg',
    accent: 'var(--laneta-purple)',
    phase: 'discovery',
    outcome: 'Rights and contracts signed. Clear ownership for feedback and delivery. You focus on creative only.',
    clientEffort: 'Low',
    behindTheScenes: ['Legal & ops handle paperwork', 'Approvals in one place', 'Milestones documented'],
  },
  {
    title: 'Talent Selection',
    days: 3,
    tagline: 'The faces of your ads. Chosen together.',
    description:
      'We present creator options that match your brand—look, style, and audience fit. You choose the talent that will front your ads. We refine until you have the right fit. These are the faces of your campaign; we get it right.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/selection.jpg',
    accent: 'var(--laneta-orange)',
    phase: 'create',
    outcome: 'Pre-vetted creators aligned with your brand. The faces of your ads, chosen together.',
    clientEffort: 'Medium',
    behindTheScenes: ['Talent pool pre-screened', 'Style and audience matching', 'Human curation in final choice'],
  },
  {
    title: 'Scripts & Copy',
    days: 2,
    tagline: 'Words first. Frames follow.',
    description:
      'Copy and scripts are drafted for every ad: hero videos, static variants, and platform cuts. We optimize for feed, story, and reel and for your KPIs. You review and approve the words before a single frame is produced.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/script.jpg',
    accent: 'var(--laneta-blue)',
    phase: 'create',
    outcome: 'Approved scripts for every asset. Copy locked before production—no surprises in the edit.',
    clientEffort: 'Medium',
    behindTheScenes: ['Copywriters + strategy', 'Platform-optimized hooks', 'Human review before shoot'],
  },
  {
    title: 'Review & Feedback',
    days: 5,
    tagline: 'Your feedback. Our iteration. No endless rounds.',
    description:
      'First drafts go live for your review. You give structured feedback; we iterate. This window is built for collaboration—clear notes, quick turnarounds. By the end, every ad is approved and ready for final production.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/feedback.jpg',
    accent: 'var(--laneta-pink)',
    phase: 'create',
    outcome: 'Every ad approved and ready for final production. Structured feedback—no endless rounds.',
    clientEffort: 'Medium',
    behindTheScenes: ['Structured feedback system', 'Quick turnaround iterations', 'QA on every revision'],
  },
  {
    title: 'Production',
    days: 5,
    tagline: 'In-house production. Full set of ad variants.',
    description:
      'Our in-house team produces the final ads. All approved scripts and talent are turned into video and static creatives. We generate the full set of variants—every format, every cut—in parallel. Quality checks run throughout so what you get is ready to publish.',
    media: 'image',
    src: 'https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/production.jpg',
    accent: 'var(--laneta-purple)',
    phase: 'create',
    outcome: 'Full set of ad variants: every format, every cut. Quality-checked and ready to publish.',
    clientEffort: 'Low',
    behindTheScenes: ['In-house production', 'Parallel formats', 'Quality checks throughout'],
  },
  {
    title: 'Delivery',
    days: 1,
    tagline: 'Your ads. All formats. One pack.',
    description:
      'You receive the complete pack: 9:16, 1:1, and 16:9—all the assets you need for paid social. Files are organized, named, and delivered in one place. From brief to feed in 21 business days.',
    media: 'video',
    src: '/assets/videos/CasaPinterest.mp4',
    accent: 'var(--laneta-orange)',
    deliverables: ['9:16', '1:1', '16:9'],
    phase: 'deliver',
    outcome: 'All ad assets in three formats. One pack, organized and named. Ready for your feeds.',
    clientEffort: 'Low',
    behindTheScenes: ['Final QA pass', 'Naming convention applied', 'Single delivery package'],
  },
]

export function buildTimeline(data: RoadmapStepInput[]): RoadmapStep[] {
  let total = 0
  return data.map((step) => {
    const startDay = total + 1
    total += step.days
    return { ...step, startDay, endDay: total }
  })
}

export const ROADMAP_STEPS = buildTimeline(ROADMAP_INPUT)
