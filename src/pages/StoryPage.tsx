import React from 'react';
import { Sparkles, Coffee, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (tab: string) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-cream-100 text-espresso-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-semibold text-coffee-600">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">The Story & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso-900">
            Crafted with Soul in Acharya Vihar
          </h1>

          <p className="font-sans text-base sm:text-xl text-espresso-800/85 leading-relaxed">
            The Cafe Heaven was founded on a simple conviction: that a neighborhood café should be more than a stop for quick caffeine — it should be a sanctuary of warmth, artisanal craftsmanship, and unhurried conversation.
          </p>
        </div>

        {/* Feature Grid: Architecture & Interior Design */}
        <section className="bg-white rounded-3xl border border-cream-300 p-6 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                Architectural Identity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 leading-snug">
                Designed by Vogue Architect & Interiors
              </h2>
              <p className="text-sm sm:text-base text-espresso-800/80 leading-relaxed">
                Every corner of our Acharya Vihar space was envisioned and executed by <strong>Vogue Architect & Interiors</strong>. Drawing inspiration from Mediterranean coastal villas and bohemian earthy warmth, the design balances monumental curved arch partition portals with natural textures.
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-espresso-800/85">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                  <span><strong>Curved Partition Arches:</strong> Elegant spatial portals that frame private conversations while maintaining an open, fluid aesthetic.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                  <span><strong>Natural Cane & Rattan:</strong> Handcrafted dining chairs and hanging wicker chandeliers that introduce warmth and organic texture.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0" />
                  <span><strong>Biophilic Greenery:</strong> Heliconia botanical motifs and indoor plants bringing freshness into every dining booth.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Mediterranean arches and cane furniture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 shadow-sm mt-6">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Atmospheric warm lighting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Baking & Culinary Philosophy */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
              Our Culinary Code
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900">
              The 4 Core Pillars of The Cafe Heaven
            </h2>
            <p className="text-sm text-espresso-800/80">
              We never compromise on technique, temperature, or ingredient provenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-900">
                100% Scratch Bakery
              </h3>
              <p className="text-xs text-espresso-800/75 leading-relaxed">
                From laminated puff dough to slow-baked Philadelphia cheesecakes and yeast doughnuts, everything is mixed, proofed, and baked fresh in small batches daily.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-900">
                Specialty Arabica Roasts
              </h3>
              <p className="text-xs text-espresso-800/75 leading-relaxed">
                Our coffee bar pulls precise espresso extractions: single origins, cortados in Gibraltar glass, flat whites with silky microfoam, and custom house syrups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-900">
                Pure Dairy & Belgian Cocoa
              </h3>
              <p className="text-xs text-espresso-800/75 leading-relaxed">
                Zero synthetic creams or palm fats. We bake exclusively with pure dairy butter, heavy cream, and authentic imported Belgian chocolate truffle ganache.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-900">
                Community Gathering
              </h3>
              <p className="text-xs text-espresso-800/75 leading-relaxed">
                Designed for celebrations, cozy dates, study sessions, and family milestones. We are proud to serve the vibrant Acharya Vihar community.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-espresso-900 text-cream-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Taste the Craftsmanship?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
              Explore our complete 72-item menu featuring rich pastries, celebration cakes, savory starters, and barista brews.
            </p>
          </div>

          <button
            onClick={() => onNavigate('menu')}
            className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shrink-0 flex items-center space-x-2"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
