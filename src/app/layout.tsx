import "./globals.css";

// Importar fuentes desde next/font/google
import { Inter, Roboto_Mono } from "next/font/google";

// Import Header and Footer components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// Configurar fuentes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: "SolarFluidity.shop - Soluciones de Energía Solar",
  description: "Tienda afiliada especializada en productos de energía solar: paneles, kits, baterías, inversores, accesorios y cursos educativos para Costa Rica y América.",
  keywords: "energía solar, paneles solares, kits solares, baterías solares, inversores, Costa Rica, energía renovable"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
