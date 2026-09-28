import React, { useMemo } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { VDEM_DATA } from '../../data/presentationData';
import { ChartConfiguration } from 'chart.js';

export const Slide08VDemQuiebre: React.FC = () => {
  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = VDEM_DATA.map(d => d.year.toString());
    const delibData = VDEM_DATA.map(d => d.deliberative);
    const libData = VDEM_DATA.map(d => d.liberal);
    const elecData = VDEM_DATA.map(d => d.electoral);

    return {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Deliberativa (-34,5%)',
            data: delibData,
            borderColor: '#E6AF2E',
            backgroundColor: '#E6AF2E',
            borderWidth: 2.8,
            pointBackgroundColor: '#E6AF2E',
            pointRadius: 3.5,
            tension: 0.15
          },
          {
            label: 'Liberal (-24,6%)',
            data: libData,
            borderColor: '#C084FC',
            backgroundColor: '#C084FC',
            borderWidth: 2.5,
            borderDash: [4, 4],
            pointBackgroundColor: '#C084FC',
            pointRadius: 3,
            tension: 0.15
          },
          {
            label: 'Electoral (-17,7%)',
            data: elecData,
            borderColor: '#75B2DD',
            backgroundColor: '#75B2DD',
            borderWidth: 2.5,
            pointBackgroundColor: '#75B2DD',
            pointRadius: 3,
            tension: 0.15
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
              color: '#1E293B',
              usePointStyle: true,
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: '#0A2240',
            titleFont: { family: 'Inter', size: 11, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 11 },
            padding: 8
          }
        },
        scales: {
          y: {
            min: 0.35,
            max: 0.90,
            ticks: {
              stepSize: 0.1,
              font: { family: 'Inter', size: 10 },
              color: '#64748B',
              callback: (v) => Number(v).toFixed(2)
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'Índice V-Dem (0 a 1)',
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
            DIAPOSITIVA 08
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            El quiebre en V-Dem a partir de 2023
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Período</span>
          <span className="text-sm font-semibold text-rose-700">2023 ➔ 2025</span>
        </div>
      </div>

      {/* Main Grid: Chart + Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-1 items-center">
        {/* Left Column: Gráfica Democracia (6 cols) */}
        <div className="lg:col-span-6 flex flex-col h-[280px] md:h-[330px] bg-[#F8FAFC] border border-slate-200 p-4">
          <div className="mb-2">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider block">
              Gráfica Democracia (V-Dem 2010–2025)
            </span>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Desempeño alto sostenido en V-Dem (2010–2023) seguido de un quiebre en todos los indicadores en 2024–2025.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} />
          </div>
        </div>

        {/* Right Column: Textos Requeridos (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-2.5">
          {/* Caídas porcentuales acumuladas (2023-2025) */}
          <div className="bg-[#F8FAFC] border border-slate-200 p-3">
            <span className="text-xs font-bold text-[#0A2240] uppercase tracking-wider block mb-1.5">
              Caídas porcentuales acumuladas (2023-2025):
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-rose-50 border border-rose-200 p-1.5">
                <span className="text-[10px] text-rose-700 font-semibold block">Deliberativa</span>
                <span className="text-base font-serif font-bold text-rose-800">-34,5%</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-1.5">
                <span className="text-[10px] text-amber-800 font-semibold block">Liberal</span>
                <span className="text-base font-serif font-bold text-amber-900">-24,6%</span>
              </div>
              <div className="bg-slate-100 border border-slate-300 p-1.5">
                <span className="text-[10px] text-slate-700 font-semibold block">Electoral</span>
                <span className="text-base font-serif font-bold text-[#0A2240]">-17,7%</span>
              </div>
            </div>
          </div>

          {/* Presión sobre la prensa */}
          <div className="bg-[#F0F7FC] border border-slate-200 p-2.5 text-xs">
            <strong className="text-[#0A2240] block mb-0.5">Presión sobre la prensa:</strong>
            <p className="text-slate-700">Hostigamiento verbal a periodistas y sesgo informativo como primer síntoma de retroceso.</p>
          </div>

          {/* Tensión institucional */}
          <div className="bg-[#F8FAFC] border border-slate-200 p-2.5 text-xs">
            <strong className="text-[#0A2240] block mb-0.5">Tensión institucional:</strong>
            <p className="text-slate-700">Polarización retórica desde el poder, descalificación a la sociedad civil e intentos de centralización en el Ejecutivo.</p>
          </div>

          {/* Tendencia global */}
          <div className="bg-rose-50/60 border border-rose-200 p-2.5 text-xs">
            <strong className="text-rose-800 block mb-0.5">Tendencia global:</strong>
            <p className="text-slate-700">V-Dem señala que esta lógica se alinea con patrones internacionales de retroceso illiberal.</p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Datos oficiales de la base de datos V-Dem v14.</span>
        <span className="font-semibold text-slate-700">08 / 10</span>
      </div>
    </div>
  );
};
