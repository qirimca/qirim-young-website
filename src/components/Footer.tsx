import { Mail, Github, Globe, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-crimean-900 text-white">
      <div className="container-width section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-crimean-head">Q</span>
              </div>
              <div>
                <div className="text-xl font-bold font-crimean-head">QIRI'M YOUNG</div>
                <div className="text-xs text-crimean-300">Dijital Miras</div>
              </div>
            </div>
            <p className="text-crimean-300 text-sm leading-relaxed">
              Qırımtatar dilini ve medeniıetini dijital alemi sayesinde 
              saqlamaq ve inkişaf ettirmek misyonunda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-crimean-head">Hızlı Bağlantılar</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Aqqında</a>
              <a href="#projects" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Loyihalar</a>
              <a href="#impact" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Tesir</a>
              <a href="#donate" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Yardım Et</a>
            </nav>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-crimean-head">Projelerimiz</h4>
            <nav className="space-y-2">
              <a href="https://wordle.qirimtatarca.org" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Qırımtatar Wordle</a>
              <a href="https://bulbul.qirimtatarca.org" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">BÜLBÜL Platform</a>
              <a href="https://translate.google.com" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Google Translate</a>
              <a href="https://qirimtatarca.org" className="block text-crimean-300 hover:text-yellow-600 transition-colors text-sm">Ana Site</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-crimean-head">İletişim</h4>
            <div className="space-y-3">
              <a href="mailto:info@qirimtatarca.org" className="flex items-center space-x-2 text-crimean-300 hover:text-yellow-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@qirimtatarca.org</span>
              </a>
              <a href="https://github.com/qirimca" className="flex items-center space-x-2 text-crimean-300 hover:text-yellow-600 transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://qirimtatarca.org" className="flex items-center space-x-2 text-crimean-300 hover:text-yellow-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">qirimtatarca.org</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-crimean-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-crimean-300 mb-4 md:mb-0">
            © 2024 QIRI'M YOUNG. Barça hoquqlar saqlanğan.
          </div>
          <div className="flex items-center space-x-1 text-sm text-crimean-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-yellow-600" />
            <span>for Crimean Tatar heritage</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer