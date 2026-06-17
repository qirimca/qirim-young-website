# QIRI'M YOUNG Website Deployment Guide

## Live Domains

The same build is served on two domains:

| Domain | URL |
|--------|-----|
| Primary | <https://young.qirimca.org> |
| Mirror  | <https://young.qirimtatarca.org> |

## GitHub Pages Deployment (Automatic)

The website is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

- **Workflow**: `.github/workflows/deploy.yml` automatically builds and deploys the site
- **Base URL**: `/` (configured in `vite.config.js`)

## WebDAV / cPanel Deployment (Manual)

### Prerequisites

1. Build the website:
   ```bash
   npm run build
   ```
2. The build output will be in the `dist/` directory.

### Required Files for Upload

All files from `dist/` must be uploaded to the web-server document root:

- `index.html` – Main HTML file
- `assets/` – JavaScript and CSS bundles
- `favicon.svg`, `favicon-96x96.png`, `favicon.ico` – Favicons
- `apple-touch-icon.png` – Apple device icon
- `site.webmanifest` – Web app manifest
- `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png` – PWA icons
- `fonts/` – Complete font directory (e-Ukraine family, WOFF2)
- `logo.svg` – QIRI'M YOUNG logo

### Credentials — NEVER hardcode in source

Hosting credentials **must not** be committed to this repository.
Store them outside git and pass them as environment variables.

#### Linux / macOS (shell)

```bash
export FTP_USER="your_cpanel_username"
export FTP_PASSWORD="your_cpanel_password"
# Optional — override the default WebDAV URL:
# export WEBDAV_URL="https://webdisk.qirimtatarca.org:2078/public_html/young"

bash upload_all.sh
```

#### Windows (Command Prompt)

```bat
set FTP_USER=your_cpanel_username
set FTP_PASSWORD=your_cpanel_password
REM Optional:
REM set WEBDAV_URL=https://webdisk.qirimtatarca.org:2078/public_html/young

upload_to_hosting.bat
```

> **Tip:** Use a `.env` file that is listed in `.gitignore`, or your OS credential
> manager, to avoid re-typing credentials every session.

#### GitHub Actions secrets

When deploying via a GitHub Actions workflow, store credentials as
[repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets):

1. Go to **`Settings → Secrets and variables → Actions → New repository secret`**.
2. Add the following secrets:
   - `FTP_USER` — your cPanel username
   - `FTP_PASSWORD` — your cPanel password
   - `WEBDAV_URL` *(optional)* — override the default WebDAV URL

The workflow then reads them with `${{ secrets.FTP_PASSWORD }}` etc.

### Hosting / cPanel Setup

| Setting | Value |
|---------|-------|
| Subdomain | `young.qirimtatarca.org` |
| Document Root | `/public_html/young/` |
| WebDAV URL | `https://webdisk.qirimtatarca.org:2078/public_html/young` |
| Port | 2078 (WebDAV) / 21 (FTP) / 22 (SFTP) |

### Verification Checklist

After deployment, verify:

- [ ] Website loads at <https://young.qirimca.org>
- [ ] Website loads at <https://young.qirimtatarca.org>
- [ ] All 3 languages work (Crimean Tatar, Ukrainian, English)
- [ ] Navigation between pages functions correctly
- [ ] Favicon appears in browser tab
- [ ] Mobile responsiveness works
- [ ] Fonts load correctly (e-Ukraine family)
- [ ] Corporate colours display properly
- [ ] All images and assets load
- [ ] Web app manifest works for PWA features

## Development Server

```bash
npm run dev
# Runs on http://localhost:5173/ (port may vary)
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
- **React i18next** for internationalisation
- **Framer Motion** for animations
- **Lucide React** for icons

## Language Support

The website supports three languages with complete translations:

- **Crimean Tatar (crh)** – Primary language
- **Ukrainian (uk)** – Secondary language
- **English (en)** – International language

All content is authentic and based on real QIRI'M YOUNG projects and activities.