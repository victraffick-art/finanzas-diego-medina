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

      {/* Hero Section Placeholder (to be updated later) */}
      <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center text-gray-400">
        <p>Próxima sección: Hero con imagen de Diego Medina</p>
      </div>
    </main>
  );
}
