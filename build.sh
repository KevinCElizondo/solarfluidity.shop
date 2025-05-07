#!/bin/bash

# Script mejorado para resolver el problema de compilación en Cloudflare

# Mostrar el directorio actual
echo "Estamos en el directorio: $(pwd)"

# Forzar eliminación de cualquier versión del archivo problemático
echo "Eliminando TODOS los archivos products.ts en data/ ..."
find . -path "*/data/products.ts" -type f -delete

# Crear directorio data vacío si no existe
mkdir -p data

# Crear un archivo .gitkeep en data/ para mantener el directorio en Git
touch data/.gitkeep

# Asegurarnos de que estamos usando el package.json correcto
echo "Contenido de package.json:"
cat package.json

# Ejecutar el build de Next.js
echo "Iniciando el build de Next.js..."
npm run build:next
