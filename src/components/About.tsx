import { motion } from "motion/react";
import { Quote, ShieldCheck, GraduationCap, Award } from "lucide-react";

interface AboutProps {
  portraitPath: string;
}

export default function About({ portraitPath }: AboutProps) {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-champagne" />,
      title: "Formação Especializada",
      description: "Especialista em TCC e terapeuta certificada pela Federação Brasileira de Terapias Cognitiva."
    },
    {
      icon: <Award className="w-5 h-5 text-champagne" />,
      title: "Terapia Dialética (DBT)",
      description: "Formada em Terapia Comportamental Dialética pelo Behavioral Tech e especializanda na abordagem."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-champagne" />,
      title: "Professora e Supervisora",
      description: "Atuo como professora e supervisora clínica, orientando profissionais na Psicologia Baseada em Evidências."
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
          
          {/* Image Block - Left side */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-champagne/20 bg-slate-med/10 p-3"
            >
              {/* Outer frames */}
              <div className="absolute inset-0 border border-champagne/15 rounded-2xl pointer-events-none z-10" />
              
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
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md text-off-white border border-champagne/25 hidden sm:block">
                <span className="text-[10px] font-mono tracking-[0.2em] text-champagne uppercase block mb-1 font-bold">Psicóloga Clínica</span>
                <span className="text-sm font-serif block font-bold text-off-white">Andressa Juliana de Oliveira</span>
                <span className="text-[10px] font-mono block text-muted-steel">CRP-12/19715</span>
              </div>
            </motion.div>

            {/* Decorative Frame Layout */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-champagne/20 rounded-tl-2xl -z-1" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-champagne/20 rounded-br-2xl -z-1" />
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest text-champagne uppercase font-bold">Quem sou</span>
              <span className="h-[1px] w-12 bg-champagne/30" />
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-off-white tracking-tight mb-6 leading-tight"
            >
              Andressa Juliana de Oliveira
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-sm text-champagne font-mono uppercase tracking-widest mb-6 font-bold"
            >
              CRP-12/19715
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base text-muted-steel font-sans space-y-4 mb-8 leading-relaxed"
            >
              <p>
                Sou psicóloga graduada pela <strong className="text-off-white">UNIVALI</strong>, especialista em <strong className="text-off-white">Terapia Cognitivo-Comportamental</strong> e terapeuta certificada pela <strong className="text-off-white">Federação Brasileira de Terapias Cognitiva</strong>. Sou formada em <strong className="text-off-white">Terapia Comportamental Dialética</strong> pelo Behavioral Tech e especializanda nesta abordagem.
              </p>
              <p>
                Além disso, possuo formação em <strong className="text-off-white">Psicopatologia</strong> e <strong className="text-off-white">Avaliação e Manejo do Comportamento Suicida</strong>.
              </p>
              <p>
                Além de psicóloga, atuo como professora e supervisora clínica, orientando outros psicólogos na atuação baseada na <strong className="text-off-white">Psicologia Baseada em Evidências</strong>.
              </p>
            </motion.div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-6 border-t border-slate-med/60">
              {credentials.map((cred) => (
                <div key={cred.title} className="text-left">
                  <div className="mb-2">{cred.icon}</div>
                  <h4 className="text-xs font-mono font-bold text-off-white uppercase tracking-widest mb-1">{cred.title}</h4>
                  <p className="text-xs text-muted-steel font-sans leading-relaxed">{cred.description}</p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-xl bg-white/60 border-l-4 border-champagne flex gap-4 items-start"
            >
              <Quote className="w-8 h-8 text-champagne flex-shrink-0" />
              <div>
                <p className="italic text-base text-off-white leading-relaxed font-serif">
                  {'"A Terapia Cognitivo-Comportamental tem como objetivo que você aprenda ferramentas e estratégias para alcançar uma melhora nos seus sintomas, desenvolva novas habilidades e adquira autonomia."'}
                </p>
                <span className="block text-[10px] font-mono text-champagne uppercase mt-2 tracking-widest font-bold">— Andressa Juliana, CRP-12/19715</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
