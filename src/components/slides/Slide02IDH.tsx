import React, { useMemo } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { SOCIOECONOMIC_DATA } from '../../data/presentationData';
import { ChartConfiguration } from 'chart.js';

export const Slide02IDH: React.FC = () => {
  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = SOCIOECONOMIC_DATA.map(d => d.year.toString());
    const idhValues = SOCIOECONOMIC_DATA.map(d => d.idh);

    return {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Índice de Desarrollo Humano (IDH)',
            data: idhValues,
            borderColor: '#75B2DD',
            backgroundColor: 'rgba(117, 178, 221, 0.15)',
            borderWidth: 3,
            pointBackgroundColor: '#75B2DD',
            pointBorderColor: '#0A2240',
            pointBorderWidth: 1.5,
            pointRadius: 4.5,
            pointHoverRadius: 6,
            fill: true,
            tension: 0.15
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0A2240',
            titleFont: { family: 'Inter', size: 12, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 12 },
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `IDH: ${Number(context.raw).toFixed(3)}`
            }
          }
        },
        scales: {
          y: {
            min: 0.800,
            max: 0.900,
            ticks: {
              stepSize: 0.02,
              font: { family: 'Inter', size: 11 },
              color: '#64748B',
              callback: (value) => Number(value).toFixed(3)
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'IDH (0 a 1)',
              font: { family: 'Inter', size: 11, weight: '500' },
              color: '#475569'
            }
          },
          x: {
            ticks: {
              font: { family: 'Inter', size: 11 },
              color: '#64748B'
            },
            grid: { display: false }
          }
        }
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 bg-white text-slate-800 overflow-hidden select-none">
      {/* Slide Header */}
      <div className="border-b border-slate-200 pb-3 flex items-start justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-bold font-sans">
            DIAPOSITIVA 02
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            La fachada del Desarrollo Humano (El IDH)
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Serie</span>
          <span className="text-sm font-semibold text-[#0A2240]">2010 — 2025</span>
        </div>
      </div>

      {/* Main Content: Chart + 2 requested items */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: Chart */}
        <div className="lg:col-span-7 flex flex-col h-[280px] md:h-[340px] bg-[#F8FAFC] border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider">
              Gráfica IDH 2010–2025 (Escala 0,800 — 0,900)
            </span>
            <span className="text-[11px] text-slate-500 font-medium">PNUD</span>
          </div>
          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} />
          </div>
        </div>

        {/* Right: Exactly the requested values & texts */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Valor del IDH (2025) */}
          <div className="bg-[#F0F7FC] border-l-4 border-[#0A2240] p-5">
            <span className="text-xs text-[#0A2240] font-bold uppercase tracking-wider block mb-1">
              Valor del IDH (2025)
            </span>
            <div className="text-4xl font-serif font-black text-[#0A2240] tabular-nums">
              0,865
            </div>
            <span className="inline-block mt-2 text-xs font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5">
              Muy Alto Desarrollo Humano
            </span>
          </div>

          {/* Texto Estabilidad estadística */}
          <div className="bg-[#F8FAFC] border border-slate-200 p-5">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-1">
              Estabilidad estadística
            </span>
            <p className="text-sm text-slate-800 font-medium leading-relaxed">
              Variación de apenas <strong>+0,031 puntos en 15 años</strong> (rango 0,834 - 0,865).
            </p>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              El índice refleja factores inerciales de largo plazo (alfabetización plena, escolaridad y cobertura de salud) que no registran la pérdida súbita de capacidad alimentaria.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Fuente: Programa de las Naciones Unidas para el Desarrollo (PNUD).</span>
        <span className="font-semibold text-slate-700">02 / 10</span>
      </div>
    </div>
  );
};
