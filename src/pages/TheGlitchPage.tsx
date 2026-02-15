/**
 * Page 3: The Glitch — AI-generated influencers as a service (SaaS).
 * Same Liquid Glass background with Glitch color variant (cyan/blue/pink).
 */

import { LiquidGlassBackground } from '../components/LiquidGlassBackground'
import { Footer } from '../components/Footer'
import { ServicePresentationSection } from '../sections/theGlitch/ServicePresentationSection'
import { ProductValueSection } from '../sections/theGlitch/ProductValueSection'
import { AIAgentVideosSection } from '../sections/theGlitch/AIAgentVideosSection'
import { PackIncludesSection } from '../sections/theGlitch/PackIncludesSection'
import { RoadmapSection } from '../sections/theGlitch/RoadmapSection'
import { LetsWorkTogetherSection } from '../sections/theAdFactory/LetsWorkTogetherSection'

export function TheGlitchPage() {
  return (
    <>
      <LiquidGlassBackground variant="glitch" />

      <div className="relative z-10">
        <main className="min-h-screen">
          <div className="mx-auto max-w-6xl space-y-16 px-6 py-24 md:px-8 xl:max-w-7xl">
            <div id="service-presentation" className="scroll-mt-24">
              <ServicePresentationSection />
            </div>
            <div id="product-value" className="scroll-mt-24">
              <ProductValueSection />
            </div>
            <div id="ai-agent-videos" className="scroll-mt-24">
              <AIAgentVideosSection />
            </div>
            <div id="pack-includes" className="scroll-mt-24">
              <PackIncludesSection />
            </div>
            <div id="roadmap" className="scroll-mt-24">
              <RoadmapSection />
            </div>
            <div id="lets-work-together" className="scroll-mt-24">
              <LetsWorkTogetherSection variant="glitch" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
