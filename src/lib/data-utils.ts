// Utilidades para manejar datos de productos de manera segura
import { isProduction, skipDataImports } from './config';
// Nota: dataSource se usará en futuras implementaciones
import * as ProductData from './product-data';

// Exportación segura para evitar problemas en producción
export const getProductData = () => {
  // Siempre usamos nuestra versión segura en producción
  if (isProduction || skipDataImports) {
    console.log('Usando datos de productos desde src/lib/product-data');
    return ProductData;
  }

  // En desarrollo, podemos usar la versión normal
  try {
    console.log('Intentando cargar datos desde origen predeterminado');
    return ProductData;
  } catch (error) {
    console.error('Error al cargar datos de productos, usando versión de respaldo:', error);
    return ProductData;
  }
};

// Exportamos todas las funciones y datos necesarios
export const { 
  products, 
  categories,
  getProductsByCategory,
  getProductBySlug,
  getCategoryBySlug,
  getFeaturedProducts,
  getNewProducts,
  searchProducts
} = getProductData();
