import { Quote, GraduationCap, Award, ShieldCheck } from "lucide-react";

interface AboutProps {
  portraitPath: string;
}

export default function About({ portraitPath }: AboutProps) {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-slate-med" />,
      title: "Formacao Especializada",
      description: "Especialista em TCC e terapeuta certificada pela Federacao Brasileira de Terapias Cognitiva."
    },
    {
      icon: <Award className="w-5 h-5 text-slate-med" />,
      title: "Terapia Dialetica (DBT)",
      description: "Formada em Terapia Comportamental Dialetica pelo Behavioral Tech e especializanda na abordagem."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-slate-med" />,
      title: "Professora e Supervisora",
      description: "Atuo como professora e supervisora clinica, orientando profissionais na Psicologia Baseada em Evidencias."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-beige-warm via-slate-med to-beige-warm" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Block - Left side */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-beige-warm p-3 bg-beige-light">
              {/* Outer frames */}
              <div className="absolute inset-0 border border-slate-med/15 rounded-2xl pointer-events-none z-10" />
              
              {/* Placeholder for photo */}
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
                  letterSpacing: '2px',
                  borderRadius: '0.75rem'
                }}
              >
                ANDRESSA JULIANA
              </div>

              {/* Caption over photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-beige-warm hidden sm:block">
                <span className="text-[10px] font-mono tracking-[0.2em] text-slate-med uppercase block mb-1 font-bold">Psicologa Clinica</span>
                <span className="text-sm font-serif block font-bold text-text-dark">Andressa Juliana de Oliveira</span>
                <span className="text-[10px] font-mono block text-text-muted">CRP-12/19715</span>
              </div>
            </div>

            {/* Decorative Frame Layout */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-slate-med/20 rounded-tl-2xl -z-1" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-slate-med/20 rounded-br-2xl -z-1" />
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest text-slate-med uppercase font-bold">Quem sou</span>
              <span className="h-[1px] w-12 bg-slate-med/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-dark tracking-tight mb-6 leading-tight">
              Prazer, sou a Andressa
            </h2>

            <p className="text-sm text-slate-med font-mono uppercase tracking-widest mb-6 font-bold">
              CRP-12/19715
            </p>

            <div className="text-sm sm:text-base text-text-muted font-sans space-y-4 mb-8 leading-relaxed">
              <p>
                Sou psicologa graduada pela <strong className="text-text-dark">UNIVALI</strong>, especialista em <strong className="text-text-dark">Terapia Cognitivo-Comportamental</strong> e terapeuta certificada pela <strong className="text-text-dark">Federacao Brasileira de Terapias Cognitiva</strong>.
              </p>
              <p>
                Sou formada em <strong className="text-text-dark">Terapia Comportamental Dialetica</strong> pelo Behavioral Tech e possuo formacao em <strong className="text-text-dark">Psicopatologia</strong> e <strong className="text-text-dark">Avaliacao e Manejo do Comportamento Suicida</strong>.
              </p>
              <p>
                Alem de psicologa, atuo como <strong className="text-text-dark">professora e supervisora clinica</strong>, orientando outros psicologos na atuacao baseada em evidencias cientificas.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-beige-warm">
              {credentials.map((cred) => (
                <div key={cred.title} className="text-left p-4 rounded-xl bg-beige-light/50">
                  <div className="mb-2">{cred.icon}</div>
                  <h4 className="text-xs font-mono font-bold text-text-dark uppercase tracking-widest mb-1">{cred.title}</h4>
                  <p className="text-xs text-text-muted font-sans leading-relaxed">{cred.description}</p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-slate-deep to-slate-med flex gap-4 items-start">
              <Quote className="w-8 h-8 text-white/50 flex-shrink-0" />
              <div>
                <p className="italic text-base text-white leading-relaxed font-serif">
                  {'"Meu objetivo e que voce saia de cada sessao com ferramentas praticas para aplicar no seu dia a dia - e nao apenas se sentir acolhido, mas realmente transformar sua vida."'}
                </p>
                <span className="block text-[10px] font-mono text-white/70 uppercase mt-2 tracking-widest font-bold">- Andressa Juliana</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
