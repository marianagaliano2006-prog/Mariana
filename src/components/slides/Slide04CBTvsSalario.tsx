import React, { useMemo } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { SOCIOECONOMIC_DATA } from '../../data/presentationData';
import { ChartConfiguration } from 'chart.js';

export const Slide04CBTvsSalario: React.FC = () => {
  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = SOCIOECONOMIC_DATA.map(d => d.year.toString());
    const cbtValues = SOCIOECONOMIC_DATA.map(d => d.cbt);
    const smmValues = SOCIOECONOMIC_DATA.map(d => d.salarioMinimo);

    return {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Canasta Básica Total ($ ARS)',
            data: cbtValues,
            borderColor: '#F87171',
            backgroundColor: 'rgba(248, 113, 113, 0.12)',
            borderWidth: 2.5,
            pointRadius: 3.5,
            pointBackgroundColor: '#F87171',
            fill: true,
            tension: 0.2
          },
          {
            label: 'Salario Mínimo ($ ARS)',
            data: smmValues,
            borderColor: '#75B2DD',
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            borderDash: [4, 4],
            pointRadius: 3.5,
            pointBackgroundColor: '#75B2DD',
            tension: 0.2
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { family: 'Inter', size: 10, weight: 'bold' },
              color: '#334155',
              usePointStyle: true,
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: '#0A2240',
            titleFont: { family: 'Inter', size: 11, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 11 },
            padding: 8,
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: $${Number(ctx.raw).toLocaleString('es-AR')}`
            }
          }
        },
        scales: {
          y: {
            ticks: {
              font: { family: 'Inter', size: 10 },
              color: '#64748B',
              callback: (val) => `$${(Number(val) / 1000).toFixed(0)}k`
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'Monto Nominal en ARS',
              font: { family: 'Inter', size: 10, weight: '500' },
              color: '#475569'
            }
          },
          x: {
            ticks: {
              font: { family: 'Inter', size: 10 },
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
            DIAPOSITIVA 04
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            Dimensión Económica (CBT vs. Salario Mínimo)
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Serie</span>
          <span className="text-sm font-semibold text-[#0A2240]">2010 — 2025</span>
        </div>
      </div>

      {/* Main Content: Chart + Diferencia CBT/SMM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Column: Gráfico Costo CBT */}
        <div className="lg:col-span-7 flex flex-col h-[280px] md:h-[340px] bg-[#F8FAFC] border border-slate-200 p-4">
          <div className="mb-2">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider block">
              Gráfico Costo de la Canasta Básica Total (CBT)
            </span>
          </div>
          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} />
          </div>
        </div>

        {/* Right Column: Diferencia CBT/SMM */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="border-b border-slate-200 pb-1">
            <span className="text-xs font-bold text-[#0A2240] uppercase tracking-wider">
              Diferencia CBT/SMM
            </span>
          </div>

          {/* Año 2010 */}
          <div className="bg-[#F0F7FC] border border-slate-200 p-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Año 2010
            </span>
            <div className="text-3xl font-serif font-bold text-[#0A2240] mb-1">
              138,9%
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              El Salario Mínimo cubría el <strong>138,9% de la Canasta Básica</strong> (1 canasta completa + 39% extra).
            </p>
          </div>

          {/* Año 2025 */}
          <div className="bg-rose-50 border border-rose-200 p-4">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">
              Año 2025
            </span>
            <div className="text-3xl font-serif font-bold text-rose-700 mb-1">
              27,1%
            </div>
            <p className="text-xs text-rose-900 leading-relaxed">
              El Salario Mínimo apenas cubre el <strong>27,1% de la Canasta Básica</strong> (poco más de un cuarto).
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Fuente: INDEC (CBT Hogar 2) y Ministerio de Trabajo / CNEPySMVyM.</span>
        <span className="font-semibold text-slate-700">04 / 10</span>
      </div>
    </div>
  );
};
