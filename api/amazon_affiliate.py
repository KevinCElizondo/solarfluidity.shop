import os
import json
import requests
from typing import List, Dict, Any, Optional
from pathlib import Path

class AmazonAffiliateManager:
    """
    Clase para gestionar productos de afiliación de Amazon
    """
    def __init__(self, affiliate_tag: str, output_dir: str = '../src/data'):
        self.affiliate_tag = affiliate_tag
        self.output_dir = output_dir
        self.products_file = os.path.join(output_dir, 'products.ts')
        self.backup_dir = os.path.join(output_dir, 'backups')
        
        # Crear directorio de backups si no existe
        os.makedirs(self.backup_dir, exist_ok=True)
    
    def create_affiliate_link(self, asin: str) -> str:
        """
        Crea un enlace de afiliación de Amazon
        """
        return f"https://www.amazon.com/dp/{asin}?tag={self.affiliate_tag}"
    
    def backup_current_products(self) -> None:
        """
        Crea una copia de seguridad del archivo de productos actual
        """
        if os.path.exists(self.products_file):
            import datetime
            timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            backup_file = os.path.join(self.backup_dir, f"products_backup_{timestamp}.ts")
            
            with open(self.products_file, 'r', encoding='utf-8') as src:
                with open(backup_file, 'w', encoding='utf-8') as dst:
                    dst.write(src.read())
            
            print(f"Backup created: {backup_file}")
    
    def generate_product_template(self, 
                                  id: str,
                                  asin: str,
                                  name: str,
                                  description: str,
                                  price: float,
                                  discount_price: Optional[float],
                                  category_id: str,
                                  features: List[str],
                                  specifications: Dict[str, str],
                                  image_url: str,
                                  gallery: List[str],
                                  stock: int = 999,
                                  rating: float = 4.5,
                                  reviews: int = 100,
                                  is_new: bool = False,
                                  is_featured: bool = False,
                                  slug: str = None) -> Dict[str, Any]:
        """
        Genera la plantilla para un nuevo producto
        """
        if slug is None:
            # Generar slug basado en el nombre
            import re
            slug = re.sub(r'[^\w\s-]', '', name.lower())
            slug = re.sub(r'[\s-]+', '-', slug).strip('-')
        
        return {
            "id": id,
            "name": name,
            "description": description,
            "price": price,
            "discountPrice": discount_price,
            "categoryId": category_id,
            "features": features,
            "specifications": specifications,
            "amazonAsin": asin,
            "amazonAffiliateLink": self.create_affiliate_link(asin),
            "imageUrl": image_url,
            "gallery": gallery,
            "stock": stock,
            "rating": rating,
            "reviews": reviews,
            "isNew": is_new,
            "isFeatured": is_featured,
            "slug": slug
        }
    
    def update_products_file(self, new_products: List[Dict[str, Any]]) -> None:
        """
        Actualiza el archivo TypeScript de productos con nuevos productos o reemplazando existentes
        """
        # Primero hacer una copia de seguridad
        self.backup_current_products()
        
        # Leer el archivo actual para mantener la estructura
        with open(self.products_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Analizamos el archivo para encontrar la matriz de productos
        import re
        
        # Extraer las categorías para mantenerlas
        categories_match = re.search(r'export const categories: Category\[\] = \[([\s\S]*?)\];', content)
        categories_content = categories_match.group(1) if categories_match else ""
        
        # Extraer las funciones auxiliares para mantenerlas
        functions_match = re.search(r'// Función para obtener productos por categoría([\s\S]*$)', content)
        functions_content = functions_match.group(1) if functions_match else ""
        
        # Crear el nuevo contenido de productos
        products_str = "[\n"
        for i, product in enumerate(new_products):
            # Añadir un comentario si es el primer producto de una categoría
            if i > 0 and new_products[i-1]["categoryId"] != product["categoryId"]:
                products_str += f"\n  // {product['categoryId'].capitalize()}\n"
            elif i == 0:
                products_str += f"  // {product['categoryId'].capitalize()}\n"
            
            # Convertir el producto a formato TypeScript
            product_str = "  {\n"
            for key, value in product.items():
                if isinstance(value, str):
                    product_str += f'    {key}: "{value}",\n'
                elif isinstance(value, list):
                    product_str += f'    {key}: [\n'
                    for item in value:
                        product_str += f'      "{item}",\n'
                    product_str += '    ],\n'
                elif isinstance(value, dict):
                    product_str += f'    {key}: {{\n'
                    for k, v in value.items():
                        product_str += f'      {k}: "{v}",\n'
                    product_str += '    },\n'
                elif value is None:
                    product_str += f'    {key}: null,\n'
                else:
                    product_str += f'    {key}: {value},\n'
            
            # Cerrar el objeto del producto
            if i < len(new_products) - 1:
                product_str += "  },\n"
            else:
                product_str += "  }\n"
            
            products_str += product_str
        
        products_str += "];"
        
        # Crear el nuevo contenido del archivo
        new_content = f"""// Definición de tipos para productos
import {{ Product, Category }} from '../types/product';

// Categorías de productos
export const categories: Category[] = [{categories_content}];

// Productos
export const products: Product[] = {products_str}

{functions_content}"""
        
        # Escribir el nuevo contenido al archivo
        with open(self.products_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Products file updated: {self.products_file}")
    
    def generate_products_from_json(self, json_file: str) -> None:
        """
        Genera productos a partir de un archivo JSON
        """
        with open(json_file, 'r', encoding='utf-8') as f:
            products_data = json.load(f)
        
        products = []
        for product_data in products_data:
            # Convertir el formato JSON al formato de la plantilla
            product = self.generate_product_template(
                id=product_data.get('id'),
                asin=product_data.get('asin'),
                name=product_data.get('name'),
                description=product_data.get('description'),
                price=product_data.get('price'),
                discount_price=product_data.get('discountPrice'),
                category_id=product_data.get('categoryId'),
                features=product_data.get('features', []),
                specifications=product_data.get('specifications', {}),
                image_url=product_data.get('imageUrl'),
                gallery=product_data.get('gallery', []),
                stock=product_data.get('stock', 999),
                rating=product_data.get('rating', 4.5),
                reviews=product_data.get('reviews', 100),
                is_new=product_data.get('isNew', False),
                is_featured=product_data.get('isFeatured', False),
                slug=product_data.get('slug')
            )
            products.append(product)
        
        self.update_products_file(products)
        print(f"Generated {len(products)} products from {json_file}")

if __name__ == "__main__":
    # Ejemplo de uso
    affiliate_manager = AmazonAffiliateManager(affiliate_tag="solarfluidity-20")
    
    # Puedes generar productos a partir de un archivo JSON
    # affiliate_manager.generate_products_from_json('products_data.json')
    
    # O puedes crear productos manualmente
    # product = affiliate_manager.generate_product_template(
    #     id="nuevo-panel-solar",
    #     asin="B07JZLQF55",
    #     name="Nuevo Panel Solar 600W",
    #     description="Panel solar de última generación con 600W de potencia.",
    #     price=499.99,
    #     discount_price=459.99,
    #     category_id="paneles",
    #     features=["Potencia: 600W", "Tipo: Monocristalino"],
    #     specifications={"potencia": "600W", "tipo": "Monocristalino"},
    #     image_url="/images/products/panel-solar-600w.jpg",
    #     gallery=["/images/products/panel-solar-600w-1.jpg"],
    #     is_featured=True
    # )
    # affiliate_manager.update_products_file([product])
