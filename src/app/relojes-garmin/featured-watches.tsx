import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

// Filtrar sólo productos de la categoría Garmin
const garminProducts = products.filter(product => product.categoryId === 'garmin');

export default function FeaturedWatches() {
  return (
    <section id="featured-watches" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Relojes Garmin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Destacados</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora nuestra selección de relojes Garmin con tecnología solar, diseñados para aventureros y deportistas exigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {garminProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
            >
              {/* Overlay gradiente al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-indigo-600/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex items-center justify-center">
                <Link 
                  href={product.amazonAffiliateLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Ver en Amazon
                </Link>
              </div>

              {/* Badge de descuento */}
              {product.discountPrice && (
                <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                  {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                </div>
              )}

              {/* Imagen */}
              <div className="h-64 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">{product.reviews} reseñas</span>
                </div>

                {/* Características clave */}
                <ul className="mb-4 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <svg className="w-4 h-4 mr-1 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Precio */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.discountPrice.toFixed(2)}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {product.stock > 10 ? 'En stock' : product.stock > 0 ? `Solo ${product.stock} disponibles` : 'Agotado'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
