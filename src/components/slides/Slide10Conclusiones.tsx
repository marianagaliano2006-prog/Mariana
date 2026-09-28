import React from 'react';
import { ArgentinaWatermark } from '../ArgentinaWatermark';

export const Slide10Conclusiones: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 bg-[#0A2240] text-white overflow-hidden select-none relative">
      <ArgentinaWatermark theme="dark" opacity={0.09} />
      {/* Slide Header */}
      <div className="border-b border-white/15 pb-3 flex items-start justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-bold font-sans">
            DIAPOSITIVA 10
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
            Conclusiones Generales y Pregunta Final
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Síntesis</span>
          <span className="text-sm font-semibold text-[#E6AF2E]">2010 — 2025</span>
        </div>
      </div>

      {/* Main Content: 3 Required Conclusion Texts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
        {/* Texto 1: La falacia de los índices agregados */}
        <div className="bg-[#122B4D] border-t-4 border-[#75B2DD] p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#75B2DD] block mb-2">CONCLUSIÓN 01</span>
            <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug">
              La falacia de los índices agregados
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Un IDH &ldquo;alto&rdquo; esconde que el salario mínimo dejó de cubrir el plato de comida de los hogares.
            </p>
          </div>
          <span className="text-[10px] text-[#75B2DD] font-mono mt-4 block pt-2 border-t border-white/10">
            IDH inercial vs. Insolvencia real
          </span>
        </div>

        {/* Texto 2: Canal de transmisión social */}
        <div className="bg-[#122B4D] border-t-4 border-[#E6AF2E] p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#E6AF2E] block mb-2">CONCLUSIÓN 02</span>
            <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug">
              Canal de transmisión social
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              La pérdida de cobertura salarial sobre la canasta básica explica linealmente la explosión de la pobreza (ρ = -0,923).
            </p>
          </div>
          <span className="text-[10px] text-[#E6AF2E] font-mono mt-4 block pt-2 border-t border-white/10">
            Pulverización de la cobertura mínima
          </span>
        </div>

        {/* Texto 3: Dilema de la gobernanza */}
        <div className="bg-[#122B4D] border-t-4 border-rose-500 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-rose-400 block mb-2">CONCLUSIÓN 03</span>
            <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug">
              Dilema de la gobernanza
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              La estabilización macroeconómica mediante medidas de shock aceleradas generó una importante tensión sobre las métricas de democracia deliberativa.
            </p>
          </div>
          <span className="text-[10px] text-rose-400 font-mono mt-4 block pt-2 border-t border-white/10">
            Contracción del consenso democrático
          </span>
        </div>
      </div>

      {/* Pregunta Final de Cierre */}
      <div className="bg-gradient-to-r from-[#173860] via-[#122B4D] to-[#0A2240] border border-white/20 p-5 sm:p-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E6AF2E] font-medium block mb-2 font-sans">
            PREGUNTA FINAL
          </span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic font-semibold text-white leading-relaxed">
            &ldquo;¿Es posible construir una estabilidad económica duradera que alimente a la población y al mismo tiempo fortalezca las instituciones democráticas?&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-400 border-t border-white/15 pt-2 flex justify-between items-center">
        <span>Síntesis conclusiva · Investigación socioeconómica e institucional de Argentina (2010–2025).</span>
        <span className="font-semibold text-slate-300">10 / 10</span>
      </div>
    </div>
  );
};
