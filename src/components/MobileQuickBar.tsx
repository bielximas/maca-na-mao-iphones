import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const MobileQuickBar: React.FC = () => {
  const { itemCount, setIsCartOpen } = useCart();

  const generalWhatsAppUrl = buildWhatsAppLink(
    "Olá! Estou no site da Maca na Mão iPhones e gostaria de falar com um especialista.",
    WHATSAPP_NUMBER
  );

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-lg border border-purple-100/80 shadow-apple-lg rounded-2xl p-2 flex items-center justify-between gap-2 pointer-events-auto max-w-md mx-auto">
        
        {/* WhatsApp Direct Action */}
        <a
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#6624D8] active:bg-[#541cb8] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-sm transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-emerald-300" />
          <span>Falar no WhatsApp</span>
        </a>

        {/* Interest Cart Selector */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={`flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all active:scale-95 border ${
            itemCount > 0
              ? 'bg-[#FFEBF4] text-[#FF3C91] border-[#FF3C91]/30 shadow-sm'
              : 'bg-[#F3EBFF] text-[#6624D8] border-[#6624D8]/20'
          }`}
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF3C91] text-white text-[9px] font-extrabold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <span>{itemCount > 0 ? `${itemCount} item(ns)` : 'Seleção'}</span>
        </button>

      </div>
    </div>
  );
};
