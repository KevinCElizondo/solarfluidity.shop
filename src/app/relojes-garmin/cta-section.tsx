import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">La tecnología solar en tu muñeca</h2>
        <p className="text-blue-100 max-w-3xl mx-auto mb-8">
          No te pierdas la oportunidad de experimentar la libertad que te ofrece un Garmin Solar. 
          Aventuras sin límites con energía infinita.
        </p>
        <Link 
          href="https://amzn.to/4lGYQYc" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
        >
          <span>Comprar ahora</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
        <p className="text-blue-200 text-xs mt-4">* Los precios pueden variar. Consulta Amazon para ver el precio actual.</p>
      </div>
    </section>
  );
}
