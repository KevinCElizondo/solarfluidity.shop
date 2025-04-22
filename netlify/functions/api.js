// Netlify serverless function example
exports.handler = async (event, context) => {
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
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(response)
        };
      }
      
      // Si solo se especificó /ollama sin endpoint
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          message: "API de Ollama simulada",
          endpoints: ["/ollama/description", "/ollama/features", "/ollama/recommendations", "/ollama/health"]
        })
      };
    }

    // Example API endpoints
    if (segments[0] === "products") {
      // Mock products for demonstration
      const products = [
        {
          id: "kit-solar-5kw-residencial",
          name: "Kit Solar 5kW Residencial Completo",
          price: 2499.99,
          category: "Kits",
          amazonAffiliateLink: "https://www.amazon.com/dp/B075QBSYX2?tag=solarfluidity-20"
        },
        {
          id: "panel-solar-monocristalino-400w",
          name: "Panel Solar Monocristalino 400W",
          price: 299.99,
          category: "Paneles",
          amazonAffiliateLink: "https://www.amazon.com/dp/B09BFRQ1RT?tag=solarfluidity-20"
        }
      ];
      
      // Return all products or filter by ID
      if (segments.length > 1) {
        const product = products.find(p => p.id === segments[1]);
        if (product) {
          return {
            statusCode: 200,
            body: JSON.stringify(product)
          };
        }
        return {
          statusCode: 404,
          body: JSON.stringify({ error: "Product not found" })
        };
      }
      
      return {
        statusCode: 200,
        body: JSON.stringify(products)
      };
    }

    // Catch all for undefined routes
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Not found" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
