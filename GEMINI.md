# GEMINI.md - QIRI'M YOUNG Website Development

## Project Status: Ready for Deployment - All checks passed ✅

**Website URL**: https://young.qirimtatarca.org  
**Repository**: https://github.com/qirimca/qirim-young-website  
**Technology Stack**: React 19 + TypeScript + Vite 7 + Tailwind CSS v4

## Recent Updates (2025-08-16)

### ✅ COMPLETED: Codebase Cleanup & Bug Fixes
- **Deprecated Code Removal**: Removed the unused `src/i18n/translations` directory.
- **Bug Fix**: Fixed a critical syntax error in the `crh.json` translation file that was causing the application to crash.
- **Build Scripts**: Added the `typecheck` script to `package.json` for better code quality assurance.
- **Code Quality**: The project now passes all linter and TypeScript type checks.

### ✅ COMPLETED: Comprehensive Translation System Overhaul
- **Single Source of Truth**: JSON files now primary system (TypeScript deprecated).
- **Ukrainian Full Translation**: Complete 268-line Ukrainian translation as source language.  
- **English & Crimean Tatar**: Comprehensive translations completed for all languages.
- **Mixed Language Fix**: Resolved all mixed-language content issues.
- **Synchronization**: Eliminated dual TypeScript/JSON system conflicts.

### ✅ COMPLETED: Advanced Crowdin Enterprise Integration
- **JS Proxy Integration**: Live translation sync with over-the-air delivery.
- **In-Context Editing**: Fully functional translators interface (?lang=ach).
- **Enterprise Features**: Touch optimization, auto-height, visible phrase tagging.
- **Content Security Policy**: Complete CSP configuration for Crowdin domains.
- **Real-time Sync**: Automatic translation updates without page refresh.
- **Distribution System**: Live translation delivery via Crowdin CDN.
- **Professional Workflow**: Full translation management with visual context.

### ✅ COMPLETED: Production Deployment & Analytics
- **Domain**: All URLs configured for young.qirimtatarca.org.
- **Google Analytics**: G-YKLWW2LSNE integrated and tracking.
- **Build System**: Optimized for subdomain deployment (base: "/").
- **FTP Ready**: Complete dist/ folder ready for /public_html/young/.
- **Translation Testing**: ?lang=ach pseudo-language confirmed working.

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
- **React 19**: Latest stable with concurrent features and Suspense.
- **TypeScript**: Full type safety with strict mode enabled.
- **Vite 7**: Ultra-fast HMR and optimized production builds.
- **Tailwind CSS v4**: Modern utility-first CSS with new color system.

### Advanced Internationalization
- **Framework**: react-i18next with language detection.
- **Languages**: 3 languages (crh, uk, en) with comprehensive translations.
- **Translation Management**: JSON-only system - single source of truth.
- **URL Structure**: Query parameter (?lang=uk) for SEO optimization.
- **Source Language**: Ukrainian (268 translation keys) for professional translators.

### Crowdin Enterprise Integration Features
- **JS Proxy Integration**: Live translation delivery via CDN.
- **In-Context Editing**: Fully functional translator interface (?lang=ach).
- **Enterprise Optimization**: Touch-optimized, auto-height, visible phrase tagging.
- **Security Integration**: Complete CSP configuration for all Crowdin domains.
- **Over-the-Air Updates**: Real-time translation sync without deployment.
- **Distribution System**: Advanced content delivery with automatic updates.
- **Professional Tools**: Complete translation management platform.
- **Quality Assurance**: Built-in review and approval workflow.

### Performance Optimizations
- **Code Splitting**: Route-based chunks for optimal loading.
- **Asset Optimization**: Fonts preloaded, images optimized.
- **Bundle Efficiency**: Vendor separation for better caching.
- **Core Web Vitals**: Optimized for Google's performance metrics.

## File Structure
```
qirim-young-website/
├── src/
│   ├── components/          # React components with i18n
│   ├── pages/              # Page components (7 pages)
│   ├── i18n/               # Internationalization system
│   │   ├── config.ts       # i18next setup (JSON imports only)
│   │   └── locales/        # JSON files - single source of truth (uk, crh, en)
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

### In-Context Translation Setup (FULLY FUNCTIONAL ✅)
1. **Access**: Visit website with ?lang=ach parameter or ?crowdin-in-context=1.
2. **Login**: Crowdin Enterprise overlay appears for authorized translators.
3. **Edit**: Click any text to translate in real-time with visual feedback.
4. **Preview**: See changes immediately without page refresh.
5. **Publish**: Translations sync automatically to GitHub.
6. **Features**: Touch-optimized interface, auto-height adjustment, visible phrase tagging.

### Translation Management Process
1. **Content Updates**: Modify `src/i18n/locales/uk.json` (single source).
2. **JS Proxy Sync**: Crowdin automatically extracts website content.
3. **Over-the-Air Delivery**: Translations update instantly via CDN.
4. **In-Context Work**: Translators edit directly on live website (?lang=ach).
5. **Real-time Preview**: Changes visible immediately without deployment.
6. **Quality Workflow**: Built-in review and approval with visual context.

### Professional Features
- **Visual Context**: Translators see exactly where text appears.
- **Character Limits**: Visual feedback for UI constraints.
- **Cultural Sensitivity**: Crimean Tatar context preserved.
- **Translation Memory**: Consistent terminology across content.
- **Community Workflow**: Open source contributor engagement.

## Deployment Instructions

### Production FTP Deployment
1. **Build**: `npm run build` (creates optimized dist/).
2. **Sitemap**: `npm run sitemap` (updates multilingual sitemap).
3. **Upload**: Copy ENTIRE dist/ folder contents to `/public_html/young/`.
4. **Verification**: Test young.qirimtatarca.org functionality.
5. **Analytics**: Confirm Google Analytics G-YKLWW2LSNE tracking.

### Crowdin In-Context Activation (READY FOR PRODUCTION ✅)
1. **Domain Setup**: Ensure young.qirimtatarca.org is live.
2. **In-Context Access**: Use ?lang=ach or ?crowdin-in-context=1 for translation mode.
3. **Enterprise Features**: Touch optimization, auto-height, visible phrase tagging enabled.
4. **Security**: Full CSP configuration with all required Crowdin domains.
5. **Translator Access**: Invite translators to Crowdin Enterprise project.
6. **Testing**: In-context editing functionality verified on localhost.

## Analytics and Performance

### Monitoring
- **Google Analytics**: G-YKLWW2LSNE tracking all interactions.
- **Core Web Vitals**: Optimized for speed and usability.
- **Translation Analytics**: Crowdin provides translation progress metrics.
- **SEO Performance**: Multilingual sitemap with hreflang support.

### Quality Assurance
- **TypeScript**: Strict type checking prevents runtime errors.
- **ESLint**: React 19 best practices enforcement.
- **Translation QA**: Crowdin built-in review workflow.
- **Performance Budget**: Optimized bundle sizes.

## Security and Best Practices

### Security Measures
- **Content Security Policy**: Full CSP configuration for Crowdin Enterprise domains.
- **HTTPS Enforcement**: All resources over secure connections.
- **Domain Security**: qirimyoung.crowdin.com, api.crowdin.com whitelisted.
- **No Exposed Secrets**: Environment variables properly managed.
- **Crowdin Security**: Professional-grade Enterprise translation platform.

### Modern Development
- **React 19 Features**: Concurrent rendering and Suspense.
- **ES2022+ Support**: Modern JavaScript with optimized builds.
- **Accessibility**: WCAG compliance for international users.
- **Cultural Sensitivity**: Proper Crimean Tatar language support.

## Maintenance and Updates

### Regular Tasks
- **Dependency Updates**: Monthly security updates via npm audit.
- **Performance Reviews**: Quarterly PageSpeed Insights analysis.
- **Translation Progress**: Weekly Crowdin workflow monitoring.
- **Content Updates**: Ukrainian source content via development workflow.

### Backup and Recovery
- **Version Control**: Full Git history with detailed commits.
- **Translation Backup**: Crowdin maintains translation memory.
- **Asset Backup**: All static assets versioned in repository.
- **Configuration Backup**: All deployment configs stored in Git.

---

**Last Updated**: 2025-08-16
**Status**: Ready for Deployment - All checks passed ✅
**Next Steps**: Deploy to young.qirimtatarca.org - In-Context translation is ready for professional translators.

## 🔧 Technical Implementation Details

### Crowdin Enterprise In-Context Setup
```javascript
// Conditional In-Context loading in index.html
const inContextMode = currentLang === 'ach' || window.location.search.includes('crowdin-in-context=1');

// Enterprise optimization parameters
_jipt.push(['preload_texts', true]);        // Speed up dynamic content
_jipt.push(['touch_optimized', true]);      // Better mobile experience  
_jipt.push(['tag_only_visible_phrases', true]); // Only tag visible strings
_jipt.push(['auto_height', true]);          // Proper UI scaling
_jipt.push(['start_type', 'automatic']);    // Auto-start In-Context
```

### Content Security Policy Configuration
```
script-src: https://cdn.crowdin.com https://qirimyoung.crowdin.com
connect-src: https://api.crowdin.com https://qirimyoung.crowdin.com  
style-src: https://cdn.crowdin.com
frame-src: https://qirimyoung.crowdin.com
```

### Testing URLs
- **Development**: http://localhost:5173?lang=ach
- **Production**: http://localhost:3004?lang=ach  
- **Alternative**: ?crowdin-in-context=1 parameter

### Translation Key Format
Pseudo-language uses bracket notation for Crowdin detection:
```json
{
  "nav": {
    "home": "[nav.home]",
    "about": "[nav.about]"
  }
}
```
