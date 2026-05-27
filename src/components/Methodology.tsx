import { motion } from "motion/react";
import { Monitor, Building2, Users, GraduationCap, ChevronRight, Activity } from "lucide-react";

interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
}

export default function Methodology() {
  const cards: ServiceCard[] = [
    {
      title: "Terapia Online",
      subtitle: "Flexibilidade & Conforto",
      description: "Atendimento psicológico individual pela plataforma online, com flexibilidade de horário e conforto da sua casa.",
      iconName: "monitor",
      tags: ["Videochamada", "Flexível", "Seguro", "Prático"]
    },
    {
      title: "Terapia Presencial",
      subtitle: "Ambiente Acolhedor",
      description: "Consultas presenciais em ambiente acolhedor e sigiloso para o seu processo terapêutico.",
      iconName: "building",
      tags: ["Consultório", "Privacidade", "Conforto", "Acolhimento"]
    },
    {
      title: "Supervisão para Psicólogos",
      subtitle: "Foco em TCC",
      description: "Supervisão clínica online com foco na Terapia Cognitivo-Comportamental para psicólogos clínicos.",
      iconName: "users",
      tags: ["Online", "TCC", "Prática Clínica", "Desenvolvimento"]
    },
    {
      title: "Cursos para Psicólogos",
      subtitle: "Formação Baseada em Evidências",
      description: "Formações e capacitações para psicólogos e estudantes de Psicologia com base em evidências.",
      iconName: "graduation",
      tags: ["Capacitação", "Evidências", "Atualização", "Certificação"]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "monitor":
        return <Monitor className="w-5 h-5 text-champagne" />;
      case "building":
        return <Building2 className="w-5 h-5 text-champagne" />;
      case "users":
        return <Users className="w-5 h-5 text-champagne" />;
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-champagne" />;
      default:
        return <Monitor className="w-5 h-5 text-champagne" />;
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
    <section id="servicos" className="py-24 bg-slate-deep border-t border-slate-med/40 relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-slate-med/20 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-slate-med/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/35 bg-slate-med/60 mb-4"
          >
            <Activity className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[10px] font-mono tracking-widest text-champagne uppercase font-bold">Serviços</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight"
          >
            Como posso te ajudar
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-muted-steel font-sans mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Atendimento psicológico baseado em evidências científicas para adultos, além de supervisão e formação para profissionais de Psicologia.
          </motion.p>
        </div>

        {/* Services Grid */}
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
              className="relative p-7 rounded-2xl bg-white/80 border border-slate-med/60 hover:border-champagne/45 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Header Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-med/50 group-hover:bg-champagne transition-colors duration-300" />
              
              <div>
                {/* Icon and number */}
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
                {/* Tags */}
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

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-muted-steel/60 group-hover:text-champagne transition-all">
                  <span>Saiba mais</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-white/60 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-champagne/20 shadow-2xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-champagne) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="max-w-2xl text-left relative z-10">
            <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Diferencial</span>
            <h3 className="text-2xl font-serif text-off-white leading-snug">
              Aprenda ferramentas e estratégias para alcançar uma melhora nos seus sintomas.
            </h3>
            <p className="text-sm font-sans text-muted-steel mt-2 leading-relaxed">
              Desenvolva novas habilidades e adquira autonomia através da Terapia Cognitivo-Comportamental baseada em evidências científicas.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <div className="w-16 h-16 rounded-full bg-champagne text-white flex items-center justify-center border border-champagne/30 shadow-2xl">
              <Activity className="w-7 h-7 stroke-[1.5]" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
