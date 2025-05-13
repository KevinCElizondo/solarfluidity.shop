import { NextResponse } from 'next/server';
import type { Product } from '@/types/product';

// Productos de muestra para el desarrollo local
const sampleProducts: Product[] = [
  {
    id: "kit-solar-5kw",
    name: "Kit Solar 5kW Residencial",
    price: 2499.99,
    description: "Kit completo para energía solar residencial con paneles, inversor y estructura de montaje.",
    categoryId: "kits",
    rating: 4.9,
    stock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/71dKmKpILdL._AC_SL1500_.jpg"
  },
  {
    id: "panel-solar-400w",
    name: "Panel Solar 400W Monocristalino",
    price: 299.99,
    description: "Panel solar de alta eficiencia con 25 años de garantía.",
    categoryId: "paneles",
    rating: 4.8,
    stock: 25,
    imageUrl: "https://m.media-amazon.com/images/I/61G+s3YPDeL._AC_SL1200_.jpg"
  },
  {
    id: "inversor-2000w",
    name: "Inversor Solar 2000W",
    price: 599.99,
    description: "Inversor solar híbrido con MPPT integrado y monitoreo WiFi.",
    categoryId: "inversores",
    rating: 4.7,
    stock: 15,
    imageUrl: "https://m.media-amazon.com/images/I/71zyFI0A1CL._AC_SL1500_.jpg"
  }
];

export async function GET() {
  return NextResponse.json(sampleProducts);
}
