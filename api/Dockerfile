# ==============================================================================
# Stage 1: The Builder (Compilación y Dependencias) 🏗️
# ==============================================================================
FROM php:8.4-cli as builder

# 1. Instalar utilidades del sistema necesarias para compilar
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libonig-dev \
    libxml2-dev

# 2. Instalar extensiones de PHP requeridas por Laravel
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    pcntl \
    bcmath \
    base64 \
    zip || echo "Some extensions might be built-in or need specific flags in 8.4"

# 3. Instalar Composer (El gestor de paquetes)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. Configurar directorio de trabajo
WORKDIR /app

# 5. Copiar archivos de dependencias primero (Para aprovechar caché de Docker)
COPY composer.json composer.lock ./

# 6. Instalar dependencias de producción (Sin dev-dependencies para ahorrar espacio)
# Usamos --ignore-platform-reqs como seguridad adicional si hay alguna discrepancia menor
RUN composer install --no-dev --optimize-autoloader --no-scripts

# ==============================================================================
# Stage 2: The Production Image (La Nave Nodriza) 🚀
# ==============================================================================
FROM php:8.4-fpm

# 1. Instalar extensiones de runtime en la imagen final
# (Nota: FPM necesita sus propias extensiones, no hereda del builder)
RUN apt-get update && apt-get install -y \
    libzip-dev \
    libonig-dev \
    && docker-php-ext-install pdo_mysql mbstring bcmath opcache zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 2. Configurar directorio de trabajo
WORKDIR /var/www

# 3. Copiar el código del proyecto
COPY . .

# 4. Copiar la carpeta 'vendor' (dependencias) desde la etapa Builder
COPY --from=builder /app/vendor ./vendor

# 5. Configurar permisos (Crucial para que Laravel pueda escribir en logs/cache)
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# 6. Exponer puerto (FPM corre por defecto en 9000)
EXPOSE 9000

# 7. Comando de inicio
CMD ["php-fpm"]
