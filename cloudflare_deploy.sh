#!/bin/bash

# Script radical para resolver el problema de Cloudflare
echo "=== Iniciando despliegue radical ==="

# 1. Eliminar completamente el archivo problemático
find . -name "products.ts" -not -path "./src/lib/*" -exec rm -f {} \;
echo "Archivos products.ts problemáticos eliminados"

# 2. Crear un archivo vacío en su lugar para evitar errores de importación
mkdir -p data
echo "// Este archivo está intencionalmente vacío para evitar errores" > data/products.ts
echo "export * from '../src/lib/product-data';" >> data/products.ts
echo "Creado archivo placeholder"

# 3. Ejecutar el build
echo "Iniciando build de Next.js..."
npm run build:next

echo "=== Proceso completado ==="
