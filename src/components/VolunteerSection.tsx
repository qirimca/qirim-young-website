import { Code, PenTool, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const VolunteerSection = () => {

  const volunteerOpportunities = [
    {
      icon: Code,
      title: "Software Developers",
      description: "Help build language tools, AI applications, and web platforms",
      skills: ["React", "Python", "AI/ML", "Mobile Development"],
      time: "5-10 hours/week",
      remote: true,
      color: "primary"
    },
    {
      icon: PenTool,
      title: "Linguists & Translators", 
      description: "Validate corpus data, create educational content, translate materials",
      skills: ["Crimean Tatar", "Linguistics", "Translation", "Education"],
      time: "3-8 hours/week",
      remote: true,
      color: "accent"
    },
    {
      icon: Users,
      title: "Community Managers",
      description: "Engage with diaspora communities, manage social media, organize events",
      skills: ["Social Media", "Event Planning", "Community Building"],
      time: "4-6 hours/week", 
      remote: true,
      color: "accent-warm"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Promote our projects, manage campaigns, create content strategies",
      skills: ["SEO", "Content Marketing", "Design", "Analytics"],
      time: "3-5 hours/week",
      remote: true,
      color: "heritage"
    }
  ]

  const benefits = [
    "Work with cutting-edge AI and language technology",
    "Make a direct impact on cultural preservation",
    "Flexible remote work opportunities",
    "Professional development and networking",
    "Recognition and certificates",
    "Access to exclusive resources and tools"
  ]

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary-500 to-primary-600 bg-primary-50 text-primary-600 border-primary-200'
      case 'accent':
        return 'from-accent-400 to-accent-500 bg-accent-50 text-accent-600 border-accent-200'
      case 'accent-warm':
        return 'from-accent-warm-400 to-accent-warm-500 bg-accent-warm-50 text-accent-warm-600 border-accent-warm-200'
      case 'heritage':
        return 'from-yellow-500 to-orange-700 bg-blue-500/10 text-orange-700 border-yellow-500/30'
      default:
        return 'from-gray-500 to-gray-600 bg-gray-50 text-gray-600 border-gray-200'
    }
  }

  return (
    <section className="py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-crimean-head text-text-primary mb-6">
            Join Our Global Community
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Help preserve Crimean Tatar heritage through your skills and passion. 
            Join 200+ volunteers from around the world making a difference.
          </p>
        </motion.div>

        {/* Volunteer Opportunities */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {volunteerOpportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon
            const colorClasses = getColorClasses(opportunity.color)
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3 font-crimean-head">
                  {opportunity.title}
                </h3>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {opportunity.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-2 py-1 text-xs rounded-full ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} ${colorClasses.split(' ')[4]}`}
                      >
                        {skill}
                      </span>
                    ))}
                    {opportunity.skills.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                        +{opportunity.skills.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-text-secondary space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span>{opportunity.time}</span>
                    </div>
                    {opportunity.remote && (
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>Remote friendly</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-3xl font-bold font-crimean-head text-text-primary mb-6">
              Why Volunteer With Us?
            </h3>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-primary-600 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-text-primary mb-2 font-crimean-head">
                    Ready to Make a Difference?
                  </h4>
                  <p className="text-text-secondary mb-6">
                    Join our community and help preserve a language for future generations.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Link 
                    to="/get-involved#volunteer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center space-x-2 w-full justify-center group"
                  >
                    <span>Apply to Volunteer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    to="/get-involved"
                    className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center w-full"
                  >
                    Learn More About Opportunities
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VolunteerSection