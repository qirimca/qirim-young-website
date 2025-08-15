import { lazy, Suspense } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load sections for optimal performance
const HeroSection = lazy(() => import('../components/HeroSection'))
const AboutSection = lazy(() => import('../components/AboutSection'))
const ProjectsSection = lazy(() => import('../components/ProjectsSection'))
const ImpactSection = lazy(() => import('../components/ImpactSection'))
const DonateSection = lazy(() => import('../components/DonateSection'))
const VolunteerSection = lazy(() => import('../components/VolunteerSection'))

export default function HomePage() {
  return (
    <>
      {/* Hero loads immediately for above-the-fold content */}
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      {/* Non-critical sections load lazily */}
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
        <ProjectsSection />
        <ImpactSection />
        <DonateSection />
        <VolunteerSection />
      </Suspense>
    </>
  )
}