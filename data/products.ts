// Definición de tipos para productos
import { Product, Category } from '../src/types/product';

// Categorías de productos
export const categories: Category[] = [
  {
    id: 'paneles',
    name: 'Paneles Solares',
    description: 'Paneles fotovoltaicos de alta eficiencia',
    imageUrl: '/images/categories/paneles-solares.jpg',
    slug: 'paneles-solares'
  },
  {
    id: 'baterias',
    name: 'Baterías',
    description: 'Almacenamiento de energía para sistemas solares',
    imageUrl: '/images/categories/baterias.jpg',
    slug: 'baterias'
  },
  {
    id: 'inversores',
    name: 'Inversores',
    description: 'Convertidores de corriente DC a AC',
    imageUrl: '/images/categories/inversores.jpg',
    slug: 'inversores'
  },
  {
    id: 'kits',
    name: 'Kits Solares',
    description: 'Soluciones completas para instalación solar',
    imageUrl: '/images/categories/kits-solares.jpg',
    slug: 'kits-solares'
  },
  {
    id: 'garmin',
    name: 'Relojes Garmin',
    description: 'Relojes inteligentes con tecnología solar',
    imageUrl: '/images/categories/garmin-watches.jpg',
    slug: 'relojes-garmin'
  }
];

// Productos
export const products: Product[] = [
  // Producto de prueba 1
  {
    id: 'panel-mono-400w',
    name: 'Panel Solar Monocristalino 400W',
    description: 'Panel solar monocristalino de alta eficiencia',
    price: 299.99,
    discountPrice: 279.99,
    categoryId: 'paneles',
    features: [
      'Potencia: 400W',
      'Tipo: Monocristalino',
      'Eficiencia: 21.3%'
    ],
    specifications: {
      potencia: '400W',
      tipo: 'Monocristalino',
      voltaje: '24V'
    },
    amazonAsin: 'B08G1LBLWB',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B08G1LBLWB?tag=solarfluidity-20',
    imageUrl: '/images/products/panel-mono-400w.jpg',
    gallery: [
      '/images/products/panel-mono-400w-1.jpg'
    ],
    stock: 15,
    rating: 4.8,
    reviews: 24,
    isNew: false,
    isFeatured: true,
    slug: 'panel-solar-monocristalino-400w'
  },
  
  // Producto de prueba 2
  {
    id: 'kit-solar-5kw',
    name: 'Kit Solar 5kW Residencial',
    description: 'Kit solar completo para instalación residencial',
    price: 2499.99,
    discountPrice: null,
    categoryId: 'kits',
    features: [
      '12 Paneles solares 400W',
      'Inversor híbrido 5kW',
      'Baterías de litio 48V'
    ],
    specifications: {
      potenciaTotal: '5kW',
      almacenamiento: '9.6kWh',
      paneles: '12 x 400W'
    },
    amazonAsin: 'B09QKZQM8G',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B09QKZQM8G?tag=solarfluidity-20',
    imageUrl: '/images/products/kit-solar-5kw.jpg',
    gallery: [
      '/images/products/kit-solar-5kw-1.jpg'
    ],
    stock: 3,
    rating: 4.9,
    reviews: 14,
    isNew: true,
    isFeatured: true,
    slug: 'kit-solar-5kw-residencial'
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
