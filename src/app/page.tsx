import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

/**
 * Main Landing Page Component
 * Includes Hero, About, Ebook, Testimonials and Social sections.
 * Updated: 2026-05-11 - Final Interactive Version
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: 'Diego Medina | Liderazgo Exponencial',
  description: 'Programa de liderazgo estratégico y mentalidad de alto desempeño.',
  other: {
    version: '1.0.9'
  }
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Blue Banner (Header) */}
      <header className="bg-[#13253F] text-white py-4 px-6 md:px-16 flex justify-between items-center shadow-lg sticky top-0 z-50">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="flex items-baseline tracking-tight">
            <span className="font-bold text-[#FFFFFF] text-2xl md:text-3xl">Dieg</span>
            <span className="relative inline-block font-bold text-[#FFFFFF] text-2xl md:text-3xl">
              o
              <span className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#00AEEF] rounded-full"></span>
            </span>
            <span className="font-extralight ml-2 text-[#FFFFFF] text-2xl md:text-3xl">Medina</span>
          </div>
          <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] font-medium text-gray-300 -mt-1 leading-tight">
            Liderazgo para el alto desempeño
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#inicio" className="nav-link-premium text-white font-medium text-sm tracking-widest">INICIO</a>
          <a href="#sobre-mi" className="nav-link-premium text-white font-medium text-sm tracking-widest">SOBRE MÍ</a>
          <a href="#ebook" className="nav-link-premium text-white font-medium text-sm tracking-widest">EBOOK</a>
          <a href="#recursos" className="nav-link-premium text-white font-medium text-sm tracking-widest">RECURSOS</a>
          <a href="#evento" className="nav-link-premium text-white font-medium text-sm tracking-widest">EVENTO</a>
        </nav>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="lg:hidden p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Fixed Attachment (Parallax effect) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-700"
          style={{ 
            backgroundImage: "url('/blurred-bg.png')",
            filter: "blur(15px) brightness(1.1)",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Soft white overlay for maximum text contrast */}
          <div className="absolute inset-0 bg-white/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-16 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-16 items-center min-h-0 lg:min-h-[85vh] py-8 lg:py-0">
          
          {/* Text Content */}
          <div className="lg:col-span-7 lg:order-2 flex flex-col justify-center relative z-30 w-full mt-2 lg:mt-0">
            <div className="max-w-3xl flex flex-col items-center lg:items-start">
              <h1 className="text-[#13253F] tracking-tight mb-4 lg:mb-12 text-center lg:text-left order-1">
                <span className="block font-extrabold text-2xl md:text-5xl lg:text-[76px] leading-tight lg:leading-[1.05]">Transforma tu liderazgo</span>
                <span className="block font-light text-xl md:text-4xl lg:text-[64px] -mt-1 leading-tight lg:leading-[1.05]">y alcanza resultados</span>
                <span className="block font-light text-xl md:text-4xl lg:text-[64px] -mt-1 leading-tight lg:leading-[1.05]">exponenciales</span>
              </h1>
              
              {/* Image for Mobile Only */}
              <div className="lg:hidden flex justify-center order-2 w-full my-6">
                <img 
                  src="/diego-hero.png" 
                  alt="Diego Medina" 
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
                />
              </div>
              
              <div className="relative inline-block w-full lg:w-auto order-3">
                {/* Yellow Highlight Bar (Desktop) */}
                <div className="absolute inset-y-0 -left-6 -right-12 bg-gradient-to-r from-[#F7C34D]/70 via-[#F7C34D]/50 to-transparent z-0 transform -skew-x-12 rounded-l-md hidden lg:block"></div>
                
                {/* Mobile version of yellow highlight */}
                <div className="absolute inset-0 bg-[#F7C34D]/80 lg:hidden z-0 rounded-[40px] blur-xl opacity-60"></div>
                <div className="absolute inset-x-2 inset-y-1 bg-[#F7C34D]/90 lg:hidden z-0 rounded-xl shadow-sm"></div>
                
                <p className="relative z-10 text-[18px] lg:text-[24px] text-[#13253F] font-bold py-4 lg:py-3 px-6 lg:px-0 leading-relaxed text-center lg:text-left">
                  Te ayudo a desarrollar un <span className="font-extrabold border-b-2 lg:border-b-4 border-[#13253F]/20">liderazgo estratégico</span> que acelere tus resultados.
                </p>
              </div>

              {/* CTA Buttons in Hero */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start order-4 mt-12 w-full lg:w-auto">
                <a 
                  href="#evento" 
                  className="btn-premium bg-[#F7C34D] text-[#13253F] px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                >
                  Saber más del Programa
                </a>
                <a 
                  href="#ebook" 
                  className="btn-premium border-2 border-[#13253F] text-[#13253F] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                >
                  Descargar Ebook Gratis
                </a>
              </div>
            </div>
          </div>

          {/* Character Image for Desktop Only */}
          <div className="hidden lg:flex lg:col-span-5 h-full items-end justify-center lg:justify-start relative lg:order-1">
            <div className="relative w-full max-w-[600px] h-[750px] lg:h-[90vh] flex items-end -mb-4 scale-100 origin-bottom">
              <img 
                src="/diego-hero.png" 
                alt="Diego Medina" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-8 md:py-10 px-6 relative z-30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[18px] md:text-[24px] lg:text-[28px] font-medium text-[#13253F] leading-tight tracking-normal">
            Si quieres hacer crecer tu vida, tus relaciones, tu carrera <br className="hidden md:block" />
            o tu negocio, primero debes crecer tú mismo.
          </p>
        </div>
      </section>

      {/* Mentalidad Estratégica Section */}
      <section id="evento" className="bg-[#13253F] py-12 md:py-16 px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <p className="text-white text-[22px] md:text-[28px] font-bold mb-4 md:mb-6 tracking-tight">
            ¿Estás preparado para el siguiente nivel?
          </p>
          
          <div className="flex flex-col items-center mb-8 gap-2 md:gap-4 lg:gap-6">
            <h2 className="text-[#00AEEF] text-[60px] md:text-[100px] lg:text-[150px] font-black leading-none tracking-tighter drop-shadow-2xl uppercase">
              MENTALIDAD
            </h2>
            <div className="text-[#F7C34D] text-[22px] md:text-[42px] lg:text-[58px] font-light tracking-[0.35em] md:tracking-[0.55em] lg:tracking-[0.7em] leading-none uppercase ml-4">
              ESTRATÉGICA
            </div>
          </div>
          
          <p className="text-white text-[20px] md:text-[26px] lg:text-[30px] font-bold max-w-5xl mx-auto leading-tight md:leading-relaxed opacity-90 px-4">
            Transforma tu liderazgo y conviértete en el estratega <br className="hidden md:block" />
            que impulsa el crecimiento y acelera los resultados.
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="relative w-full overflow-hidden bg-white flex flex-col">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/conference-bg.png')" }}
        >
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        {/* Content Grid - NO bottom padding so image touches the bar */}
        <div className="container mx-auto px-6 md:px-16 relative z-10 pt-12 lg:pt-20 pb-0 flex-1">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end h-full">
            
            {/* Title - Top on mobile only */}
            <div className="w-full lg:hidden text-center mb-4">
              <h2 className="text-[32px] font-extrabold text-[#13253F] leading-tight">
                ¡Hola! Soy Diego Medina
              </h2>
            </div>

            {/* Image - Left on desktop, bottom-aligned so it sits flush on the logo bar */}
            <div className="order-1 lg:col-span-5 flex justify-center lg:justify-start items-end self-end">
              <div className="relative w-full max-w-[340px] lg:max-w-none lg:w-[130%] lg:-ml-16">
                <img 
                  src="/diego-about.png" 
                  alt="Diego Medina" 
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Text Content - Right on desktop */}
            <div className="order-2 lg:col-span-7 flex flex-col justify-center pb-12">
              <h2 className="hidden lg:block text-[42px] font-extrabold text-[#13253F] leading-tight mb-8 text-center">
                ¡Hola! Soy Diego Medina
              </h2>
              
              <div className="space-y-6 text-[#13253F] text-lg md:text-xl leading-relaxed text-justify lg:text-left">
                <p>He dedicado gran parte de mi vida a intentar ser un líder más auténtico.</p>
                <p>
                  Soy coach, speaker y entrenador en liderazgo y desarrollo personal para el alto rendimiento, partner del <span className="font-bold">Maxwell Leadership®</span>.
                </p>
                <p>
                  Durante más de 27 años estuve vinculado al sector financiero gestionando equipos para impulsar el máximo desempeño, la rentabilidad y la experiencia de las personas.
                </p>
                <p>
                  Creo que el mundo necesita líderes más auténticos. No jefes carismáticos o motivados por el ego, sino líderes reales, que pueden integrar a la gente con el propósito común de hacer el mundo un lugar mejor para todos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Auto-Scroll Banner */}
        <div className="w-full bg-[#13253F] relative z-20 py-5 border-t-4 border-[#FCD144] overflow-hidden">
          <div className="flex items-center w-max animate-marquee">
            <img
              src="/logos-partners-blue.png"
              alt="Partners: Maxwell Leadership, IEPP, LASALLE, Coaching Hall"
              className="h-12 md:h-16 w-auto object-contain opacity-90 px-16 brightness-0 invert"
            />
            <img
              src="/logos-partners-blue.png"
              alt="Partners: Maxwell Leadership, IEPP, LASALLE, Coaching Hall"
              className="h-12 md:h-16 w-auto object-contain opacity-90 px-16 brightness-0 invert"
            />
          </div>
        </div>

      </section>

      {/* Ebook Gratuito Section */}
      <section id="ebook" className="w-full bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-16 relative z-10">
          
          {/* Ebook Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start lg:pl-0">
            <img 
              src="/ebook-cover-transparent.png" 
              alt="Rompe Tus Limites - Ebook Gratuito" 
              className="w-full max-w-[320px] md:max-w-[450px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Ebook Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[#13253F] text-[26px] md:text-[32px] font-bold mb-10 w-full text-center">
              Ebook Gratuito
            </h2>
            
            <h3 className="text-[#13253F] text-[18px] md:text-[22px] font-bold mb-6 tracking-tight text-justify">
              ¿Por qué nos cuesta tanto sostener el esfuerzo?
            </h3>
            
            <p className="text-[#13253F] text-[16px] md:text-[18px] mb-6 font-medium opacity-90 leading-relaxed text-justify">
              ¿Qué pasaría si pudiera mostrarte una nueva forma de pensar que resolvería de tajo todo este problema?
            </p>
            
            <p className="text-[#13253F] text-[16px] md:text-[18px] mb-10 font-medium opacity-90 leading-relaxed text-justify">
              En esta ligera guía está lo que creo que será una de las cosas mas importantes que jamás aprenderás. ¡Lo sé! Suena demasiado bueno para ser verdad, sin embargo léelo hasta el final, no te tomará más de 15 minutos. ¿Qué tanto puedes perder?
            </p>
            
            <div className="w-full flex justify-center lg:justify-start">
              <Link href="/descargar-ebook">
                <button className="btn-premium bg-[#FCD144] text-[#13253F] font-bold text-[14px] md:text-[15px] tracking-wide px-10 py-4 rounded-full shadow-md">
                  DESCÁRGALO GRATIS
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Slider */}
      <Testimonials />

      {/* Social Media Section */}
      <div id="recursos">
        <SocialSection />
      </div>

      {/* Footer */}
      <Footer />

    </main>
  );
}
