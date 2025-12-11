# 001 - Arquitectura Frontend: Brittanys RPG

## Contexto
Implementamos un diseño "Split Screen" inspirado en Brittany Chiang pero adaptado a una estética Dark/RPG.

## Decisiones Técnicas

### 1. CSS Modules sobre Tailwind
**Por qué**: Para mantener un control granular y "purista" sobre los estilos, evitando la contaminación de clases en el JSX.
**Implementación**:
- Variables globales en `index.css` (Colores, Fuentes).
- Archivos `*.module.css` para cada componente.

### 2. Estructura de Componentes
- **Layout**: `MainLayout` maneja la división 40% (Fixed) / 60% (Scroll).
- **Hooks**: `useProjects` y `useJobs` abstraen la lógica de Axios.
- **Features**:
    - `Hero`: Identidad y Navegación.
    - `JobHistory`: Lista de experiencias.
    - `ProjectShowcase`: Logica de filtrado (Featured vs Archive).

## Lección Aprendida
La separación de *Container Components* (lógica de datos) y *Presentational Components* (UI pura) facilita el mantenimiento. Ejemplo: `ProjectShowcase` maneja el filtrado, mientras `FeaturedProject` solo recibe props.
