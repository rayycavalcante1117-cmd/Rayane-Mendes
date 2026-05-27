import { Sparkles, Heart, Video, Shield } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  bgImagePath: string;
}

export default function Hero({ onOpenBooking }: HeroProps) {

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Image - Professional positioned on right */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-horizontal.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Elegant Dark Blue Gradient Overlay - preserving cinematic feel */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(11, 28, 45, 0.95) 0%, rgba(16, 38, 61, 0.9) 30%, rgba(29, 53, 87, 0.75) 55%, rgba(36, 57, 90, 0.5) 75%, rgba(45, 70, 110, 0.3) 100%)'
        }}
      />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} 
      />

      {/* Floating Cards - Enhanced Glassmorphism */}
      <div className="absolute top-32 right-8 md:right-16 lg:right-24 z-20 animate-float hidden md:block">
        <div className="glass-card-enhanced px-5 py-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-deep" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Atendimento Personalizado</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-48 right-12 md:right-32 lg:right-48 z-20 animate-float-delayed hidden md:block">
        <div className="glass-card-enhanced px-5 py-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-slate-deep" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Ambiente Acolhedor e Seguro</span>
          </div>
        </div>
      </div>

      {/* Card Modalidade - Left side */}
      <div className="absolute bottom-32 left-8 md:left-16 lg:left-24 z-20 animate-float-slow hidden md:block">
        <div className="glass-card-enhanced px-5 py-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-deep" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Online & Presencial</span>
          </div>
        </div>
      </div>

      {/* Additional floating card - Top left */}
      <div className="absolute top-48 left-12 md:left-24 lg:left-32 z-20 animate-float-delayed hidden lg:block">
        <div className="glass-card-enhanced px-5 py-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-deep" />
            <span className="text-xs font-mono text-slate-deep font-bold uppercase tracking-wider">Sigilo Profissional</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        
        {/* Text Block - Aligned Left with space for photo on right */}
        <div className="max-w-2xl animate-fade-in">
          {/* Tag Line */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] font-bold border border-white/25 rounded-full">
              Terapia Cognitivo-Comportamental
            </span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
              Conquiste <span className="italic font-normal text-beige-warm">clareza emocional</span> e transforme sua relacao consigo e com o mundo.
            </h1>
          </div>

          {/* Subtitulo */}
          <p className="text-lg sm:text-xl text-white/90 font-sans mb-4 leading-relaxed max-w-xl font-medium">
            Chega de se sentir refem da ansiedade, da inseguranca ou de padroes que te travam.
          </p>
          <p className="text-base text-white/70 font-sans mb-10 leading-relaxed max-w-xl">
            Com a Terapia Cognitivo-Comportamental, voce aprende ferramentas praticas para reduzir sintomas, desenvolver novas habilidades e retomar o controle da sua vida.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={onOpenBooking}
              className="px-10 py-5 bg-white text-slate-deep border-2 border-white rounded-full text-xs font-mono tracking-widest uppercase hover:bg-beige-cream hover:border-beige-cream hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-bold shimmer-btn"
            >
              Quero comecar minha transformacao
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
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
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">Rolagem</span>
        <div className="w-1.5 h-6 bg-white/30 rounded-full relative overflow-hidden border border-white/40 animate-bounce-slow">
          <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
