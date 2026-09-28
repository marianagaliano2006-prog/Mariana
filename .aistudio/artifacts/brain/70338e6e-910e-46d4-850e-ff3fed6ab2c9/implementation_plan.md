# Presentación Editorial Interactiva: Argentina (2010–2025)
## La Paradoja del Desarrollo Humano y la Vulnerabilidad Socioeconómica e Institucional

Una presentación interactiva editorial estilo *Pitch Deck / Canva* de alta gama, estructurada en 10 diapositivas estrictamente ajustadas a una relación de aspecto 16:9 y viewport 100vh (regla cero scroll vertical). Basada con rigor metodológico en los datos socioeconómicos (IDH, Inflación, Canasta Básica Total, Salario Mínimo, Pobreza Monetaria) y en los índices de democracia de la Universidad de Gotemburgo (V-Dem) entre 2010 y 2025.

---

### Decisiones Críticas y Preferencias del Usuario

> [!IMPORTANT]
> Confirmaciones del usuario en la etapa de clarificación:
> - **Modo de navegación**: Presentación 16:9 fija con navegación lateral mediante drawer de miniaturas colapsable, controles de avance (anterior/siguiente), selector directo y atajos de teclado (`ArrowLeft` / `ArrowRight`).
> - **Estilo visual de gráficos**: Gráficos sobrios y estáticos estilo editorial tipo libro de investigación académica (líneas nítidas, anotaciones integradas, contraste editorial con paleta institucional, sin distracciones de IA o neón).
> - **Regla Invariante**: 0% scroll vertical en todas las diapositivas (`h-full`, `overflow-hidden`, proporciones matemáticas precisas y Bento Grid adaptativo).

---

### 1. Visión General y Concepto Central

- **Propósito**: Exponer con claridad editorial de primer nivel la paradoja argentina: un índice de desarrollo humano (IDH) calificado internacionalmente como "Muy Alto" (0,865) que coexiste con una severa pérdida del poder adquisitivo del salario mínimo frente a la Canasta Básica Total (cubriendo apenas el 27,1% en 2025), un 40% de inseguridad alimentaria, y un quiebre reciente en los pilares deliberativo y liberal del marco V-Dem.
- **Audiencia**: Académicos, analistas económicos, periodistas de investigación, formuladores de políticas públicas y decisores estratégicos.
- **Valor Principal**: Visualización sintética, sobria y de alto impacto estético que une economía dura, métricas democráticas institucionales y dimensión humana sin fricción de desplazamiento ni sobrecarga visual.

---

### 2. Experiencia de Usuario y Diseño Visual

#### Paleta de Color Institucional y Editorial (60-30-10)
- **Fondo Dominante (60%)**: 
  - Diapositivas oscuras (Portada y Cierre): Azul Marino Profundo (`#0A2240` / `#07182D`).
  - Diapositivas de datos y análisis: Blanco Puro (`#FFFFFF`) y Papel Alabastro (`#F8FAFC`).
- **Superficies Estructurales (30%)**:
  - Tarjetas Bento: Celeste Suave Sedoso (`#F0F7FC` / `#E2EFF8`), Azul Noche (`#122B4D` en diapositivas oscuras) y bordes ultra finos pizarra (`#CBD5E1` / `#334E68`).
- **Acentos de Alto Contraste (10%)**:
  - Celeste Bandera Argentina (`#75B2DD`), Dorado Sol Patrio (`#E6AF2E`) para destacados críticos y Rojo Carmín Suave (`#DC2626` / `#BE123C`) exclusivamente para picos inflacionarios o quiebres.

#### Tipografía y Ritmo Espacial
- **Títulos y Enunciados**: `Playfair Display` / `Georgia` (serif de alta distinción editorial con `text-wrap: balance`).
- **Cuerpo, Tablas y Métricas**: `Inter` / `Source Sans 3` con `tabular-nums` para alineación vertical perfecta de importes y coeficientes.
- **Kickers y Metadatos**: Texto despojado de pastillas (Zero-Pill Discipline), con separadores tipográficos sutiles (`·` / `/`).

#### Regla Cero Scroll (Slide Invariant)
- Contenedor maestro con relación de aspecto 16:9 fijado al viewport (`max-h-screen`, `aspect-video` escalado dinámicamente mediante `transform: scale()` o cálculo flex/grid proporcional).
- Alturas predefinidas con cálculo de cabecera (`h-14`), cuerpo dinámico (`flex-1`) y barra inferior de navegación fija (`h-12`).

---

### 3. Estructura y Contenido Detallado de las 10 Diapositivas

```
┌────────────────────────────────────────────────────────────────────────┐
│ DIAPOSITIVA 01: PORTADA EDITORIAL                                      │
│ Fondo Azul Marino (#0A2240), tipografía serif imponente, kiker celeste │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 02: LA FACHADA DEL IDH (0,834 ➔ 0,865)                     │
│ Gráfico Chart.js Y[0.80-0.90] + 2 Tarjetas Bento + Factores Estructural│
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 03: DETRÁS DE LA FACHADA: LA ESPIRAL INFLACIONARIA         │
│ Gráfico Barras IPC (Picos 133,5% en 2023 y 219,9% en 2024) + Tarjeta   │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 04: CBT VS. SALARIO MÍNIMO (BENTO 01, 02, 03)              │
│ $1.250 a $1.380.000 / Cobertura 138,9% (2010) vs 27,1% (2025)          │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 05: DIMENSIÓN SOCIAL (COBERTURA VS. POBREZA)               │
│ Gráfico Doble Eje Y + Correlación Spearman ρ=-0.923 / Pearson r=-0.938 │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 06: EL ROSTRO HUMANO: INSEGURIDAD ALIMENTARIA              │
│ Métrica 40% + Relato de María (saciedad barata, viandas, paradoja)    │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 07: DIMENSIÓN DEMOCRÁTICA: MARCO V-DEM                     │
│ 5 Pilares: Electoral, Liberal, Deliberativa, Igualitaria, Participativa│
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 08: EL QUIEBRE EN V-DEM (2023–2025)                        │
│ Caídas: Delib -34,5%, Lib -24,6%, Elec -17,7% + Análisis Institucional │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 09: EL DILEMA 2024–2025 (SHOCK FISCAL VS. DELIBERACIÓN)    │
│ Comparativa Inflación (219,9%➔41,9%) vs Democracia Deliberativa        │
├────────────────────────────────────────────────────────────────────────┤
│ DIAPOSITIVA 10: CONCLUSIONES Y PREGUNTA FINAL                          │
│ 3 Bloques Conclusivos + Pregunta Abierta en Gran Tipografía Serif      │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4. Arquitectura Técnica y Datos Estructurados

#### Sistema de Componentes y Flujo de Estado
```
┌───────────────────────────────────────────────────────────┐
│                       App Container                       │
│  (Gestión de teclado, escalado 16:9, diapositiva activa)  │
└─────────────────────────────┬─────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
┌────────▼────────┐  ┌────────▼────────┐  ┌────────▼────────┐
│ Top Header Bar  │  │  Slide Content  │  │ Navigation Bar  │
│ - Título estudio│  │ - Layout 16:9   │  │ - Prev / Next   │
│ - Índice actual │  │ - Canvas Chart  │  │ - Contador 01/10│
│ - Botón Drawer  │  │ - Tarjetas Bento│  │ - Fullscreen btn│
│ - Fullscreen    │  │ - Cero scroll   │  │ - Drawer toggle │
└─────────────────┘  └─────────────────┘  └─────────────────┘
                              │
               ┌──────────────▼──────────────┐
               │    Drawer de Miniaturas     │
               │  - Vista general 10 slides  │
               │  - Salto directo a slide    │
               └─────────────────────────────┘
```

#### Conjunto de Datos Completo (2010–2025)
Se incorporan fielmente en un módulo de datos tipado en TypeScript:
- **Serie V-Dem**: Año, Deliberativa, Liberal, Electoral, Igualitaria, Participativa e intervalos.
- **Serie Socioeconómica**: Año, IDH (0,834 a 0,865), Inflación IPC (10,2% a 219,9% y 41,9%), Canasta Básica Total ($1.250 a $1.380.000), Salario Mínimo ($1.740 a $390.000), Cobertura (138,9% a 27,1%), Pobreza Monetaria (9,9% a 48,1% y 38,6%).

---

### 5. Plan de Verificación y Compilación

1. **Verificación Estética y Geométrica**:
   - Comprobación de ausencia total de scrollbar vertical en 1080p, 720p y ventanas con proporciones variables.
   - Verificación de renderizado de Chart.js sin parpadeos al transicionar diapositivas.
2. **Navegación e Interacción**:
   - Pruebas de teclas `ArrowRight`, `ArrowLeft`, `Home`, `End` y gestos de clic.
   - Drawer lateral accesible para salto rápido entre diapositivas.
   - Botón de pantalla completa (`document.fullscreenElement`).
3. **Validación de Código y Compilación**:
   - Ejecución de `compile_applet` para confirmar cero errores de TypeScript y bundling limpio en Vite.
