import Image from "next/image";
import Link from "next/link";
import { products, categories, getFeaturedProducts, getNewProducts } from "../data/products";

// Product Card Component - Diseño mejorado con enlaces de afiliados
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative h-56">
        <Image 
          src={product.imageUrl || "/images/placeholder-product.jpg"} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.categoryId}
        </div>
        {product.discountPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs ml-1 text-gray-500">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          {product.discountPrice ? (
            <div>
              <span className="text-gray-400 line-through text-sm mr-2">${product.price.toFixed(2)}</span>
              <span className="text-blue-600 font-bold">${product.discountPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
          )}
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Link 
            href={`/productos/${product.slug}`} 
            className="bg-blue-600 text-white w-full py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center font-medium"
          >
            Ver Detalles
          </Link>
          {product.amazonAffiliateLink && (
            <a 
              href={product.amazonAffiliateLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full py-2 px-4 rounded-lg transition-colors inline-block text-center font-medium"
            >
              Comprar en Amazon
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Category Card Component - Diseño mejorado
const CategoryCard = ({ category }: { category: any }) => {
  return (
    <Link href={`/categorias/${category.slug}`} className="group block relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={category.imageUrl || "/images/placeholder-category.jpg"} 
          alt={category.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold mb-1 group-hover:text-blue-300 transition-colors">{category.name}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Rediseñada con animación y estilo futurista */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50 z-10"></div>
          <Image
            src="/images/hero-solar.jpg" 
            alt="Paneles solares en un campo" 
            fill 
            className="object-cover" 
            priority
          />
          {/* Elementos de diseño futurista */}
          <div className="absolute inset-0 z-20 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
          </div>
        </div>
        <div className="relative z-30 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 inline-block text-transparent bg-clip-text">
            Soluciones de Energía Solar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Productos de alta calidad para transformar la energía del sol en poder para tu hogar o negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categorias" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
              Explorar Productos
            </Link>
            <Link href="/productos" className="bg-transparent border-2 border-white hover:border-blue-300 text-white hover:text-blue-300 font-bold py-3 px-8 rounded-full transition-colors">
              Ver Catálogo
            </Link>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
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
