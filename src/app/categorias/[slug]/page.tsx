import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getProductsByCategory } from '@/data/products';

export default function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }
  
  const products = getProductsByCategory(category.id);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/categorias" className="text-gray-500 hover:text-blue-600">Categorías</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{category.name}</span>
      </div>
      
      {/* Category Hero */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-12">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
            <p className="text-white/90 max-w-md">{category.description}</p>
          </div>
        </div>
      </div>
      
      {/* Filter options - This could be expanded with actual filter functionality */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Ordenar por:</span>
          <select className="border-gray-300 rounded-md text-gray-700">
            <option>Relevancia</option>
            <option>Precio: De menor a mayor</option>
            <option>Precio: De mayor a menor</option>
            <option>Más vendidos</option>
          </select>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <span className="text-gray-700 mr-2">Mostrar:</span>
          <select className="border-gray-300 rounded-md text-gray-700">
            <option>12 por página</option>
            <option>24 por página</option>
            <option>36 por página</option>
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-6">No se encontraron productos en esta categoría.</p>
          <Link href="/productos" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
            Ver todos los productos
          </Link>
        </div>
      )}
      
      {/* Pagination - Can be implemented with actual functionality later */}
      {products.length > 0 && (
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              Anterior
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium">
              1
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              Siguiente
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
