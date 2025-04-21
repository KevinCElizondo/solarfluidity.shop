#!/bin/bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

echo "Actualizando archivos del proyecto..."

# Actualizar Dockerfile
if [ -f "$PROJECT_ROOT/Dockerfile.new" ]; then
  mv "$PROJECT_ROOT/Dockerfile.new" "$PROJECT_ROOT/Dockerfile"
  echo "✅ Dockerfile actualizado"
fi

# Actualizar docker-compose.yml
if [ -f "$PROJECT_ROOT/docker-compose.yml.new" ]; then
  mv "$PROJECT_ROOT/docker-compose.yml.new" "$PROJECT_ROOT/docker-compose.yml"
  echo "✅ docker-compose.yml actualizado"
fi

# Actualizar página principal
if [ -f "$PROJECT_ROOT/src/app/page.tsx.new" ]; then
  mv "$PROJECT_ROOT/src/app/page.tsx.new" "$PROJECT_ROOT/src/app/page.tsx"
  echo "✅ Página principal actualizada"
fi

# Actualizar página de detalle de producto
if [ -f "$PROJECT_ROOT/src/app/productos/[slug]/page.tsx.new" ]; then
  mv "$PROJECT_ROOT/src/app/productos/[slug]/page.tsx.new" "$PROJECT_ROOT/src/app/productos/[slug]/page.tsx"
  echo "✅ Página de detalle de producto actualizada"
fi

# Dar permisos de ejecución a los scripts
chmod +x "$PROJECT_ROOT/api/bin/run-scraper.sh"
chmod +x "$PROJECT_ROOT/api/entrypoint-scraper.sh"
chmod +x "$PROJECT_ROOT/api/entrypoint-scheduler.sh"
echo "✅ Permisos de ejecución actualizados"

echo "Actualización completada con éxito. El proyecto está listo para ser desplegado."
