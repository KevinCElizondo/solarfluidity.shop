"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Motion from 'framer-motion';

// Extraer el componente motion para evitar problemas de importación en Next.js
const { motion } = Motion;

interface WatchCardProps {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  price: string;
  affiliateLink: string;
  model: 'fenix8' | 'enduro3' | 'forerunner965' | 'instinct2';
}

const getGlowColor = (model: string) => {
  switch(model) {
    case 'fenix8': return 'from-blue-600/20 to-indigo-600/20';
    case 'enduro3': return 'from-green-600/20 to-emerald-600/20';
    case 'forerunner965': return 'from-cyan-600/20 to-sky-600/20';
    case 'instinct2': return 'from-amber-600/20 to-yellow-600/20';
    default: return 'from-blue-600/20 to-indigo-600/20';
  }
};

const getAccentColor = (model: string) => {
  switch(model) {
    case 'fenix8': return 'bg-blue-500';
    case 'enduro3': return 'bg-green-500';
    case 'forerunner965': return 'bg-cyan-500';
    case 'instinct2': return 'bg-amber-500';
    default: return 'bg-blue-500';
  }
};

const WatchCard: React.FC<WatchCardProps> = ({
  title,
  imageUrl,
  description,
  features,
  price,
  affiliateLink,
  model
}) => {
  const glowColor = getGlowColor(model);
  const accentColor = getAccentColor(model);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg shadow-xl rounded-2xl border border-white/5 group"
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${glowColor} blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:duration-300`}></div>
      
      {/* Image container with hover effects */}
      <div className="relative z-10 h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-black to-gray-800">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain object-center p-4 drop-shadow-xl"
          />
        </motion.div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-bold">
          {price}
        </div>
      </div>
      
      <div className="relative z-10 p-6 bg-gradient-to-b from-gray-900/40 to-black/40">
        <h2 className="text-2xl font-bold mb-3 text-white tracking-tight">{title}</h2>
        <p className="text-blue-100 mb-5 text-sm">{description}</p>
        
        <div className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-start"
            >
              <div className={`w-2 h-2 ${accentColor} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
              <p className="text-gray-300 text-sm">{feature}</p>
            </motion.div>
          ))}
        </div>
        
        <Link
          href={affiliateLink}
          target="_blank" 
          rel="nofollow noopener"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden group/button"
          >
            {/* Gradient background for the button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover/button:opacity-50 transition duration-300"></div>
            <button className="relative flex items-center justify-center w-full px-6 py-3 bg-gradient-to-br from-gray-900 to-black rounded-lg text-white font-medium uppercase tracking-wider text-sm border border-white/10 overflow-hidden">
              <span className="relative z-10">Comprar Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-full w-full h-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 transform group-hover/button:translate-x-full transition-transform duration-500"></div>
            </button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default WatchCard;
