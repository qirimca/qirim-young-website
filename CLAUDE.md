# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (opens automatically at localhost:5176)
- **Build for production**: `npm run build` (auto-generates sitemap + CSS + Vite build) ✅ 
- **Generate sitemap**: `npm run sitemap` (creates sitemap.xml with 3 languages)
- **Lint code**: `npm run lint` (ESLint with TypeScript rules)
- **Preview production build**: `npm run preview` (serves on port 3000)
- **Deploy to GitHub Pages**: `npm run deploy` (builds and deploys to gh-pages branch)
- **SEO files**: `npm run seo` (updates sitemap.xml and robots.txt)

## Known Issues

### ✅ Build Issues (RESOLVED)
- **Tailwind CSS v4 Compatibility**: Successfully resolved "Cannot apply unknown utility class" errors
- **Root Cause**: Tailwind CSS v4 requires different syntax and @reference directive for @apply usage
- **Solution Applied**: 
  1. Changed `@tailwind base/components/utilities` to `@import "tailwindcss"`
  2. Added `@reference "tailwindcss";` before each @apply directive in CSS custom classes
  3. Replaced custom crimean colors with standard Tailwind colors (crimean-700 → amber-700)
- **Result**: Production build now succeeds ✅ and preview works at localhost:3000

### 🔄 Solutions Attempted (from GEMINI.md + Claude Code)
- ❌ Updating all npm dependencies
- ❌ Re-initializing Tailwind CSS configuration files (tailwind.config.js, postcss.config.js)
- ❌ Downgrading tailwindcss to version 3
- ❌ Manually configuring postcss.config.js to use @tailwindcss/postcss
- ❌ Removing tsc -b from build script in package.json
- ❌ Attempting to build new Vite project and migrating source files
- ❌ Deleting node_modules, package-lock.json, and dist directories
- ❌ Ensuring tsconfig.app.json has "jsx": "react-jsx"
- ❌ Installing missing dependencies (react-router-dom, i18next, react-i18next, i18next-browser-languagedetector)
- ❌ Building CSS separately using tailwindcss CLI and postcss-cli
- ✅ Deleting all .js files from src/components (resolved JSX parsing errors)
- ✅ Replacing custom heritage colors with standard Tailwind colors
- ✅ **FINAL SOLUTION**: Tailwind v4 syntax migration with @import and @reference directives

### ✅ Current Development Status (COMPLETE)
- ✅ **Content**: All pages have authentic QIRI'M YOUNG content based on real projects
- ✅ **Internationalization**: Three languages implemented (English, Ukrainian, Crimean Tatar)
- ✅ **News Section**: Populated with real social media-style posts
- ✅ **Build**: Production build working ✅ with optimization and code splitting
- ✅ **SEO**: Comprehensive meta tags, sitemap.xml, robots.txt, structured data
- ✅ **Security**: All headers implemented, repository cleaned, sensitive data removed
- ✅ **Performance**: PageSpeed optimized with compression, caching, code splitting
- ✅ **Typography**: Fixed font-crimean utilities, proper e-Ukraine font loading
- ✅ **Domain**: Corrected all URLs to qirimtatarca.org (not qirimca.org)
- ✅ **Deployment**: Ready for young.qirimtatarca.org and GitHub Pages

## Architecture Overview

This is a React 19 + TypeScript single-page application for QIRI'M YOUNG, a Ukrainian nonprofit organization dedicated to Crimean Tatar language preservation through digital innovation. The site is optimized for performance and supports three languages.

### Internationalization (i18n)

- **Three Languages**: English (en), Ukrainian (uk), Crimean Tatar (crh)
- **React-i18next**: Full translation system implemented
- **Language Detection**: Browser language detection with localStorage persistence
- **Font Support**: e-Ukraine fonts support all three languages

### Key Performance Features

- **Lazy Loading**: All non-critical components are lazy-loaded using React.lazy()
- **Manual Code Chunking**: Vite configured to split vendor dependencies for optimal caching
- **Build Optimizations**: Terser minification with console/debugger removal, ESNext targeting
- **Font Loading**: Custom e-Ukraine fonts (Regular, Head) optimized for Crimean Tatar

### Component Structure

- `App.tsx` - Main application with routing and lazy loading
- `pages/` - Full-page components:
  - `HomePage.tsx` - Landing page with hero, about, projects, impact sections
  - `AboutPage.tsx` - Detailed organization information with timeline and partnerships
  - `ProjectsPage.tsx` - Comprehensive project showcase with real QIRI'M YOUNG projects
  - `NewsPage.tsx` - News and updates with authentic social media-style posts
  - `ImpactPage.tsx`, `GetInvolvedPage.tsx`, `TransparencyPage.tsx` - Additional pages
- `components/` - Reusable UI components and sections

### Authentic Content

All content is based on real QIRI'M YOUNG research:
- **National Corpus**: 1M+ words, partnership with Ministry of Reintegration
- **GitHub Projects**: QırımKey iOS keyboard, transliteration tools, dictionaries
- **Partnerships**: East Europe Foundation, Taras Shevchenko National University
- **Recognition**: Chytomo media coverage, EGAP program support

### Styling System

- **Tailwind CSS v4** with custom configuration
- **Corporate Color Palette**: 
  - Primary: #99CEEF (blue), Accent: #FDE61A (yellow), Accent-warm: #FF955B (orange)
  - Custom text colors, background gradients
- **Typography**: e-Ukraine font family for authentic Crimean Tatar display
- **Animations**: Custom Framer Motion animations throughout

### Build Configuration

- **Base Path**: Configured dynamically (`.github/` for GitHub Pages, `/` for subdomain)
- **Performance Optimized**: Manual chunks, dependency optimization, code splitting
- **TypeScript**: Strict mode with comprehensive linting rules
- **Vite 7**: Modern build tooling with React 19 support

### Deployment & SEO

**GitHub Pages (Automatic):**
- URL: https://qirimca.github.io/qirim-young-website/
- Automated via `.github/workflows/deploy.yml` on push to master
- Build includes sitemap generation, security headers, and optimization

**Subdomain Deployment (Production):**
- Target: https://young.qirimtatarca.org
- cPanel setup: Document Root `/public_html/young/` (separate subdomain)
- Base path: `/` (optimized for subdomain deployment)
- Instructions in `DEPLOYMENT.md` with complete cPanel configuration

**SEO Features:**
- Dynamic sitemap.xml with 21 URLs (7 pages × 3 languages)
- Multilingual hreflang support (crh, uk, en)
- Security headers and performance optimization
- Google/Bing webmaster tools ready
- PageSpeed.web.dev optimized structure

## Important Technical Notes

### Current Configuration (Ready for Production)
- ✅ **Domain**: All URLs corrected to `young.qirimtatarca.org` (not qirimca.org)
- ✅ **Typography**: Fixed Footer contrast issues (bg-amber-900, text-amber-200)
- ✅ **Build Path**: `base: "/"` for subdomain deployment
- ✅ **SEO**: Sitemap automatically regenerated with correct domain
- ✅ **Security**: All headers, .htaccess, robots.txt included
- ✅ **Analytics**: Google Analytics G-YKLWW2LSNE integrated
- ✅ **Localization**: Crowdin setup ready for community translation

### Deployment Process (FTP Ready)
1. **cPanel Setup**: Create subdomain with separate document root `/public_html/young/`
2. **Build**: `npm run build` (includes sitemap + analytics)
3. **FTP Upload**: Copy ALL files from `dist/` directory to `/public_html/young/`
   - ✅ **Complete dist/ contents**: index.html, assets/, fonts/, favicon files, sitemap.xml, robots.txt, .htaccess
   - ✅ **File structure preserved**: Upload exactly as organized in dist/
   - ✅ **Ready to deploy**: No additional configuration needed
4. **Verify**: Check https://young.qirimtatarca.org and all 3 languages

### Translation Management (Crowdin)
- **Project Type**: Software Localization (for React i18n JSON files)
- **Configuration**: `crowdin.yml` and `LOCALIZATION.md` included
- **Workflow**: crh (source) → uk, en (community translation)
- **Integration**: GitHub sync for automated translation updates

## Cultural Context & Content Guidelines

This website serves the global Crimean Tatar community and preservation mission:

- **Language Preservation**: UNESCO classifies Crimean Tatar as endangered - only 20-25% fluency in Ukraine
- **Digital Innovation**: Focus on corpus linguistics, machine translation, educational technology
- **Authentic Content**: All project information is researched from real sources, not AI-generated
- **Cultural Respect**: Content honors Crimean Tatar heritage while building digital bridges
- **Community Focus**: Emphasizes collaboration with native speakers, educators, researchers

### Real Projects to Highlight
- **National Corpus**: ctcorpus.org with 1M+ words
- **QırımKey**: First iOS keyboard for Crimean Tatar
- **Parallel Corpus**: English-Crimean Tatar translation research
- **Educational Resources**: Memrise, Quizlet, Anki courses
- **Academic Partnerships**: University collaborations and research publications

When working with this codebase, prioritize authentic representation of QIRI'M YOUNG's actual work and cultural sensitivity in all content decisions.