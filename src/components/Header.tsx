import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { HiMenu, HiX, HiCog } from 'react-icons/hi'
import { PiWebhooksLogoDuotone } from "react-icons/pi";
import { CgUserlane } from "react-icons/cg";
import type { IconType } from 'react-icons'

type ServiceChild = {
  href: string
  label: string
  description: string
  icon: IconType
}

const AD_FACTORY_SECTION_LINKS: { href: string; label: string }[] = [
  { href: '#service-presentation', label: 'Service' },
  { href: '#problems-vs-solutions', label: 'Problems & Solutions' },
  { href: '#lets-work-together', label: "Let's Work Together" },
]

const GLITCH_SECTION_LINKS: { href: string; label: string }[] = [
  { href: '#service-presentation', label: 'Service' },
  { href: '#product-value', label: 'Product Value' },
  { href: '#ai-agent-videos', label: 'AI Agent' },
  { href: '#pack-includes', label: 'Pack Includes' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#lets-work-together', label: "Let's Work Together" },
]

const HOOK_HUNTER_SECTION_LINKS: { href: string; label: string }[] = [
  { href: '#service-presentation', label: 'Service' },
  { href: '#product-value', label: 'Product Value' },
  { href: '#ugc-talents', label: 'UGC Talents' },
  { href: '#pack-includes', label: 'Packs' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#lets-work-together', label: "Let's Work Together" },
]

const NAV_LINKS: (
  | { href: string; label: string }
  | { label: string; children: ServiceChild[] }
)[] = [
  { href: '#who-is-la-neta', label: 'Who we are' },
  { href: '#branch-offices', label: 'Branch offices' },
  { href: '#partnerships-alliances', label: 'Partnerships' },
  {
    label: 'Services',
    children: [
      {
        href: '/the-ad-factory',
        label: 'The Ad Factory',
        description: 'Full-service creative engine',
        icon: HiCog,
      },
      {
        href: '/the-glitch',
        label: 'The Glitch',
        description: 'Creative experimentation lab',
        icon: CgUserlane,
      },
      {
        href: '/the-hook-hunter',
        label: 'The Hook Hunter',
        description: 'High-performing hooks system',
        icon: PiWebhooksLogoDuotone,
      },
    ],
  },
]

const isDropdown = (
  link: (typeof NAV_LINKS)[number]
): link is { label: string; children: ServiceChild[] } =>
  'children' in link && Array.isArray(link.children)

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const isAdFactoryPage = pathname === '/the-ad-factory'
  const isGlitchPage = pathname === '/the-glitch'
  const isHookHunterPage = pathname === '/the-hook-hunter'
  const pageSectionLinks =
    isAdFactoryPage ? AD_FACTORY_SECTION_LINKS
    : isGlitchPage ? GLITCH_SECTION_LINKS
    : isHookHunterPage ? HOOK_HUNTER_SECTION_LINKS
    : null

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo + name */}
        {pathname === '/' ? (
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="La Neta — Home"
          >
          <img
            src="/assets/images/logo.png"
            alt=""
            className="h-8 w-auto object-contain md:h-9"
            aria-hidden
          />
          <span
            className={`text-xl font-bold tracking-tight md:text-2xl ${
              isScrolled
                ? 'text-[var(--laneta-purple)]'
                : 'text-white drop-shadow-md'
            }`}
          >
            La Neta
          </span>
        </a>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="La Neta — Home"
          >
          <img
            src="/assets/images/logo.png"
            alt=""
            className="h-8 w-auto object-contain md:h-9"
            aria-hidden
          />
          <span
            className={`text-xl font-bold tracking-tight md:text-2xl ${
              isScrolled
                ? 'text-[var(--laneta-purple)]'
                : 'text-white drop-shadow-md'
            }`}
          >
            La Neta
          </span>
        </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {pageSectionLinks ? (
            <>
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-[var(--laneta-pink)]' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </Link>
              {pageSectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-slate-700 hover:text-[var(--laneta-pink)]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </>
          ) : (
          <>
          {NAV_LINKS.map((link) => {
            if (isDropdown(link)) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href="#services-cta"
                    onClick={(e) => {
                      scrollToSection(e, '#services-cta')
                      setServicesDropdownOpen(false)
                    }}
                    className={`cursor-pointer text-sm font-medium transition-colors ${
                      isScrolled
                        ? 'text-slate-700 hover:text-[var(--laneta-pink)]'
                        : 'text-white/90 hover:text-white'
                    } ${servicesDropdownOpen ? (isScrolled ? 'text-[var(--laneta-pink)]' : 'text-white') : ''}`}
                  >
                    {link.label}
                  </a>
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full pt-3">
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="relative w-[420px] rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                        >
                          {link.children.map((sub) => {
                            const Icon = sub.icon
                            return (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className="group flex items-start gap-4 rounded-xl p-4 transition-all hover:bg-gradient-to-r hover:from-[var(--laneta-purple)]/10 hover:to-[var(--laneta-pink)]/10"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--laneta-purple)]/10 text-[var(--laneta-purple)] transition-colors group-hover:bg-[var(--laneta-purple)] group-hover:text-white">
                                  <Icon className="size-5" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-slate-800">{sub.label}</p>
                                  <p className="text-sm text-slate-500">{sub.description}</p>
                                </div>
                              </a>
                            )
                          })}
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            if ('href' in link) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-[var(--laneta-pink)]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            }
            return null
          })}
          </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            isScrolled ? 'text-slate-700' : 'text-white'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Main">
              {pageSectionLinks ? (
                <>
                  <Link
                    to="/"
                    onClick={closeMobile}
                    className="rounded-lg px-4 py-3 text-left font-medium text-slate-800 hover:bg-[var(--laneta-purple)]/10 hover:text-[var(--laneta-purple)]"
                  >
                    Home
                  </Link>
                  {pageSectionLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        scrollToSection(e, link.href)
                        closeMobile()
                      }}
                      className="rounded-lg px-4 py-3 text-left font-medium text-slate-800 hover:bg-[var(--laneta-purple)]/10 hover:text-[var(--laneta-purple)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              ) : NAV_LINKS.map((link) => {
                if (isDropdown(link)) {
                  return (
                    <div key={link.label}>
                      <div className="flex w-full items-center">
                        <a
                          href="#services-cta"
                          onClick={(e) => {
                            scrollToSection(e, '#services-cta')
                            closeMobile()
                          }}
                          className="flex-1 rounded-lg px-4 py-3 font-medium text-slate-800 hover:bg-[var(--laneta-purple)]/10 hover:text-[var(--laneta-purple)]"
                        >
                          {link.label}
                        </a>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((o) => !o)}
                          className="rounded-lg p-3 text-slate-500 hover:bg-[var(--laneta-purple)]/10 hover:text-[var(--laneta-purple)]"
                          aria-expanded={servicesOpen}
                        >
                          {servicesOpen ? '−' : '+'}
                        </button>
                      </div>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 py-2">
                              {link.children.map((sub) => {
                                const Icon = sub.icon
                                return (
                                  <a
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMobile}
                                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--laneta-purple)]/10"
                                  >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--laneta-purple)]/10 text-[var(--laneta-purple)]">
                                      <Icon className="size-4" />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-slate-800">{sub.label}</p>
                                      <p className="text-xs text-slate-500">{sub.description}</p>
                                    </div>
                                  </a>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                if ('href' in link) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        scrollToSection(e, link.href)
                        closeMobile()
                      }}
                      className="rounded-lg px-4 py-3 text-left font-medium text-slate-800 hover:bg-[var(--laneta-purple)]/10 hover:text-[var(--laneta-purple)]"
                    >
                      {link.label}
                    </a>
                  )
                }
                return null
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
