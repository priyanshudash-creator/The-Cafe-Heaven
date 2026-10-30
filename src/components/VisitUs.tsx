import React from 'react';
import { MapPin, Clock, ExternalLink, Navigation, CheckCircle2, Instagram } from 'lucide-react';

export const VisitUs: React.FC = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/5UR6coRrVfRBav3q6';
  const instagramUrl = 'https://www.instagram.com/the.cafeheaven/';

  return (
    <section id="visit" className="py-16 sm:py-24 bg-white border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-semibold text-coffee-600">
            <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">Find & Connect With Us</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
            Visit The Cafe Heaven in Acharya Vihar
          </h1>

          <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
            Conveniently located along the Gajapati Nagar corridor in Acharya Vihar, Bhubaneswar. Join us for freshly baked delicacies, specialty coffee, and serene Mediterranean vibes.
          </p>
        </div>

        {/* Location & Details Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Essential Visiting Details & Social Connect */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-left">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-cream-100 border border-cream-300 space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-2xl bg-espresso-900 text-cream-100 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso-900 mb-1">
                    Location & Address
                  </h3>
                  <p className="text-sm text-espresso-900 leading-relaxed font-semibold">
                    Plot No. M/5/R/27, Gajapati Nagar,
                  </p>
                  <p className="text-sm text-espresso-800 leading-relaxed">
                    Acharya Vihar, Bhubaneswar, Odisha — 751013
                  </p>
                  <span className="inline-block mt-2 text-xs text-coffee-600 bg-white px-2.5 py-1 rounded-md border border-cream-300">
                    Near Acharya Vihar Flyover & Science Park Corridor
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4 pt-4 border-t border-cream-300/80">
                <div className="w-11 h-11 rounded-2xl bg-terracotta-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso-900 mb-1">
                    Operating Hours
                  </h3>
                  <div className="space-y-1 text-sm text-espresso-800">
                    <p className="flex items-center justify-between font-medium">
                      <span>Monday – Sunday:</span>
                      <span className="font-bold text-espresso-950">10:00 AM – 10:00 PM</span>
                    </p>
                    <p className="text-xs text-coffee-600">
                      Open all 7 days for dine-in, takeaway & bakery orders
                    </p>
                  </div>
                </div>
              </div>

              {/* Cafe Amenities */}
              <div className="pt-4 border-t border-cream-300/80 space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider text-coffee-600 font-bold">
                  Guest Amenities
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-espresso-800">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Air-Conditioned Comfort</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Boho-Chic Cane Seating</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dine-In & Takeaway</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Celebration Cake Orders</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Instagram Connect Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#fd1d1d]/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#fd1d1d] to-[#833ab4] text-white flex items-center justify-center shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-espresso-950">
                      Instagram
                    </h3>
                    <span className="text-xs font-semibold text-terracotta-600">
                      @the.cafeheaven
                    </span>
                  </div>
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full text-xs font-bold tracking-wide transition-all shadow-sm hover:opacity-95 flex items-center space-x-1.5"
                >
                  <span>Follow Us</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-espresso-800/80 leading-relaxed">
                Tag us in your stories and stay updated with our seasonal pastries, barista specials, and cozy moments at <strong>@the.cafeheaven</strong>.
              </p>
            </div>

            {/* Google Maps Direct Navigation Card */}
            <div className="p-6 rounded-3xl bg-espresso-900 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div>
                <span className="text-xs uppercase tracking-wider text-terracotta-400 font-semibold block">
                  Get Live Navigation
                </span>
                <p className="font-serif text-base font-medium mt-0.5">
                  Open in Google Maps Application
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full text-xs font-semibold tracking-wide uppercase transition-colors shrink-0 flex items-center space-x-2 shadow-sm"
              >
                <span>Navigate Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Real Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Embedded Interactive Map Card */}
            <div className="rounded-3xl overflow-hidden bg-cream-200 border border-cream-300 shadow-md relative min-h-[460px] sm:min-h-[520px] flex flex-col">
              
              {/* Top Bar on Map */}
              <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 border-b border-cream-300 flex items-center justify-between z-10">
                <div className="flex items-center space-x-2 text-left">
                  <Navigation className="w-4 h-4 text-terracotta-500 shrink-0" />
                  <div>
                    <span className="font-serif text-sm font-bold text-espresso-950 block leading-tight">
                      The Cafe Heaven — Google Maps
                    </span>
                    <span className="text-[11px] text-coffee-600 block">
                      Plot No. M/5/R/27, Gajapati Nagar, Acharya Vihar, Bhubaneswar
                    </span>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center space-x-1 shrink-0"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Real Interactive Google Maps iframe */}
              <iframe
                title="The Cafe Heaven Acharya Vihar Google Maps"
                src="https://maps.google.com/maps?q=The+Cafe+Heaven,+Plot+No.+M/5/R/27,+Gajapati+Nagar,+Acharya+Vihar,+Bhubaneswar,+Odisha+751013&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full flex-1 border-0 min-h-[380px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom Quick Directions Strip */}
              <div className="bg-cream-100/95 backdrop-blur-md px-5 py-3 border-t border-cream-300 flex flex-wrap items-center justify-between gap-3 text-xs text-left">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-semibold text-espresso-900">Verified Location: Acharya Vihar</span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 hover:text-terracotta-700 font-bold flex items-center space-x-1 underline"
                >
                  <span>https://maps.app.goo.gl/5UR6coRrVfRBav3q6</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
