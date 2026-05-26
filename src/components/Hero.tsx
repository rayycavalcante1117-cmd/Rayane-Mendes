import { motion } from "motion/react";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  bgImagePath: string;
}

export default function Hero({ onOpenBooking, bgImagePath }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-slate-deep text-off-white"
    >
      {/* Subtle Slate Deep Sanctuary Ambient Mesh Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-deep to-slate-med/40 pointer-events-none z-0" />
      
      {/* Architectural decorative circle grids */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-slate-med/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-muted-steel/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Editorial Text Block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tag Line */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block px-3 py-1 bg-slate-med/80 text-champagne text-[10px] uppercase tracking-[0.2em] font-bold border border-champagne/20 rounded-sm">
              Quiet Luxury • Science Based
            </span>
          </motion.div>

          {/* Heading with elegant split-reveal simulation */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              variants={textRevealVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-off-white tracking-tight leading-[1.1]"
            >
              A Ciência da Mente.<br />A Arte do <span className="italic font-normal text-champagne">Equilíbrio</span>.
            </motion.h1>
          </div>

          {/* Body Text */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-steel font-sans mb-8 leading-relaxed max-w-xl"
          >
            Psicoterapia de alta performance para quem busca clareza emocional e excelência na vida pessoal e profissional. Abordagens especializadas em TCC e DBT na Praia Brava.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-off-white border border-champagne/45 rounded-full text-xs font-mono tracking-widest uppercase hover:text-champagne hover:border-champagne hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-bold"
            >
              Agendar Consulta Consultiva
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-champagne" />
            </button>
            
            <a
              href="#metodologia"
              className="px-6 py-4 border border-slate-med text-muted-steel hover:text-off-white hover:border-champagne rounded-full text-xs font-mono tracking-widest uppercase text-center transition-all duration-300 cursor-pointer"
            >
              Conhecer Especialidades
            </a>
          </motion.div>

          {/* Trust and Location Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-med/60 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div>
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Localização</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                Edifício Riviera Concept<br />Praia Brava Itajaí, SC
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Contato Regulador</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                CRP 12/23456<br />Conselho Regional SC
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Especialidades</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                TCC & DBT Avançada<br />Inteligência Emocional
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Editorial Graphic Box (Quiet Luxury Picture Frame) */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Decorative Backplate representing slate architectural slab */}
          <div className="absolute -inset-4 border border-champagne/15 rounded-2xl pointer-events-none z-0 scale-95 md:scale-100" />
          
          {/* Main Frame holding the stunning background image of Praia Brava */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10 border-4 border-slate-deep bg-slate-med/20">
            <img 
              src={bgImagePath} 
              alt="Ambiente calmo Praia Brava Itajaí" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-102 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark elegant mask overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Visual Monogram Badge */}
            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-slate-deep/95 backdrop-blur-md border border-champagne/20 shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-champagne" />
                <span className="text-[10px] font-mono tracking-widest text-champagne uppercase font-bold">Ambiente Clínico</span>
              </div>
              <p className="text-xs text-muted-steel font-serif leading-snug">
                Projetado para oferecer o máximo conforto, privacidade e acolhimento clínico na Praia Brava.
              </p>
            </div>
          </div>

          {/* Floating Subtle Abstract Slab Accent */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-champagne/10 rounded-3xl blur-md -z-10" />
          <div className="absolute bottom-12 -left-8 w-16 h-40 bg-slate-med/25 border-l border-champagne/10 rounded-full -z-10 hidden md:block" />

        </motion.div>
      </div>

      {/* Decorative Elegant Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] font-mono tracking-widest text-muted-steel uppercase">Rolagem</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-slate-med/80 rounded-full relative overflow-hidden border border-champagne/25"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-champagne rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
