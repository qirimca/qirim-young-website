import { BarChart, Users, Globe, Award } from 'lucide-react'

const ImpactSection = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Kullanıcı', labelEn: 'Users', color: 'heritage-gold' },
    { icon: Globe, value: '15+', label: 'Ülke', labelEn: 'Countries', color: 'heritage-sky' },
    { icon: Award, value: '10+', label: 'Ödül', labelEn: 'Awards', color: 'heritage-forest' },
    { icon: BarChart, value: '1M+', label: 'Etkileşim', labelEn: 'Interactions', color: 'heritage-crimson' }
  ]

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-crimean-800 font-crimean-head mb-6">
            Tesirımız
          </h2>
          <p className="text-xl text-crimean-600 max-w-3xl mx-auto">
            Dünya çapında Qırımtatar medeniıetinin dijital varlıgını güçlendiriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center card">
                <div className={`w-16 h-16 bg-${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-crimean-800 font-crimean-head mb-2">
                  {stat.value}
                </div>
                <div className="text-crimean-600">
                  {stat.label} <span className="text-sm text-crimean-500">({stat.labelEn})</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection