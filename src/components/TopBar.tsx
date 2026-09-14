import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const TopBar: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink(
    "Olá! Gostaria de atendimento especializado para escolher meu iPhone.",
    WHATSAPP_NUMBER
  );

  return (
    <div className="bg-[#161329] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#2E2950] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-medium text-slate-300 truncate">
          <Sparkles className="w-3 h-3 text-[#FF9B32] animate-pulse flex-shrink-0" />
          <span className="truncate">
            Enviamos para todo o Brasil <span className="text-[#FF3C91] mx-0.5 sm:mx-1">·</span> Atendimento WhatsApp
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#FF9B32] hover:text-[#FF3C91] transition-colors flex-shrink-0 ml-2 group"
        >
          <MessageCircle className="w-3 h-3 group-hover:scale-110 transition-transform" />
          <span className="hidden xs:inline">WhatsApp</span>
          <span className="xs:hidden">Contato</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};
