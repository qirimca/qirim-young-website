import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load non-critical components for performance
const AboutSection = lazy(() => import('./components/AboutSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ImpactSection = lazy(() => import('./components/ImpactSection'))
const DonateSection = lazy(() => import('./components/DonateSection'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-crimean-50 font-crimean">
      {/* Critical above-the-fold content */}
      <Navbar />
      <main>
        {/* Hero section loads immediately */}
        <HeroSection />
        
        {/* Non-critical sections load lazily */}
        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
          <ProjectsSection />
          <ImpactSection />
          <DonateSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
