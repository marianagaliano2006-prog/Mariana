export interface SocioEconomicRecord {
  year: number;
  idh: number;
  inflacionIPC: number;
  cbt: number;
  salarioMinimo: number;
  cobertura: number | null;
  pobrezaMonetaria: number | null;
}

export interface VDemRecord {
  year: number;
  deliberative: number;
  deliberativeLow: number;
  deliberativeHigh: number;
  egalitarian: number;
  electoral: number;
  liberal: number;
  participatory: number;
}

export const SOCIOECONOMIC_DATA: SocioEconomicRecord[] = [
  { year: 2010, idh: 0.834, inflacionIPC: 10.2, cbt: 1250, salarioMinimo: 1740, cobertura: 138.9, pobrezaMonetaria: 9.9 },
  { year: 2011, idh: 0.842, inflacionIPC: 9.5, cbt: 1540, salarioMinimo: 2300, cobertura: 163.8, pobrezaMonetaria: 6.5 },
  { year: 2012, idh: 0.844, inflacionIPC: 10.8, cbt: 1980, salarioMinimo: 2670, cobertura: 165.4, pobrezaMonetaria: 5.4 },
  { year: 2013, idh: 0.846, inflacionIPC: 18.4, cbt: 2580, salarioMinimo: 3300, cobertura: null, pobrezaMonetaria: 4.7 },
  { year: 2014, idh: 0.847, inflacionIPC: 38.0, cbt: 4120, salarioMinimo: 4400, cobertura: null, pobrezaMonetaria: null },
  { year: 2015, idh: 0.850, inflacionIPC: 16.1, cbt: 5350, salarioMinimo: 5588, cobertura: null, pobrezaMonetaria: null },
  { year: 2016, idh: 0.848, inflacionIPC: 37.3, cbt: 13125, salarioMinimo: 7560, cobertura: 57.5, pobrezaMonetaria: 30.3 },
  { year: 2017, idh: 0.853, inflacionIPC: 25.7, cbt: 16677, salarioMinimo: 8860, cobertura: 53.1, pobrezaMonetaria: 25.7 },
  { year: 2018, idh: 0.852, inflacionIPC: 34.3, cbt: 25493, salarioMinimo: 11300, cobertura: 44.3, pobrezaMonetaria: 32.0 },
  { year: 2019, idh: 0.853, inflacionIPC: 53.5, cbt: 38960, salarioMinimo: 16875, cobertura: 43.3, pobrezaMonetaria: 25.5 },
  { year: 2020, idh: 0.841, inflacionIPC: 42.0, cbt: 54208, salarioMinimo: 20588, cobertura: 38.0, pobrezaMonetaria: 42.0 },
  { year: 2021, idh: 0.844, inflacionIPC: 48.4, cbt: 76146, salarioMinimo: 32000, cobertura: 42.0, pobrezaMonetaria: 37.3 },
  { year: 2022, idh: 0.849, inflacionIPC: 72.4, cbt: 152515, salarioMinimo: 61953, cobertura: 40.6, pobrezaMonetaria: 39.2 },
  { year: 2023, idh: 0.865, inflacionIPC: 133.5, cbt: 495798, salarioMinimo: 156000, cobertura: 31.5, pobrezaMonetaria: 41.7 },
  { year: 2024, idh: 0.849, inflacionIPC: 219.9, cbt: 950000, salarioMinimo: 271571, cobertura: 26.8, pobrezaMonetaria: 48.1 },
  { year: 2025, idh: 0.865, inflacionIPC: 41.9, cbt: 1380000, salarioMinimo: 390000, cobertura: 27.1, pobrezaMonetaria: 38.6 }
];

export const VDEM_DATA: VDemRecord[] = [
  { year: 2010, deliberative: 0.542, deliberativeLow: 0.462, deliberativeHigh: 0.610, egalitarian: 0.596, electoral: 0.746, liberal: 0.578, participatory: 0.502 },
  { year: 2011, deliberative: 0.544, deliberativeLow: 0.465, deliberativeHigh: 0.614, egalitarian: 0.597, electoral: 0.749, liberal: 0.573, participatory: 0.502 },
  { year: 2012, deliberative: 0.556, deliberativeLow: 0.477, deliberativeHigh: 0.627, egalitarian: 0.606, electoral: 0.763, liberal: 0.582, participatory: 0.511 },
  { year: 2013, deliberative: 0.564, deliberativeLow: 0.493, deliberativeHigh: 0.642, egalitarian: 0.607, electoral: 0.772, liberal: 0.588, participatory: 0.519 },
  { year: 2014, deliberative: 0.570, deliberativeLow: 0.505, deliberativeHigh: 0.654, egalitarian: 0.614, electoral: 0.777, liberal: 0.595, participatory: 0.523 },
  { year: 2015, deliberative: 0.559, deliberativeLow: 0.491, deliberativeHigh: 0.640, egalitarian: 0.603, electoral: 0.765, liberal: 0.590, participatory: 0.513 },
  { year: 2016, deliberative: 0.594, deliberativeLow: 0.524, deliberativeHigh: 0.666, egalitarian: 0.594, electoral: 0.751, liberal: 0.612, participatory: 0.502 },
  { year: 2017, deliberative: 0.579, deliberativeLow: 0.515, deliberativeHigh: 0.658, egalitarian: 0.577, electoral: 0.751, liberal: 0.609, participatory: 0.500 },
  { year: 2018, deliberative: 0.598, deliberativeLow: 0.525, deliberativeHigh: 0.669, egalitarian: 0.613, electoral: 0.780, liberal: 0.630, participatory: 0.520 },
  { year: 2019, deliberative: 0.599, deliberativeLow: 0.533, deliberativeHigh: 0.678, egalitarian: 0.612, electoral: 0.779, liberal: 0.618, participatory: 0.517 },
  { year: 2020, deliberative: 0.647, deliberativeLow: 0.583, deliberativeHigh: 0.726, egalitarian: 0.625, electoral: 0.797, liberal: 0.634, participatory: 0.537 },
  { year: 2021, deliberative: 0.636, deliberativeLow: 0.557, deliberativeHigh: 0.704, egalitarian: 0.621, electoral: 0.796, liberal: 0.639, participatory: 0.534 },
  { year: 2022, deliberative: 0.636, deliberativeLow: 0.559, deliberativeHigh: 0.719, egalitarian: 0.654, electoral: 0.831, liberal: 0.654, participatory: 0.563 },
  { year: 2023, deliberative: 0.626, deliberativeLow: 0.543, deliberativeHigh: 0.708, egalitarian: 0.661, electoral: 0.838, liberal: 0.695, participatory: 0.569 },
  { year: 2024, deliberative: 0.443, deliberativeLow: 0.359, deliberativeHigh: 0.512, egalitarian: 0.544, electoral: 0.721, liberal: 0.558, participatory: 0.462 },
  { year: 2025, deliberative: 0.410, deliberativeLow: 0.337, deliberativeHigh: 0.486, egalitarian: 0.500, electoral: 0.690, liberal: 0.524, participatory: 0.429 }
];

export interface SlideDefinition {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  theme: 'dark' | 'light';
}

export const SLIDES_METADATA: SlideDefinition[] = [
  { id: 1, numberStr: "01", title: "Argentina: Desarrollo Humano y Crisis", subtitle: "Donde no alcanza para comer", theme: "dark" },
  { id: 2, numberStr: "02", title: "La fachada del Desarrollo Humano (El IDH)", subtitle: "Valor del IDH (2025) y estabilidad estadística", theme: "light" },
  { id: 3, numberStr: "03", title: "Detrás de la fachada: La espiral inflacionaria", subtitle: "Inflación IPC 2010–2025 y picos críticos", theme: "light" },
  { id: 4, numberStr: "04", title: "Dimensión Económica (CBT vs. Salario Mínimo)", subtitle: "Costo de la Canasta Básica y diferencia CBT/SMM", theme: "light" },
  { id: 5, numberStr: "05", title: "Dimensión Social (Cobertura Salarial vs. Pobreza)", subtitle: "Correlación y efecto espejo entre cobertura y pobreza", theme: "light" },
  { id: 6, numberStr: "06", title: "El rostro humano: Inseguridad Alimentaria", subtitle: "Impacto real (38%) y registro etnográfico", theme: "dark" },
  { id: 7, numberStr: "07", title: "Dimensión Democrática (El Marco V-Dem)", subtitle: "Varieties of Democracy y 5 dimensiones", theme: "light" },
  { id: 8, numberStr: "08", title: "El quiebre en V-Dem a partir de 2023", subtitle: "Desempeño y quiebre en todos los indicadores", theme: "light" },
  { id: 9, numberStr: "09", title: "El dilema 2024-2025 (Shock Fiscal vs. Deliberación)", subtitle: "Democracia Deliberativa vs Inflación", theme: "light" },
  { id: 10, numberStr: "10", title: "Conclusiones Generales y Pregunta Final", subtitle: "Falacia de índices, canal social y dilema de gobernanza", theme: "dark" }
];
