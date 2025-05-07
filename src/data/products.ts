// Definición de tipos para productos
import { Product, Category } from '../types/product';

// Categorías de productos
export const categories: Category[] = [
  {
    id: 'paneles',
    name: 'Paneles Solares',
    description: 'Paneles fotovoltaicos de alta eficiencia',
    imageUrl: '/images/categories/paneles-solares.jpg',
    slug: 'paneles-solares'
  }
];

// Productos
export const products: Product[] = [
  // Producto de prueba
  {
    id: 'panel-test',
    name: 'Panel Test',
    description: 'Panel de prueba',
    price: 100,
    discountPrice: null,
    categoryId: 'paneles',
    features: ['Característica 1', 'Característica 2'],
    specifications: {
      spec1: 'valor1',
      spec2: 'valor2'
    },
    amazonAsin: 'TEST',
    amazonAffiliateLink: 'https://example.com',
    imageUrl: '/images/products/test.jpg',
    gallery: ['/images/products/test.jpg'],
    stock: 5,
    rating: 4.5,
    reviews: 10,
    isNew: false,
    isFeatured: true,
    slug: 'panel-test'
  }
];

// Función para obtener productos por categoría
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

// Función para obtener un producto por su slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Función para obtener una categoría por su slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// Función para obtener productos destacados
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

// Función para obtener productos nuevos
export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

// Función para buscar productos
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm)
  );
};
