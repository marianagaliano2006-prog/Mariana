import React, { useMemo } from 'react';
import { ChartCanvas } from '../ChartCanvas';
import { ChartConfiguration, Plugin } from 'chart.js';

export const Slide09DilemaFiscal: React.FC = () => {
  const chartConfig = useMemo<ChartConfiguration>(() => {
    const labels = ['2022', '2023', '2024', '2025'];
    const delibData = [0.636, 0.626, 0.443, 0.410];
    const inflacionData = [72.4, 133.5, 219.9, 41.9];

    // Plugin de anotación visual de evento para el año 2024
    const eventAnnotation2024: Plugin = {
      id: 'eventAnnotation2024',
      afterDraw: (chart) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const { top, bottom } = chartArea;
        const xScale = chart.scales.x;
        const yInfScale = chart.scales.yInf;

        const index2024 = chart.data.labels?.indexOf('2024');
        if (index2024 === undefined || index2024 === -1) return;

        const xPos = xScale.getPixelForTick(index2024);
        const yPeak = yInfScale ? yInfScale.getPixelForValue(219.9) : top + 35;

        ctx.save();

        // 1. Línea vertical punteada discreta (borderDash: [5, 5])
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#F87171';
        ctx.lineWidth = 1.5;
        ctx.moveTo(xPos, top + 24);
        ctx.lineTo(xPos, bottom);
        ctx.stroke();
        ctx.setLineDash([]);

        // 2. Distintivo / badge sobrio de fondo oscuro (#0A2240) con borde dorado (#E6AF2E)
        const badgeText = "2024: Shock fiscal y monetario";
        ctx.font = 'bold 9.5px Inter, sans-serif';
        const textWidth = ctx.measureText(badgeText).width;
        const badgeWidth = textWidth + 14;
        const badgeHeight = 20;
        const badgeX = xPos - badgeWidth / 2;
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

        // Pequeño puntero indicativo hacia el pico
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
        ctx.fillText(badgeText, xPos, badgeY + badgeHeight / 2);

        ctx.restore();
      }
    };

    return {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Democracia Deliberativa (0 a 1)',
            data: delibData,
            borderColor: '#E6AF2E',
            backgroundColor: '#E6AF2E',
            borderWidth: 2.8,
            pointRadius: 4.5,
            pointBackgroundColor: '#E6AF2E',
            yAxisID: 'yDelib',
            tension: 0.15
          },
          {
            label: 'Inflación Anual IPC (%)',
            data: inflacionData,
            borderColor: '#F87171',
            backgroundColor: 'rgba(248, 113, 113, 0.08)',
            borderWidth: 2.8,
            borderDash: [5, 4],
            pointRadius: 4.5,
            pointBackgroundColor: '#F87171',
            yAxisID: 'yInf',
            fill: true,
            tension: 0.15
          }
        ]
      },
      plugins: [eventAnnotation2024],
      options: {
        interaction: { mode: 'index', intersect: false },
        layout: {
          padding: { top: 12 }
        },
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
          yDelib: {
            type: 'linear',
            position: 'left',
            min: 0.3,
            max: 0.7,
            ticks: {
              stepSize: 0.1,
              font: { family: 'Inter', size: 10 },
              color: '#D97706',
              callback: (v) => Number(v).toFixed(2)
            },
            grid: { color: '#E2E8F0' },
            title: {
              display: true,
              text: 'Deliberativa (V-Dem)',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              color: '#D97706'
            }
          },
          yInf: {
            type: 'linear',
            position: 'right',
            min: 0,
            max: 260,
            ticks: {
              stepSize: 50,
              font: { family: 'Inter', size: 10 },
              color: '#F87171',
              callback: (v) => `${v}%`
            },
            grid: { display: false },
            title: {
              display: true,
              text: 'Inflación IPC (%)',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              color: '#F87171'
            }
          },
          x: {
            ticks: {
              font: { family: 'Inter', size: 11, weight: 'bold' },
              color: '#334155'
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
            DIAPOSITIVA 09
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A2240] tracking-tight">
            El dilema 2024-2025 (Shock Fiscal vs. Deliberación)
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-sans block">Dinámica</span>
          <span className="text-sm font-semibold text-[#0A2240]">2022 — 2025</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-1 items-center">
        {/* Left Column: Gráfico de línea Correlación con Anotación Visual */}
        <div className="lg:col-span-6 flex flex-col h-[280px] md:h-[330px] bg-[#F8FAFC] border border-slate-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0A2240] uppercase tracking-wider block">
              Gráfico de línea: Democracia Deliberativa vs Inflación
            </span>
          </div>
          <div className="flex-1 w-full relative">
            <ChartCanvas config={chartConfig} />
          </div>
        </div>

        {/* Right Column: Mecanismos y consecuencias (sin redundancia textual con el badge) */}
        <div className="lg:col-span-6 flex flex-col gap-2.5 text-xs">
          {/* El trade-off institucional */}
          <div className="bg-[#F8FAFC] border border-slate-200 p-2.5">
            <strong className="text-[#0A2240] block mb-0.5">El trade-off institucional:</strong>
            <p className="text-slate-700 leading-snug">
              Gobernanza mediante decretos de necesidad y urgencia (DNU 70/23) y facultades delegadas sin concertación parlamentaria previa.
            </p>
          </div>

          {/* Costo democrático */}
          <div className="bg-amber-50/70 border border-amber-200 p-2.5">
            <strong className="text-amber-800 block mb-0.5">Costo democrático:</strong>
            <p className="text-amber-950 leading-snug">
              Contracción del Índice de Democracia Deliberativa de <strong>0,626 (2023) a 0,410 (2025)</strong>, reflejando el repliegue del diálogo multipartidario.
            </p>
          </div>

          {/* Resultado macroeconómico */}
          <div className="bg-sky-50 border border-sky-200 p-2.5">
            <strong className="text-sky-800 block mb-0.5">Resultado macroeconómico:</strong>
            <p className="text-sky-900 leading-snug">
              Ajuste del gasto primario (~5% del PIB) que actuó como ancla para desacelerar la inflación del <strong>219,9% al 41,9% (2025)</strong>.
            </p>
          </div>

          {/* Lección analítica */}
          <div className="bg-[#0A2240] text-white p-3 border-l-4 border-[#E6AF2E]">
            <strong className="text-[#E6AF2E] block mb-0.5">Lección analítica:</strong>
            <p className="text-slate-100 font-medium leading-snug">
              Las reformas de estabilización rápida pueden ganar efectividad antiinflamatoria a costa de contraer los espacios formales de deliberación institucional.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-2 flex justify-between items-center">
        <span>Análisis comparado de gobernanza económica vs. instituciones deliberativas.</span>
        <span className="font-semibold text-slate-700">09 / 10</span>
      </div>
    </div>
  );
};
