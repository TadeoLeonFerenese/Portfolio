# 002 - RPG Mode Architecture

## Contexto
Pivotamos de un diseño minimalista a una experiencia inmersiva de Rol (RPG).
OBJETIVO: "Gamificar" la presentación del portfolio.

## Componentes Clave

### 1. Character Sheet (Hero)
Simula una hoja de personaje de D&D.
- **Top**: Avatar y Nivel (Badge).
- **Stats**: Barras de progreso para habilidades técnicas (INT, AGI, etc.).
- **Tech**: `framer-motion` para animar las barras al cargar.

### 2. Spellbook (Skills)
Presenta las tecnologías como hechizos/runas.
- **Interacción**: Hover muestra un tooltip estilo pergamino (`QuestCard.module.css`).
- **Diseño**: Grid de iconos con efectos de brillo (`box-shadow`).

### 3. Quest Board (Projects)
Tablón de anuncios con misiones.
- **Quest Card**: Diseño de "Se Busca" (Wanted Poster).
- **Detalles**: Clavo oxidado (CSS), Sello de lacre para proyectos "Featured".

## Estilizado
- **Fuentes**: MedievalSharp (Títulos) y Cinzel (Cuerpo).
- **Colores**: Dark Wood (#1a0b05), Gold (#c0a062), Parchment (#f0e6d2).
- **Global**: Cursor personalizado (Guantelete).
