import React, { useState, useEffect, useCallback } from 'react';
import { PresentationHeader } from './components/PresentationHeader';
import { PresentationFooter } from './components/PresentationFooter';
import { SlideDrawer } from './components/SlideDrawer';
import { Slide01Cover } from './components/slides/Slide01Cover';
import { Slide02IDH } from './components/slides/Slide02IDH';
import { Slide03Inflation } from './components/slides/Slide03Inflation';
import { Slide04CBTvsSalario } from './components/slides/Slide04CBTvsSalario';
import { Slide05PobrezaCobertura } from './components/slides/Slide05PobrezaCobertura';
import { Slide06InseguridadAlimentaria } from './components/slides/Slide06InseguridadAlimentaria';
import { Slide07VDemMarco } from './components/slides/Slide07VDemMarco';
import { Slide08VDemQuiebre } from './components/slides/Slide08VDemQuiebre';
import { Slide09DilemaFiscal } from './components/slides/Slide09DilemaFiscal';
import { Slide10Conclusiones } from './components/slides/Slide10Conclusiones';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 1));
  }, []);

  const goToSlide = useCallback((num: number) => {
    if (num >= 1 && num <= totalSlides) {
      setCurrentSlide(num);
    }
  }, [totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Listen to fullscreenchange
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If typing in an input, ignore
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setIsDrawerOpen(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      } else if (!isNaN(Number(e.key)) && Number(e.key) >= 1 && Number(e.key) <= 9) {
        goToSlide(Number(e.key));
      } else if (e.key === '0') {
        goToSlide(10);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen]);

  // Touch gesture support for mobile/tablets
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01Cover />;
      case 2:
        return <Slide02IDH />;
      case 3:
        return <Slide03Inflation />;
      case 4:
        return <Slide04CBTvsSalario />;
      case 5:
        return <Slide05PobrezaCobertura />;
      case 6:
        return <Slide06InseguridadAlimentaria />;
      case 7:
        return <Slide07VDemMarco />;
      case 8:
        return <Slide08VDemQuiebre />;
      case 9:
        return <Slide09DilemaFiscal />;
      case 10:
        return <Slide10Conclusiones />;
      default:
        return <Slide01Cover />;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-[#0A2240] overflow-hidden select-none">
      {/* Universal 3-zone Header */}
      <PresentationHeader
        currentSlide={currentSlide}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Slide Canvas Viewport: Exactly fills available space with 0 vertical scroll */}
      <main 
        className="flex-1 w-full h-[calc(100vh-96px)] overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/40 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Presentation 16:9 Container Box with shadow */}
        <div className="w-full h-full max-w-[1500px] max-h-[850px] aspect-[16/9] shadow-2xl relative overflow-hidden bg-white border border-slate-700/50 flex flex-col">
          {renderSlide()}
        </div>
      </main>

      {/* Navigation Footer */}
      <PresentationFooter
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={goToSlide}
      />

      {/* Slide Drawer Modal */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
