import { categories, getCategoryBySlug, getProductsByCategory } from '../../../../data/products';
import type { Product, Category } from '../../../../types/product';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {
      title: 'Categoría no encontrada',
    };
  }
  return {
    title: `${category.name} | Solar Fluidity Shop`,
    description: `Explora productos en la categoría ${category.name} en Solar Fluidity Shop. ${category.description}`,
    openGraph: {
        title: category.name,
        description: category.description,
        images: [
            {
                url: category.imageUrl, // Asegúrate que esta URL sea absoluta para OpenGraph
                width: 1200,
                height: 630,
                alt: category.name,
            },
        ],
    },
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Helper component for Product Card (can be moved to a shared components folder later)
const ProductCard = ({ product }: { product: Product }) => (
    <div className="group relative rounded-xl border border-border/30 bg-background/50 shadow-lg transition-all hover:shadow-xl overflow-hidden">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.imageUrl || '/images/placeholder.jpg'}
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

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
        <p className="text-lg text-foreground/80 mb-8">
          Lo sentimos, la categoría que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const productsInCategory = getProductsByCategory(category.id);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 pb-6 border-b border-border/30">
        <div className="flex items-center mb-2">
            <Link href="/" className="text-amber-600 hover:text-amber-700 flex items-center text-sm">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Inicio
            </Link>
            <span className="mx-2 text-foreground/50">/</span>
            <span className="text-foreground/70 text-sm">Categorías</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">{category.name}</h1>
        <p className="text-lg text-foreground/70">{category.description}</p>
      </div>

      {productsInCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {productsInCategory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-foreground/70 py-12">
          No hay productos disponibles en esta categoría por el momento.
        </p>
      )}
    </div>
  );
}
