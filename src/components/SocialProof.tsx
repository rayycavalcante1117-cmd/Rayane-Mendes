import { useRef, useEffect, memo } from "react";
import { Quote, Star } from "lucide-react";

// Memoized testimonial card component
const TestimonialCard = memo(({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <div
    key={`${testimonial.id}-${index}`}
    className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-beige-warm/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    {/* Quote icon */}
    <div className="flex items-center justify-between mb-4">
      <Quote className="w-8 h-8 text-slate-med/20" />
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-slate-med fill-slate-med" />
        ))}
      </div>
    </div>

    {/* Highlight badge */}
    <span className="inline-block px-3 py-1 bg-beige-warm/50 text-slate-deep text-[10px] font-mono uppercase tracking-wider rounded-full mb-4 font-bold">
      {testimonial.highlight}
    </span>

    {/* Testimonial text */}
    <p className="text-sm text-text-dark font-sans leading-relaxed mb-6 italic">
      {`"${testimonial.text}"`}
    </p>

    {/* Patient info */}
    <div className="pt-4 border-t border-beige-warm/50 flex items-center justify-between">
      <div>
        <span className="text-xs font-mono text-slate-med font-bold block">
          {testimonial.name}
        </span>
        <span className="text-[10px] text-text-muted font-sans">
          {testimonial.location}, {testimonial.age}
        </span>
      </div>
      <div className="w-8 h-8 rounded-full bg-beige-warm flex items-center justify-center">
        <span className="text-xs font-serif text-slate-deep font-bold">
          {testimonial.name.charAt(0)}
        </span>
      </div>
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const testimonials = [
    {
      id: "1",
      name: "C.D.",
      location: "Miami",
      age: "30 anos",
      highlight: "Ansiedade sob controle",
      text: "Ter iniciado o processo de terapia com a Andressa foi maravilhoso! Com ela tenho conseguido lidar melhor com o transtorno de ansiedade. A Andressa, para alem de uma profissional com grande habilidade tecnica, e empatica e humana."
    },
    {
      id: "2",
      name: "C.L.",
      location: "Salvador",
      age: "24 anos",
      highlight: "Superacao da depressao",
      text: "A Andressa foi um achado. Minha depressao estava indo de mal a pior quando a conheci. Nao esperava conhecer uma profissional tao dedicada, que me ouviria com tanta atencao e que me ajudaria o tanto que ajudou."
    },
    {
      id: "3",
      name: "F.G.",
      location: "Sao Paulo",
      age: "29 anos",
      highlight: "Autonomia e clareza",
      text: "Procurei a Andressa para conseguir ter mais autonomia para compreender meus anseios e resolver questoes desafiadoras na minha vida - e foi exatamente essa a ajuda que recebi. Consegui ter uma visao mais critica sobre o que considerava problemas."
    },
    {
      id: "4",
      name: "G.Z.",
      location: "Sao Bernardo do Campo",
      age: "25 anos",
      highlight: "Resultados rapidos e eficazes",
      text: "Ja havia feito terapia antes, durante muito tempo. Encontrar a Andressa foi incrivel. Consegui melhorar em muitos aspectos de maneira rapida e muito eficaz. Alcancei objetivos que em alguns momentos achei que seriam impossiveis."
    },
    {
      id: "5",
      name: "L.S.",
      location: "Balneario Camboriu",
      age: "30 anos",
      highlight: "Transformacao real",
      text: "Eu estava desesperada - ansiedade generalizada, panico, um caos. Depois que comecei as sessoes, e surreal a minha mudanca. Me sinto a vontade de verdade com ela. So tenho a agradecer pelo trabalho dela, que com certeza tem me ajudado a mudar minha vida."
    },
    {
      id: "6",
      name: "M.V.",
      location: "California",
      age: "27 anos",
      highlight: "Controle da ansiedade",
      text: "Conheci a Andressa pelo Instagram em 2020 e me identifiquei bastante com seus posts. Nunca tinha feito terapia antes. Desde que iniciamos, sinto que consigo compreender melhor meus pensamentos e analisar os sintomas de forma racional."
    }
  ];

export default function SocialProof() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled half (the first set of testimonials)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-off-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-deep via-slate-med to-muted-steel" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-slate-med uppercase mb-2 block font-bold">Historias reais de transformacao</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark tracking-tight">
            Resultados que mudam vidas
          </h2>
          <p className="text-sm font-sans text-text-muted mt-4 leading-relaxed">
            Mais de 500 pacientes ja conquistaram mais clareza, autonomia e bem-estar com a TCC.
          </p>
        </div>

      </div>

      {/* Infinite Carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-[9px] font-mono uppercase tracking-[0.2em] text-text-muted/50 mt-8 px-6">
        Depoimentos reais compartilhados com autorizacao dos pacientes
      </p>
    </section>
  );
}
