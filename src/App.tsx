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
import { Compass, Instagram, Linkedin, Shield } from "lucide-react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Asset paths from our visual generation step
  const portraitPath = "/src/assets/images/andressa_juliana_portrait_1779821692254.png";
  const bgImagePath = "/src/assets/images/praia_brava_office_1779821712750.png";

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  return (
    <div className="relative min-h-screen bg-slate-deep text-off-white select-none">
      {/* 1. Header component */}
      <Header onOpenBooking={toggleBooking} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={toggleBooking} bgImagePath={bgImagePath} />

      {/* 3. Methodology/Specialties Section */}
      <Methodology />

      {/* 4. About (Sobre / Philosophy) Section */}
      <About portraitPath={portraitPath} />

      {/* 5. Social Proof (Prova Social) Section */}
      <SocialProof />

      {/* 6. Contact & Location Section */}
      <Contact />

      {/* 7. Footer Block */}
      <footer className="bg-slate-deep text-muted-steel py-16 px-6 md:px-8 border-t border-champagne/15 position-relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-med text-off-white border border-champagne/30 flex items-center justify-center font-serif text-lg font-bold">
                <Compass className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-off-white uppercase block leading-none">
                  Andressa Juliana
                </span>
                <span className="text-[10px] font-mono tracking-widest text-champagne uppercase block mt-1 font-semibold">
                  Psicologia Clínica & Supervisão
                </span>
              </div>
            </div>
            
            <p className="text-xs text-muted-steel font-sans leading-relaxed max-w-sm">
              Um ambiente de psicologia premium regido pelo conceito de "Quiet Luxury" e baseado em práticas científicas contemporâneas (TCC & DBT) focado em alta performance.
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono text-champagne uppercase tracking-wider font-bold">Menu</h4>
            <div className="flex flex-col gap-2.5 text-xs text-muted-steel font-sans">
              <a href="#home" className="hover:text-champagne transition-colors">Início</a>
              <a href="#metodologia" className="hover:text-champagne transition-colors">Especialidades</a>
              <a href="#sobre" className="hover:text-champagne transition-colors">A Filosofia</a>
              <a href="#depoimentos" className="hover:text-champagne transition-colors">Resultados</a>
              <a href="#contato" className="hover:text-champagne transition-colors">Consulta de Elite</a>
            </div>
          </div>

          {/* Credential Ethics Col */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono text-champagne uppercase tracking-wider font-bold">Inviolável & Ético</h4>
            <div className="text-xs text-muted-steel font-sans space-y-3">
              <p>📍 Edifício Riviera Concept - Av. Osvaldo Reis, 3385 - Sala 1013 - Praia Brava, Itajaí - SC.</p>
              <p>📋 CRP 12/23456 | Registro no Conselho Regional de Psicologia de Santa Catarina.</p>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no Instagram"
                  className="p-2.5 rounded-full border border-champagne/30 hover:border-champagne text-muted-steel hover:text-champagne transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no LinkedIn"
                  className="p-2.5 rounded-full border border-champagne/30 hover:border-champagne text-muted-steel hover:text-champagne transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer panel */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-med flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-steel/45 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-champagne" />
            <span>Todos os direitos reservados © 2026 Clínica Andressa Juliana</span>
          </div>
          <div>
            Desenvolvido sob preceitos éticos do CRP e sigilo inviolável de alta performance
          </div>
        </div>
      </footer>

      {/* 8. Pulsing WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* 9. Interactive Booking matching questionnaire modal */}
      <BookingModal isOpen={isBookingOpen} onClose={toggleBooking} />
    </div>
  );
}

