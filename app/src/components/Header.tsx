import Link from 'next/link';
import { SunIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; // Example icons

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <SunIcon className="h-8 w-8 text-amber-500" />
          <span className="font-bold text-xl tracking-tight text-foreground">
            Solar Fluidity Shop
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link href="/products" className="text-foreground/70 hover:text-foreground transition-colors">
            Productos
          </Link>
          {/* Future cart icon, can be implemented later
          <Link href="/cart" className="flex items-center text-foreground/70 hover:text-foreground transition-colors">
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Carrito
          </Link>
          */}
        </nav>
      </div>
    </header>
  );
}
