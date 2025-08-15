#!/usr/bin/env node

/**
 * Sitemap Generator for QIRI'M YOUNG Website
 * Generates XML sitemap with multilingual support
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://young.qirimca.org';
const LANGUAGES = ['crh', 'uk', 'en'];
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Define site structure with priorities and update frequencies
const PAGES = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/about',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/projects',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/impact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/news',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/get-involved',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/transparency',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  }
];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
`;

  PAGES.forEach(page => {
    const url = `${DOMAIN}${page.path === '/' ? '' : page.path}`;
    
    sitemap += `  <!-- ${page.path === '/' ? 'Home' : page.path.substring(1)} Page -->
  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
`;

    // Add hreflang for multilingual support
    LANGUAGES.forEach(lang => {
      const langUrl = page.path === '/' ? 
        `${DOMAIN}/?lang=${lang}` : 
        `${DOMAIN}${page.path}?lang=${lang}`;
      sitemap += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${langUrl}" />
`;
    });
    
    // Add x-default
    sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
  </url>

`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

function writeSitemap() {
  const sitemapContent = generateSitemap();
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📄 Generated ${PAGES.length} pages with ${LANGUAGES.length} languages each`);
  console.log(`🌐 Domain: ${DOMAIN}`);
  console.log(`📅 Last modified: ${CURRENT_DATE}`);
}

// Run if called directly
writeSitemap();

export { generateSitemap, writeSitemap };