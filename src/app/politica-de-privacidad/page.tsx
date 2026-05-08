import React from 'react';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-[#13253F] text-white">
      {/* Minimalist Professional Banner */}
      <nav className="w-full py-6 px-6 md:px-16 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="flex flex-col group">
          <div className="flex items-baseline text-xl md:text-2xl tracking-tight transition-transform group-hover:scale-105">
            <span className="font-bold">Dieg</span>
            <span className="relative inline-block font-bold">
              o
              <span className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-[#00AEEF] rounded-full"></span>
            </span>
            <span className="font-extralight ml-1">Medina</span>
          </div>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] font-medium text-gray-300 -mt-1 leading-tight">
            Volver al inicio
          </span>
        </Link>
        
        <div className="hidden md:block">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00AEEF]">Documentación Legal</span>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-black mb-12 tracking-tight text-center md:text-left">
          POLÍTICA DE PRIVACIDAD <span className="text-[#FCD144] block md:inline">Y TÉRMINOS Y CONDICIONES</span>
        </h1>

        <div className="space-y-10 text-gray-200 leading-relaxed font-medium">
          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">DATOS SOLICITADOS Y FINALIDAD</h2>
            <p>
              DIEGOMEDINA.CO informa a los usuarios que el tratamiento de los datos personales se realiza de acuerdo con las normativas vigentes en materia de protección de datos. Los datos solicitados (nombre y correo electrónico) a través de los formularios de contacto, suscripción a la newsletter o compra de productos, tienen como finalidad:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Responder a las consultas, sugerencias o solicitudes de los usuarios.</li>
              <li>Gestionar la suscripción a boletines informativos y comunicaciones comerciales electrónicas.</li>
              <li>Tramitar la compra de productos o servicios ofrecidos en el sitio web.</li>
              <li>Cumplir con las obligaciones legales y contables derivadas de la actividad comercial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">COOKIES</h2>
            <p>
              Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, realizar análisis estadísticos y mostrar publicidad personalizada. El usuario puede configurar su navegador para aceptar o rechazar las cookies, o para recibir un aviso cuando se instale una.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">TUS DERECHOS</h2>
            <p>Los titulares de los datos tienen derecho a:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de datos inexactos.</li>
              <li>Solicitar la supresión de sus datos cuando ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Portabilidad de los datos.</li>
            </ul>
            <p className="mt-6">
              Para ejercer estos derechos, el usuario debe enviar una comunicación escrita al correo electrónico: <span className="text-[#00AEEF] font-bold underline">contacto@diegomedina.co</span>.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">ENCARGADOS DEL TRATAMIENTO</h2>
            <p>
              DIEGOMEDINA.CO puede contratar a terceros para el tratamiento de datos en su nombre (como proveedores de hosting, servicios de email marketing o pasarelas de pago). Estos proveedores actúan como encargados del tratamiento y están obligados a cumplir con las medidas de seguridad y privacidad establecidas por ley.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">NEWSLETTER</h2>
            <p>
              El envío de boletines comerciales se realiza bajo el consentimiento explícito del usuario. En cada comunicación se incluye un enlace para darse de baja de forma automática y sencilla. Los datos de suscripción se conservarán mientras el usuario no retire su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">MODERACIÓN DE COMENTARIOS</h2>
            <p>
              En las secciones donde se permiten comentarios, DIEGOMEDINA.CO se reserva el derecho de eliminar aquellos que sean ofensivos, ilegales o que no guarden relación con la temática del sitio. Los datos facilitados para comentar se tratarán con el fin de publicar y moderar dicha participación.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">DURACIÓN DEL TRATAMIENTO</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Los datos de facturación se conservarán por el tiempo legalmente exigido.</li>
              <li>Los datos de suscripción y contacto se conservarán mientras el titular desee permanecer en la lista o hasta que solicite su eliminación.</li>
            </ul>
          </section>

          <section className="pt-10 border-t border-white/10 text-center md:text-left">
            <p className="text-sm opacity-60">
              DIEGOMEDINA.CO cumple con la Ley de Privacidad del Consumidor de California de 2018 (CCPA) para usuarios aplicables.
            </p>
            <p className="text-sm opacity-60 mt-2">
              © 2023 Diego Medina | Todos los derechos reservados
            </p>
          </section>
        </div>
      </div>

      {/* Subtle Bottom Line */}
      <div className="w-full h-1 bg-[#FCD144]" />
    </main>
  );
}
