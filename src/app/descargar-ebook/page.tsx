"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DescargarEbook() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Guardar en Supabase, en la tabla clientes_ebook
      const { error: supabaseError } = await supabase
        .from("clientes_ebook")
        .insert([{ nombre, correo, ebook: "Rompe Tus Limites" }]);

      if (supabaseError) {
        console.error("Supabase Error Details:", supabaseError);
        throw supabaseError;
      }

      setIsSuccess(true);
      setNombre("");
      setCorreo("");
    } catch (err: any) {
      console.error("Error complete al guardar:", err);
      // Si hay un mensaje de error específico de Supabase, lo mostramos en consola para depuración
      const errorMessage = err.message || "Error desconocido";
      setError(`Hubo un error al procesar tu solicitud: ${errorMessage}. Por favor, intenta de nuevo.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0771B8] flex items-center justify-center p-4 md:p-8">
      <div className="bg-[#f8f9fc] rounded-[32px] md:rounded-[48px] w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col md:flex-row p-8 md:p-12 lg:p-16 gap-8 md:gap-16">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src="/ebook-cover-transparent.png" 
            alt="Rompe Tus Limites Ebook"
            className="w-full max-w-[280px] md:max-w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center">
          <h1 className="text-[#3a4856] text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-3 tracking-tight leading-tight">
            ROMPE TUS LIMITES
          </h1>
          <p className="text-[#3a4856] text-base md:text-lg italic mb-10 font-medium opacity-90">
            Cómo fortalecer tu motivación para<br className="hidden lg:block" /> lograr resultados concretos.
          </p>

          {isSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-xl mb-4">
              <h3 className="font-bold text-lg mb-2">¡Felicidades!</h3>
              <p>Tus datos han sido registrados correctamente.</p>
              <p className="text-sm mt-2">Pronto recibirás el Ebook en tu correo o puedes descargarlo directamente (agregar link aquí).</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto space-y-4">
              <div>
                <input 
                  type="text" 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="NOMBRE"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0771B8] font-bold tracking-wide text-xs md:text-sm placeholder-gray-800 shadow-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="TU MEJOR CORREO"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0771B8] font-bold tracking-wide text-xs md:text-sm placeholder-gray-800 shadow-sm"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm font-semibold">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FCD144] hover:bg-[#ffde6a] disabled:opacity-70 disabled:cursor-not-allowed text-[#13253F] font-extrabold text-[15px] tracking-wide py-4 rounded-full transition-colors duration-300 shadow-md"
                >
                  {isLoading ? "PROCESANDO..." : "QUIERO MI EBOOK"}
                </button>
              </div>
            </form>
          )}

          <p className="text-[10px] md:text-[11px] text-[#3a4856] mt-6 max-w-sm mx-auto text-center opacity-80 leading-relaxed">
            Al rellenar este formulario, aceptas nuestras políticas<br className="hidden md:block" /> de privacidad términos y condiciones.
          </p>
        </div>

      </div>
    </main>
  );
}
