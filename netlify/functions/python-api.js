// Script para simular respuestas de la API para SolarFluidity.shop

exports.handler = async (event) => {
  // Configuración de cabeceras CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };
  
  // Manejar solicitudes preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    // Extraer la ruta de la solicitud
    const path = event.path.replace(/\.netlify\/functions\/python-api/, '');
    
    // Simulación de respuesta para productos solares
    if (path === '/api/products' || path === '/products') {
      const products = [
        {
          id: "kit-solar-5kw",
          name: "Kit Solar 5kW Residencial",
          price: 2499.99,
          description: "Kit completo para energía solar residencial",
          rating: 4.9,
          stock: 10,
          categoryId: "kits",
          imageUrl: "https://m.media-amazon.com/images/I/71dKmKpILdL._AC_SL1500_.jpg"
        },
        {
          id: "panel-solar-400w",
          name: "Panel Solar 400W Monocristalino",
          price: 299.99,
          description: "Panel solar de alta eficiencia",
          rating: 4.8,
          stock: 25,
          categoryId: "paneles",
          imageUrl: "https://m.media-amazon.com/images/I/61G+s3YPDeL._AC_SL1200_.jpg"
        },
        {
          id: "inversor-2000w",
          name: "Inversor Solar 2000W",
          price: 599.99,
          description: "Inversor solar híbrido con MPPT integrado",
          rating: 4.7,
          stock: 15,
          categoryId: "inversores",
          imageUrl: "https://m.media-amazon.com/images/I/71zyFI0A1CL._AC_SL1500_.jpg"
        }
      ];
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(products)
      };
    }
    
    // Endpoint de salud
    if (path === '/api/health' || path === '/health' || path === '/') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: "operational",
          api: "SolarFluidity API (Serverless)",
          version: "1.0.0",
          timestamp: new Date().toISOString(),
          environment: process.env.NODE_ENV || "production",
          service: "SolarFluidity.shop"
        })
      };
    }
    
    // Ruta por defecto
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({
        error: "Ruta no encontrada",
        path: path
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: "Error del servidor: " + error.message
      })
    };
  }
};
