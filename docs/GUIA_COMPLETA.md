# Guía Completa - SolarFluidity.shop

Esta guía detalla los pasos necesarios para dejar SolarFluidity.shop 100% funcional y optimizado para generar tráfico y conversiones.

## Índice
1. [Configuración del Entorno](#1-configuración-del-entorno)
2. [Despliegue y Dominio](#2-despliegue-y-dominio)
3. [Optimización SEO](#3-optimización-seo)
4. [Marketing Digital](#4-marketing-digital)
5. [Monetización](#5-monetización)
6. [Mantenimiento](#6-mantenimiento)
7. [Implementación de Productos](#7-implementación-de-productos)
8. [Integración de Imágenes](#8-integración-de-imágenes)
9. [Configuración de Docker](#9-configuración-de-docker)
10. [Integración con Inteligencia Artificial](#10-integración-con-inteligencia-artificial)
11. [Analítica y Mejora Continua](#11-analítica-y-mejora-continua)

---

## 1. Configuración del Entorno

### Requisitos Técnicos
- **Node.js**: v18.0.0 o superior
- **Next.js**: v14.0.0 o superior
- **Python**: v3.10 o superior (para el backend FastAPI)
- **Git**: Último estable

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/KevinCElizondo/solarfluidity.shop.git
cd solarfluidity.shop

# Instalar dependencias frontend
npm install

# Instalar dependencias backend
cd api
pip install -r requirements.txt
cd ..

# Iniciar entorno de desarrollo
npm run dev
```

### Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
# API Keys
AMAZON_AFFILIATE_ID=tu-id-de-afiliado
NETLIFY_AUTH_TOKEN=tu-token-de-netlify
NETLIFY_SITE_ID=tu-site-id-netlify

# Backend
API_URL=https://tu-backend-api.com
API_KEY=tu-api-key-segura

# Configuraciones generales
NEXT_PUBLIC_SITE_URL=https://solarfluidity.shop
```

---

## 2. Despliegue y Dominio

### Netlify (Frontend)

1. **Configuración del Despliegue**:
   - La configuración ya está definida en `netlify.toml`
   - El sitio se despliega automáticamente desde la rama `main`

2. **Configuración del Dominio Personalizado**:
   - Accede al panel de Netlify: https://app.netlify.com/
   - Ve a tu sitio > Domain settings
   - Añade tu dominio personalizado: `solarfluidity.shop`
   - Configura los registros DNS:
     - Tipo A: Apunta a los servidores de Netlify (`75.2.60.5`)
     - Tipo CNAME: `www` apunta a `[tu-sitio].netlify.app`

3. **SSL/HTTPS**:
   - Activa Let's Encrypt en Netlify (automático al configurar el dominio)
   - Asegúrate de que la redirección HTTPS esté activa

### Hostinger/Servidor (Backend - Opcional)

1. **Despliegue de FastAPI**:
   ```bash
   # En el servidor
   git clone https://github.com/KevinCElizondo/solarfluidity.shop.git
   cd solarfluidity.shop/api
   pip install -r requirements.txt
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Configuración con PM2 (para producción)**:
   ```bash
   npm install -g pm2
   pm2 start "uvicorn main:app --host 0.0.0.0 --port 8000" --name "solarfluidity-api"
   pm2 save
   pm2 startup
   ```

---

## 3. Optimización SEO

### Metadatos y Estructura
1. **Metaetiquetas Básicas**:
   - Ya configuradas en `src/app/layout.tsx` con título y descripción
   - Asegúrate de que cada página tenga metadatos únicos y relevantes

2. **Estructura de URLs**:
   - Utiliza URLs semánticas y amigables
   - Ejemplo: `/productos/paneles-solares` en lugar de `/p/123`

3. **Archivo robots.txt**:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://solarfluidity.shop/sitemap.xml
   ```

4. **Sitemap XML**:
   - Genera un sitemap con todas las URLs importantes
   - Actualízalo regularmente cuando añadas nuevo contenido
   - Puedes usar `next-sitemap` para generarlo automáticamente

### Contenido Optimizado
1. **Palabras Clave**:
   - Investiga palabras clave relevantes usando herramientas como:
     - Google Keyword Planner
     - Ubersuggest
     - SEMrush
   - Palabras clave sugeridas:
     - "paneles solares costa rica"
     - "energía solar para hogares"
     - "baterías solares mejores precios"
     - "instalación sistema solar residencial"

2. **Contenido de Calidad**:
   - Crea páginas de categorías con descripciones detalladas
   - Desarrolla guías informativas sobre energía solar
   - Escribe reseñas completas de productos
   - Mantén un blog activo con artículos de 1500+ palabras

3. **Imágenes Optimizadas**:
   - Usa imágenes con atributos `alt` descriptivos
   - Optimiza el tamaño de las imágenes (WebP, compresión)
   - Nombra los archivos con palabras clave relevantes

---

## 4. Marketing Digital

### Redes Sociales
1. **Canales Recomendados**:
   - Instagram: Contenido visual de instalaciones y productos
   - Facebook: Grupo de interesados en energía solar
   - Pinterest: Infografías sobre beneficios de energía solar
   - YouTube: Tutoriales y demostraciones de productos

2. **Estrategia de Contenido**:
   - 3 publicaciones semanales mínimo
   - Calendario editorial mensual
   - Mezcla de contenido educativo (70%) y promocional (30%)

3. **Herramientas**:
   - Buffer/Hootsuite para programación
   - Canva para diseño gráfico
   - Later para Instagram

### Email Marketing
1. **Configuración**:
   - Implementa un formulario de captura en el sitio
   - Configura una cuenta en Mailchimp o SendGrid
   - Crea una secuencia de bienvenida automática (5 emails)

2. **Contenido de Emails**:
   - Newsletter mensual con nuevos productos
   - Guías educativas sobre energía solar
   - Promociones exclusivas para suscriptores
   - Historias de éxito de clientes

### Publicidad
1. **Google Ads**:
   - Campañas de búsqueda con palabras clave de "compra"
   - Remarketing a visitantes del sitio
   - Presupuesto inicial recomendado: $300/mes

2. **Facebook/Instagram Ads**:
   - Anuncios de productos estrella
   - Campañas de generación de leads
   - Públicos similares a tus clientes actuales

---

## 5. Monetización

### Enlaces de Afiliado Amazon
1. **Implementación**:
   - Utiliza el ID de afiliado en todos los enlaces a Amazon
   - Formato: `https://www.amazon.com/dp/PRODUCT_ID?tag=TU_ID_AFILIADO`
   - Divulgación clara en el footer (ya implementado)

2. **Optimización**:
   - Añade enlaces de afiliado en:
     - Reseñas de productos
     - Comparativas
     - Guías de compra
     - Artículos de blog

3. **Cumplimiento Legal**:
   - Mantén la divulgación de afiliados visible
   - Sigue las políticas de Amazon Associates
   - No hagas promesas falsas sobre productos

### Otros Programas de Afiliados
1. **Programas Recomendados**:
   - Home Depot Affiliate Program
   - Walmart Affiliate Program
   - AliExpress Affiliate Program
   - Programas directos de fabricantes de paneles solares

2. **Implementación**:
   - Integra múltiples programas para diversificar ingresos
   - Utiliza un sistema de gestión de enlaces como Skimlinks o AWIN

---

## 6. Mantenimiento

### Actualizaciones Técnicas
1. **Dependencias**:
   ```bash
   # Actualizar regularmente
   npm outdated
   npm update
   
   # Backend
   pip list --outdated
   pip install -U -r requirements.txt
   ```

2. **Seguridad**:
   - Auditorías regulares:
   ```bash
   npm audit
   npm audit fix
   ```
   - Mantén actualizado Next.js y FastAPI

### Contenido
1. **Actualización Regular**:
   - Añade 2-4 nuevos productos por semana
   - Publica 1-2 artículos de blog por semana
   - Actualiza las páginas principales mensualmente

2. **Revisión de Enlaces**:
   - Verifica los enlaces de afiliado mensualmente
   - Actualiza productos descontinuados
   - Comprueba precios y disponibilidad

---

## 7. Implementación de Productos

### Estructura de Datos
1. **Organización de Productos**:
   - Los productos están organizados por categorías en `src/data/products.ts`
   - Los tipos de datos se definen en `src/types/product.ts`

2. **Añadir Nuevos Productos**:
   ```typescript
   // Añadir a la lista de productos en src/data/products.ts
   {
     id: 'nuevo-producto',
     name: 'Nuevo Producto Solar',
     description: 'Descripción detallada del producto...',
     price: 599.99,
     discountPrice: 549.99,  // null si no hay descuento
     categoryId: 'categoria-id', // debe existir en categories
     features: ["Característica 1", "Característica 2"],
     specifications: {
       atributo1: "valor1",
       atributo2: "valor2"
     },
     imageUrl: '/images/products/nuevo-producto.jpg',
     gallery: [
       '/images/products/nuevo-producto-1.jpg',
       '/images/products/nuevo-producto-2.jpg'
     ],
     stock: 10,
     rating: 4.7,
     reviews: 15,
     isNew: true,
     isFeatured: false,
     slug: 'nuevo-producto-solar'
   }
   ```

3. **Añadir Nueva Categoría**:
   ```typescript
   // Añadir a la lista de categorías en src/data/products.ts
   {
     id: 'nueva-categoria',
     name: 'Nueva Categoría',
     description: 'Descripción de la categoría...',
     imageUrl: '/images/categories/nueva-categoria.jpg',
     slug: 'nueva-categoria'
   }
   ```

### Páginas de Productos
1. **Estructura de Directorios**:
   - `src/app/productos/page.tsx`: Lista de productos
   - `src/app/productos/[slug]/page.tsx`: Detalles de producto individual
   - `src/app/categorias/page.tsx`: Lista de categorías
   - `src/app/categorias/[slug]/page.tsx`: Productos por categoría

2. **Modificación de Plantillas**:
   - Puedes personalizar las plantillas modificando los archivos anteriores
   - Ajusta el diseño, disposición y elementos según tus necesidades
   - Añade nuevas funcionalidades como filtros, ordenación, búsqueda

---

## 8. Integración de Imágenes

### Estructura de Directorios de Imágenes
1. **Organización**:
   - `/public/images/products/`: Imágenes principales de productos
   - `/public/images/products/{product-id}-{n}.jpg`: Galerías de productos
   - `/public/images/categories/`: Imágenes de categorías
   - `/public/images/blog/`: Imágenes para artículos del blog

2. **Requisitos de Imágenes**:
   - Productos: Imágenes cuadradas de 800x800px
   - Categorías: Imágenes de proporción 16:9 (1200x675px)
   - Blog: Imágenes de proporción 16:9 (1200x675px)
   - Formatos recomendados: WebP o JPEG optimizado

3. **Optimización de Imágenes**:
   - Utiliza herramientas como Squoosh, TinyPNG o ImageOptim
   - Implementa carga progresiva con Next.js Image
   - Mantén el tamaño de archivo por debajo de 200KB si es posible

4. **Nombrado de Archivos**:
   - Usa nombres descriptivos con palabras clave
   - Separa palabras con guiones, no espacios
   - Evita caracteres especiales o tildes

---

## 9. Configuración de Docker

### Contenedores y Orquestación
1. **Estructura de Docker**:
   - El proyecto ya incluye un `Dockerfile` y `docker-compose.yml` básicos
   - Frontend (Next.js) y opcionalmente Backend (FastAPI)

2. **Ejecución con Docker**:
   ```bash
   # Construir y levantar todos los servicios
   docker-compose up --build

   # Ejecutar en background
   docker-compose up -d

   # Detener los contenedores
   docker-compose down
   ```

3. **Configuración Avanzada**:
   - Añadir servicios adicionales (modifica `docker-compose.yml`):

   ```yaml
   version: '3.8'
   services:
     frontend:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
       volumes:
         - ./:/app
         - /app/node_modules

     backend:
       build: ./api
       ports:
         - "8000:8000"
       environment:
         - ENVIRONMENT=production
       volumes:
         - ./api:/app

     # Servicio para agentes IA
     ai-service:
       build: ./ai-service
       ports:
         - "5000:5000"
       environment:
         - OPENAI_API_KEY=${OPENAI_API_KEY}
       volumes:
         - ./ai-service:/app
   ```

4. **Flujos de Trabajo con Docker**:
   - Entorno de desarrollo: `docker-compose -f docker-compose.dev.yml up`
   - Pruebas automatizadas: `docker-compose -f docker-compose.test.yml up`
   - Producción: `docker-compose -f docker-compose.prod.yml up -d`

---

## 10. Integración con Inteligencia Artificial

### Implementación de Pydantic AI
1. **Configuración Inicial**:
   - Crea la carpeta `ai-service` en la raíz del proyecto
   - Estructura básica:

   ```
   ai-service/
   ├── app.py               # API FastAPI para los servicios IA
   ├── models/
   │   ├── __init__.py
   │   ├── product_recommendation.py  # Modelos Pydantic
   │   └── content_generation.py      # Modelos para generación
   ├── agents/
   │   ├── __init__.py
   │   ├── search_agent.py            # Agente de búsqueda
   │   └── recommendation_agent.py     # Agente de recomendaciones
   ├── utils/
   │   ├── __init__.py
   │   └── openai_client.py           # Utilidades para OpenAI
   ├── requirements.txt
   └── Dockerfile
   ```

2. **Modelos Pydantic**:
   - Ejemplo de modelo para recomendaciones:

   ```python
   # models/product_recommendation.py
   from pydantic import BaseModel, Field
   from typing import List, Optional

   class UserPreference(BaseModel):
       budget_min: float = Field(..., description="Presupuesto mínimo del usuario")
       budget_max: float = Field(..., description="Presupuesto máximo del usuario")
       property_size: float = Field(..., description="Tamaño de la propiedad en metros cuadrados")
       energy_needs: float = Field(..., description="Necesidades energéticas en kWh/mes")
       roof_type: Optional[str] = Field(None, description="Tipo de techo")

   class ProductRecommendation(BaseModel):
       product_id: str = Field(..., description="ID del producto recomendado")
       relevance_score: float = Field(..., description="Puntuación de relevancia de 0 a 1")
       reasoning: str = Field(..., description="Razonamiento para esta recomendación")

   class RecommendationResponse(BaseModel):
       recommendations: List[ProductRecommendation] = Field(...)
       explanation: str = Field(..., description="Explicación general de las recomendaciones")
   ```

### Integración de LangGraph
1. **Flujos de Agentes**:
   - Implementa LangGraph para orquestar agentes:

   ```python
   # agents/recommendation_agent.py
   from langgraph.graph import StateGraph, END
   from typing import Dict, Any
   import openai

   # Definir nodos del grafo
   def analyze_user_requirements(state):
       # Analiza los requisitos del usuario para entender sus necesidades
       user_prefs = state["user_preferences"]
       # Lógica con LLM para análisis...
       return {"analyzed_requirements": analysis_result, **state}

   def search_products(state):
       # Busca productos basados en requisitos analizados
       # Lógica para buscar en la base de datos de productos...
       return {"candidate_products": products, **state}

   def rank_and_explain(state):
       # Ordena productos y proporciona explicaciones
       # Lógica con LLM para clasificación...
       return {"final_recommendations": recommendations, **state}

   # Construir el grafo
   workflow = StateGraph()
   workflow.add_node("analyze_requirements", analyze_user_requirements)
   workflow.add_node("search_products", search_products)
   workflow.add_node("rank_and_explain", rank_and_explain)

   # Definir el flujo
   workflow.add_edge("analyze_requirements", "search_products")
   workflow.add_edge("search_products", "rank_and_explain")
   workflow.add_edge("rank_and_explain", END)

   # Compilar el grafo
   recommendation_agent = workflow.compile()
   ```

2. **API para Agentes**:
   - Exponer los agentes a través de FastAPI:

   ```python
   # app.py
   from fastapi import FastAPI, HTTPException
   from models.product_recommendation import UserPreference, RecommendationResponse
   from agents.recommendation_agent import recommendation_agent

   app = FastAPI()

   @app.post("/api/recommend", response_model=RecommendationResponse)
   async def get_recommendations(preferences: UserPreference):
       try:
           result = recommendation_agent.invoke({"user_preferences": preferences.dict()})
           return result["final_recommendations"]
       except Exception as e:
           raise HTTPException(status_code=500, detail=str(e))
   ```

### Integración con Frontend
1. **Componentes React**:
   - Crea componentes para interactuar con los agentes IA:

   ```tsx
   // src/components/ProductRecommender.tsx
   import { useState } from 'react';
   import { UserPreference, ProductRecommendation } from '@/types/ai';

   export default function ProductRecommender() {
     const [preferences, setPreferences] = useState<UserPreference>({...});
     const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([]);
     const [loading, setLoading] = useState(false);

     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setLoading(true);
       
       try {
         const response = await fetch('/api/recommend', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(preferences),
         });
         
         const data = await response.json();
         setRecommendations(data.recommendations);
       } catch (error) {
         console.error('Error fetching recommendations:', error);
       } finally {
         setLoading(false);
       }
     };

     // Renderizar interfaz...
   }
   ```

2. **API Routes en Next.js**:
   - Configura rutas API para conectar con el servicio de IA:

   ```tsx
   // src/app/api/recommend/route.ts
   import { NextRequest, NextResponse } from 'next/server';

   export async function POST(request: NextRequest) {
     try {
       const body = await request.json();
       
       const response = await fetch(`${process.env.AI_SERVICE_URL}/api/recommend`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body),
       });
       
       const data = await response.json();
       return NextResponse.json(data);
     } catch (error) {
       return NextResponse.json(
         { error: 'Error procesando la recomendación' },
         { status: 500 }
       );
     }
   }
   ```

---

## 11. Analítica y Mejora Continua

### Implementación de Analítica
1. **Google Analytics 4**:
   - Implementación básica ya realizada
   - Configura eventos personalizados:
     - Clics en enlaces de afiliado
     - Visualizaciones de productos
     - Tiempo en página

2. **Google Search Console**:
   - Verifica la propiedad
   - Monitoriza el rendimiento en búsquedas
   - Corrige errores de indexación

3. **Métricas Clave**:
   - CTR (Click Through Rate) de afiliados
   - Tasa de conversión
   - Tráfico orgánico
   - Páginas por sesión

### Plan de Mejora Continua
1. **Revisión Mensual**:
   - Análisis de datos de tráfico y conversión
   - Identificación de páginas populares y con bajo rendimiento
   - Ajuste de estrategia de contenido

2. **Testing A/B**:
   - Prueba diferentes diseños de página de producto
   - Experimenta con distintos CTAs
   - Evalúa diseños alternativos de botones de afiliado

3. **Encuestas a Usuarios**:
   - Implementa feedback de usuarios con Hotjar
   - Encuestas cortas después de la navegación
   - Solicita comentarios por email

---

## Checklist de Lanzamiento

- [ ] Diseño completamente responsive revisado en todos los dispositivos
- [ ] Enlaces de navegación funcionando correctamente
- [ ] Metadatos SEO implementados en todas las páginas
- [ ] Google Analytics configurado
- [ ] Formulario de contacto funcional
- [ ] Divulgación de afiliados visible
- [ ] Páginas legales (Términos, Privacidad) creadas
- [ ] Sitemap generado y enviado a Google
- [ ] Prueba de velocidad (>90 en PageSpeed Insights)
- [ ] Configuración de SSL/HTTPS completa
- [ ] Backup automático configurado
- [ ] Dominio personalizado activo
- [ ] Redes sociales vinculadas al sitio

---

## Recursos Adicionales

### Herramientas Recomendadas
- **SEO**: Ahrefs, SEMrush, Moz
- **Imágenes**: Adobe Stock, Unsplash, Pexels
- **Email Marketing**: Mailchimp, ConvertKit, SendGrid
- **Analítica**: Google Analytics, Hotjar, Clarity

### Documentación
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Guía de Amazon Associates](https://affiliate-program.amazon.com/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

¡Buena suerte con SolarFluidity.shop! Con esta guía y una implementación constante, estarás en camino a crear un sitio web exitoso de afiliados de energía solar.
