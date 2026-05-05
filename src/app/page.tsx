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
          
          {/* Left Side: Character Image (Diego) - Enlarged */}
          <div className="lg:col-span-5 h-full flex items-end justify-center lg:justify-start relative">
            <div className="relative w-full max-w-[650px] h-[750px] lg:h-[95vh] flex items-end -mb-8 scale-110 origin-bottom">
              <img 
                src="/diego-hero.png" 
                alt="Diego Medina" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20"
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

      {/* Quote Section */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-medium text-[#13253F] leading-tight tracking-tight">
            Si quieres hacer crecer tu vida, tus relaciones, tu carrera <br className="hidden md:block" />
            o tu negocio, primero debes crecer tú mismo.
          </h2>
        </div>
      </section>

      {/* Next Section Placeholder */}
      <div className="w-full h-[300px] bg-gray-50"></div>
    </main>
  );
}
