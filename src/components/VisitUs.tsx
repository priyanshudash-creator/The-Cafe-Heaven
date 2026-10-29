import React from 'react';
import { MapPin, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

export const VisitUs: React.FC = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/8gJqT3myEH5Zwr5e6';

  return (
    <section id="visit" className="py-24 bg-white border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-medium text-coffee-600">
            <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">Plan Your Visit</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
            Visit The Cafe Heaven in Acharya Vihar
          </h2>

          <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
            Conveniently located along the Gajapati Nagar stretch in Acharya Vihar, welcoming you with fresh bakery aromas, relaxed seating, and warm hospitality every day.
          </p>
        </div>

        {/* Location & Details Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Essential Visiting Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-cream-100 border border-cream-300 space-y-6 text-left">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-2xl bg-espresso-900 text-cream-100 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso-900 mb-1">
                    Location & Address
                  </h3>
                  <p className="text-sm text-espresso-800 leading-relaxed font-medium">
                    Plot No. M/5/R/27, Gajapati Nagar,
                  </p>
                  <p className="text-sm text-espresso-800 leading-relaxed">
                    Acharya Vihar, Bhubaneswar, Odisha — 751013
                  </p>
                  <span className="inline-block mt-2 text-xs text-coffee-600 bg-white/80 px-2.5 py-1 rounded-md border border-cream-300">
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
                    <span>Boho-Chic Seating</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dine-In & Takeaway</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pre-Order Milestone Cakes</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action Card */}
            <div className="p-6 rounded-2xl bg-espresso-900 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-md">
              <div>
                <span className="text-xs uppercase tracking-wider text-terracotta-400 font-semibold block">
                  Find on Google Maps
                </span>
                <p className="font-serif text-base font-medium mt-0.5">
                  Get turn-by-turn directions to our café
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full text-xs font-semibold tracking-wide uppercase transition-colors shrink-0 flex items-center space-x-2"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map & Ambiance Showcase */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-cream-200 border border-cream-300 shadow-md flex-1 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8">
              
              {/* Subtle background image */}
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="The Cafe Heaven Acharya Vihar Entrance and Ambiance"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88]"
              />

              {/* Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/40 to-transparent" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-full bg-cream-100/95 backdrop-blur-md text-xs font-bold text-espresso-900 shadow-sm flex items-center space-x-1.5">
                  <Navigation className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Bhubaneswar, Odisha</span>
                </span>
              </div>

              {/* Bottom Information Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-cream-300 text-left space-y-2 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-espresso-900">
                    The Cafe Heaven
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Open Now
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-espresso-800">
                  Plot No. M/5/R/27, Gajapati Nagar, Acharya Vihar, Bhubaneswar 751013
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 flex items-center space-x-1"
                  >
                    <span>View Verified Listing on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
