import { products, getProductBySlug } from '../../../../data/products';
import type { Product } from '../../../../types/product';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, ShoppingCartIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }
  return {
    title: `${product.name} | Solar Fluidity Shop`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.imageUrl, // Asegúrate que esta URL sea absoluta para OpenGraph
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const allProducts = products; 
  return allProducts.map((product: Product) => ({ // Added Product type for map
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
        <p className="text-lg text-foreground/80 mb-8">
          Lo sentimos, el producto que buscas no existe o ha sido movido.
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/" className="text-amber-600 hover:text-amber-700 flex items-center text-sm">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Volver a todos los productos
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg border border-border/30">
            <Image
              src={product.imageUrl || '/images/placeholder.jpg'}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {product.gallery && product.gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2">
              {product.gallery.slice(0, 4).map((imgUrl, index) => (
                <div key={index} className="aspect-square relative rounded-md overflow-hidden border border-border/20 cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src={imgUrl || '/images/placeholder-thumb.jpg'}
                    alt={`${product.name} - vista ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-amber-500 flex items-center">
              {Array(Math.floor(product.rating)).fill(null).map((_, i) => <SparklesIcon key={`star-${i}`} className="h-5 w-5" />)}
              {product.rating % 1 !== 0 && <SparklesIcon key="half-star" className="h-5 w-5 opacity-50" />} {/* Simplificado para demo */}
            </span>
            <span className="ml-2 text-sm text-foreground/70">({product.reviews} reseñas)</span>
          </div>

          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <span className="text-3xl font-extrabold text-foreground">
              ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
            {product.discountPrice && (
              <span className="ml-3 text-lg text-foreground/50 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          {product.stock > 0 ? (
             <p className="text-sm text-green-600 dark:text-green-400 mb-6">En Stock ({product.stock} disponibles)</p>
          ) : (
             <p className="text-sm text-red-600 dark:text-red-400 mb-6">Agotado</p>
          )}


          <a
            href={product.amazonAffiliateLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
            Comprar en Amazon
          </a>

          {product.features && product.features.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-3">Características Principales:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/90">
                    <CheckCircleIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="mt-12 pt-8 border-t border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-6">Especificaciones Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-background/30 p-6 rounded-lg border border-border/30 shadow-sm">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-border/20">
                <span className="font-medium text-foreground/80 capitalize">{key.replace(/_/g, ' ')}:</span>
                <span className="text-foreground/90">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
