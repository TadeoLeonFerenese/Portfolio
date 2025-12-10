# Lección 00: Inicialización y Arquitectura

**Sensei Tanke dice:** "Una casa sin planos se derrumba. Un software sin arquitectura se convierte en espagueti."

## 1. Clean Architecture en Frontend
Hemos estructurado `/src` separando responsabilidades:
- **@features**: Aquí vive la lógica de negocio. Ej: `Showcase` tendrá sus propios componentes y estado.
- **@components/ui**: Componentes "tontos" (botones, cards) que solo reciben props y renderizan. Reutilizables.
- **@lib/utils**: Herramientas agnósticas al negocio (formateadores de fecha, cliente HTTP).

## 2. Vite Alias
En lugar de `../../../components/Button`, usamos `@components/Button`.
- **Por qué**: Facilita la refactorización. Si mueves un archivo, el import absoluto no cambia (o es más fácil de rastrear).

## 3. CSS Strategy
Usamos **CSS Variables** para definir el "Tema" (Dark/Diablo).
- `variables.css`: La fuente de la verdad.
- `typography.css`: Reglas globales de texto.
- `main.css`: Orquestador.

- Crear componente `Hero` en `@features/home` (o `@features/showcase`).

## 4. Setup en Nueva Máquina (Clone)
Si clonas este repo en otra PC, sigue estos pasos:

### Backend (/api)
```bash
cd api
composer install
cp .env.example .env
php artisan key:generate
# Configura tu base de datos en .env (DB_DATABASE, etc)
php artisan migrate
php artisan db:seed --class=ProjectSeeder
php artisan serve
```

### Frontend (/client)
```bash
cd client
npm install
# Crea archivo .env con: VITE_API_URL=http://tu-url-api/api
npm run dev
```
