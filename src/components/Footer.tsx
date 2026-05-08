import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#13253F] py-12 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-baseline text-2xl md:text-3xl tracking-tight text-white mb-1">
            <span className="font-bold">Dieg</span>
            <span className="relative inline-block font-bold">
              o
              <span className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#00AEEF] rounded-full"></span>
            </span>
            <span className="font-extralight ml-2">Medina</span>
          </div>
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-white opacity-80 leading-tight">
            Liderazgo para el alto desempeño
          </span>
        </div>

        {/* Links Section */}
        <div className="flex justify-center text-white text-xs md:text-sm mb-4 opacity-90">
          <Link href="/politica-de-privacidad" className="hover:text-[#00AEEF] transition-colors">
            Política de Privacidad | Términos y Condiciones
          </Link>
        </div>

        {/* Copyright Section */}
        <p className="text-white text-[10px] md:text-[11px] opacity-70">
          © 2023 Diego Medina | Todos los derechos reservados
        </p>

      </div>
    </footer>
  );
}
