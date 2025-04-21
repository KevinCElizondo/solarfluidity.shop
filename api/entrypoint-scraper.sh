#!/bin/bash
set -e

echo "Iniciando servicio de scraping de Amazon..."

# Configurar el tag de afiliado
AFFILIATE_TAG=${AMAZON_AFFILIATE_TAG:-"solarfluidity-20"}
echo "Usando tag de afiliado: $AFFILIATE_TAG"

# Verificar si se proporcionaron ASINs como argumentos
if [ $# -gt 0 ]; then
    echo "Procesando ASINs proporcionados: $@"
    python3 /app/api/update_products.py --affiliate-tag $AFFILIATE_TAG --use-selenium --asins $@
else
    # Verificar si existe un archivo de ASINs
    if [ -f "/app/api/solar_products_asins.txt" ]; then
        echo "Procesando ASINs desde archivo solar_products_asins.txt"
        python3 /app/api/update_products.py --affiliate-tag $AFFILIATE_TAG --use-selenium --asins-file /app/api/solar_products_asins.txt
    else
        echo "ERROR: No se proporcionaron ASINs ni existe un archivo solar_products_asins.txt"
        exit 1
    fi
fi

echo "Proceso de scraping completado."
