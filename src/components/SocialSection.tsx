'use client';

import React from 'react';

// Custom SVG Icons to avoid dependency issues
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.4 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function SocialSection() {
  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
    { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <section className="relative w-full overflow-hidden border-b-2 border-[#FCD144]">
      {/* Background with blurry overlay and parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed grayscale opacity-40"
        style={{ backgroundImage: 'url("/conference-bg.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-sm" />

      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Text and Icons */}
          <div className="flex-1 py-12 md:py-20 text-center">
            <h2 className="text-[#13253F] text-2xl md:text-3xl font-bold mb-6 leading-tight max-w-xl mx-auto">
              Ideas, inspiración y estrategias para el desarrollo de tu liderazgo
            </h2>
            <p className="text-[#3a4856] text-sm md:text-base mb-8 max-w-xl mx-auto opacity-90">
              Suscríbete a mis redes sociales, activa las notificaciones y disfruta de toda la información poderosa y práctica que puedes aplicar de inmediato en tu vida:
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {socialLinks.map((item, index) => (
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
          <div className="relative flex-1 flex justify-center items-end pt-8 md:pt-0">
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

