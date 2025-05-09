// Tipos para productos y categorías

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number | null;
  categoryId: string;
  features: string[];
  specifications: Record<string, string>;
  amazonAsin?: string;  // ASIN de Amazon (identificador único del producto)
  amazonAffiliateLink?: string;  // Enlace de afiliado completo
  imageUrl: string;
  gallery: string[];
  stock: number;
  rating: number;
  reviews: number;
  isNew: boolean;
  isFeatured: boolean;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
