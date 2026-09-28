import React from 'react';

interface ArgentinaWatermarkProps {
  theme?: 'dark' | 'light';
  opacity?: number;
  className?: string;
  showFlagStrip?: boolean;
}

export const ArgentinaWatermark: React.FC<ArgentinaWatermarkProps> = ({
  theme = 'light',
  opacity = 0.08,
  className = '',
  showFlagStrip = true
}) => {
  const isDark = theme === 'dark';
  const strokeColor = isDark ? '#75B2DD' : '#0A2240';
  const fillColor = isDark ? 'rgba(117, 178, 221, 0.05)' : 'rgba(10, 34, 64, 0.03)';
  const gridColor = isDark ? 'rgba(117, 178, 221, 0.12)' : 'rgba(10, 34, 64, 0.06)';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      {/* Sutil trama de coordenadas geográficas (Paralelos y Meridianos) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`coord-grid-${theme}`} width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke={gridColor} strokeWidth="0.75" strokeDasharray="3 6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#coord-grid-${theme})`} />
      </svg>

      {/* Croquis Vectorial Silueta Oficial de Argentina */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 h-[90%] max-h-[700px] aspect-[1/2] flex items-center justify-center">
        <svg 
          viewBox="0 0 500 950" 
          className="h-full w-auto drop-shadow-sm"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Silueta continental argentina */}
          <path
            d="M 175,70 
               L 255,85 
               L 315,105 
               L 365,100 
               L 415,115 
               L 440,140 
               L 415,160 
               L 375,180 
               L 345,210 
               L 330,265 
               L 350,295 
               L 385,330 
               L 380,375 
               L 335,410 
               L 310,420 
               L 285,450 
               L 260,455 
               L 270,490 
               L 290,510 
               L 280,525 
               L 250,535 
               L 240,570 
               L 265,605 
               L 255,640 
               L 230,700 
               L 245,730 
               L 215,755 
               L 235,780 
               L 270,795 
               L 250,820 
               L 210,815 
               L 200,785 
               L 190,750 
               L 180,690 
               L 170,630 
               L 160,570 
               L 165,510 
               L 155,450 
               L 145,390 
               L 150,330 
               L 160,260 
               L 150,190 
               L 155,130 
               Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Islas Malvinas */}
          {/* Gran Malvina */}
          <path
            d="M 345,690 C 355,685 365,695 360,710 C 355,725 340,715 345,690 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          {/* Soledad */}
          <path
            d="M 380,695 C 395,690 405,700 400,715 C 390,730 375,720 380,695 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2.5"
          />

          {/* Sol de Mayo estilizado en la zona central pampeana */}
          <g transform="translate(250, 360)">
            {/* Núcleo del sol */}
            <circle cx="0" cy="0" r="18" fill="rgba(230, 175, 46, 0.4)" stroke="#E6AF2E" strokeWidth="2" />
            <circle cx="0" cy="0" r="10" fill="#E6AF2E" />
            {/* Rayos geométricos del Sol de Mayo */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
              <line
                key={i}
                x1="0"
                y1={i % 2 === 0 ? "22" : "20"}
                x2="0"
                y2={i % 2 === 0 ? "36" : "30"}
                stroke="#E6AF2E"
                strokeWidth={i % 2 === 0 ? "2.5" : "1.5"}
                strokeLinecap="round"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          {/* Puntos y coordenadas geográficas de referencia */}
          <text x="175" y="55" fill={strokeColor} fontSize="12" fontFamily="monospace" fontWeight="bold">22° S (La Quiaca)</text>
          <text x="210" y="845" fill={strokeColor} fontSize="12" fontFamily="monospace" fontWeight="bold">55° S (Ushuaia)</text>
        </svg>
      </div>

      {/* Sutil franja celeste y blanca en la esquina superior/inferior si está habilitada */}
      {showFlagStrip && (
        <div className="absolute top-0 right-0 w-48 h-1.5 flex overflow-hidden opacity-60">
          <div className="flex-1 bg-[#75B2DD]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#75B2DD]" />
        </div>
      )}
    </div>
  );
};
