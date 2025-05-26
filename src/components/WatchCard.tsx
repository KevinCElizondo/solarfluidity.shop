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
  amazonAffiliateLink: string;
  model: string;
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
  amazonAffiliateLink,
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
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-700/30 group hover:border-slate-600/50 transition-all duration-500"
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${glowColor} blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 group-hover:duration-300`}></div>
      
      {/* Tech circuit patterns */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="25" cy="25" r="2" fill="currentColor" />
            <circle cx="75" cy="75" r="2" fill="currentColor" />
            <circle cx="75" cy="25" r="2" fill="currentColor" />
            <circle cx="25" cy="75" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      {/* Image container with hover effects */}
      <div className="relative z-10 h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Animated ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
          <div className="absolute inset-0 border-2 border-dashed border-cyan-400/50 rounded-full animate-slow-spin"></div>
        </div>
        
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative h-full w-full flex items-center justify-center"
        >
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="object-contain drop-shadow-2xl filter transition-all duration-500 group-hover:brightness-110"
          />
        </motion.div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full border border-white/10 text-white font-bold shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
          {price}
        </div>
      </div>
      
      <div className="relative z-10 p-6 bg-gradient-to-b from-slate-900/60 to-black/60">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 tracking-tight">{title}</h2>
        <p className="text-blue-100 mb-5 text-sm">{description}</p>
        
        <div className="mb-6 space-y-3">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-start group/feature"
            >
              <div className={`w-2 h-2 ${accentColor} rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/feature:scale-125 transition-all duration-300`}></div>
              <p className="text-gray-300 text-sm group-hover/feature:text-white transition-colors duration-300">{feature}</p>
            </motion.div>
          ))}
        </div>
        
        <Link
          href={amazonAffiliateLink}
          target="_blank" 
          rel="nofollow noopener"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden group/button"
          >
            {/* Gradient background for the button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-25 group-hover/button:opacity-70 transition duration-300"></div>
            <button className="relative flex items-center justify-center w-full px-6 py-3 bg-gradient-to-br from-slate-900 to-black rounded-lg text-white font-medium uppercase tracking-wider text-sm border border-slate-700/30 overflow-hidden">
              <span className="relative z-10 flex items-center">Comprar Ahora
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-full w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 transform group-hover/button:translate-x-full transition-transform duration-500"></div>
            </button>
          </motion.div>
        </Link>
        
        {/* Tech badge */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-slate-800/50 border border-slate-700/30 text-xs text-cyan-300">
            <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Tecnología Solar
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WatchCard;
