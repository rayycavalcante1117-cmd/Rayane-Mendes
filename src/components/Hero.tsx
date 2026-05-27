import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-deep to-slate-med/40 pointer-events-none z-0" />
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-slate-med/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-muted-steel/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Block */}
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
              Terapia Cognitivo-Comportamental
            </span>
          </motion.div>

          {/* Headline principal */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              variants={textRevealVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-off-white tracking-tight leading-[1.1]"
            >
              Aprenda a lidar com as suas <span className="italic font-normal text-champagne">emoções</span> e melhore sua autoconfiança.
            </motion.h1>
          </div>

          {/* Subtítulo */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-steel font-sans mb-4 leading-relaxed max-w-xl"
          >
            <strong className="text-off-white">Se torne a sua melhor versão.</strong>
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-steel font-sans mb-8 leading-relaxed max-w-xl"
          >
            A Terapia Cognitivo-Comportamental tem como objetivo que você aprenda ferramentas e estratégias para alcançar uma melhora nos seus sintomas, desenvolva novas habilidades e adquira autonomia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-champagne text-white border border-champagne rounded-full text-xs font-mono tracking-widest uppercase hover:bg-champagne/90 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-bold"
            >
              Agendar minha consulta
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <a
              href="#servicos"
              className="px-6 py-4 border border-champagne/50 text-champagne hover:bg-champagne/10 hover:border-champagne rounded-full text-xs font-mono tracking-widest uppercase text-center transition-all duration-300 cursor-pointer"
            >
              Conhecer Serviços
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-med/60 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div>
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Registro</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                CRP-12/19715<br />Conselho Regional SC
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Modalidade</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                Online & Presencial<br />Flexibilidade total
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-xs font-mono text-champagne uppercase block mb-1 font-bold">Especialidade</span>
              <span className="text-xs text-muted-steel font-serif leading-tight block">
                TCC & DBT<br />Baseada em Evidências
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Image Block */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Decorative Backplate */}
          <div className="absolute -inset-4 border border-champagne/15 rounded-2xl pointer-events-none z-0 scale-95 md:scale-100" />
          
          {/* Main Frame - Placeholder for banner */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10 border-4 border-slate-deep bg-slate-med/20">
            {/* Placeholder Banner */}
            <div 
              style={{
                backgroundColor: '#DDD3C7', 
                color: '#2D466E', 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '100%', 
                height: '100%',
                minHeight: '200px', 
                fontWeight: 'bold', 
                fontSize: '1.2rem', 
                letterSpacing: '2px'
              }}
            >
              BANNER
            </div>
            
            {/* Dark elegant mask overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Visual Badge */}
            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-champagne/20 shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-champagne" />
                <span className="text-[10px] font-mono tracking-widest text-champagne uppercase font-bold">Atendimento</span>
              </div>
              <p className="text-xs text-muted-steel font-serif leading-snug">
                Ambiente acolhedor e sigiloso para o seu processo terapêutico.
              </p>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-champagne/10 rounded-3xl blur-md -z-10" />
          <div className="absolute bottom-12 -left-8 w-16 h-40 bg-slate-med/25 border-l border-champagne/10 rounded-full -z-10 hidden md:block" />

        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
