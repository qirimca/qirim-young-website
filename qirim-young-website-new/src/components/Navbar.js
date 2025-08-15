"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navLinks = [
        { href: '#about', label: 'Aqqında', labelEn: 'About' },
        { href: '#projects', label: 'Loyihalar', labelEn: 'Projects' },
        { href: '#impact', label: 'Tesir', labelEn: 'Impact' },
        { href: '#contact', label: 'Aloqa', labelEn: 'Contact' },
    ];
    return (<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-crimean-200">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-crimean-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-crimean-head">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-crimean-800 font-crimean-head">QIRI'M YOUNG</span>
              <span className="text-xs text-crimean-600 hidden sm:block">Dijital Miras</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (<a key={link.href} href={link.href} className="text-crimean-700 hover:text-heritage-gold font-medium transition-colors duration-200 relative group">
                <span className="block">{link.label}</span>
                <span className="text-xs text-crimean-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.labelEn}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-heritage-gold transition-all duration-200 group-hover:w-full"></div>
              </a>))}
            
            {/* Donate Button */}
            <a href="#donate" className="btn-primary inline-flex items-center space-x-2" aria-label="Make a donation">
              <lucide_react_1.Heart className="w-4 h-4"/>
              <span>Yardım Et</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-crimean-700 hover:text-heritage-gold p-2" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <lucide_react_1.X className="w-6 h-6"/> : <lucide_react_1.Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-4 border-t border-crimean-200">
            {navLinks.map((link) => (<a key={link.href} href={link.href} className="block text-crimean-700 hover:text-heritage-gold font-medium transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="block">{link.label}</span>
                <span className="text-xs text-crimean-500">{link.labelEn}</span>
              </a>))}
            <a href="#donate" className="btn-primary inline-flex items-center space-x-2 w-full justify-center mt-4" onClick={() => setIsMenuOpen(false)}>
              <lucide_react_1.Heart className="w-4 h-4"/>
              <span>Yardım Et</span>
            </a>
          </div>
        </div>
      </div>
    </nav>);
};
exports.default = Navbar;
