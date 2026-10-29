import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck, Tag } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handlePrev, handleNext, onClose]);

  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${currentImage.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full bg-cream-50 rounded-2xl overflow-hidden shadow-2xl border border-cream-300 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-cream-100 border-b border-cream-300 text-espresso-900">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-terracotta-500 text-white">
              <Tag className="w-3 h-3" />
              <span>{currentImage.category}</span>
            </span>
            <span className="text-xs text-coffee-600 font-medium">
              {currentIndex + 1} of {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-espresso-800 hover:text-espresso-950 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            aria-label="Close photo preview (Escape key)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area with Prev/Next Controls */}
        <div className="relative flex-1 bg-espresso-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[65vh]">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[65vh] object-contain select-none"
          />

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-espresso-900/80 hover:bg-espresso-900 text-cream-100 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-espresso-900/80 hover:bg-espresso-900 text-cream-100 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Details & Asset Metadata */}
        <div className="px-5 py-4 bg-cream-50 border-t border-cream-200 space-y-2 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-serif text-lg font-bold text-espresso-900">
              {currentImage.title}
            </h3>
            <div className="flex items-center space-x-2 text-[11px] text-coffee-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Status: <strong className="text-espresso-800">{currentImage.permissionStatus}</strong></span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-espresso-800/85 leading-relaxed">
            {currentImage.caption}
          </p>

          <div className="pt-2 border-t border-cream-200 flex flex-wrap items-center justify-between text-[11px] text-coffee-600 gap-2">
            <span>Asset Filename: <code className="bg-cream-200 px-1.5 py-0.5 rounded text-espresso-900 font-mono">{currentImage.filename}</code></span>
            <span>Attribution: {currentImage.attribution}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
