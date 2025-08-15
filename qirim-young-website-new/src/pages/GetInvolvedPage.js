"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetInvolvedPage;
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
function GetInvolvedPage() {
    const volunteerOpportunities = [
        {
            icon: lucide_react_1.Code,
            title: 'Software Development',
            description: 'Contribute to our open-source tools, mobile apps, and web platforms. Help build QırımKey keyboard, transliteration tools, and corpus interfaces.',
            skills: ['React/TypeScript', 'Mobile Development', 'Python/NLP', 'DevOps'],
            commitment: 'Flexible, project-based',
            contact: 'github.com/qirimca'
        },
        {
            icon: lucide_react_1.BookOpen,
            title: 'Linguistic Research',
            description: 'Help analyze texts, create annotations, validate translations, and contribute to corpus expansion with your linguistic expertise.',
            skills: ['Crimean Tatar fluency', 'Linguistic analysis', 'Text processing', 'Research'],
            commitment: '5-10 hours/week',
            contact: 'young@qirimca.org'
        },
        {
            icon: lucide_react_1.Globe,
            title: 'Community Outreach',
            description: 'Connect with Crimean Tatar communities worldwide, organize events, manage social media, and help spread awareness.',
            skills: ['Community building', 'Social media', 'Event planning', 'Communication'],
            commitment: 'Part-time flexible',
            contact: 'young@qirimca.org'
        },
        {
            icon: lucide_react_1.Users,
            title: 'Educational Content',
            description: 'Create learning materials, tutorials, documentation, and educational resources for language learners and researchers.',
            skills: ['Content creation', 'Educational design', 'Writing', 'Multilingual'],
            commitment: 'Project-based',
            contact: 'young@qirimca.org'
        }
    ];
    const partnershipOpportunities = [
        {
            type: 'Academic Institutions',
            description: 'Universities and research centers interested in Crimean Tatar linguistics, digital humanities, or endangered language preservation.',
            benefits: ['Joint research projects', 'Student exchange programs', 'Shared resources and expertise', 'Academic publications'],
            examples: 'Following our successful partnerships with Taras Shevchenko National University and V.I. Vernadsky Taurida National University'
        },
        {
            type: 'Technology Companies',
            description: 'Organizations working on language technology, AI/ML, or digital preservation solutions.',
            benefits: ['Technology collaboration', 'Resource sharing', 'Product integration', 'Innovation partnerships'],
            examples: 'Opportunities in NLP, mobile development, and digital archiving solutions'
        },
        {
            type: 'Cultural Organizations',
            description: 'Crimean Tatar cultural centers, museums, and heritage preservation organizations worldwide.',
            benefits: ['Cultural exchange', 'Content collaboration', 'Community events', 'Heritage digitization'],
            examples: 'Global Crimean Tatar diaspora organizations and cultural preservation initiatives'
        },
        {
            type: 'Government & NGOs',
            description: 'Government agencies, international organizations, and NGOs supporting minority language rights and digital inclusion.',
            benefits: ['Policy collaboration', 'Funding opportunities', 'Strategic guidance', 'International recognition'],
            examples: 'Building on our work with Ministry of Reintegration and East Europe Foundation'
        }
    ];
    const supportWays = [
        {
            icon: lucide_react_1.DollarSign,
            title: 'Financial Support',
            description: 'Help fund our development projects, research initiatives, and operational expenses.',
            actions: ['Monthly donations', 'Project-specific funding', 'Equipment sponsorship', 'Travel grants for conferences'],
            impact: 'Enables continuous development and expansion of our digital tools'
        },
        {
            icon: lucide_react_1.Heart,
            title: 'Spread the Word',
            description: 'Help us reach more people by sharing our work and mission with your networks.',
            actions: ['Social media sharing', 'Academic citations', 'Conference presentations', 'Community introductions'],
            impact: 'Increases visibility and attracts new contributors and users'
        },
        {
            icon: lucide_react_1.Github,
            title: 'Open Source Contributions',
            description: 'Contribute directly to our codebase, documentation, or testing efforts.',
            actions: ['Code contributions', 'Bug reports', 'Documentation', 'Translation help'],
            impact: 'Improves tool quality and accelerates feature development'
        },
        {
            icon: lucide_react_1.Users,
            title: 'Community Building',
            description: 'Help build and strengthen the global Crimean Tatar digital community.',
            actions: ['Organize local events', 'Connect communities', 'Mentor newcomers', 'Facilitate collaborations'],
            impact: 'Creates sustainable ecosystem for language preservation'
        }
    ];
    return (<div className="min-h-screen py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <framer_motion_1.motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl lg:text-6xl font-bold font-crimean-head text-text-primary mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join our mission to preserve and advance Crimean Tatar language through digital innovation. 
            Together, we can ensure this beautiful language thrives in the digital age.
          </p>
        </framer_motion_1.motion.div>

        {/* Volunteer Opportunities */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Volunteer Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (<framer_motion_1.motion.div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }} whileHover={{ y: -5 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{opportunity.title}</h3>
                      <p className="text-accent-600 text-sm">{opportunity.commitment}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Skills Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                            {skill}
                          </span>))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                      <lucide_react_1.Mail className="w-4 h-4"/>
                      {opportunity.contact}
                    </div>
                  </div>
                </framer_motion_1.motion.div>);
        })}
          </div>
        </framer_motion_1.motion.div>

        {/* Partnership Opportunities */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Partnership Opportunities
          </h2>
          <div className="space-y-8">
            {partnershipOpportunities.map((partnership, index) => (<framer_motion_1.motion.div key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-100" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }}>
                <div className="flex items-center gap-3 mb-4">
                  <lucide_react_1.Handshake className="w-8 h-8 text-primary-600"/>
                  <h3 className="text-2xl font-bold text-text-primary">{partnership.type}</h3>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {partnership.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partnership.benefits.map((benefit, idx) => (<li key={idx} className="flex items-start gap-2 text-text-secondary">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Examples:</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {partnership.examples}
                    </p>
                  </div>
                </div>
              </framer_motion_1.motion.div>))}
          </div>
        </framer_motion_1.motion.div>

        {/* Ways to Support */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Ways to Support Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportWays.map((way, index) => {
            const IconComponent = way.icon;
            return (<framer_motion_1.motion.div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }} whileHover={{ y: -5 }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white"/>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary mb-3">
                    {way.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {way.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-primary-600">
                    {way.actions.slice(0, 2).map((action, idx) => (<div key={idx} className="text-left">
                        • {action}
                      </div>))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-text-secondary italic">
                      {way.impact}
                    </p>
                  </div>
                </framer_motion_1.motion.div>);
        })}
          </div>
        </framer_motion_1.motion.div>

        {/* Contact Section */}
        <framer_motion_1.motion.div className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you're a developer, linguist, educator, or simply passionate about language preservation, 
            there's a place for you in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:young@qirimca.org" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Mail className="w-5 h-5"/>
              Contact Us
            </a>
            <a href="https://github.com/qirimca" target="_blank" rel="noopener noreferrer" className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Github className="w-5 h-5"/>
              Explore on GitHub
              <lucide_react_1.ExternalLink className="w-4 h-4"/>
            </a>
          </div>
          
          <div className="mt-8 text-text-secondary">
            <p className="mb-2">Follow our progress and join our community:</p>
            <div className="flex justify-center gap-4 text-sm">
              <span>📧 young@qirimca.org</span>
              <span>🌐 qirimca.org</span>
              <span>💻 github.com/qirimca</span>
            </div>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </div>);
}
