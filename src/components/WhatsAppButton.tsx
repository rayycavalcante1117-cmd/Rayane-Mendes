import { motion } from "motion/react";
import { MessageSquareText } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/message/R3E54EV6ZAJTO1?autoload=1&app_absent=0";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Hover Chat Label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:flex items-center px-4 py-2 rounded-xl bg-white border border-champagne/30 text-off-white text-[11px] font-mono tracking-wider shadow-lg pointer-events-none uppercase font-bold"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping mr-2" />
        Fale comigo
      </motion.div>

      {/* WhatsApp button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer group"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-1" style={{ animationDuration: '3s' }} />
        <div className="absolute -inset-1.5 rounded-full border border-[#25D366]/20 animate-pulse -z-1" style={{ animationDuration: '2s' }} />

        {/* Icon */}
        <MessageSquareText className="w-6 h-6 stroke-[1.8] group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
}
