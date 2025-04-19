from fastapi import FastAPI, HTTPException, BackgroundTasks, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
import subprocess
import uvicorn
from datetime import datetime
from dotenv import load_dotenv

# Import routers
from routers import products, deployment, monitoring

# Load environment variables
load_dotenv()

app = FastAPI(
    title="SolarFluidity API",
    description="API para gestión de la tienda SolarFluidity.shop",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, restrict this to specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(deployment.router, prefix="/api/deployment", tags=["deployment"])
app.include_router(monitoring.router, prefix="/api/monitoring", tags=["monitoring"])

@app.get("/")
async def root():
    """Root endpoint with API status and information"""
    return {
        "status": "operational",
        "api": "SolarFluidity Shop API",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat(),
        "endpoints": {
            "products": "/api/products",
            "deployment": "/api/deployment",
            "monitoring": "/api/monitoring"
        }
    }

@app.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    # Run the API server
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
