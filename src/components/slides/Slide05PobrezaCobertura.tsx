import React, { useMemo, useRef, useState } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { SOCIOECONOMIC_DATA } from '../../data/presentationData';
import { Chart, ChartConfiguration } from 'chart.js';

export const Slide05PobrezaCobertura: React.FC = () => {
  const chartInstanceRef = useRef<Chart | null>(null);
  const [isPobrezaVisible, setIsPobrezaVisible] = useState(false);

  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = SOCIOECONOMIC_DATA.map(d => d.year.toString());
    const coberturaData = SOCIOECONOMIC_DATA.map(d => d.cobertura);
    const pobrezaData = SOCIOECONOMIC_DATA.map(d => d.pobrezaMonetaria);

    return {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Cobertura del Salario Mínimo (%)',
            data: coberturaData,
            borderColor: '#38BDF8',
            backgroundColor: '#38BDF8',
            borderWidth: 3,
            pointBackgroundColor: '#38BDF8',
            pointRadius: 4.5,
            pointHoverRadius: 6,
            yAxisID: 'yCobertura',
            spanGaps: true,
            tension: 0.15
          },
          {
            label: 'Pobreza Monetaria (%)',
            data: pobrezaData,
            borderColor: '#F87171',
            backgroundColor: '#F87171',
            borderWidth: 3,
            borderDash: [5, 4],
            pointBackgroundColor: '#F87171',
            pointRadius: 4.5,
            pointHoverRadius: 6,
            yAxisID: 'yPobreza',
            spanGaps: true,
            tension: 0.15,
            hidden: true // Inicia oculta por defecto para revelación progresiva
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { family: 'Inter', size: 11, weight: 'bold' },
              color: '#334155',
              usePointStyle: true,
              boxWidth: 8
            },
            onClick: (e, legendItem, legend) => {
              const index = legendItem.datasetIndex;
              if (index === undefined) return;
              const ci = legend.chart;
              const alreadyVisible = ci.isDatasetVisible(index);
              ci.setDatasetVisibility(index, !alreadyVisible);
              ci.update();
              if (index === 1) {
                setIsPobrezaVisible(!alreadyVisible);
              }
            }
          },
          tooltip: {
            backgroundColor: '#0A2240',
            titleFont: { family: 'Inter', size: 11, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 11 },
            padding: 8,
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const val = context.raw ? `${context.raw}%` : 'S/D (Apagón INDEC)';
                return `${label}: ${val}`;
              }
            }
          }
        },
        scales: {
          yCobertura: {
            type: 'linear',
            position: 'left',
            min: 0,
            max: 180,
            ticks: {
              stepSize: 30,
              font: { family: 'Inter', size: 10 },
              color: '#0284C7',
              callback: (val) => `${val}%`
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'Cobertura SMM / CBT (%)',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              color: '#0284C7'
            }
          },
          yPobreza: {
            type: 'linear',
            position: 'right',
            min: 0,
            max: 60,
            ticks: {
              stepSize: 10,
              font: { family: 'Inter', size: 10 },
              color: '#F87171',
              callback: (val) => `${val}%`
            },
            grid: { display: false },
            title: {
              display: true,
              text: 'Pobreza Monetaria (%)',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              color: '#F87171'
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

  const handleTogglePobreza = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsPobrezaVisible(checked);
    if (chartInstanceRef.current) {
      chartInstanceRef.current.setDatasetVisibility(1, checked);
      chartInstanceRef.current.update();
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 bg-white text-slate-800 overflow-hidden select-none">
      {/* Slide Header */}
      <div className="border-b border-slate-200 pb-2.5 flex items-start justify-between shrink-0">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#75B2DD] font-bold font-sans">
            DIAPOSITIVA 05
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            Dimensión Social (Cobertura Salarial vs. Pobreza)
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Correlación Negativa Extrema</span>
          <span className="text-sm font-semibold font-mono text-[#0A2240]">ρ = -0,923 / r = -0,938</span>
        </div>
      </div>

      {/* Main Vertical Disposition: Top Chart (Full Width) + Bottom Cards (Horizontal Row) */}
      <div className="flex-1 flex flex-col justify-center gap-3.5 my-auto py-1">
        {/* A. SECCIÓN SUPERIOR: GRÁFICO A ANCHO COMPLETO */}
        <div className="w-full h-[330px] md:h-[350px] bg-[#F8FAFC] border border-slate-200 p-3.5 flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 shrink-0">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider">
              Gráfico de línea: Cobertura del Salario Mínimo vs. Pobreza Monetaria
            </span>

            {/* Control Checkbox Interactivo: Revelación Progresiva */}
            <div className="flex items-center gap-3">
              <label 
                htmlFor="togglePobreza"
                className={`inline-flex items-center gap-2 cursor-pointer px-3 py-1 rounded border transition-all text-xs font-bold ${
                  isPobrezaVisible 
                    ? 'bg-rose-50 border-rose-300 text-rose-800 shadow-sm ring-1 ring-rose-200' 
                    : 'bg-white border-slate-300 text-slate-700 hover:border-[#F87171] hover:bg-slate-50'
                }`}
                title="Haga clic para revelar la curva de Pobreza Monetaria"
              >
                <input
                  type="checkbox"
                  id="togglePobreza"
                  checked={isPobrezaVisible}
                  onChange={handleTogglePobreza}
                  className="w-4 h-4 text-[#F87171] rounded border-slate-300 focus:ring-rose-500 cursor-pointer accent-[#F87171]"
                />
                <span className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isPobrezaVisible ? 'bg-[#F87171]' : 'bg-slate-300'}`} />
                  {isPobrezaVisible ? 'Pobreza Monetaria (%) Revelada' : 'Revelar Pobreza (%)'}
                </span>
              </label>

              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                *2014–15: Apagón INDEC
              </span>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} chartRef={chartInstanceRef} />
          </div>
        </div>

        {/* B. SECCIÓN INFERIOR: FILA DE TARJETAS HORIZONTALES */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          {/* Tarjeta 1 (Izquierda / Fondo Claro) */}
          <div className="bg-[#F8FAFC] border border-slate-200 border-l-4 border-l-[#0284C7] p-4 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-wider font-bold text-[#0A2240] block mb-1">
              EFECTO ESPEJO CASI PERFECTO
            </span>
            <p className="text-xs md:text-sm font-medium text-slate-700 leading-relaxed">
              A mayor cobertura del salario, menor pobreza; al caer la cobertura, la pobreza explota.
            </p>
          </div>

          {/* Tarjeta 2 (Derecha / Fondo Oscuro #0A2240) */}
          <div className="bg-[#0A2240] text-white p-4 border border-white/10 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#E6AF2E] font-bold block mb-1">
              TEXTO CONCLUSIÓN
            </span>
            <p className="text-xs md:text-sm font-serif text-slate-100 leading-relaxed">
              El trabajo formal bajo salario mínimo dejó de ser una barrera de protección contra la pobreza.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center shrink-0">
        <span>Fuente: Microdatos EPH / INDEC y Resoluciones del CNEPySMVyM (2010–2025).</span>
        <span className="font-semibold text-slate-700">05 / 10</span>
      </div>
    </div>
  );
};
