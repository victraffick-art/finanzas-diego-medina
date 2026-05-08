'use client';

import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function SocialSection() {
  return (
    <section className="relative w-full overflow-hidden border-b-2 border-[#FCD144]">
      {/* Background with blurry overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-20"
        style={{ backgroundImage: 'url("/conference-bg.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text and Icons */}
          <div className="flex-1 py-12 md:py-20 text-center md:text-left">
            <h2 className="text-[#13253F] text-2xl md:text-3xl font-bold mb-6 leading-tight max-w-xl">
              Ideas, inspiración y estrategias para el desarrollo de tu liderazgo
            </h2>
            <p className="text-[#3a4856] text-sm md:text-base mb-8 max-w-xl opacity-90">
              Suscríbete a mis redes sociales, activa las notificaciones y disfruta de toda la información poderosa y práctica que puedes aplicar de inmediato en tu vida:
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-16 md:h-16 border-2 border-[#13253F] rounded-full flex items-center justify-center text-[#13253F] hover:bg-[#13253F] hover:text-white transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Diego Image */}
          <div className="relative flex-1 flex justify-center md:justify-end items-end pt-8 md:pt-0">
            <img 
              src="/diego-books.png" 
              alt="Diego Medina con libros" 
              className="relative z-30 w-full max-w-md md:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
