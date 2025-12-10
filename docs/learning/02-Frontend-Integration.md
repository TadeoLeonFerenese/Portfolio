# Lección 02: Consumiendo API con React Clean Architecture

**Sensei Tanke dice:** "No mezcles la presentación con los datos. Los componentes piden, los hooks sirven, la API transporta."

## 1. axios Instance (`@lib/axios`)
Configuramos `axios` una sola vez con `baseURL`.
- **Ventaja**: Si cambia la URL del backend, solo cambias el `.env`.
- `VITE_API_URL` se inyecta en tiempo de compilación.

## 2. Feature-Based Logic (`@features/showcase`)
- **`api/index.js`**: Funciones puras que retornan promesas. `fetchProjects()`.
- **`hooks/useProjects.js`**: El "cerebro" reactivo. Gestiona el ciclo de vida de los datos (`loading`, `error`, `data`).

## 3. Uso en Componentes
El componente visual (ej: `ProjectGrid`) solo hará:
```javascript
const { projects, loading } = useProjects();
if (loading) return <Spinner />;
return projects.map(...)
```
¡Limpio, testearlo es trivial!

## Verificación
- **Frontend App**: [http://localhost:5173](http://localhost:5173)
- **React Hook Test**: Revisa que la consola del navegador no tenga errores de CORS.
