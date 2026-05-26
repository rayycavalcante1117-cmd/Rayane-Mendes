import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Compass, Calendar, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scrolled status for styling
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine visibility direction
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    { name: "Início", target: "home" },
    { name: "Metodologia", target: "metodologia" },
    { name: "Sobre", target: "sobre" },
    { name: "Depoimentos", target: "depoimentos" },
    { name: "Localização", target: "contato" },
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
            ? "mx-4 mt-4 rounded-2xl bg-slate-deep/90 backdrop-blur-md shadow-2xl border border-champagne/25 py-3 px-6" 
            : "bg-transparent py-6 px-8 border-b border-slate-med/40"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-med text-off-white border border-champagne/30 flex items-center justify-center font-serif text-lg font-bold group-hover:bg-champagne group-hover:text-slate-deep transition-all duration-300">
              <Compass className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-off-white uppercase block leading-none">
                Andressa Juliana
              </span>
              <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-muted-steel uppercase block mt-1 font-semibold">
                Psicologia Clínica & Supervisão
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-xs font-mono font-medium hover:text-champagne text-muted-steel uppercase tracking-widest transition-colors relative py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full border border-champagne/50 text-off-white hover:bg-champagne hover:text-slate-deep text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar Particular
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-full border border-champagne/40 text-champagne"
              aria-label="Agendar Consulta"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-off-white focus:outline-none"
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
            className="fixed top-20 left-4 right-4 z-30 bg-slate-deep border border-champagne/35 rounded-2xl p-6 shadow-2xl backdrop-blur-lg md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left py-2 border-b border-slate-med/40 text-off-white font-serif text-lg hover:text-champagne transition-colors cursor-pointer"
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
              className="w-full py-4 text-center rounded-xl bg-slate-med text-off-white border border-champagne/40 text-xs font-mono tracking-widest uppercase hover:bg-champagne hover:text-slate-deep transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Agendar Consulta Particular
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
