"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsPage;
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
function NewsPage() {
    const newsItems = [
        {
            id: 1,
            type: 'achievement',
            title: 'National Corpus Reaches 1 Million Words Milestone',
            date: '2024-01-15',
            excerpt: 'Our National Corpus of Crimean Tatar Language has reached a major milestone with over 1 million words from diverse sources including scientific articles, fiction, and journalism.',
            content: 'The National Corpus project, implemented in cooperation with the Ministry of Reintegration and Taras Shevchenko National University of Kyiv, continues to grow. This online platform serves as an open library of educational and scientific materials in Crimean Tatar, supporting UNESCO\'s efforts to preserve endangered languages.',
            tags: ['Corpus Linguistics', 'Milestone', 'Language Preservation'],
            icon: lucide_react_1.Database,
            featured: true
        },
        {
            id: 2,
            type: 'project',
            title: 'QırımKey iOS Keyboard Now Available',
            date: '2023-12-20',
            excerpt: 'We\'re excited to announce the release of QırımKey, the first iOS keyboard specifically designed for the Crimean Tatar language.',
            content: 'QırımKey features customizable layouts, seamless language switching, and support for both Cyrillic and Latin scripts. This represents a significant step forward in digital accessibility for Crimean Tatar speakers worldwide.',
            tags: ['iOS', 'Mobile Technology', 'Digital Tools'],
            icon: lucide_react_1.Globe,
            github: 'https://github.com/qirimca/keyboard'
        },
        {
            id: 3,
            type: 'partnership',
            title: 'EGAP Program Partnership Announcement',
            date: '2023-11-28',
            excerpt: 'QIRI\'M YOUNG receives support from the E-Governance for Accountability and Participation (EGAP) program for our language technology initiatives.',
            content: 'This partnership with the EGAP program, backed by East Europe Foundation, enables us to expand our digital language preservation efforts and develop new tools for the Crimean Tatar community.',
            tags: ['Partnership', 'Funding', 'EGAP Program'],
            icon: lucide_react_1.Users
        },
        {
            id: 4,
            type: 'recognition',
            title: 'Featured in Chytomo Media Coverage',
            date: '2023-10-12',
            excerpt: 'Our National Corpus project received extensive coverage in Chytomo, highlighting our collaboration with major Ukrainian universities.',
            content: 'The article emphasizes our work with V.I. Vernadsky Taurida National University and our role in implementing the Strategy for Crimean Tatar Language Development (2022-2032). This recognition reflects the growing importance of digital language preservation.',
            tags: ['Media Coverage', 'Recognition', 'Strategy'],
            icon: lucide_react_1.Award
        },
        {
            id: 5,
            type: 'development',
            title: 'Open Source Translation Tools Release',
            date: '2023-09-15',
            excerpt: 'Released new open-source transliteration tools and language resources on our GitHub repository.',
            content: 'Our latest GitHub releases include JavaScript-based transliteration tools and an expanded Crimean Tatar dictionary (pos_dict). These tools are freely available for developers and researchers worldwide.',
            tags: ['Open Source', 'GitHub', 'Development Tools'],
            icon: lucide_react_1.Github,
            github: 'https://github.com/qirimca'
        },
        {
            id: 6,
            type: 'education',
            title: 'Youth Leadership Program Launch',
            date: '2023-08-22',
            excerpt: 'Launched educational initiative in partnership with InterkulturellesNetzwerk e.V. to prepare Crimean Tatar youth for leadership roles.',
            content: 'This program, implemented by Lumiere Club public organization, focuses on professional development and European-Ukrainian youth exchanges. As stated by Emine Dzhaparova: "Education is the key to the professional development of our people, who strive for self-determination."',
            tags: ['Education', 'Youth Leadership', 'International Cooperation'],
            icon: lucide_react_1.Users
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <framer_motion_1.motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl lg:text-6xl font-bold font-crimean-head text-text-primary mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Latest developments, achievements, and project updates from QIRI'M YOUNG's mission 
            to preserve and advance Crimean Tatar language through digital innovation.
          </p>
        </framer_motion_1.motion.div>

        {/* Featured Post */}
        {newsItems.filter(item => item.featured).map((item) => {
            const IconComponent = item.icon;
            return (<framer_motion_1.motion.article key={item.id} className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white"/>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-accent-600 mb-1">
                    <lucide_react_1.Calendar className="w-4 h-4"/>
                    {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
                    <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium ml-2">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary font-crimean-head">
                    {item.title}
                  </h2>
                </div>
              </div>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                {item.content}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (<span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {tag}
                  </span>))}
              </div>
            </framer_motion_1.motion.article>);
        })}

        {/* News Grid */}
        <framer_motion_1.motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren} initial="initial" animate="animate">
          {newsItems.filter(item => !item.featured).map((item) => {
            const IconComponent = item.icon;
            return (<framer_motion_1.motion.article key={item.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300" variants={fadeInUp} whileHover={{ y: -5 }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                      <lucide_react_1.Calendar className="w-4 h-4"/>
                      {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium capitalize">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 font-crimean-head">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {item.content}
                </p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (<span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {tag}
                      </span>))}
                  </div>
                  
                  {item.github && (<a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <lucide_react_1.Github className="w-4 h-4"/>
                      View on GitHub
                      <lucide_react_1.ExternalLink className="w-3 h-3"/>
                    </a>)}
                </div>
              </framer_motion_1.motion.article>);
        })}
        </framer_motion_1.motion.div>

        {/* Newsletter Signup */}
        <framer_motion_1.motion.div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Stay Updated
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Follow our journey as we build digital tools for Crimean Tatar language preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:young@qirimca.org" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Calendar className="w-5 h-5"/>
              Contact Us
            </a>
            <a href="https://github.com/qirimca" target="_blank" rel="noopener noreferrer" className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Github className="w-5 h-5"/>
              Follow on GitHub
              <lucide_react_1.ExternalLink className="w-4 h-4"/>
            </a>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </div>);
}
