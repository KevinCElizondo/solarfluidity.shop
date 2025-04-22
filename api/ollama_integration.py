import os
import json
import requests
from typing import Dict, List, Any, Optional
import logging

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("ollama_integration.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("OllamaIntegration")

class OllamaIntegration:
    """Clase para interactuar con Ollama para generar contenido para productos"""
    
    def __init__(self, base_url: str = "http://localhost:11434", model: str = "llama3"):
        self.base_url = base_url
        self.model = model
        self.api_url = f"{base_url}/api/generate"
        
        # Verificar conexión con Ollama
        try:
            response = requests.get(f"{base_url}/api/version")
            if response.status_code == 200:
                logger.info(f"Conectado a Ollama: {response.json()}")
            else:
                logger.warning(f"No se pudo conectar a Ollama: {response.status_code}")
        except Exception as e:
            logger.error(f"Error al conectar con Ollama: {str(e)}")
    
    def generate_product_description(self, product_name: str, features: List[str], category: str) -> str:
        """
        Genera una descripción detallada y atractiva para un producto
        """
        try:
            prompt = f"""Genera una descripción comercial atractiva y detallada para un producto de energía solar.

Producto: {product_name}
Categoría: {category}
Características principales:
{chr(10).join(['- ' + feature for feature in features])}

La descripción debe ser persuasiva, destacar los beneficios del producto, mencionar su utilidad 
para sistemas de energía solar y tener aproximadamente 3-4 párrafos de longitud. 
No menciones precio ni disponibilidad.
"""
            
            payload = {
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "temperature": 0.7,
                "max_tokens": 500
            }
            
            response = requests.post(self.api_url, json=payload)
            
            if response.status_code == 200:
                result = response.json()
                return result.get("response", "").strip()
            else:
                logger.error(f"Error en respuesta de Ollama: {response.status_code}")
                return "No se pudo generar una descripción para este producto."
        except Exception as e:
            logger.error(f"Error al generar descripción de producto: {str(e)}")
            return "No se pudo generar una descripción para este producto."
    
    def generate_product_features(self, product_name: str, category: str, basic_specs: Dict[str, str]) -> List[str]:
        """
        Genera una lista de características destacadas para un producto
        """
        try:
            specs_text = "\n".join([f"{key}: {value}" for key, value in basic_specs.items()])
            
            prompt = f"""Genera una lista de 6-8 características destacadas para un producto de energía solar.

Producto: {product_name}
Categoría: {category}
Especificaciones básicas:
{specs_text}

Cada característica debe ser concisa (máximo 8 palabras), comenzar con sustantivos o verbos,
y destacar aspectos importantes para un potencial comprador interesado en energía solar.
No incluyas precios ni disponibilidad.
"""
            
            payload = {
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "temperature": 0.7,
                "max_tokens": 300
            }
            
            response = requests.post(self.api_url, json=payload)
            
            if response.status_code == 200:
                result = response.json()
                features_text = result.get("response", "").strip()
                
                # Procesar el texto para obtener una lista de características
                features = []
                for line in features_text.split("\n"):
                    line = line.strip()
                    if line and (line.startswith("-") or line.startswith("•")):
                        features.append(line.lstrip("- •").strip())
                    elif line and len(line) < 100:  # Evitar líneas que no sean características
                        features.append(line)
                
                # Limitar a 8 características como máximo
                return features[:8]
            else:
                logger.error(f"Error en respuesta de Ollama: {response.status_code}")
                return ["No se pudieron generar características para este producto."]
        except Exception as e:
            logger.error(f"Error al generar características de producto: {str(e)}")
            return ["No se pudieron generar características para este producto."]
    
    def recommend_related_products(self, product_name: str, category: str, all_products: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Recomienda productos relacionados a partir de una lista completa de productos
        """
        try:
            # Preparar una lista simplificada de productos para el prompt
            products_summary = "\n".join([
                f"{idx+1}. {p['name']} (Categoría: {p['categoryId']})" 
                for idx, p in enumerate(all_products[:20]) # Limitar a 20 productos para el contexto
            ])
            
            prompt = f"""Dado el siguiente producto de energía solar:

Producto: {product_name}
Categoría: {category}

Y esta lista de productos disponibles:
{products_summary}

Recomienda los números de 3-5 productos más relevantes y complementarios que un cliente podría
querer comprar junto con el producto principal. Solo responde con los números separados por comas,
sin explicación. Ejemplo: "1, 3, 7"
"""
            
            payload = {
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "temperature": 0.3,
                "max_tokens": 100
            }
            
            response = requests.post(self.api_url, json=payload)
            
            if response.status_code == 200:
                result = response.json()
                recommendation_text = result.get("response", "").strip()
                
                # Extraer los números recomendados
                import re
                recommended_indices = []
                for num in re.findall(r'\d+', recommendation_text):
                    try:
                        idx = int(num) - 1  # Convertir a índice base 0
                        if 0 <= idx < len(all_products):
                            recommended_indices.append(idx)
                    except ValueError:
                        continue
                
                # Obtener los productos recomendados (máximo 5)
                recommended_products = [all_products[idx] for idx in recommended_indices[:5]]
                
                # Si no se encontraron recomendaciones, devolver algunos productos similares por categoría
                if not recommended_products:
                    same_category = [p for p in all_products if p['categoryId'] == category]
                    return same_category[:4]
                    
                return recommended_products
            else:
                logger.error(f"Error en respuesta de Ollama: {response.status_code}")
                return []
        except Exception as e:
            logger.error(f"Error al recomendar productos relacionados: {str(e)}")
            return []

# Ejemplo de uso
if __name__ == "__main__":
    ollama = OllamaIntegration()
    
    # Ejemplo de generación de descripción
    description = ollama.generate_product_description(
        "Panel Solar Monocristalino 500W",
        ["Eficiencia 21.3%", "Garantía de 25 años", "Resistente a condiciones extremas"],
        "Paneles Solares"
    )
    print("Descripción generada:")
    print(description)
    
    # Ejemplo de generación de características
    features = ollama.generate_product_features(
        "Batería de Litio 48V 200Ah",
        "Baterías",
        {"capacidad": "200Ah", "voltaje": "48V", "química": "Litio-ion", "ciclos": "5000+"}
    )
    print("\nCaracterísticas generadas:")
    for feature in features:
        print(f"- {feature}")
