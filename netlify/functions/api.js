// Netlify serverless function example
exports.handler = async (event, context) => {
  try {
    // Process the incoming request
    const path = event.path.replace(/^\/\.netlify\/functions\/api/, "");
    const segments = path.split("/").filter(Boolean);

    // Simple API response for health check
    if (!segments.length || segments[0] === "health") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: "ok",
          message: "SolarFluidity API is up and running",
          timestamp: new Date().toISOString()
        })
      };
    }
    
    // Example API endpoints
    if (segments[0] === "products") {
      const products = [
        {
          id: "kit-solar-5kw-residencial",
          name: "Kit Solar 5kW Residencial Completo",
          price: 2499.99,
          category: "Kits"
        },
        {
          id: "panel-solar-monocristalino-400w",
          name: "Panel Solar Monocristalino 400W",
          price: 299.99,
          category: "Paneles"
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
