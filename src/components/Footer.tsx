import React from 'react';
import { Coffee, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-espresso-950 text-cream-200 border-t border-espresso-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-cream-100 text-espresso-950 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5 text-terracotta-600" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-cream-100 block">
                  The Cafe Heaven
                </span>
                <span className="text-[11px] font-sans uppercase tracking-widest text-coffee-400 block font-medium">
                  Acharya Vihar • Bhubaneswar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-sm">
              A serene bohemian café offering handcrafted pastries, artisanal cheesecakes, celebration cakes, barista coffee, and savory kitchen starters in a relaxed Mediterranean ambiance.
            </p>

            <div className="pt-2 text-xs text-cream-400">
              <span className="inline-block px-3 py-1 rounded-full bg-espresso-900 border border-espresso-800 text-coffee-300">
                8 Handcrafted Categories • 72 Menu Selections
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-300/90">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Our Story & Atmosphere
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Complete 72-Item Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Authentic Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Visit Acharya Vihar
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact Information */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm text-cream-300/90">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase text-xs">
              Location & Hours
            </h4>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>
                  Plot No. M/5/R/27, Gajapati Nagar, Acharya Vihar, Bhubaneswar, Odisha — 751013
                </span>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>Monday – Sunday: 10:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/8gJqT3myEH5Zwr5e6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-terracotta-400 hover:text-terracotta-300 font-medium"
              >
                <span>Open Google Maps Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="mt-12 pt-8 border-t border-espresso-900 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400/70 gap-3">
          <p>
            © {new Date().getFullYear()} The Cafe Heaven, Acharya Vihar. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Handcrafted with care for food & coffee lovers</span>
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
