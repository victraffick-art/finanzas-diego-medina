import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

/**
 * Main Landing Page Component
 * Includes Hero, About, Ebook, Testimonials and Social sections.
 * Updated: 2026-05-11
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Blue Banner (Header) */}
      <header className="bg-[#13253F] text-white py-4 px-6 md:px-16 flex justify-between items-center shadow-lg">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="flex items-baseline text-2xl md:text-3xl tracking-tight">
            <span className="font-bold text-[#FFFFFF]">Dieg</span><span className="relative inline-block font-bold text-[#FFFFFF]">o<span className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#00AEEF] rounded-full"></span></span><span className="font-extralight ml-2 text-[#FFFFFF]">Medina</span>
          </div>
          <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] font-medium text-gray-300 -mt-1 leading-tight">
            Liderazgo para el alto desempeño
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "INICIO", href: "/#inicio" },
            { label: "SOBRE MÍ", href: "/#sobre-mi" },
            { label: "EVENTO", href: "/#evento" },
            { label: "EBOOK", href: "/#ebook" },
            { label: "RECURSOS", href: "/#recursos" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-bold tracking-widest hover:text-[#00AEEF] transition-colors"
            >
              {item.label}
            </Link>
          ))}
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

        <div className="container mx-auto px-6 md:px-16 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[85vh] py-12 lg:py-0">
          
          {/* Text Content - Title is order-1 on mobile, P is order-3 */}
          <div className="lg:col-span-7 lg:order-2 flex flex-col justify-center relative z-30 w-full">
            <div className="max-w-3xl flex flex-col items-center">
              <h1 className="text-[#13253F] leading-[1.1] tracking-tight mb-4 lg:mb-12 text-center lg:text-left order-1 px-2">
                <span className="block font-extrabold text-[26px] md:text-[56px] lg:text-[76px]">Transforma tu liderazgo</span>
                <span className="block font-light text-[22px] md:text-[52px] lg:text-[64px] -mt-1">y alcanza resultados</span>
                <span className="block font-light text-[22px] md:text-[52px] lg:text-[64px] -mt-1">exponenciales</span>
              </h1>
              
              {/* Image for Mobile Only - Order 2 */}
              <div className="lg:hidden flex justify-center order-2 w-full">
                <img 
                  src="/diego-hero.png" 
                  alt="Diego Medina" 
                  className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] -mb-1"
                />
              </div>
              
              <div className="relative inline-block w-full lg:w-auto order-3">
                {/* Yellow Highlight Bar (Desktop) */}
                <div className="absolute inset-y-0 -left-6 -right-12 bg-gradient-to-r from-[#F7C34D]/70 via-[#F7C34D]/50 to-transparent z-0 transform -skew-x-12 rounded-l-md hidden lg:block"></div>
                
                {/* Mobile version of yellow highlight - Diffused/Blurred effect */}
                <div className="absolute inset-0 bg-[#F7C34D]/80 lg:hidden z-0 rounded-[40px] blur-xl opacity-60"></div>
                <div className="absolute inset-x-4 inset-y-1 bg-[#F7C34D]/90 lg:hidden z-0 rounded-2xl shadow-sm"></div>
                
                <p className="relative z-10 text-[16px] md:text-[24px] text-[#13253F] font-bold py-5 lg:py-3 px-10 lg:px-0 leading-relaxed text-center lg:text-left">
                  Te ayudo a desarrollar un <span className="font-extrabold border-b-4 border-[#13253F]/20">liderazgo estratégico</span> que acelere tus resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Character Image for Desktop Only - Order 1 */}
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

      {/* Quote Section - Minimal Padding */}
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
      <section id="sobre-mi" className="relative w-full overflow-hidden bg-white">
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/conference-bg.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row h-full">
          
          {/* Spacer for Desktop Image */}
          <div className="hidden lg:block lg:w-1/2"></div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-6 py-8 lg:py-10 relative z-10 lg:pl-16">
            <h2 className="text-[#13253F] text-[28px] md:text-[38px] font-bold mb-4 tracking-tight">
              ¡Hola! Soy Diego Medina
            </h2>
            
            <div className="space-y-4 text-[#13253F] text-[16px] md:text-[18px] font-medium leading-relaxed opacity-90">
              <p>
                He dedicado gran parte de mi vida a intentar ser un líder más auténtico.
              </p>
              <p>
                Soy coach, speaker y entrenador en liderazgo y desarrollo personal para el alto rendimiento, partner del Maxwell Leadership®.
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

        {/* Bottom Blue Band */}
        <div className="w-full bg-[#1c2f42] relative z-20 overflow-hidden">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row">
            {/* Spacer for Desktop Image */}
            <div className="hidden lg:block lg:w-1/3 shrink-0"></div>
            
            {/* Logos Slider */}
            <div className="w-full lg:w-2/3 py-2 lg:pl-20 flex items-center overflow-hidden">
              <div className="flex items-center w-max animate-marquee">
                <img 
                  src="/logos-partners-blue.png" 
                  alt="Partners y certificaciones" 
                  className="w-auto h-12 md:h-16 lg:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity pr-12 lg:pr-24"
                />
                <img 
                  src="/logos-partners-blue.png" 
                  alt="Partners y certificaciones" 
                  className="w-auto h-12 md:h-16 lg:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity pr-12 lg:pr-24"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Image of Diego */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[95%] lg:h-[135%] z-30 pointer-events-none flex items-end px-6">
          <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-end lg:translate-x-12">
            <img 
              src="/diego-about.png" 
              alt="Diego Medina" 
              className="w-auto h-full lg:min-h-[500px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto transform scale-110 lg:scale-[1.15] origin-bottom"
            />
          </div>
        </div>
      </section>

      {/* Ebook Gratuito Section */}
      <section id="ebook" className="w-full bg-white relative overflow-hidden animate-fade-in-up">
        <div className="container mx-auto max-w-6xl px-6 py-6 md:py-10 flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-16 relative z-10">
          
          {/* Ebook Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start lg:pl-0">
            <img 
              src="/ebook-cover-transparent.png" 
              alt="Rompe Tus Limites - Ebook Gratuito" 
              className="w-full max-w-[320px] md:max-w-[450px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Ebook Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left lg:-ml-4">
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
            
            <div className="w-full flex justify-center lg:justify-start lg:pr-8">
              <Link href="/descargar-ebook">
                <button className="bg-[#FCD144] hover:bg-[#ffde6a] text-[#13253F] font-bold text-[14px] md:text-[15px] tracking-wide px-10 py-4 rounded-full transition-colors duration-300 shadow-md cursor-pointer">
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
