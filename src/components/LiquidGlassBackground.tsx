/**
 * Liquid Glass background — inspired by Apple's WWDC25 "Meet Liquid Glass".
 * Frosted, translucent layers; rounded floating forms; subtle organic motion;
 * lensing (soft light gradients). Base for The Ad Factory and service pages.
 */
import { motion } from 'motion/react'

const ORB_BASE_CLASS =
  'absolute rounded-full pointer-events-none will-change-transform'

type BackgroundVariant = 'ad-factory' | 'glitch' | 'hookHunter' | 'servicesLight'

/** The Hook Hunter — amber, emerald, warm orange (hooks / attention / catch). */
const HOOK_HUNTER_STYLES = {
  baseGradient:
    'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(251, 191, 36, 0.18) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 80% 80%, rgba(52, 211, 153, 0.12) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 20% 60%, rgba(249, 115, 22, 0.08) 0%, transparent 45%), var(--laneta-darker)',
  orbTopLeft: 'bg-gradient-to-br from-amber-400/20 to-emerald-400/10 backdrop-blur-[100px]',
  orbTopRight: 'bg-gradient-to-bl from-emerald-500/16 to-transparent backdrop-blur-[80px]',
  orbBottomLeft: 'bg-gradient-to-tr from-amber-400/12 to-orange-500/8 backdrop-blur-[90px]',
  orbBottomRight: 'bg-white/[0.05] backdrop-blur-[120px]',
  orbLeft: 'bg-gradient-to-r from-amber-400/14 to-transparent backdrop-blur-[85px]',
  orbRight: 'bg-gradient-to-l from-emerald-400/12 to-transparent backdrop-blur-[90px]',
  lensTop: 'radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)',
  lensBottom: 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)',
  lensCorner: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
}

const GLITCH_STYLES = {
  baseGradient:
    'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(121, 188, 247, 0.2) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 80% 80%, rgba(255, 71, 172, 0.12) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 20% 60%, rgba(0, 212, 255, 0.08) 0%, transparent 45%), var(--laneta-darker)',
  orbTopLeft: 'bg-gradient-to-br from-[var(--laneta-blue)]/20 to-cyan-400/10 backdrop-blur-[100px]',
  orbTopRight: 'bg-gradient-to-bl from-[var(--laneta-pink)]/16 to-transparent backdrop-blur-[80px]',
  orbBottomLeft: 'bg-gradient-to-tr from-cyan-400/12 to-[var(--laneta-pink)]/8 backdrop-blur-[90px]',
  orbBottomRight: 'bg-white/[0.06] backdrop-blur-[120px]',
  orbLeft: 'bg-gradient-to-r from-[var(--laneta-blue)]/14 to-transparent backdrop-blur-[85px]',
  orbRight: 'bg-gradient-to-l from-cyan-400/12 to-transparent backdrop-blur-[90px]',
  lensTop: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
  lensBottom: 'radial-gradient(circle, rgba(121,188,247,0.25) 0%, transparent 70%)',
  lensCorner: 'radial-gradient(circle, rgba(255,71,172,0.18) 0%, transparent 70%)',
}

const AD_FACTORY_STYLES = {
  baseGradient:
    'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(102, 65, 237, 0.18) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 80% 80%, rgba(255, 71, 172, 0.08) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 20% 60%, rgba(121, 188, 247, 0.06) 0%, transparent 45%), var(--laneta-darker)',
  orbTopLeft: 'bg-gradient-to-br from-[var(--laneta-purple)]/18 to-[var(--laneta-pink)]/8 backdrop-blur-[100px]',
  orbTopRight: 'bg-gradient-to-bl from-[var(--laneta-blue)]/14 to-transparent backdrop-blur-[80px]',
  orbBottomLeft: 'bg-gradient-to-tr from-[var(--laneta-pink)]/10 to-[var(--laneta-purple)]/6 backdrop-blur-[90px]',
  orbBottomRight: 'bg-white/[0.05] backdrop-blur-[120px]',
  orbLeft: 'bg-gradient-to-r from-[var(--laneta-purple)]/12 to-transparent backdrop-blur-[85px]',
  orbRight: 'bg-gradient-to-l from-[var(--laneta-blue)]/10 to-transparent backdrop-blur-[90px]',
  lensTop: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
  lensBottom: 'radial-gradient(circle, rgba(121,188,247,0.22) 0%, transparent 70%)',
  lensCorner: 'radial-gradient(circle, rgba(255,71,172,0.15) 0%, transparent 70%)',
}

/** Services page — light, friendly, La Neta palette with stronger blue & pink (darker tones). */
const SERVICES_LIGHT_STYLES = {
  baseGradient:
    'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(102, 65, 237, 0.14) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 80% 70%, rgba(200, 40, 130, 0.18) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 20% 80%, rgba(59, 130, 246, 0.22) 0%, transparent 45%), var(--laneta-bg)',
  orbTopLeft: 'bg-gradient-to-br from-[var(--laneta-purple)]/30 to-[var(--laneta-pink)]/22 backdrop-blur-[100px]',
  orbTopRight: 'bg-gradient-to-bl from-[#3b82f6]/50 to-transparent backdrop-blur-[80px]',
  orbBottomLeft: 'bg-gradient-to-tr from-[#d91a7a]/35 to-[var(--laneta-purple)]/18 backdrop-blur-[90px]',
  orbBottomRight: 'bg-white/50 backdrop-blur-[120px]',
  orbLeft: 'bg-gradient-to-r from-[var(--laneta-purple)]/22 to-transparent backdrop-blur-[85px]',
  orbRight: 'bg-gradient-to-l from-[#2563eb]/45 to-transparent backdrop-blur-[90px]',
  lensTop: 'radial-gradient(circle, rgba(102,65,237,0.18) 0%, transparent 70%)',
  lensBottom: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
  lensCorner: 'radial-gradient(circle, rgba(200,40,130,0.28) 0%, transparent 70%)',
}

const VARIANT_STYLES = {
  'ad-factory': AD_FACTORY_STYLES,
  glitch: GLITCH_STYLES,
  hookHunter: HOOK_HUNTER_STYLES,
  servicesLight: SERVICES_LIGHT_STYLES,
}

export function LiquidGlassBackground({ variant = 'ad-factory' }: { variant?: BackgroundVariant }) {
  const s = VARIANT_STYLES[variant]

  const isLight = variant === 'servicesLight'
  return (
    <div className={`fixed inset-0 overflow-hidden ${isLight ? 'bg-[var(--laneta-bg)]' : 'bg-[var(--laneta-darker)]'}`}>
      {/* Base gradient — deep with subtle brand tint */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: s.baseGradient }}
      />

      {/* Glass orbs — distribuidos en esquinas y laterales, sin concentrar en el centro */}
      {/* Esquina superior izquierda */}
      <motion.div
        className={`${ORB_BASE_CLASS} -left-[28%] -top-[12%] h-[55vmax] w-[55vmax] ${s.orbTopLeft}`}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Esquina superior derecha */}
      <motion.div
        className={`${ORB_BASE_CLASS} -right-[22%] -top-[8%] h-[50vmax] w-[50vmax] ${s.orbTopRight}`}
        animate={{
          x: [0, -18, 0],
          y: [0, 12, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Esquina inferior izquierda */}
      <motion.div
        className={`${ORB_BASE_CLASS} -left-[18%] -bottom-[18%] h-[52vmax] w-[52vmax] ${s.orbBottomLeft}`}
        animate={{
          x: [0, 12, 0],
          y: [0, -20, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Esquina inferior derecha */}
      <motion.div
        className={`${ORB_BASE_CLASS} -right-[15%] -bottom-[12%] h-[42vmax] w-[42vmax] ${s.orbBottomRight}`}
        animate={{
          x: [0, -15, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Borde izquierdo, mitad de altura */}
      <motion.div
        className={`${ORB_BASE_CLASS} -left-[20%] top-[38%] h-[38vmax] w-[38vmax] ${s.orbLeft}`}
        animate={{
          x: [0, 10, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Borde derecho, un poco más abajo */}
      <motion.div
        className={`${ORB_BASE_CLASS} -right-[18%] top-[58%] h-[35vmax] w-[35vmax] ${s.orbRight}`}
        animate={{
          x: [0, -10, 0],
          y: [0, 14, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Lensing — repartidos en esquinas, no en el centro */}
      <div
        className="absolute -left-[5%] top-[12%] h-[280px] w-[280px] rounded-full opacity-25"
        style={{ background: s.lensTop, filter: 'blur(40px)' }}
      />
      <div
        className="absolute -right-[5%] bottom-[18%] h-[240px] w-[240px] rounded-full opacity-20"
        style={{ background: s.lensBottom, filter: 'blur(50px)' }}
      />
      <div
        className="absolute left-[8%] -bottom-[8%] h-[200px] w-[200px] rounded-full opacity-15"
        style={{ background: s.lensCorner, filter: 'blur(35px)' }}
      />

      {/* Subtle grain overlay for depth (lighter on light variant) */}
      <div
        className={`absolute inset-0 mix-blend-soft-light ${isLight ? 'opacity-[0.015]' : 'opacity-[0.025]'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
