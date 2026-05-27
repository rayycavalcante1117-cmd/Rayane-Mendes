import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Shield, ArrowRight, Check } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string>("");
  const [modality, setModality] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1200);
  };

  const resetModal = () => {
    setStep(1);
    setService("");
    setModality("");
    setName("");
    setPhone("");
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-deep/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden border border-beige-warm shadow-2xl z-10"
          >
            {/* Header */}
            <div className="px-8 py-5 border-b border-beige-warm bg-gradient-to-r from-slate-deep to-slate-med flex justify-between items-center">
              <div className="flex items-center gap-2">
                {/* Logo Placeholder */}
                <div 
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)', 
                    color: 'white', 
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '32px', 
                    height: '32px',
                    fontWeight: 'bold', 
                    fontSize: '0.4rem', 
                    letterSpacing: '1px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  LOGO
                </div>
                <div>
                  <span className="font-serif text-sm font-bold tracking-tight text-white block uppercase">
                    Andressa Juliana
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-white/60 uppercase block -mt-1 font-bold">
                    Agendamento de Consulta
                  </span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-deep transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stepper */}
            {step < 4 && (
              <div className="bg-beige-light px-8 pt-6 flex items-center gap-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      step >= num 
                        ? "bg-slate-med text-white" 
                        : "bg-beige-warm text-text-muted border border-beige-warm"
                    }`}>
                      {num}
                    </div>
                    {num < 3 && <div className={`w-8 h-[2px] ${step > num ? "bg-slate-med" : "bg-beige-warm"}`} />}
                  </div>
                ))}
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase ml-auto font-bold">
                  Passo {step} de 3
                </span>
              </div>
            )}

            {/* Steps */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-serif text-text-dark mb-1 font-bold">Qual o seu objetivo?</h3>
                      <p className="text-xs text-text-muted font-sans">
                        Selecione o servico que melhor atende suas necessidades.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { id: "terapia-online", title: "Terapia Online", desc: "Sessoes individuais por videochamada com flexibilidade." },
                        { id: "terapia-presencial", title: "Terapia Presencial", desc: "Consultas em ambiente acolhedor e sigiloso." },
                        { id: "supervisao", title: "Supervisao Clinica", desc: "Para psicologos que querem aprimorar sua pratica em TCC." },
                        { id: "cursos", title: "Cursos e Formacoes", desc: "Capacitacoes baseadas em evidencias cientificas." }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setService(opt.title);
                            handleNextStep();
                          }}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center group cursor-pointer ${
                            service === opt.title 
                              ? "bg-slate-med/10 text-text-dark border-slate-med" 
                              : "bg-beige-light text-text-muted border-beige-warm hover:border-slate-med hover:bg-slate-med/5"
                          }`}
                        >
                          <div>
                            <h4 className="font-serif text-sm font-bold text-text-dark">{opt.title}</h4>
                            <p className="text-xs mt-0.5 text-text-muted">{opt.desc}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-med" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-serif text-text-dark mb-1 font-bold">Como prefere ser atendido?</h3>
                      <p className="text-xs text-text-muted font-sans">
                        Escolha entre atendimento online ou presencial.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { id: "online", title: "Online", desc: "Videochamada com flexibilidade de horario, do conforto da sua casa." },
                        { id: "presencial", title: "Presencial", desc: "Ambiente acolhedor e sigiloso para conexao face a face." }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setModality(opt.title);
                            handleNextStep();
                          }}
                          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center group cursor-pointer ${
                            modality === opt.title 
                              ? "bg-slate-med/10 text-text-dark border-slate-med" 
                              : "bg-beige-light text-text-muted border-beige-warm hover:border-slate-med hover:bg-slate-med/5"
                          }`}
                        >
                          <div>
                            <h4 className="font-serif text-sm font-bold text-text-dark">{opt.title}</h4>
                            <p className="text-xs mt-0.5 text-text-muted">{opt.desc}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-med" />
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button 
                        onClick={handlePrevStep}
                        className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-slate-med underline cursor-pointer"
                      >
                        Voltar
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.form
                    key="step-3"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-serif text-text-dark mb-1 font-bold">Quase la! Seus dados para contato</h3>
                      <p className="text-xs text-text-muted font-sans">
                        Retornarei pelo WhatsApp para confirmar data e horario.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-med block mb-1.5 font-bold">Seu Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-beige-light border border-beige-warm text-text-dark text-xs sm:text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50"
                          placeholder="Digite seu nome"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-med block mb-1.5 font-bold">Seu WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-beige-light border border-beige-warm text-text-dark text-xs sm:text-sm focus:outline-none focus:border-slate-med placeholder-text-muted/50"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      
                      {/* Recap Box */}
                      <div className="p-4 rounded-xl bg-beige-light border border-beige-warm space-y-1 text-xs text-text-muted">
                        <div className="flex justify-between">
                          <span className="font-mono uppercase text-[9px] text-slate-med/70">Servico:</span>
                          <span className="font-serif font-bold text-text-dark">{service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono uppercase text-[9px] text-slate-med/70">Modalidade:</span>
                          <span className="font-serif font-bold text-text-dark">{modality}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-slate-med underline cursor-pointer"
                      >
                        Voltar
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-slate-med text-white border border-slate-med hover:bg-slate-deep hover:shadow-2xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer disabled:opacity-50 shimmer-btn"
                      >
                        {isSubmitting ? "Enviando..." : "Confirmar"}
                      </button>
                    </div>
                  </motion.form>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-med/10 text-slate-med flex items-center justify-center border border-slate-med/35 mx-auto">
                      <Check className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-text-dark font-bold">Recebido!</h3>
                      <p className="text-xs text-text-muted font-sans leading-relaxed max-w-sm mx-auto">
                        Entrarei em contato pelo WhatsApp informado para confirmar data e horario. Ate breve!
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full py-4 bg-slate-med border border-slate-med text-white hover:bg-slate-deep transition-all duration-300 rounded-xl text-xs font-mono tracking-widest uppercase font-bold cursor-pointer"
                    >
                      Entendido
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Footer */}
            <div className="bg-beige-light px-8 py-4 border-t border-beige-warm flex items-center gap-1.5 text-[9px] font-mono text-text-muted/50 uppercase tracking-widest justify-center">
              <Shield className="w-3.5 h-3.5 text-slate-med" />
              <span>Seus dados sao tratados com sigilo e confidencialidade</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
