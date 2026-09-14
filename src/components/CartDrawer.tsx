import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { DeviceMockup } from './DeviceMockup';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    clearCart,
    formattedTotal,
    getWhatsAppCheckoutLink,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex sm:pl-10 w-full justify-end">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full sm:max-w-md bg-white shadow-2xl flex flex-col justify-between h-full"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-purple-100 flex items-center justify-between bg-[#FFF7FB]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#6624D8] to-[#FF3C91] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#201B32]">
                      Sua Seleção de Interesse
                    </h2>
                    <p className="text-[11px] sm:text-xs text-[#726B82]">
                      {items.length} {items.length === 1 ? 'aparelho selecionado' : 'aparelhos selecionados'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-[#201B32] hover:bg-slate-100 transition-colors"
                  aria-label="Fechar painel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
                {items.length === 0 ? (
                  <div className="py-12 sm:py-16 text-center flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-50 flex items-center justify-center text-[#6624D8] mb-3 sm:mb-4">
                      <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 stroke-1" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#201B32] mb-1">
                      Nenhum iPhone selecionado ainda
                    </h3>
                    <p className="text-xs text-[#726B82] max-w-xs mb-5 sm:mb-6">
                      Navegue pelo catálogo e clique em "Tenho interesse" nos modelos que você deseja consultar.
                    </p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        const el = document.getElementById('geracoes');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#6624D8] hover:text-[#541cb8] bg-[#F3EBFF] px-4 py-2.5 rounded-xl transition-colors active:scale-95"
                    >
                      <span>Ver modelos de iPhone</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between pb-2 border-b border-purple-50 text-[11px] sm:text-xs text-[#726B82]">
                      <span>Produtos selecionados</span>
                      <button
                        onClick={clearCart}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Limpar seleção
                      </button>
                    </div>

                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-[#FFF7FB] border border-purple-100/70 relative group"
                      >
                        {/* Mini mockup visual */}
                        <div className="w-12 h-14 sm:w-14 sm:h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-xl border border-purple-50 p-1">
                          <DeviceMockup
                            modelId={15}
                            name={item.name}
                            type="standard"
                            tilted={false}
                            className="w-9 h-12 sm:w-10 sm:h-14"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-[#201B32] truncate">
                            {item.name}
                          </h4>
                          {item.screenSize && (
                            <span className="text-[10px] text-[#726B82] block truncate">
                              {item.screenSize}
                            </span>
                          )}
                          <div className="text-xs sm:text-sm font-extrabold text-[#6624D8] mt-0.5 sm:mt-1">
                            {item.formattedPrice}
                          </div>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-white transition-colors"
                          title="Remover este item"
                          aria-label={`Remover ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-4 sm:p-6 border-t border-purple-100 bg-[#FFF7FB] space-y-3 sm:space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#726B82]">
                      <span>Valor total estimado</span>
                      <span className="font-semibold text-slate-600">À vista</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl sm:text-2xl font-black text-[#201B32]">
                        {formattedTotal}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#FF9B32] font-semibold">
                        ou em até 12x
                      </span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[#726B82]">
                      Valores demonstrativos. Condições e estoque sujeitos a confirmação.
                    </p>
                  </div>

                  {/* Send Selection to WhatsApp Button */}
                  <a
                    href={getWhatsAppCheckoutLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#6624D8] hover:bg-[#541cb8] active:bg-[#47159c] text-white font-bold py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-apple-md hover:shadow-apple-glow transition-all duration-200 text-xs sm:text-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Enviar seleção pelo WhatsApp</span>
                  </a>

                  <p className="text-[10px] sm:text-[11px] text-center text-[#726B82]">
                    Você será direcionado para o atendimento oficial da Maca na Mão.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
