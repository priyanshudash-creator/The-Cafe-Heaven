import React from 'react';
import { ArrowDown, Sparkles, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitUs }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cream-100">
      {/* Background Architectural Accent: Subtle Arched Silhouettes and Warm Mediterranean Wash */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] rounded-full bg-cream-300 blur-3xl" />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-terracotta-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Refined Typography & Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200/90 border border-cream-300/80 text-xs font-medium text-coffee-600">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span className="tracking-wide uppercase">Artisanal Bakery & Contemporary Café</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso-900 leading-[1.12] tracking-tight">
              A haven for slow coffee, handcrafted pastries, and quiet conversations.
            </h1>

            <p className="font-sans text-base sm:text-lg text-espresso-800/85 max-w-2xl leading-relaxed">
              Tucked into the vibrant neighborhood of Acharya Vihar, <span className="font-medium text-espresso-900">The Cafe Heaven</span> blends warm tropical-Mediterranean interiors with an extensive artisanal bakery counter — from New York style cheesecakes and fresh pastries to barista-pulled espresso and crisp savory starters.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-lg">
              <div className="p-3.5 rounded-xl bg-white/70 border border-cream-300 shadow-sm">
                <span className="block font-serif text-2xl font-bold text-espresso-900">8</span>
                <span className="block text-xs text-coffee-600 font-medium">Distinct Menu Categories</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-cream-300 shadow-sm">
                <span className="block font-serif text-2xl font-bold text-espresso-900">72</span>
                <span className="block text-xs text-coffee-600 font-medium">Handcrafted Offerings</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-cream-300 shadow-sm">
                <span className="block font-serif text-2xl font-bold text-espresso-900">10–10</span>
                <span className="block text-xs text-coffee-600 font-medium">Open 7 Days a Week</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-7 py-3.5 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-terracotta-400" />
                <span>Explore Full Menu</span>
              </button>

              <button
                onClick={onVisitUs}
                className="px-6 py-3.5 bg-cream-200/90 hover:bg-cream-300 text-espresso-900 rounded-full text-sm font-semibold border border-cream-300 transition-colors flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-terracotta-500" />
                <span>Find Us in Acharya Vihar</span>
              </button>
            </div>
          </div>

          {/* Right Column: Handcrafted Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Feature Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-xl p-3 sm:p-4">
                
                {/* Hero Showcase Image */}
                <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                    alt="The Cafe Heaven warm ambiance and coffee table"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Caption inside image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-terracotta-500/90 text-[11px] font-semibold uppercase tracking-wider mb-1">
                      Acharya Vihar Sanctuary
                    </span>
                    <h2 className="font-serif text-lg font-medium leading-snug">
                      Boho-chic cane textures, arched partitions & rich aromas.
                    </h2>
                  </div>
                </div>

                {/* Sub-card with daily recommendation */}
                <div className="mt-4 p-4 rounded-xl bg-cream-100/90 border border-cream-300/80 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-espresso-900 text-cream-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block">
                      Chef's Note
                    </span>
                    <p className="text-xs text-espresso-800 leading-relaxed mt-0.5">
                      Pair our freshly baked Blueberry Cheesecake with a slow Americano or explore our savory Must-Try Peri Peri Fried Chicken.
                    </p>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Stamp */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-terracotta-500 text-white px-4 py-2 rounded-2xl shadow-lg border-2 border-cream-100 text-xs font-serif italic hidden sm:block">
                Acharya Vihar • Odisha
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-12 text-center">
        <button
          onClick={onExploreMenu}
          className="inline-flex flex-col items-center text-xs text-coffee-600 hover:text-espresso-900 transition-colors focus:outline-none"
        >
          <span className="text-[11px] tracking-widest uppercase mb-1">Browse Bakery & Menu</span>
          <ArrowDown className="w-4 h-4 text-terracotta-500 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
