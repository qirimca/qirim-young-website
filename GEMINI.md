# GEMINI.md - QIRI'M YOUNG Website Development

## Project Status: PRODUCTION READY WITH IN-CONTEXT PREVIEW ✅

**Website URL**: https://young.qirimtatarca.org  
**Repository**: https://github.com/qirimca/qirim-young-website  
**Technology Stack**: React 19 + TypeScript + Vite 7 + Tailwind CSS v4

## Recent Updates (2025-08-15)

### ✅ COMPLETED: Crowdin In-Context Translation Preview
- **Live Translation Editing**: Translators can edit content directly on the website
- **Real-time Preview**: Changes visible immediately without page refresh
- **Professional Workflow**: Industry-standard in-context translation experience
- **JavaScript Integration**: Crowdin In-Context snippet active (project ID: de495f6e792857bdac1d7433af340e9e)
- **Pseudo-language Support**: Configured for metadata storage and context awareness

### ✅ COMPLETED: Full Localization Infrastructure
- **Project Type**: File-based Software Localization
- **Source Language**: Ukrainian (uk) - strategically chosen for translator availability
- **Target Languages**: Crimean Tatar (crh), English (en)
- **Dual File System**: TypeScript files for development, JSON files for Crowdin sync
- **GitHub Integration**: Automated workflow with l10n_master service branch

### ✅ COMPLETED: Production Deployment Setup
- **Domain**: All URLs configured for young.qirimtatarca.org
- **Google Analytics**: G-YKLWW2LSNE integrated and tracking
- **Build System**: Optimized for subdomain deployment (base: "/")
- **FTP Ready**: Complete dist/ folder ready for /public_html/young/
- **Website Functionality**: Fully tested and operational

## Development Commands

### Setup and Development
```bash
npm install          # Install all dependencies
npm run dev          # Start dev server (auto-assigns port 5173+)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint with React 19 rules
npm run typecheck    # TypeScript strict mode checking
```

### Translation Management
```bash
npm run sitemap      # Generate multilingual sitemap
# Crowdin sync happens automatically via GitHub integration
# In-context editing available at ?lang=ach (pseudo-language)
```

### Production Deployment
```bash
npm run build        # Creates optimized dist/ folder
npm run sitemap      # Updates sitemap.xml with latest content
# Copy ALL files from dist/ to FTP /public_html/young/
```

## Technical Architecture

### Frontend Framework
- **React 19**: Latest stable with concurrent features and Suspense
- **TypeScript**: Full type safety with strict mode enabled
- **Vite 7**: Ultra-fast HMR and optimized production builds
- **Tailwind CSS v4**: Modern utility-first CSS with new color system

### Advanced Internationalization
- **Framework**: react-i18next with language detection
- **Languages**: 3 languages (crh, uk, en) with proper fallbacks
- **Translation Management**: Dual system - TS for development, JSON for Crowdin
- **URL Structure**: Query parameter (?lang=uk) for SEO optimization
- **In-Context Preview**: Live editing capability for professional translators

### Crowdin Integration Features
- **In-Context Editing**: Direct translation on live website
- **Pseudo-language**: Metadata storage for translation context
- **Real-time Sync**: Automatic GitHub integration with pull requests
- **Professional Tools**: Industry-standard translation management
- **Quality Assurance**: Built-in review and approval workflow

### Performance Optimizations
- **Code Splitting**: Route-based chunks for optimal loading
- **Asset Optimization**: Fonts preloaded, images optimized
- **Bundle Efficiency**: Vendor separation for better caching
- **Core Web Vitals**: Optimized for Google's performance metrics

## File Structure
```
qirim-young-website/
├── src/
│   ├── components/          # React components with i18n
│   ├── pages/              # Page components (7 pages)
│   ├── i18n/               # Internationalization system
│   │   ├── config.ts       # i18next setup with language detection
│   │   ├── locales/        # JSON files for Crowdin (uk, crh, en)
│   │   └── translations/   # TypeScript files for development
│   ├── assets/             # Optimized static assets
│   └── main.tsx            # Application entry with React 19 features
├── public/                 # Public assets and fonts
├── dist/                   # Production build (FTP ready)
├── .github/workflows/      # GitHub Actions for Crowdin sync
├── crowdin.yml             # Crowdin project configuration
├── LOCALIZATION.md         # Translation workflow documentation
└── package.json            # Dependencies and build scripts
```

## Crowdin Professional Translation Workflow

### In-Context Translation Setup
1. **Access**: Visit website with ?lang=ach parameter
2. **Login**: Crowdin overlay appears for authorized translators
3. **Edit**: Click any text to translate in real-time
4. **Preview**: See changes immediately without page refresh
5. **Publish**: Translations sync automatically to GitHub

### Translation Management Process
1. **Content Updates**: Modify `src/i18n/locales/uk.json` (source)
2. **Auto-Detection**: Crowdin GitHub integration detects changes
3. **Translator Notification**: Professional translators receive assignments
4. **In-Context Work**: Translators edit directly on live website
5. **Quality Review**: Built-in review and approval process
6. **Auto-Deployment**: Completed translations merge via pull requests

### Professional Features
- **Visual Context**: Translators see exactly where text appears
- **Character Limits**: Visual feedback for UI constraints
- **Cultural Sensitivity**: Crimean Tatar context preserved
- **Translation Memory**: Consistent terminology across content
- **Community Workflow**: Open source contributor engagement

## Deployment Instructions

### Production FTP Deployment
1. **Build**: `npm run build` (creates optimized dist/)
2. **Sitemap**: `npm run sitemap` (updates multilingual sitemap)
3. **Upload**: Copy ENTIRE dist/ folder contents to `/public_html/young/`
4. **Verification**: Test young.qirimtatarca.org functionality
5. **Analytics**: Confirm Google Analytics G-YKLWW2LSNE tracking

### Crowdin In-Context Activation
1. **Domain Setup**: Ensure young.qirimtatarca.org is live
2. **Pseudo-language**: Access with ?lang=ach for translation mode
3. **Translator Access**: Invite translators to Crowdin project
4. **Testing**: Verify in-context editing functionality

## Analytics and Performance

### Monitoring
- **Google Analytics**: G-YKLWW2LSNE tracking all interactions
- **Core Web Vitals**: Optimized for speed and usability
- **Translation Analytics**: Crowdin provides translation progress metrics
- **SEO Performance**: Multilingual sitemap with hreflang support

### Quality Assurance
- **TypeScript**: Strict type checking prevents runtime errors
- **ESLint**: React 19 best practices enforcement
- **Translation QA**: Crowdin built-in review workflow
- **Performance Budget**: Optimized bundle sizes

## Security and Best Practices

### Security Measures
- **Content Security Policy**: Proper headers configured
- **HTTPS Enforcement**: All resources over secure connections
- **No Exposed Secrets**: Environment variables properly managed
- **Crowdin Security**: Professional-grade translation platform

### Modern Development
- **React 19 Features**: Concurrent rendering and Suspense
- **ES2022+ Support**: Modern JavaScript with optimized builds
- **Accessibility**: WCAG compliance for international users
- **Cultural Sensitivity**: Proper Crimean Tatar language support

## Maintenance and Updates

### Regular Tasks
- **Dependency Updates**: Monthly security updates via npm audit
- **Performance Reviews**: Quarterly PageSpeed Insights analysis
- **Translation Progress**: Weekly Crowdin workflow monitoring
- **Content Updates**: Ukrainian source content via development workflow

### Backup and Recovery
- **Version Control**: Full Git history with detailed commits
- **Translation Backup**: Crowdin maintains translation memory
- **Asset Backup**: All static assets versioned in repository
- **Configuration Backup**: All deployment configs stored in Git

---

**Last Updated**: 2025-08-15  
**Status**: Production Ready with Professional Translation Workflow ✅  
**Next Steps**: Deploy to young.qirimtatarca.org and activate Crowdin in-context translation for professional translators