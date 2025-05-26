import { Product } from '../types/product';

// Definir la extensión de Product para incluir modelo y enlace afiliado
export interface GarminWatch extends Product {
  model: string;
}

// Datos estáticos de los relojes Garmin para evitar dependencia de API
export const garminWatches: GarminWatch[] = [
  {
    id: "garmin-fenix-8-solar",
    name: "Garmin Fénix 8 Solar",
    description: "El reloj GPS multideporte definitivo con tecnología de carga solar para aventuras extremas.",
    price: 1100.00,
    discountPrice: null,
    categoryId: "garmin-watches",
    imageUrl: "/images/relojes/fenix8-solar.svg",
    features: [
      "Lente Power Glass™ para carga solar",
      "Hasta 39 días de duración de batería con carga solar",
      "GPS multibanda y multisistema de alta precisión",
      "Mapas TopoActive preinstalados",
      "Seguimiento avanzado de actividades y métricas de salud 24/7"
    ],
    specifications: {
      "Batería": "Hasta 39 días con carga solar",
      "Pantalla": "Lente Power Glass™",
      "GPS": "Multibanda y multisistema",
      "Resistencia al agua": "10 ATM"
    },
    amazonAffiliateLink: "https://amzn.to/3O07ZQl",
    gallery: ["/images/relojes/fenix8-solar.svg"],
    stock: 10,
    rating: 4.8,
    reviews: 120,
    isNew: true,
    isFeatured: true,
    slug: "garmin-fenix-8-solar",
    model: "fenix8"
  },
  {
    id: "garmin-enduro-3",
    name: "Garmin Enduro 3",
    description: "Reloj GPS ultraresistente con carga solar diseñado para deportistas de ultra resistencia.",
    price: 851.00,
    discountPrice: null,
    categoryId: "garmin-watches",
    imageUrl: "/images/relojes/enduro3.svg",
    features: [
      "Batería de duración extrema con carga solar",
      "Hasta 90 días en modo reloj con carga solar",
      "Carcasa de titanio ultraligera y resistente",
      "Linterna LED integrada de alta potencia",
      "Métricas avanzadas para deportes de ultra resistencia"
    ],
    specifications: {
      "Batería": "Hasta 90 días con carga solar",
      "Material": "Carcasa de titanio",
      "Características": "Linterna LED integrada",
      "Resistencia al agua": "10 ATM"
    },
    amazonAffiliateLink: "https://amzn.to/3WMkzst",
    gallery: ["/images/relojes/enduro3.svg"],
    stock: 8,
    rating: 4.9,
    reviews: 85,
    isNew: true,
    isFeatured: true,
    slug: "garmin-enduro-3",
    model: "enduro3"
  },
  {
    id: "garmin-forerunner-965",
    name: "Garmin Forerunner 965",
    description: "Reloj GPS avanzado para corredores con pantalla AMOLED y tecnología solar.",
    price: 499.99,
    discountPrice: null,
    categoryId: "garmin-watches",
    imageUrl: "/images/relojes/forerunner965.svg",
    features: [
      "Pantalla AMOLED brillante con carga solar",
      "Hasta 23 días de batería con carga solar",
      "Métricas avanzadas de rendimiento para corredores",
      "Mapas a color y navegación detallada",
      "Análisis de entrenamiento con IA y recomendaciones"
    ],
    specifications: {
      "Batería": "Hasta 23 días con carga solar",
      "Pantalla": "AMOLED con carga solar",
      "Métricas": "Avanzadas para corredores",
      "Navegación": "Mapas a color"
    },
    amazonAffiliateLink: "https://amzn.to/3WChb1Z",
    gallery: ["/images/relojes/forerunner965.svg"],
    stock: 12,
    rating: 4.7,
    reviews: 95,
    isNew: true,
    isFeatured: false,
    slug: "garmin-forerunner-965",
    model: "forerunner965"
  },
  {
    id: "garmin-instinct-2-solar",
    name: "Garmin Instinct 2 Solar",
    description: "Reloj GPS resistente con carga solar y duración de batería ilimitada en condiciones óptimas.",
    price: 229.99,
    discountPrice: null,
    categoryId: "garmin-watches",
    imageUrl: "/images/relojes/instinct2-solar.svg",
    features: [
      "Duración de batería potencialmente ilimitada con carga solar",
      "Diseño resistente a golpes y sumergible hasta 100m",
      "GPS, GLONASS y Galileo para navegación precisa",
      "Seguimiento de actividad y salud 24/7",
      "Múltiples perfiles de deporte preinstalados"
    ],
    specifications: {
      "Batería": "Potencialmente ilimitada con carga solar",
      "Resistencia": "Sumergible hasta 100m",
      "Navegación": "GPS, GLONASS y Galileo",
      "Perfiles": "Múltiples deportes preinstalados"
    },
    amazonAffiliateLink: "https://amzn.to/45cNPLe",
    gallery: ["/images/relojes/instinct2-solar.svg"],
    stock: 15,
    rating: 4.6,
    reviews: 150,
    isNew: false,
    isFeatured: true,
    slug: "garmin-instinct-2-solar",
    model: "instinct2"
  }
];
