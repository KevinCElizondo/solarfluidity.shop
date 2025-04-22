from fastapi import FastAPI, HTTPException, Query, Body
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import uvicorn
import json
import os
from ollama_integration import OllamaIntegration

app = FastAPI(title="SolarFluidity Ollama API", 
             description="API para integrar Ollama en la generación de contenido para productos de energía solar")

# Inicializar integración con Ollama
ollama = OllamaIntegration()

# Modelos de datos
class ProductBase(BaseModel):
    name: str
    category: str

class DescriptionRequest(ProductBase):
    features: List[str]

class FeaturesRequest(ProductBase):
    specifications: Dict[str, str]

class RecommendationsRequest(ProductBase):
    all_products: List[Dict[str, Any]]

# Rutas API
@app.get("/")
async def root():
    return {"message": "Bienvenido a SolarFluidity Ollama API", 
            "status": "online",
            "available_endpoints": [
                "/api/description", 
                "/api/features", 
                "/api/recommendations"
            ]}

@app.post("/api/description")
async def generate_description(request: DescriptionRequest):
    """
    Genera una descripción detallada y atractiva para un producto
    """
    try:
        description = ollama.generate_product_description(
            request.name,
            request.features,
            request.category
        )
        return {"description": description}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al generar descripción: {str(e)}")

@app.post("/api/features")
async def generate_features(request: FeaturesRequest):
    """
    Genera una lista de características destacadas para un producto
    """
    try:
        features = ollama.generate_product_features(
            request.name,
            request.category,
            request.specifications
        )
        return {"features": features}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al generar características: {str(e)}")

@app.post("/api/recommendations")
async def get_recommendations(request: RecommendationsRequest):
    """
    Recomienda productos relacionados
    """
    try:
        recommendations = ollama.recommend_related_products(
            request.name,
            request.category,
            request.all_products
        )
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al generar recomendaciones: {str(e)}")

@app.get("/api/health")
async def health_check():
    """
    Verificar el estado de la API y la conexión con Ollama
    """
    try:
        # Intentar conexión simple
        test_description = ollama.generate_product_description(
            "Test Product",
            ["Test Feature"],
            "Test Category"
        )
        
        is_connected = len(test_description) > 10
        
        return {
            "status": "healthy" if is_connected else "degraded",
            "ollama_connected": is_connected,
            "api_version": "1.0.0"
        }
    except Exception as e:
        return {
            "status": "error",
            "ollama_connected": False,
            "error": str(e),
            "api_version": "1.0.0"
        }

# Iniciar servidor si se ejecuta como script principal
if __name__ == "__main__":
    # Puerto por defecto para la API
    port = int(os.environ.get("PORT", 8000))
    
    # Iniciar servidor
    uvicorn.run("ollama_api:app", host="0.0.0.0", port=port, reload=True)
