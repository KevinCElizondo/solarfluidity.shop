import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/src/components/Header"; // Import the Header component
import "./globals.css"; // Corrected path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar Fluidity Shop - Innovative Solar Products",
  description: "Discover the latest in solar technology and sustainable energy solutions at Solar Fluidity Shop. Your one-stop affiliate store for a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="py-6 text-center text-xs text-foreground/60 border-t border-border/40 px-4">
          <p>© {new Date().getFullYear()} Solar Fluidity Shop. Todos los derechos reservados.</p>
          <p className="mt-1">En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
        </footer>
      </body>
    </html>
  );
}
