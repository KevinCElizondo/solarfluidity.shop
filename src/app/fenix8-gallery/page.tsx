"use client";

import React from 'react';
import Link from 'next/link';
import * as Motion from 'framer-motion';
import GalleryViewer from '@/components/GalleryViewer';

// Extrayendo el componente motion para evitar problemas de importación en Next.js
const { motion } = Motion;

export default function Fenix8GalleryPage() {
  // Array de imágenes del Fenix 8 Solar
  const fenixImages = [
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-1.jpg',
      alt: 'Garmin Fenix 8 Solar - Vista frontal'
    },
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-2.jpg',
      alt: 'Garmin Fenix 8 Solar - Vista lateral'
    },
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-3.jpg',
      alt: 'Garmin Fenix 8 Solar - Vista en muñeca'
    },
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-4.jpg',
      alt: 'Garmin Fenix 8 Solar - Interfaz de navegación'
    },
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-5.jpg',
      alt: 'Garmin Fenix 8 Solar - Vista posterior'
    },
    {
      src: '/images/relojes/fenix8-gallery/Garmin fenix-6.jpg',
      alt: 'Garmin Fenix 8 Solar - Características adicionales'
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
              href="/relojes-garmin#fenix8" 
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Relojes Garmin
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Garmin Fenix 8 Solar</h1>
            <p className="text-blue-200">Galería de imágenes</p>
          </motion.div>

          {/* Visor de galería */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GalleryViewer images={fenixImages} />
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold mb-4">Sobre el Garmin Fenix 8 Solar</h2>
            <p className="text-blue-100 mb-4">
              El Garmin Fenix 8 Solar es el epítome de los relojes GPS para exteriores, diseñado para atletas y aventureros que buscan lo mejor en tecnología. Con su avanzada tecnología solar, este reloj te ofrece una autonomía increíble para todas tus aventuras.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium text-blue-300 mb-2">Características destacadas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Hasta 48 días de batería en modo smartwatch con carga solar</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>GPS avanzado con rutas dinámicas para navegación precisa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Altavoz y micrófono integrados para llamadas y asistencia de voz</span>
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
                    <span>Medidor de profundidad para buceo hasta 40 metros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Resistencia al agua: 10 ATM</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Diseño duradero con materiales de alta calidad</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="https://amzn.to/43hTXN6" 
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
