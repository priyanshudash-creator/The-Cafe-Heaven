import React, { useState, useMemo } from 'react';
import { Camera, Eye, Info } from 'lucide-react';
import { GALLERY_MANIFEST } from '../data/gallery';
import { GalleryCategory } from '../types';
import { Lightbox } from './Lightbox';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All Photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    'All Photos',
    'Interior',
    'Coffee & Drinks',
    'Cakes & Desserts',
    'Food',
    'Ambience',
  ];

  // Filter gallery items
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All Photos') {
      return GALLERY_MANIFEST;
    }
    return GALLERY_MANIFEST.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-24 bg-cream-100 border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-medium text-coffee-600">
            <Camera className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">Atmosphere & Visual Chronicle</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
            A Glimpse Inside The Cafe Heaven
          </h2>

          <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
            Explore our handcrafted spaces, barista coffee pours, signature bakery counter, and intimate dining nooks designed for quiet moments and joyful gatherings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === 'All Photos'
                ? GALLERY_MANIFEST.length
                : GALLERY_MANIFEST.filter((item) => item.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-espresso-900 text-cream-100 shadow-sm font-semibold'
                    : 'bg-white/80 hover:bg-white text-espresso-800 border border-cream-300/80'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat
                      ? 'bg-cream-100/20 text-cream-100'
                      : 'bg-cream-200 text-coffee-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            // Determine card spans for editorial variation
            const isWide = image.aspectRatio === 'wide' || image.aspectRatio === 'landscape';
            const isTall = image.aspectRatio === 'portrait';

            return (
              <div
                key={image.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-cream-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-cream-200 ${
                    isTall ? 'h-80 sm:h-[450px]' : isWide ? 'h-64 sm:h-72' : 'h-64'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream-100/90 backdrop-blur-sm text-[11px] font-semibold text-espresso-900 border border-cream-300 shadow-sm">
                    {image.category}
                  </span>

                  {/* Hover Eye Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-3 rounded-full bg-espresso-900/80 text-cream-100 shadow-lg backdrop-blur-sm flex items-center space-x-1.5 text-xs font-medium">
                      <Eye className="w-4 h-4 text-terracotta-400" />
                      <span>View Photograph</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div className="p-4 text-left bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-espresso-900 leading-snug group-hover:text-terracotta-600 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-xs text-espresso-800/80 mt-1 line-clamp-2 leading-relaxed">
                      {image.caption}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-coffee-600">
                    <span className="truncate max-w-[180px]">{image.attribution}</span>
                    <span className="font-mono text-[10px] bg-cream-100 px-1.5 py-0.5 rounded border border-cream-200">
                      {image.filename}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Digital Asset Management & Attribution Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/80 border border-cream-300 max-w-4xl mx-auto flex items-start space-x-3.5 text-left text-xs text-coffee-600">
          <Info className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-espresso-900 block">
              Digital Asset Manifest & Authentic Media Verification
            </span>
            <p className="leading-relaxed">
              In accordance with ethical digital asset curation, all gallery photographs are cataloged with strict provenance. Images depict authentic architectural elements of The Cafe Heaven (designed by Vogue Architect in Acharya Vihar) alongside authentic artisan confectionery and kitchen preparations.
            </p>
          </div>
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={setLightboxIndex}
        />
      )}
    </section>
  );
};
