import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImportanciaEjercicioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full opacity-20">
            <div className="absolute h-full w-full bg-[url('/images/pattern-lines.svg')] bg-repeat opacity-10"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La Importancia del <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ejercicio</span> en tu Vida
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Descubre cómo la actividad física regular y el seguimiento con tecnología Garmin pueden transformar tu salud y bienestar.
            </p>
            <div className="mt-8 flex justify-center">
              <Link 
                href="#beneficios" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
              >
                Descubrir Beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">El Ejercicio: Tu Mejor Inversión</h2>
            
            <div className="mb-8 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-xl mb-6">
                En un mundo donde la tecnología facilita el sedentarismo, hacer ejercicio regular se ha convertido en una decisión consciente más que en una parte natural de nuestra rutina. Sin embargo, los beneficios de mantenerse activo van mucho más allá de la estética corporal.
              </p>
              <p className="mb-6">
                La actividad física regular tiene un impacto profundo en prácticamente todos los aspectos de nuestra salud: fortalece el sistema cardiovascular, mejora la capacidad pulmonar, aumenta la densidad ósea, reduce el riesgo de enfermedades crónicas y optimiza la función cerebral. Estos beneficios no son solo teóricos; son transformaciones tangibles que ocurren en nuestro cuerpo cuando nos comprometemos con un estilo de vida activo.
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 italic">
                "El ejercicio físico es el único tratamiento que simultáneamente mejora casi todas las funciones del cuerpo humano." — Dr. Mark Tarnopolsky, Universidad McMaster
              </blockquote>
            </div>

            <div className="relative my-12">
              <Image
                src="/images/ejercicio-grafico.jpg"
                alt="Beneficios del ejercicio en el cuerpo humano"
                width={900}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Fuente: American Heart Association</p>
              </div>
            </div>
          </div>

          <div id="beneficios" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Beneficios Comprobados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  Salud Cardiovascular
                </h3>
                <p>El ejercicio regular fortalece el corazón, mejora la circulación y reduce el riesgo de enfermedades cardíacas hasta en un 35%. Los relojes Garmin con tecnología solar te permiten monitorear tu ritmo cardíaco durante todo el día sin preocuparte por quedarte sin batería.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Salud Mental
                </h3>
                <p>El ejercicio es un poderoso antidepresivo natural que libera endorfinas, mejora el estado de ánimo y reduce el estrés y la ansiedad. Con las métricas de estrés y Body Battery™ de Garmin, puedes entender mejor cómo el ejercicio afecta positivamente tu bienestar mental.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Energía y Vitalidad
                </h3>
                <p>Contrario a lo que podría parecer, el ejercicio aumenta tus niveles de energía en lugar de agotarlos. Mejora la eficiencia mitocondrial y optimiza el uso de oxígeno. Los relojes Garmin te muestran objetivamente estos cambios a través de métricas como VO2 max y puntuación de entrenamiento.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                  Mejor Sueño
                </h3>
                <p>La actividad física mejora significativamente la calidad del sueño, ayudándote a conciliar el sueño más rápido y disfrutar de un descanso más profundo. Los relojes Garmin ofrecen un análisis detallado de tu sueño, ayudándote a optimizar tus hábitos para un mejor descanso.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">La Revolución del Seguimiento Deportivo</h2>
            
            <div className="mb-8 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-xl mb-6">
                El advenimiento de los relojes inteligentes, especialmente los Garmin con tecnología solar, ha transformado la manera en que nos relacionamos con el ejercicio. Estos dispositivos no son simples accesorios, sino herramientas poderosas que nos permiten:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Cuantificar nuestro progreso:</strong> Ver mejoras objetivas en métricas como tiempo, distancia, ritmo cardíaco y recuperación es un poderoso motivador.</li>
                <li><strong>Establecer metas realistas:</strong> Basadas en datos reales, no en percepciones subjetivas o comparaciones con otros.</li>
                <li><strong>Optimizar el entrenamiento:</strong> Identificar zonas de frecuencia cardíaca óptimas, tiempos de recuperación adecuados y patrones de rendimiento.</li>
                <li><strong>Prevenir lesiones:</strong> Detectar señales tempranas de sobreentrenamiento o desequilibrios biomecánicos.</li>
                <li><strong>Mantener la motivación:</strong> A través de desafíos, logros y la gamificación del ejercicio.</li>
              </ul>
              
              <p>
                La ventaja crucial de los relojes Garmin con tecnología solar es su autonomía. La capacidad de cargar continuamente con la luz del sol elimina una de las principales barreras en el seguimiento deportivo: quedarse sin batería en medio de una actividad o tener que cargar constantemente el dispositivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Caso de Estudio: Maratón de Chicago</h3>
                <p className="mb-4">
                  Un estudio realizado entre corredores del Maratón de Chicago mostró que aquellos que utilizaban dispositivos de seguimiento avanzados como los relojes Garmin:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Completaron sus programas de entrenamiento con un 27% más de adherencia</li>
                  <li>Experimentaron un 32% menos de lesiones durante la preparación</li>
                  <li>Mejoraron sus tiempos personales en un promedio de 6.4%</li>
                </ul>
                <p>
                  La capacidad de los relojes para proporcionar retroalimentación inmediata sobre intensidad, recuperación y progresión resultó ser un factor determinante en estos resultados.
                </p>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/running-marathon.jpg"
                  alt="Corredor de maratón utilizando reloj Garmin"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-xl object-cover h-full"
                />
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">Chicago Marathon 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Maximizando el Potencial de tu Reloj Garmin</h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
              <p className="text-xl mb-6">
                Para aprovechar al máximo tu reloj Garmin con tecnología solar, considera estas estrategias:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Personaliza tus pantallas de datos</h4>
                    <p>Configura las métricas más relevantes para tu actividad específica. Un corredor querrá ver ritmo y frecuencia cardíaca, mientras que un ciclista podría preferir potencia y cadencia.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Establece zonas de frecuencia cardíaca personalizadas</h4>
                    <p>Las zonas predeterminadas son un buen punto de partida, pero para una mayor precisión, realiza una prueba de umbral o consulta con un profesional para establecer zonas específicas para ti.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Aprovecha la planificación de entrenamientos</h4>
                    <p>Utiliza Garmin Connect para seguir planes de entrenamiento estructurados o crear los tuyos propios. La consistencia es clave para ver resultados.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Maximiza la carga solar</h4>
                    <p>Lleva tu reloj con la esfera expuesta a la luz cuando sea posible. Incluso la luz interior contribuye a la carga, aunque en menor medida que la luz solar directa.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-cyan-400 font-bold">05</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Analiza tus tendencias a largo plazo</h4>
                    <p>No te enfoques solo en los datos diarios. Revisa regularmente tus tendencias mensuales y anuales para identificar patrones, progreso y áreas de mejora.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conclusión: Invierte en tu Salud</h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-xl mb-6">
                El ejercicio regular es posiblemente la inversión más valiosa que puedes hacer en tu salud y bienestar. Los beneficios son inmediatos y acumulativos, transformando no solo tu cuerpo sino también tu mente y calidad de vida.
              </p>
              <p className="mb-6">
                Un reloj Garmin con tecnología solar es el compañero perfecto para este viaje. No es solo un dispositivo para medir tiempos y distancias; es una herramienta integral para entender tu cuerpo, optimizar tu rendimiento y mantener la motivación.
              </p>
              <p className="text-lg font-medium">
                Empieza hoy mismo. Tu futuro yo te lo agradecerá.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/relojes-garmin" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 inline-flex items-center"
              >
                <span>Explorar Relojes Garmin Solar</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
