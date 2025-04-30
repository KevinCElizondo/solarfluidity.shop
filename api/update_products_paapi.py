#!/usr/bin/env python3
"""
Script para actualizar productos solares usando la API de Publicidad de Productos de Amazon (PAAPI 5.0)
Este script obtiene datos actualizados de productos de Amazon y los guarda en archivos JSON
que pueden ser importados por la aplicación web.
"""

import os
import json
import logging
import argparse
from typing import List, Dict, Any
from pathlib import Path
from amazon_paapi import AmazonProductAPI

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("product_updater.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("ProductUpdater")

def load_asins_from_file(file_path: str) -> List[Dict[str, List[str]]]:
    """Carga ASINs desde un archivo, agrupados por categoría"""
    try:
        with open(file_path, 'r') as f:
            lines = f.readlines()
        
        categories = {}
        current_category = "otros"
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            if line.startswith('#'):
                # Obtener nombre de categoría del comentario
                category_name = line[1:].strip().lower()
                if category_name:
                    if category_name == "paneles solares":
                        current_category = "paneles"
                    elif category_name == "baterías":
                        current_category = "baterias"
                    elif category_name == "kits solares":
                        current_category = "kits"
                    else:
                        current_category = category_name
                    
                    if current_category not in categories:
                        categories[current_category] = []
                continue
            
            # Es un ASIN, agregarlo a la categoría actual
            categories.setdefault(current_category, []).append(line)
        
        # Convertir a la estructura esperada
        result = []
        for category, asins in categories.items():
            result.append({"category": category, "asins": asins})
        
        return result
    
    except Exception as e:
        logger.error(f"Error al cargar ASINs: {str(e)}")
        return []

def create_product_json_for_webapp(product_data: Dict[str, Any]) -> Dict[str, Any]:
    """Transforma los datos del producto al formato requerido por la aplicación web"""
    return {
        "id": product_data["asin"],
        "name": product_data["name"],
        "description": " ".join(product_data.get("features", [])),
        "price": product_data["price"],
        "currency": product_data["currency"],
        "images": product_data["images"],
        "url": product_data["affiliate_url"],
        "asin": product_data["asin"],
        "rating": product_data.get("rating", 0),
        "reviews": product_data.get("reviews", 0),
        "categoryId": product_data["categoryId"],
        "featured": False,  # Por defecto no destacado
        "specs": extract_specs_from_features(product_data.get("features", []))
    }

def extract_specs_from_features(features: List[str]) -> Dict[str, str]:
    """Extrae especificaciones técnicas a partir de las características del producto"""
    specs = {}
    
    # Mapeo de palabras clave a nombres de especificaciones
    keywords_map = {
        "watts": "Potencia",
        "volt": "Voltaje",
        "capacidad": "Capacidad",
        "capacit": "Capacidad",
        "dimension": "Dimensiones",
        "weight": "Peso",
        "eficiencia": "Eficiencia",
        "warranty": "Garantía",
        "garantía": "Garantía",
        "material": "Material",
        "certificate": "Certificados",
        "certificado": "Certificados"
    }
    
    for feature in features:
        # Buscar palabras clave en cada característica
        for keyword, spec_name in keywords_map.items():
            if keyword.lower() in feature.lower():
                if spec_name not in specs:
                    specs[spec_name] = feature
                break
    
    return specs

def save_products_to_webapp_format(products: List[Dict[str, Any]], output_dir: str):
    """Guarda los productos en el formato requerido por la aplicación web"""
    # Crear directorio si no existe
    web_data_dir = os.path.join(output_dir, "web")
    os.makedirs(web_data_dir, exist_ok=True)
    
    # Agrupar productos por categoría
    categories = {}
    for product in products:
        category_id = product["categoryId"]
        if category_id not in categories:
            categories[category_id] = []
        
        # Convertir al formato de la aplicación web
        web_product = create_product_json_for_webapp(product)
        categories[category_id].append(web_product)
    
    # Guardar cada categoría en un archivo separado
    for category_id, category_products in categories.items():
        file_path = os.path.join(web_data_dir, f"{category_id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(category_products, f, ensure_ascii=False, indent=2)
        logger.info(f"Guardados {len(category_products)} productos en {file_path}")
    
    # Guardar todos los productos en un archivo
    all_products = []
    for category_products in categories.values():
        all_products.extend(category_products)
    
    all_products_path = os.path.join(web_data_dir, "products.json")
    with open(all_products_path, 'w', encoding='utf-8') as f:
        json.dump(all_products, f, ensure_ascii=False, indent=2)
    logger.info(f"Guardados {len(all_products)} productos en {all_products_path}")
    
    return all_products

def copy_to_public_dir(web_data_dir: str, public_dir: str):
    """Copia los archivos JSON al directorio public de la aplicación web"""
    import shutil
    
    # Crear directorio de productos en public si no existe
    products_dir = os.path.join(public_dir, "products")
    os.makedirs(products_dir, exist_ok=True)
    
    # Copiar cada archivo JSON de datos al directorio public
    for filename in os.listdir(web_data_dir):
        if filename.endswith(".json"):
            src_path = os.path.join(web_data_dir, filename)
            dst_path = os.path.join(products_dir, filename)
            shutil.copy2(src_path, dst_path)
            logger.info(f"Copiado {filename} a {dst_path}")

def main():
    """Función principal del script"""
    parser = argparse.ArgumentParser(description='Actualizar productos desde Amazon PAAPI')
    parser.add_argument('--asins-file', default='solar_products_asins.txt', help='Archivo con ASINs de productos')
    parser.add_argument('--output-dir', default='data', help='Directorio para guardar datos')
    parser.add_argument('--max-per-request', type=int, default=10, help='Máximo de ASINs por solicitud')
    parser.add_argument('--copy-to-public', action='store_true', help='Copiar datos al directorio public')
    
    args = parser.parse_args()
    
    # Verificar si existen las variables de entorno necesarias
    partner_tag = os.environ.get("AMAZON_PARTNER_TAG")
    access_key = os.environ.get("AMAZON_ACCESS_KEY")
    secret_key = os.environ.get("AMAZON_SECRET_KEY")
    
    if not partner_tag or not access_key or not secret_key:
        logger.error("Error: Faltan variables de entorno. Debes configurar AMAZON_PARTNER_TAG, AMAZON_ACCESS_KEY y AMAZON_SECRET_KEY")
        print("\nDebe configurar las siguientes variables de entorno antes de ejecutar este script:")
        print("  export AMAZON_PARTNER_TAG='tu-tag-de-afiliado'")
        print("  export AMAZON_ACCESS_KEY='tu-clave-de-acceso'")
        print("  export AMAZON_SECRET_KEY='tu-clave-secreta'")
        print("\nO crear un archivo .env con estas variables y cargarlo antes de ejecutar el script.")
        return 1
    
    # Crear instancia de la API
    api = AmazonProductAPI(partner_tag, access_key, secret_key)
    
    # Asegurar que las rutas son absolutas
    base_dir = Path(__file__).parent.absolute()
    asins_file = os.path.join(base_dir, args.asins_file)
    output_dir = os.path.join(base_dir, args.output_dir)
    
    # Procesar archivo de ASINs
    logger.info(f"Procesando ASINs desde {asins_file}")
    products = api.process_asins_file(asins_file, args.max_per_request)
    
    if products:
        # Convertir y guardar en formato para la aplicación web
        logger.info("Convirtiendo productos al formato de la aplicación web")
        web_products = save_products_to_webapp_format(products, output_dir)
        
        # Copiar al directorio public si se solicita
        if args.copy_to_public:
            web_data_dir = os.path.join(output_dir, "web")
            public_dir = os.path.join(base_dir, "..", "public")
            logger.info(f"Copiando datos al directorio public: {public_dir}")
            copy_to_public_dir(web_data_dir, public_dir)
        
        logger.info(f"Procesamiento completado. Se obtuvieron {len(products)} productos.")
        return 0
    else:
        logger.error("No se pudieron obtener productos. Verifica las credenciales y la conexión.")
        return 1

if __name__ == "__main__":
    exit(main())
