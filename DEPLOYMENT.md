# QIRI'M YOUNG Website Deployment Guide

## Live Domains (Primary)

The same production site is served on both custom domains:

- <https://young.qirimca.org>
- <https://young.qirimtatarca.org>

GitHub Pages (`https://qirimca.github.io/qirim-young-website/`) can be used as a fallback/preview target, but the custom domains above are primary.

## WebDAV / cPanel Deployment

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
- `fonts/` – Complete font directory with e-Ukraine fonts
- `logo.svg` – QIRI'M YOUNG logo

### Credentials — NEVER hardcode in source

Hosting credentials **must not** be committed to this repository.
Store them outside git and pass them as environment variables or GitHub Actions secrets.

Required variables:

- `FTP_USER` — WebDAV / cPanel username
- `FTP_PASSWORD` — WebDAV / cPanel password

Optional variable:

- `WEBDAV_URL` — WebDAV endpoint URL (default: `https://webdisk.qirimtatarca.org:2078/public_html/young`)

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

> **Tip (Windows):** Batch files do not natively read `.env` files.
> Create a small helper `set-env.bat` (already listed in `.gitignore`) that
> contains only `set` commands, then call it before running the upload script:
> ```bat
> REM set-env.bat  — DO NOT commit this file (already in .gitignore)
> set FTP_USER=your_cpanel_username
> set FTP_PASSWORD=your_cpanel_password
> ```
> Then run: `call set-env.bat && upload_to_hosting.bat`

> **Tip (Linux/macOS):** You can use a `.env` file with a tool such as
> `direnv` or simply `source .env` before running `upload_all.sh`.

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

### Domain Configuration

For custom domain deployment:
1. ✅ `vite.config.js` configured with `base: "/"` for root deployment
2. ✅ Build ready with `npm run build`
3. ✅ Upload `dist/` contents to `/public_html/young/` directory
4. ✅ Validate both domains:
   - `https://young.qirimca.org`
   - `https://young.qirimtatarca.org`

### Verification Checklist

After deployment, verify:

- [ ] Website loads at <https://young.qirimca.org>
- [ ] Website loads at <https://young.qirimtatarca.org>
- [ ] All 3 languages work (Crimean Tatar, Ukrainian, English)
- [ ] Navigation between pages functions correctly
- [ ] Favicon appears in browser tab
- [ ] Mobile responsiveness works
- [ ] Fonts load correctly (e-Ukraine family)
- [ ] Corporate colors display properly
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
