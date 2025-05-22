import "./globals.css";

// Importar fuentes desde next/font/google
import { Inter } from "next/font/google";

// Import Header and Footer components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "SolarFluidity.shop - Soluciones de Energía Solar",
  description: "Tienda afiliada especializada en productos de energía solar: paneles, kits, baterías, inversores, accesorios y cursos educativos para Costa Rica y América.",
  keywords: "energía solar, paneles solares, kits solares, baterías solares, inversores, Costa Rica, energía renovable"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-[#060d24] text-white antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <div className="mx-auto w-full max-w-screen-2xl">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
