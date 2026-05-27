/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Instagram, Shield } from "lucide-react";

// Lazy load below-the-fold components for better initial load
const Methodology = lazy(() => import("./components/Methodology"));
const About = lazy(() => import("./components/About"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const Contact = lazy(() => import("./components/Contact"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const BookingModal = lazy(() => import("./components/BookingModal"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center bg-beige-cream">
    <div className="w-8 h-8 border-2 border-slate-med border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const portraitPath = "";
  const bgImagePath = "";

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  return (
    <div className="relative min-h-screen bg-beige-cream text-text-dark select-none">
      {/* 1. Header */}
      <Header onOpenBooking={toggleBooking} />

      {/* 2. Hero */}
      <Hero onOpenBooking={toggleBooking} bgImagePath={bgImagePath} />

      {/* 3. Servicos - fundo bege (lazy loaded) */}
      <Suspense fallback={<SectionLoader />}>
        <Methodology />
      </Suspense>

      {/* 4. Sobre - fundo branco (lazy loaded) */}
      <Suspense fallback={<SectionLoader />}>
        <About portraitPath={portraitPath} />
      </Suspense>

      {/* 5. Depoimentos - fundo creme (lazy loaded) */}
      <Suspense fallback={<SectionLoader />}>
        <SocialProof />
      </Suspense>

      {/* 6. Contato - fundo creme (lazy loaded) */}
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* 7. Footer */}
      <footer className="bg-slate-deep text-white py-16 px-6 md:px-8 position-relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Brand */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '40px', 
                  height: '40px',
                  fontWeight: 'bold', 
                  fontSize: '0.4rem', 
                  letterSpacing: '1px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                LOGO
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-white uppercase block leading-none">
                  Andressa Juliana
                </span>
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase block mt-1 font-semibold">
                  Psicologa Clinica
                </span>
              </div>
            </div>
            
            <p className="text-xs text-white/60 font-sans leading-relaxed max-w-sm">
              Psicologa especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento psicologico individual para adultos, supervisao clinica e cursos para psicologos.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono text-white/70 uppercase tracking-wider font-bold">Menu</h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/60 font-sans">
              <a href="#home" className="hover:text-white transition-colors">Inicio</a>
              <a href="#servicos" className="hover:text-white transition-colors">Servicos</a>
              <a href="#sobre" className="hover:text-white transition-colors">Quem Sou</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono text-white/70 uppercase tracking-wider font-bold">Contato</h4>
            <div className="text-xs text-white/60 font-sans space-y-3">
              <p>andressajuliana.psi@gmail.com</p>
              <p>CRP-12/19715</p>
              <p className="text-[10px] text-white/40">
                Edificio Riviera Concept<br />
                Av. Osvaldo Reis, 3385 - Sala 1013<br />
                Praia Brava, Itajai - SC
              </p>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no Instagram"
                  className="p-2.5 rounded-full border border-white/20 hover:border-white text-white/60 hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Acompanhe no TikTok"
                  className="p-2.5 rounded-full border border-white/20 hover:border-white text-white/60 hover:text-white transition-all"
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
                  className="p-2.5 rounded-full border border-white/20 hover:border-white text-white/60 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-white/50" />
            <span>Todos os direitos reservados 2026 Andressa Juliana</span>
          </div>
          <div>
            Atendimento regido pelo Codigo de Etica do Psicologo (CFP)
          </div>
        </div>
      </footer>

      {/* WhatsApp Button (lazy loaded) */}
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>

      {/* Booking Modal (lazy loaded) */}
      <Suspense fallback={null}>
        <BookingModal isOpen={isBookingOpen} onClose={toggleBooking} />
      </Suspense>
    </div>
  );
}
