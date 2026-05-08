import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Diego Medina | Desarrollo para el Alto Rendimiento",
  description: "Mentoring y Coaching Personal y Empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased bg-[#13253F] text-white`}>
        {children}
      </body>
    </html>
  );
}
