// Importación de tipos
import { Product, Category } from '../src/types/product';

// Categorías - mínimas
export const categories: Category[] = [
  {
    id: 'paneles',
    name: 'Paneles Solares',
    description: 'Paneles fotovoltaicos',
    imageUrl: '/images/categories/paneles-solares.jpg',
    slug: 'paneles-solares'
  }
];

// Productos - mínimos
export const products: Product[] = [
  {
    id: 'panel-test',
    name: 'Panel Test',
    description: 'Panel de prueba',
    price: 100,
    discountPrice: null,
    categoryId: 'paneles',
    features: ['Test'],
    specifications: {
      test: 'valor'
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

// Funciones auxiliares
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm)
  );
};
