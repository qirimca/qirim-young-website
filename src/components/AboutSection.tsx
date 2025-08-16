import { Target, Heart, Users, Globe2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const AboutSection = () => {
  const { t } = useTranslation()
  const values = [
    {
      icon: Target,
      title: t('about.coreValues.mission.title'),
      description: t('about.coreValues.mission.description')
    },
    {
      icon: Heart,
      title: t('about.coreValues.passion.title'),
      description: t('about.coreValues.passion.description')
    },
    {
      icon: Users,
      title: t('about.coreValues.unity.title'),
      description: t('about.coreValues.unity.description')
    },
    {
      icon: Globe2,
      title: t('about.coreValues.innovation.title'),
      description: t('about.coreValues.innovation.description')
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-crimean-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-accent-amber rounded-full"></div>
            <span className="text-sm font-medium text-crimean-700">{t('about.title')}</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-crimean-800 font-crimean-head">
            {t('about.subtitle')}
          </h2>
          
          <p className="text-xl text-crimean-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-crimean-800 font-crimean-head">
              Bizim Hikaye
            </h3>
            <div className="space-y-4 text-crimean-700 leading-relaxed">
              <p>
                2020 yılında başlayan yolculuğumuzda, dünyanın dört bir yanına dağılmış 
                Qırımtatar yaşları dijital teknolojiler sayesinde bir araya getirme vizyonu ile 
                yola çıktık.
              </p>
              <p>
                Hatathon 2024'te Europeana Digital Heritage nominasyonunu kazanmamız, 
                çalışmalarımızın uluslararası düzeyde tanınmasının en büyük göstergesidir. 
                Google Translate'e Qırımtatar dil desteğinin entegrasyonu gibi projelerimiz 
                milyonlarca insana ulaşmaktadır.
              </p>
              <p>
                Bugün, BÜLBÜL eğitim platformumuzdan Apple cihazları için geliştirdiğimiz 
                klavyelere kadar geniş bir yelpazede projeler yürütmekteyiz.
              </p>
            </div>
            
            {/* Key Achievements */}
            <div className="bg-crimean-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-crimean-800 mb-3">Başarılarımız</h4>
              <ul className="space-y-2 text-crimean-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-amber rounded-full"></div>
                  <span>Europeana 2024 Dijital Miras Nominasyonu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-amber rounded-full"></div>
                  <span>Google Translate Qırımtatar Dil Entegrasyonu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-amber rounded-full"></div>
                  <span>BÜLBÜL Eğitim Platformu (0-5 yaş)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-amber rounded-full"></div>
                  <span>Apple Cihazları için Qırımtatar Klavyeler</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual representation */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-crimean-100 to-yellow-600/10 rounded-3xl p-8 border border-crimean-200">
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-20 h-20 bg-accent-amber rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-crimean-800 font-crimean-head">Global Impact</h4>
                  <p className="text-crimean-600">Dünya çapında 15+ ülkede etki yaratıyoruz</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent-gold">50K+</div>
                    <div className="text-xs text-crimean-500">Ulaşılan Kişi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent-gold">100+</div>
                    <div className="text-xs text-crimean-500">Ortaklar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-crimean-800 font-crimean-head mb-12">
            Değerlerimiz
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="card text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-crimean-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-crimean-800 font-crimean-head">
                      {value.title}
                    </h4>
                    <p className="text-sm text-accent-gold font-medium">
                      {value.titleEn}
                    </p>
                    <p className="text-crimean-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection