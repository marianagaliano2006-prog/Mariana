import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartConfiguration
} from 'chart.js';

// Register standard Chart.js controllers and elements once
Chart.register(
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartCanvasProps {
  config: ChartConfiguration;
  className?: string;
  onChartReady?: (chart: Chart) => void;
  chartRef?: React.MutableRefObject<Chart | null>;
}

export const ChartCanvas: React.FC<ChartCanvasProps> = ({ 
  config, 
  className = 'w-full h-full',
  onChartReady,
  chartRef
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      const chart = new Chart(ctx, {
        ...config,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 400
          },
          ...config.options
        }
      });
      chartInstanceRef.current = chart;
      if (chartRef) {
        chartRef.current = chart;
      }
      if (onChartReady) {
        onChartReady(chart);
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
        if (chartRef) {
          chartRef.current = null;
        }
      }
    };
  }, [config, onChartReady, chartRef]);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};
