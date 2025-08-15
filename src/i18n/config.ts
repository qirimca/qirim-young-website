import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// JSON translations - single source of truth for Crowdin sync
import ukTranslations from './locales/uk.json'
import crhTranslations from './locales/crh.json'
import enTranslations from './locales/en.json'

const resources = {
  uk: { translation: ukTranslations },
  crh: { translation: crhTranslations },
  en: { translation: enTranslations }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uk',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n