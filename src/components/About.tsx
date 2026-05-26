import { motion } from "motion/react";
import { Quote, ShieldAlert, GraduationCap, EyeOff } from "lucide-react";

interface AboutProps {
  portraitPath: string;
}

export default function About({ portraitPath }: AboutProps) {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-champagne" />,
      title: "Rigor Clínico de Ponta",
      description: "Ampla capacitação científica em Terapia Cognitivo-Comportamental (TCC) e Dialética Comportamental (DBT)."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-champagne" />,
      title: "Sigilo Absoluto",
      description: "Prática regida por discrição irrefutável para proteção de dados intelectuais e de carreira empresarial."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-champagne" />,
      title: "Arquitetura Exclusiva",
      description: "Sessões desenhadas individualmente para lideranças, tomadores de decisão e alta performance existencial."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-deep relative overflow-hidden border-t border-slate-med/40">
      {/* Editorial Watermark background */}
      <div className="absolute -right-20 bottom-1/4 select-none opacity-[0.015] pointer-events-none text-[120px] lg:text-[180px] font-serif font-black uppercase text-off-white leading-none">
        Andressa
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Magazine Editor Left side (Image Block) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-champagne/20 bg-slate-med/10 p-3"
            >
              {/* Outer floating frames */}
              <div className="absolute inset-0 border border-champagne/15 rounded-2xl pointer-events-none z-10" />
              
              {/* Main Photo with no Referrer Policy */}
              <img 
                src={portraitPath} 
                alt="Andressa Juliana - Psicologia Clínica Premium" 
                className="w-full h-full object-cover rounded-xl grayscale filter hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* Minimal caption over photo bottom bar */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-deep/95 backdrop-blur-md text-off-white border border-champagne/25 hidden sm:block">
                <span className="text-[10px] font-mono tracking-[0.2em] text-champagne uppercase block mb-1 font-bold">Psicóloga Clínica</span>
                <span className="text-sm font-serif block font-bold text-off-white">Andressa Juliana</span>
                <span className="text-[10px] font-mono block text-muted-steel">CRP 12/23456 • Praia Brava Itajaí</span>
              </div>
            </motion.div>

            {/* Decorative Floating Frame Layout */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-champagne/20 rounded-tl-2xl -z-1" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-champagne/20 rounded-br-2xl -z-1" />
          </div>

          {/* Magazine Copy Right side */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* Minimalist Top Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest text-champagne uppercase font-bold">A Filosofia do Equilíbrio</span>
              <span className="h-[1px] w-12 bg-champagne/30" />
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-off-white tracking-tight mb-6 leading-tight"
            >
              Exclusividade Intelectual, Métodos Contemporâneos & Amparo Sob Sigilo Inviolável.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base text-muted-steel font-sans space-y-4 mb-8 leading-relaxed"
            >
              <p>
                Unindo a base analítica rigorosa da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> e da <strong>Terapia Dialética (DBT)</strong> sob uma moldura de requinte intelectual, ofereço intervenções de alto valor com foco no equilíbrio existencial de pessoas de alta exigência.
              </p>
              <p>
                No coração da Praia Brava, Itajaí, no sofisticado <strong>Edifício Riviera Concept</strong>, estruturo um ecossistema seguro e silencioso adequado para reconfigurar padrões emocionais complexos e mitigar ansiedades severas, burnout e fragilidades de relacionamento.
              </p>
            </motion.div>

            {/* Beautiful visual layout credential grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-slate-med/60">
              {credentials.map((cred) => (
                <div key={cred.title} className="text-left">
                  <div className="mb-2">{cred.icon}</div>
                  <h4 className="text-xs font-mono font-bold text-off-white uppercase tracking-widest mb-1">{cred.title}</h4>
                  <p className="text-xs text-muted-steel font-sans leading-relaxed">{cred.description}</p>
                </div>
              ))}
            </div>

            {/* Quote Block of Intention */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-xl bg-slate-med/10 border-l-4 border-champagne flex gap-4 items-start"
            >
              <Quote className="w-8 h-8 text-champagne flex-shrink-0" />
              <div>
                <p className="italic text-base text-off-white leading-relaxed font-serif">
                  "Não é apenas sobre falar. É sobre reestruturar a narrativa da sua existência."
                </p>
                <span className="block text-[10px] font-mono text-champagne uppercase mt-2 tracking-widest font-bold">— Andressa Juliana, CRP 12/23456</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
