import os
import json
import time
import logging
import urllib.parse
import requests
from typing import Dict, List, Any, Optional
import hmac
import hashlib
import base64
from datetime import datetime

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("amazon_paapi.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("AmazonPAAPI")

class AmazonProductAPI:
    """Clase para interactuar con la API de Publicidad de Productos de Amazon (PAAPI 5.0)"""
    
    def __init__(self, partner_tag: str, access_key: str, secret_key: str, marketplace: str = "www.amazon.com"):
        self.partner_tag = partner_tag
        self.access_key = access_key
        self.secret_key = secret_key
        self.marketplace = marketplace
        self.host = "webservices.amazon.com"
        self.region = "us-east-1"
        self.uri = "/paapi5/getitems"
        self.service = "ProductAdvertisingAPI"
        
        # Crear directorio de datos si no existe
        os.makedirs("data", exist_ok=True)
    
    def _get_request_headers(self, payload: str) -> Dict[str, str]:
        """Genera los encabezados requeridos para la solicitud a PAAPI, incluida la firma"""
        # Fecha actual en formato ISO 8601
        amz_date = datetime.utcnow().strftime('%Y%m%dT%H%M%SZ')
        date_stamp = datetime.utcnow().strftime('%Y%m%d')
        
        # Algoritmo de firma y headers
        algorithm = 'AWS4-HMAC-SHA256'
        signed_headers = 'content-encoding;content-type;host;x-amz-date;x-amz-target'
        
        # Tipo de contenido y codificación
        content_type = 'application/json; charset=utf-8'
        content_encoding = 'amz-1.0'
        amz_target = 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems'
        
        # Crear string canónico para firmar
        canonical_request = f"POST\n{self.uri}\n\ncontent-encoding:{content_encoding}\ncontent-type:{content_type}\nhost:{self.host}\nx-amz-date:{amz_date}\nx-amz-target:{amz_target}\n\n{signed_headers}\n{hashlib.sha256(payload.encode('utf-8')).hexdigest()}"
        
        # Crear string de firma
        credential_scope = f"{date_stamp}/{self.region}/{self.service}/aws4_request"
        string_to_sign = f"{algorithm}\n{amz_date}\n{credential_scope}\n{hashlib.sha256(canonical_request.encode('utf-8')).hexdigest()}"
        
        # Calcular firma con HMAC-SHA256
        k_date = hmac.new(f'AWS4{self.secret_key}'.encode('utf-8'), date_stamp.encode('utf-8'), hashlib.sha256).digest()
        k_region = hmac.new(k_date, self.region.encode('utf-8'), hashlib.sha256).digest()
        k_service = hmac.new(k_region, self.service.encode('utf-8'), hashlib.sha256).digest()
        k_signing = hmac.new(k_service, 'aws4_request'.encode('utf-8'), hashlib.sha256).digest()
        signature = hmac.new(k_signing, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()
        
        # Crear encabezado de autorización
        auth_header = f"{algorithm} Credential={self.access_key}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}"
        
        # Devolver encabezados completos
        return {
            'content-encoding': content_encoding,
            'content-type': content_type,
            'host': self.host,
            'x-amz-date': amz_date,
            'x-amz-target': amz_target,
            'Authorization': auth_header
        }
    
    def get_items(self, asins: List[str], resources: Optional[List[str]] = None) -> Optional[Dict[str, Any]]:
        """Obtiene información de productos por ASINs usando PAAPI 5.0"""
        if not resources:
            resources = [
                'ItemInfo.Title',
                'ItemInfo.Features',
                'ItemInfo.ProductInfo',
                'ItemInfo.ByLineInfo',
                'ItemInfo.ContentInfo',
                'ItemInfo.TechnicalInfo',
                'Offers.Listings.Price',
                'Images.Primary.Large',
                'Images.Variants.Large'
            ]
        
        # Configurar la solicitud
        url = f"https://{self.host}{self.uri}"
        
        # Crear el payload
        payload = {
            "ItemIds": asins,
            "Resources": resources,
            "PartnerTag": self.partner_tag,
            "PartnerType": "Associates",
            "Marketplace": self.marketplace
        }
        
        payload_json = json.dumps(payload)
        
        try:
            # Obtener los encabezados con la firma
            headers = self._get_request_headers(payload_json)
            
            # Realizar la solicitud POST
            response = requests.post(url, data=payload_json, headers=headers)
            
            # Verificar respuesta
            if response.status_code == 200:
                return response.json()
            else:
                logger.error(f"Error en solicitud: {response.status_code} - {response.text}")
                return None
        except Exception as e:
            logger.error(f"Error al obtener información de productos: {str(e)}")
            return None
    
    def extract_product_data(self, paapi_response: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extrae y formatea datos de productos desde la respuesta de PAAPI"""
        products = []
        
        if 'ItemsResult' not in paapi_response or 'Items' not in paapi_response['ItemsResult']:
            logger.error("Formato de respuesta inválido o no hay productos")
            return products
        
        for item in paapi_response['ItemsResult']['Items']:
            product_data = {
                "asin": item.get('ASIN', ''),
                "name": item.get('ItemInfo', {}).get('Title', {}).get('DisplayValue', ''),
                "url": item.get('DetailPageURL', ''),
                "affiliate_url": f"https://www.amazon.com/dp/{item.get('ASIN', '')}?tag={self.partner_tag}",
                "images": [],
                "features": [],
                "price": 0.0,
                "currency": "USD",
                "rating": 0.0,
                "reviews": 0,
                "categoryId": self._determine_category(item)
            }
            
            # Obtener precio
            if 'Offers' in item and 'Listings' in item['Offers'] and item['Offers']['Listings']:
                price_obj = item['Offers']['Listings'][0].get('Price', {})
                if 'Amount' in price_obj:
                    product_data["price"] = float(price_obj['Amount'])
                if 'Currency' in price_obj:
                    product_data["currency"] = price_obj['Currency']
            
            # Obtener características
            if 'ItemInfo' in item and 'Features' in item['ItemInfo'] and 'DisplayValues' in item['ItemInfo']['Features']:
                product_data["features"] = item['ItemInfo']['Features']['DisplayValues']
            
            # Obtener imágenes
            if 'Images' in item and 'Primary' in item['Images']:
                primary_image = item['Images']['Primary'].get('Large', {}).get('URL', '')
                if primary_image:
                    product_data["images"].append(primary_image)
            
            # Obtener imágenes variantes
            if 'Images' in item and 'Variants' in item['Images']:
                for variant in item['Images']['Variants']:
                    variant_url = variant.get('Large', {}).get('URL', '')
                    if variant_url and variant_url not in product_data["images"]:
                        product_data["images"].append(variant_url)
            
            products.append(product_data)
        
        return products
    
    def _determine_category(self, item: Dict[str, Any]) -> str:
        """Determina la categoría del producto basado en el título o características"""
        title = ""
        if 'ItemInfo' in item and 'Title' in item['ItemInfo']:
            title = item['ItemInfo']['Title'].get('DisplayValue', '').lower()
        
        features = []
        if 'ItemInfo' in item and 'Features' in item['ItemInfo'] and 'DisplayValues' in item['ItemInfo']['Features']:
            features = [f.lower() for f in item['ItemInfo']['Features']['DisplayValues']]
        
        # Palabras clave para categorías
        if any(keyword in title for keyword in ["panel", "solar panel", "photovoltaic"]):
            return "paneles"
        elif any(keyword in title for keyword in ["battery", "batería", "lithium", "storage"]):
            return "baterias"
        elif any(keyword in title for keyword in ["inverter", "inversor", "converter"]):
            return "inversores"
        elif any(keyword in title for keyword in ["kit", "system", "complete"]):
            return "kits"
        elif any(keyword in title for keyword in ["mount", "cable", "connector", "accessory"]):
            return "accesorios"
        elif any(keyword in title for keyword in ["monitor", "controller", "tracker"]):
            return "monitoreo"
        
        # Si no se encontró en el título, buscar en características
        for feature in features:
            if any(keyword in feature for keyword in ["panel", "solar panel", "photovoltaic"]):
                return "paneles"
            elif any(keyword in feature for keyword in ["battery", "batería", "lithium", "storage"]):
                return "baterias"
            elif any(keyword in feature for keyword in ["inverter", "inversor", "converter"]):
                return "inversores"
            elif any(keyword in feature for keyword in ["kit", "system", "complete"]):
                return "kits"
            elif any(keyword in feature for keyword in ["mount", "cable", "connector", "accessory"]):
                return "accesorios"
            elif any(keyword in feature for keyword in ["monitor", "controller", "tracker"]):
                return "monitoreo"
        
        # Categoría predeterminada
        return "otros"
    
    def save_product_to_json(self, product_data: Dict[str, Any], filename: str) -> None:
        """Guarda los datos de un producto en un archivo JSON"""
        file_path = os.path.join("data", filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(product_data, f, ensure_ascii=False, indent=2)
        logger.info(f"Producto guardado en {file_path}")
    
    def save_products_to_json(self, products: List[Dict[str, Any]], filename: str) -> None:
        """Guarda una lista de productos en un archivo JSON"""
        file_path = os.path.join("data", filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)
        logger.info(f"Productos guardados en {file_path}")
    
    def process_asins_file(self, asins_file_path: str, max_items_per_request: int = 10) -> List[Dict[str, Any]]:
        """Procesa un archivo de ASINs de productos y obtiene sus datos"""
        all_products = []
        
        try:
            # Leer ASINs del archivo
            with open(asins_file_path, 'r') as f:
                lines = f.readlines()
            
            # Filtrar líneas vacías y comentarios, extraer solo los ASINs
            asins = [line.strip() for line in lines if line.strip() and not line.strip().startswith('#')]
            
            # Procesar ASINs en lotes
            for i in range(0, len(asins), max_items_per_request):
                batch = asins[i:i + max_items_per_request]
                logger.info(f"Procesando lote de {len(batch)} ASINs ({i+1}-{i+len(batch)} de {len(asins)})")
                
                # Obtener datos de la API
                response = self.get_items(batch)
                if response:
                    # Extraer y procesar datos de productos
                    products = self.extract_product_data(response)
                    all_products.extend(products)
                    
                    # Guardar cada producto individualmente
                    for product in products:
                        self.save_product_to_json(product, f"{product['asin']}.json")
                
                # Pausa para evitar límites de tasa de la API
                if i + max_items_per_request < len(asins):
                    time.sleep(1)
            
            # Guardar todos los productos en un único archivo
            if all_products:
                self.save_products_to_json(all_products, "all_products_paapi.json")
            
            return all_products
        
        except Exception as e:
            logger.error(f"Error al procesar archivo de ASINs: {str(e)}")
            return []


if __name__ == "__main__":
    # Ejemplo de uso
    # Obtener credenciales de variables de entorno para mayor seguridad
    partner_tag = os.environ.get("AMAZON_PARTNER_TAG", "")
    access_key = os.environ.get("AMAZON_ACCESS_KEY", "")
    secret_key = os.environ.get("AMAZON_SECRET_KEY", "")
    
    if not partner_tag or not access_key or not secret_key:
        print("ERROR: Se requieren las variables de entorno AMAZON_PARTNER_TAG, AMAZON_ACCESS_KEY y AMAZON_SECRET_KEY")
        exit(1)
    
    # Crear instancia de la API
    api = AmazonProductAPI(partner_tag, access_key, secret_key)
    
    # Procesar archivo de ASINs
    asins_file = "solar_products_asins.txt"
    products = api.process_asins_file(asins_file)
    
    print(f"Se obtuvieron {len(products)} productos con éxito")
