import React, { useMemo } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { SOCIOECONOMIC_DATA } from '../../data/presentationData';
import { ChartConfiguration, Plugin } from 'chart.js';

export const Slide03Inflation: React.FC = () => {
  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = SOCIOECONOMIC_DATA.map(d => d.year.toString());
    const inflacion = SOCIOECONOMIC_DATA.map(d => d.inflacionIPC);

    const backgroundColors = SOCIOECONOMIC_DATA.map(d => {
      if (d.year === 2024 || d.year === 2023) return '#F87171'; // Rojo Coral Sobrio (área de crisis)
      if (d.year === 2025) return '#38BDF8'; // Azul Cyan Claro (desaceleración)
      return '#75B2DD'; // Celeste Argentina
    });

    // Plugin de anotación visual para el año 2024
    const eventAnnotation2024: Plugin = {
      id: 'eventAnnotation2024',
      afterDraw: (chart) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const { top, bottom } = chartArea;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;

        const index2024 = chart.data.labels?.indexOf('2024');
        if (index2024 === undefined || index2024 === -1) return;

        const xPos = xScale.getPixelForTick(index2024);
        const yPeak = yScale ? yScale.getPixelForValue(219.9) : top + 35;

        ctx.save();

        // 1. Línea vertical punteada discreta (borderDash: [5, 5])
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#F87171';
        ctx.lineWidth = 1.5;
        ctx.moveTo(xPos, top + 22);
        ctx.lineTo(xPos, bottom);
        ctx.stroke();
        ctx.setLineDash([]);

        // 2. Badge sobrio de fondo oscuro (#0A2240) con borde dorado (#E6AF2E)
        const badgeText = "2024: Shock fiscal y monetario";
        ctx.font = 'bold 9px Inter, sans-serif';
        const textWidth = ctx.measureText(badgeText).width;
        const badgeWidth = textWidth + 14;
        const badgeHeight = 19;
        // Position slightly shifted left if near right edge
        const badgeX = Math.min(xPos - badgeWidth / 2, chartArea.right - badgeWidth - 2);
        const badgeY = top + 2;

        ctx.fillStyle = '#0A2240';
        ctx.strokeStyle = '#E6AF2E';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 3);
        } else {
          ctx.rect(badgeX, badgeY, badgeWidth, badgeHeight);
        }
        ctx.fill();
        ctx.stroke();

        // Pequeño puntero indicativo
        ctx.beginPath();
        ctx.moveTo(xPos - 3, badgeY + badgeHeight);
        ctx.lineTo(xPos, badgeY + badgeHeight + 3);
        ctx.lineTo(xPos + 3, badgeY + badgeHeight);
        ctx.closePath();
        ctx.fillStyle = '#E6AF2E';
        ctx.fill();

        // Texto interior en blanco puro
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badgeText, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2);

        ctx.restore();
      }
    };

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Inflación IPC Anual (%)',
            data: inflacion,
            backgroundColor: backgroundColors,
            borderRadius: 2
          }
        ]
      },
      plugins: [eventAnnotation2024],
      options: {
        layout: {
          padding: { top: 10 }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0A2240',
            titleFont: { family: 'Inter', size: 12, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 12 },
            padding: 10,
            callbacks: {
              label: (context) => `Inflación IPC: ${context.raw}%`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 260,
            ticks: {
              stepSize: 50,
              font: { family: 'Inter', size: 11 },
              color: '#64748B',
              callback: (value) => `${value}%`
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'Inflación IPC (%)',
              font: { family: 'Inter', size: 11, weight: '500' },
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
            DIAPOSITIVA 03
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            Detrás de la fachada: La espiral inflacionaria
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Serie</span>
          <span className="text-sm font-semibold text-[#0A2240]">2010 — 2025</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left Column: Chart con anotación visual */}
        <div className="lg:col-span-7 flex flex-col h-[280px] md:h-[340px] bg-[#F8FAFC] border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider">
              INFLACIÓN IPC gráfico 2010–2025
            </span>
            <span className="text-[11px] text-slate-500 font-medium">Fuente: INDEC / IPC</span>
          </div>
          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} />
          </div>
        </div>

        {/* Right Column: Hitos + Efecto macroeconómico (centrado en consecuencias y mecanismos) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Hitos */}
          <div className="bg-[#F8FAFC] border border-slate-200 p-4">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-2">
              Hitos de inflación
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-rose-50 border border-rose-200 p-3">
                <span className="text-[11px] font-semibold text-rose-700 block">Máximo histórico 2024</span>
                <span className="text-3xl font-serif font-bold text-rose-700 tabular-nums">219,9%</span>
              </div>
              <div className="bg-sky-50 border border-sky-200 p-3">
                <span className="text-[11px] font-semibold text-sky-800 block">Año 2025</span>
                <span className="text-3xl font-serif font-bold text-sky-800 tabular-nums">41,9%</span>
              </div>
            </div>
          </div>

          {/* Texto Efecto macroeconómico */}
          <div className="bg-[#0A2240] text-white p-5 border-l-4 border-[#E6AF2E]">
            <span className="text-xs uppercase tracking-widest text-[#E6AF2E] font-bold block mb-1">
              Efecto macroeconómico
            </span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2 leading-snug">
              Destrucción del salario real e incapacidad de planificación financiera en los hogares.
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              La aceleración de precios desarticuló las referencias monetarias, licuando ingresos fijos y anulando cualquier horizonte de previsibilidad familiar.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Datos oficiales de inflación nacional interanual (INDEC).</span>
        <span className="font-semibold text-slate-700">03 / 10</span>
      </div>
    </div>
  );
};
