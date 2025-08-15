import { motion } from 'framer-motion'
import { Database, Users, Award, Target, Heart, Globe, Lightbulb, Shield } from 'lucide-react'

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const achievements = [
    {
      year: '2022',
      title: 'National Corpus Launch',
      description: 'Successfully launched the first National Corpus of Crimean Tatar Language with over 1 million words',
      icon: Database
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Gained recognition from East Europe Foundation and international linguistic community',
      icon: Award
    },
    {
      year: '2023',
      title: 'Academic Partnerships',
      description: 'Established collaborations with Taras Shevchenko National University of Kyiv',
      icon: Users
    },
    {
      year: '2024',
      title: 'Research Expansion',
      description: 'Expanded into parallel corpus development and machine translation research',
      icon: Target
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Scientific Approach',
      description: 'We apply rigorous scientific methodologies in corpus linguistics and computational language research.'
    },
    {
      icon: Globe,
      title: 'Open Source Philosophy', 
      description: 'Our tools and datasets are freely available to researchers and the global Crimean Tatar community.'
    },
    {
      icon: Users,
      title: 'Community Collaboration',
      description: 'We work closely with native speakers, educators, and cultural organizations worldwide.'
    },
    {
      icon: Heart,
      title: 'Cultural Respect',
      description: 'Every project honors Crimean Tatar heritage while building bridges to the digital future.'
    },
    {
      icon: Shield,
      title: 'Technical Excellence',
      description: 'We maintain high standards in software development and linguistic data processing.'
    }
  ]

  const partners = [
    {
      name: 'East Europe Foundation',
      role: 'EGAP Program Support',
      description: 'Funding and institutional support for the National Corpus project'
    },
    {
      name: 'Taras Shevchenko National University of Kyiv',
      role: 'Academic Partner',
      description: 'Research collaboration and linguistic expertise'
    },
    {
      name: 'Ministry of Reintegration of Ukraine',
      role: 'Government Partner',
      description: 'Policy support and strategic guidance for language preservation'
    },
    {
      name: 'Representative Office of the President in ARC',
      role: 'Institutional Support',
      description: 'Official recognition and administrative backing'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold font-crimean-head text-text-primary mb-6">
            About QIRI'M YOUNG
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            A Ukrainian nonprofit organization dedicated to developing digital infrastructure 
            for the Crimean Tatar language through cutting-edge research in corpus linguistics, 
            machine translation, and educational technology.
          </p>
        </motion.div>

        {/* Mission, Vision, Impact */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 mb-20"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-crimean-head">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              We develop digital infrastructure for the Crimean Tatar language through corpus linguistics, 
              machine translation, and educational technologies. Our work ensures linguistic data preservation 
              and creates tools for language learning and research.
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-crimean-head">Our Vision</h2>
            <p className="text-text-secondary leading-relaxed">
              A digitally empowered Crimean Tatar language that thrives in modern technology ecosystems, 
              from search engines to AI applications, supporting speakers worldwide and ensuring 
              intergenerational transmission.
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent-warm-400 to-accent-warm-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-crimean-head">Our Impact</h2>
            <p className="text-text-secondary leading-relaxed">
              Since 2020, we've built the first National Corpus with 1M+ words, collaborated with 30+ contributors, 
              and created digital tools used by researchers worldwide. Our work supports UNESCO's efforts 
              to preserve endangered languages.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6 font-crimean-head">Our Story</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  QIRI'M YOUNG was founded by young Ukrainian activists passionate about preserving 
                  the Crimean Tatar language through modern technology. Recognizing that UNESCO 
                  classified Crimean Tatar as critically endangered, with only 20-25% of Crimean 
                  Tatars in Ukraine being fluent speakers, we knew urgent action was needed.
                </p>
                <p>
                  Our approach combines traditional linguistic research with innovative digital methods. 
                  Rather than simply archiving texts, we build interactive platforms that serve researchers, 
                  educators, and language learners. Our National Corpus project, launched in 2022, 
                  became Ukraine's first comprehensive digital database of Crimean Tatar texts.
                </p>
                <p>
                  Today, we continue expanding our work into machine translation, parallel corpus development, 
                  and educational resources. Every project reflects our commitment to scientific rigor, 
                  community collaboration, and respect for Crimean Tatar cultural heritage.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-text-primary mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Founded</span>
                      <span className="font-semibold text-text-primary">2020</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Location</span>
                      <span className="font-semibold text-text-primary">Ukraine</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Team Size</span>
                      <span className="font-semibold text-text-primary">30+ Contributors</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Focus Area</span>
                      <span className="font-semibold text-text-primary">Language Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Key Milestones
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center ${!isEven ? 'order-last' : ''}`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className={!isEven ? 'text-right' : ''}>
                            <h3 className="text-lg font-bold text-text-primary">{achievement.title}</h3>
                            <p className="text-accent-600 font-medium">{achievement.year}</p>
                          </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-bold text-text-primary mb-2">{partner.name}</h3>
                <p className="text-accent-600 font-medium mb-3">{partner.role}</p>
                <p className="text-text-secondary leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Join Our Mission
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Be part of the digital revolution preserving and empowering the Crimean Tatar language 
            for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved#volunteer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Get Involved
            </a>
            <a
              href="/projects"
              className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Database className="w-5 h-5" />
              Explore Projects
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}