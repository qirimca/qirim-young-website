import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { ukTranslations } from './translations/uk'
import { crhTranslations } from './translations/crh'
import { enTranslations } from './translations/en'

// Use TypeScript translations for now, JSON files are for Crowdin sync
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