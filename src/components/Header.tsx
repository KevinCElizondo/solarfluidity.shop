import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white border-b border-blue-500/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-md group-hover:opacity-30 group-hover:blur-lg transition-all"></div>
            <Image 
              src="/solar-logo.svg" 
              alt="SolarFluidity Logo" 
              fill 
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-sm">SolarFluidity</span>
            <span className="text-xs text-blue-200 -mt-1">Energía del Futuro</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {[
            { href: "/", label: "Inicio" },
            { href: "/categorias", label: "Categorías" },
            { href: "/productos", label: "Productos" },
            { href: "/blog", label: "Blog" },
            { href: "/sobre-nosotros", label: "Sobre Nosotros" },
            { href: "/contacto", label: "Contacto" }
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative group py-1 overflow-hidden"
            >
              <span className="relative z-10 text-blue-100 group-hover:text-white transition-colors">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/contacto" 
            className="hidden md:flex bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-1.5 px-4 rounded-full text-sm shadow-lg shadow-blue-900/20 transition-all duration-300 items-center gap-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <span>Contáctanos</span>
          </Link>
          
          <button 
            className="md:hidden text-white focus:outline-none bg-blue-800/50 p-2 rounded-md hover:bg-blue-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900 to-indigo-900 border-t border-blue-700/30">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/categorias", label: "Categorías" },
                { href: "/productos", label: "Productos" },
                { href: "/blog", label: "Blog" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                { href: "/contacto", label: "Contacto" }
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-blue-100 hover:text-white py-2 px-3 rounded-md hover:bg-blue-800/30 transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
