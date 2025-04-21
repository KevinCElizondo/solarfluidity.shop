# Dockerfile para SolarFluidity.shop - Afiliación Amazon
FROM node:18-alpine AS frontend

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de npm
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Segunda etapa: Python Backend con herramientas de scraping
FROM python:3.10-slim AS backend

# Instalar dependencias necesarias para Selenium
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    unzip \
    curl \
    chromium \
    chromium-driver

WORKDIR /app/api

# Instalar dependencias para Python
COPY api/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar archivos de la API
COPY api/ .

# Configurar ChromeDriver para Selenium
ENV CHROMEDRIVER_VERSION=114.0.5735.90
ENV CHROME_BIN=/usr/bin/chromium

# Etapa final: Combinación de frontend y backend
FROM node:18-alpine

# Instalar Python y dependencias necesarias para Chrome/Selenium
RUN apk add --no-cache python3 py3-pip chromium chromium-chromedriver \
    ttf-freefont udev xvfb

WORKDIR /app

# Configurar variables de entorno para Selenium
ENV PYTHONUNBUFFERED=1
ENV DISPLAY=:99
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/
ENV CHROMEDRIVER_PATH=/usr/bin/chromedriver

# Copiar frontend construido
COPY --from=frontend /app/node_modules ./node_modules
COPY --from=frontend /app/.next ./.next
COPY --from=frontend /app/public ./public
COPY --from=frontend /app/package*.json ./

# Copiar backend
COPY --from=backend /app/api ./api

# Crear directorios para datos
RUN mkdir -p ./api/data ./api/logs

# Instalar dependencias de Python
COPY api/requirements.txt ./api/
RUN pip3 install --no-cache-dir -r api/requirements.txt

# Agregar script de inicio
COPY start.sh ./
RUN chmod +x start.sh

# Exponer puertos para Next.js y FastAPI
EXPOSE 3000 8000

# Comando para iniciar ambos servicios
CMD ["./start.sh"]
