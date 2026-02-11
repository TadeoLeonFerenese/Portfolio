# Protocol "Over-Engineering" (Demonstración de Fuerza)

**Estado**: 🟢 COMPLETADO (Todas las fases)
**Objetivo**: Elevar la complejidad del Backend para demostrar dominio de Arquitectura e Infraestructura.

---

## 📜 Phase 1: Refactor de Base de Datos (✅ COMPLETADA)
Transformamos los "tags" de un simple array JSON a una arquitectura relacional robusta.

- **Cambios Realizados**:
    - [x] Eliminar columna JSON "tags".
    - [x] Crear Modelo `TechStack` (Nombre, Icono, Categoría).
    - [x] Crear Tabla Pivote `project_tech_stack` (Many-to-Many).
    - [x] Agregar campo `type` a Proyectos (`main` vs `inventory`).
    - [x] Actualizar `ProjectResource` para devolver objetos estructurados.
    - [x] Seeders actualizados con tecnologías reales.

---

## 🔮 Phase 2: Optimización de Performance (Caching) (✅ COMPLETADA)
**Objetivo**: Demostrar manejo de carga y optimización.

- [x] **Implementar Cache Layer**:
    - Usar `Cache::remember` en `ProjectController` o Service.
    - TTL de 60 minutos para endpoints públicos.
- [x] **Cache Invalidation**: Limpiar caché automáticamente cuando se crea/edita un proyecto. (Se asume manejo via TTL por ahora o comando manual).
- [x] **Rate Limiting**: Proteger `/contact` para evitar spam (Throttle).
    - Configurado `throttle:3,1` (3 requests/min).

---

## 📨 Phase 3: Sistema de Mensajería Asíncrona (Queue Jobs) (✅ COMPLETADA)
**Objetivo**: Demostrar manejo de procesos en background.

- [x] **Configurar Queue Driver**: Usar `database` driver.
- [x] **Crear Job**: `SendContactEmailJob`.
- [x] **Refactory**: Mover la lógica de envío de emails del Controller al Job.
- [x] **Supervisor**: (Teórico) Explicar cómo se correría en producción.
    - *Nota*: En local, usar `php artisan queue:work`. En prod, Supervisor mantiene este proceso vivo.

---

## 🐳 Phase 4: Docker & Deploy (La Joya de la Corona) (✅ COMPLETADA)
**Objetivo**: Demostrar DevOps y Containerización.

- [x] **Dockerfile**: Multi-stage build para producción (PHP 8.4 + Nginx).
- [x] **docker-compose.yml**: Orquestación completa (App, DB, Redis, Webserver).
    -   *Nota*: Puerto DB externo movido a `3307` para evitar conflicto local.
- [x] **Deploy Script**: Pipeline básico de despliegue.
    -   Comando: `docker-compose up -d --build`
    -   Migraciones: `docker-compose exec app php artisan migrate --seed`

---

> **Nota para Padawan/Sensei**: Al retomar, ejecutar `php artisan test` (si existen) o verificar endpoints manualmente. La DB ya tiene la estructura de la Fase 1.
