import { Monitor, Building2, Users, GraduationCap, ArrowRight, Activity } from "lucide-react";

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
      subtitle: "De onde voce estiver",
      description: "Sessoes individuais por videochamada com a mesma qualidade do atendimento presencial. Ideal para quem busca flexibilidade sem abrir mao de resultados.",
      iconName: "monitor",
      tags: ["Videochamada", "Flexivel", "Seguro", "Pratico"]
    },
    {
      title: "Terapia Presencial",
      subtitle: "Conexao face a face",
      description: "Atendimento em ambiente acolhedor e sigiloso. Para quem prefere a presenca fisica no processo de autoconhecimento e mudanca.",
      iconName: "building",
      tags: ["Consultorio", "Privacidade", "Conforto", "Acolhimento"]
    },
    {
      title: "Supervisao Clinica",
      subtitle: "Para psicologos",
      description: "Supervisao online focada em TCC para psicologos que desejam aprimorar sua pratica clinica com embasamento cientifico.",
      iconName: "users",
      tags: ["Online", "TCC", "Pratica Clinica", "Desenvolvimento"]
    },
    {
      title: "Cursos e Formacoes",
      subtitle: "Psicologia baseada em evidencias",
      description: "Capacitacoes para psicologos e estudantes que querem se destacar na area clinica com conhecimento atualizado.",
      iconName: "graduation",
      tags: ["Capacitacao", "Evidencias", "Atualizacao", "Certificacao"]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "monitor":
        return <Monitor className="w-5 h-5 text-slate-med" />;
      case "building":
        return <Building2 className="w-5 h-5 text-slate-med" />;
      case "users":
        return <Users className="w-5 h-5 text-slate-med" />;
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-slate-med" />;
      default:
        return <Monitor className="w-5 h-5 text-slate-med" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-beige-warm relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-slate-med/10 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-slate-med/10 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-med/30 bg-white/60 mb-4">
            <Activity className="w-3.5 h-3.5 text-slate-med" />
            <span className="text-[10px] font-mono tracking-widest text-slate-med uppercase font-bold">Servicos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark tracking-tight">
            Encontre o caminho certo para voce
          </h2>
          
          <p className="text-text-muted font-sans mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Atendimento psicologico individual, supervisao clinica e formacoes - tudo com base cientifica e foco em resultados reais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="relative p-7 rounded-2xl bg-white border border-beige-warm hover:border-slate-med/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Header Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-beige-warm group-hover:bg-slate-med transition-colors duration-300" />
              
              <div>
                {/* Icon and number */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2.5 bg-beige-warm/50 rounded-xl border border-beige-warm group-hover:bg-slate-med/10 transition-colors duration-300">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-med/40 group-hover:text-slate-med transition-colors font-bold">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="text-lg font-serif text-text-dark mb-2 group-hover:text-slate-med transition-colors duration-300 font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-[10px] font-mono text-slate-med uppercase tracking-widest mb-4 font-bold">
                  {card.subtitle}
                </p>
                <p className="text-xs text-text-muted font-sans leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-beige-warm/80">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono bg-beige-warm/50 hover:bg-slate-med/10 text-text-muted hover:text-slate-med px-2 py-0.5 rounded border border-beige-warm transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-text-muted/60 group-hover:text-slate-med transition-all">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-slate-deep to-slate-med relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="max-w-2xl text-left relative z-10">
            <span className="text-xs font-mono tracking-widest text-white/70 uppercase mb-2 block font-bold">Por que a TCC funciona?</span>
            <h3 className="text-2xl font-serif text-white leading-snug">
              Voce aprende tecnicas praticas para usar no dia a dia - nao apenas durante as sessoes.
            </h3>
            <p className="text-sm font-sans text-white/70 mt-2 leading-relaxed">
              A Terapia Cognitivo-Comportamental e uma das abordagens mais estudadas e validadas cientificamente. Resultados concretos, nao promessas vazias.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white text-slate-deep flex items-center justify-center border border-white/30 shadow-2xl">
              <Activity className="w-7 h-7 stroke-[1.5]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
