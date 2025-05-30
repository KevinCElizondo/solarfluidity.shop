'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import * as Motion from 'framer-motion';

const { motion } = Motion;

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Asegurar que el tema se aplique correctamente
  useEffect(() => {
    // Forzar actualización de clases en el HTML
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setMounted(true);
  }, [theme]);

  // Si no está montado, muestra un placeholder para evitar cambios de layout
  if (!mounted) {
    return <div className="w-8 h-8 rounded-full bg-white/10"></div>;
  }

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`
        relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full
        transition-all duration-500 shadow-inner
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-indigo-950 to-blue-950 text-amber-300 border border-indigo-800/30' 
          : 'bg-gradient-to-br from-blue-50 to-sky-100 text-indigo-600 border border-sky-200/50'}
      `}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="absolute inset-0 w-full h-full">
        {theme === 'dark' ? (
          // Estrellas animadas para modo oscuro
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
          </div>
        ) : (
          // Rayos de sol para modo claro
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-yellow-500 rotate-0 scale-y-100 scale-x-150"
                style={{
                  width: '1px',
                  height: '100%',
                  left: '50%',
                  top: '0',
                  transformOrigin: 'center',
                  transform: `translateX(-50%) rotate(${i * 30}deg)`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {theme === 'dark' ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-4 h-4 relative z-10"
        >
          <path 
            fillRule="evenodd" 
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" 
            clipRule="evenodd" 
          />
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-5 h-5 relative z-10"
        >
          <path 
            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" 
          />
        </svg>
      )}
    </motion.button>
  );
}
