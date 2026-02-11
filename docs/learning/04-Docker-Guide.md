# Lección 04: Maestría en Contenedores (Docker) 🐳

**Sensei Tanke dice:** "Hasta ahora tu código vive en tu máquina. Para que viva eternamente en cualquier servidor, debe convertirse en un Contenedor."

## 1. El Concepto Fundamental: "Shipping" 📦
Imagina que quieres enviar tu habitación entera a otra casa.
- **Sin Docker:** Tienes que desmontar todo, llevarlo cajas, y rezar para que en la otra casa las ventanas tengan el mismo tamaño (mismas versiones de PHP, Node, librerías).
- **Con Docker:** Metes tu habitación entera en un Contenedor Indestructible. Lo envías. En la otra casa, simplemente "abres" el contenedor y tu habitación aparece EXACTAMENTE igual.

## 2. Los Pergaminos (Archivos Clave)

### A. The Recipe (`Dockerfile`) 📜
Es la receta paso a paso para crear tu entorno.
> *"Toma una base de Linux (Alpine). Instala PHP 8.4. Instala extensiones BCMath. Copia mi código. Instala dependencias con Composer."*

### B. The Image (La Foto) 📸
Cuando ejecutas el `Dockerfile`, se crea una **Imagen**. Es una copia estática y congelada de tu app.
- Es inmutable (no se cambia).
- Si necesitas cambios, creas una nueva imagen.

### C. The Container (La Vida) 🏃
Cuando arrancas una imagen, nace un **Contenedor**.
- Es la instancia viva.
- Puedes tener 10 contenedores corriendo la misma imagen (Escalabilidad Horizontal).

### D. The Architect (`docker-compose.yml`) 🏗️
Tu app no vive sola. Necesita:
1.  **App** (Laravel API)
2.  **Base de Datos** (MySQL/PostgreSQL)
3.  **Cache/Queue** (Redis)
4.  **Web Server** (Nginx)

El `docker-compose.yml` es el plano arquitectónico que dice: *"Levanta estos 4 servicios y conéctalos entre sí en una red privada"*.

---

## 3. Nuestra Estrategia Actual (Backend Only) 🛡️

Hemos creado una fortaleza para la API:
1.  **Multi-Stage Build**: Usamos una etapa para compilar (Builder) y otra super ligera para producción (FPM).
2.  **Orquestación**:
    -   `app`: Laravel API.
    -   `db`: MySQL (Puerto externo 3307 para no chocar con tu local).
    -   `redis`: Cache ultra-rápido.
    -   `web`: Nginx proxy.

---

## 4. Estrategia Futura: The Client (Frontend) 🎨

Cuando decidas llevar el Frontend (`client/`) a Docker, usaremos una estrategia similar:

### El Plan de Batalla
1.  **Dockerfile en `client/`**:
    -   **Stage 1 (Node Builder)**: Copia `package.json`, instala dependencias (`npm install`) y genera el `dist/` (`npm run build`).
    -   **Stage 2 (Nginx Server)**: Toma SOLO la carpeta `dist/` estática y la sirve con Nginx.
    
    > *Por qué:* React no necesita Node en producción. Solo son archivos HTML/JS/CSS estáticos. Nginx es 1000 veces más rápido sirviendo eso que un servidor de Node.

2.  **Integración en Compose**:
    -   Agregaríamos un servicio `client` al `docker-compose.yml`.
    -   El navegador del usuario haría peticiones al `client` (puerto 80) y este hablaría con la `api` (puerto 8000).

*Estado: [PENDIENTE] - A la espera de finalizar la última página del sitio.*
