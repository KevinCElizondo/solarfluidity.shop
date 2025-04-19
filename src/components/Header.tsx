import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image 
              src="/solar-logo.svg" 
              alt="SolarFluidity Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold">SolarFluidity</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition">
            Inicio
          </Link>
          <Link href="/categorias" className="hover:text-blue-200 transition">
            Categorías
          </Link>
          <Link href="/productos" className="hover:text-blue-200 transition">
            Productos
          </Link>
          <Link href="/blog" className="hover:text-blue-200 transition">
            Blog
          </Link>
          <Link href="/sobre-nosotros" className="hover:text-blue-200 transition">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="hover:text-blue-200 transition">
            Contacto
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
