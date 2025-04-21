#!/bin/bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

# Crear el directorio data si no existe
mkdir -p "$PROJECT_ROOT/api/data"

echo "Iniciando el scraper de productos de Amazon..."

# Ejecutar el servicio de scraper en Docker
docker-compose -f "$PROJECT_ROOT/docker-compose.yml.new" --profile scraper-only up scraper

echo "Proceso de scraping completado."
