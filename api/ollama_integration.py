import requests

class OllamaGenerator:
    def __init__(self, base_url="http://host.docker.internal:11434"):
        self.base_url = base_url
    
    def generate_product_description(self, product_data):
        prompt = f"""Genera una descripción atractiva para un producto de energía solar con estas características:
        Nombre: {product_data['name']}
        Características principales: {product_data['features']}
        Beneficios clave: {product_data['benefits']}
        Mantén un tono profesional pero persuasivo, máximo 150 palabras."""
        
        response = requests.post(
            f"{self.base_url}/api/generate",
            json={
                "model": "llama3",
                "prompt": prompt,
                "stream": False
            }
        )
        return response.json().get('response', '')
        
    def check_connection(self):
        """Verifica la conexión con Ollama"""
        try:
            response = requests.get(f"{self.base_url}/api/version")
            if response.status_code == 200:
                return {
                    "connected": True,
                    "version": response.json().get("version", "desconocida")
                }
            return {"connected": False, "error": f"Error: {response.status_code}"}
        except Exception as e:
            return {"connected": False, "error": str(e)}

# Ejemplo de uso
if __name__ == "__main__":
    # Crear instancia con URL por defecto para ambiente Docker
    generator = OllamaGenerator()
    
    # Verificar conexión
    connection = generator.check_connection()
    print(f"Conexión con Ollama: {'Exitosa' if connection['connected'] else 'Fallida'}")
    
    # Ejemplo de generación
    if connection['connected']:
        description = generator.generate_product_description({
            'name': 'Panel Solar Monocristalino 400W Premium',
            'features': ['Alta eficiencia 21%', 'Resistente a granizo', 'Marco reforzado'],
            'benefits': ['Reduce costos de electricidad', 'Amigable con el medio ambiente', 'Larga vida útil']
        })
        print("\nDescripción generada:")
        print(description)
