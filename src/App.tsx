/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import About from "./components/About";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingModal from "./components/BookingModal";
import { Instagram, Shield } from "lucide-react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Placeholder paths (to be replaced with actual images)
  const portraitPath = "";
  const bgImagePath = "";

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  return (
    <div className="relative min-h-screen bg-slate-deep text-off-white select-none">
      {/* 1. Header component */}
      <Header onOpenBooking={toggleBooking} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={toggleBooking} bgImagePath={bgImagePath} />

      {/* 3. Serviços Section */}
      <Methodology />

      {/* 4. About (Quem sou) Section */}
      <About portraitPath={portraitPath} />

      {/* 5. Depoimentos Section */}
      <SocialProof />

      {/* 6. Contact Section */}
      <Contact />

      {/* 7. Footer Block */}
      <footer className="bg-slate-deep text-muted-steel py-16 px-6 md:px-8 border-t border-champagne/15 position-relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              {/* Logo Placeholder */}
              <div 
                style={{
                  backgroundColor: '#DDD3C7', 
                  color: '#2D466E', 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '40px', 
                  height: '40px',
                  fontWeight: 'bold', 
                  fontSize: '0.4rem', 
                  letterSpacing: '1px',
                  borderRadius: '50%',
                  border: '1px solid rgba(45, 70, 110, 0.3)'
                }}
              >
                LOGO
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-off-white uppercase block leading-none">
                  Andressa Juliana
                </span>
                <span className="text-[10px] font-mono tracking-widest text-champagne uppercase block mt-1 font-semibold">
                  Psicóloga Clínica
                </span>
              </div>
            </div>
            
            <p className="text-xs text-muted-steel font-sans leading-relaxed max-w-sm">
              Psicóloga especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento psicológico individual para adultos, supervisão clínica e cursos para psicólogos.
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono text-champagne uppercase tracking-wider font-bold">Menu</h4>
            <div className="flex flex-col gap-2.5 text-xs text-muted-steel font-sans">
              <a href="#home" className="hover:text-champagne transition-colors">Início</a>
              <a href="#servicos" className="hover:text-champagne transition-colors">Serviços</a>
              <a href="#sobre" className="hover:text-champagne transition-colors">Quem Sou</a>
              <a href="#depoimentos" className="hover:text-champagne transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-champagne transition-colors">Contato</a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono text-champagne uppercase tracking-wider font-bold">Contato</h4>
            <div className="text-xs text-muted-steel font-sans space-y-3">
              <p>📧 andressajuliana.psi@gmail.com</p>
              <p>📋 CRP-12/19715</p>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no Instagram"
                  className="p-2.5 rounded-full border border-champagne/30 hover:border-champagne text-muted-steel hover:text-champagne transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no TikTok"
                  className="p-2.5 rounded-full border border-champagne/30 hover:border-champagne text-muted-steel hover:text-champagne transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@andressajuliana.psicologa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no YouTube"
                  className="p-2.5 rounded-full border border-champagne/30 hover:border-champagne text-muted-steel hover:text-champagne transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-med flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-steel/45 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-champagne" />
            <span>Todos os direitos reservados © 2026 Andressa Juliana</span>
          </div>
          <div>
            Atendimento regido pelo Código de Ética do Psicólogo (CFP)
          </div>
        </div>
      </footer>

      {/* 8. WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* 9. Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={toggleBooking} />
    </div>
  );
}
