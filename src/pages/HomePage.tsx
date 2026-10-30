import React from 'react';
import { Hero } from '../components/Hero';
import { MENU_ITEMS } from '../data/menu';
import { GALLERY_MANIFEST } from '../data/gallery';
import { Sparkles, Flame, ArrowRight, Heart, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Top featured highlights
  const signatureDishes = [
    MENU_ITEMS.find((i) => i.id === 'starter-01')!, // Peri Peri Fried Chicken (Must try)
    MENU_ITEMS.find((i) => i.id === 'cheesecake-01')!, // New York Baked Blueberry Cheesecake
    MENU_ITEMS.find((i) => i.id === 'pastry-01')!, // Belgian Dark Chocolate Truffle
    MENU_ITEMS.find((i) => i.id === 'coffee-07')!, // Flat White
  ].filter(Boolean);

  const previewGallery = GALLERY_MANIFEST.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero
        onExploreMenu={() => onNavigate('menu')}
        onVisitUs={() => onNavigate('visit')}
      />

      {/* 2. Signature Delights Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold text-coffee-600 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Chef's Handcrafted Picks</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 tracking-tight">
              Signature Delights & Favorites
            </h2>
            <p className="text-sm sm:text-base text-espresso-800/80 mt-1 max-w-xl">
              A curated preview of our most celebrated creations. Explore all 72 handcrafted recipes on our Complete Menu page.
            </p>
          </div>

          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-100 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow self-start md:self-end"
          >
            <span>Explore All 72 Dishes</span>
            <ArrowRight className="w-4 h-4 text-terracotta-400" />
          </button>
        </div>

        {/* 4 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('menu')}
              className="group cursor-pointer bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-cream-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  {item.isVeg !== undefined && (
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 bg-white/95 rounded shadow-xs ${
                        item.isVeg ? 'border border-emerald-600' : 'border border-red-600'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    </span>
                  )}
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-terracotta-500 text-white text-[10px] font-bold uppercase shadow-sm flex items-center space-x-1">
                      <Flame className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 right-2.5">
                  <span className="px-2.5 py-1 rounded-lg bg-espresso-950/90 text-cream-100 font-serif font-bold text-sm shadow-md">
                    ₹{item.price}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coffee-600">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-espresso-900 group-hover:text-terracotta-600 transition-colors leading-snug mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-espresso-800/75 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-cream-200 flex items-center justify-between text-xs font-semibold text-terracotta-600">
                  <span>View in Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Story & Atmosphere Teaser */}
      <section className="bg-cream-200/60 border-y border-cream-300 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-300 text-xs font-semibold text-coffee-600">
                <Heart className="w-3.5 h-3.5 text-terracotta-500" />
                <span className="uppercase tracking-wider">Mediterranean & Boho-Chic Design</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 tracking-tight leading-snug">
                An Oasis in Acharya Vihar Designed for Slow Living
              </h2>

              <p className="text-sm sm:text-base text-espresso-800/80 leading-relaxed">
                Conceptualized by <strong className="text-espresso-900">Vogue Architect & Interiors</strong>, The Cafe Heaven was born from a vision to bring Mediterranean coastal serenity to Bhubaneswar. Curved partition portals, natural cane dining chairs, wicker chandeliers, and tropical Heliconia accents come together to form an intimate retreat.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-cream-300">
                  <span className="font-serif text-xl font-bold text-espresso-900 block">100% Pure</span>
                  <span className="text-xs text-coffee-600">Dairy Butter & Cream</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-cream-300">
                  <span className="font-serif text-xl font-bold text-espresso-900 block">Single-Origin</span>
                  <span className="text-xs text-coffee-600">Arabica Espresso Beans</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('story')}
                  className="px-6 py-3 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>Read Our Full Story & Concept</span>
                  <ArrowRight className="w-4 h-4 text-terracotta-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-cream-300">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                    alt="Arched dining nooks at The Cafe Heaven"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-cream-300 mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Warm cane seating and ambient lighting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery Sneak Peek */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
              Photographic Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 tracking-tight mt-1">
              Atmosphere & Moments
            </h2>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-espresso-900 hover:text-terracotta-600 transition-colors"
          >
            <span>View All Photos in Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewGallery.map((img) => (
            <div
              key={img.id}
              onClick={() => onNavigate('gallery')}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-cream-200 aspect-square relative shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-medium leading-snug line-clamp-1">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visit Us Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-espresso-900 text-cream-100 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-left">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-terracotta-500/90 text-white text-xs font-semibold uppercase tracking-wider inline-block">
              Acharya Vihar • Bhubaneswar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-100">
              We Look Forward to Welcoming You
            </h2>
            <p className="text-sm sm:text-base text-cream-200/80 leading-relaxed">
              Located at Plot No. M/5/R/27, Gajapati Nagar, Acharya Vihar. Open every single day from 10:00 AM to 10:00 PM for freshly pulled coffees, celebratory cakes, and warm memories.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('visit')}
                className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us & Get Directions</span>
              </button>

              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-espresso-800 hover:bg-espresso-700 text-cream-100 border border-espresso-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors"
              >
                <span>Browse Menu</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
