import { FileText, DollarSign, Users, Award, ExternalLink, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TransparencySection = () => {

  const transparencyMetrics = [
    {
      icon: DollarSign,
      title: "Financial Transparency",
      value: "100%",
      description: "Open financial reporting with quarterly updates",
      color: "accent"
    },
    {
      icon: Users,
      title: "Board Diversity",
      value: "7",
      description: "Board members from 5 countries",
      color: "primary"
    },
    {
      icon: Award,
      title: "Project Success Rate",
      value: "94%",
      description: "Projects completed on time and budget",
      color: "heritage"
    },
    {
      icon: FileText,
      title: "Open Documentation",
      value: "24/7",
      description: "Public access to all policies and reports",
      color: "accent-warm"
    }
  ]

  const documents = [
    {
      title: "Annual Report 2024",
      type: "Annual Report",
      size: "2.4 MB",
      updated: "January 2025",
      downloadUrl: "#"
    },
    {
      title: "Financial Statements 2024",
      type: "Financial Report",
      size: "1.8 MB", 
      updated: "December 2024",
      downloadUrl: "#"
    },
    {
      title: "IRS Form 990",
      type: "Tax Document",
      size: "890 KB",
      updated: "November 2024",
      downloadUrl: "#"
    },
    {
      title: "Governance Policies",
      type: "Policy Document",
      size: "1.2 MB",
      updated: "October 2024",
      downloadUrl: "#"
    }
  ]

  const thirdPartyRatings = [
    {
      organization: "GuideStar",
      rating: "Platinum Seal",
      description: "Highest level of transparency",
      logo: "🌟"
    },
    {
      organization: "Charity Navigator",
      rating: "4 Stars",
      description: "Exceptional financial health",
      logo: "⭐"
    },
    {
      organization: "BBB Wise Giving",
      rating: "Accredited",
      description: "Meets all 20 standards",
      logo: "✅"
    }
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
        return 'from-primary-500 to-primary-600'
      case 'accent':
        return 'from-accent-400 to-accent-500'
      case 'accent-warm':
        return 'from-accent-warm-400 to-accent-warm-500'
      case 'heritage':
        return 'from-yellow-500 to-orange-700'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section className="py-20 bg-white">
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
            Transparency & Accountability
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We believe in complete transparency. See exactly how your donations make an impact
            and how we operate as a responsible nonprofit organization.
          </p>
        </motion.div>

        {/* Transparency Metrics */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {transparencyMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            const colorClasses = getColorClasses(metric.color)
            
            return (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colorClasses} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-text-primary mb-2 font-crimean-head">
                  {metric.value}
                </h3>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {metric.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {metric.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Documents and Third-Party Ratings */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-crimean-head text-text-primary mb-6">
              Public Documents
            </h3>
            
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-background-50 rounded-lg p-4 hover:bg-primary-50 transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                          {doc.title}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm text-text-secondary">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Updated {doc.updated}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      className="p-2 text-text-secondary hover:text-primary-600 hover:bg-primary-100 rounded-lg transition-all duration-200"
                      aria-label={`Download ${doc.title}`}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link 
              to="/transparency"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mt-6 group"
            >
              <span>View All Documents</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Third-Party Ratings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-crimean-head text-text-primary mb-6">
              Third-Party Ratings
            </h3>
            
            <div className="space-y-6">
              {thirdPartyRatings.map((rating, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{rating.logo}</div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-1">
                        {rating.organization}
                      </h4>
                      <div className="text-lg font-semibold text-accent-600 mb-1">
                        {rating.rating}
                      </div>
                      <p className="text-text-secondary text-sm">
                        {rating.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Callout */}
            <motion.div 
              className="mt-8 bg-gradient-to-br from-yellow-500/10 to-accent-400/10 rounded-xl p-6 border border-yellow-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-lg font-bold text-text-primary mb-3 font-crimean-head">
                Your Impact Matters
              </h4>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                100% of your donations go directly to language preservation projects. 
                Operating costs are covered by grants and partnerships.
              </p>
              <Link 
                to="/impact"
                className="inline-flex items-center space-x-2 text-accent-500 hover:text-orange-700 font-medium group"
              >
                <span>See Our Impact</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TransparencySection