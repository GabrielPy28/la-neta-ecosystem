/**
 * Page 4: The Hook Hunter — high-performing hooks system.
 * Variants: The Amplifier & The Empire Mode.
 * Liquid Glass background with Hook Hunter palette (amber, emerald, orange).
 */

import { LiquidGlassBackground } from '../components/LiquidGlassBackground'
import { Footer } from '../components/Footer'
import { ServicePresentationSection } from '../sections/theHookHunter/ServicePresentationSection'
import { ProductValueSection } from '../sections/theHookHunter/ProductValueSection'
import { UGCTalentsSection } from '../sections/theHookHunter/UGCTalentsSection'
import { PackIncludesSection } from '../sections/theHookHunter/PackIncludesSection'
import { RoadmapSection } from '../sections/theHookHunter/RoadmapSection'
import { LetsWorkTogetherSection } from '../sections/theAdFactory/LetsWorkTogetherSection'

export function TheHookHunterPage() {
  return (
    <>
      <LiquidGlassBackground variant="hookHunter" />

      <div className="relative z-10">
        <main className="min-h-screen">
          <div className="mx-auto max-w-6xl space-y-16 px-6 py-24 md:px-8 xl:max-w-7xl">
            {/* Change variant="1" | "2" | "3" | "4" */}
            <div id="service-presentation" className="scroll-mt-24">
              <ServicePresentationSection variant="1" />
            </div>
            <div id="product-value" className="scroll-mt-24">
              <ProductValueSection />
            </div>
            <div id="ugc-talents" className="scroll-mt-24">
              <UGCTalentsSection />
            </div>
            <div id="pack-includes" className="scroll-mt-24">
              <PackIncludesSection />
            </div>
            <div id="roadmap" className="scroll-mt-24">
              <RoadmapSection />
            </div>
            <div id="lets-work-together" className="scroll-mt-24">
              <LetsWorkTogetherSection variant="hookHunter" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
