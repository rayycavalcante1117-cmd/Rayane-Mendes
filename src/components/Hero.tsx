import { motion } from "motion/react";
import { Sparkles, Heart, Video } from "lucide-react";

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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #24395A 0%, #2D466E 30%, #5B6F8F 60%, #DDD3C7 100%)'
        }}
      />
      
      {/* Subtle overlay pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} 
      />

      {/* Floating Cards - Glassmorphism Style */}
      <div className="absolute top-32 right-8 md:right-16 lg:right-24 z-20 animate-float hidden md:block">
        <div className="glass-card px-5 py-3 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-med" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Atendimento Personalizado</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-48 right-12 md:right-32 lg:right-48 z-20 animate-float-delayed hidden md:block">
        <div className="glass-card px-5 py-3 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-slate-med" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Ambiente Acolhedor e Seguro</span>
          </div>
        </div>
      </div>

      {/* Card Modalidade - Flutuante com Glassmorphism */}
      <div className="absolute bottom-32 left-8 md:left-16 lg:left-24 z-20 animate-float-slow hidden md:block">
        <div className="glass-card px-5 py-3 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-med" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Online & Presencial</span>
          </div>
        </div>
      </div>

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
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] font-bold border border-white/30 rounded-full">
              Terapia Cognitivo-Comportamental
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              variants={textRevealVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]"
            >
              Conquiste <span className="italic font-normal text-beige-warm">clareza emocional</span> e transforme sua relacao consigo e com o mundo.
            </motion.h1>
          </div>

          {/* Subtitulo */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 font-sans mb-4 leading-relaxed max-w-xl font-medium"
          >
            Chega de se sentir refem da ansiedade, da inseguranca ou de padroes que te travam.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-base text-white/70 font-sans mb-10 leading-relaxed max-w-xl"
          >
            Com a Terapia Cognitivo-Comportamental, voce aprende ferramentas praticas para reduzir sintomas, desenvolver novas habilidades e retomar o controle da sua vida.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="px-10 py-5 bg-white text-slate-deep border-2 border-white rounded-full text-xs font-mono tracking-widest uppercase hover:bg-beige-cream hover:border-beige-cream hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-bold shimmer-btn"
            >
              Quero comecar minha transformacao
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div>
              <span className="text-2xl font-serif text-white font-bold block">+500</span>
              <span className="text-[10px] text-white/60 font-mono uppercase tracking-widest block mt-1">
                Pacientes atendidos
              </span>
            </div>
            <div>
              <span className="text-2xl font-serif text-white font-bold block">Online & Presencial</span>
              <span className="text-[10px] text-white/60 font-mono uppercase tracking-widest block mt-1">
                Flexibilidade total
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-2xl font-serif text-white font-bold block">TCC & DBT</span>
              <span className="text-[10px] text-white/60 font-mono uppercase tracking-widest block mt-1">
                Baseada em Evidencias
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
          <div className="absolute -inset-4 border border-white/20 rounded-2xl pointer-events-none z-0 scale-95 md:scale-100" />
          
          {/* Main Frame - Placeholder */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10 border-4 border-white/30">
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
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Accents */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-3xl blur-md -z-10" />
          <div className="absolute bottom-12 -left-8 w-16 h-40 bg-white/10 border-l border-white/20 rounded-full -z-10 hidden md:block" />

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">Rolagem</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-white/30 rounded-full relative overflow-hidden border border-white/40"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
