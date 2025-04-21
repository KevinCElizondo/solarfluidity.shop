#!/bin/bash
set -e

echo "Iniciando servicio de programación de scraping..."

# Configurar el tag de afiliado
AFFILIATE_TAG=${AMAZON_AFFILIATE_TAG:-"solarfluidity-20"}
echo "Usando tag de afiliado: $AFFILIATE_TAG"

# Configurar intervalo de programación (en segundos)
INTERVAL=${SCHEDULE_INTERVAL:-86400}  # Por defecto 24 horas
echo "Intervalo de actualización: $INTERVAL segundos"

# Función para ejecutar la actualización
run_update() {
    echo "$(date): Iniciando actualización de productos..."
    
    # Verificar si existe un archivo de ASINs
    if [ -f "/app/api/solar_products_asins.txt" ]; then
        echo "Procesando ASINs desde archivo solar_products_asins.txt"
        python3 /app/api/update_products.py --affiliate-tag $AFFILIATE_TAG --use-selenium --asins-file /app/api/solar_products_asins.txt
    else
        echo "ERROR: No existe un archivo solar_products_asins.txt"
        return 1
    fi
    
    echo "$(date): Actualización de productos completada."
}

# Ejecutar inmediatamente la primera actualización
run_update

# Bucle continuo con el intervalo especificado
while true; do
    echo "Esperando $INTERVAL segundos hasta la próxima actualización..."
    sleep $INTERVAL
    run_update
done
