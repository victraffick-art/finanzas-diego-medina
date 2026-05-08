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
        <div className="mb-12">
          <p className="text-[#00AEEF] text-sm font-bold tracking-widest uppercase mb-2">Última actualización el 22 de diciembre del 2022</p>
          <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            POLÍTICA DE PRIVACIDAD <span className="text-[#FCD144] block md:inline">Y TÉRMINOS Y CONDICIONES</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium border-l-4 border-[#00AEEF] pl-6 py-2">
            Desde DIEGOMEDINA.CO tratamos los datos personales con respeto y sensibilidad.
          </p>
        </div>

        <div className="space-y-10 text-gray-200 leading-relaxed font-medium text-justify">
          <section className="space-y-4">
            <p>
              Esta política de privacidad junto con el aviso legal, política de cookies, de ventas, términos y condiciones, y cualquier otra política a la que se haga referencia, identifica cómo se recopilan y procesan los datos personales que se reciben en este sitio web.
            </p>
            <p>
              La información que se encuentra en este sitio web no está dirigida a niños. Se entenderá por niño lo que la ley de la jurisdicción donde se encuentre así lo defina, en el caso de Estados Unidos de América es alguien menor a 13 años. Si el usuario cree que algún niño ha proporcionado sus datos personales en este sitio web sin el consentimiento de los padres, deberá escribir a <strong>contacto@diegomedina.co</strong>.
            </p>
            <p>
              Si el usuario tiene menos de 13 años, deberá tener la autorización de sus padres o tutores legales para entregar sus datos personales. DIEGOMEDINA.CO no tiene manera de comprobar efectivamente la edad de los usuarios, por lo que queda eximida de cualquier responsabilidad, si el usuario no cumple con lo aquí indicado. En DIEGOMEDINA.CO cumplimos con la Ley de Protección de la Privacidad en Línea de los Niños de 1998 (“COPPA”).
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">DATOS IDENTIFICATIVOS DEL RESPONSABLE</h2>
            <p className="mb-4">Tal y como recoge la normativa vigente, te informamos que:</p>
            <ul className="space-y-2 ml-4">
              <li>• La denominación social del responsable por este sitio web es: <strong>DIEGOMEDINA.CO</strong>.</li>
              <li>• Su domicilio social se encuentra en: <strong>Rionegro, Antioquia, Calle 26, Colombia</strong>.</li>
              <li>• Puedes contactarle al Email: <strong>contacto@diegomedina.co</strong></li>
              <li>• Su actividad social es: <strong>formación, mentoring y asesoría personal</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">DATOS SOLICITADOS EN EL SITIO WEB Y FINALIDAD DEL TRATAMIENTO</h2>
            <ul className="space-y-6">
              <li>
                <strong>• Nombre, apellidos y correo electrónico en los formularios de contacto:</strong> para realizar cualquier contacto directo con DIEGOMEDINA.CO, ya sea para plantear dudas, comentarios, sugerencias, solicitar un servicio o producto, o cualquier otra información. No suministrar los datos personales mínimos necesarios imposibilitará a DIEGOMEDINA.CO de responder a la petición.
              </li>
              <li>
                <strong>• Nombre, correo electrónico:</strong> para poder realizar comentarios en el blog del sitio web.
              </li>
              <li>
                <strong>• Nombre, apellidos, dirección, teléfono, correo electrónico, número de identificación fiscal:</strong> se solicitará esta información al momento del pago del servicio para procesar todo lo relacionado con el cliente.
              </li>
              <li>
                <strong>• Nombre, teléfono y correo electrónico para newsletter:</strong> con el debido consentimiento expreso y voluntario del titular de los datos, se solicitará en el sitio web la información mínima necesaria para enviar un boletín comercial automatizado, donde se informará sobre publicidad, promociones y otra información de los servicios y/o productos ofrecidos por DIEGOMEDINA.CO.
              </li>
              <li>
                <strong>• Correo electrónico:</strong> se solicitará el correo electrónico para poder acceder al área de cliente, de acuerdo con los datos suministrados al momento de crear la cuenta.
              </li>
            </ul>
            <p className="mt-6">
              DIEGOMEDINA.CO en todo momento velará porque el uso que se le da al sitio web, a los contenidos, y al tratamiento de los datos personales del usuario, se realicen de la forma más correcta. Para ello, el usuario siempre podrá ejercer sus derechos de acceso, rectificación, limitación, cancelación, portabilidad, olvido u oposición, todo ello en fiel cumplimiento de las directrices de las leyes que rigen la materia, escribiendo al <strong>contacto@diegomedina.co</strong>.
            </p>
            <p className="mt-4 font-bold text-white">
              DIEGOMEDINA.CO no vende ni venderá datos personales de los usuarios a otras empresas ni terceros.
            </p>
            <p className="mt-4">
              DIEGOMEDINA.CO compartirá con terceros los datos que posee, solo para cumplir con los servicios contratados por algún usuario, enviar la newsletter, cumplir con exigencias legales o para la administración del sitio web. A este efecto, se proporcionarán los debidos acuerdos de confidencialidad entre las partes.
            </p>
            <p className="mt-4">
              Los enlaces a terceros que se puedan encontrar en el sitio web poseen políticas de privacidad ajenas a DIEGOMEDINA.CO. El acceso a estos sitios deberá ser responsabilidad del usuario, siendo su responsabilidad conocerlas y su decisión aceptarlas o no.
            </p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">FORMULARIOS</h2>
            <p className="mb-4">El sitio web dispone de 4 tipos de formularios:</p>
            <div className="space-y-6">
              <div>
                <p><strong>De contacto:</strong> el usuario, cliente o participante podrá encontrar formularios que facilitarán la comunicación con DIEGOMEDINA.CO para plantear dudas, comentarios, solicitar un presupuesto, reservar alguno de los servicios ofrecidos en el sitio web o exigir algún derecho que tenga. No suministrar los datos personales mínimos necesarios imposibilitará a DIEGOMEDINA.CO responder a la petición. Este tratamiento se considerará legítimo por ser parte de una diligencia pre-contractual. El servidor del sitio web y del correo electrónico de DIEGOMEDINA.CO serán los encargados del tratamiento.</p>
              </div>
              <div>
                <p><strong>De publicidad:</strong> se solicitará a los usuarios, compradores o participantes su consentimiento expreso y voluntario para entregar a DIEGOMEDINA.CO, los mínimos datos necesarios para enviar publicidad e información comercial relacionada con los servicios y/o productos ofrecidos por DIEGOMEDINA.CO, para que se agregue a un fichero automatizado de email marketing gestionado por el encargado del tratamiento que se indica más abajo. El tratamiento de los datos personales que se encuentren en esta sección se ha hecho con el consentimiento del titular de los datos.</p>
              </div>
              <div>
                <p><strong>Para comentarios en el blog:</strong> en aras de evitar el spam, mensajes inadecuados, y hacer un correcto seguimiento, se solicitará al usuario su nombre, email y sitio web para identificarlo en los comentarios que desee realizar en las entradas del blog. Estos datos serán visibles para otros usuarios del sitio web. Si no desea que los datos sean visibles por otras personas, deberá comunicarse con DIEGOMEDINA.CO al correo electrónico contacto@diegomedina.co. El servidor del sitio web será el encargado del tratamiento y que se realizará con el consentimiento del titular de los datos.</p>
              </div>
              <div>
                <p><strong>Para procesar la solicitud del servicio:</strong> se solicitará a los usuarios, clientes o participantes sus datos para que DIEGOMEDINA.CO pueda procesar los servicios solicitados por el cliente. Tratamiento legítimo de datos personales por la relación contractual que existe con el cliente o participante. Los datos serán guardados en el servidor del sitio web.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">DERECHOS</h2>
            <p className="mb-4">El usuario tiene los siguientes derechos relacionados con sus datos personales:</p>
            <ul className="space-y-4">
              <li><strong>Acceso:</strong> el usuario puede dirigirse a DIEGOMEDINA.CO para poder saber los datos que se han recopilado de él.</li>
              <li><strong>Rectificación:</strong> el usuario puede en cualquier momento rectificar los datos que haya suministrado a DIEGOMEDINA.CO.</li>
              <li><strong>Oposición:</strong> siempre que no interrumpa la prestación de un servicio, o una obligación legal que posea DIEGOMEDINA.CO, el usuario podrá solicitar el cese al tratamiento de sus datos personales.</li>
              <li><strong>Supresión:</strong> siempre que no interrumpa la prestación de un servicio, o una obligación legal que posea DIEGOMEDINA.CO, el usuario podrá solicitar la eliminación de sus datos personales.</li>
              <li><strong>Limitación al tratamiento:</strong> siempre que no interrumpa la prestación de un servicio, o una obligación legal que posea DIEGOMEDINA.CO, el usuario podrá solicitar que sus datos personales sean tratados de la forma como él los limite, por ejemplo solicitar que no se modifiquen, que se borren o supriman.</li>
              <li><strong>Portabilidad:</strong> siempre que el usuario así lo solicite y pueda realizarse, podrá solicitar una copia de sus datos personales en un formato estructurado, de uso común, de lectura mecánica e interoperable, o solicitar que se transmita a otro responsable del tratamiento, siempre que el tratamiento se legitime en base al consentimiento o en el marco de la ejecución de un contrato.</li>
              <li><strong>No ser objeto de decisiones individuales automatizadas:</strong> en DIEGOMEDINA.CO no se realizan perfiles automatizados que puedan afectar significativa o negativamente al usuario. Cualquier decisión que se tome con base a un perfil automatizado, es con la única finalidad de enviar al usuario una información que haya solicitado de acuerdo con sus hábitos de navegación y descarga de materiales en el sitio web.</li>
              <li><strong>Información:</strong> el usuario tiene derecho a saber la forma en la cual son tratados sus datos personales.</li>
            </ul>
            <p className="mt-6">Para el ejercicio de cualquiera de estos derechos el usuario puede escribir al correo electrónico <strong>contacto@diegomedina.co</strong>.</p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">ENCARGADOS DEL TRATAMIENTO</h2>
            <p className="mb-4">DIEGOMEDINA.CO necesita el apoyo de terceros para ofrecer adecuadamente sus servicios y productos, con los cuales celebra los debidos acuerdos de confidencialidad y verifica el cumplimiento de las normativas sobre protección de datos personales.</p>
            <p className="mb-4 text-gray-300 italic">Los datos suministrados a estos terceros no podrán ser utilizados para otros fines no autorizados por el titular de los datos.</p>
            <p className="mb-4">En cumplimiento de los principios de información y transparencia, se hace saber que estos terceros son:</p>
            
            <ul className="space-y-6">
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Vercel / Supabase:</strong> Infraestructura utilizada para el hosting del sitio web y la gestión de bases de datos segura bajo el contexto de despliegue actual.
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Facebook:</strong> Herramienta utilizada como red social y a los fines de conectarse con el titular de los datos. El servicio es prestado por la empresa Facebook Ireland Ltd., sus servidores están en Estados Unidos. Han adoptado cláusulas tipo de procesamiento de datos aprobadas por la Comisión Europea. Puede consultarse su política de privacidad en https://www.facebook.com/business/gdpr. Con esta herramienta también se maneja la publicidad que se pueda realizar en WhatsApp y/o Instagram.
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Google:</strong> sistema de publicidad patrocinada (ADS), Servicio de análisis web (Analytics) y sistema de gestión de etiquetas (Tag Manager). Estos servicios son prestados por la empresa Google LLC. Han adoptado cláusulas tipo de procesamiento de datos aprobadas por la Comisión Europea.
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Instagram:</strong> Red social y aplicación para subir fotos y vídeos cuyo propietario es la empresa Facebook Inc. Para obtener más información sobre la política de privacidad ingresa en: https://help.instagram.com/155833707900388
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Linkedin:</strong> Red social orientada a las empresas, a los negocios y el empleo. Su política de privacidad puede observarse en https://www.linkedin.com/legal/privacy-policy
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• PayU (Latam):</strong> empresa utilizada para gestionar los pagos mediante tarjeta de débito y crédito en el sitio web. Para más información puede visitar: https://legal.payulatam.com/ES/politica_de_privacidad.HTML
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• PayPal (Europe) S.à r.l. et Cie, S.C.A.:</strong> empresa utilizada para gestionar los pagos mediante tarjeta de débito y crédito en el sitio web. Para más información puede visitar https://www.paypal.com/es/webapps/mpp/ua/privacy-full?locale.x=es_ES
              </li>
              <li className="border-l-2 border-[#00AEEF] pl-4">
                <strong>• Zoom:</strong> herramienta utilizada para videoconferencias. Este servicio está a cargo de la empresa Zoom Video Communications, Inc., ha adoptado cláusulas tipo de procesamiento de datos aprobadas por la Comisión Europea.
              </li>
            </ul>
            <p className="mt-6 text-sm italic">En casos puntales DIEGOMEDINA.CO podrá utilizar aplicaciones o herramientas que no hayan sido incluidas o nombradas en este listado, lo anterior por ser una mejor opción que coadyuve a la realización de una determinada tarea.</p>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">POLÍTICAS RELACIONADAS CON LA NEWSLETTER</h2>
            <div className="space-y-4">
              <p>Estas políticas se entenderán en todo momento como parte complementaria de los términos y condiciones expuestos en el sitio web, siendo ambos de igual aplicación al momento de una controversia. La política de privacidad y de propiedad intelectual aplicada será la misma que se expone en los términos y condiciones del sitio web.</p>
              <p>Se entenderá como “newsletter” al boletín digital que DIEGOMEDINA.CO realiza de forma periódica y que hace llegar a sus suscriptores a través de un proveedor de servicios de correo electrónico externo, al cual el usuario se ha suscrito de manera voluntaria.</p>
              <p>DIEGOMEDINA.CO no está en la obligación de enviar en períodos de tiempo definidos la newsletter, por lo que es totalmente libre de hacerlo cuando lo estime conveniente. El usuario podrá en todo momento ejercer sus derechos de acceso, rectificación, cancelación u oposición siguiendo las instrucciones que encontrará en el pie de página de la newsletter.</p>
              <p>El usuario no deberá compartir su contenido con terceros, ya que esto violaría los derechos de autor de DIEGOMEDINA.CO. El único canal de distribución posible es el administrado y/o autorizado por DIEGOMEDINA.CO.</p>
              <p>DIEGOMEDINA.CO no se hará responsable por el contenido de terceros expuesto en la newsletter, cualquier controversia que surja deberá ser tratada directamente con la persona o empresa de la cual se hace mención.</p>
              <p>Todo el material que se expone en la newsletter está protegido por derechos de autor a favor de DIEGOMEDINA.CO, y en el caso de pertenecer a terceros, se entenderá que DIEGOMEDINA.CO tiene la debida autorización para utilizarlo como se haya convenido con el autor.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">INTERÉS LEGÍTIMO</h2>
            <div className="space-y-4">
              <p>Cuando se realice un lanzamiento de productos o servicios nuevos, o promociones especiales por tiempo determinado, se recogerá el nombre y correo electrónico de los usuarios del sitio web mediante un formulario. Este tratamiento de datos personales se hará con base en el interés legítimo que posee DIEGOMEDINA.CO para aumentar sus ventas, dar a conocer sus productos o servicios y cumplir con la finalidad de enviarle al titular de los datos la información prometida en el sitio web.</p>
              <p>Este tratamiento será realizado mientras perdure el interés legítimo de DIEGOMEDINA.CO. Para aumentar las garantías y respeto a la privacidad, se ofrece la posibilidad de la exclusión voluntaria de esta publicidad mediante un método fácil y de ejecución inmediata, ubicado en la parte inferior de los correos electrónicos que reciba.</p>
              <p>Para saber si este interés es proporcionado y respetuoso con los derechos de los titulares de los datos, se ha realizado una ponderación que puede ser solicitada en cualquier momento escribiendo al correo electrónico <strong>contacto@diegomedina.co</strong>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FCD144] text-xl font-bold mb-6 uppercase tracking-wider">DURACIÓN DEL TRATAMIENTO</h2>
            <ul className="space-y-4">
              <li>• En el caso de los datos personales suministrados para <strong>facturación y compra de productos o servicios</strong>, serán guardados por el tiempo legalmente aplicable.</li>
              <li>• En el caso de los datos personales suministrados para <strong>boletines comerciales electrónicos y comentarios en el blog</strong>, será por el tiempo que el titular de los datos desee permanecer en la lista de suscripción, por lo que podrá darse de baja en el momento que así lo desee, de forma automática como se indica en cada boletín, o escribiendo al <strong>contacto@diegomedina.co</strong>.</li>
            </ul>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-[#FCD144] text-xl font-bold mb-4 uppercase tracking-wider">RESIDENTES EN CALIFORNIA, ESTADOS UNIDOS</h2>
            <p>DIEGOMEDINA.CO cumple con la Ley de Privacidad del Consumidor de California de 2018 (“CCPA”). Los residentes en California tienen derecho a solicitar que DIEGOMEDINA.CO revele qué información personal ha recopilado, utilizado, divulgado y vendido durante el período de 12 meses anterior a la recepción de dicha solicitud. Para ejercer este derecho, así como el de eliminación u oposición al tratamiento de sus datos, el usuario deberá escribir a <strong>contacto@diegomedina.co</strong>.</p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <Link href="/" className="inline-block px-10 py-4 bg-[#FCD144] text-[#13253F] font-black rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-xl shadow-[#FCD144]/20">
            Volver a la Página Principal
          </Link>
          <p className="mt-8 text-xs text-gray-500">© 2023 Diego Medina | Todos los derechos reservados</p>
        </div>
      </div>

      {/* Subtle Bottom Line */}
      <div className="w-full h-1 bg-[#FCD144]" />
    </main>
  );
}
