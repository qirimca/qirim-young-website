# QIRI'M YOUNG Website Deployment Guide

## Live Domains (Primary)

Primary production domains:
- https://young.qirimca.org
- https://young.qirimtatarca.org

GitHub Pages (`https://qirimca.github.io/qirim-young-website/`) can be used as a fallback/preview target, but custom domains above are primary.

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

### GitHub Secrets Configuration

For secure deployments (automated or local), do not hardcode passwords. Instead, configure the following credentials as environment variables or GitHub Secrets:

- `FTP_USER`: The FTP/WebDAV username for the hosting account (e.g., `qirimtatarca`).
- `FTP_PASSWORD`: The password for the FTP/WebDAV hosting account.
- `WEBDAV_URL` (optional): WebDAV endpoint URL (default: `https://webdisk.qirimtatarca.org:2078/public_html/young`).

GitHub Actions repository secrets path:
`Settings → Secrets and variables → Actions`

### Local Windows/WebDAV Deployment

`upload_to_hosting.bat` reads:
- `FTP_USER` (optional, default: `qirimtatarca`)
- `FTP_PASSWORD` (required)
- `WEBDAV_URL` (optional, default above)

Set credentials in your shell before running the script (recommended), instead of entering passwords interactively.

### FTP Configuration for young.qirimtatarca.org

1. **cPanel Subdomain Setup**:
   - Domain: `young.qirimtatarca.org`
   - Document Root: `/public_html/young/` (DON'T share with main domain)
   - This creates separate directory for subdomain

2. **Server Settings**:
   - Host: [Your FTP host for qirimtatarca.org]
   - Username: [Your FTP username]  
   - Password: [Your FTP password]
   - Port: 21 (or 22 for SFTP)

3. **Upload Process**:
   ```bash
   # After running npm run build
   # Upload all contents of dist/ directory to subdomain root
   ftp> cd /public_html/young/  # subdomain directory
   ftp> mput dist/*             # Upload all files
   ftp> mkdir assets            # Create assets directory
   ftp> cd assets
   ftp> mput dist/assets/*      # Upload all assets
   ```

3. **Important Notes**:
   - Ensure all favicon files are in the root directory
   - The `fonts/` directory must be uploaded completely
   - All paths in index.html are relative to root (no /qirim-young-website/ prefix needed)
   - Make sure site.webmanifest is accessible from root

### Domain Configuration

For custom domain deployment:
1. ✅ `vite.config.js` configured with `base: "/"` for root deployment
2. ✅ Build ready with `npm run build`
3. ✅ Upload dist/ contents to `/public_html/young/` directory
4. ✅ Validate both domains:
   - `https://young.qirimca.org`
   - `https://young.qirimtatarca.org`

### Verification Checklist

After FTP deployment, verify:
- [ ] Website loads at https://young.qirimca.org
- [ ] Website loads at https://young.qirimtatarca.org
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