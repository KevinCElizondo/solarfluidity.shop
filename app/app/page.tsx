import Link from 'next/link';
import Image from 'next/image';
import { products, categories, getFeaturedProducts } from '../../data/products';
import type { Product, Category } from '../../types/product'; // Import types from their source
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Helper component for Product Card
const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative rounded-xl border border-border/30 bg-background/50 shadow-lg transition-all hover:shadow-xl overflow-hidden">
    <Link href={`/product/${product.slug}`} className="block">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.imageUrl || '/images/placeholder.jpg'} // Fallback image
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            NUEVO
          </span>
        )}
        {product.discountPrice && (
           <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            OFERTA
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 truncate group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-foreground/70 mb-2 h-10 overflow-hidden">
          {product.description.substring(0, 60)}...
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-foreground">
            ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            {product.discountPrice && (
              <span className="ml-2 text-sm text-foreground/50 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </p>
          <span className="text-xs text-amber-500 flex items-center">
            {product.rating} <SparklesIcon className="h-4 w-4 ml-1" /> ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
    <a
      href={product.amazonAffiliateLink || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center font-semibold py-3 transition-colors"
    >
      Ver en Amazon
    </a>
  </div>
);

// Helper component for Category Card
const CategoryCard = ({ category }: { category: Category }) => (
  <Link href={`/category/${category.slug}`} className="group block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
    <Image
      src={category.imageUrl || '/images/placeholder-category.jpg'} // Fallback image
      alt={category.name}
      width={400}
      height={250}
      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center p-4">
      <h3 className="text-2xl font-bold text-white text-center tracking-tight">
        {category.name}
      </h3>
    </div>
  </Link>
);


export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4); // Show up to 4 featured products

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-700 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          {/* You can add a subtle background pattern or image here */}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="block">Energía Solar</span>
            <span className="block text-amber-400">A Tu Alcance</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto">
            Descubre productos innovadores y soluciones sostenibles para un futuro más brillante y eficiente.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-lg shadow-lg transition-transform hover:scale-105"
          >
            Explorar Productos <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Productos Destacados</h2>
            <Link href="/products" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
              Ver Todos <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Explora Categorías</h2>
           <Link href="/categories" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
              Ver Todas <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.slice(0,6).map((category) => ( // Show up to 6 categories
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Call to Action / Info Section */}
      <section className="bg-slate-100 dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-lg">
        <div className="text-center">
          <SparklesIcon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para la Transición Energética?</h2>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            En Solar Fluidity Shop, te conectamos con la mejor tecnología solar. Cada compra a través de nuestros enlaces de afiliado nos ayuda a seguir promoviendo la energía limpia.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-slate-700 hover:bg-slate-900 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-semibold rounded-lg text-md shadow-md transition-transform hover:scale-105"
          >
            Descubre Más Productos
          </Link>
        </div>
      </section>
    </div>
  );
}
