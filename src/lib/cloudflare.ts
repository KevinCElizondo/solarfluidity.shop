// Utilidades para interactuar con la API de Cloudflare Workers

/**
 * Función para hacer peticiones a la API de Cloudflare Workers
 * @param endpoint - El endpoint de la API
 * @param options - Opciones adicionales para fetch
 * @returns La respuesta de la API
 */
export async function fetchCloudflareAPI(endpoint: string, options: RequestInit = {}) {
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  
  if (!apiToken) {
    throw new Error('CLOUDFLARE_API_TOKEN no está definido en las variables de entorno');
  }

  const url = `https://api.cloudflare.com/client/v4/${endpoint}`;
  
  const headers = {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(`Error en la API de Cloudflare: ${data.errors?.[0]?.message || 'Error desconocido'}`);
  }

  return data.result;
}

/**
 * Ejemplo: Obtener información sobre los Workers desplegados
 */
export async function getWorkersInfo() {
  return fetchCloudflareAPI('workers/scripts');
}
