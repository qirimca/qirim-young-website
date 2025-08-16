import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Heart, Globe } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const changeLanguage = (lng: string) => {
    // Update URL with lang parameter
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lng)
    window.history.pushState({}, '', url.toString())
    
    // Change i18n language
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
    
    // Trigger Crowdin proxy reload if available
    if (window.proxyTranslator && window.proxyTranslator.reload) {
      window.proxyTranslator.reload()
    }
  }

  const navLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/impact', label: t('nav.impact') },
    { href: '/news', label: t('nav.news') },
    { href: '/get-involved', label: t('nav.getInvolved') },
    { href: '/transparency', label: t('nav.transparency') },
  ]

  const languages = [
    { code: 'crh', name: 'Qırımtatar', flag: '🇺🇦' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-crimean-200">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-crimean-head">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-800 font-crimean-head">QIRI'M YOUNG</span>
              <span className="text-xs text-amber-600 hidden sm:block">Dijital Miras</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-amber-700 hover:text-accent-gold font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.href ? 'text-accent-gold' : ''
                }`}
              >
                <span className="block">{link.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-amber transition-all duration-200 group-hover:w-full"></div>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 text-amber-700 hover:text-accent-gold font-medium transition-colors duration-200"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{i18n.language.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-amber-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-amber-50 transition-colors flex items-center space-x-3 ${
                        i18n.language === lang.code ? 'bg-amber-50 text-accent-gold' : 'text-amber-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Donate Button */}
            <Link
              to="/get-involved"
              className="btn-primary inline-flex items-center space-x-2"
              aria-label="Get involved"
            >
              <Heart className="w-4 h-4" />
              <span>{t('nav.donate')}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 text-amber-700 hover:text-accent-gold font-medium transition-colors duration-200"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs">{i18n.language.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-amber-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-3 py-2 text-left hover:bg-amber-50 transition-colors flex items-center space-x-2 text-sm ${
                        i18n.language === lang.code ? 'bg-amber-50 text-accent-gold' : 'text-amber-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-amber-700 hover:text-accent-gold p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-amber-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-amber-700 hover:text-accent-gold font-medium transition-colors duration-200 py-2 ${
                  location.pathname === link.href ? 'text-accent-gold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block">{link.label}</span>
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="btn-primary inline-flex items-center space-x-2 w-full justify-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-4 h-4" />
              <span>{t('nav.donate')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar