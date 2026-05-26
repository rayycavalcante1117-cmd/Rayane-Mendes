import { motion } from "motion/react";
import { MessageSquareText } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5547999999999?text=Ol%C3%A1!+Gostaria+de+agendar+uma+consulta+particular+com+a+Doutora+Andressa+Juliana.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Elegant Hover Chat Bubble Label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:flex items-center px-4 py-2 rounded-xl bg-slate-med border border-champagne/30 text-off-white text-[11px] font-mono tracking-wider shadow-lg pointer-events-none uppercase font-bold"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-champagne animate-ping mr-2" />
        Atendimento On-line
      </motion.div>

      {/* Pulsing button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer group"
      >
        {/* Organic Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-1" style={{ animationDuration: '3s' }} />
        <div className="absolute -inset-1.5 rounded-full border border-[#25D366]/20 animate-pulse -z-1" style={{ animationDuration: '2s' }} />

        {/* Customized Elegant Icon representing messaging */}
        <MessageSquareText className="w-6 h-6 stroke-[1.8] group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
