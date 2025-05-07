// Definición de tipos para productos
import { Product, Category } from '../src/types/product';

// Categorías de productos
export const categories: Category[] = [
  {
    id: 'paneles',
    name: 'Paneles Solares',
    description: 'Paneles fotovoltaicos de alta eficiencia para convertir la energía solar en electricidad',
    imageUrl: '/images/categories/paneles-solares.jpg',
    slug: 'paneles-solares'
  },
  {
    id: 'baterias',
    name: 'Baterías',
    description: 'Almacenamiento de energía para sistemas solares, incluyendo opciones de litio y plomo-ácido',
    imageUrl: '/images/categories/baterias.jpg',
    slug: 'baterias'
  },
  {
    id: 'inversores',
    name: 'Inversores',
    description: 'Convertidores de corriente DC a AC para alimentar tus dispositivos y electrodomésticos',
    imageUrl: '/images/categories/inversores.jpg',
    slug: 'inversores'
  },
  {
    id: 'kits',
    name: 'Kits Solares',
    description: 'Soluciones completas que incluyen todos los componentes necesarios para tu instalación solar',
    imageUrl: '/images/categories/kits-solares.jpg',
    slug: 'kits-solares'
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    description: 'Complementos y partes para optimizar tu sistema de energía solar',
    imageUrl: '/images/categories/accesorios.jpg',
    slug: 'accesorios'
  },
  {
    id: 'monitoreo',
    name: 'Monitoreo',
    description: 'Dispositivos para controlar y supervisar el rendimiento de tu sistema solar',
    imageUrl: '/images/categories/monitoreo.jpg',
    slug: 'monitoreo'
  },
  {
    id: 'garmin',
    name: 'Relojes Garmin',
    description: 'Relojes inteligentes con tecnología solar para deportistas y amantes de la aventura',
    imageUrl: '/images/categories/garmin-watches.jpg',
    slug: 'relojes-garmin'
  }
];

// Productos
export const products: Product[] = [
  // Paneles Solares
  {
    id: 'panel-mono-400w',
    name: 'Panel Solar Monocristalino 400W',
    description: 'Panel solar monocristalino de alta eficiencia con 400W de potencia. Ideal para instalaciones residenciales y comerciales pequeñas.',
    price: 299.99,
    discountPrice: 279.99,
    categoryId: 'paneles',
    features: [
      'Potencia: 400W',
      'Tipo: Monocristalino',
      'Eficiencia: 21.3%',
      'Dimensiones: 1755 x 1038 x 35 mm',
      'Garantía: 25 años',
      'Tolerancia de potencia positiva: 0/+5W'
    ],
    specifications: {
      potencia: '400W',
      tipo: 'Monocristalino',
      voltaje: '24V',
      peso: '19.5 kg',
      dimensiones: '1755 x 1038 x 35 mm'
    },
    amazonAsin: 'B08G1LBLWB',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B08G1LBLWB?tag=solarfluidity-20',
    imageUrl: '/images/products/panel-mono-400w.jpg',
    gallery: [
      '/images/products/panel-mono-400w-1.jpg',
      '/images/products/panel-mono-400w-2.jpg',
      '/images/products/panel-mono-400w-3.jpg'
    ],
    stock: 15,
    rating: 4.8,
    reviews: 24,
    isNew: false,
    isFeatured: true,
    slug: 'panel-solar-monocristalino-400w'
  },
  {
    id: 'panel-mono-500w',
    name: 'Panel Solar Monocristalino 500W Premium',
    description: 'Panel solar de última generación con 500W de potencia y tecnología PERC para máxima eficiencia.',
    price: 399.99,
    discountPrice: null,
    categoryId: 'paneles',
    features: [
      'Potencia: 500W',
      'Tipo: Monocristalino PERC',
      'Eficiencia: 22.1%',
      'Dimensiones: 2115 x 1052 x 35 mm',
      'Garantía: 30 años',
      'Tolerancia de potencia positiva: 0/+5W'
    ],
    specifications: {
      potencia: '500W',
      tipo: 'Monocristalino PERC',
      voltaje: '24V',
      peso: '23 kg',
      dimensiones: '2115 x 1052 x 35 mm'
    },
    amazonAsin: 'B092R7VFC5',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B092R7VFC5?tag=solarfluidity-20',
    imageUrl: '/images/products/panel-mono-500w.jpg',
    gallery: [
      '/images/products/panel-mono-500w-1.jpg',
      '/images/products/panel-mono-500w-2.jpg'
    ],
    stock: 8,
    rating: 5.0,
    reviews: 12,
    isNew: true,
    isFeatured: true,
    slug: 'panel-solar-monocristalino-500w-premium'
  },
  
  // Baterías
  {
    id: 'bateria-litio-48v-200ah',
    name: 'Batería de Litio 48V 200Ah',
    description: 'Batería de litio de alta capacidad para sistemas solares. Larga duración y excelente rendimiento.',
    price: 1899.99,
    discountPrice: null,
    categoryId: 'baterias',
    features: [
      'Capacidad: 200Ah',
      'Voltaje: 48V',
      'Química: Litio-ion',
      'Ciclos de vida: >4000 ciclos',
      'BMS integrado',
      'Garantía: 10 años'
    ],
    specifications: {
      capacidad: '200Ah',
      voltaje: '48V',
      quimica: 'Litio-ion',
      peso: '45 kg',
      dimensiones: '650 x 350 x 180 mm'
    },
    amazonAsin: 'B08T6DM3QH',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B08T6DM3QH?tag=solarfluidity-20',
    imageUrl: '/images/products/bateria-litio-48v-200ah.jpg',
    gallery: [
      '/images/products/bateria-litio-48v-200ah-1.jpg',
      '/images/products/bateria-litio-48v-200ah-2.jpg'
    ],
    stock: 6,
    rating: 4.9,
    reviews: 18,
    isNew: false,
    isFeatured: true,
    slug: 'bateria-litio-48v-200ah'
  },
  {
    id: 'bateria-plomo-12v-150ah',
    name: 'Batería AGM 12V 150Ah Ciclo Profundo',
    description: 'Batería de plomo-ácido AGM de ciclo profundo, ideal para sistemas solares de menor presupuesto.',
    price: 349.99,
    discountPrice: 329.99,
    categoryId: 'baterias',
    features: [
      'Capacidad: 150Ah',
      'Voltaje: 12V',
      'Química: AGM (Plomo-ácido)',
      'Ciclos de vida: >500 ciclos',
      'Libre de mantenimiento',
      'Garantía: 2 años'
    ],
    specifications: {
      capacidad: '150Ah',
      voltaje: '12V',
      quimica: 'AGM (Plomo-ácido)',
      peso: '38 kg',
      dimensiones: '485 x 170 x 240 mm'
    },
    amazonAsin: 'B07RRLF7ZY',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B07RRLF7ZY?tag=solarfluidity-20',
    imageUrl: '/images/products/bateria-agm-12v-150ah.jpg',
    gallery: [
      '/images/products/bateria-agm-12v-150ah-1.jpg',
      '/images/products/bateria-agm-12v-150ah-2.jpg'
    ],
    stock: 20,
    rating: 4.5,
    reviews: 35,
    isNew: false,
    isFeatured: false,
    slug: 'bateria-agm-12v-150ah-ciclo-profundo'
  },
  
  // Inversores
  {
    id: 'inversor-3kw-hibrido',
    name: 'Inversor Híbrido 3kW 48V',
    description: 'Inversor híbrido con MPPT integrado para sistemas solares conectados a red con respaldo de baterías.',
    price: 1499.99,
    discountPrice: 1399.99,
    categoryId: 'inversores',
    features: [
      'Potencia: 3kW',
      'Voltaje de batería: 48V',
      'MPPT integrado',
      'Compatible con red eléctrica',
      'Monitoreo WiFi',
      'Garantía: 5 años'
    ],
    specifications: {
      potencia: '3kW',
      voltaje_bateria: '48V',
      eficiencia: '>97%',
      peso: '18 kg',
      dimensiones: '460 x 340 x 120 mm'
    },
    amazonAsin: 'B07ZY1YNLD',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B07ZY1YNLD?tag=solarfluidity-20',
    imageUrl: '/images/products/inversor-hibrido-3kw.jpg',
    gallery: [
      '/images/products/inversor-hibrido-3kw-1.jpg',
      '/images/products/inversor-hibrido-3kw-2.jpg'
    ],
    stock: 10,
    rating: 4.7,
    reviews: 22,
    isNew: false,
    isFeatured: true,
    slug: 'inversor-hibrido-3kw-48v'
  },
  
  // Kits
  {
    id: 'kit-solar-5kw',
    name: 'Kit Solar 5kW Residencial Completo',
    description: 'Kit solar completo para instalación residencial, incluye paneles, baterías, inversor y accesorios.',
    price: 2499.99,
    discountPrice: null,
    categoryId: 'kits',
    features: [
      '12 Paneles solares 400W monocristalinos',
      'Inversor híbrido 5kW',
      'Baterías de litio 48V 200Ah',
      'Sistema de montaje completo',
      'Cables y protecciones',
      'Guía de instalación'
    ],
    specifications: { 
      "potenciaTotal": "5kW", 
      "almacenamiento": "9.6kWh", 
      "paneles": "12 x 400W", 
      "inversor": "5kW híbrido", 
      "garantia": "5 años sistema completo" 
    },
    amazonAsin: 'B09B495SCG',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B09B495SCG?tag=solarfluidity-20',
    imageUrl: '/images/products/kit-solar-5kw.jpg',
    gallery: [
      '/images/products/kit-solar-5kw-1.jpg',
      '/images/products/kit-solar-5kw-2.jpg',
      '/images/products/kit-solar-5kw-3.jpg'
    ],
    stock: 4,
    rating: 4.9,
    reviews: 16,
    isNew: false,
    isFeatured: true,
    slug: 'kit-solar-5kw-residencial-completo'
  },
  
  // Accesorios
  {
    id: 'montaje-techo-plano',
    name: 'Sistema de Montaje para Techo Plano',
    description: 'Sistema de montaje ajustable para instalar paneles solares en techos planos.',
    price: 199.99,
    discountPrice: 179.99,
    categoryId: 'accesorios',
    features: [
      'Compatible con paneles de 60 y 72 celdas',
      'Ángulo ajustable: 10° a 30°',
      'Material: Aluminio anodizado y acero inoxidable',
      'Resistente a condiciones climáticas extremas',
      'Instalación rápida sin perforar el techo',
      'Incluye todos los accesorios de montaje'
    ],
    specifications: {
      material: 'Aluminio y acero inoxidable',
      capacidad: 'Hasta 4 paneles',
      angulo: 'Ajustable 10-30 grados',
      peso: '8.5 kg',
      garantia: '10 años'
    },
    amazonAsin: 'B07GVNN3Z2',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B07GVNN3Z2?tag=solarfluidity-20',
    imageUrl: '/images/products/montaje-techo-plano.jpg',
    gallery: [
      '/images/products/montaje-techo-plano-1.jpg',
      '/images/products/montaje-techo-plano-2.jpg'
    ],
    stock: 25,
    rating: 4.6,
    reviews: 32,
    isNew: false,
    isFeatured: false,
    slug: 'sistema-montaje-techo-plano'
  },
  
  // Monitoreo
  {
    id: 'monitor-energia-wifi',
    name: 'Monitor de Energía WiFi',
    description: 'Dispositivo de monitoreo para sistemas solares con acceso remoto mediante aplicación móvil.',
    price: 149.99,
    discountPrice: null,
    categoryId: 'monitoreo',
    features: [
      'Conectividad WiFi para monitoreo remoto',
      'Aplicación móvil para iOS y Android',
      'Medición en tiempo real de generación y consumo',
      'Notificaciones personalizables',
      'Gráficos y estadísticas detalladas',
      'Exportación de datos a CSV'
    ],
    specifications: {
      conectividad: 'WiFi 2.4GHz',
      alimentacion: '5V DC',
      consumo: '<2W',
      precision: '±1%',
      dimensiones: '95 x 65 x 25 mm'
    },
    amazonAsin: 'B085LB2TQK',
    amazonAffiliateLink: 'https://www.amazon.com/dp/B085LB2TQK?tag=solarfluidity-20',
    imageUrl: '/images/products/monitor-energia-wifi.jpg',
    gallery: [
      '/images/products/monitor-energia-wifi-1.jpg',
      '/images/products/monitor-energia-wifi-2.jpg'
    ],
    stock: 18,
    rating: 4.4,
    reviews: 29,
    isNew: true,
    isFeatured: false,
    slug: 'monitor-energia-wifi'
  },
  
  // Relojes Garmin
  {
    id: 'garmin-instinct-2-solar',
    name: 'Garmin Instinct 2 Solar, GPS Outdoor Watch',
    description: 'Reloj GPS multideporte con carga solar, diseñado para resistir los entornos más exigentes con batería de duración ilimitada en modo reloj.',
    price: 449.99,
    discountPrice: 399.99,
    categoryId: 'garmin',
    features: [
      'Batería infinita con modo reloj cuando se usa con suficiente luz solar',
      'Construcción resistente según estándares militares de EE. UU.',
      'GPS, GLONASS y Galileo para un seguimiento preciso',
      'Monitoreo avanzado de salud: VO2 max, body battery, sueño',
      'Más de 30 apps deportivas preinstaladas',
      'Resistente al agua hasta 100 metros'
    ],
    specifications: {
      modelo: 'Instinct 2 Solar',
      color: 'Negro Grafito',
      tamano_pantalla: '0.9 pulgadas',
      duracion_bateria: 'Ilimitada en modo reloj con solar',
      resistencia_agua: '10 ATM (100 metros)',
      peso: '53 gramos'
    },
    amazonAsin: 'B09BVL4NLK',
    amazonAffiliateLink: 'https://amzn.to/3XQGrOO',
    imageUrl: '/images/products/garmin-instinct-2-solar.jpg',
    gallery: [
      '/images/products/garmin-instinct-2-solar-1.jpg',
      '/images/products/garmin-instinct-2-solar-2.jpg',
      '/images/products/garmin-instinct-2-solar-3.jpg'
    ],
    stock: 15,
    rating: 4.7,
    reviews: 1247,
    isNew: true,
    isFeatured: true,
    slug: 'garmin-instinct-2-solar-gps-watch'
  },
  {
    id: 'garmin-fenix-7-solar',
    name: 'Garmin Fénix 7 Solar, Reloj Multideporte Premium',
    description: 'Reloj multideporte premium con pantalla táctil, carga solar, mapas a color, música y funciones avanzadas de entrenamiento y navegación. Rendimiento excepcional para atletas y aventureros exigentes.',
    price: 799.99,
    discountPrice: 699.99,
    categoryId: 'garmin',
    features: [
      'Pantalla táctil a color con carga solar integrada',
      'Mapas TopoActive preinstalados a todo color',
      'Hasta 22 días de duración de batería en modo reloj con solar',
      'Sensores ABC: altímetro, barómetro y brújula',
      'Almacenamiento de música y pagos sin contacto Garmin Pay',
      'Monitorización avanzada de rendimiento y recuperación'
    ],
    specifications: {
      modelo: 'Fénix 7 Solar',
      color: 'Plata/Negro',
      tamano_pantalla: '1.3 pulgadas',
      duracion_bateria: 'Hasta 22 días con solar',
      resistencia_agua: '10 ATM (100 metros)',
      conectividad: 'Bluetooth, ANT+, WiFi'
    },
    amazonAsin: 'B09NMG12HY',
    amazonAffiliateLink: 'https://amzn.to/4lGYQYc',
    imageUrl: '/images/products/garmin-fenix-7-solar.jpg',
    gallery: [
      '/images/products/garmin-fenix-7-solar-1.jpg',
      '/images/products/garmin-fenix-7-solar-2.jpg'
    ],
    stock: 8,
    rating: 4.9,
    reviews: 856,
    isNew: true,
    isFeatured: true,
    slug: 'garmin-fenix-7-solar-reloj-multideporte'
  },
  {
    id: 'garmin-enduro-2',
    name: 'Garmin Enduro 2, Reloj Ultra Resistencia con Solar',
    description: 'Reloj de ultra resistencia con carga solar, diseñado para atletas de resistencia extrema que buscan un rendimiento sin compromisos en carreras y aventuras de larga duración.',
    price: 999.99,
    discountPrice: null,
    categoryId: 'garmin',
    features: [
      'Batería de hasta 150 horas en modo GPS con carga solar',
      'Linterna LED integrada con modos de alta y baja intensidad',
      'Carcasa de titanio ultraligera con cristal Power Sapphire',
      'Mapas TopoActive a color con navegación giro a giro',
      'Métricas avanzadas para corredores de trail y ultramaratón',
      'SatIQ para optimizar consumo de batería y precisión GPS'
    ],
    specifications: {
      modelo: 'Enduro 2',
      color: 'Titanio/Gris',
      tamano_pantalla: '1.4 pulgadas',
      duracion_bateria: 'Hasta 150 horas en GPS con solar',
      resistencia_agua: '10 ATM (100 metros)',
      peso: '70 gramos'
    },
    amazonAsin: 'B0B6G3LXRG',
    amazonAffiliateLink: 'https://amzn.to/4lGYQYc',
    imageUrl: '/images/products/garmin-enduro-2.jpg',
    gallery: [
      '/images/products/garmin-enduro-2-1.jpg',
      '/images/products/garmin-enduro-2-2.jpg'
    ],
    stock: 5,
    rating: 4.8,
    reviews: 423,
    isNew: false,
    isFeatured: true,
    slug: 'garmin-enduro-2-reloj-ultra-resistencia'
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
