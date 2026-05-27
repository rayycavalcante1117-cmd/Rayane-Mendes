import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight, MessageCircle, Instagram, MapPin, Clock, Phone } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  modality: string;
  serviceNeed: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    modality: "online",
    serviceNeed: "terapia",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        modality: "online",
        serviceNeed: "terapia",
        message: ""
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const whatsappUrl = "https://api.whatsapp.com/message/R3E54EV6ZAJTO1?autoload=1&app_absent=0";

  // Clinic photos placeholders
  const clinicPhotos = [
    { id: 1, label: "SALA DE ATENDIMENTO" },
    { id: 2, label: "RECEPCAO" },
    { id: 3, label: "AMBIENTE" },
    { id: 4, label: "ESPACO" },
    { id: 5, label: "DETALHES" },
    { id: 6, label: "VISTA" },
  ];

  // Link cards data
  const linkCards = [
    { id: 1, title: "Sobre a TCC", description: "Conheca a Terapia Cognitivo-Comportamental", href: "#servicos", bg: "#CDBEAF" },
    { id: 2, title: "Supervisao Clinica", description: "Para psicologos que buscam aprimoramento", href: "#servicos", bg: "#DDD3C7" },
    { id: 3, title: "Cursos e Formacoes", description: "Capacitacoes baseadas em evidencias", href: "#servicos", bg: "#5B6F8F" },
    { id: 4, title: "Depoimentos", description: "O que dizem nossos pacientes", href: "#depoimentos", bg: "#2D466E" },
    { id: 5, title: "Quem Sou", description: "Minha trajetoria profissional", href: "#sobre", bg: "#24395A" },
    { id: 6, title: "Agende sua Consulta", description: "De o primeiro passo agora", href: whatsappUrl, bg: "#CDBEAF" },
  ];

  return (
    <section id="contato" className="py-24 bg-beige-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-muted-steel uppercase mb-3 block font-bold">De o proximo passo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark tracking-tight mb-4">
            Pronto para comecar sua transformacao?
          </h2>
          <p className="text-base font-sans text-text-muted leading-relaxed">
            Escolha o canal mais confortavel para voce. Responderei o mais breve possivel.
          </p>
        </div>

        {/* Main Grid: WhatsApp Card + Social Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* WhatsApp Card - Menor e a esquerda */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-deep to-slate-med shadow-xl relative overflow-hidden h-full">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 font-bold">
                  Atendimento via WhatsApp
                </h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                  Tire suas duvidas ou agende sua primeira sessao. Sem compromisso.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-deep text-xs font-mono tracking-widest uppercase hover:bg-beige-cream hover:shadow-lg transition-all duration-300 font-bold group"
                >
                  Falar pelo WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Cards Grid - A direita */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/andressajuliana.psi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir Andressa Juliana no Instagram"
              className="social-card p-5 rounded-xl bg-white border border-beige-soft/50 shadow-sm flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-mono text-text-dark font-bold uppercase tracking-wider">Instagram</span>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@andressajuliana.psi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir Andressa Juliana no TikTok"
              className="social-card p-5 rounded-xl bg-white border border-beige-soft/50 shadow-sm flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="text-xs font-mono text-text-dark font-bold uppercase tracking-wider">TikTok</span>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@andressajuliana.psicologa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inscrever-se no canal do YouTube de Andressa Juliana"
              className="social-card p-5 rounded-xl bg-white border border-beige-soft/50 shadow-sm flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="text-xs font-mono text-text-dark font-bold uppercase tracking-wider">YouTube</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:andressajuliana.psi@gmail.com"
              aria-label="Enviar email para Andressa Juliana"
              className="social-card p-5 rounded-xl bg-white border border-beige-soft/50 shadow-sm flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-slate-med flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-mono text-text-dark font-bold uppercase tracking-wider">E-mail</span>
            </a>
          </div>
        </div>

        {/* Form + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white border border-beige-soft/50 shadow-lg">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-serif text-text-dark mb-1 font-bold">Prefere o formulario?</h3>
                  <p className="text-sm text-text-muted font-sans">Preencha e retorno em ate 24h.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">E-mail</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">Servico</label>
                      <select 
                        name="serviceNeed"
                        value={formState.serviceNeed}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med appearance-none cursor-pointer"
                      >
                        <option value="terapia">Psicoterapia</option>
                        <option value="supervisao">Supervisao Clinica</option>
                        <option value="cursos">Cursos</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">Modalidade</label>
                      <select 
                        name="modality"
                        value={formState.modality}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med appearance-none cursor-pointer"
                      >
                        <option value="online">Online</option>
                        <option value="presencial">Presencial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted block mb-1.5 font-bold">Mensagem (Opcional)</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-beige-cream border border-beige-soft text-text-dark text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50 h-24 resize-none"
                      placeholder="Conte-me um pouco sobre voce..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-deep border border-slate-deep text-white hover:bg-slate-med hover:shadow-xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                <p className="text-[9px] text-center text-text-muted/60 font-mono tracking-widest">
                  Suas informacoes sao tratadas com total sigilo.
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center py-12 px-4 space-y-6">
                <div className="w-16 h-16 rounded-full bg-slate-deep/10 text-slate-deep flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-text-dark mb-2">Mensagem Enviada!</h3>
                  <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                    Obrigada pelo seu contato! Retornarei em breve.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-beige-soft/50 text-text-dark border border-beige-soft hover:bg-beige-soft transition-all text-xs font-mono tracking-widest uppercase rounded-lg cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
          </div>

          {/* Map Card */}
          <div className="p-6 rounded-2xl bg-white border border-beige-soft/50 shadow-lg">
            <h3 className="text-xl font-serif text-text-dark mb-4 font-bold">Localizacao da Clinica</h3>
            
            {/* Google Maps Embed - Lazy Loading */}
            <div className="rounded-xl overflow-hidden shadow-md mb-6 aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.8!2d-48.6319!3d-26.9878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU5JzE2LjEiUyA0OMKwMzgnMDkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '220px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa com localizacao do consultorio da Psicologa Andressa Juliana no Edificio Riviera Concept, Itajai SC"
              />
            </div>

            {/* Address Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige-cream flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-med" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark mb-1">Edificio Riviera Concept</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Av. Osvaldo Reis, 3385 - Sala 1013<br />
                    Praia Brava, Itajai - SC<br />
                    CEP: 88306-001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige-cream flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-med" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark mb-1">Horario de Atendimento</h4>
                  <p className="text-xs text-text-muted">Segunda a Sexta, mediante agendamento</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige-cream flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-med" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark mb-1">Agendamento</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-med hover:underline">
                    Clique aqui para agendar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Photos Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-serif text-text-dark mb-6 font-bold text-center">Conheca o Espaco</h3>
          
          <div className="overflow-hidden rounded-2xl" role="region" aria-label="Galeria de fotos do consultorio">
            <div className="flex animate-scroll-clinic">
              {[...clinicPhotos, ...clinicPhotos].map((photo, index) => (
                <div 
                  key={`${photo.id}-${index}`}
                  className="flex-shrink-0 w-72 h-48 mx-2 rounded-xl overflow-hidden group cursor-pointer"
                  role="img"
                  aria-label={`Foto do consultorio: ${photo.label.toLowerCase()}`}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundColor: index % 2 === 0 ? '#CDBEAF' : '#DDD3C7',
                      color: '#2D466E',
                      fontWeight: 'bold',
                      fontSize: '0.75rem',
                      letterSpacing: '2px'
                    }}
                  >
                    {photo.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Link Cards */}
        <div>
          <h3 className="text-xl font-serif text-text-dark mb-6 font-bold text-center">Explore Mais</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="link-card rounded-2xl h-48 shadow-lg overflow-hidden cursor-pointer"
                style={{ backgroundColor: card.bg }}
              >
                {/* Card content area */}
                <div className="w-full h-full flex items-center justify-center">
                  <span 
                    className="text-xs font-mono uppercase tracking-widest font-bold"
                    style={{ color: ['#24395A', '#2D466E', '#5B6F8F'].includes(card.bg) ? 'white' : '#2D466E' }}
                  >
                    {card.title}
                  </span>
                </div>
                
                {/* Hover overlay content */}
                <div className="link-card-content">
                  <h4 className="text-lg font-serif text-white font-bold mb-1">{card.title}</h4>
                  <p className="text-xs text-white/80">{card.description}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-white/60 uppercase tracking-widest mt-3">
                    Saiba mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
