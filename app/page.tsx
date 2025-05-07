import Image from "next/image";
import Link from "next/link";
// Importación directa desde el archivo correcto
import { categories, getFeaturedProducts, getNewProducts } from "../src/lib/product-data";
import { Product, Category } from "../src/types/product";

// Product Card Component - Diseño innovador con estilo tecnológico
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700">
      <div className="relative h-60">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={product.imageUrl || "/images/placeholder-product.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 z-20 flex flex-col space-y-2">
          {product.isNew && (
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NUEVO
            </div>
          )}
          {product.discountPrice && (
            <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
              {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
            </div>
          )}
        </div>
        <div className="absolute bottom-3 right-3 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700">
          {categories.find(c => c.id === product.categoryId)?.name || product.categoryId}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition-colors">{product.name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-200 dark:text-gray-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">{product.rating} ({product.reviews})</span>
        </div>
        <div className="mb-4">
          {product.discountPrice ? (
            <div className="flex items-center">
              <span className="text-gray-400 dark:text-gray-500 line-through text-sm mr-2">${product.price.toFixed(2)}</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">${product.discountPrice.toFixed(2)}</span>
              <span className="ml-2 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">Ahorra ${(product.price - product.discountPrice).toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Link
              href={`/productos/${product.slug}`}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-xl flex items-center justify-center font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Ver Detalles
            </Link>
            {product.amazonAffiliateLink && (
              <a
                href={product.amazonAffiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-2.5 px-4 rounded-xl flex items-center justify-center font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.397 13.167c-.498.29-.998.776-1.498.776-.997 0-1.498-1.064-2.498-1.064-.799 0-1.199.968-2.099.968-1.398 0-2.097-2.129-2.996-4.453.8-1.842 1.499-2.904 2.597-2.904.8 0 1.199.775 2.199.775.997 0 1.598-.775 2.497-.775 1.3 0 2.098 1.064 2.997 3.227-1.797.484-2.497 1.259-1.199 3.45zm-3.497-7.138c-.398-.193-.898-.387-1.498-.387-2.996 0-5.293 2.904-5.992 6.421-.699 3.519.698 6.423 3.794 6.423.6 0 1.099-.194 1.699-.387-.2.193-.4.581-.4 1.163 0 .775.499 1.55 1.299 1.55.399 0 .699-.194.998-.775-1.198-.97-1.098-1.744-.599-3.488-.2.193-.599.387-.898.387-1.299 0-1.699-1.938-1.199-4.26.499-2.323 1.498-4.26 2.796-4.26.3 0 .699.193.899.387-.2-1.742-.4-2.129-1.09-2.323.47-.582.869-.97 1.399-.97.698 0 1.198.581 1.198 1.161 0 .582-.2.97-.399 1.357z"/>
                </svg>
                Comprar
              </a>
            )}
          </div>
          {product.stock > 0 ? (
            <div className="text-xs text-green-600 flex items-center justify-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Disponible ({product.stock} en stock)
            </div>
          ) : (
            <div className="text-xs text-red-500 flex items-center justify-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Agotado
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Category Card Component - Diseño tecnológico y futurista
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-56"
    >
      <div className="absolute h-full w-full bg-gradient-to-br from-blue-900/90 via-blue-800/70 to-blue-700/60 dark:from-blue-950/90 dark:via-slate-900/70 dark:to-indigo-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-black/40 dark:from-blue-950/20 dark:to-black/50 z-[1]"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-600 dark:via-blue-600 dark:to-indigo-700 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>

      <div className="relative h-full w-full">
        <Image
          src={category.imageUrl || "/images/placeholder-category.jpg"}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute bottom-0 left-0 p-5 w-full z-20">
          <div className="flex items-start space-x-2">
            <div className="p-2 rounded-lg bg-blue-600/30 backdrop-blur-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {category.id === 'paneles' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />}
                {category.id === 'baterias' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-5-3-5 3m10 12l-5-3-5 3M7 7l5 3 5-3M7 19l5-3 5 3" />}
                {category.id === 'inversores' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                {category.id === 'kits' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
                {category.id === 'accesorios' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                {category.id === 'monitoreo' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-1 group-hover:text-cyan-300 transition-colors">{category.name}</h3>
              <p className="text-blue-100 text-sm line-clamp-2 group-hover:text-white transition-colors">{category.description}</p>
            </div>
          </div>
          <div className="mt-3 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>

      <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
        Ver productos
      </div>
    </Link>
  );
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Futurista y Tecnológico */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 py-24 md:py-32 overflow-hidden">
        {/* Patrones geométricos animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute h-40 w-40 border border-blue-500/20 rounded-full top-1/4 -left-10 animate-pulse"></div>
            <div className="absolute h-60 w-60 border border-indigo-500/20 rounded-full bottom-1/3 right-10 animate-pulse animation-delay-700"></div>
            <div className="absolute h-20 w-20 border border-cyan-500/30 rounded-full top-1/3 right-1/4 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-cyan-400/5 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-600/10 to-purple-400/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

            {/* Líneas de cuadrícula */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center py-1 px-3 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
              <span className="text-cyan-300 text-sm font-medium">Tecnología de vanguardia</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300">
              Transforma Tu Hogar Con <br />
              <span className="text-white">Energía Solar Inteligente</span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Descubre productos solares de alta eficiencia respaldados por tecnología innovadora para un futuro más sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/productos"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-8 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Explorar Productos
                </span>
              </Link>

              <Link
                href="/categorias"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:text-cyan-300 py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                <span className="relative flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Ver Categorías
                </span>
              </Link>
            </div>
          </div>

          {/* Stats - Cifras destacadas */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">24<span className="text-cyan-400 dark:text-cyan-500">+</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Años de garantía</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">98<span className="text-cyan-400 dark:text-cyan-500">%</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Eficiencia en paneles</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">100<span className="text-cyan-400 dark:text-cyan-500">+</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Proyectos realizados</div>
            </div>
            <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-xl p-5 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-white mb-1">5<span className="text-cyan-400 dark:text-cyan-500">yr</span></div>
              <div className="text-sm text-blue-100 dark:text-blue-200">Soporte técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas - Nueva sección */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Productos</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Clientes Satisfechos</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Marcas Premiadas</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Rediseñada con tarjetas más modernas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Productos Destacados</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/productos" className="inline-block bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-2 border-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid - Nueva disposición */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorías</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explora nuestra selección de productos solares por categoría y encuentra la solución perfecta para tus necesidades energéticas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products Section - Nueva sección */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuevos Productos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Solar - Nueva sección informativa */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir energía solar?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <div className="text-cyan-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Energía limpia y renovable</h3>
              <p className="text-blue-100">La energía solar no produce emisiones de gases de efecto invernadero ni contamina el aire o el agua.</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <div className="text-cyan-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ahorro económico</h3>
              <p className="text-blue-100">Reduce significativamente tus facturas de electricidad y protégete contra los aumentos de precios de la energía.</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl">
              <div className="text-cyan-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Independencia energética</h3>
              <p className="text-blue-100">Genera tu propia electricidad y reduce la dependencia de las compañías eléctricas y los combustibles fósiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto - Reemplaza la sección "Contáctanos Hoy" */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas sobre nuestros productos?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a encontrar la solución perfecta para tus necesidades de energía solar.
          </p>
          <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700 font-medium">info@solarfluidity.shop</span>
          </div>
        </div>
      </section>
    </div>
  );
}
