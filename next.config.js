/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración optimizada para Cloudflare Workers
  output: 'standalone',
  // Asegurarse de usar la estructura de carpetas correcta
  distDir: '.next',
  // Configurar para cargar imágenes desde dominios externos (necesario para imágenes de Amazon)
  images: {
    domains: ['m.media-amazon.com', 'images-na.ssl-images-amazon.com'],
    unoptimized: true
  },
  typescript: {
    // Ignorar errores de tipo durante la producción
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar errores de ESLint durante la producción
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
