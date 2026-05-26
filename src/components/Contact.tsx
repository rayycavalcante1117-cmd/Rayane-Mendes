import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, ParkingSquare, Compass, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { ContactForm } from "../types";

export default function Contact() {
  const [formState, setFormState] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    modality: "presential",
    serviceNeed: "tcc",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API storage / processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        modality: "presential",
        serviceNeed: "tcc",
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

  return (
    <section id="contato" className="py-24 bg-slate-deep relative border-t border-slate-med/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 block font-bold">Consulta de Elite & Localização</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-off-white tracking-tight">
            Ambiente Seguro & Conexão Direta
          </h2>
          <p className="text-sm font-sans text-muted-steel mt-4">
            Escolha entre uma conversa imediata consultiva no WhatsApp ou envie um formulário estruturado para análise cirúrgica da sua queixa.
          </p>
        </div>

        {/* Highlighted CTA Banner (The Conversion) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-slate-med/40 border-2 border-champagne/30 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Subtle gradient light background */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-champagne via-slate-med to-champagne" />
          
          <span className="text-xs font-mono tracking-[0.2em] text-champagne uppercase font-bold block mb-3">Conexão Segura & Imediata</span>
          <h3 className="text-2xl md:text-3xl font-serif text-off-white mb-4 leading-tight">
            Pronto para reconfigurar sua narrativa existencial?
          </h3>
          <p className="text-sm text-muted-steel mb-8 max-w-xl mx-auto leading-relaxed">
            Dê início ao seu processo exclusivo. Agende sua consulta inicial consultiva diretamente no canal oficial do consultório.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wa.me/5547999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20particular%20com%20a%20Dra.%20Andressa%20Juliana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-off-white border border-champagne text-xs font-mono tracking-widest uppercase hover:text-champagne hover:border-champagne hover:shadow-2xl transition-all duration-300 font-bold group"
            >
              <MessageCircle className="w-4 h-4 text-champagne animate-pulse" />
              Agendar Consulta Consultiva
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-champagne" />
            </a>
            
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-champagne font-bold">
              • Vagas limitadas para acompanhamento exclusivo este mês •
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Structured Map (Left Side 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address card */}
              <div className="p-6 rounded-xl bg-slate-med/20 border border-slate-med/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-deep rounded-lg border border-slate-med text-champagne">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-off-white">Endereço</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-steel font-sans leading-relaxed">
                  Edifício Riviera Concept<br />
                  Av. Osvaldo Reis, 3385 • Sala 1013<br />
                  Praia Brava, Itajaí - SC<br />
                  CEP: 88306-002
                </p>
              </div>

              {/* Attendance hours & contact */}
              <div className="p-6 rounded-xl bg-slate-med/20 border border-slate-med/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-deep rounded-lg border border-slate-med text-champagne">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-off-white">Funcionamento</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-steel font-sans leading-relaxed">
                  Segunda a Sexta: 08h às 21h<br />
                  Sábados: Sob Demanda Restrita<br />
                  Atendimentos Presenciais & Online
                </p>
              </div>
            </div>

            {/* Parking & Reception Tips */}
            <div className="p-6 rounded-xl border border-slate-med/60 flex gap-4 items-start bg-slate-med/10">
              <ParkingSquare className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono text-champagne uppercase tracking-wider mb-1 font-bold">Estacionamento & Logística</h4>
                <p className="text-xs text-muted-steel font-sans leading-relaxed">
                  Estacionamento rotativo privado, portaria controlada, elevadores de alta performance e área segura de recepção no complexo empresarial Riviera Concept. Total isolamento acústico e privacidade.
                </p>
              </div>
            </div>

            {/* Custom Grayscale Map suited for elegant dark interface */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-med shadow-2xl bg-slate-med/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4984572233827!2d-48.63660342371918!3d-26.935277194098495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df344fca894c25%3A0xe72610d48ff06c4b!2sRiviera%20Concept%20-%20Complexo%20Riviera!5e0!3m2!1spt-BR!2sbr!4v1716750000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.15) brightness(0.9)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Andressa Juliana - Riviera Concept"
              />
            </div>
          </div>

          {/* Interactive Consultation Matching Contact Form (Right Side 5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-2xl bg-slate-med/20 text-off-white border border-slate-med/80 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-champagne) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="booking-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 relative z-10"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-off-white mb-1 font-bold">Solicitação Confidencial</h3>
                      <p className="text-xs text-muted-steel font-sans mb-4">
                        Preencha suas informações para análise inicial reservada. Retornamos contato sob total sigilo.
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
                          className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
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
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
                            placeholder="(47) 99999-9999"
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
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40"
                            placeholder="exemplo@email.com"
                          />
                        </div>
                      </div>

                      {/* Service Need & Modality */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Especialidade</label>
                          <select 
                            name="serviceNeed"
                            value={formState.serviceNeed}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne appearance-none cursor-pointer"
                          >
                            <option value="tcc" className="bg-slate-deep text-off-white">Ansiedade Executiva</option>
                            <option value="dbt" className="bg-slate-deep text-off-white">Relacionamento Alto Valor</option>
                            <option value="burnout" className="bg-slate-deep text-off-white">Esgotamento (Burnout)</option>
                            <option value="inteligencia" className="bg-slate-deep text-off-white">Inteligência Emocional</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Modalidade</label>
                          <select 
                            name="modality"
                            value={formState.modality}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne appearance-none cursor-pointer"
                          >
                            <option value="presential" className="bg-slate-deep text-off-white">Presencial (Praia Brava)</option>
                            <option value="online" className="bg-slate-deep text-off-white">Online (Videovaga)</option>
                          </select>
                        </div>
                      </div>

                      {/* Brief message */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Relato Sucinto (Opcional)</label>
                        <textarea 
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/40 h-24 resize-none"
                          placeholder="Informe brevemente suas demandas clínicas..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 border border-champagne text-off-white hover:text-champagne hover:shadow-2xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Processando..." : "Submeter Solicitação Analítica"}
                    </button>

                    <p className="text-[9px] text-center text-muted-steel/50 font-mono tracking-widest leading-relaxed">
                      Seus dados são transmitidos sob criptografia e estritos protocolos éticos de sigilo clínico.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-booking"
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
                      <h3 className="text-2xl font-serif text-off-white mb-2">Solicitação Recebida</h3>
                      <p className="text-sm text-muted-steel leading-relaxed max-w-sm">
                        Obrigado por sua confiança. Sua solicitação confidencial foi encaminhada com segurança. Nosso consultório entrará em contato via WhatsApp sob total sigilo.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-slate-deep text-off-white border border-champagne/45 hover:text-champagne transition-all text-xs font-mono tracking-widest uppercase rounded-lg cursor-pointer"
                    >
                      Enviar outro preenchimento
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
