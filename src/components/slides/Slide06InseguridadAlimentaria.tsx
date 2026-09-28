import React from 'react';

export const Slide06InseguridadAlimentaria: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 bg-[#0A2240] text-white overflow-hidden select-none">
      {/* Slide Header */}
      <div className="border-b border-white/10 pb-3 flex items-start justify-between shrink-0">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-bold font-sans block mb-0.5">
            DIAPOSITIVA 06
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
            El rostro humano: Inseguridad Alimentaria
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-[#75B2DD]/80 font-sans block">Registro Testimonial</span>
          <span className="text-sm font-semibold text-white">Etnografía Social</span>
        </div>
      </div>

      {/* Main Content: Layout en 2 Columnas Editoriales Puras (Sin contenedores ni cajas) */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 my-auto py-2">
        {/* A. COLUMNA IZQUIERDA (MÉTRICA HERO + CITA HUMANA DESTACADA) */}
        <div className="w-full lg:w-[420px] lg:shrink-0 flex flex-col justify-center space-y-7">
          {/* Métrica gigante Serif */}
          <div>
            <div className="text-[76px] lg:text-[80px] font-serif font-bold text-white leading-none tracking-tight">
              38%
            </div>
            <p className="text-[16px] text-[#cbd5e1] font-sans mt-3 leading-relaxed">
              de la población argentina enfrenta inseguridad alimentaria directa en su hogar.
            </p>
          </div>

          {/* Bloque de Cita Textual */}
          <div 
            className="border-l-[3px] border-[#e6af2e] pl-5 space-y-2"
            style={{ borderLeftColor: '#e6af2e' }}
          >
            <blockquote className="font-serif italic text-2xl lg:text-[28px] text-[#e6af2e] leading-snug">
              “Hoy no hay, ojalá mañana.”
            </blockquote>
            <p className="text-[15px] lg:text-[16px] text-[#94a3b8] font-sans leading-normal">
              — Testimonio de María en comedores populares (Caparrós &amp; Aguirre).
            </p>
          </div>
        </div>

        {/* B. COLUMNA DERECHA (3 CONCEPTOS EDITORIALES PUROS) */}
        <div 
          className="flex-1 flex flex-col justify-center space-y-6 lg:border-l lg:border-white/10 lg:pl-10"
          style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
        >
          {/* Concepto 1 */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-[20px] font-bold text-white tracking-tight">
              Estrategias de saciedad barata
            </h3>
            <p className="font-sans text-[15px] text-[#cbd5e1] leading-relaxed">
              Menús dominados por carbohidratos (fideos, arroz, papa) ante el costo inalcanzable de las proteínas animales en los hogares.
            </p>
          </div>

          {/* Concepto 2 */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-[20px] font-bold text-white tracking-tight">
              Preservación de la dignidad
            </h3>
            <p className="font-sans text-[15px] text-[#cbd5e1] leading-relaxed">
              Migración del consumo en salón a viandas en tápers para evitar la estigmatización social de las familias.
            </p>
          </div>

          {/* Concepto 3 */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-[20px] font-bold text-white tracking-tight">
              La paradoja de los campos
            </h3>
            <p className="font-sans text-[15px] text-[#cbd5e1] leading-relaxed">
              Contraste estructural entre la abundancia agroexportadora de escala mundial y las ollas vacías en los barrios populares.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="border-t border-white/10 pt-2 flex justify-between items-center text-[11px] text-slate-400 shrink-0">
        <span>Crónica etnográfica y registro cualitativo en comedores comunitarios.</span>
        <span className="font-semibold text-slate-300">06 / 10</span>
      </div>
    </div>
  );
};
