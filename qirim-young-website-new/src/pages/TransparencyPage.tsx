import { motion } from 'framer-motion'
import { FileText, Users, DollarSign, Shield, Eye, Download, ExternalLink, Calendar } from 'lucide-react'

export default function TransparencyPage() {

  const financialData = [
    {
      year: '2024',
      totalFunding: '€45,000',
      sources: [
        { name: 'EGAP Program (East Europe Foundation)', amount: '€35,000', percentage: '78%' },
        { name: 'Individual Donations', amount: '€6,000', percentage: '13%' },
        { name: 'Institutional Partnerships', amount: '€4,000', percentage: '9%' }
      ],
      expenses: [
        { category: 'Development & Research', amount: '€28,000', percentage: '62%' },
        { category: 'Infrastructure & Tools', amount: '€8,000', percentage: '18%' },
        { category: 'Community Outreach', amount: '€5,000', percentage: '11%' },
        { category: 'Administrative Costs', amount: '€4,000', percentage: '9%' }
      ]
    },
    {
      year: '2023',
      totalFunding: '€32,000',
      sources: [
        { name: 'EGAP Program', amount: '€24,000', percentage: '75%' },
        { name: 'Academic Partnerships', amount: '€5,000', percentage: '16%' },
        { name: 'Community Contributions', amount: '€3,000', percentage: '9%' }
      ],
      expenses: [
        { category: 'Corpus Development', amount: '€20,000', percentage: '63%' },
        { category: 'Technology Infrastructure', amount: '€6,000', percentage: '19%' },
        { category: 'Research Activities', amount: '€4,000', percentage: '12%' },
        { category: 'Operations', amount: '€2,000', percentage: '6%' }
      ]
    }
  ]

  const governanceStructure = [
    {
      role: 'Project Director',
      responsibilities: ['Strategic planning and vision', 'Partnership development', 'Grant management', 'External representation'],
      accountability: 'Reports to Board of Advisors and funding partners'
    },
    {
      role: 'Technical Lead',
      responsibilities: ['Software development oversight', 'Technical architecture', 'Open source management', 'Quality assurance'],
      accountability: 'Reports to Project Director, commits tracked on GitHub'
    },
    {
      role: 'Research Coordinator',
      responsibilities: ['Linguistic research supervision', 'Academic partnerships', 'Publication coordination', 'Community engagement'],
      accountability: 'Reports to Project Director, research outputs public'
    },
    {
      role: 'Community Manager',
      responsibilities: ['Volunteer coordination', 'Social media management', 'Event organization', 'User support'],
      accountability: 'Reports to Project Director, activities documented publicly'
    }
  ]

  const achievements = [
    {
      metric: 'Open Source Transparency',
      value: '100%',
      description: 'All code, documentation, and development processes are publicly available on GitHub',
      verification: 'https://github.com/qirimca'
    },
    {
      metric: 'Academic Publications',
      value: '12+',
      description: 'Peer-reviewed papers and research outputs available in academic repositories',
      verification: 'Academic databases and institutional repositories'
    },
    {
      metric: 'Partnership Agreements',
      value: '5+',
      description: 'Formal agreements with universities and institutions publicly documented',
      verification: 'Partnership pages and institutional websites'
    },
    {
      metric: 'Community Contributions',
      value: '30+',
      description: 'Contributors from Ukraine and worldwide with publicly tracked contributions',
      verification: 'GitHub contributor statistics and community pages'
    }
  ]

  const reports = [
    {
      title: '2024 Annual Impact Report',
      date: '2024-12-31',
      type: 'Annual Report',
      description: 'Comprehensive overview of achievements, financial summary, and future planning for 2024.',
      status: 'Coming Soon',
      icon: FileText
    },
    {
      title: '2023 Project Completion Report',
      date: '2023-12-31',
      type: 'Annual Report',
      description: 'Detailed analysis of National Corpus completion, partnership outcomes, and community growth.',
      status: 'Available',
      icon: FileText
    },
    {
      title: 'EGAP Grant Usage Report',
      date: '2024-06-30',
      type: 'Financial Report',
      description: 'Mid-year financial transparency report for East Europe Foundation EGAP program funding.',
      status: 'Available',
      icon: DollarSign
    },
    {
      title: 'Open Source Development Summary',
      date: '2024-09-30',
      type: 'Technical Report',
      description: 'Quarterly summary of GitHub activities, code contributions, and technical milestones.',
      status: 'Available',
      icon: Shield
    }
  ]

  const ethicalCommitments = [
    {
      principle: 'Open Source First',
      description: 'All software tools and datasets are released under open source licenses, ensuring community benefit and transparency.',
      implementation: 'GitHub repositories with clear licensing, public documentation, and contribution guidelines'
    },
    {
      principle: 'Cultural Respect',
      description: 'We work closely with Crimean Tatar communities to ensure authentic representation and cultural sensitivity.',
      implementation: 'Community advisory board, native speaker involvement, and respectful content guidelines'
    },
    {
      principle: 'Academic Integrity',
      description: 'All research follows strict academic standards with proper attribution, peer review, and ethical guidelines.',
      implementation: 'University partnerships, peer-reviewed publications, and research ethics compliance'
    },
    {
      principle: 'Financial Transparency',
      description: 'Complete disclosure of funding sources, expenses, and financial decision-making processes.',
      implementation: 'Public financial reports, grant documentation, and expense tracking systems'
    },
    {
      principle: 'Community Accountability',
      description: 'Regular reporting to stakeholders, open communication channels, and responsive governance.',
      implementation: 'Public progress updates, community feedback systems, and transparent decision-making'
    }
  ]


  return (
    <div className="min-h-screen py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold font-crimean-head text-text-primary mb-6">
            Transparency & Accountability
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We believe in complete transparency about our mission, operations, and impact. 
            Here you'll find our financial reports, governance structure, and accountability measures.
          </p>
        </motion.div>

        {/* Financial Transparency */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Financial Transparency
          </h2>
          
          <div className="space-y-12">
            {financialData.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-primary-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{yearData.year} Financial Summary</h3>
                    <p className="text-accent-600 font-medium">Total Funding: {yearData.totalFunding}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Funding Sources</h4>
                    <div className="space-y-3">
                      {yearData.sources.map((source, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                          <div>
                            <div className="font-medium text-text-primary">{source.name}</div>
                            <div className="text-sm text-text-secondary">{source.percentage} of total</div>
                          </div>
                          <div className="font-bold text-primary-600">{source.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Expense Breakdown</h4>
                    <div className="space-y-3">
                      {yearData.expenses.map((expense, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-accent-50 rounded-lg">
                          <div>
                            <div className="font-medium text-text-primary">{expense.category}</div>
                            <div className="text-sm text-text-secondary">{expense.percentage} of total</div>
                          </div>
                          <div className="font-bold text-accent-600">{expense.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance Structure */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Governance Structure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {governanceStructure.map((role, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-text-primary">{role.role}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-primary-200">
                    <h4 className="font-semibold text-text-primary mb-1">Accountability:</h4>
                    <p className="text-text-secondary text-sm">{role.accountability}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Accountability Metrics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-primary-600 mb-2 font-crimean-head">
                  {achievement.value}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {achievement.metric}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="text-xs text-accent-600 font-medium">
                  ✓ {achievement.verification}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reports & Documents */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Reports & Documents
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report, index) => {
              const IconComponent = report.icon
              
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-text-primary">{report.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          report.status === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                        <Calendar className="w-4 h-4" />
                        {report.date}
                        <span className="text-accent-600">• {report.type}</span>
                      </div>
                      
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {report.description}
                      </p>
                      
                      {report.status === 'Available' && (
                        <div className="flex gap-2">
                          <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                            <Download className="w-4 h-4" />
                            Download PDF
                          </button>
                          <button className="flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium text-sm">
                            <Eye className="w-4 h-4" />
                            View Online
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Ethical Commitments */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Our Ethical Commitments
          </h2>
          
          <div className="space-y-6">
            {ethicalCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {commitment.principle}
                    </h3>
                    <p className="text-text-secondary mb-3 leading-relaxed">
                      {commitment.description}
                    </p>
                    <div className="text-sm text-primary-600">
                      <strong>How we implement this:</strong> {commitment.implementation}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for Transparency */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Questions About Our Transparency?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We're committed to being completely open about our operations. 
            If you have questions or need additional information, please reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:young@qirimca.org"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Request Information
            </a>
            <a
              href="https://github.com/qirimca"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Our Code
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}