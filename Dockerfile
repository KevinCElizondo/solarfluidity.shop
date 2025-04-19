# Dockerfile para SolarFluidity.shop
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

# Segunda etapa: Python Backend
FROM python:3.10-slim AS backend

WORKDIR /app/api

# Instalar dependencias para Python
COPY api/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar archivos de la API
COPY api/ .

# Etapa final: Combinación de frontend y backend
FROM node:18-alpine

# Instalar Python
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

# Copiar frontend construido
COPY --from=frontend /app/node_modules ./node_modules
COPY --from=frontend /app/.next ./.next
COPY --from=frontend /app/public ./public
COPY --from=frontend /app/package*.json ./

# Copiar backend
COPY --from=backend /app/api ./api

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
