"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  country: string;
  text: string;
  image: string;
}

// Temporary data until the user provides the real ones
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Luis Felipe Ordoñez",
    role: "Director Centro de Economía Circular",
    country: "COLOMBIA",
    text: "Si estás buscando fortalecer tu liderazgo y las competencias de tu Equipo de Trabajo, Diego es la Persona Indicada para ello. Conté con la Oportunidad de conocer y conectar con Diego a partir de un taller de Liderazgo organizado por la Red Conecta Iberoamérica, en el cual logramos identificar y desbloquear limitantes propios y del entorno que no nos permitían crecer como personas y por lo tanto desarrollar un verdadero liderazgo.\nDestaco su metodología, experiencia y orientación, la cual facilita el proceso y permite resultados concretos para quienes se atreven a llevar su propio proceso de transformación al siguiente nivel. Muchas Gracias Diego.",
    image: "/testimonial-placeholder.jpg" // Placeholder until real image is provided
  },
  {
    id: 2,
    name: "Nombre Testimonio 2",
    role: "Cargo Testimonio 2",
    country: "PAÍS",
    text: "Aquí irá el texto del segundo testimonio cuando lo envíes. Este es un texto de relleno para visualizar cómo se verá el slider automático una vez tengamos todos los testimonios completos.",
    image: "/testimonial-placeholder.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full bg-[#f4f6f9] py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex items-center justify-center">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 md:left-10 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Testimonial Content */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-opacity duration-500 px-4 md:px-16" style={{ opacity: isAnimating ? 0 : 1 }}>
          
          {/* Avatar */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback si no hay imagen aún
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + currentTestimonial.name + '&background=0771B8&color=fff&size=256';
              }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col text-center md:text-left">
            <h4 className="text-[#13253F] text-lg md:text-xl mb-4">
              <span className="font-bold">{currentTestimonial.name}</span> | <span className="font-normal">{currentTestimonial.role}</span> | <span className="font-bold">{currentTestimonial.country}</span>
            </h4>
            
            <div className="text-[#3a4856] text-sm md:text-base leading-relaxed opacity-90 whitespace-pre-wrap">
              {currentTestimonial.text}
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-2 md:right-10 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md hidden md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

      </div>
      
      {/* Mobile controls (dots or simple arrows) since absolute arrows might overlap on small screens */}
      <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-[#13253F]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-10 h-10 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
