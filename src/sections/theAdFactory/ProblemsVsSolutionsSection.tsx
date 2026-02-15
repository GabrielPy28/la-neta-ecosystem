import { motion } from 'motion/react'
import { FloatingCard } from '../../components/FloatingCard'
import { HiXCircle, HiCheckCircle } from 'react-icons/hi'
import { BiSolidTimer } from 'react-icons/bi'
import { RiAdvertisementFill } from 'react-icons/ri'
import { FaUsersLine } from "react-icons/fa6";
import { TbTools } from 'react-icons/tb'
import { GoGoal } from "react-icons/go";
import { MdOutlineCategory } from 'react-icons/md'
import type { IconType } from 'react-icons'

const TRANSFORMATION_ROWS: {
  problem: string
  solution: string
  tagline: string
  icon: IconType
  iconPosition: 'left' | 'center' | 'right'
}[] = [
  {
    problem: 'You have no ads',
    solution: 'We produce advertisements for you',
    tagline: 'From brief to feed—we own the pipeline.',
    icon: RiAdvertisementFill,
    iconPosition: 'right',
  },
  {
    problem: 'Producing ads takes too much of your time',
    solution: 'We do it in no time',
    tagline: 'Fast turnaround without the back-and-forth.',
    icon: BiSolidTimer,
    iconPosition: 'right',
  },
  {
    problem: "You don't have any content creators",
    solution: 'We have a network of 1,000+ creators',
    tagline: 'Curated talent, ready to perform for your brand.',
    icon: FaUsersLine,
    iconPosition: 'right',
  },
  {
    problem: "You don't have specialized equipment",
    solution: 'We adapt content for every network',
    tagline: 'One asset, every format. Native to each platform.',
    icon: TbTools,
    iconPosition: 'right',
  },
  {
    problem: 'You need a variety of ads',
    solution: 'We create ad variety that attracts buyers',
    tagline: 'Volume + variation. Test more, scale what works.',
    icon: MdOutlineCategory,
    iconPosition: 'right',
  },
  {
    problem: "You can't capture the audience's attention",
    solution: 'We design for attention—hooks that convert',
    tagline: 'Data-led creative. We know what stops the scroll.',
    icon: GoGoal,
    iconPosition: 'right',
  },
]

export function ProblemsVsSolutionsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-7xl px-4 md:px-6"
    >
      <FloatingCard className="overflow-hidden">
        <div className="mb-10 text-center md:mb-12">
          <p
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--laneta-purple)', backgroundColor: 'rgba(102, 65, 237, 0.1)' }}
          >
            6 friction points · 6 ways we fix them
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--laneta-slate)] md:text-3xl lg:text-4xl">
          Eliminate Friction, Amplify Production
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600 md:text-lg">
            Stop struggling with ads. Start scaling them.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Every bottleneck you feel—we built The Ad Factory to remove it.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="divide-y divide-slate-200/80">
            {TRANSFORMATION_ROWS.map((row, i) => {
              const Icon = row.icon
              return (
              <div
                key={i}
                className="group grid items-start gap-4 py-6 md:grid-cols-[1fr_auto_1fr_auto] md:gap-x-[8%] md:gap-y-0 md:py-8"
              >
                {/* Problem */}
                <div className="flex items-start gap-3 text-slate-500">
                  <HiXCircle
                    className="mt-0.5 size-5 shrink-0 opacity-60"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed md:text-base">
                    {row.problem}
                  </p>
                </div>

                {/* Arrow — transform */}
                <div className="hidden items-center justify-center md:flex">
                  <span
                    className="text-2xl text-slate-300 transition-all duration-300 group-hover:text-[var(--laneta-purple)]"
                    aria-hidden
                  >
                    →
                  </span>
                </div>

                {/* Solution — hover = progress */}
                <div className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1 md:rounded-lg md:py-2 md:pr-2 md:transition-colors group-hover:md:bg-[var(--laneta-purple)]/5">
                  <HiCheckCircle
                    className="mt-0.5 size-5 shrink-0"
                    style={{ color: 'var(--laneta-purple)' }}
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold leading-relaxed text-slate-800 md:text-base">
                      {row.solution}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 md:text-sm">
                      {row.tagline}
                    </p>
                  </div>
                </div>

                {/* Decorative icon — own column so it stays to the right of solution */}
                <div className="hidden items-center justify-end md:flex">
                  <Icon
                    className="size-20 shrink-0 text-[var(--laneta-purple)]/10 md:size-24"
                    aria-hidden
                  />
                </div>
              </div>
            )
            })}
          </div>

          {/* Closing hook */}
          <div className="mt-10 border-t border-slate-200/80 pt-10 text-center md:mt-12 md:pt-12">
            <p className="text-lg font-semibold text-[var(--laneta-slate)] md:text-xl">
              One partner. Full pipeline. No more guesswork.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              The Ad Factory turns creative chaos into ads that scale.
            </p>
          </div>
        </div>
      </FloatingCard>
    </motion.section>
  )
}
