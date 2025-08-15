"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectsPage;
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
function ProjectsPage() {
    const projects = [
        {
            id: 'national-corpus',
            title: 'National Corpus of Crimean Tatar Language',
            subtitle: 'ctcorpus.org',
            description: 'The National Corpus of the Crimean Tatar Language is Ukraine\'s first comprehensive digital database of Crimean Tatar texts. Implemented by QIRI\'M YOUNG with support from the EGAP Program and East Europe Foundation, this corpus contains over 1 million words from academic literature, fiction, periodicals, and historical documents.',
            features: [
                'Over 900 analyzed materials including fiction and scientific literature',
                'Advanced word search functionality with morphological analysis',
                'Speech recognition and machine translation capabilities',
                'Open access platform for researchers worldwide',
                'Foundation for integrating Crimean Tatar into operating systems and translators'
            ],
            technologies: ['Corpus Linguistics', 'NLP', 'Web Platform', 'Search Engine'],
            status: 'Live',
            url: 'https://ctcorpus.org',
            icon: lucide_react_1.Database,
            year: '2022-2023',
            team: '30+ contributors from Ukraine and worldwide'
        },
        {
            id: 'parallel-corpus',
            title: 'English-Crimean Tatar Parallel Corpus',
            subtitle: 'Machine Translation Research',
            description: 'A specialized parallel corpus containing aligned English and Crimean Tatar texts for machine translation research and development. This project supports the creation of automated translation systems and bilingual language processing tools.',
            features: [
                'Parallel text alignment for translation pairs',
                'Support for machine translation training',
                'Bilingual terminology extraction',
                'Research collaboration with academic institutions',
                'Open data for computational linguistics research'
            ],
            technologies: ['Parallel Corpus', 'Machine Translation', 'Alignment Tools', 'Research Data'],
            status: 'Development',
            url: '#',
            icon: lucide_react_1.GitBranch,
            year: '2023-2024',
            team: 'Linguistic researchers and NLP specialists'
        },
        {
            id: 'language-courses',
            title: 'Digital Language Learning Resources',
            subtitle: 'Memrise, Quizlet, Anki Courses',
            description: 'Comprehensive digital language learning materials designed for English speakers wanting to learn Crimean Tatar. These courses utilize spaced repetition and interactive learning methodologies across multiple platforms.',
            features: [
                'Memrise courses with native speaker audio',
                'Quizlet flashcard sets for vocabulary building',
                'Anki decks with pronunciation guides',
                'Beginner to intermediate level content',
                'Cultural context and usage examples'
            ],
            technologies: ['Spaced Repetition', 'Mobile Learning', 'Audio Integration', 'Interactive Design'],
            status: 'Available',
            url: '#',
            icon: lucide_react_1.BookOpen,
            year: '2021-ongoing',
            team: 'Language educators and native speakers'
        },
        {
            id: 'research-publications',
            title: 'Computational Linguistics Research',
            subtitle: 'Academic Collaborations',
            description: 'QIRI\'M YOUNG actively participates in academic research on Crimean Tatar language processing, publishing papers and collaborating with universities on computational linguistics projects.',
            features: [
                'Peer-reviewed publications on Crimean Tatar NLP',
                'Conference presentations at international venues',
                'Collaboration with Taras Shevchenko National University',
                'Open source tools and datasets',
                'Academic partnerships for language technology'
            ],
            technologies: ['Research', 'Academic Publishing', 'Open Source', 'University Partnerships'],
            status: 'Ongoing',
            url: '#',
            icon: lucide_react_1.Users,
            year: '2020-ongoing',
            team: 'Academic researchers and linguists'
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
            Our Digital Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Innovative tools and platforms advancing Crimean Tatar language technology through 
            corpus linguistics, machine translation, and educational resources.
          </p>
        </framer_motion_1.motion.div>

        {/* Project Stats */}
        <framer_motion_1.motion.div className="grid md:grid-cols-4 gap-8 mb-16" variants={staggerChildren} initial="initial" animate="animate">
          <framer_motion_1.motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl font-bold text-primary-600 mb-2 font-crimean-head">1M+</div>
            <div className="text-text-secondary">Words in Corpus</div>
          </framer_motion_1.motion.div>
          <framer_motion_1.motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl font-bold text-accent-500 mb-2 font-crimean-head">900+</div>
            <div className="text-text-secondary">Analyzed Texts</div>
          </framer_motion_1.motion.div>
          <framer_motion_1.motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl font-bold text-accent-500 mb-2 font-crimean-head">30+</div>
            <div className="text-text-secondary">Contributors</div>
          </framer_motion_1.motion.div>
          <framer_motion_1.motion.div className="text-center" variants={fadeInUp}>
            <div className="text-4xl font-bold text-accent-500 mb-2 font-crimean-head">4</div>
            <div className="text-text-secondary">Active Projects</div>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>

        {/* Projects */}
        <framer_motion_1.motion.div className="space-y-16" variants={staggerChildren} initial="initial" animate="animate">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            return (<framer_motion_1.motion.div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`} variants={fadeInUp}>
                {/* Project Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white"/>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-text-primary font-crimean-head">
                        {project.title}
                      </h2>
                      <p className="text-accent-600 font-medium">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (<li key={idx} className="flex items-start gap-2 text-text-secondary">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>))}
                      </ul>
                    </div>

                    {/* Project Details */}
                    <div className="grid sm:grid-cols-2 gap-4 p-4 bg-background-100 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Timeline</h4>
                        <p className="text-text-secondary text-sm">{project.year}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">Status</h4>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Live' ? 'bg-green-100 text-green-800' :
                    project.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="sm:col-span-2">
                        <h4 className="font-semibold text-text-primary mb-1">Team</h4>
                        <p className="text-text-secondary text-sm">{project.team}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (<span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {tech}
                          </span>))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      {project.url !== '#' && (<a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                          <lucide_react_1.Globe className="w-4 h-4"/>
                          Visit Project
                          <lucide_react_1.ExternalLink className="w-4 h-4"/>
                        </a>)}
                      <react_router_dom_1.Link to="/get-involved" className="inline-flex items-center gap-2 border border-primary-300 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors">
                        <lucide_react_1.Users className="w-4 h-4"/>
                        Get Involved
                      </react_router_dom_1.Link>
                    </div>
                  </div>
                </div>

                {/* Project Visual */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <framer_motion_1.motion.div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 border border-primary-200" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="text-center space-y-4">
                      <IconComponent className="w-20 h-20 text-primary-600 mx-auto"/>
                      <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                      <p className="text-text-secondary">{project.subtitle}</p>
                      
                      {/* Mock preview for corpus */}
                      {project.id === 'national-corpus' && (<div className="mt-6 bg-white rounded-lg p-4 text-left">
                          <div className="text-xs text-text-secondary mb-2">Sample Search Results</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-text-primary">тил</span>
                              <span className="text-accent-600">147 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-primary">медениет</span>
                              <span className="text-accent-600">89 occurrences</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-primary">лугат</span>
                              <span className="text-accent-600">56 occurrences</span>
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </framer_motion_1.motion.div>
                </div>
              </framer_motion_1.motion.div>);
        })}
        </framer_motion_1.motion.div>

        {/* Call to Action */}
        <framer_motion_1.motion.div className="mt-20 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <h2 className="text-3xl font-bold text-text-primary mb-4 font-crimean-head">
            Join Our Digital Language Revolution
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Help us build the digital infrastructure for Crimean Tatar language preservation and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <react_router_dom_1.Link to="/get-involved#volunteer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Users className="w-5 h-5"/>
              Become a Contributor
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/get-involved#donate" className="border border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              <lucide_react_1.Globe className="w-5 h-5"/>
              Support Our Work
            </react_router_dom_1.Link>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </div>);
}
