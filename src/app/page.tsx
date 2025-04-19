import Image from "next/image";
import Link from "next/link";

// Product Card Component 
const ProductCard = ({ title, price, imageUrl, category, link }: { 
  title: string, 
  price: string, 
  imageUrl: string, 
  category: string, 
  link: string 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover" 
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-blue-600 font-bold mb-3">{price}</p>
        <Link href={link} className="bg-blue-600 text-white w-full py-2 px-4 rounded hover:bg-blue-700 transition-colors inline-block text-center">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ title, imageUrl, link }: { title: string, imageUrl: string, link: string }) => {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-lg">
      <div className="relative h-44 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-solar.jpg" 
            alt="Paneles solares en un campo" 
            fill 
            className="object-cover brightness-75" 
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Soluciones de Energía Solar</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Productos de alta calidad para transformar la energía del sol en poder para tu hogar o negocio</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categorias" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Explorar Productos
            </Link>
            <Link href="/blog" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full transition-colors">
              Leer Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductCard
              title="Kit Solar 5kW Residencial Completo" 
              price="$2,499.99"
              imageUrl="/images/product-1.jpg"
              category="Kits"
              link="/productos/kit-solar-5kw-residencial"
            />
            <ProductCard
              title="Panel Solar Monocristalino 400W" 
              price="$299.99"
              imageUrl="/images/product-2.jpg"
              category="Paneles"
              link="/productos/panel-solar-monocristalino-400w"
            />
            <ProductCard
              title="Batería de Litio 48V 200Ah" 
              price="$1,899.99"
              imageUrl="/images/product-3.jpg"
              category="Baterías"
              link="/productos/bateria-litio-48v-200ah"
            />
            <ProductCard
              title="Inversor Hybrid 8kW" 
              price="$1,299.99"
              imageUrl="/images/product-4.jpg"
              category="Inversores"
              link="/productos/inversor-hybrid-8kw"
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/productos" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Paneles Solares"
              imageUrl="/images/category-1.jpg"
              link="/categorias/paneles-solares"
            />
            <CategoryCard
              title="Kits Completos"
              imageUrl="/images/category-2.jpg"
              link="/categorias/kits-completos"
            />
            <CategoryCard
              title="Baterías"
              imageUrl="/images/category-3.jpg"
              link="/categorias/baterias"
            />
            <CategoryCard
              title="Inversores"
              imageUrl="/images/category-4.jpg"
              link="/categorias/inversores"
            />
            <CategoryCard
              title="Accesorios"
              imageUrl="/images/category-5.jpg"
              link="/categorias/accesorios"
            />
            <CategoryCard
              title="Cursos y Libros"
              imageUrl="/images/category-6.jpg"
              link="/categorias/cursos"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir energía solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahorro Económico</h3>
              <p>Reduce tu factura eléctrica hasta un 90% y obtén un retorno de inversión en 3-5 años.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energía Limpia</h3>
              <p>Reduce tu huella de carbono y contribuye al cuidado del medio ambiente.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energía Inagotable</h3>
              <p>Aprovecha una fuente de energía inagotable y reduce la dependencia de combustibles fósiles.</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Independencia Energética</h3>
              <p>Protégete contra cortes de energía y aumentos de tarifas eléctricas.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para dar el salto a la energía solar?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Descubre nuestro catálogo completo de productos y encuentra la solución perfecta para tus necesidades energéticas.</p>
          <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
            Contáctanos Hoy
          </Link>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Últimos Artículos del Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/blog-1.jpg" 
                  alt="Instalación de paneles solares" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm font-semibold mb-2">Instalación</p>
                <h3 className="text-xl font-bold mb-3">Guía para instalar paneles solares en tu hogar</h3>
                <p className="text-gray-600 mb-4">Aprende los pasos fundamentales para una instalación exitosa de paneles solares en tu propiedad.</p>
                <Link href="/blog/guia-instalacion-paneles-solares" className="text-blue-600 font-semibold hover:underline">Leer más →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/blog-2.jpg" 
                  alt="Baterías solares" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm font-semibold mb-2">Tecnología</p>
                <h3 className="text-xl font-bold mb-3">Comparativa: Baterías de plomo vs. baterías de litio</h3>
                <p className="text-gray-600 mb-4">Descubre las ventajas y desventajas de los diferentes tipos de baterías para sistemas solares.</p>
                <Link href="/blog/comparativa-baterias" className="text-blue-600 font-semibold hover:underline">Leer más →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/blog-3.jpg" 
                  alt="Ahorro con energía solar" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm font-semibold mb-2">Economía</p>
                <h3 className="text-xl font-bold mb-3">¿Cuánto puedes ahorrar con energía solar en Costa Rica?</h3>
                <p className="text-gray-600 mb-4">Análisis detallado del ahorro potencial y retorno de inversión para proyectos solares en Costa Rica.</p>
                <Link href="/blog/ahorro-energia-solar-costa-rica" className="text-blue-600 font-semibold hover:underline">Leer más →</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors">
              Ver Todos los Artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
