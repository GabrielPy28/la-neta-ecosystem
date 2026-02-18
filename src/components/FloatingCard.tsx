import { type ReactNode } from 'react'

/**
 * Tarjeta flotante para páginas de servicio.
 * light: fondo claro (La Neta bg). dark: fondo tipo Hook Hunter (slate-900, ring-white/10).
 */
type FloatingCardProps = {
  children: ReactNode
  /** Clases extra para el contenedor (ej. max-w-3xl, p-8) */
  className?: string
  /** Si true, muestra la barra de gradiente superior en colores La Neta */
  withAccentBar?: boolean
  /** light = fondo claro (default). dark = fondo oscuro estilo Hook Hunter */
  variant?: 'light' | 'dark'
}

export function FloatingCard({
  children,
  className = '',
  withAccentBar = true,
  variant = 'light',
}: FloatingCardProps) {
  const isDark = variant === 'dark'

  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl
        ${isDark
          ? 'bg-slate-900/90 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm text-slate-200'
          : 'bg-[var(--laneta-bg)]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2),0_8px_25px_-8px_rgba(0,0,0,0.1)] ring-1 ring-white/20 backdrop-blur-sm'}
        ${className}
      `}
    >
      {withAccentBar && (
        <div
          className="h-1 w-full shrink-0"
          style={{
            background: `linear-gradient(90deg, var(--laneta-purple), var(--laneta-pink), var(--laneta-blue))`,
          }}
          aria-hidden
        />
      )}
      <div className={`relative p-6 md:p-8 ${isDark ? 'text-slate-200' : ''}`}>{children}</div>
    </article>
  )
}
