import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'menu', label: 'Complete Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit', label: 'Visit Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-left group flex items-center space-x-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-espresso-900 text-cream-100 flex items-center justify-center shadow-sm group-hover:bg-terracotta-500 transition-colors">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 block leading-tight">
                The Cafe Heaven
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-coffee-600 font-medium block">
                Acharya Vihar • Bhubaneswar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-espresso-900 bg-cream-300/70 font-semibold'
                    : 'text-espresso-800/80 hover:text-espresso-950 hover:bg-cream-200/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right text-xs text-coffee-600 hidden xl:block">
              <span className="flex items-center justify-end space-x-1">
                <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Open 10:00 AM – 10:00 PM</span>
              </span>
              <span className="flex items-center justify-end space-x-1 text-espresso-800">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Gajapati Nagar, Acharya Vihar</span>
              </span>
            </div>

            <button
              onClick={() => handleLinkClick('menu')}
              className="px-4 py-2 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow"
            >
              Explore Menu
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => handleLinkClick('menu')}
              className="px-3 py-1.5 bg-espresso-900 text-cream-100 rounded-full text-xs font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-espresso-900 hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-300 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cream-300 text-espresso-900 font-semibold'
                    : 'text-espresso-800 hover:bg-cream-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-cream-300 space-y-2 text-xs text-espresso-800">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-terracotta-500" />
              <span>Open Daily: 10:00 AM – 10:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-terracotta-500" />
              <span>Plot M/5/R/27, Gajapati Nagar, Acharya Vihar</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
