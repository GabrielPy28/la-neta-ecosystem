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
    tagline: 'Where your vision meets our UGC pipeline.',
    description:
      'We start with a live session to align on your goals, brand voice, and creative direction. Whether you choose The Hook Hunter, The Amplifier, or Empire Mode, we map your vision to our production pipeline. We define which hooks will convert, which talents will represent you, and what success looks like—so everyone is on the same page from day one.',
    media: 'image',
    src: '/assets/images/kick-off.png',
    accent: '#f59e0b',
    phase: 'discovery',
    outcome: 'A shared vision document and clear success metrics. Ready to validate winning hooks—Hunter, Amplifier, or Empire.',
    clientEffort: 'Medium',
    behindTheScenes: ['Strategy team on the call', 'Hook strategy defined', 'Pack scale locked in'],
  },
  {
    title: 'Brief',
    days: 2,
    tagline: 'One document. Zero ambiguity.',
    description:
      'Our team turns the kickoff into a structured creative brief. We lock in audience, tone, hooks, and must-have elements for your UGC content. Whether you are scaling with 1 talent (The Hook Hunter), 3 (The Amplifier), or 5 (Empire Mode), you receive a document that serves as the single source of truth—no ambiguity, no last-minute surprises.',
    media: 'image',
    src: '/assets/images/brief.jpg',
    accent: '#10b981',
    phase: 'discovery',
    outcome: 'One creative brief that serves as the single source of truth. Same quality across all Hook Hunter packs.',
    clientEffort: 'Low',
    behindTheScenes: ['Creative team writes the brief', 'Tone & audience locked', 'Human review before send'],
  },
  {
    title: 'Administrative Procedures',
    days: 2,
    tagline: 'Paperwork done. You focus on creative.',
    description:
      'Contracts, usage rights, and project governance are finalized. We handle the paperwork so you can focus on the creative. All approvals and sign-offs are collected, and we set clear ownership for feedback and delivery milestones. Same process for The Hook Hunter, The Amplifier, and Empire Mode.',
    media: 'image',
    src: '/assets/images/administration.jpg',
    accent: '#8b5cf6',
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
      'We present UGC talents that match your brand—look, style, and persona. You choose the creators who will represent your message. The Hook Hunter uses 1 talent; The Amplifier, 3; Empire Mode, 5. People buy from people—we get the right faces so your hooks convert and your feed dominates.',
    media: 'image',
    src: '/assets/images/selection.jpg',
    accent: '#f59e0b',
    phase: 'create',
    outcome: 'Pre-vetted UGC talents aligned with your brand voice. The face of your campaign, chosen together—Hunter to Empire.',
    clientEffort: 'Medium',
    behindTheScenes: ['Talent pool pre-screened', 'Style & niche matching', 'Human curation in final choice'],
  },
  {
    title: 'Scripts',
    days: 2,
    tagline: 'Words first. Frames follow.',
    description:
      'Copy and scripts are drafted for every asset: hero videos, clips of 10 seconds, and variations. We optimize for platform and for your KPIs. You review and approve the words before a single frame is produced. Whether 24, 66, or 120 assets—same strategy system, only scale changes.',
    media: 'image',
    src: '/assets/images/script.jpg',
    accent: '#10b981',
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
      'First drafts go live for your review. You give structured feedback; we iterate. This window is built for collaboration—no endless rounds, just clear notes and quick turnarounds. By the end, every clip and video is approved and ready for final production. Hunter, Amplifier, or Empire—same workflow.',
    media: 'image',
    src: '/assets/images/feedback.jpg',
    accent: '#8b5cf6',
    phase: 'create',
    outcome: 'Every asset approved and ready for final production. Structured feedback loop—no endless rounds.',
    clientEffort: 'Medium',
    behindTheScenes: ['Structured feedback system', 'Quick turnaround iterations', 'Human QA on every revision'],
  },
  {
    title: 'Production',
    days: 5,
    tagline: 'UGC engine + creative team. Full set of variants.',
    description:
      'Our UGC talents and creative team produce the final content. All approved scripts and talent are filmed. We generate the full set of variants—every format, every cut—24 assets for The Hook Hunter, 66 for The Amplifier, 120 for Empire Mode. Quality checks run throughout so what you get is ready to dominate your feed.',
    media: 'image',
    src: '/assets/images/production.jpg',
    accent: '#f59e0b',
    phase: 'create',
    outcome: 'Full set of variants produced: every format, every cut. Quality-checked and ready to publish.',
    clientEffort: 'Low',
    behindTheScenes: ['UGC talents + creative team', 'Parallel production', 'Quality checks throughout'],
  },
  {
    title: 'Total Delivery',
    days: 1,
    tagline: 'Your pack delivered. Hunter, Amplifier, or Empire.',
    description:
      'You receive the complete pack: 9:16, 1:1, and 16:9 formats. The Hook Hunter: 24 assets. The Amplifier: 66 assets. Empire Mode: 120 assets. All files are organized, named, and delivered in one place. Your idea is now live-ready content—hooks that convert, from kickoff to delivery in 21 business days.',
    media: 'video',
    src: '/assets/videos/influencer_food.mp4',
    accent: '#10b981',
    deliverables: ['9:16', '1:1', '16:9'],
    phase: 'deliver',
    outcome: '24, 66, or 120 assets in three formats. One pack, organized and named. Your idea is now live-ready content.',
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
