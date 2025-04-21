import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategoriasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Categorías de Productos</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explora nuestra amplia gama de productos de energía solar organizados por categorías para encontrar exactamente lo que necesitas.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/categorias/${category.slug}`}
            className="group block"
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Ver productos
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
        <p className="mb-6">
          Si necesitas un producto específico o tienes preguntas sobre cuál es la mejor opción para tu proyecto, 
          nuestro equipo de expertos está listo para ayudarte.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          Contactar a un asesor
        </Link>
      </div>
    </div>
  );
}
