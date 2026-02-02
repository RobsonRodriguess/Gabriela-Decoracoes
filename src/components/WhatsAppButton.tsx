import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/556133880005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-green-500 hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
      
      {/* Tooltip opcional */}
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold py-1 px-3 rounded-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Orçamento Rápido
      </span>
    </a>
  );
};

export default WhatsAppButton;