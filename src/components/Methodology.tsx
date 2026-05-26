import { motion } from "motion/react";
import { Brain, Sparkles, AlertCircle, Heart, ChevronRight, Activity, Zap } from "lucide-react";
import { MethodologyCard } from "../types";

export default function Methodology() {
  const cards: MethodologyCard[] = [
    {
      title: "Ansiedade em Executivos",
      subtitle: "Alta Performance & Tomada de Decisão",
      description: "Regulação sistemática do estresse, técnicas de coping de alto rendimento e mindfulness aplicados à gestão de decisões sob extrema responsabilidade corporativa.",
      iconName: "brain",
      tags: ["Clareza Estratégica", "Sintomas Físicos", "Prevenção de Pânico", "Liderança Lúcida"]
    },
    {
      title: "Relacionamentos de Alto Valor",
      subtitle: "Inteligência Interpessoal & Conexões Saudáveis",
      description: "Desenvolvimento de habilidades assertivas de comunicação e dinâmicas afetivas blindadas por preceitos terapêuticos baseados em evidência científica.",
      iconName: "heart",
      tags: ["Resolução Dialética", "Efetividade Interpessoal", "Vínculo Seguro", "Limites Saudáveis"]
    },
    {
      title: "Inteligência Emocional",
      subtitle: "Modular Autocontrole & Gestão da Crise",
      description: "Ciência comportamental aplicada para domar impulsividade, regular flutuações e construir flexibilidade psicológica de forma orientada a objetivos de vida concretos.",
      iconName: "sparkles",
      tags: ["Regulação Emocional", "Modulação de Coping", "Autogestão Crítica", "Habilidades DBT"]
    },
    {
      title: "Esgotamento (Burnout)",
      subtitle: "Reabilitação Terapêutica & Equilíbrio Sustentável",
      description: "Processo estruturado de tratamento para estresse laboral crônico, focado na reestruturação da rotina, assertividade profissional e reatribuição de sentido de vida.",
      iconName: "zap",
      tags: ["Reabilitação Ativa", "Limites Profissionais", "Gerenciamento de Energia", "Bem-estar Físico"]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "brain":
        return <Brain className="w-5 h-5 text-champagne" />;
      case "heart":
        return <Heart className="w-5 h-5 text-champagne" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-champagne" />;
      case "zap":
        return <Zap className="w-5 h-5 text-champagne" />;
      default:
        return <Brain className="w-5 h-5 text-champagne" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="metodologia" className="py-24 bg-slate-deep border-t border-slate-med/40 relative">
      {/* Decorative vertical lines representing structural rigor */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-slate-med/20 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-slate-med/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/35 bg-slate-med/60 mb-4"
          >
            <Activity className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[10px] font-mono tracking-widest text-champagne uppercase font-bold">Especialidades Clínicas de Alto Padrão</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight"
          >
            Abordagens Estruturadas & Ciência de Elite
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-muted-steel font-sans mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Tratamentos baseados em evidência científica com foco em reestruturação narrativa de alta exigência. Sem teorias vagas, orientado para reatribuição existencial e excelência.
          </motion.p>
        </div>

        {/* Column Grid with a clean 4-card layout (2x2 on medium, 4x1 on desktop, etc) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.35, ease: "easeOut" } 
              }}
              className="relative p-7 rounded-2xl bg-slate-med/30 border border-slate-med/60 hover:border-champagne/45 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
            >
              {/* Decorative Card Header Accent Bar representing Quiet Luxury gold aspect */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-med/50 group-hover:bg-champagne transition-colors duration-300" />
              
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2.5 bg-slate-deep rounded-xl border border-slate-med group-hover:bg-champagne/10 transition-colors duration-300">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-champagne/40 group-hover:text-champagne/100 transition-colors font-bold">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="text-lg font-serif text-off-white mb-2 group-hover:text-champagne transition-colors duration-300 font-bold leading-tight">
                  {card.title}
                </h3>
                <h4 className="text-[10px] font-mono text-champagne/80 uppercase tracking-widest mb-4 font-bold">
                  {card.subtitle}
                </h4>
                <p className="text-xs text-muted-steel font-sans leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                {/* Custom Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-med/50">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono bg-slate-deep hover:bg-slate-med text-muted-steel hover:text-off-white px-2 py-0.5 rounded border border-slate-med transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Saber Mais accent */}
                <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-muted-steel/60 group-hover:text-champagne transition-all">
                  <span>Tratamento premium</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-section highlight box: The Core Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-slate-med to-slate-deep relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-champagne/20 shadow-2xl"
        >
          {/* Wave visual lines dots background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-champagne) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="max-w-2xl text-left relative z-10">
            <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Doutrina & Sigilo</span>
            <h3 className="text-2xl font-serif text-off-white leading-snug">
              Tratamento psicoterápico estritamente confidencial direcionado a tomadores de decisão e executivos de alta performance.
            </h3>
            <p className="text-sm font-sans text-muted-steel mt-2 leading-relaxed">
              Respeito absoluto à ética clínico-científica e amparo ético rigoroso. Sua privacidade intelectual e estabilidade existencial protegidas em cada nível de regulação de humor e autoconhecimento.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <div className="w-16 h-16 rounded-full bg-slate-deep text-champagne flex items-center justify-center border border-champagne/30 shadow-2xl">
              <AlertCircle className="w-7 h-7 stroke-[1.5]" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
