import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "3 Fórmulas Prohibidas - Neon Red Edition",
  description: "Libera tu flujo de caja, detén la hemorragia y escala a millones rompiendo tu identidad limitante con Jonathan Toro.",
  openGraph: {
    title: "3 Fórmulas Prohibidas",
    description: "Método NEXOR - Libera tu Flujo de Caja",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${manrope.variable} ${manrope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
