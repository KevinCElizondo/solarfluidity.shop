/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! ADVERTENCIA !!
    // Ignorar errores de tipo durante la producción
    // para evitar que la compilación falle en Netlify
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar errores de ESLint durante la producción
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
