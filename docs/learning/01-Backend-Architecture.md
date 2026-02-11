# Lección 01: Estructura del Backend (Laravel Clean Arch)

**Sensei Tanke dice:** "Laravel es magia, pero la magia sin control es caos. Organizaremos nuestro poder."

## 1. API Versioning (`/Api/V1`)
Creamos `/app/Http/Controllers/Api/V1`.
- **Por qué**: Las APIs evolucionan. Cuando quieras cambiar drásticamente la estructura de respuesta sin romper apps móviles o clientes antiguos, crearás `V2`. `V1` se mantiene estable.

## 2. Services Layer (`/Services`)
- **Problema**: Poner lógica de negocio en el Controller (ej: "Crear factura y enviar email").
- **Solución**: El Controller solo valida input y llama al Service.
  - `ProjectController` -> `ProjectService->getAllProjects(...)`
  - Esto facilita testear la lógica sin simular peticiones HTTP.

## 3. FormRequests & Resources (`/Requests` & `/Resources`)
- **Validate First (`FormRequest`)**: `StoreContactRequest` valida los datos antes de que lleguen al controlador.
- **Transform Output (`JsonResource`)**: `ProjectResource` transforma los modelos en JSON limpio, ocultando campos sensibles o formateando fechas.

## Próximos Pasos
- Migrar lógica restante a Services si es necesario.
- Implementar más FormRequests para validaciones complejas.

## Verificación
- **Endpoint**: [http://api.test/api/v1/projects](http://api.test/api/v1/projects)
- **Comando Seeder**: `php artisan db:seed --class=ProjectSeeder`
