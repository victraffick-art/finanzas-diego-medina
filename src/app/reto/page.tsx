import React from 'react';
import './reto.css';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Video, 
  FileText, 
  Users, 
  Gift, 
  Bot, 
  BookOpen, 
  ShieldCheck,
  AlertCircle,
  TrendingDown,
  Layout,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Reto 7 Días: Toma el Control Total de tu Dinero | Diego Medina',
  description: 'Un programa intensivo y guiado para transformar tu caos financiero en un sistema simple, funcional y sostenible.',
}

export default function RetoPage() {
  return (
    <div className="reto-body min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden section-padding">
        <div className="hero-overlay"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#F7C34D]/20 border border-[#F7C34D]/30 text-[#F7C34D] px-6 py-2 rounded-full font-bold mb-8 animate-fade-in uppercase tracking-widest text-sm">
              Programa Intensivo • Humano • Guiado
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fade-in">
              “7 DÍAS PARA TOMAR EL <br />
              <span className="text-gradient-gold">CONTROL TOTAL</span> DE TU DINERO”
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Transforma el caos financiero en un sistema simple, funcional y sostenible.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg border border-red-500/20">
                <AlertCircle size={20} />
                <span>Sin teoría innecesaria</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg border border-red-500/20">
                <TrendingDown size={20} />
                <span>Sin Excel complicado</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg border border-red-500/20">
                <ShieldCheck size={20} />
                <span>Sin culpa</span>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link href="#pricing" className="cta-button text-lg">
                👉 Quiero tomar el control de mi dinero
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema 3C Section */}
      <section className="section-padding bg-[#0F1D33]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">El método que lo hace posible:</h2>
            <div className="text-4xl md:text-6xl font-black text-gradient-cyan">Sistema 3C™</div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Este reto funciona porque no se basa en fuerza de voluntad, sino en estructura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Clarity */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-[#00AEEF]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00AEEF]/30">
                <div className="step-dot bg-[#00AEEF] w-4 h-4 mt-0"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00AEEF]">🔵 CLARIDAD</h3>
              <p className="text-gray-300 leading-relaxed">
                Ves por primera vez tu realidad financiera completa, sin juicios.
              </p>
            </div>

            {/* Control */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30">
                <div className="step-dot bg-green-500 w-4 h-4 mt-0"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">🟢 CONTROL</h3>
              <p className="text-gray-300 leading-relaxed">
                Diseñas un sistema que se adapta a tu vida real (no al ideal de Instagram).
              </p>
            </div>

            {/* Growth */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                <div className="step-dot bg-purple-500 w-4 h-4 mt-0"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">🟣 CRECIMIENTO</h3>
              <p className="text-gray-300 leading-relaxed">
                Empiezas a reducir gastos, ordenar deudas y construir estabilidad.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 p-8 bg-white/5 rounded-3xl max-w-4xl mx-auto border border-white/10">
            <p className="text-2xl font-medium mb-4 italic text-gray-400">No haces “un presupuesto más”.</p>
            <p className="text-3xl font-bold text-white">👉 Instalas un sistema que trabaja por ti.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white text-[#13253F]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                ¿Qué vas a lograr en <br />
                <span className="text-[#00AEEF]">solo 7 días?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Saber exactamente a dónde se va tu dinero",
                  "Tener un presupuesto que sí puedes seguir",
                  "Reducir gastos sin sentirte limitado",
                  "Activar un plan real para salir de deudas",
                  "Empezar tu fondo de emergencia (desde cero)",
                  "Dormir más tranquilo sabiendo que tienes un plan"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 inline-block bg-[#00AEEF]/10 text-[#00AEEF] px-8 py-4 rounded-2xl font-bold text-xl border-2 border-[#00AEEF]/20">
                📈 Resultados visibles desde el día 3.
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F7C34D]/20 blur-3xl rounded-full"></div>
              <img 
                src="/financial_planning_templates_1778694695954.png" 
                alt="Planificación Financiera" 
                className="relative z-10 w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="section-padding bg-[#13253F] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Cómo funciona el reto?</h2>
            <div className="h-1.5 w-24 bg-[#F7C34D] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
              <Calendar className="mx-auto mb-4 text-[#F7C34D]" size={40} />
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Duración</div>
              <div className="text-2xl font-bold">7 a 10 días</div>
            </div>
            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
              <Clock className="mx-auto mb-4 text-[#F7C34D]" size={40} />
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Tiempo diario</div>
              <div className="text-2xl font-bold">~20 minutos</div>
            </div>
            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 lg:col-span-2">
              <Video className="mx-auto mb-4 text-[#F7C34D]" size={40} />
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Formato</div>
              <div className="text-xl font-bold">Guía paso a paso + Videos cortos + Plantillas + Acompañamiento</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-2xl font-bold text-gray-300">
            <div className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> No estás solo.</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> No improvisas.</div>
            <div className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Sigues el camino.</div>
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="section-padding bg-[#0A1424]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Todo lo que incluye tu acceso</h2>
            <p className="text-gray-400">Herramientas diseñadas para que el orden sea inevitable.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card">
              <BookOpen className="text-[#F7C34D] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">📘 Guía “Mapa del Tesoro”</h3>
              <p className="text-gray-400 leading-relaxed">Tu hoja de ruta diaria para ordenar tus finanzas sin choque emocional.</p>
            </div>
            <div className="glass-card">
              <Layout className="text-[#00AEEF] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">📊 Plantilla “Plan Financiero”</h3>
              <p className="text-gray-400 leading-relaxed">Ingresos, gastos, ahorro y deudas en un solo lugar, claro y editable.</p>
            </div>
            <div className="glass-card">
              <CreditCard className="text-green-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">💳 Plantilla “Gestión de Tarjetas”</h3>
              <p className="text-gray-400 leading-relaxed">Evita intereses, fechas olvidadas y decisiones impulsivas.</p>
            </div>
            <div className="glass-card">
              <Video className="text-red-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">🎥 Videos explicativos</h3>
              <p className="text-gray-400 leading-relaxed">Directos, humanos y sin tecnicismos.</p>
            </div>
            <div className="glass-card">
              <Users className="text-purple-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">🧠 2 sesiones en vivo</h3>
              <p className="text-gray-400 leading-relaxed">Para resolver dudas y ajustar tu plan a tu realidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section-padding bg-[#13253F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F7C34D] to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Gift className="text-[#F7C34D]" size={48} />
              <h2 className="text-4xl md:text-6xl font-black uppercase italic">Bonos Exclusivos</h2>
            </div>
            <p className="text-xl text-[#F7C34D] font-bold tracking-widest">(TIEMPO LIMITADO)</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Bonus 1 */}
            <div className="glass-card border-[#F7C34D]/50 bg-[#F7C34D]/5">
              <div className="text-sm font-bold text-[#F7C34D] mb-4">BONUS #1</div>
              <h3 className="text-2xl font-bold mb-6">Guía “Gasta Mejor, Vive Mejor”</h3>
              <p className="text-gray-300 leading-relaxed">Libera flujo sin ganar más dinero.</p>
            </div>

            {/* Bonus 2 - IA Mentor */}
            <div className="glass-card border-[#00AEEF]/50 bg-[#00AEEF]/5 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-20">
                <Bot size={200} />
              </div>
              <div className="text-sm font-bold text-[#00AEEF] mb-4">BONUS #2</div>
              <h3 className="text-2xl font-bold mb-6">Mentor IA 24/7</h3>
              <p className="text-gray-300 mb-6">Tu asistente financiero personal:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#00AEEF]" /> Responde dudas en tiempo real</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#00AEEF]" /> Te ayuda a decidir</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#00AEEF]" /> Te acompaña sin juzgar</li>
              </ul>
            </div>

            {/* Bonus 3 */}
            <div className="glass-card border-purple-500/50 bg-purple-500/5">
              <div className="text-sm font-bold text-purple-400 mb-4">BONUS #3</div>
              <h3 className="text-2xl font-bold mb-6">Ebook “La Ruta hacia tu Libertad”</h3>
              <p className="text-gray-300 leading-relaxed">Diseña tu visión financiera a 5, 10 y 20 años con propósito y calma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-white text-[#13253F]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-10">¿Este reto es para ti?</h2>
              <div className="space-y-6">
                {[
                  "Si ganas dinero pero no sabes dónde se va",
                  "Si ya intentaste presupuestos y no funcionaron",
                  "Si te genera ansiedad mirar tus números",
                  "Si quieres orden sin culpa",
                  "Si buscas calma, no perfección"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                    <CheckCircle2 className="text-green-500 shrink-0" />
                    <span className="text-lg font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 p-12 rounded-3xl border border-red-100 h-fit">
              <h2 className="text-3xl font-black mb-8 text-red-600">❌ No es para ti si...</h2>
              <p className="text-xl font-bold text-red-800">
                No es para ti si buscas “hacerte rico rápido”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Objections Section */}
      <section className="section-padding bg-[#0F1D33]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Objeciones normales <br /><span className="text-gray-500 text-2xl font-medium">(y respuestas honestas)</span></h2>
          
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-[#F7C34D]">“No tengo tiempo”</h3>
              <p className="text-gray-300 text-lg">👉 Solo 20 minutos al día. Menos tiempo del que hoy pierdes preocupándote.</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-[#F7C34D]">“Ya intenté antes”</h3>
              <p className="text-gray-300 text-lg">👉 Esta vez no estás solo. Hay sistema + acompañamiento.</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-[#F7C34D]">“Gano poco”</h3>
              <p className="text-gray-300 text-lg">👉 Justamente por eso el control es urgente.</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 text-[#F7C34D]">“7 días no alcanzan”</h3>
              <p className="text-gray-300 text-lg">👉 No prometemos magia. Prometemos el primer gran cambio: claridad + plan funcionando.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto pricing-card bg-[#13253F] rounded-[40px] p-12 text-center text-white shadow-2xl relative">
            <div className="pricing-badge">Lanzamiento</div>
            <div className="text-2xl mb-4 font-bold text-[#F7C34D]">💰 Inversión</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Precio especial de lanzamiento</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl text-gray-500 line-through">USD $150</span>
              <span className="text-6xl font-black text-[#F7C34D]">USD $17</span>
            </div>
            <p className="text-gray-400 mb-10 font-bold uppercase tracking-widest">(Pago único • Acceso de por vida)</p>
            
            <div className="bg-white/10 p-6 rounded-2xl mb-10 border border-white/10">
              <p className="text-xl">Riesgo para ti: <span className="text-green-400 font-bold">CERO</span></p>
            </div>

            <Link href="#" className="cta-button w-full justify-center text-xl py-6">
              ¡Quiero empezar ahora!
            </Link>
          </div>

          <div className="max-w-2xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 p-12 bg-green-50 rounded-[40px] border-2 border-green-200 text-[#13253F]">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
              <ShieldCheck size={64} />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4">🔒 Garantía total de 7 días</h3>
              <p className="text-lg leading-relaxed">
                Aplica el reto. Haz los ejercicios. Si no obtienes claridad real, 
                <span className="font-black text-green-600"> 👉 te devolvemos el 100 % de tu dinero.</span>
              </p>
              <p className="mt-4 text-gray-500 italic font-medium">Sin preguntas. Sin letra chica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Urgency Section */}
      <section className="section-padding bg-[#0A1424] text-center border-t border-white/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-gradient-gold uppercase italic">⏳ Importante</h2>
            <div className="space-y-6 mb-16 text-2xl font-bold text-gray-300">
              <p className="flex items-center justify-center gap-4"><AlertCircle className="text-red-500" /> Bonos disponibles solo por tiempo limitado</p>
              <p className="flex items-center justify-center gap-4"><TrendingDown className="text-red-500" /> El precio subirá a USD $37</p>
            </div>

            <Link href="#pricing" className="cta-button text-2xl px-12 py-8">
              👉 Quiero tomar el control de mi dinero
            </Link>

            <div className="mt-24 text-gray-500 text-sm tracking-widest uppercase">
              © 2026 Diego Medina | Todos los derechos reservados
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
