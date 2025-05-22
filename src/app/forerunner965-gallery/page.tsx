"use client";

import React from 'react';
import Link from 'next/link';
import * as Motion from 'framer-motion';
import GalleryViewer from '@/components/GalleryViewer';

// Extrayendo el componente motion para evitar problemas de importación en Next.js
const { motion } = Motion;

export default function Forerunner965GalleryPage() {
  // Array de imágenes del Forerunner 965
  const forerunnerImages = [
    {
      src: '/images/relojes/forerunner965-gallery/forerunner965-1.jpg',
      alt: 'Garmin Forerunner 965 - Vista frontal'
    },
    {
      src: '/images/relojes/forerunner965-gallery/forerunner965-3.jpg',
      alt: 'Garmin Forerunner 965 - Vista en muñeca'
    },
    {
      src: '/images/relojes/forerunner965-gallery/forerunner965-4.jpg',
      alt: 'Garmin Forerunner 965 - Interfaz de entrenamiento'
    },
    {
      src: '/images/relojes/forerunner965-gallery/forerunner965-5.jpg',
      alt: 'Garmin Forerunner 965 - Vista posterior'
    },
    {
      src: '/images/relojes/forerunner965-gallery/forerunner965-6.jpg',
      alt: 'Garmin Forerunner 965 - Características adicionales'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <Link 
              href="/relojes-garmin#forerunner965" 
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Relojes Garmin
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Garmin Forerunner 965</h1>
            <p className="text-blue-200">Galería de imágenes</p>
          </motion.div>

          {/* Visor de galería */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GalleryViewer images={forerunnerImages} />
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold mb-4">Sobre el Garmin Forerunner 965</h2>
            <p className="text-blue-100 mb-4">
              El Garmin Forerunner 965 es el reloj definitivo para corredores serios. Con su pantalla AMOLED brillante, batería de larga duración potenciada por la tecnología solar y métricas avanzadas de entrenamiento, este reloj te ayudará a llevar tu rendimiento al siguiente nivel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium text-blue-300 mb-2">Características destacadas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pantalla AMOLED de alta resolución de 1.4"</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Tecnología solar Power Glass™</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Batería de hasta 23 días en modo smartwatch</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium text-blue-300 mb-2">Especificaciones técnicas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Peso: 52 gramos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Resistencia al agua: 5 ATM</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Almacenamiento para música: hasta 2000 canciones</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="https://amzn.to/3GWHkPP" 
                target="_blank"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
              >
                Ver en Amazon
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
