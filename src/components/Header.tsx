import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#processo', label: 'Como Funciona' }, // Novo Link Adicionado
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md border-white/10 py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/LogoGabrielaDecora.png"
              alt="Gabriela Decorações"
              className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-widest text-foreground/90 hover:text-white transition-all duration-300 relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop (WhatsApp) */}
          <a
            href="https://wa.me/556133880005"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-8 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-900 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Orçamento
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-6 py-8 bg-black/95 backdrop-blur-xl border-t border-white/10 items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="text-center w-full">
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-2 text-sm font-medium uppercase tracking-widest text-foreground/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* CTA Button - Mobile (WhatsApp) */}
            <li className="pt-4">
              <a
                href="https://wa.me/556133880005"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center px-10 py-3 text-xs font-bold uppercase tracking-wider rounded-sm bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-900 shadow-lg"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;