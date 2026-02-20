/**
 * Page 2: The Ad Factory — business model detail.
 * Content always on floating cards, light colors and La Neta palette.
 */
import { LiquidGlassBackground } from '../components/LiquidGlassBackground'
import { Footer } from '../components/Footer'
import { ServicePresentationSection } from '../sections/theAdFactory/ServicePresentationSection'
import { ProblemsVsSolutionsSection } from '../sections/theAdFactory/ProblemsVsSolutionsSection'
import { ModusOperandiSection } from '../sections/theAdFactory/ModusOperandiSection'
import { RoadmapSection } from '../sections/theAdFactory/RoadmapSection'
import { LetsWorkTogetherSection } from '../sections/theAdFactory/LetsWorkTogetherSection'

export function TheAdFactoryPage() {
  return (
    <>
      <LiquidGlassBackground variant="servicesLight" />

      <div className="relative z-10">
        <main className="min-h-screen">
          <div className="mx-auto max-w-6xl space-y-16 px-6 py-24 md:px-8 xl:max-w-7xl">
            <div id="service-presentation" className="scroll-mt-24">
              <ServicePresentationSection />
            </div>
            <div id="problems-vs-solutions" className="scroll-mt-24">
              <ProblemsVsSolutionsSection />
            </div>
            <div id="modus-operandi" className="scroll-mt-24">
              <ModusOperandiSection />
            </div>
            <div id="roadmap" className="scroll-mt-24">
              <RoadmapSection />
            </div>
            <div id="lets-work-together" className="scroll-mt-24">
              <LetsWorkTogetherSection />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
