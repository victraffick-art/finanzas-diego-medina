import Link from "next/link";

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
          {["SOBRE MÍ", "EVENTO", "WORKBOOK", "RECURSOS"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
              className="text-[13px] font-bold tracking-widest hover:text-[#00AEEF] transition-colors"
            >
              {item}
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
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
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

        <div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh]">
          
          {/* Left Side: Character Image (Diego) - Slightly smaller scale */}
          <div className="lg:col-span-5 h-full flex items-end justify-center lg:justify-start relative">
            <div className="relative w-full max-w-[600px] h-[750px] lg:h-[90vh] flex items-end -mb-4 scale-100 origin-bottom">
              <img 
                src="/diego-hero.png" 
                alt="Diego Medina" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-7 py-12 lg:py-0 flex flex-col justify-center relative z-30">
            <div className="max-w-3xl">
              <h1 className="text-[#13253F] leading-[1.05] tracking-tight mb-12">
                <span className="block font-extrabold text-[40px] md:text-[56px] lg:text-[76px]">Transforma tu liderazgo</span>
                <span className="block font-light text-[36px] md:text-[52px] lg:text-[64px] -mt-2">y alcanza resultados</span>
                <span className="block font-light text-[36px] md:text-[52px] lg:text-[64px] -mt-2">exponenciales</span>
              </h1>
              
              <div className="relative inline-block">
                {/* Yellow Highlight Bar - More vibrant and precise */}
                <div className="absolute inset-y-0 -left-6 -right-12 bg-gradient-to-r from-[#F7C34D]/70 via-[#F7C34D]/50 to-transparent z-0 transform -skew-x-12 rounded-l-md"></div>
                
                <p className="relative z-10 text-[20px] md:text-[24px] text-[#13253F] font-medium py-3 leading-relaxed">
                  Te ayudo a desarrollar un <span className="font-bold border-b-4 border-[#13253F]/10">liderazgo estratégico</span> que acelere tus resultados.
                </p>
              </div>
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
      <section className="bg-[#13253F] py-12 md:py-16 px-6 text-center">
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
          style={{ backgroundImage: "url('/blurred-bg.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row">
          
          {/* Spacer for Desktop Image */}
          <div className="hidden lg:block lg:w-5/12"></div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 px-6 py-16 lg:py-24 relative z-10 lg:pl-12">
            <h2 className="text-[#13253F] text-[32px] md:text-[44px] font-bold mb-8 tracking-tight">
              ¡Hola! Soy Diego Medina
            </h2>
            
            <div className="space-y-6 text-[#13253F] text-[18px] md:text-[20px] font-medium leading-relaxed opacity-90">
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
        <div className="w-full bg-[#13253F] relative z-20">
          <div className="container mx-auto flex flex-col lg:flex-row">
            {/* Spacer for Desktop Image */}
            <div className="hidden lg:block lg:w-5/12"></div>
            
            <div className="w-full lg:w-7/12 py-8 px-6 lg:pl-12 flex flex-wrap items-center justify-start gap-x-8 gap-y-6">
              {/* Logos */}
              <div className="flex items-center text-white gap-2 opacity-90 hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z"/></svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[14px] font-bold tracking-widest uppercase">Maxwell</span>
                  <span className="text-[10px] font-light tracking-[0.25em] uppercase mt-0.5">Leadership</span>
                </div>
              </div>

              <div className="flex items-center text-white opacity-90 hover:opacity-100 transition-opacity">
                <span className="text-[28px] font-black tracking-tight leading-none">IEPP</span>
                <div className="flex flex-col ml-2 leading-[1.1]">
                  <span className="text-[6px] font-bold uppercase tracking-wider">instituto</span>
                  <span className="text-[6px] font-bold uppercase tracking-wider">europeo de</span>
                  <span className="text-[6px] font-bold uppercase tracking-wider">psicología</span>
                  <span className="text-[6px] font-bold uppercase tracking-wider">positiva</span>
                </div>
              </div>

              <div className="flex items-center text-white opacity-90 hover:opacity-100 transition-opacity gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="flex flex-col leading-none">
                  <span className="text-[20px] font-black tracking-tighter uppercase">LASALLE</span>
                  <span className="text-[8px] font-medium tracking-[0.15em] uppercase mt-0.5">centro universitario</span>
                </div>
              </div>

              <div className="flex items-center text-white opacity-90 hover:opacity-100 transition-opacity">
                 <svg className="w-8 h-8 fill-current mr-2" viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-15h2v6h-2zm0 8h2v2h-2z"/></svg>
                 <div className="flex flex-col leading-none">
                   <span className="text-[12px] font-bold tracking-widest uppercase">Coaching Hall</span>
                   <span className="text-[8px] font-light tracking-[0.2em] uppercase mt-0.5">International</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Image of Diego */}
        <div className="absolute bottom-0 left-0 w-full lg:w-5/12 h-[80%] lg:h-[110%] z-30 pointer-events-none flex justify-center lg:justify-end items-end px-6 lg:pl-16">
          <img 
            src="/diego-about.png" 
            alt="Diego Medina" 
            className="w-auto h-full max-h-[600px] lg:max-h-[850px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto"
          />
        </div>
      </section>
    </main>
  );
}
