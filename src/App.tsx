import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { WhoIsLaNeta } from './sections/WhoIsLaNeta'
import { BranchOfficeLocations } from './sections/BranchOfficeLocations'
import { PartnershipsAlliances } from './sections/PartnershipsAlliances'
import { ServicesCTA } from './sections/ServicesCTA'
import { LetsWorkTogetherSection } from './sections/theAdFactory/LetsWorkTogetherSection'
import { TheAdFactoryPage } from './pages/TheAdFactoryPage'
import { TheGlitchPage } from './pages/TheGlitchPage'
import { TheHookHunterPage } from './pages/TheHookHunterPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhoIsLaNeta />
              <BranchOfficeLocations />
              <ServicesCTA />
              <PartnershipsAlliances />
              <div className="bg-[var(--laneta-bg)] py-16 md:py-20">
                <LetsWorkTogetherSection variant="global" />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/the-ad-factory" element={<TheAdFactoryPage />} />
        <Route path="/the-glitch" element={<TheGlitchPage />} />
        <Route path="/the-hook-hunter" element={<TheHookHunterPage />} />
      </Routes>
    </>
  )
}

export default App
