# ==============================================================================
# Stage 1: The Builder (Compilación) 🏗️
# ==============================================================================
FROM node:20-alpine as builder

# 1. Configurar directorio de trabajo
WORKDIR /app

# 2. Copiar archivos de dependencias
COPY package.json package-lock.json ./

# 3. Instalar dependencias (Clean Install para ser exactos)
RUN npm ci

# 4. Copiar el código fuente
COPY . .

# 5. Construir la aplicación para producción (Genera carpeta /dist)
RUN npm run build

# ==============================================================================
# Stage 2: The Web Server (Servidor Estático) 🚀
# ==============================================================================
FROM nginx:alpine

# 1. Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2. Copiar los archivos construidos desde el Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# 3. Exponer el puerto 80 (estándar web)
EXPOSE 80

# 4. Arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
