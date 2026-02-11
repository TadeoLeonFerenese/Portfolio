# Lección 02: Consumiendo API con React Clean Architecture

**Sensei Tanke dice:** "No mezcles la presentación con los datos. Los componentes piden, los hooks sirven, la API transporta."

## 1. axios Instance (`@lib/axios`)
Configuramos `axios` una sola vez con `baseURL`.
- **Ventaja**: Si cambia la URL del backend, solo cambias el `.env`.
- `VITE_API_URL` se inyecta en tiempo de compilación.

## 2. Feature-Based Logic (`@features`)
- **Estructura Modular**: Cada funcionalidad (`showcase`, `contact`, `lobby`, `profile`) vive aislada.
- **`api/index.js`**: Funciones puras que retornan promesas. `fetchProjects()`, `submitContact()`.
- **`hooks/useFeature.js`**: El "cerebro" reactivo (ej: `useProjects`, `useContact`).

## 3. Componentes y Layouts
- **Components**: Componentes visuales puros (ej: `ProjectGrid`, `ContactForm`).
- **Layouts**: Estructuras de página específicas por feature.

Ejemplo en `ProjectGrid`:
```javascript
const { projects, loading } = useProjects();
if (loading) return <Spinner />;
return projects.map(...)
```

## Verificación
- **Features Activas**:
  - `showcase`: Muestra proyectos.
  - `contact`: Formulario con `MagicForm`.
  - `lobby`: Pantalla principal estilo Hearthstone.
  - `profile`: Perfil de usuario.
- **Frontend App**: [http://localhost:5173](http://localhost:5173)
