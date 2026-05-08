import React from 'react';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-[#13253F] text-white">
      {/* Minimalist Professional Banner */}
      <nav className="w-full py-6 px-6 md:px-16 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#13253F]/80 backdrop-blur-md z-50">
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
        <div className="mb-12 text-center md:text-left">
          <p className="text-[#00AEEF] text-sm font-bold tracking-widest uppercase mb-4">Actualizado al 22 de diciembre del 2022</p>
          <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            POLÍTICA DE PRIVACIDAD <span className="text-[#FCD144] block md:inline">Y TÉRMINOS Y CONDICIONES</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium italic">
            Desde DIEGOMEDINA.CO tratamos los datos personales con respeto y sensibilidad.
          </p>
        </div>

        <div className="space-y-12 text-gray-200 leading-relaxed font-medium">
          <section className="space-y-4">
            <p>
              Esta política de privacidad junto con el aviso legal, política de cookies, de ventas, términos y condiciones, y cualquier otra política a la que se haga referencia, identifica cómo se recopilan y procesan los datos personales que se reciben en este sitio web.
            </p>
            <p>
              La información que se encuentra en este sitio web no está dirigida a niños. Se entenderá por niño lo que la ley de la jurisdicción donde se encuentre así lo defina, en el caso de Estados Unidos de América es alguien menor a 13 años. Si el usuario cree que algún niño ha proporcionado sus datos personales en este sitio web sin el consentimiento de los padres, deberá escribir a <span className="text-[#00AEEF] font-bold">contacto@diegomedina.co</span>.
            </p>
            <p>
              Si el usuario tiene menos de 13 años, deberá tener la autorización de sus padres o tutores legales para entregar sus datos personales. DIEGOMEDINA.CO no tiene manera de comprobar efectivamente la edad de los usuarios, por lo que queda eximida de cualquier responsabilidad, si el usuario no cumple con lo aquí indicado. En DIEGOMEDINA.CO cumplimos con la Ley de Protección de la Privacidad en Línea de los Niños de 1998 (“COPPA”).
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider border-l-4 border-[#FCD144] pl-4">DATOS IDENTIFICATIVOS DEL RESPONSABLE</h2>
            <p className="mb-4 italic">Tal y como recoge la normativa vigente, te informamos que:</p>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-[#FCD144]">•</span>
                <span><strong>Denominación social:</strong> DIEGOMEDINA.CO</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCD144]">•</span>
                <span><strong>Domicilio social:</strong> Rionegro, Antioquia, Calle 26, Colombia.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCD144]">•</span>
                <span><strong>Email de contacto:</strong> contacto@diegomedina.co</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FCD144]">•</span>
                <span><strong>Actividad social:</strong> formación, mentoring y asesoría personal.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider border-l-4 border-[#FCD144] pl-4">DATOS SOLICITADOS Y FINALIDAD</h2>
            <ul className="space-y-6">
              <li className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
                <h3 className="font-bold text-white mb-2 underline decoration-[#00AEEF] underline-offset-4">Formularios de contacto:</h3>
                <p>Nombre, apellidos y correo electrónico para realizar cualquier contacto directo con DIEGOMEDINA.CO. No suministrar estos datos imposibilitará responder a la petición.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
                <h3 className="font-bold text-white mb-2 underline decoration-[#00AEEF] underline-offset-4">Comentarios en el blog:</h3>
                <p>Nombre, correo electrónico para poder realizar comentarios en el blog del sitio web.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
                <h3 className="font-bold text-white mb-2 underline decoration-[#00AEEF] underline-offset-4">Pagos de servicios:</h3>
                <p>Nombre, apellidos, dirección, teléfono, correo electrónico, número de identificación fiscal para procesar todo lo relacionado con el cliente.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
                <h3 className="font-bold text-white mb-2 underline decoration-[#00AEEF] underline-offset-4">Newsletter:</h3>
                <p>Nombre, teléfono y correo electrónico para enviar boletines comerciales automatizados sobre publicidad y promociones con consentimiento expreso.</p>
              </li>
              <li className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
                <h3 className="font-bold text-white mb-2 underline decoration-[#00AEEF] underline-offset-4">Área de cliente:</h3>
                <p>Correo electrónico para poder acceder a la cuenta personal de acuerdo con los datos suministrados.</p>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <p>
              DIEGOMEDINA.CO en todo momento velará porque el uso que se le da al sitio web, a los contenidos, y al tratamiento de los datos personales del usuario, se realicen de la forma más correcta. Para ello, el usuario siempre podrá ejercer sus derechos escribiendo al <span className="text-[#00AEEF] font-bold underline">contacto@diegomedina.co</span>.
            </p>
            <p className="font-bold text-white text-lg">
              DIEGOMEDINA.CO no vende ni venderá datos personales de los usuarios a otras empresas ni terceros.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider border-l-4 border-[#FCD144] pl-4">FORMULARIOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-white/10 rounded-xl bg-[#1a2d4a]">
                <h4 className="font-bold text-[#00AEEF] mb-2">De contacto</h4>
                <p className="text-sm">Facilitan la comunicación para dudas, presupuestos o reservas. El servidor del sitio web y del correo serán los encargados del tratamiento.</p>
              </div>
              <div className="p-5 border border-white/10 rounded-xl bg-[#1a2d4a]">
                <h4 className="font-bold text-[#00AEEF] mb-2">De publicidad</h4>
                <p className="text-sm">Datos para envío de publicidad e información comercial automatizada mediante email marketing.</p>
              </div>
              <div className="p-5 border border-white/10 rounded-xl bg-[#1a2d4a]">
                <h4 className="font-bold text-[#00AEEF] mb-2">Para comentarios</h4>
                <p className="text-sm">Identificación en el blog (nombre, email, sitio web). Visibles para otros usuarios para evitar spam.</p>
              </div>
              <div className="p-5 border border-white/10 rounded-xl bg-[#1a2d4a]">
                <h4 className="font-bold text-[#00AEEF] mb-2">Para servicios</h4>
                <p className="text-sm">Datos necesarios para procesar las solicitudes y servicios solicitados por el cliente mediante relación contractual.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider border-l-4 border-[#FCD144] pl-4">DERECHOS DEL USUARIO</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['Acceso', 'Rectificación', 'Oposición', 'Supresión', 'Limitación', 'Portabilidad', 'Información'].map((derecho) => (
                <div key={derecho} className="p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-[#00AEEF]/20 transition-all">
                  <span className="font-bold block">{derecho}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
              * El ejercicio de estos derechos no debe interrumpir la prestación de un servicio o una obligación legal. Para ejercer cualquiera de ellos, escriba a contacto@diegomedina.co.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider border-l-4 border-[#FCD144] pl-4">ENCARGADOS DEL TRATAMIENTO</h2>
            <p className="mb-6">DIEGOMEDINA.CO utiliza herramientas de terceros que garantizan la seguridad y cumplimiento de normativas internacionales:</p>
            <div className="space-y-4">
              {[
                { name: 'Vercel / Supabase', desc: 'Infraestructura de hosting y gestión de base de datos segura.' },
                { name: 'Google', desc: 'Google Ads, Analytics y Tag Manager para análisis y estadísticas.' },
                { name: 'Facebook / Instagram / WhatsApp', desc: 'Redes sociales, comunicación directa y análisis publicitario (Meta Ireland Ltd).' },
                { name: 'LinkedIn / Twitter / TikTok', desc: 'Presencia corporativa y difusión de contenidos profesionales.' },
                { name: 'PayU / PayPal', desc: 'Pasarelas de pago seguras para transacciones con tarjetas y banca electrónica.' },
                { name: 'Zoom', desc: 'Herramienta para videoconferencias y sesiones de mentoring.' }
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-4 p-4 border-b border-white/10">
                  <span className="text-[#00AEEF] font-bold min-w-[120px]">{item.name}:</span>
                  <span className="text-sm text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#1a2d4a] p-8 rounded-2xl border border-[#FCD144]/30">
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">INTERÉS LEGÍTIMO Y NEWSLETTER</h2>
            <p className="mb-4">
              Se recogen datos mediante formularios para lanzamientos o promociones basadas en el interés legítimo de aumentar ventas y cumplir con lo prometido al usuario. 
            </p>
            <p>
              DIEGOMEDINA.CO es libre de enviar la newsletter cuando lo estime conveniente. El usuario puede darse de baja en cualquier momento mediante el enlace en el pie de página de cada correo. Todo el material está protegido por derechos de autor.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm opacity-60">DIEGOMEDINA.CO cumple con la Ley de Privacidad del Consumidor de California (“CCPA”).</p>
              <p className="text-sm opacity-60 mt-1">© 2023 Diego Medina | Todos los derechos reservados</p>
            </div>
            <Link href="/" className="px-6 py-2 border border-[#FCD144] text-[#FCD144] rounded-full hover:bg-[#FCD144] hover:text-[#13253F] transition-all font-bold uppercase text-xs tracking-widest">
              Volver a la web
            </Link>
          </section>
        </div>
      </div>

      {/* Subtle Bottom Line */}
      <div className="w-full h-1 bg-[#FCD144]" />
    </main>
  );
}
