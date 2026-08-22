# Proyecto: Sembrar La Palabra - Recursos Bíblicos

Este documento describe la estructura, funcionalidad, herramientas y versiones del proyecto para brindar contexto completo sobre cómo está construido.

## 1. Funcionalidad de la Página

"Sembrar La Palabra" es una aplicación web de una sola página (SPA) enfocada en proveer recursos para la enseñanza bíblica y el crecimiento espiritual orientado a niños, adolescentes y jóvenes.

**Características principales:**
- **Navegación Smooth-Scroll:** La barra de navegación superior (Navbar) contiene enlaces que desplazan suavemente la página hacia diferentes secciones (Inicio, Inclusión, Niños y Adolescentes, Talleres, Jóvenes, Libros, Contacto). Resalta automáticamente la sección activa al hacer scroll usando `IntersectionObserver`.
- **Exposición de Recursos:** Muestra catálogos de recursos (libros, manuales EBI, PDFs) mediante tarjetas interactivas (`BookCard`, `ResourceCard`) con opciones para abrir enlaces externos (Google Drive, etc.).
- **Talleres y Capacitaciones:** Presenta una oferta de talleres para los cuales los usuarios pueden ver una propuesta y abrir un modal interactivo (`Modal`) para solicitar el taller vía Email o Instagram.
- **Diseño Responsivo (Mobile-First adaptado):** Utiliza Media Queries para adaptar la cuadrícula y el menú de navegación a dispositivos móviles (menú hamburguesa).

## 2. Tecnologías y Versiones Actuales

El proyecto es una aplicación moderna de React construida con **Vite**.

- **Entorno de Construcción:** Vite (v7.2.4)
- **Framework UI:** React (v19.2.0) y React DOM (v19.2.0)
- **Librería de Íconos:** `react-icons` (v5.6.0)
- **Estilos:** CSS puro (Vanilla CSS) utilizando variables globales nativas de CSS (Custom Properties) para el sistema de diseño (colores, espaciado, fuentes). No se utiliza Tailwind ni Bootstrap.
- **Fuentes (Google Fonts):** `Playfair Display` (para encabezados) e `Inter` (para cuerpos de texto).
- **Linter:** ESLint (v9.39.1) con la nueva configuración plana (`eslint.config.js`).
- **Tipo de Proyecto:** JavaScript Modules (`"type": "module"` en `package.json`).

## 3. Estructura de Directorios

El código fuente está organizado siguiendo el principio de separación por responsabilidades:

```text
/
├── public/                 # Archivos estáticos públicos (favicon, imágenes root)
├── src/                    # Código fuente principal
│   ├── assets/             # Recursos multimedia locales (imágenes, íconos WebP/PNG)
│   ├── components/         # Componentes de React (Presentacionales y de UI)
│   │   ├── common/         # Componentes reutilizables: Button.jsx, Modal.jsx, BookCard.jsx, ResourceCard.jsx
│   │   ├── Footer/         # Componente de pie de página: Footer.jsx, Footer.css
│   │   ├── Header/         # Barra de navegación principal: Navbar.jsx, Navbar.css
│   │   ├── Hero/           # Banner principal de inicio: Hero.jsx, Hero.css
│   │   └── sections/       # Componentes de grandes secciones de la página: 
│   │                       # Contacto, Inclusion, Jovenes, LibrosSugeridos, NinosAdolescentes, TalleresYCapacitaciones
│   ├── data/               # Archivos de datos estáticos (Fake Backend/JSON):
│   │                       # contactData.js, inclusionData.js, jovenesData.js, librosData.js, ninosData.js
│   ├── hooks/              # Custom Hooks de React: useScrollTo.js (para la navegación fluida)
│   ├── styles/             # Variables globales y resets de CSS: index.css
│   ├── utils/              # Funciones utilitarias: driveHelpers.js
│   ├── App.jsx             # Componente raíz que orquesta la unión de las secciones y layout
│   ├── App.css             # Estilos contenedores del App
│   ├── index.css           # Estilos base adicionales
│   └── main.jsx            # Punto de entrada de React (montaje del DOM)
├── index.html              # Plantilla HTML con metadatos SEO y Open Graph
├── eslint.config.js        # Configuración de ESLint
├── package.json            # Dependencias y scripts de npm
└── vite.config.js          # Configuración de empaquetado de Vite
```

## 4. Patrones de Construcción y Decisiones de Diseño

- **Gestión de Estado:** La página utiliza principalmente estado local (`useState`) para la apertura de menús desplegables en el Navbar y la visualización de modales. No requiere gestores de estado globales complejos (como Redux o Zustand) al ser una Landing Page.
- **Separación de Contenido (Data-Driven):** Todo el contenido de la web (títulos, descripciones de libros, enlaces) está extraído en la carpeta `src/data/`. Esto permite modificar el contenido del sitio web (por ejemplo, agregar un nuevo libro o taller) sin tocar la lógica de los componentes de React (`.jsx`).
- **Arquitectura de UI (CSS):** Los estilos están separados en módulos o archivos por cada componente (Ej: `Navbar.css`, `Hero.css`). Las directrices de diseño generales, la paleta de colores (`--primary-color`, `--secondary-color`) y la tipografía están centralizadas en `src/styles/index.css`.
- **Efectos y Ciclos de Vida:** El proyecto usa `useEffect` en la barra de navegación para escuchar eventos de `scroll` de ventana e `IntersectionObserver` para lograr un control fino sobre el resaltado dinámico de las secciones al desplazarse.
- **Imágenes:** Se prioriza el uso de formato ligero como `.webp` y URLs estáticas alojadas o convertidas localmente.

Esta estructura está lista para ser leída por un agente o desarrollador y ser fácilmente mantenida o extendida.
