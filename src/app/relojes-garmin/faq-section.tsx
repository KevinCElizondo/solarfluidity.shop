import React from 'react';

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre los relojes Garmin con tecnología solar
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">¿Cómo funciona la carga solar en los relojes Garmin?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Los relojes Garmin Solar utilizan un cristal Power Glass™ transparente que captura la energía solar y la convierte en electricidad para recargar la batería del reloj. Esto permite extender la duración de la batería significativamente o incluso de forma indefinida con suficiente exposición solar.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">¿Cuánta luz solar necesita el reloj para mantenerse cargado?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Para mantener la batería indefinidamente en modo reloj, los modelos como el Instinct 2 Solar necesitan aproximadamente 3 horas diarias de exposición a luz solar directa (50,000 lux) o todo el día en condiciones de oficina (fluorescentes). El rendimiento varía según el modelo y las funciones activadas.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">¿Funciona la carga solar en interiores?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sí, aunque con menor eficiencia. Los relojes Garmin Solar pueden captar energía de luz artificial, pero la generación de energía será significativamente menor que con luz solar directa. La luz de ventanas o luces brillantes contribuirá a extender la duración de la batería.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">¿Qué ventajas tiene un Garmin Solar frente a otros smartwatches?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Los Garmin Solar ofrecen una duración de batería muy superior a los smartwatches convencionales, reduciendo la necesidad de cargas frecuentes. Son ideales para actividades al aire libre prolongadas como senderismo, trail running o expediciones donde no hay acceso a fuentes de energía. Además, son más respetuosos con el medio ambiente al reducir el consumo de electricidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
