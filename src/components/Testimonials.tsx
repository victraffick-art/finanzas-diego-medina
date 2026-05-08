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
    name: "Juan Lucero",
    role: "Lawyer and mediator Co-Founder of Magnolia Foundation",
    country: "GUATEMALA",
    text: "Recientemente tuve la oportunidad de participar en una mentoria en Liderazgo a cargo de Diego. Solo puedo decir que Diego es un lider nato que, además, inspira a trabajar con valores pues es un gran ser humano. Su mentoria me permitió comprender a más profundidad la psicología humana y mi relación con otras personas. El conocimiento que Diego comparte es fundamental para el desarrollo de cualquier individuo u organización que desee tener un verdadero impacto en el mundo. Adicionalmente, Diego siempre inicia las sesiones con puntualidad y tiene la capacidad de transmitir conceptos complejos en una forma simple y accesible. Por todo lo anterior, sus cursos están 100% recomendados, e invito a todas y todos los profesionales en esta red a formar parte de las maravillosas mentorias de Diego.",
    image: "/juan-lucero.png"
  },
  {
    id: 2,
    name: "Luis Felipe Ordoñez",
    role: "Director Centro de Economía Circular",
    country: "COLOMBIA",
    text: "Si estás buscando fortalecer tu liderazgo y las competencias de tu Equipo de Trabajo, Diego es la Persona Indicada para ello. Conté con la Oportunidad de conocer y conectar con Diego a partir de un taller de Liderazgo organizado por la Red Conecta Iberoamérica, en el cual logramos identificar y desbloquear limitantes propios y del entorno que no nos permitían crecer como personas y por lo tanto desarrollar un verdadero liderazgo.\nDestaco su metodología, experiencia y orientación, la cual facilita el proceso y permite resultados concretos para quienes se atreven a llevar su propio proceso de transformación al siguiente nivel. Muchas Gracias Diego.",
    image: "/luis-felipe.png"
  },
  {
    id: 3,
    name: "Carolina Montero C.",
    role: "Directora de Doctorados e Innovación en Universidad Central de Ecuador",
    country: "ECUADOR",
    text: "Gracias Diego por las excelentes charlas y mentorías que nos has dado a lo largo de este tiempo, que sin duda nos han permitido hacer nuestro propios auto-feedback de cómo podemos mejorar y cómo podemos llevar mejor adelante a nuestros equipos.",
    image: "/carolina-montero.png"
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
    <section className="w-full bg-[#f4f6f9] py-8 md:py-12 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex items-center justify-center">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 md:left-10 z-20 w-8 h-8 md:w-10 md:h-10 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Testimonial Content */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-opacity duration-500 px-4 md:px-16" style={{ opacity: isAnimating ? 0 : 1 }}>
          
          {/* Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden">
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
            <h4 className="text-[#13253F] text-sm md:text-base mb-2">
              <span className="font-extrabold">{currentTestimonial.name}</span> | <span className="font-normal">{currentTestimonial.role}</span> | <span className="font-extrabold">{currentTestimonial.country}</span>
            </h4>
            
            <div className="text-[#3a4856] text-xs md:text-sm leading-relaxed opacity-90 whitespace-pre-wrap">
              {currentTestimonial.text}
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-2 md:right-10 z-20 w-8 h-8 md:w-10 md:h-10 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md hidden md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

      </div>
      
      {/* Mobile controls */}
      <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
        <button 
          onClick={handlePrev}
          className="w-8 h-8 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full ${idx === currentIndex ? 'bg-[#13253F]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-8 h-8 bg-[#FCD144] rounded-full flex items-center justify-center text-white hover:bg-[#ffde6a] transition-colors shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
