import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getCategoryBySlug } from '@/data/products';

type Props = {
  params: {
    slug: string
  }
}

export default function ProductDetailPage(props: Props) {
  const { params } = props;
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
        {/* Product Images - Mejorado con galería interactiva */}
        <div>
          <div className="relative h-[450px] mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-md group">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />

            {product.isNew && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                Nuevo
              </div>
            )}
            
            {/* Etiqueta de descuento con porcentaje */}
            {product.discountPrice && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% Descuento
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.gallery.map((image: string, index: number) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-500 shadow-sm transition-transform hover:scale-105">
                <Image
                  src={image}
                  alt={`${product.name} - imagen ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 15vw"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info - Rediseñado con enlaces de afiliados */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          
          {/* Rating section */}
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
            
            {/* ASIN badge if available */}
            {product.amazonAsin && (
              <span className="ml-4 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                ASIN: {product.amazonAsin}
              </span>
            )}
          </div>
          
          {/* Price section with improved styling */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            {product.discountPrice ? (
              <div className="flex flex-wrap items-baseline">
                <span className="text-3xl font-bold text-blue-600">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm px-2 py-1 rounded font-medium">
                  Ahorra ${(product.price - product.discountPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            )}
            
            {/* Stock status */}
            <div className="flex items-center mt-2">
              {product.stock > 0 ? (
                <div className="flex items-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">En stock ({product.stock} disponibles)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm font-medium">Agotado</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {/* Product actions - con botón de afiliado de Amazon */}
          <div className="flex flex-col gap-4 mb-8">
            {product.amazonAffiliateLink ? (
              <a 
                href={product.amazonAffiliateLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 px-8 rounded-lg flex-1 flex items-center justify-center font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2" fill="currentColor">
                  <path d="M15.397 13.167c-.498.29-.998.776-1.498.776-.997 0-1.498-1.064-2.498-1.064-.799 0-1.199.968-2.099.968-1.398 0-2.097-2.129-2.996-4.453.8-1.842 1.499-2.904 2.597-2.904.8 0 1.199.775 2.199.775.997 0 1.598-.775 2.497-.775 1.3 0 2.098 1.064 2.997 3.227-1.797.484-2.497 1.259-1.199 3.45zm-3.497-7.138c-.398-.193-.898-.387-1.498-.387-2.996 0-5.293 2.904-5.992 6.421-.699 3.519.698 6.423 3.794 6.423.6 0 1.099-.194 1.699-.387-.2.193-.4.581-.4 1.163 0 .775.499 1.55 1.299 1.55.399 0 .699-.194.998-.775-1.198-.97-1.098-1.744-.599-3.488-.2.193-.599.387-.898.387-1.299 0-1.699-1.938-1.199-4.26.499-2.323 1.498-4.26 2.796-4.26.3 0 .699.193.899.387-.2-1.742-.4-2.129-1.09-2.323.47-.582.869-.97 1.399-.97.698 0 1.198.581 1.198 1.161 0 .582-.2.97-.399 1.357z"/>
                </svg>
                Ver en Amazon
              </a>
            ) : (
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg flex-1 flex items-center justify-center font-bold shadow-md transition-colors"
                disabled={product.stock <= 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {product.stock > 0 ? 'Añadir al carrito' : 'Agotado'}
              </button>
            )}
            
            <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Guardar para después
            </button>
          </div>
          
          {/* Product highlights */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Lo que debes saber</h3>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-start text-sm text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs - Mejorados con diseño más moderno */}
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
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Características principales</h3>
            <ul className="space-y-3 mb-8">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Affiliate disclosure */}
            {product.amazonAffiliateLink && (
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mb-8">
                <p><strong>Nota:</strong> Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables. Esto no afecta el precio que pagas por los productos.</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Especificaciones</h3>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600 capitalize">{key.split('_').join(' ')}</span>
                  <span className="font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
            
            {/* Información adicional */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3">Información de envío</h4>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="text-sm">Envío disponible a nivel nacional</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm">Garantía de {product.specifications.garantia || '1 año'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
