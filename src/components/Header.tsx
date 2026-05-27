import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useState(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Inicio", target: "home" },
    { name: "Servicos", target: "servicos" },
    { name: "Sobre", target: "sobre" },
    { name: "Depoimentos", target: "depoimentos" },
    { name: "Contato", target: "contato" },
  ];

  return (
    <>
      <motion.header
        id="floating-header"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "mx-4 mt-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-beige-warm py-3 px-6" 
            : "bg-transparent py-6 px-8 border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logo Placeholder */}
            <div 
              style={{
                backgroundColor: isScrolled ? '#DDD3C7' : 'rgba(255,255,255,0.2)', 
                color: isScrolled ? '#2D466E' : 'white', 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '40px', 
                height: '40px',
                fontWeight: 'bold', 
                fontSize: '0.5rem', 
                letterSpacing: '1px',
                borderRadius: '50%',
                border: isScrolled ? '1px solid rgba(45, 70, 110, 0.3)' : '1px solid rgba(255,255,255,0.3)'
              }}
            >
              LOGO
            </div>
            <div>
              <span className={`font-serif text-lg md:text-xl font-bold tracking-tight uppercase block leading-none transition-colors ${isScrolled ? 'text-text-dark' : 'text-white'}`}>
                Andressa Juliana
              </span>
              <span className={`text-[9px] md:text-[10px] font-mono tracking-widest uppercase block mt-1 font-semibold transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/70'}`}>
                Psicologa Clinica
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`text-xs font-mono font-medium uppercase tracking-widest transition-colors relative py-1 group cursor-pointer ${isScrolled ? 'text-text-muted hover:text-slate-med' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-slate-med' : 'bg-white'}`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer font-bold ${
                isScrolled 
                  ? 'bg-slate-med text-white hover:bg-slate-deep' 
                  : 'bg-white text-slate-deep hover:bg-beige-warm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-text-dark' : 'text-white'}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-30 bg-white border border-beige-warm rounded-2xl p-6 shadow-2xl backdrop-blur-lg md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left py-2 border-b border-beige-warm text-text-dark font-serif text-lg hover:text-slate-med transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-center rounded-xl bg-slate-med text-white border border-slate-med text-xs font-mono tracking-widest uppercase hover:bg-slate-deep transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Quero comecar minha transformacao
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
