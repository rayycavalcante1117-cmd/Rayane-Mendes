import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      id: "1",
      name: "C.D.",
      location: "Miami",
      age: "30 anos",
      text: "Ter iniciado o processo de terapia com a Andressa foi maravilhoso! Com ela tenho conseguido lidar melhor com o transtorno de ansiedade. A Andressa, para além de uma profissional com grande habilidade técnica, é empática e humana. Me ouve e me acolhe de uma maneira fantástica!"
    },
    {
      id: "2",
      name: "C.L.",
      location: "Salvador",
      age: "24 anos",
      text: "A Andressa foi um achado. Minha depressão estava indo de mal a pior quando a conheci. Não esperava conhecer uma profissional tão dedicada, que me ouviria com tanta atenção e que me ajudaria o tanto que ajudou. Tenho apenas a agradecê-la!"
    },
    {
      id: "3",
      name: "F.G.",
      location: "São Paulo",
      age: "29 anos",
      text: "Procurei a Andressa para conseguir ter mais autonomia para compreender meus anseios e resolver questões desafiadoras na minha vida — e foi exatamente essa a ajuda que recebi. Consegui ter uma visão mais crítica sobre o que considerava problemas, o que me deu mais leveza para tomar decisões."
    },
    {
      id: "4",
      name: "G.Z.",
      location: "São Bernardo do Campo",
      age: "25 anos",
      text: "Já havia feito terapia antes, durante muito tempo. Encontrar a Andressa foi incrível. Consegui melhorar em muitos aspectos de maneira rápida e muito eficaz. Alcancei objetivos que em alguns momentos achei que seriam impossíveis. Agradeço e indico sempre."
    },
    {
      id: "5",
      name: "L.S.",
      location: "Balneário Camboriú",
      age: "30 anos",
      text: "Conheci a Andressa através de uma amiga psicóloga. Eu estava desesperada — ansiedade generalizada, pânico, um caos. Depois que comecei as sessões, é surreal a minha mudança. Me sinto à vontade de verdade com ela. Só tenho a agradecer pelo trabalho dela, que com certeza tem me ajudado a mudar minha vida."
    },
    {
      id: "6",
      name: "M.V.",
      location: "Califórnia",
      age: "27 anos",
      text: "Conheci a Andressa pelo Instagram em 2020 e me identifiquei bastante com seus posts. Nunca tinha feito terapia antes. Desde que iniciamos, sinto que consigo compreender melhor meus pensamentos e analisar os sintomas de forma racional para evitar novas crises de ansiedade."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-24 bg-slate-deep relative overflow-hidden border-t border-b border-slate-med/40">
      {/* Background elegant circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-med/10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-med/5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight">
            O que dizem meus pacientes
          </h2>
          <p className="text-xs font-mono text-muted-steel uppercase mt-3 tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-champagne fill-champagne" /> Relatos reais de transformação
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white/80 border border-slate-med/60 shadow-2xl overflow-hidden p-8 md:p-14 min-h-[380px] flex flex-col justify-between backdrop-blur-md">
            
            {/* Background quote icon */}
            <div className="absolute top-0 right-0 p-8 text-champagne/10 z-0 select-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            <div className="relative z-10">
              {/* Patient info */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-champagne font-bold">
                  {testimonials[activeIndex].name}, {testimonials[activeIndex].location}, {testimonials[activeIndex].age}
                </span>
              </div>

              {/* Testimonial text */}
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
                    {`"${testimonials[activeIndex].text}"`}
                  </p>

                  <div className="pt-6 border-t border-slate-med/55 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-champagne fill-champagne" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & Counter */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-med/40 relative z-10">
              {/* Counter */}
              <div className="text-xs font-mono text-muted-steel">
                <span className="text-off-white font-bold font-serif text-sm">0{activeIndex + 1}</span> / 0{testimonials.length}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-champagne/20 text-off-white hover:bg-champagne hover:text-white hover:border-champagne transition-all cursor-pointer"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-champagne/20 text-off-white hover:bg-champagne hover:text-white hover:border-champagne transition-all cursor-pointer"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[9px] font-mono uppercase tracking-[0.2em] text-muted-steel/50 mt-12"
        >
          Depoimentos reais compartilhados com autorização dos pacientes.
        </motion.p>

      </div>
    </section>
  );
}
