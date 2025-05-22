import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WatchCard from '@/components/WatchCard';

export default function GarminWatchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950 text-white">
      {/* Hero Section para Relojes Garmin */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full opacity-20">
            {/* Patrón de líneas diagonal */}
            <div className="absolute h-full w-full bg-[url('/images/pattern-lines.svg')] bg-repeat opacity-10"></div>
            {/* Elementos decorativos animados */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Relojes Garmin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solar</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Experimenta la libertad de la energía inagotable con los relojes Garmin Solar. 
                Diseñados para aventureros que desafían los límites, con batería que se recarga con la luz del sol.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link 
                  href="#featured-watches" 
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
                >
                  Ver Relojes
                </Link>
                <Link 
                  href="#technology" 
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all duration-300"
                >
                  Tecnología Solar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* Círculos decorativos */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-[20px] rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <Image
                  src="/images/products/garmin-instinct-2-solar.jpg"
                  alt="Garmin Instinct 2 Solar"
                  width={400}
                  height={400}
                  className="absolute inset-0 m-auto z-10 object-contain drop-shadow-2xl animate-float"
                />
                {/* Texto flotante de características */}
                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 animate-float-delay">
                  <span className="text-white text-sm font-medium">Batería infinita</span>
                </div>
                <div className="absolute bottom-10 right-0 transform translate-x-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 animate-float">
                  <span className="text-white text-sm font-medium">GPS Multi-banda</span>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-3/4 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 animate-float-delay-2">
                  <span className="text-white text-sm font-medium">100m resistente al agua</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">∞<span className="text-cyan-400 dark:text-cyan-500">+</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Batería ilimitada con sol</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">10<span className="text-cyan-400 dark:text-cyan-500">ATM</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Resistencia al agua</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">40<span className="text-cyan-400 dark:text-cyan-500">%</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Descuento</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">24<span className="text-cyan-400 dark:text-cyan-500">/7</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Monitoreo continuo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de tecnología solar */}
      <section id="technology" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Tecnología <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Solar</span> Avanzada
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre cómo Garmin ha revolucionado la industria de los smartwatches con su innovadora tecnología de carga solar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/solar-pattern.svg')] bg-repeat opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Power Glass™</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Cristal transparente que captura la energía solar y la convierte en electricidad para recargar la batería del reloj.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Eficiencia del 10% en conversión
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Prácticamente invisible
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Funcionamiento incluso con luz artificial
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/solar-pattern.svg')] bg-repeat opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gestión Inteligente de Batería</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sistema avanzado que optimiza el consumo de energía y prioriza funciones según el nivel de carga y exposición solar.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Modo batería infinita
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Indicador de intensidad solar
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Aprendizaje adaptativo de uso
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/solar-pattern.svg')] bg-repeat opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Tecnología respetuosa con el medio ambiente que reduce la necesidad de cargar el dispositivo y extiende su vida útil.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Reduce huella de carbono
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Menos ciclos de carga
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Materiales duraderos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de productos destacados */}
      <section id="featured-watches" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Relojes Garmin con Carga Solar</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Descubre nuestra selección de relojes Garmin con tecnología solar, diseñados para mantener tu aventura sin interrupciones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div id="fenix8" className="relative">
            <WatchCard 
              title="Garmin Fenix 8 Solar"
              imageUrl="/images/relojes/fenix8-solar.jpg"
              description="El epítome de los relojes GPS para exteriores, diseñado para atletas y aventureros que buscan lo mejor en tecnología."
              features={[
                "Carga solar para hasta 48 días de batería en modo smartwatch",
                "GPS avanzado con rutas dinámicas para navegación precisa",
                "Altavoz y micrófono para llamadas y asistencia de voz",
                "Medidor de profundidad para buceo hasta 40 metros",
                "Diseño duradero con materiales de alta calidad"
              ]}
              price="$1,100"
              affiliateLink="https://amzn.to/43hTXN6"
              model="fenix8"
            />
            
            {/* Botón para mostrar galería */}
            <div className="mt-4 text-center">
              <Link href="/fenix8-gallery" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50 border border-white/10 rounded-full text-white text-sm transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver galería de imágenes
              </Link>
            </div>
          </div>

          <div id="enduro3" className="relative">
            <WatchCard 
              title="Garmin Enduro 3"
              imageUrl="/images/relojes/enduro3.jpg"
              description="Diseñado para atletas de ultraresistencia, con una vida útil de batería impresionante de hasta 320 horas en modo GPS con carga solar."
              features={[
                "Hasta 320 horas de batería en modo GPS con carga solar",
                "Bisel de titanio ligero, con solo 63 gramos de peso",
                "Métricas avanzadas de entrenamiento e insights de recuperación",
                "Mapas mejorados y navegación con rutas dinámicas"
              ]}
              price="$851"
              affiliateLink="https://amzn.to/3SyOPz0"
              model="enduro3"
            />
            
            {/* Botón para mostrar galería */}
            <div className="mt-4 text-center">
              <Link href="/enduro3-gallery" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50 border border-white/10 rounded-full text-white text-sm transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver galería de imágenes
              </Link>
            </div>
          </div>

          <div id="forerunner965" className="relative">
            <WatchCard 
              title="Garmin Forerunner 965"
              imageUrl="/images/relojes/forerunner965.jpg"
              description="El sueño de todo corredor, con una pantalla AMOLED vibrante y mapas integrados para la navegación. Ideal para rastrear tus carreras sin preocuparte por recargar."
              features={[
                "Pantalla AMOLED para visibilidad clara y nítida",
                "Mapas integrados y navegación para rutas precisas",
                "Dinámicas avanzadas de carrera y métricas de entrenamiento",
                "Almacenamiento de música y pagos sin contacto"
              ]}
              price="$499.99"
              affiliateLink="https://amzn.to/3GWHkPP"
              model="forerunner965"
            />
            
            {/* Botón para mostrar galería */}
            <div className="mt-4 text-center">
              <Link href="/forerunner965-gallery" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50 border border-white/10 rounded-full text-white text-sm transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver galería de imágenes
              </Link>
            </div>
          </div>

          <div id="instinct2" className="relative">
            <WatchCard 
              title="Garmin Instinct 2 Solar"
              imageUrl="/images/relojes/instinct2-solar.jpg"
              description="Diseñado para resistir las condiciones más duras, con una batería que puede durar indefinidamente con carga solar en condiciones óptimas."
              features={[
                "Carga solar para una batería prácticamente ilimitada",
                "Diseño robusto según estándares militares",
                "Navegación básica y mapeo para rutas preplanificadas",
                "Monitoreo de salud y bienestar, incluyendo sueño y estrés"
              ]}
              price="$229.99"
              affiliateLink="https://amzn.to/3F8kOD4"
              model="instinct2"
            />
            
            {/* Botón para mostrar galería */}
            <div className="mt-4 text-center">
              <Link href="/instinct2-gallery" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50 border border-white/10 rounded-full text-white text-sm transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver galería de imágenes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tecnología Solar */}
      <section id="technology" className="py-16 md:py-24 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnología de Carga Solar Garmin</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Descubre cómo la tecnología Power Glass™ de Garmin aprovecha la energía del sol para extender la duración de la batería de tu reloj.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Lente Power Glass™</h3>
              <p className="text-blue-100">Los relojes utilizan un lente solar especial que convierte la luz solar en energía, extendiendo la duración de la batería significativamente.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Eficiencia Energética</h3>
              <p className="text-blue-100">Combinado con algoritmos de gestión de energía avanzados, estos relojes optimizan el consumo para maximizar la duración de la batería.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Durabilidad Extrema</h3>
              <p className="text-blue-100">Construidos para resistir las condiciones más duras, estos relojes combinan robustez con tecnología sostenible para aventureros exigentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Todo lo que necesitas saber sobre los relojes Garmin con tecnología solar.</p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-blue-800/30">
          <div className="py-6">
            <h3 className="text-xl font-bold mb-3 text-white">¿Cómo funciona la carga solar en los relojes Garmin?</h3>
            <p className="text-blue-100">Los relojes Garmin con tecnología solar utilizan un lente Power Glass™ que convierte la luz solar en energía. Este sistema complementa la batería recargable convencional, extendiendo significativamente su duración.</p>
          </div>

          <div className="py-6">
            <h3 className="text-xl font-bold mb-3 text-white">¿Cuánto extiende la carga solar la duración de la batería?</h3>
            <p className="text-blue-100">Depende del modelo y las condiciones de uso. Por ejemplo, el Instinct 2 Solar puede funcionar indefinidamente con suficiente exposición solar en modo de ahorro de energía, mientras que el Fenix 8 Solar puede extender la duración de la batería hasta un 50% en condiciones óptimas.</p>
          </div>

          <div className="py-6">
            <h3 className="text-xl font-bold mb-3 text-white">¿Necesito luz solar directa para cargar el reloj?</h3>
            <p className="text-blue-100">La luz solar directa proporciona la carga más eficiente, pero estos relojes también pueden captar energía de la luz artificial y luz solar indirecta, aunque con menor eficiencia.</p>
          </div>

          <div className="py-6">
            <h3 className="text-xl font-bold mb-3 text-white">¿Qué modelo de reloj solar Garmin es mejor para corredores?</h3>
            <p className="text-blue-100">El Garmin Forerunner 965 es ideal para corredores gracias a sus métricas avanzadas de carrera, mapas detallados y pantalla AMOLED de alta resolución, mientras que el Enduro 3 es perfecto para corredores de ultra trail por su batería de extrema duración.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Potencia tu aventura con energía solar</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">Descubre la libertad de explorar sin preocuparte por la duración de la batería. Los relojes Garmin con tecnología solar te acompañan en cada paso del camino.</p>
          <Link 
            href="#featured-watches" 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 inline-block"
          >
            Explorar Relojes
          </Link>
        </div>
      </section>
    </div>
  );
}
