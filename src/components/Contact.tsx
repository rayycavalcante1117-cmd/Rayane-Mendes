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
    <section id="contato" className="py-24 bg-slate-deep relative border-t border-slate-med/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Contato</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight">
            Vamos conversar?
          </h2>
          <p className="text-sm font-sans text-muted-steel mt-4">
            Entre em contato pelo WhatsApp para agendar sua consulta ou tire suas dúvidas pelo formulário.
          </p>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-white/80 border-2 border-champagne/30 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Gradient top line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-champagne via-slate-med to-champagne" />
          
          <span className="text-xs font-mono tracking-[0.2em] text-champagne uppercase font-bold block mb-3">Agende sua consulta</span>
          <h3 className="text-2xl md:text-3xl font-serif text-off-white mb-4 leading-tight">
            Pronto para se tornar a sua melhor versão?
          </h3>
          <p className="text-sm text-muted-steel mb-8 max-w-xl mx-auto leading-relaxed">
            Clique no botão abaixo para agendar sua consulta diretamente pelo WhatsApp.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-full bg-champagne text-white border border-champagne text-xs font-mono tracking-widest uppercase hover:bg-champagne/90 hover:shadow-2xl transition-all duration-300 font-bold group"
            >
              <MessageCircle className="w-4 h-4 animate-pulse" />
              Agendar minha consulta
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Side) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email card */}
              <div className="p-6 rounded-xl bg-white/80 border border-slate-med/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-deep rounded-lg border border-slate-med text-champagne">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-off-white">E-mail</h3>
                </div>
                <a 
                  href="mailto:andressajuliana.psi@gmail.com" 
                  className="text-xs sm:text-sm text-champagne font-sans leading-relaxed hover:underline"
                >
                  andressajuliana.psi@gmail.com
                </a>
              </div>

              {/* WhatsApp card */}
              <div className="p-6 rounded-xl bg-white/80 border border-slate-med/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-deep rounded-lg border border-slate-med text-champagne">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-off-white">WhatsApp</h3>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-champagne font-sans leading-relaxed hover:underline"
                >
                  Clique para conversar
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl border border-slate-med/60 bg-white/60">
              <h4 className="text-xs font-mono text-champagne uppercase tracking-wider mb-4 font-bold">Redes Sociais</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="https://www.instagram.com/andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-steel hover:text-champagne transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@andressajuliana.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-steel hover:text-champagne transition-colors"
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
                  className="flex items-center gap-2 text-xs text-muted-steel hover:text-champagne transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="mailto:andressajuliana.psi@gmail.com"
                  className="flex items-center gap-2 text-xs text-muted-steel hover:text-champagne transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </div>
            </div>

            {/* Info note */}
            <div className="p-6 rounded-xl bg-white/60 border border-champagne/20">
              <p className="text-xs text-muted-steel font-sans leading-relaxed">
                <strong className="text-off-white">Modalidades de atendimento:</strong> Online (videochamada) e Presencial. Horários flexíveis de segunda a sexta-feira. Supervisão clínica e cursos disponíveis mediante consulta.
              </p>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-2xl bg-white/80 text-off-white border border-slate-med/80 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-champagne) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
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
                      <h3 className="text-lg sm:text-xl font-serif text-off-white mb-1 font-bold">Formulário de Contato</h3>
                      <p className="text-xs text-muted-steel font-sans mb-4">
                        Preencha seus dados e entraremos em contato em breve.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Nome Completo</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
                          placeholder="Seu nome"
                        />
                      </div>

                      {/* Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">WhatsApp</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">E-mail</label>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      {/* Service & Modality */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Serviço</label>
                          <select 
                            name="serviceNeed"
                            value={formState.serviceNeed}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne appearance-none cursor-pointer"
                          >
                            <option value="terapia" className="bg-slate-deep">Psicoterapia</option>
                            <option value="supervisao" className="bg-slate-deep">Supervisão Clínica</option>
                            <option value="cursos" className="bg-slate-deep">Cursos</option>
                            <option value="outro" className="bg-slate-deep">Outro</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Modalidade</label>
                          <select 
                            name="modality"
                            value={formState.modality}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne appearance-none cursor-pointer"
                          >
                            <option value="online" className="bg-slate-deep">Online</option>
                            <option value="presencial" className="bg-slate-deep">Presencial</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Mensagem (Opcional)</label>
                        <textarea 
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40 h-24 resize-none"
                          placeholder="Conte-me um pouco sobre você..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-champagne border border-champagne text-white hover:bg-champagne/90 hover:shadow-2xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </button>

                    <p className="text-[9px] text-center text-muted-steel/50 font-mono tracking-widest leading-relaxed">
                      Suas informações são tratadas com total sigilo e confidencialidade.
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
                    <div className="w-16 h-16 rounded-full bg-champagne/10 text-champagne flex items-center justify-center border border-champagne/35 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-off-white mb-2">Mensagem Enviada!</h3>
                      <p className="text-sm text-muted-steel leading-relaxed max-w-sm">
                        Obrigada pelo seu contato! Retornarei em breve pelo WhatsApp ou e-mail informado.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-slate-deep text-white border border-champagne/45 hover:text-champagne transition-all text-xs font-mono tracking-widest uppercase rounded-lg cursor-pointer"
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
