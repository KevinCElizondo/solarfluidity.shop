#!/bin/bash

# Script para resolver el problema de compilación en Cloudflare

# Eliminar el archivo problemático si existe
if [ -f "data/products.ts" ]; then
  echo "Eliminando archivo problemático data/products.ts"
  rm -f data/products.ts
fi

# Ejecutar el build de Next.js
npm run build:next
