import React from 'react';
import { ArgentinaWatermark } from '../ArgentinaWatermark';

export const Slide07VDemMarco: React.FC = () => {
  const dimensions = [
    {
      num: "01",
      name: "Electoral",
      desc: "Elecciones limpias, pluralismo multipartidario y sufragio universal no restringido."
    },
    {
      num: "02",
      name: "Liberal",
      desc: "Protección efectiva de libertades civiles, estado de derecho y límites al Ejecutivo."
    },
    {
      num: "03",
      name: "Deliberativa",
      desc: "Calidad de la argumentación pública fundada en el bien común frente a la imposición."
    },
    {
      num: "04",
      name: "Igualitaria",
      desc: "Distribución equitativa del poder efectivo entre diversos estratos socioeconómicos."
    },
    {
      num: "05",
      name: "Participativa",
      desc: "Mecanismos activos de consulta y participación directa de la ciudadanía."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 bg-white text-slate-800 overflow-hidden select-none relative">
      <ArgentinaWatermark theme="light" opacity={0.06} />
      {/* Slide Header */}
      <div className="border-b border-slate-200 pb-3 flex items-start justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-bold font-sans">
            DIAPOSITIVA 07
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            Dimensión Democrática (El Marco V-Dem)
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Institución</span>
          <span className="text-sm font-semibold text-[#0A2240]">V-Dem Institute</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-4 my-auto py-1">
        {/* Titulo Marco teórico */}
        <div className="bg-[#0A2240] text-white p-4">
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-semibold block mb-1">
            Marco teórico
          </span>
          <h3 className="text-lg font-serif font-bold text-white">
            Varieties of Democracy (V-Dem) de la Universidad de Gotemburgo.
          </h3>
        </div>

        {/* 2 Context Cards: Justificación metodológica & Propósito */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F0F7FC] border border-slate-200 p-4">
            <span className="text-xs font-bold text-[#0A2240] uppercase tracking-wider block mb-1">
              Justificación metodológica
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              Argentina cumple con los criterios de democracia básica (elecciones limpias, alternancia); V-Dem mide su salud cualitativa e institucional.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Propósito
            </span>
            <p className="text-xs text-slate-800 font-semibold leading-relaxed">
              Evaluar qué tan sana está una democracia cuando los salarios se derrumban.
            </p>
          </div>
        </div>

        {/* 5 Dimensiones analizadas (escala 0 a 1) */}
        <div>
          <span className="text-xs font-bold text-[#0A2240] uppercase tracking-wider block mb-2">
            5 Dimensiones analizadas (escala 0 a 1):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {dimensions.map((dim) => (
              <div 
                key={dim.num}
                className="bg-[#F8FAFC] border-t-2 border-[#0A2240] border-x border-b border-slate-200 p-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1">{dim.num}</span>
                  <h4 className="text-sm font-serif font-bold text-[#0A2240] mb-1">{dim.name}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{dim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Fuente: Varieties of Democracy Institute (V-Dem), Universidad de Gotemburgo, Suecia.</span>
        <span className="font-semibold text-slate-700">07 / 10</span>
      </div>
    </div>
  );
};
