// Configuración para manejar diferentes entornos
export const isProduction = process.env.NODE_ENV === 'production';
export const dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE || 'lib';
export const skipDataImports = process.env.NEXT_PUBLIC_SKIP_DATA_IMPORTS === 'true';
