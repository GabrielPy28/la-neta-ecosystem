import { type ReactNode } from 'react'

/**
 * Tarjeta flotante para páginas de servicio (The Ad Factory, etc.).
 * Siempre visible, colores claros, acentos con la paleta La Neta.
 * Usar para envolver cada sección/contenido en la página.
 */
type FloatingCardProps = {
  children: ReactNode
  /** Clases extra para el contenedor (ej. max-w-3xl, p-8) */
  className?: string
  /** Si true, muestra la barra de gradiente superior en colores La Neta */
  withAccentBar?: boolean
}

export function FloatingCard({
  children,
  className = '',
  withAccentBar = true,
}: FloatingCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl
        bg-[var(--laneta-bg)]/95
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2),0_8px_25px_-8px_rgba(0,0,0,0.1)]
        ring-1 ring-white/20
        backdrop-blur-sm
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
      <div className="relative p-6 md:p-8">{children}</div>
    </article>
  )
}
