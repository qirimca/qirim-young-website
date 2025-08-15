# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (opens automatically at localhost:5174)
- **Build for production**: `npm run build` (TypeScript build + Vite build) ⚠️ Currently fails due to Tailwind CSS color utilities
- **Lint code**: `npm run lint` (ESLint with TypeScript rules)
- **Preview production build**: `npm run preview` (serves on port 3000)
- **Deploy to GitHub Pages**: `npm run deploy` (builds and deploys to gh-pages branch)

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

### ✅ Current Development Status
- ✅ **Content**: All pages have authentic QIRI'M YOUNG content based on real projects
- ✅ **Internationalization**: Three languages implemented (English, Ukrainian, Crimean Tatar)
- ✅ **News Section**: Populated with real social media-style posts
- ✅ **Build**: Production build working ✅ (preview at localhost:3000)
- ✅ **SEO**: Comprehensive meta tags, Open Graph, Twitter cards, structured data
- 🔄 **Images**: Need authentic images and Crimean Tatar ornek patterns
- ✅ **Completion**: All major sections completed in all three languages

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

- **Base Path**: `/qirim-young-website/` for GitHub Pages deployment
- **Performance Optimized**: Manual chunks, dependency optimization
- **TypeScript**: Strict mode with comprehensive linting rules
- **Vite 7**: Modern build tooling with React 19 support

### Deployment

The site deploys to GitHub Pages at `young.qirimtatarca.org` via the `deploy` script. Build artifacts go to `dist/` and are pushed to the `gh-pages` branch.

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