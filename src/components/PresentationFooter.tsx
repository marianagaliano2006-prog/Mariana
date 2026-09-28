import React from 'react';
import { SLIDES_METADATA } from '../data/presentationData';

interface PresentationFooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (slideNumber: number) => void;
}

export const PresentationFooter: React.FC<PresentationFooterProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide
}) => {
  const currentFormatted = currentSlide.toString().padStart(2, '0');
  const totalFormatted = totalSlides.toString().padStart(2, '0');

  return (
    <footer className="h-12 w-full bg-[#07182D] border-t border-white/10 px-4 md:px-8 flex items-center justify-between text-white select-none shrink-0 z-30">
      {/* Left: Previous Button & Keyboard Hint */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className={`px-3 py-1 text-xs font-medium rounded flex items-center gap-1.5 transition-all ${
            currentSlide === 1
              ? 'opacity-30 cursor-not-allowed text-slate-500'
              : 'text-slate-200 hover:text-white hover:bg-white/10 cursor-pointer active:scale-95'
          }`}
          title="Diapositiva anterior (Flecha Izquierda)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <span className="hidden md:inline text-[11px] text-slate-500 font-mono">
          [← / →] Navegar
        </span>
      </div>

      {/* Center: Slide Dots Quick Indicator */}
      <div className="flex items-center gap-1.5">
        {SLIDES_METADATA.map((slide) => {
          const isActive = currentSlide === slide.id;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                isActive 
                  ? 'w-6 bg-[#75B2DD]' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Ir a diapositiva ${slide.id}: ${slide.title}`}
            />
          );
        })}
      </div>

      {/* Right: Counter and Next Button */}
      <div className="flex items-center gap-3">
        <div className="text-xs font-mono text-slate-300">
          <span className="text-[#75B2DD] font-bold">{currentFormatted}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span>{totalFormatted}</span>
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className={`px-3 py-1 text-xs font-medium rounded flex items-center gap-1.5 transition-all ${
            currentSlide === totalSlides
              ? 'opacity-30 cursor-not-allowed text-slate-500'
              : 'text-white bg-[#0A2240] border border-[#75B2DD]/50 hover:bg-[#1E3A5F] hover:border-[#75B2DD] cursor-pointer active:scale-95'
          }`}
          title="Diapositiva siguiente (Flecha Derecha o Espacio)"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
