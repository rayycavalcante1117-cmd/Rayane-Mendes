import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Shield } from "lucide-react";

export default function SocialProof() {
  const journeys = [
    {
      id: "1",
      scenario: "Reabilitação de Burnout Severn & Crises de Ansiedade",
      text: "Com técnicas robustas de reestruturação de rotina da TCC, restabeleci completamente a qualidade de sono e controle fisiológico do estresse sob alta demanda corporativa. A terapia desenhou um divisor de águas na minha governabilidade.",
      impact: "Retorno da clareza analítica e diminuição de 90% dos episódios de pânico severo.",
      context: "Direção executiva"
    },
    {
      id: "2",
      scenario: "Modulação de Impulsividade & Ansiedade Generalizada",
      text: "O treinamento sistemático em habilidades de tolerância ao estresse e efetividade interpessoal da DBT me proporcionou uma estabilidade emocional sem precedentes. Aprendi a regular flutuações antes que afetassem minhas decisões societárias.",
      impact: "Domínio efetivo sobre crises agudas e aumento significativo da paciência estratégica.",
      context: "Investimento societário"
    },
    {
      id: "3",
      scenario: "Gestão Relacional & Desenvolvimento de Limites Saudáveis",
      text: "Trabalhar as métricas de efetividade interpessoal reconfigurou totalmente a minha maneira de gerenciar conflitos afetivos de alta complexidade. Aprendi a delimitar barreiras sem perder o acolhimento necessário.",
      impact: "Restabelecimento de comunicação assertiva de alta integridade e estabilidade íntima.",
      context: "Relação de alto valor"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? journeys.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === journeys.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-24 bg-slate-deep relative overflow-hidden border-t border-b border-slate-med/40">
      {/* Background elegant circles of safety */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-med/10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-med/5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Title strictly complying with CRP quiet luxury styling */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Confidencialidade & Resultados</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight">
            A Jornada de Transformação
          </h2>
          <p className="text-xs font-mono text-muted-steel uppercase mt-3 tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-champagne" /> Resumos analíticos confidenciais sem identificação de autoria
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-slate-med/20 border border-slate-med/60 shadow-2xl overflow-hidden p-8 md:p-14 min-h-[380px] flex flex-col justify-between backdrop-blur-md">
            
            {/* Background design elements */}
            <div className="absolute top-0 right-0 p-8 text-champagne/5 z-0 select-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            <div className="relative z-10">
              {/* Scenario indicator representing elite medical care */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-champagne font-bold">
                  Estudo de Caso • {journeys[activeIndex].scenario}
                </span>
              </div>

              {/* Animate Text Transverse */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <p className="text-lg md:text-xl font-serif text-off-white italic leading-relaxed">
                    "{journeys[activeIndex].text}"
                  </p>

                  <div className="pt-6 border-t border-slate-med/55 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-xs font-mono tracking-widest text-champagne uppercase font-bold">
                        Impacto Clínico Medido
                      </span>
                      <span className="block text-sm font-sans text-muted-steel mt-0.5">
                        {journeys[activeIndex].impact}
                      </span>
                    </div>

                    <div className="px-3 py-1.5 bg-slate-deep rounded-lg border border-slate-med inline-flex items-center gap-1.5 self-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                      <span className="text-[9px] font-mono tracking-wider text-muted-steel uppercase font-bold">
                        Perfil do Paciente: {journeys[activeIndex].context}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & Counter Panel */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-med/40 relative z-10">
              {/* Counter Indicator */}
              <div className="text-xs font-mono text-muted-steel">
                <span className="text-off-white font-bold font-serif text-sm">0{activeIndex + 1}</span> / 0{journeys.length}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-champagne/20 text-off-white hover:bg-champagne hover:text-slate-deep hover:border-champagne transition-all cursor-pointer"
                  aria-label="Caso anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-champagne/20 text-off-white hover:bg-champagne hover:text-slate-deep hover:border-champagne transition-all cursor-pointer"
                  aria-label="Próximo caso"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Minimal Bottom Banner with Ethics Reminder */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[9px] font-mono uppercase tracking-[0.2em] text-muted-steel/50 mt-12"
        >
          Tratamentos realizados em estrito cumprimento com o Código de Ética Profissional do Psicólogo (CFP).
        </motion.p>

      </div>
    </section>
  );
}
