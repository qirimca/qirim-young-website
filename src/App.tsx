import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ImpactPage = lazy(() => import('./pages/ImpactPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'))
const TransparencyPage = lazy(() => import('./pages/TransparencyPage'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const { i18n } = useTranslation()
  
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 text-amber-900" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} style={{fontFamily: "'e-Ukraine', system-ui, -apple-system, sans-serif"}}>
        {/* Critical above-the-fold content */}
        <Navbar />
        <main>
          {/* Page routes with lazy loading */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/transparency" element={<TransparencyPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
