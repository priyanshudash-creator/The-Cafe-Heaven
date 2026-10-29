import React from 'react';
import { Cake, Coffee, HeartHandshake, Compass } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-medium text-coffee-600">
            <Compass className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">The Space & Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
            An aesthetic sanctuary rooted in flavor and design.
          </h2>

          <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
            Designed as an intimate urban refuge in Acharya Vihar, The Cafe Heaven brings together contemporary Mediterranean serenity, tropical warmth, and the timeless comfort of a classic European pâtisserie.
          </p>
        </div>

        {/* Narrative & Architectural Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Atmospheric Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden bg-cream-200 h-64 sm:h-72 shadow-sm border border-cream-300">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
                  alt="Cozy cafe seating and warm lighting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 rounded-2xl bg-cream-100 border border-cream-300 text-left">
                <span className="font-serif text-lg font-bold text-espresso-900 block mb-1">
                  Boho-Chic & Mediterranean
                </span>
                <p className="text-xs text-espresso-800/80 leading-relaxed">
                  Sculpted arched partitions, natural woven cane chairs, and lush tropical Heliconia motifs create private corners for work, reading, or heart-to-heart conversations.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <div className="p-5 rounded-2xl bg-espresso-900 text-cream-100 text-left shadow-sm">
                <span className="text-xs uppercase tracking-widest text-terracotta-400 font-semibold block mb-1">
                  Location Note
                </span>
                <p className="font-serif text-sm font-medium leading-relaxed">
                  Situated along Gajapati Nagar corridor in Acharya Vihar, welcoming Bhubaneswar food lovers and coffee enthusiasts daily.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-cream-200 h-64 sm:h-72 shadow-sm border border-cream-300">
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=80"
                  alt="Barista brewing artisan espresso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Editorial Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="border-l-2 border-terracotta-500 pl-4">
              <span className="text-xs uppercase tracking-widest text-coffee-600 font-bold block mb-1">
                Our Story
              </span>
              <p className="font-serif text-xl sm:text-2xl text-espresso-900 italic leading-snug">
                "We wanted to build a place where you never feel rushed — where dessert is celebrated as an art, and every cup of coffee is freshly crafted."
              </p>
            </div>

            <p className="text-sm sm:text-base text-espresso-800 leading-relaxed">
              When stepping into The Cafe Heaven, the first thing you notice is the calming contrast of earthy cream tones against vibrant cobalt blue accents. Conceived to break away from sterile, cookie-cutter cafes, our space was intentionally styled with natural cane, tactile woods, and soft ambient spots that make time slow down.
            </p>

            <p className="text-sm sm:text-base text-espresso-800 leading-relaxed">
              Behind the counter, our bakers and baristas work with equal dedication. Whether you're dropping in for an afternoon espresso with a slice of rich Blueberry Cheesecake, picking up a celebratory tiered cake for a birthday milestone, or sharing hot Peri Peri Fried Chicken with friends, everything is crafted on-site with genuine care.
            </p>

            {/* Architecture Credit Reference */}
            <div className="pt-2 text-xs text-coffee-600 bg-cream-100/70 p-3.5 rounded-xl border border-cream-300/80">
              <span className="font-semibold text-espresso-900">Atmosphere Concept:</span> Mediterranean-Tropical Hospitality Design with custom arched nooks, botanical Heliconia wall murals, and artisan cane craftsmanship.
            </div>
          </div>

        </div>

        {/* The Three Pillars of The Cafe Heaven */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-terracotta-500 text-white flex items-center justify-center mb-4 shadow-sm">
              <Cake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso-900 mb-2">
              Artisanal Bakery & Cakes
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/85 leading-relaxed">
              From delicate daily pastries, artisanal ring doughnuts, and slow-baked cheesecakes to bespoke celebration cakes and our signature 450 g Fruit & Nuts Cake, every confection is balanced in sweetness and texture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-espresso-900 text-cream-100 flex items-center justify-center mb-4 shadow-sm">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso-900 mb-2">
              Coffee & Hot Beverages
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/85 leading-relaxed">
              Freshly ground espresso beans pulled with precision. Customize your favorite cappuccino, flat white, or mocha with ₹50 add-ons including toasted hazelnut syrup, caramel drizzle, and plant-based milks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-coffee-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso-900 mb-2">
              Savory Kitchen Starters
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/85 leading-relaxed">
              Crispy savory snacks, warm golden bakery puffs, and hot kitchen appetizers — including our acclaimed Must-Try Peri Peri Fried Chicken — made to complement your cafe conversations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
