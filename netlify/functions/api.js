// Netlify serverless function para la API de SolarFluidity
exports.handler = async (event, context) => {
  // Configuración de CORS para permitir peticiones desde cualquier origen
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };
  
  // Manejar peticiones OPTIONS (preflight CORS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }
  try {
    // Process the incoming request
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
    const segments = path.split('/').filter(Boolean);

    // Return a 404 if the path is empty
    if (!segments.length) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Not Found"
        })
      };
    }

    // Obtener datos enviados en el cuerpo del request (para usar con Ollama)
    let requestData = {};
    if (event.body && (segments[0] === "ollama")) {
      try {
        requestData = JSON.parse(event.body);
        console.log('Datos recibidos para Ollama:', requestData);
        // Los datos de requestData se usarían para personalizar respuestas
        // pero en la simulación usamos respuestas predefinidas
      } catch (error) {
        console.error('Error al parsear el cuerpo de la solicitud:', error);
      }
    }
    
    // Endpoint de salud para verificar si la API está funcionando
    if (segments[0] === "health") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: "online",
          timestamp: new Date().toISOString(),
          environment: "Netlify Functions"
        })
      };
    }
    
    // API endpoint para Ollama
    if (segments[0] === "ollama") {
      if (segments.length > 1) {
        const ollamaEndpoint = segments[1];
        let response;
        
        // Procesar diferentes endpoints de Ollama
        switch (ollamaEndpoint) {
          case 'description':
            response = {
              success: true,
              description: 'Este producto de energía solar de alta calidad está diseñado para ofrecer máxima eficiencia y durabilidad. Con una construcción resistente y componentes de primera calidad, es perfecto para cualquier instalación solar residencial o comercial.'
            };
            break;
            
          case 'features':
            response = {
              success: true,
              features: [
                'Alta eficiencia energética',
                'Durabilidad garantizada',
                'Fácil instalación',
                'Compatible con sistemas existentes',
                'Resistente a condiciones climáticas extremas',
                'Certificación de calidad internacional'
              ]
            };
            break;
            
          case 'recommendations':
            response = {
              success: true,
              recommendations: []  // En un caso real, aquí irían productos recomendados
            };
            break;
            
          case 'health':
            response = {
              status: "online",
              message: "Ollama simulation is running",
              isActualOllama: false
            };
            break;
            
          default:
            return {
              statusCode: 404,
              body: JSON.stringify({ error: 'Endpoint de Ollama no encontrado' })
            };
        }
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(response)
        };
      }
      
      // Si solo se especificó /ollama sin endpoint
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "API de Ollama simulada",
          endpoints: ["/ollama/description", "/ollama/features", "/ollama/recommendations", "/ollama/health"]
        })
      };
    }

    // API endpoint para categorías
    if (segments[0] === "categories") {
      // Categorías simuladas
      const categories = [
        {
          id: "paneles",
          name: "Paneles Solares",
          description: "Paneles fotovoltaicos de alta eficiencia para captar energía solar",
          imageUrl: "/images/categories/paneles-solares.jpg",
          slug: "paneles-solares"
        },
        {
          id: "baterias",
          name: "Baterías Solares",
          description: "Sistemas de almacenamiento de energía de diferentes capacidades",
          imageUrl: "/images/categories/baterias.jpg",
          slug: "baterias"
        },
        {
          id: "kits",
          name: "Kits Completos",
          description: "Soluciones integrales que incluyen todo lo necesario para tu instalación",
          imageUrl: "/images/categories/kits-solares.jpg",
          slug: "kits-solares"
        },
        {
          id: "inversores",
          name: "Inversores",
          description: "Conversión de energía DC a AC para uso en el hogar",
          imageUrl: "/images/categories/inversores.jpg",
          slug: "inversores"
        },
        {
          id: "accesorios",
          name: "Accesorios",
          description: "Complementos y accesorios para instalaciones solares",
          imageUrl: "/images/categories/accesorios.jpg",
          slug: "accesorios"
        }
      ];
      
      // Retornar todas las categorías o filtrar por ID/slug
      if (segments.length > 1) {
        const categoryId = segments[1];
        const category = categories.find(c => c.id === categoryId || c.slug === categoryId);
        if (category) {
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(category)
          };
        }
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "Categoría no encontrada" })
        };
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(categories)
      };
    }
    
    // API endpoints para productos
    if (segments[0] === "products") {
      // Productos simulados con datos más completos
      const products = [
        {
          id: "kit-solar-5kw-residencial",
          name: "Kit Solar 5kW Residencial Completo",
          description: "Kit completo de energía solar para hogar con todo lo necesario para instalación",
          price: 2499.99,
          discountPrice: 2199.99,
          categoryId: "kits",
          features: [
            "Potencia total: 5kW",
            "Incluye 12 paneles solares monocristalinos de 400W",
            "Inversor híbrido de 5kW",
            "Baterías de litio con capacidad de 10kWh",
            "Estructura de montaje incluida",
            "Cables y conectores profesionales"
          ],
          specifications: {
            "Tipo": "Sistema completo on-grid/off-grid",
            "Capacidad": "5000W",
            "Voltaje": "48V",
            "Tipo de batería": "Litio",
            "Garantía": "10 años en componentes principales"
          },
          amazonAsin: "B075QBSYX2",
          amazonAffiliateLink: "https://www.amazon.com/dp/B075QBSYX2?tag=solarfluidity-20",
          imageUrl: "/images/products/kit-solar-5kw.jpg",
          gallery: [
            "/images/products/kit-solar-5kw.jpg",
            "/images/products/kit-solar-5kw-1.jpg",
            "/images/products/kit-solar-5kw-2.jpg",
            "/images/products/kit-solar-5kw-3.jpg"
          ],
          stock: 8,
          rating: 4.9,
          reviews: 124,
          isNew: false,
          isFeatured: true,
          slug: "kit-solar-5kw-residencial"
        },
        {
          id: "panel-solar-monocristalino-400w",
          name: "Panel Solar Monocristalino 400W",
          description: "Panel solar de alta eficiencia con tecnología PERC y excelente rendimiento en condiciones de poca luz",
          price: 299.99,
          discountPrice: null,
          categoryId: "paneles",
          features: [
            "Potencia: 400W",
            "Eficiencia: 21.3%",
            "Tecnología PERC monocristalina",
            "Marco de aluminio resistente a la corrosión",
            "Vidrio templado de alta transmisión",
            "Certificaciones internacionales"
          ],
          specifications: {
            "Tipo": "Monocristalino PERC",
            "Potencia": "400W",
            "Voltaje máximo": "41.7V",
            "Corriente máxima": "9.6A",
            "Dimensiones": "1755x1038x35mm",
            "Peso": "19.5kg",
            "Garantía": "25 años de rendimiento"
          },
          amazonAsin: "B09BFRQ1RT",
          amazonAffiliateLink: "https://www.amazon.com/dp/B09BFRQ1RT?tag=solarfluidity-20",
          imageUrl: "/images/products/panel-mono-400w.jpg",
          gallery: [
            "/images/products/panel-mono-400w.jpg",
            "/images/products/panel-mono-400w-1.jpg",
            "/images/products/panel-mono-400w-2.jpg",
            "/images/products/panel-mono-400w-3.jpg"
          ],
          stock: 25,
          rating: 4.8,
          reviews: 87,
          isNew: true,
          isFeatured: true,
          slug: "panel-solar-monocristalino-400w"
        },
        {
          id: "bateria-litio-48v-200ah",
          name: "Batería de Litio 48V 200Ah",
          description: "Batería de litio de alta capacidad ideal para sistemas solares residenciales y comerciales",
          price: 1899.99,
          discountPrice: 1699.99,
          categoryId: "baterias",
          features: [
            "Capacidad: 200Ah / 9.6kWh",
            "Tecnología de litio LiFePO4",
            "Más de 6000 ciclos de vida",
            "Sistema BMS integrado",
            "Monitoreo por aplicación móvil",
            "Diseño compacto y ligero"
          ],
          specifications: {
            "Química": "LiFePO4",
            "Voltaje": "48V",
            "Capacidad": "200Ah / 9.6kWh",
            "Ciclos de vida": "6000+ a 80% DoD",
            "Peso": "85kg",
            "Garantía": "10 años"
          },
          amazonAsin: "B09NTRX7VQ",
          amazonAffiliateLink: "https://www.amazon.com/dp/B09NTRX7VQ?tag=solarfluidity-20",
          imageUrl: "/images/products/bateria-litio-48v-200ah.jpg",
          gallery: [
            "/images/products/bateria-litio-48v-200ah.jpg",
            "/images/products/bateria-litio-48v-200ah-1.jpg",
            "/images/products/bateria-litio-48v-200ah-2.jpg"
          ],
          stock: 5,
          rating: 4.9,
          reviews: 42,
          isNew: true,
          isFeatured: true,
          slug: "bateria-litio-48v-200ah"
        }
      ];
      
      // Retornar todos los productos o filtrar por ID/slug
      if (segments.length > 1) {
        const productId = segments[1];
        const product = products.find(p => p.id === productId || p.slug === productId);
        if (product) {
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(product)
          };
        }
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "Producto no encontrado" })
        };
      }
      
      // Filtrar por categoría si se proporciona categoryId como query param
      const params = new URLSearchParams(event.queryStringParameters || {});
      const categoryId = params.get('category');
      
      if (categoryId) {
        const filteredProducts = products.filter(p => p.categoryId === categoryId);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(filteredProducts)
        };
      }
      
      // Endpoint para productos destacados
      if (segments.length > 0 && segments[0] === "featured") {
        const featuredProducts = products.filter(p => p.isFeatured);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(featuredProducts)
        };
      }
      
      // Endpoint para productos nuevos
      if (segments.length > 0 && segments[0] === "new") {
        const newProducts = products.filter(p => p.isNew);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(newProducts)
        };
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(products)
      };
    }

    // Catch all para rutas indefinidas
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "No encontrado", path: event.path })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message, stack: process.env.NODE_ENV === 'development' ? error.stack : undefined })
    };
  }
};
