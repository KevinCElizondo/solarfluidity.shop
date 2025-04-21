import os
import json
import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from typing import Dict, List, Any, Optional
import logging

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("amazon_scraper.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("AmazonScraper")

class AmazonProductScraper:
    """Clase para extraer información de productos de Amazon"""
    
    def __init__(self, output_dir: str = 'data', use_selenium: bool = True):
        self.output_dir = output_dir
        self.use_selenium = use_selenium
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Connection': 'keep-alive',
            'DNT': '1',
            'Upgrade-Insecure-Requests': '1',
        }
        
        # Crear directorio de salida si no existe
        os.makedirs(output_dir, exist_ok=True)
        
        # Inicializar Selenium si se usa
        if use_selenium:
            self.init_selenium()
    
    def init_selenium(self):
        """Inicializa el navegador Chrome para Selenium"""
        options = Options()
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-gpu')
        options.add_argument(f'user-agent={self.headers["User-Agent"]}')
        options.add_argument('--window-size=1920,1080')
        
        self.driver = webdriver.Chrome(options=options)
        logger.info("Selenium inicializado correctamente")
    
    def extract_product_info(self, asin: str) -> Optional[Dict[str, Any]]:
        """Extrae información de un producto de Amazon usando su ASIN"""
        url = f"https://www.amazon.com/dp/{asin}"
        logger.info(f"Extrayendo información del producto: {url}")
        
        try:
            if self.use_selenium:
                return self._extract_with_selenium(url, asin)
            else:
                return self._extract_with_requests(url, asin)
        except Exception as e:
            logger.error(f"Error al extraer información del producto {asin}: {str(e)}")
            return None
    
    def _extract_with_requests(self, url: str, asin: str) -> Optional[Dict[str, Any]]:
        """Extrae información usando requests y BeautifulSoup"""
        try:
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            return self._parse_product_page(soup, asin)
        except Exception as e:
            logger.error(f"Error con requests: {str(e)}")
            return None
    
    def _extract_with_selenium(self, url: str, asin: str) -> Optional[Dict[str, Any]]:
        """Extrae información usando Selenium"""
        try:
            self.driver.get(url)
            # Esperar a que la página cargue completamente
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.ID, "productTitle"))
            )
            # Dar tiempo para que el JavaScript se ejecute
            time.sleep(2)
            
            # Obtener el contenido HTML y analizarlo con BeautifulSoup
            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')
            return self._parse_product_page(soup, asin)
        except Exception as e:
            logger.error(f"Error con Selenium: {str(e)}")
            return None
    
    def _parse_product_page(self, soup: BeautifulSoup, asin: str) -> Dict[str, Any]:
        """Analiza la página del producto y extrae la información relevante"""
        product_data = {
            "asin": asin,
            "id": f"amazon-{asin}",
            "name": "",
            "description": "",
            "price": 0.0,
            "discountPrice": None,
            "categoryId": "unknown",
            "features": [],
            "specifications": {},
            "imageUrl": "",
            "gallery": [],
            "rating": 0.0,
            "reviews": 0,
            "isNew": False,
            "isFeatured": False,
            "slug": ""
        }
        
        # Extraer título
        title_element = soup.find("span", {"id": "productTitle"})
        if title_element:
            product_data["name"] = title_element.text.strip()
            # Generar slug a partir del título
            import re
            slug = re.sub(r'[^\w\s-]', '', product_data["name"].lower())
            product_data["slug"] = re.sub(r'[\s-]+', '-', slug).strip('-')
        
        # Extraer precio
        price_element = soup.find("span", {"class": "a-offscreen"})
        if price_element:
            try:
                price_text = price_element.text.replace('$', '').replace(',', '')
                product_data["price"] = float(price_text)
            except (ValueError, AttributeError):
                pass
        
        # Extraer imágenes
        try:
            # Intentar encontrar la galería de imágenes
            gallery_scripts = soup.find_all("script", text=lambda t: t and "ImageBlockATF" in t)
            
            if gallery_scripts:
                import re
                import json
                
                for script in gallery_scripts:
                    # Buscar la definición de 'data' que contiene las URLs de las imágenes
                    matches = re.search(r'var data = ({.*?});', script.string, re.DOTALL)
                    if matches:
                        try:
                            data_json = json.loads(matches.group(1))
                            if 'colorImages' in data_json and 'initial' in data_json['colorImages']:
                                images = data_json['colorImages']['initial']
                                for image_data in images:
                                    if 'hiRes' in image_data and image_data['hiRes']:
                                        product_data["gallery"].append(image_data['hiRes'])
                                    elif 'large' in image_data and image_data['large']:
                                        product_data["gallery"].append(image_data['large'])
                        except json.JSONDecodeError:
                            logger.error("Error al decodificar JSON de imágenes")
                
                # Establecer la imagen principal
                if product_data["gallery"]:
                    product_data["imageUrl"] = product_data["gallery"][0]
        except Exception as e:
            logger.error(f"Error al extraer imágenes: {str(e)}")
        
        # Extraer características (bullet points)
        feature_elements = soup.find("div", {"id": "feature-bullets"})
        if feature_elements:
            bullet_points = feature_elements.find_all("span", {"class": "a-list-item"})
            for point in bullet_points:
                feature_text = point.text.strip()
                if feature_text and not feature_text.startswith('Make sure'):  # Filtrar algunas frases comunes no deseadas
                    product_data["features"].append(feature_text)
        
        # Extraer descripción
        description_element = soup.find("div", {"id": "productDescription"})
        if description_element:
            product_data["description"] = description_element.text.strip()
        else:
            # Intentar con otra ubicación común para la descripción
            desc_div = soup.find("div", {"class": "a-section a-spacing-medium a-spacing-top-small"})
            if desc_div:
                product_data["description"] = desc_div.text.strip()
        
        # Extraer especificaciones
        spec_table = soup.find("table", {"id": "productDetails_techSpec_section_1"})
        if not spec_table:
            spec_table = soup.find("table", {"class": "a-keyvalue prodDetTable"})
        
        if spec_table:
            rows = spec_table.find_all("tr")
            for row in rows:
                try:
                    header = row.find("th").text.strip().lower()
                    value = row.find("td").text.strip()
                    # Convertir el encabezado a un formato adecuado para clave
                    import re
                    header_key = re.sub(r'[^\w\s]', '', header).strip().replace(' ', '_')
                    product_data["specifications"][header_key] = value
                except (AttributeError, Exception) as e:
                    continue
        
        # Extraer valoración y número de reseñas
        rating_element = soup.find("span", {"class": "a-icon-alt"})
        if rating_element and "out of 5 stars" in rating_element.text:
            try:
                rating_text = rating_element.text.split(' out of')[0]
                product_data["rating"] = float(rating_text)
            except (ValueError, AttributeError):
                pass
        
        reviews_element = soup.find("span", {"id": "acrCustomerReviewText"})
        if reviews_element and "ratings" in reviews_element.text:
            try:
                reviews_text = reviews_element.text.split(' ')[0].replace(',', '')
                product_data["reviews"] = int(reviews_text)
            except (ValueError, AttributeError, IndexError):
                pass
        
        # Determinar categoría basada en título o palabras clave
        title = product_data["name"].lower()
        if any(keyword in title for keyword in ["panel", "solar panel", "photovoltaic"]):
            product_data["categoryId"] = "paneles"
        elif any(keyword in title for keyword in ["battery", "batería", "lithium", "storage"]):
            product_data["categoryId"] = "baterias"
        elif any(keyword in title for keyword in ["inverter", "inversor", "converter"]):
            product_data["categoryId"] = "inversores"
        elif any(keyword in title for keyword in ["kit", "system", "complete"]):
            product_data["categoryId"] = "kits"
        elif any(keyword in title for keyword in ["mount", "cable", "connector", "accessory"]):
            product_data["categoryId"] = "accesorios"
        elif any(keyword in title for keyword in ["monitor", "controller", "tracker"]):
            product_data["categoryId"] = "monitoreo"
        
        return product_data
    
    def extract_multiple_products(self, asin_list: List[str]) -> List[Dict[str, Any]]:
        """Extrae información de múltiples productos"""
        products = []
        
        for asin in asin_list:
            product_info = self.extract_product_info(asin)
            if product_info:
                products.append(product_info)
                # Guardar cada producto individualmente para no perder todo si hay un error
                self.save_product_to_json(product_info, f"{asin}.json")
            # Pausa para evitar ser bloqueado por Amazon
            time.sleep(3)
        
        # Guardar todos los productos en un único archivo
        if products:
            self.save_products_to_json(products, "all_products.json")
        
        return products
    
    def save_product_to_json(self, product_data: Dict[str, Any], filename: str) -> None:
        """Guarda los datos de un producto en un archivo JSON"""
        file_path = os.path.join(self.output_dir, filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(product_data, f, ensure_ascii=False, indent=2)
        logger.info(f"Producto guardado en {file_path}")
    
    def save_products_to_json(self, products: List[Dict[str, Any]], filename: str) -> None:
        """Guarda una lista de productos en un archivo JSON"""
        file_path = os.path.join(self.output_dir, filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)
        logger.info(f"Productos guardados en {file_path}")
    
    def close(self):
        """Cierra el navegador Selenium"""
        if self.use_selenium and hasattr(self, 'driver'):
            self.driver.quit()
            logger.info("Navegador Selenium cerrado")

if __name__ == "__main__":
    # Ejemplo de uso
    scraper = AmazonProductScraper(output_dir='data', use_selenium=True)
    
    try:
        # Lista de ASINs de productos solares de Amazon (ejemplos)
        solar_products = [
            "B09BFRQ1RT",  # Panel solar
            "B08KWZD1PY",  # Batería para sistema solar
            "B08JG5GBG5",  # Inversor solar
            "B075QBSYX2",  # Kit solar
            "B07JVRY5T8"   # Controlador de carga solar
        ]
        
        products = scraper.extract_multiple_products(solar_products)
        print(f"Se extrajeron {len(products)} productos con éxito")
    finally:
        scraper.close()
