/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración optimizada para Netlify
  output: 'export',
  // Asegurarse de usar la estructura de carpetas correcta
  distDir: '.next',
  // Habilitar imágenes optimizadas para Netlify
  images: {
    domains: ['m.media-amazon.com', 'images-na.ssl-images-amazon.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
  },
  // Configuración para trabajar mejor con Netlify
  trailingSlash: false,
  // Configuración de tipos y linting
  typescript: {
    // Ignorar errores de tipo durante la producción
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar errores de ESLint durante la producción
    ignoreDuringBuilds: true,
  },
  // Configuraciones experimentales
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'solarfluidity.shop']
    }
  }
};

module.exports = nextConfig;
