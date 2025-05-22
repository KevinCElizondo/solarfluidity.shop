'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Asegurarse de que la clase dark se añada/elimine del elemento html
  useEffect(() => {
    // Este código asegura que la transición entre temas se realice correctamente
    const root = window.document.documentElement;
    root.classList.add('transition-colors');
    root.classList.add('duration-300');
    
    return () => {
      root.classList.remove('transition-colors');
      root.classList.remove('duration-300');
    };
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
