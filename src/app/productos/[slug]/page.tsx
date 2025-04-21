import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getCategoryBySlug } from '@/data/products';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }
  
  const category = getCategoryBySlug(product.categoryId);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/productos" className="text-gray-500 hover:text-blue-600">Productos</Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/categorias/${category.slug}`} className="text-gray-500 hover:text-blue-600">
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-96 mb-4 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.gallery.map((image, index) => (
              <div key={index} className="relative h-24 rounded-md overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-500">
                <Image
                  src={image}
                  alt={`${product.name} - imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reseñas)</span>
          </div>
          
          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-blue-600">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                  Ahorra ${(product.price - product.discountPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={product.stock > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                {product.stock > 0 ? `En stock (${product.stock} disponibles)` : "Agotado"}
              </span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
              <span className="text-gray-600">Envío gratuito en Costa Rica para pedidos superiores a $500</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Cantidad</label>
              <div className="flex items-center">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 h-10 w-10 rounded-l flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input 
                  type="number" 
                  className="h-10 w-16 border-gray-200 text-center" 
                  min="1" 
                  max={product.stock} 
                  defaultValue="1"
                />
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 h-10 w-10 rounded-r flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg flex-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Añadir al carrito
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Favorito
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200 mb-8">
          <div className="flex overflow-x-auto">
            <button className="text-blue-600 border-b-2 border-blue-600 py-4 px-6 font-medium">
              Descripción
            </button>
            <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium">
              Especificaciones
            </button>
            <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium">
              Reseñas ({product.reviews})
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Detalles del producto</h2>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Características principales</h3>
            <ul className="space-y-2 mb-8">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Especificaciones</h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {/* This would be implemented with a component that fetches related products from the same category */}
    </div>
  );
}
