import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  // Variantes de animación para elementos
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-gray-950">
      {/* Hero Section - Futurista y enfocado en relojes Garmin Solar */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Efectos de fondo animados */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/solar-pattern.svg')] bg-repeat opacity-5 animate-slow-spin"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
                SolarFluidity<br/><span className="text-3xl md:text-5xl">Relojes Garmin Solar</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                Descubre la libertad de la energía inagotable con los relojes Garmin con tecnología solar. 
                Diseñados para aventureros que desafían los límites.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/relojes-garmin" 
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-600/30 transition-all duration-300"
                >
                  <span className="relative z-10">Explorar Relojes</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                </Link>
                
                <Link 
                  href="/relojes-garmin#technology" 
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border border-white/20 text-white font-bold transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">Tecnología Solar</span>
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full h-[500px]">
                {/* Círculos decorativos */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 animate-pulse"></div>
                <div className="absolute inset-[40px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Imagen de reloj principal */}
                <Image
                  src="/images/relojes/fenix8-solar.jpg"
                  alt="Garmin Fenix 8 Solar"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                
                {/* Etiquetas de características flotantes */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -left-20 top-1/3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 shadow-lg"
                >
                  <span className="text-cyan-300 font-medium">Carga solar</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -right-20 top-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 shadow-lg"
                >
                  <span className="text-indigo-300 font-medium">Batería extendida</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 shadow-lg"
                >
                  <span className="text-blue-300 font-medium">GPS avanzado</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-blue-300 mb-2 text-sm">Descubre más</p>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Sección de Destacados - Modelo más vendido */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-lines.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Relojes destacados</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Explora nuestra selección de relojes Garmin con tecnología solar para acompañarte en todas tus aventuras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tarjetas con enlaces a los productos */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
            >
              <Link href="/relojes-garmin#fenix8">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl border border-white/5 shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative p-6">
                    <div className="h-56 mb-4 relative">
                      <Image
                        src="/images/relojes/fenix8-solar.jpg"
                        alt="Garmin Fenix 8 Solar"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Garmin Fenix 8 Solar</h3>
                    <p className="text-sm text-blue-100 mb-4">El epítome de los relojes GPS para exteriores, diseñado para atletas y aventureros.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">$1,100</span>
                      <span className="inline-block bg-blue-600/20 backdrop-blur-sm text-xs font-bold text-cyan-300 px-3 py-1 rounded-full">Premium</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
              transition={{ delay: 0.1 }}
            >
              <Link href="/relojes-garmin#enduro3">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl border border-white/5 shadow-xl group-hover:shadow-green-500/10 transition-all duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative p-6">
                    <div className="h-56 mb-4 relative">
                      <Image
                        src="/images/relojes/enduro3.jpg"
                        alt="Garmin Enduro 3"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Garmin Enduro 3</h3>
                    <p className="text-sm text-blue-100 mb-4">Diseñado para atletas de ultraresistencia, con batería impresionante.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">$851</span>
                      <span className="inline-block bg-green-600/20 backdrop-blur-sm text-xs font-bold text-green-300 px-3 py-1 rounded-full">Ultra</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
              transition={{ delay: 0.2 }}
            >
              <Link href="/relojes-garmin#forerunner965">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl border border-white/5 shadow-xl group-hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-sky-600/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative p-6">
                    <div className="h-56 mb-4 relative">
                      <Image
                        src="/images/relojes/forerunner965.jpg"
                        alt="Garmin Forerunner 965"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Garmin Forerunner 965</h3>
                    <p className="text-sm text-blue-100 mb-4">El sueño de todo corredor, con pantalla AMOLED y mapas integrados.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">$499.99</span>
                      <span className="inline-block bg-cyan-600/20 backdrop-blur-sm text-xs font-bold text-cyan-300 px-3 py-1 rounded-full">Running</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
              transition={{ delay: 0.3 }}
            >
              <Link href="/relojes-garmin#instinct2">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl border border-white/5 shadow-xl group-hover:shadow-amber-500/10 transition-all duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <div className="relative p-6">
                    <div className="h-56 mb-4 relative">
                      <Image
                        src="/images/relojes/instinct2-solar.jpg"
                        alt="Garmin Instinct 2 Solar"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Garmin Instinct 2 Solar</h3>
                    <p className="text-sm text-blue-100 mb-4">Diseñado para resistir condiciones extremas con batería prácticamente ilimitada.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">$229.99</span>
                      <span className="inline-block bg-amber-600/20 backdrop-blur-sm text-xs font-bold text-amber-300 px-3 py-1 rounded-full">Resistente</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/relojes-garmin" 
              className="inline-flex items-center text-blue-400 hover:text-cyan-400 font-medium transition-colors duration-300"
            >
              Ver todos los relojes
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Tecnología Solar */}
      <section className="py-24 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/solar-pattern.svg')] bg-repeat opacity-10"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">Tecnología de Carga Solar</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Descubre cómo la tecnología Power Glass™ de Garmin aprovecha la energía del sol para extender la duración de la batería de tu reloj.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">Lente Power Glass™</h3>
                <p className="text-blue-100">Los relojes utilizan un lente solar especial que convierte la luz solar en energía, extendiendo la duración de la batería significativamente.</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">Eficiencia Energética</h3>
                <p className="text-blue-100">Combinado con algoritmos de gestión de energía avanzados, estos relojes optimizan el consumo para maximizar la duración de la batería.</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300 group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">Durabilidad Extrema</h3>
                <p className="text-blue-100">Construidos para resistir las condiciones más duras, estos relojes combinan robustez con tecnología sostenible para aventureros exigentes.</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/relojes-garmin#technology" 
              className="inline-flex items-center text-amber-400 hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Conoce más sobre la tecnología solar
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-indigo-900/20"></div>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Potencia tu aventura con energía solar
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Descubre la libertad de explorar sin preocuparte por la duración de la batería. Los relojes Garmin con tecnología solar te acompañan en cada paso del camino.
            </p>
            
            <Link 
              href="/relojes-garmin" 
              className="relative inline-flex group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-10 py-4 bg-gradient-to-br from-gray-900 to-black rounded-full text-white font-medium border border-white/10 group-hover:border-cyan-400/50 transition-all duration-200">
                Explorar Relojes Garmin Solar
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
