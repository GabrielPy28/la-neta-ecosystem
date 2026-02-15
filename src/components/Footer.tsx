import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si'

const COMPANY_LINKS = [
  { href: 'https://www.laneta.com', label: 'About' },
  { href: 'https://www.facebook.com/LaNetaSiempre', label: 'Facebook' },
  { href: 'https://www.instagram.com/lanetasiempre/', label: 'Instagram' },
  { href: 'https://www.linkedin.com/showcase/lanetasiempre', label: 'LinkedIn' },
] as const

const SERVICES_LINKS = [
  { href: '/the-ad-factory', label: 'The Ad Factory' },
  { href: '/the-glitch', label: 'The Glitch' },
  { href: '/the-hook-hunter', label: 'The Hook Hunter' },
] as const

const LEGAL_LINKS = [
  { href: 'https://www.laneta.com/terms-conditions-creator-program', label: 'Terms & Conditions' },
  { href: 'https://www.laneta.com/policess', label: 'Privacy Policy' },
] as const

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/LaNetaSiempre', icon: SiFacebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/lanetasiempre/', icon: SiInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/showcase/lanetasiempre', icon: SiLinkedin, label: 'LinkedIn' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[var(--laneta-darker)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        {/* 4 columnas alineadas, espaciado uniforme */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-0">
          {/* Col 1: Logo + nombre + contacto */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img
                src="https://la-neta-videos-ubicacion.s3.us-east-1.amazonaws.com/logo.png"
                alt="La Neta Logo"
                className="h-7 w-auto shrink-0 object-contain"
                width={28}
                height={28}
                aria-hidden
              />
              <span className="text-sm font-bold text-white">La Neta</span>
            </div>
            <p className="text-sm text-slate-400">174 Nassau Street, Princeton, NJ 08542 USA</p>
            <p className="text-sm text-slate-400">+52 1 55 3478 9920</p>
          </div>

          {/* Col 2: Company */}
          <div className="flex flex-col">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-[var(--laneta-pink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[var(--laneta-pink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="flex flex-col">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-[var(--laneta-pink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div className="flex flex-col">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[var(--laneta-purple)]/30 p-2.5 text-white transition-colors hover:bg-[var(--laneta-purple)]"
                  aria-label={label}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
            <p className="text-sm text-slate-500">
              © 2026 La Neta · Powered by Eleven Labs
            </p>            
          </div>
        </div>
      </div>
    </footer>
  )
}
