"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function GraciasEbook() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header (Simplified) */}
      <header className="bg-[#13253F] text-white py-4 px-6 md:px-16 flex justify-center items-center shadow-md">
        <div className="flex flex-col items-center">
          <div className="flex items-baseline text-xl md:text-2xl tracking-tight">
            <span className="font-bold text-[#FFFFFF]">Dieg</span>
            <span className="relative inline-block font-bold text-[#FFFFFF]">
              o
              <span className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#00AEEF] rounded-full"></span>
            </span>
            <span className="font-extralight ml-1 text-[#FFFFFF]">Medina</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow relative flex items-center justify-center py-12 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00AEEF]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F7C34D]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white rounded-[40px] shadow-[0_32px_64px_-12px_rgba(19,37,63,0.15)] overflow-hidden border border-gray-50">
            <div className="p-8 md:p-16 text-center flex flex-col items-center">
              
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce-subtle">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>

              <h1 className="text-[#13253F] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                ¡SOLO FALTA UN PASO!
              </h1>
              
              <p className="text-[#13253F] text-lg md:text-xl font-medium opacity-80 mb-10 max-w-2xl">
                Tus datos han sido registrados correctamente y tu Ebook está en camino a tu correo.
              </p>

              {/* Invitation Box */}
              <div className="w-full bg-[#13253F] rounded-[30px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00AEEF] via-[#F7C34D] to-[#00AEEF]"></div>
                
                <h2 className="text-[#F7C34D] text-xl md:text-2xl font-bold mb-4 tracking-widest uppercase">
                  Invitación Especial
                </h2>
                
                <h3 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
                  La Semana del Liderazgo Exponencial
                </h3>
                
                <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                  Únete a nuestro exclusivo grupo de WhatsApp para este <span className="text-white font-bold text-lg">Entrenamiento Gratuito</span>. Te ayudaré a elevar tu liderazgo a niveles superiores de desempeño en un mundo en constante cambio.
                </p>

                <Link 
                  href="https://chat.whatsapp.com/GsXP4i0rhVQ01KiGnp9Kkp?mblist_uid=64b1771bb8c3c&mbsubscriber_uid=69fe4c4460cdf"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-base md:text-lg tracking-wide px-8 md:px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(37,211,102,0.3)] group"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  ÚNETE AL GRUPO DE WHATSAPP
                </Link>
                
                <p className="mt-6 text-xs text-gray-400 font-medium tracking-wide">
                  * Acceso inmediato y gratuito
                </p>
              </div>

              <div className="mt-12">
                <Link href="/" className="text-[#13253F] font-bold text-sm hover:text-[#00AEEF] transition-colors border-b-2 border-transparent hover:border-[#00AEEF] pb-1">
                  VOLVER AL INICIO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
