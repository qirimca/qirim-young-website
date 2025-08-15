"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImpactPage;
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
function ImpactPage() {
    const impactMetrics = [
        {
            icon: lucide_react_1.Database,
            number: '1,000,000+',
            label: 'Words in National Corpus',
            description: 'Comprehensive linguistic database supporting research and NLP development',
            trend: '+150,000 this year'
        },
        {
            icon: lucide_react_1.BookOpen,
            number: '900+',
            label: 'Analyzed Texts',
            description: 'Scientific articles, fiction, journalism, and historical documents processed',
            trend: '+200 this year'
        },
        {
            icon: lucide_react_1.Users,
            number: '30+',
            label: 'Active Contributors',
            description: 'Linguists, developers, and community members from Ukraine and worldwide',
            trend: '+12 new members'
        },
        {
            icon: lucide_react_1.Globe,
            number: '15+',
            label: 'Countries Reached',
            description: 'Global Crimean Tatar diaspora accessing our digital tools and resources',
            trend: 'Growing internationally'
        },
        {
            icon: lucide_react_1.Cpu,
            number: '4',
            label: 'Open Source Tools',
            description: 'QırımKey keyboard, transliteration tools, and language processing utilities',
            trend: '2 new releases'
        },
        {
            icon: lucide_react_1.Award,
            number: '5+',
            label: 'Institutional Partnerships',
            description: 'Universities, government agencies, and international organizations',
            trend: 'Expanding network'
        }
    ];
    const achievements = [
        {
            year: '2024',
            title: 'UNESCO Recognition Milestone',
            description: 'Our digital preservation efforts gained recognition as a model for endangered language conservation.',
            impact: 'International visibility for Crimean Tatar language preservation'
        },
        {
            year: '2023',
            title: 'University Collaboration Success',
            description: 'Established productive research partnerships with major Ukrainian academic institutions.',
            impact: 'Academic credibility and research advancement in computational linguistics'
        },
        {
            year: '2023',
            title: 'EGAP Program Grant',
            description: 'Secured significant funding from East Europe Foundation for corpus expansion.',
            impact: 'Financial sustainability and project acceleration'
        },
        {
            year: '2022',
            title: 'National Corpus Launch',
            description: 'Successfully launched Ukraine\'s first comprehensive Crimean Tatar language corpus.',
            impact: 'Foundation for all subsequent digital language tools and research'
        }
    ];
    const testimonials = [
        {
            name: 'Emine Dzhaparova',
            title: 'First Deputy Minister of Information Policy',
            quote: 'Education is the key to the professional development of our people, who strive for self-determination.',
            context: 'Supporting QIRI\'M YOUNG\'s educational initiatives'
        },
        {
            name: 'Dr. Linguistics Research Team',
            title: 'Taras Shevchenko National University',
            quote: 'The National Corpus represents a breakthrough in Crimean Tatar computational linguistics.',
            context: 'Academic partnership feedback'
        },
        {
            name: 'Community Developer',
            title: 'GitHub Contributor',
            quote: 'QırımKey keyboard has transformed how I write in Crimean Tatar on mobile devices.',
            context: 'User experience with digital tools'
        }
    ];
    const researchOutputs = [
        {
            type: 'Academic Publications',
            count: '12+',
            description: 'Peer-reviewed papers on Crimean Tatar NLP and digital preservation',
            venues: 'International conferences and journals'
        },
        {
            type: 'Open Datasets',
            count: '3',
            description: 'Publicly available linguistic datasets for research community',
            venues: 'GitHub and academic repositories'
        },
        {
            type: 'Technical Documentation',
            count: '50+',
            description: 'Comprehensive guides for tools, APIs, and corpus usage',
            venues: 'Online documentation platforms'
        },
        {
            type: 'Community Resources',
            count: '25+',
            description: 'Educational materials, tutorials, and language learning aids',
            venues: 'Multiple online platforms'
        }
    ];
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    const staggerChildren = {
        animate: {
            transition: { staggerChildren: 0.1 }
        }
    };
    return (<div className="min-h-screen py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <framer_motion_1.motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl lg:text-6xl font-bold font-crimean-head text-text-primary mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Measurable outcomes and real-world impact of our mission to preserve and advance 
            Crimean Tatar language through digital innovation and community collaboration.
          </p>
        </framer_motion_1.motion.div>

        {/* Impact Metrics Grid */}
        <framer_motion_1.motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={staggerChildren} initial="initial" animate="animate">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (<framer_motion_1.motion.div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" variants={fadeInUp} whileHover={{ y: -5 }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white"/>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-text-primary font-crimean-head">
                      {metric.number}
                    </div>
                    <div className="text-accent-600 font-medium text-sm">
                      {metric.trend}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {metric.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {metric.description}
                </p>
              </framer_motion_1.motion.div>);
        })}
        </framer_motion_1.motion.div>

        {/* Key Achievements Timeline */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Key Achievements
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (<framer_motion_1.motion.div key={index} className="flex gap-6 items-start" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }}>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{achievement.year}</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-grow">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-text-secondary mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="text-accent-600 font-medium text-sm">
                    Impact: {achievement.impact}
                  </div>
                </div>
              </framer_motion_1.motion.div>))}
          </div>
        </framer_motion_1.motion.div>

        {/* Research & Publications */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Research Output & Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchOutputs.map((output, index) => (<framer_motion_1.motion.div key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 * index }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-bold text-primary-600 font-crimean-head">
                    {output.count}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {output.type}
                    </h3>
                    <p className="text-primary-600 text-sm">{output.venues}</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {output.description}
                </p>
              </framer_motion_1.motion.div>))}
          </div>
        </framer_motion_1.motion.div>

        {/* Testimonials */}
        <framer_motion_1.motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center font-crimean-head">
            Community Testimonials
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<framer_motion_1.motion.div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }}>
                <div className="text-4xl text-primary-300 mb-4">"</div>
                <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="font-bold text-text-primary">{testimonial.name}</div>
                  <div className="text-accent-600 text-sm">{testimonial.title}</div>
                  <div className="text-text-secondary text-xs mt-1">{testimonial.context}</div>
                </div>
              </framer_motion_1.motion.div>))}
          </div>
        </framer_motion_1.motion.div>

        {/* Call to Action */}
        <framer_motion_1.motion.div className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Join Our Growing Impact
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Become part of our mission to preserve Crimean Tatar language and culture 
            through innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-involved#volunteer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Users className="w-5 h-5"/>
              Contribute to Our Work
            </a>
            <a href="/projects" className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.TrendingUp className="w-5 h-5"/>
              Explore Our Projects
            </a>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </div>);
}
