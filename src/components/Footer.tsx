"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 text-white pt-16 pb-8 border-t border-blue-500/30 dark:border-blue-900/50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute h-40 w-40 border border-blue-500/20 rounded-full -top-10 right-20 animate-pulse"></div>
          <div className="absolute h-60 w-60 border border-indigo-500/20 rounded-full bottom-10 -left-20 animate-pulse animation-delay-700"></div>
          <div className="absolute h-20 w-20 border border-cyan-500/20 rounded-full top-40 right-1/4 animate-pulse animation-delay-1000"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-full filter blur-3xl -top-20 -right-20"></div>      
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-5 group">
              <div className="relative w-8 h-8 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-md"></div>
                <Image 
                  src="/solar-logo.svg" 
                  alt="SolarFluidity Logo" 
                  width={32}
                  height={32}
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">SolarFluidity</h3>
            </div>
            <p className="text-blue-100 mb-5 border-l-2 border-blue-500/30 pl-3 text-sm">
              Su tienda especializada en relojes Garmin con tecnología solar, para aventureros que buscan la máxima duración de batería en sus aventuras.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"></span>
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Inicio</Link></li>
              <li><Link href="/categorias" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Categorías</Link></li>
              <li><Link href="/productos" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Productos</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Blog</Link></li>
              <li><Link href="/sobre-nosotros" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors"></span>Contacto</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-lg font-medium border-l-3 border-blue-500 pl-3 mb-6">Relojes Garmin Solar</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/relojes-garmin#fenix8" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Garmin Fenix 8 Solar</span>
              </Link>
              <Link href="/relojes-garmin#enduro3" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Garmin Enduro 3</span>
              </Link>
              <Link href="/relojes-garmin#forerunner965" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Garmin Forerunner 965</span>
              </Link>
              <Link href="/relojes-garmin#instinct2" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Garmin Instinct 2 Solar</span>
              </Link>
              <Link href="/relojes-garmin#technology" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Tecnología Solar</span>
              </Link>
              <Link href="/relojes-garmin#benefits" className="flex items-center group">
                <span className="block w-2 h-2 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Beneficios</span>
              </Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contacto
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"></span>
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start group">
                <div className="p-2 mr-3 rounded-lg bg-blue-800/40 backdrop-blur-sm border border-blue-700/30 group-hover:bg-blue-700/50 transition-colors">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-blue-200">Correo electrónico</span>
                  <span className="text-white font-medium">info@solarfluidity.shop</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="p-2 mr-3 rounded-lg bg-blue-800/40 backdrop-blur-sm border border-blue-700/30 group-hover:bg-blue-700/50 transition-colors">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-blue-200">Ubicación</span>
                  <span className="text-white font-medium">Global | 100% Online</span>
                </div>
              </li>
              {/* Eliminada sección de horario de atención */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="text-sm text-blue-100/80">
              <p className="items-center bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 inline-flex">
                <svg className="h-4 w-4 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                &copy; {new Date().getFullYear()} SolarFluidity.shop <span className="inline-block h-1 w-1 rounded-full bg-cyan-400 mx-2"></span> Tecnología Solar del Futuro
              </p>
            </div>
            <div className="text-sm text-blue-100/80 lg:text-right">
              <p className="backdrop-blur-md bg-blue-900/20 p-3 rounded-lg inline-block border border-blue-800/30">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-0.5 rounded-md mr-2 font-medium shadow-sm">AFFILIATE</span> 
                Como participante en el Programa de Afiliados de Amazon, este sitio obtiene ingresos por las compras realizadas a través de los enlaces de afiliado.
              </p>
              <p className="flex flex-wrap lg:justify-end gap-4 mt-4">
                <Link href="/politica-de-privacidad" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center hover:translate-y-[-2px] transform">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Política de Privacidad
                </Link> 
                <Link href="/terminos-y-condiciones" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center hover:translate-y-[-2px] transform">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Términos y Condiciones
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
