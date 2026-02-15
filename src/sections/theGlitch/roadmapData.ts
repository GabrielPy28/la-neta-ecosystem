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
    tagline: 'Where your vision meets our pipeline.',
    description:
      'We start with a live session to align on your goals, brand voice, and creative direction. You share your vision; we map it to our production pipeline. We define the AI avatar profile, key messages, and success metrics so everyone is on the same page from day one.',
    media: 'image',
    src: '/assets/images/kick-off.png',
    accent: 'var(--laneta-blue)',
    phase: 'discovery',
    outcome: 'A shared vision document and clear success metrics. Everyone aligned from day one.',
    clientEffort: 'Medium',
    behindTheScenes: ['Strategy team on the call', 'AI avatar profile defined', 'KPIs locked in'],
  },
  {
    title: 'Brief',
    days: 2,
    tagline: 'One document. Zero ambiguity.',
    description:
      'Our team turns the kickoff into a structured creative brief. We lock in audience, tone, hooks, and must-have elements. You receive a document that serves as the single source of truth for the entire project—no ambiguity, no last-minute surprises.',
    media: 'image',
    src: '/assets/images/brief.jpg',
    accent: 'var(--laneta-pink)',
    phase: 'discovery',
    outcome: 'One creative brief that serves as the single source of truth. No ambiguity for the rest of the project.',
    clientEffort: 'Low',
    behindTheScenes: ['Creative team writes the brief', 'Tone & audience locked', 'Human review before send'],
  },
  {
    title: 'Administrative Procedures',
    days: 2,
    tagline: 'Paperwork done. You focus on creative.',
    description:
      'Contracts, usage rights, and project governance are finalized. We handle the paperwork so you can focus on the creative. All approvals and sign-offs are collected, and we set clear ownership for feedback and delivery milestones.',
    media: 'image',
    src: '/assets/images/administration.jpg',
    accent: 'var(--laneta-purple)',
    phase: 'discovery',
    outcome: 'Contracts and usage rights signed. Clear ownership for feedback and delivery. You focus on creative only.',
    clientEffort: 'Low',
    behindTheScenes: ['Legal & ops handle paperwork', 'Approvals collected in one place', 'Milestones documented'],
  },
  {
    title: 'Talent Selection',
    days: 3,
    tagline: 'The face of your campaign. Chosen together.',
    description:
      'We present AI avatar options that match your brand—look, style, and persona. You choose the talent that will represent your message. We refine the selection until you have the perfect fit. This is the face of your campaign; we get it right.',
    media: 'image',
    src: '/assets/images/selection.jpg',
    accent: 'var(--laneta-orange)',
    phase: 'create',
    outcome: 'Pre-vetted creators aligned with your brand voice. The face of your campaign, chosen together.',
    clientEffort: 'Medium',
    behindTheScenes: ['Talent pool pre-screened', 'AI-assisted style matching', 'Human curation in final choice'],
  },
  {
    title: 'Scripts',
    days: 2,
    tagline: 'Words first. Frames follow.',
    description:
      'Copy and scripts are drafted for every asset: hero videos, clips, and variations. We optimize for platform (feed, story, reel) and for your KPIs. You review and approve the words before a single frame is produced.',
    media: 'image',
    src: '/assets/images/script.jpg',
    accent: 'var(--laneta-blue)',
    phase: 'create',
    outcome: 'Approved scripts for every asset. Words locked before a single frame is produced—no surprises in edit.',
    clientEffort: 'Medium',
    behindTheScenes: ['Copywriters + strategy', 'Platform-optimized hooks', 'Human review before production'],
  },
  {
    title: 'Review & Feedback',
    days: 5,
    tagline: 'Your feedback. Our iteration. No endless rounds.',
    description:
      'First drafts go live for your review. You give structured feedback; we iterate. This window is built for collaboration—no endless rounds, just clear notes and quick turnarounds. By the end, every asset is approved and ready for final production.',
    media: 'image',
    src: '/assets/images/feedback.jpg',
    accent: 'var(--laneta-pink)',
    phase: 'create',
    outcome: 'Every asset approved and ready for final production. Structured feedback loop—no endless rounds.',
    clientEffort: 'Medium',
    behindTheScenes: ['Structured feedback system', 'Quick turnaround iterations', 'Human QA on every revision'],
  },
  {
    title: 'Production',
    days: 5,
    tagline: 'AI engine + creative team. Full set of variants.',
    description:
      'Our AI engine and creative team produce the final content. All approved scripts and talent are rendered into video. We generate the full set of variants—every format, every cut—in parallel. Quality checks run throughout so what you get is ready to publish.',
    media: 'image',
    src: '/assets/images/production.jpg',
    accent: 'var(--laneta-purple)',
    phase: 'create',
    outcome: 'Full set of variants produced: every format, every cut. Quality-checked and ready to publish.',
    clientEffort: 'Low',
    behindTheScenes: ['AI engine + creative team', 'Parallel rendering', 'Quality checks throughout'],
  },
  {
    title: 'Total Delivery',
    days: 1,
    tagline: '24 assets. Three formats. One pack.',
    description:
      'You receive the complete pack: 9:16, 1:1, and 16:9 formats—24 assets in total. All files are organized, named, and delivered in one place. Your idea is now live-ready content. From kickoff to delivery in 21 business days.',
    media: 'video',
    src: '/assets/videos/CasaPinterest.mp4',
    accent: 'var(--laneta-orange)',
    deliverables: ['9:16', '1:1', '16:9'],
    phase: 'deliver',
    outcome: '24 assets in three formats. One pack, organized and named. Your idea is now live-ready content.',
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
