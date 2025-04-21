import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, categories } from '@/data/products';

export default function ProductosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h1>
      
      {/* Categorías */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="group block"
            >
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Productos Destacados */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.filter(p => p.isFeatured).map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/productos/${product.slug}`}>
                <div className="relative h-56">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Nuevo
                    </div>
                  )}
                  {product.discountPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Oferta
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/categorias/${categories.find(c => c.id === product.categoryId)?.slug}`}>
                  <p className="text-blue-600 text-sm mb-1">
                    {categories.find(c => c.id === product.categoryId)?.name}
                  </p>
                </Link>
                <Link href={`/productos/${product.slug}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <p className="text-lg font-bold text-blue-600">${product.discountPrice.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</p>
                      </div>
                    ) : (
                      <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
                    )}
                  </div>
                  <Link href={`/productos/${product.slug}`} className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/productos/todos" 
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </div>
  );
}
