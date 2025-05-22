"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-blue-900/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg' 
        : 'bg-gradient-to-r from-blue-900/70 via-indigo-800/70 to-blue-900/70 dark:from-gray-900/70 dark:via-slate-900/70 dark:to-gray-900/70 backdrop-blur-md'}
      text-white border-b border-blue-500/30 dark:border-slate-800/50
    `}>
      <div className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group relative z-10">
          <div className="relative w-10 h-10 group-hover:scale-110 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-md group-hover:opacity-40 group-hover:blur-lg transition-all duration-500"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:blur-md group-hover:animate-pulse transition-all duration-700"></div>
            <Image 
              src="/solar-logo.svg" 
              alt="SolarFluidity Logo" 
              fill 
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-sm">SolarFluidity</span>
            <span className="text-xs text-blue-200 -mt-1">Energía del Futuro</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-7">
          {[
            { href: "/", label: "Inicio" },
            { href: "/relojes-garmin", label: "Relojes Garmin" },
            { href: "/relojes-garmin#technology", label: "Tecnología Solar" }
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative group py-1.5 overflow-hidden"
            >
              <span className="relative z-10 text-blue-100 group-hover:text-cyan-200 transition-colors duration-300">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              <span className="absolute -bottom-0 left-1/2 w-1 h-1 rounded-full bg-cyan-300 opacity-0 group-hover:opacity-100 -translate-x-1/2 group-hover:translate-y-1 transition-all duration-500 delay-300"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          {/* Theme Switch */}
          <div className="relative p-1.5 bg-white/10 rounded-full backdrop-blur-lg border border-white/10 shadow-inner shadow-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ThemeSwitch />
          </div>
          
          {/* Botón de contacto eliminado */}
          
          <button 
            className="md:hidden relative overflow-hidden text-white focus:outline-none bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-gradient-to-b from-blue-900/90 to-indigo-900/90 dark:from-gray-900/90 dark:to-gray-800/90 border-t border-white/10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/relojes-garmin", label: "Relojes Garmin" },
                { href: "/relojes-garmin#technology", label: "Tecnología Solar" }
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-blue-100 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
