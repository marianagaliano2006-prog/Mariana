import React from 'react';
import { SLIDES_METADATA } from '../data/presentationData';

interface PresentationHeaderProps {
  currentSlide: number;
  onOpenDrawer: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  onOpenDrawer,
  isFullscreen,
  onToggleFullscreen
}) => {
  const activeSlideMeta = SLIDES_METADATA.find(s => s.id === currentSlide) || SLIDES_METADATA[0];

  return (
    <header className="h-12 w-full bg-[#07182D] border-b border-white/10 px-4 md:px-8 flex items-center justify-between text-white select-none shrink-0 z-30">
      {/* Zone 1: Single text element wordmark con distintivo nacional */}
      <div className="flex items-center gap-3">
        <div className="w-6 h-4 rounded-[2px] overflow-hidden flex flex-col border border-white/25 shadow-xs shrink-0" title="República Argentina">
          <div className="h-1/3 bg-[#75B2DD]" />
          <div className="h-1/3 bg-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E6AF2E]" />
          </div>
          <div className="h-1/3 bg-[#75B2DD]" />
        </div>
        <span className="text-sm md:text-base font-serif font-bold tracking-tight text-white">
          Argentina <span className="text-[#75B2DD] font-normal font-sans text-xs">· 2010–2025</span>
        </span>
      </div>

      {/* Zone 2: Slide title / progress indicator (clean unboxed text) */}
      <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
        <span className="font-mono text-[#75B2DD] font-bold">{activeSlideMeta.numberStr}</span>
        <span className="text-slate-500">/</span>
        <span className="font-medium text-slate-200 truncate max-w-[280px] md:max-w-md">
          {activeSlideMeta.title}
        </span>
      </div>

      {/* Zone 3: 1-2 primary actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenDrawer}
          className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/15 hover:text-white rounded transition-colors flex items-center gap-2 cursor-pointer"
          title="Ver índice de diapositivas (Tecla M)"
        >
          <svg className="w-3.5 h-3.5 text-[#75B2DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="hidden xs:inline">Índice</span>
          <span className="font-mono text-[10px] text-slate-400">({currentSlide}/10)</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
          title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
          {isFullscreen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
