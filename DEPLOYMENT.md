# QIRI'M YOUNG Website Deployment Guide

## GitHub Pages Deployment (Automatic)

The website is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

- **Live URL**: https://qirimca.github.io/qirim-young-website/
- **Workflow**: `.github/workflows/deploy.yml` automatically builds and deploys the site
- **Base URL**: `/qirim-young-website/` (configured in vite.config.js)

## FTP Deployment to qirimtatarca.org

### Prerequisites
1. Build the website: `npm run build`
2. The build output will be in the `dist/` directory

### Required Files for FTP Upload
All files from the `dist/` directory need to be uploaded to the web server root:

#### Essential Files:
- `index.html` - Main HTML file
- `assets/` - JavaScript and CSS bundles
- `favicon.svg` - Main favicon
- `favicon-96x96.png` - PNG favicon
- `favicon.ico` - Legacy ICO favicon
- `apple-touch-icon.png` - Apple device icon
- `site.webmanifest` - Web app manifest
- `web-app-manifest-192x192.png` - PWA icon 192x192
- `web-app-manifest-512x512.png` - PWA icon 512x512
- `fonts/` - Complete font directory with e-Ukraine fonts
- `logo.svg` - QIRI'M YOUNG logo

### FTP Configuration for qirimtatarca.org

1. **Server Settings**:
   - Host: [Your FTP host for qirimtatarca.org]
   - Username: [Your FTP username]
   - Password: [Your FTP password]
   - Port: 21 (or 22 for SFTP)

2. **Upload Process**:
   ```bash
   # After running npm run build
   # Upload all contents of dist/ directory to web root
   ftp> cd /public_html  # or your web root directory
   ftp> mput dist/*      # Upload all files
   ftp> mkdir assets     # Create assets directory
   ftp> cd assets
   ftp> mput dist/assets/*  # Upload all assets
   ```

3. **Important Notes**:
   - Ensure all favicon files are in the root directory
   - The `fonts/` directory must be uploaded completely
   - All paths in index.html are relative to root (no /qirim-young-website/ prefix needed)
   - Make sure site.webmanifest is accessible from root

### Domain Configuration

For custom domain (qirimtatarca.org):
1. Update `vite.config.js` base URL to `"/"` for production
2. Rebuild with `npm run build`
3. Upload new build to FTP

### Verification Checklist

After FTP deployment, verify:
- [ ] Website loads at qirimtatarca.org
- [ ] All 3 languages work (Crimean Tatar, Ukrainian, English)
- [ ] Navigation between pages functions correctly
- [ ] Favicon appears in browser tab
- [ ] Mobile responsiveness works
- [ ] Fonts load correctly (e-Ukraine family)
- [ ] Corporate colors display properly
- [ ] All images and assets load
- [ ] Web app manifest works for PWA features

## Development Server

For local development:
```bash
npm run dev
# Runs on http://localhost:5176/qirim-young-website/
```

## Build Command

```bash
npm run build
# Creates production build in dist/ directory
```

## Technical Stack

- **React 19** with TypeScript
- **Vite 7** for building and development
- **Tailwind CSS v4** for styling
- **React Router** for navigation
- **React i18next** for internationalization
- **Framer Motion** for animations
- **Lucide React** for icons

## Language Support

The website supports three languages with complete translations:
- **Crimean Tatar (crh)** - Primary language
- **Ukrainian (uk)** - Secondary language  
- **English (en)** - International language

All content is authentic and based on real QIRI'M YOUNG projects and activities.