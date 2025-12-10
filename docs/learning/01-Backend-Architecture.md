# Lección 01: Estructura del Backend (Laravel Clean Arch)

**Sensei Tanke dice:** "Laravel es magia, pero la magia sin control es caos. Organizaremos nuestro poder."

## 1. API Versioning (`/Api/V1`)
Creamos `/app/Http/Controllers/Api/V1`.
- **Por qué**: Las APIs evolucionan. Cuando quieras cambiar drásticamente la estructura de respuesta sin romper apps móviles o clientes antiguos, crearás `V2`. `V1` se mantiene estable.

## 2. Services Layer (`/Services`)
- **Problema**: Poner lógica de negocio en el Controller (ej: "Crear factura y enviar email").
- **Solución**: El Controller solo valida input y llama al Service.
  - `ProjectController` -> `ProjectService->createProject(...)`
  - Esto facilita testear la lógica sin simular peticiones HTTP.

## 3. Enums (`/Enums`)
- **Uso**: Tipado fuerte para estados. Ej: `ProjectStatus::PUBLISHED`.
- Evita "magic strings" como `'published'` dispersos por el código.

## Próximos Pasos
- Configurar `routes/api.php` para apuntar a los nuevos controladores V1.
- Crear nuestro primer modelo `Project` (para el Portfolio).
