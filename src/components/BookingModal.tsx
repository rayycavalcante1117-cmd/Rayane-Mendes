import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Compass, Shield, ArrowRight, Check } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState<string>("");
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
    setNeed("");
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
          {/* Backdrop blur overlay */}
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
            className="relative w-full max-w-xl bg-slate-deep rounded-3xl overflow-hidden border border-champagne/30 shadow-2xl z-10"
          >
            {/* Header branding strip */}
            <div className="px-8 py-5 border-b border-slate-med/50 bg-slate-med/25 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-med text-off-white flex items-center justify-center text-sm font-serif font-bold border border-champagne/30">
                  <Compass className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <span className="font-serif text-sm font-bold tracking-tight text-off-white block uppercase">
                    Andressa Juliana
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-champagne uppercase block -mt-1 font-bold">
                    Atendimento Particular Sólido
                  </span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full border border-champagne/20 text-off-white hover:bg-champagne hover:text-slate-deep transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stepper indicator index */}
            {step < 4 && (
              <div className="bg-slate-deep px-8 pt-6 flex items-center gap-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      step >= num 
                        ? "bg-champagne text-slate-deep" 
                        : "bg-slate-med/20 text-muted-steel/50 border border-slate-med"
                    }`}>
                      {num}
                    </div>
                    {num < 3 && <div className={`w-8 h-[2px] ${step > num ? "bg-champagne" : "bg-slate-med"}`} />}
                  </div>
                ))}
                <span className="text-[10px] font-mono tracking-widest text-muted-steel uppercase ml-auto font-bold">
                  Passo {step} de 3
                </span>
              </div>
            )}

            {/* Steps Form Copy */}
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
                      <h3 className="text-xl font-serif text-off-white mb-1 font-bold">Qual a sua principal necessidade de tratamento?</h3>
                      <p className="text-xs text-muted-steel font-sans">
                        Selecione a especialidade ideal para a sua queixa ou necessidade clínica atual.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { id: "tcc", title: "Ansiedade em Executivos", desc: "Regulação de estresse extrema e mindfulness de alta performance." },
                        { id: "dbt", title: "Relacionamentos de Alto Valor", desc: "Habilidades assertivas de comunicação e regulação e limites interpessoais." },
                        { id: "burnout", title: "Esgotamento (Burnout)", desc: "Tratamento para exaustão profissional sustentável e rotina saudável." },
                        { id: "not_sure", title: "Não sei determinar", desc: "Podemos fazer uma triagem individualizada na primeira sessão." }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setNeed(opt.title);
                            handleNextStep();
                          }}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center group cursor-pointer ${
                            need === opt.title 
                              ? "bg-slate-med text-off-white border-champagne" 
                              : "bg-slate-med/15 text-muted-steel border-slate-med/50 hover:border-champagne hover:bg-slate-med/30"
                          }`}
                        >
                          <div>
                            <h4 className="font-serif text-sm font-bold text-off-white">{opt.title}</h4>
                            <p className="text-xs mt-0.5 text-muted-steel">{opt.desc}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-champagne" />
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
                      <h3 className="text-xl font-serif text-off-white mb-1 font-bold">Qual formato de atendimento você prefere?</h3>
                      <p className="text-xs text-muted-steel font-sans">
                        Nosso consultório está localizado no Edifício Riviera Concept na Praia Brava, Itajaí.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { id: "presential", title: "Atendimento Presencial", desc: "No Edifício Riviera Concept, com total discrição e conforto acústico." },
                        { id: "online", title: "Atendimento de Alta Definição (Online)", desc: "Videoconferência criptografada sob total confidencialidade." }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setModality(opt.title);
                            handleNextStep();
                          }}
                          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center group cursor-pointer ${
                            modality === opt.title 
                              ? "bg-slate-med text-off-white border-champagne" 
                              : "bg-slate-med/15 text-muted-steel border-slate-med/50 hover:border-champagne hover:bg-slate-med/30"
                          }`}
                        >
                          <div>
                            <h4 className="font-serif text-sm font-bold text-off-white">{opt.title}</h4>
                            <p className="text-xs mt-0.5 text-muted-steel">{opt.desc}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-champagne" />
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button 
                        onClick={handlePrevStep}
                        className="text-xs font-mono uppercase tracking-widest text-muted-steel hover:text-off-white underline cursor-pointer"
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
                      <h3 className="text-xl font-serif text-off-white mb-1 font-bold">Para finalizarmos, informe seus dados</h3>
                      <p className="text-xs text-muted-steel font-sans">
                        Seus dados serão analisados diretamente pela Doutora Andressa com absoluto sigilo.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Seu Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/30"
                          placeholder="Digite seu nome"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-champagne block mb-1.5 font-bold">Seu WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-deep border border-slate-med text-off-white text-xs sm:text-sm focus:outline-none focus:border-champagne placeholder-muted-steel/30"
                          placeholder="(47) 99999-9999"
                        />
                      </div>
                      
                      {/* Recap Box */}
                      <div className="p-4 rounded-xl bg-slate-med/10 border border-slate-med/50 space-y-1 text-xs text-muted-steel">
                        <div className="flex justify-between">
                          <span className="font-mono uppercase text-[9px] text-champagne/70">Especialidade:</span>
                          <span className="font-serif font-bold text-off-white">{need}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono uppercase text-[9px] text-champagne/70">Formato:</span>
                          <span className="font-serif font-bold text-off-white">{modality}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-xs font-mono uppercase tracking-widest text-muted-steel hover:text-off-white underline cursor-pointer"
                      >
                        Voltar
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-gradient-to-r from-slate-950 to-slate-900 text-off-white border border-champagne hover:text-champagne hover:shadow-2xl rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? "Cadastrando..." : "Confirmar Agendamento"}
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
                    <div className="w-16 h-16 rounded-full bg-champagne/10 text-champagne flex items-center justify-center border border-champagne/35 mx-auto">
                      <Check className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-off-white font-bold">Solicitação Pré-Confirmada</h3>
                      <p className="text-xs text-muted-steel font-sans leading-relaxed max-w-sm mx-auto">
                        Iniciando análise confidencial. Nossa recepção entrará em contato via WhatsApp sob estritos parâmetros éticos e sigilosos para definir data e hora.
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 border border-champagne/30 text-off-white hover:text-champagne transition-all duration-300 rounded-xl text-xs font-mono tracking-widest uppercase font-bold cursor-pointer"
                    >
                      Entendido
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Modal Bottom Strip decoration */}
            <div className="bg-slate-med/20 px-8 py-4 border-t border-slate-med/50 flex items-center gap-1.5 text-[9px] font-mono text-muted-steel/50 uppercase tracking-widest justify-center">
              <Shield className="w-3.5 h-3.5 text-champagne" />
              <span>Transmissão em conformidade ética absoluta de saúde e controle de dados</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
