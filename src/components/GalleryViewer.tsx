"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import * as Motion from 'framer-motion';

// Extrayendo el componente motion para evitar problemas de importación en Next.js
const { motion } = Motion;

interface GalleryViewerProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const GalleryViewer: React.FC<GalleryViewerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg shadow-xl border border-white/5">
        {/* Fondo de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 opacity-60"></div>
        
        {/* Imagen actual */}
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            fill
            className="object-contain p-4"
          />
        </motion.div>
        
        {/* Contador de imágenes */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-sm text-white font-medium">
          {currentIndex + 1} / {images.length}
        </div>
        
        {/* Botones de navegación */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 transition-colors duration-200 border border-white/20"
          aria-label="Imagen anterior"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 transition-colors duration-200 border border-white/20"
          aria-label="Siguiente imagen"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Miniaturas */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIndex ? 'border-cyan-500 scale-110' : 'border-white/10'
            }`}
          >
            <Image 
              src={image.src} 
              alt={`Miniatura ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryViewer;
