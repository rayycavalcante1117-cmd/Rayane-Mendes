import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, CheckCircle, ArrowRight, MessageCircle, Instagram } from "lucide-react";

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
    
    // Simulate form submission
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

  return (
    <section id="contato" className="py-24 bg-beige-warm relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-slate-med uppercase mb-2 block font-bold">De o proximo passo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark tracking-tight">
            Pronto para comecar sua transformacao?
          </h2>
          <p className="text-sm font-sans text-text-muted mt-4">
            Escolha o canal mais confortavel para voce. Responderei o mais breve possivel.
          </p>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-deep to-slate-med shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <span className="text-xs font-mono tracking-[0.2em] text-white/70 uppercase font-bold block mb-3">Atendimento via WhatsApp</span>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
            Tire suas duvidas ou agende sua primeira sessao
          </h3>
          <p className="text-sm text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Sem compromisso. Vamos conversar sobre suas necessidades e encontrar o melhor caminho juntos.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-white text-slate-deep text-xs font-mono tracking-widest uppercase hover:bg-beige-warm hover:shadow-2xl transition-all duration-300 font-bold group shimmer-btn btn-glow"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp agora
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Side) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email card */}
              <div className="p-6 rounded-xl bg-white border border-beige-warm shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-beige-warm/50 rounded-lg border border-beige-warm text-slate-med">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-text-dark">E-mail</h3>
                </div>
                <a 
                  href="mailto:andressajuliana.psi@gmail.com" 
                  className="text-xs sm:text-sm text-slate-med font-sans leading-relaxed hover:underline"
                >
                  andressajuliana.psi@gmail.com
                </a>
              </div>

              {/* WhatsApp card */}
              <div className="p-6 rounded-xl bg-white border border-beige-warm shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-beige-warm/50 rounded-lg border border-beige-warm text-slate-med">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-text-dark">WhatsApp</h3>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-slate-med font-sans leading-relaxed hover:underline"
                >
                  Clique para conversar
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl border border-beige-warm bg-white shadow-lg">
              <h4 className="text-xs font-mono text-slate-med uppercase tracking-wider mb-4 font-bold">Redes Sociais</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="https://www.instagram.com/andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-text-muted hover:text-slate-med transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-text-muted hover:text-slate-med transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
                <a 
                  href="https://www.youtube.com/@andressajuliana.psicologa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-text-muted hover:text-slate-med transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="mailto:andressajuliana.psi@gmail.com"
                  className="flex items-center gap-2 text-xs text-text-muted hover:text-slate-med transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </div>
            </div>

            {/* Info note */}
            <div className="p-6 rounded-xl bg-white border border-beige-warm shadow-lg">
              <p className="text-xs text-text-muted font-sans leading-relaxed">
                <strong className="text-text-dark">Modalidades:</strong> Online (videochamada) e Presencial. Horarios flexiveis de segunda a sexta. Supervisao clinica e cursos disponiveis mediante consulta.
              </p>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-deep to-slate-med text-white border border-slate-med shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 relative z-10"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-white mb-1 font-bold">Prefere o formulario?</h3>
                      <p className="text-xs text-white/70 font-sans mb-4">
                        Preencha e retorno em ate 24h.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">Nome Completo</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white placeholder-white/40"
                          placeholder="Seu nome"
                        />
                      </div>

                      {/* Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">WhatsApp</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white placeholder-white/40"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">E-mail</label>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white placeholder-white/40"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      {/* Service & Modality */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">Servico</label>
                          <select 
                            name="serviceNeed"
                            value={formState.serviceNeed}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white appearance-none cursor-pointer"
                          >
                            <option value="terapia" className="bg-slate-deep">Psicoterapia</option>
                            <option value="supervisao" className="bg-slate-deep">Supervisao Clinica</option>
                            <option value="cursos" className="bg-slate-deep">Cursos</option>
                            <option value="outro" className="bg-slate-deep">Outro</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">Modalidade</label>
                          <select 
                            name="modality"
                            value={formState.modality}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white appearance-none cursor-pointer"
                          >
                            <option value="online" className="bg-slate-deep">Online</option>
                            <option value="presencial" className="bg-slate-deep">Presencial</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/70 block mb-1.5 font-bold">Mensagem (Opcional)</label>
                        <textarea 
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-white placeholder-white/40 h-24 resize-none"
                          placeholder="Conte-me um pouco sobre voce..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white border border-white text-slate-deep hover:bg-beige-warm hover:shadow-2xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </button>

                    <p className="text-[9px] text-center text-white/40 font-mono tracking-widest leading-relaxed">
                      Suas informacoes sao tratadas com total sigilo.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-contact"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col justify-center items-center text-center py-12 px-4 relative z-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center border border-white/35 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">Mensagem Enviada!</h3>
                      <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                        Obrigada pelo seu contato! Retornarei em breve pelo WhatsApp ou e-mail informado.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all text-xs font-mono tracking-widest uppercase rounded-lg cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
