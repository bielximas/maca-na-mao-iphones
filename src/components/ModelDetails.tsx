import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MessageCircle, Info, Sparkles, Check } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';
import type { GenerationModel, VersionOption } from '../data/products';
import { DeviceMockup } from './DeviceMockup';
import { useCart } from '../context/CartContext';

interface ModelDetailsProps {
  generation: GenerationModel;
}

export const ModelDetails: React.FC<ModelDetailsProps> = ({ generation }) => {
  const { addItem, items } = useCart();

  return (
    <section id="opcoes-linha" className="py-12 sm:py-20 md:py-28 bg-[#161329] text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#6624D8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF3C91]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <motion.div
            key={generation.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#211D3B] border border-[#2E2950] text-[#FF9B32] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Você escolheu</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h2
              key={generation.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 sm:mb-4"
            >
              {generation.name}
            </motion.h2>
          </AnimatePresence>

          <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Compare as três opções desta linha e fale com nossa equipe para confirmar estoque, armazenamento, condição e garantia.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-5 px-1 -mx-1 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:snap-none md:px-0 md:mx-0 items-stretch [scrollbar-width:thin] [scrollbar-color:#6624D8_#211D3B]">
          {generation.versions.map((version: VersionOption, idx: number) => {
            const isItemInCart = items.some((item) => item.id === version.id);

            const directWhatsAppUrl = buildWhatsAppLink(
              `Olá! Tenho interesse no ${version.name} (valor demonstrativo ${version.formattedPrice}). Gostaria de verificar disponibilidade, opções de armazenamento, estado do aparelho e condições de pagamento.`,
              WHATSAPP_NUMBER,
            );

            return (
              <motion.div
                key={version.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative min-w-[72vw] sm:min-w-[320px] md:min-w-0 snap-start shrink-0 flex flex-col justify-between rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 transition-all duration-300 group border ${
                  version.type === 'pro-max'
                    ? 'bg-[#211D3B] border-[#FF3C91]/40 shadow-apple-md sm:shadow-apple-lg ring-1 ring-[#FF3C91]/30'
                    : version.type === 'pro'
                      ? 'bg-[#1D1933] border-[#6624D8]/50 shadow-apple-sm sm:shadow-apple-md'
                      : 'bg-[#1A162E] border-[#2E2950] shadow-sm'
                } hover:border-[#6624D8]`}
              >
                {version.type === 'pro-max' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF3C91] to-[#6624D8] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 py-0.5 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                    Mais Completo
                  </div>
                )}
                {version.type === 'pro' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2E2950] text-[#FF9B32] border border-[#FF9B32]/30 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                    Linha Pro
                  </div>
                )}
                {version.type === 'standard' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2E2950] text-slate-300 border border-slate-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    Melhor Custo-Benefício
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2 mt-1 sm:mt-2">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {version.type === 'standard' ? 'Modelo Padrão' : version.type === 'pro' ? 'Modelo Pro' : 'Modelo Pro Max'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      Disponível
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1.5 sm:mb-2">
                    {version.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4">
                    {version.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] bg-[#161329] border border-[#2E2950] text-slate-300 px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                      {version.screenSize}
                    </span>
                    <span className="text-[10px] sm:text-[11px] bg-[#161329] border border-[#2E2950] text-slate-300 px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                      {version.chip}
                    </span>
                  </div>
                </div>

                <div className="relative my-2 sm:my-3 flex items-center justify-center h-24 sm:h-32 py-1 overflow-visible">
                  <div className="w-20 sm:w-24 transform group-hover:scale-105 transition-transform duration-300">
                    <DeviceMockup
                      modelId={generation.id}
                      name={version.name}
                      type={version.type}
                      colorHex={generation.colorHex}
                      accentHex={generation.accentHex}
                      imageSrc={version.thumbnail}
                      tilted
                    />
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#2E2950] mt-auto">
                  <div className="mb-3 sm:mb-4">
                    <span className="text-[11px] sm:text-xs text-slate-400 block mb-0.5">Preço a partir de</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {version.formattedPrice}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400">à vista</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-[#FF9B32] font-semibold block mt-0.5">
                      ou em até 12x no cartão de crédito
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => addItem(version, generation.name)}
                      className={`w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-md active:scale-95 ${
                        isItemInCart
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-[#6624D8] text-white hover:bg-[#541cb8] active:bg-[#47159c] shadow-apple-sm'
                      }`}
                    >
                      {isItemInCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Selecionado no carrinho</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Tenho interesse</span>
                        </>
                      )}
                    </button>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-xl sm:rounded-2xl font-semibold text-xs text-slate-300 hover:text-white bg-[#161329] active:bg-[#252042] border border-[#2E2950] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#FF9B32]" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 bg-[#211D3B]/60 border border-[#2E2950] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex items-start gap-2.5 sm:gap-3 max-w-3xl mx-auto text-left">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9B32] flex-shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Observação importante:</strong> Valores demonstrativos. Confirme preço, armazenamento, saúde da bateria, garantia e disponibilidade antes da compra com nossa equipe no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};