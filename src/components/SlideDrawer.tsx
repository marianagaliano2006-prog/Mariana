import React from 'react';
import { SLIDES_METADATA } from '../data/presentationData';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex select-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-full max-w-md bg-[#0A2240] text-white h-full shadow-2xl flex flex-col z-10 border-l border-white/15">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-[#07182D]">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#75B2DD] font-semibold block">
              NAVEGACIÓN RÁPIDA
            </span>
            <h3 className="text-lg font-serif font-bold text-white">
              Índice de Diapositivas (10)
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Cerrar índice"
          >
            ✕
          </button>
        </div>

        {/* Slide List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {SLIDES_METADATA.map((slide) => {
            const isActive = currentSlide === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded transition-all flex items-start gap-3.5 border ${
                  isActive 
                    ? 'bg-[#1E3A5F] border-[#75B2DD] shadow-md ring-1 ring-[#75B2DD]/50' 
                    : 'bg-[#122B4D]/60 border-white/10 hover:bg-[#122B4D] hover:border-white/25'
                }`}
              >
                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                  isActive ? 'bg-[#75B2DD] text-[#0A2240]' : 'bg-white/10 text-slate-300'
                }`}>
                  {slide.numberStr}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`text-sm font-semibold truncate ${isActive ? 'text-[#75B2DD]' : 'text-slate-100'}`}>
                      {slide.title}
                    </h4>
                    {isActive && (
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-[#75B2DD]/20 text-[#75B2DD] px-1.5 py-0.5 rounded">
                        ACTUAL
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {slide.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer shortcuts */}
        <div className="p-4 border-t border-white/15 bg-[#07182D] text-xs text-slate-400 flex items-center justify-between">
          <span>Atajos: [←] Anterior / [→] Siguiente</span>
          <span>[Esc] Cerrar</span>
        </div>
      </div>
    </div>
  );
};
