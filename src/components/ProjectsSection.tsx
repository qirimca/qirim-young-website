import { ExternalLink, Github, Globe, Baby, Keyboard, Gamepad2, Book } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Google Translate Integration',
      titleCrh: 'Google Translate Entegrasyonu',
      category: 'Language Technology',
      categoryCrh: 'Dil Teknolojisi',
      description: 'Qırımtatar dilini Google Translate\'e entegre etme projesi ile milyonlarca kullanıcıya ulaştık.',
      descriptionEn: 'Integrated Crimean Tatar language into Google Translate, reaching millions of users worldwide.',
      icon: Globe,
      status: 'completed',
      impact: '10M+ Users',
      tech: ['AI/ML', 'NLP', 'Translation'],
      links: {
        demo: 'https://translate.google.com',
        github: null
      },
      featured: true
    },
    {
      id: 2,
      title: 'BÜLBÜL Education Platform',
      titleCrh: 'BÜLBÜL Eğitim Platformu',
      category: 'Education',
      categoryCrh: 'Eğitim',
      description: '0-5 yaş arası çocuklar için etkileşimli Qırımtatar dil öğrenme platformu.',
      descriptionEn: 'Interactive Crimean Tatar language learning platform for children aged 0-5.',
      icon: Baby,
      status: 'active',
      impact: '5K+ Children',
      tech: ['React', 'WebGL', 'Audio API'],
      links: {
        demo: 'https://bulbul.qirimtatarca.org',
        github: null
      },
      featured: true
    },
    {
      id: 3,
      title: 'Crimean Tatar Wordle',
      titleCrh: 'Qırımtatar Wordle',
      category: 'Gaming',
      categoryCrh: 'Oyunlar',
      description: 'Popüler Wordle oyununu Qırımtatar diline uyarladığımız eğlenceli kelime oyunu.',
      descriptionEn: 'Adaptation of the popular Wordle game for Crimean Tatar language learning.',
      icon: Gamepad2,
      status: 'completed',
      impact: '25K+ Players',
      tech: ['React', 'TypeScript', 'PWA'],
      links: {
        demo: 'https://wordle.qirimtatarca.org',
        github: 'https://github.com/qirimca/react-wordle-crimean-tatar'
      },
      featured: false
    },
    {
      id: 4,
      title: 'iOS/macOS Keyboards',
      titleCrh: 'iOS/macOS Klavyeleri',
      category: 'Mobile Apps',
      categoryCrh: 'Mobil Uygulamalar',
      description: 'Apple cihazları için Qırımtatar dil desteğini sağlayan klavye uygulamaları.',
      descriptionEn: 'Keyboard applications providing Crimean Tatar language support for Apple devices.',
      icon: Keyboard,
      status: 'active',
      impact: '15K+ Downloads',
      tech: ['Swift', 'iOS SDK', 'macOS'],
      links: {
        demo: 'https://apps.apple.com',
        github: null
      },
      featured: false
    },
    {
      id: 5,
      title: 'Digital Dictionary',
      titleCrh: 'Dijital Sözlük',
      category: 'Reference',
      categoryCrh: 'Referans',
      description: 'Kapsamlı Qırımtatar-Türkçe-İngilizce dijital sözlük projesi.',
      descriptionEn: 'Comprehensive Crimean Tatar-Turkish-English digital dictionary project.',
      icon: Book,
      status: 'development',
      impact: 'Coming Soon',
      tech: ['Next.js', 'Database', 'API'],
      links: {
        demo: null,
        github: null
      },
      featured: false
    },
    {
      id: 6,
      title: 'Speech Recognition',
      titleCrh: 'Ses Tanıma',
      category: 'AI/ML',
      categoryCrh: 'Yapay Zeka',
      description: 'Qırımtatar dili için geliştirilmekte olan ses tanıma ve metne dönüştürme sistemi.',
      descriptionEn: 'Speech recognition and text-to-speech system being developed for Crimean Tatar.',
      icon: Globe,
      status: 'development',
      impact: 'In Progress',
      tech: ['Python', 'TensorFlow', 'Audio Processing'],
      links: {
        demo: null,
        github: null
      },
      featured: true
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600 text-white'
      case 'active': return 'bg-blue-600 text-white'
      case 'development': return 'bg-yellow-600 text-white'
      default: return 'bg-crimean-200 text-crimean-700'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Tamamlandı'
      case 'active': return 'Aktif'
      case 'development': return 'Geliştiriliyor'
      default: return 'Planlı'
    }
  }

  return (
    <section id="projects" className="py-24 bg-crimean-50">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-crimean-700">Loyihalarımız</span>
            <span className="text-xs text-crimean-500">Our Projects</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-crimean-800 font-crimean-head">
            Dijital İnnovatsiya ile
            <span className="block text-blue-600">Medeniıetni Yaşatmaq</span>
          </h2>
          
          <p className="text-xl text-crimean-600 max-w-3xl mx-auto leading-relaxed">
            Qırımtatar dilini ve medeniıetini modern teknolojiler ile birleştirerek, 
            gelecek nesillere aktarmak için yenilikçi projeler geliştiriyoruz.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-crimean-800 font-crimean-head mb-8 flex items-center">
            <div className="w-1 h-6 bg-yellow-600 rounded mr-3"></div>
            Öne Çıkan Projeler
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => {
              const IconComponent = project.icon
              return (
                <div key={project.id} className="card group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-crimean-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-crimean-800 font-crimean-head">
                          {project.titleCrh}
                        </h4>
                        <p className="text-sm text-yellow-600 font-medium">
                          {project.title}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {getStatusText(project.status)}
                          </span>
                          <span className="text-xs text-crimean-500">
                            {project.categoryCrh}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-crimean-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium text-crimean-800">Etki: </span>
                        <span className="text-yellow-600 font-semibold">{project.impact}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-600/90 transition-colors"
                            aria-label="View demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-crimean-700 text-white rounded-lg hover:bg-crimean-800 transition-colors"
                            aria-label="View source code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-crimean-100 text-crimean-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-crimean-800 font-crimean-head mb-8 flex items-center">
            <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
            Tüm Projeler
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => {
              const IconComponent = project.icon
              return (
                <div key={project.id} className="card group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-crimean-400 to-crimean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-crimean-800 font-crimean-head truncate">
                        {project.titleCrh}
                      </h4>
                      <p className="text-xs text-crimean-500">
                        {project.categoryCrh}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-crimean-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                    <span className="text-xs text-yellow-600 font-semibold">
                      {project.impact}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-crimean-800 font-crimean-head mb-4">
            Bizimle Birlikte Çalışın
          </h3>
          <p className="text-crimean-600 mb-6 max-w-2xl mx-auto">
            Qırımtatar medeniıetinin dijital gelecegini birlikte şekillendirelim. 
            Projelerimize katılın veya yeni fikirlerinizi bizimle paylaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@qirimtatarca.org" className="btn-primary">
              İletişime Geçin
            </a>
            <a href="https://github.com/qirimca" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GitHub'da İnceleyin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection