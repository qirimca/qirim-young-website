# Localization Guide - QIRI'M YOUNG Website

## Crowdin Setup for Translation Management

### Project Configuration

**Project Type**: Software Localization
**Source Language**: Crimean Tatar (crh)
**Target Languages**: Ukrainian (uk), English (en)

### Why Software Localization?

- ✅ Perfect for React/JavaScript applications
- ✅ Supports JSON format used by react-i18next
- ✅ GitHub integration for automatic sync
- ✅ Translation workflow management
- ✅ Context and screenshots for translators
- ✅ Translation memory and consistency checks

### Setup Steps

1. **Create Crowdin Project**:
   - Go to https://crowdin.com/project/create
   - Select "Software Localization" from project types
   - Project Name: `QIRI'M YOUNG Website`
   - Description: `Crimean Tatar digital heritage website localization`

2. **Languages Configuration**:
   - Source: Crimean Tatar (crh) - maintained by QIRI'M YOUNG team
   - Targets: Ukrainian (uk), English (en) - community/professional translation

3. **File Structure**:
   ```
   src/i18n/locales/
   ├── crh.json (source - Crowdin pulls from this)
   ├── uk.json (target - Crowdin pushes to this)
   └── en.json (target - Crowdin pushes to this)
   ```

4. **GitHub Integration**:
   - Connect repository: `qirimca/qirim-young-website`
   - Enable automatic sync
   - Set up webhooks for real-time updates
   - Configure PR-based workflow

### Translation Workflow

1. **Content Updates**:
   - Update `src/i18n/locales/crh.json` (source file)
   - Crowdin automatically detects changes
   - Translators receive notifications

2. **Translation Process**:
   - Professional translators work in Crowdin UI
   - Context provided via screenshots and descriptions
   - Translation memory suggests consistent translations
   - Quality assurance and proofreading workflow

3. **Deployment**:
   - Completed translations automatically sync to GitHub
   - Pull request created with new translations
   - Review and merge translations
   - Automatic deployment via GitHub Actions

### Benefits for QIRI'M YOUNG

- **Community Engagement**: Volunteers can contribute translations
- **Professional Quality**: Integration with translation agencies
- **Cultural Sensitivity**: Context and guidelines for Crimean Tatar content
- **Consistency**: Translation memory ensures consistent terminology
- **Efficiency**: Automated workflow reduces manual work

### Current i18n Structure

The website uses react-i18next with comprehensive translations:
- **Navigation**: Multi-language menu system
- **Content**: All pages translated (7 pages × 3 languages = 21 URLs)
- **SEO**: Multilingual sitemap and hreflang tags
- **Cultural Context**: Authentic Crimean Tatar terminology preserved

### Getting Started

1. Create Crowdin account at https://crowdin.com
2. Choose "Software Localization" project type
3. Upload `crowdin.yml` configuration
4. Import existing translation files
5. Set up GitHub integration
6. Invite community translators

This setup will streamline the translation process while maintaining the cultural authenticity and technical quality of QIRI'M YOUNG's digital presence.