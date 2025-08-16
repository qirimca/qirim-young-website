import { ArrowRight, Globe, Users, Code } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden hero-section">
      {/* Ornek pattern background */}
      <div className="absolute inset-0 ornek-pattern opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-amber/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-crimean-200">
              <div className="w-2 h-2 bg-accent-amber rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-crimean-700">UNESCO Tanınan Miras</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-crimean-head leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl text-crimean-700 max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
                <span className="block mt-2 text-lg text-crimean-600">
                  {t('hero.description')}
                </span>
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold font-crimean-head">10K+</div>
                <div className="text-sm text-crimean-600">{t('hero.stats.language')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold font-crimean-head">50+</div>
                <div className="text-sm text-crimean-600">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold font-crimean-head">15+</div>
                <div className="text-sm text-crimean-600">{t('hero.stats.volunteers')}</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>{t('hero.learnMore')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#donate"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>{t('hero.cta')}</span>
              </a>
            </div>

            {/* Awards */}
            <div className="pt-8 border-t border-crimean-200">
              <p className="text-sm text-crimean-600 mb-3">Tanınan ve Taqdirlenen</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2 text-sm text-crimean-700">
                  <div className="w-8 h-8 bg-accent-amber rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span>Europeana 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-crimean-700">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span>Google Translate</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-crimean-700">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span>UNESCO Tanınan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for cultural image */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-600/20 to-crimean-400/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-accent-amber rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-white font-crimean-head">Q</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-crimean-head text-crimean-800">Digital Heritage</div>
                    <div className="text-sm text-crimean-600">Connecting Past & Future</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-fade-in animation-delay-500">
                <Globe className="w-8 h-8 text-accent-gold" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-amber rounded-full flex items-center justify-center animate-fade-in animation-delay-700">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection