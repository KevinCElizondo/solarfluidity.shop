#!/usr/bin/env python3
"""
Script para actualizar productos con información de Amazon y enlaces de afiliación.
"""
import os
import json
import argparse
from typing import List, Dict, Any
from amazon_product_scraper import AmazonProductScraper
from amazon_affiliate import AmazonAffiliateManager

# Configuración por defecto
DEFAULT_AFFILIATE_TAG = "solarfluidity-20"
DEFAULT_OUTPUT_DIR = "../src/data"

def parse_arguments():
    """Parsea los argumentos de la línea de comandos"""
    parser = argparse.ArgumentParser(description="Actualiza productos con información de Amazon y enlaces de afiliación")
    parser.add_argument("--affiliate-tag", default=DEFAULT_AFFILIATE_TAG, help="Tag de afiliado de Amazon")
    parser.add_argument("--output-dir", default=DEFAULT_OUTPUT_DIR, help="Directorio donde se guardarán los archivos de productos")
    parser.add_argument("--asins", nargs="+", help="Lista de ASINs a procesar")
    parser.add_argument("--asins-file", help="Archivo con lista de ASINs (uno por línea)")
    parser.add_argument("--data-dir", default="data", help="Directorio donde se guardarán los datos extraídos")
    parser.add_argument("--use-selenium", action="store_true", help="Usar Selenium para el scraping")
    parser.add_argument("--products-json", help="Usar un archivo JSON con productos ya extraídos")
    return parser.parse_args()

def read_asins_from_file(file_path: str) -> List[str]:
    """Lee ASINs desde un archivo de texto (uno por línea)"""
    with open(file_path, 'r') as f:
        return [line.strip() for line in f if line.strip()]

def read_products_from_json(file_path: str) -> List[Dict[str, Any]]:
    """Lee productos desde un archivo JSON"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    """Función principal del script"""
    args = parse_arguments()
    
    # Obtener ASINs
    asins = []
    if args.asins:
        asins = args.asins
    elif args.asins_file:
        asins = read_asins_from_file(args.asins_file)
    
    # Crear directorio de datos si no existe
    os.makedirs(args.data_dir, exist_ok=True)
    
    # Procesar productos
    if args.products_json:
        # Usar productos ya extraídos
        products = read_products_from_json(args.products_json)
        print(f"Leídos {len(products)} productos del archivo {args.products_json}")
    elif asins:
        # Extraer productos de Amazon
        scraper = AmazonProductScraper(output_dir=args.data_dir, use_selenium=args.use_selenium)
        try:
            products = scraper.extract_multiple_products(asins)
            print(f"Extraídos {len(products)} productos de Amazon")
        finally:
            scraper.close()
    else:
        print("Error: Debe proporcionar una lista de ASINs o un archivo JSON con productos")
        return
    
    # Actualizar productos con enlaces de afiliación
    if products:
        affiliate_manager = AmazonAffiliateManager(
            affiliate_tag=args.affiliate_tag,
            output_dir=args.output_dir
        )
        affiliate_manager.update_products_file(products)
        print(f"Actualizado archivo de productos con {len(products)} productos")

if __name__ == "__main__":
    main()
