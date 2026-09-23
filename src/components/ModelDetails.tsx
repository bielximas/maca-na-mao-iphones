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
    <section id="opcoes-linha" className="relative overflow-x-clip bg-[#161329] py-10 text-white sm:py-16 md:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#6624D8]/25 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#FF3C91]/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-12">
          <motion.div
            key={generation.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-2 inline-flex items-center gap-1 rounded-full border border-[#2E2950] bg-[#211D3B] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#FF9B32] sm:text-xs"
          >
            <Sparkles className="h-3 w-3" />
            <span>Você escolheu</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h2
              key={generation.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-1 break-words text-2xl font-extrabold tracking-tight text-white sm:mb-3 sm:text-5xl md:text-6xl"
            >
              {generation.name}
            </motion.h2>
          </AnimatePresence>

          <p className="mx-auto max-w-lg text-[11px] leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Compare as três opções desta linha e fale com nossa equipe para confirmar estoque, armazenamento, condição e garantia.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory items-stretch gap-2 overflow-x-auto overflow-y-visible px-3 pb-5 pt-4 [scrollbar-color:#6624D8_#211D3B] [scrollbar-width:thin] sm:gap-3 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pt-4 md:snap-none lg:gap-7">
          {generation.versions.map((version: VersionOption, idx: number) => {
            const isItemInCart = items.some((item) => item.id === version.id);

            const directWhatsAppUrl = buildWhatsAppLink(
              `Olá! Tenho interesse no ${version.name} (valor demonstrativo ${version.formattedPrice}). Gostaria de verificar disponibilidade, opções de armazenamento, estado do aparelho e condições de pagamento.`,
              WHATSAPP_NUMBER,
            );

            const cardStyle =
              version.type === 'pro-max'
                ? 'bg-[#211D3B] border-[#FF3C91]/40 shadow-apple-md ring-1 ring-[#FF3C91]/30'
                : version.type === 'pro'
                  ? 'bg-[#1D1933] border-[#6624D8]/50 shadow-apple-sm'
                  : 'bg-[#1A162E] border-[#2E2950] shadow-sm';

            return (
              <motion.article
                key={version.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`relative z-10 flex min-h-[470px] w-[62vw] max-w-[215px] shrink-0 snap-center flex-col overflow-visible rounded-xl border p-2.5 transition-all duration-300 group sm:min-h-[520px] sm:w-[245px] sm:max-w-none sm:p-3.5 md:min-h-[590px] md:w-auto md:max-w-none md:shrink md:snap-start md:rounded-3xl md:p-5 ${cardStyle} hover:border-[#6624D8]`}
              >
                {version.type === 'pro-max' && (
                  <div className="pointer-events-none absolute -top-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#FF3C91] to-[#6624D8] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-md sm:text-[9px]">
                    Linha Pro Max
                  </div>
                )}

                {version.type === 'pro' && (
                  <div className="pointer-events-none absolute -top-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#FF9B32]/30 bg-[#2E2950] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-[#FF9B32] shadow-sm sm:text-[9px]">
                    Linha Pro
                  </div>
                )}

                {version.type === 'standard' && (
                  <div className="pointer-events-none absolute -top-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-700 bg-[#2E2950] px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-slate-300 shadow-sm sm:text-[9px]">
                    Melhor Custo
                  </div>
                )}

                <div className="flex min-h-0 flex-1 flex-col">
                  <div className="mb-1 mt-0.5 flex flex-wrap items-start justify-between gap-1 sm:mt-1.5">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                      {version.type === 'standard' ? 'Modelo Padrão' : version.type === 'pro' ? 'Modelo Pro' : 'Modelo Pro Max'}
                    </span>
                    <span className={`max-w-[135px] rounded-full border px-1.5 py-0.5 text-[8px] font-medium leading-tight sm:max-w-[170px] sm:text-[9px] ${
                      version.inStock
                        ? 'border-emerald-800/40 bg-emerald-950/50 text-emerald-400'
                        : 'border-amber-700/40 bg-amber-950/50 text-amber-300'
                    }`}>
                      {version.availabilityLabel ?? `${version.storage} · ${version.condition}`}
                    </span>
                  </div>

                  <h3 className="mb-1 break-words text-base font-extrabold leading-tight text-white sm:text-lg">
                    {version.name}
                  </h3>

                  <p className="mb-1.5 break-words text-[9px] leading-snug text-slate-300 sm:text-[10px]">
                    {version.description}
                  </p>

                  <div className="mb-1.5 flex flex-wrap gap-1 sm:mb-2">
                    <span className="max-w-full break-words rounded border border-[#2E2950] bg-[#161329] px-1 py-0.5 text-[8px] text-slate-300 sm:text-[9px]">
                      {version.screenSize}
                    </span>
                    <span className="max-w-full break-words rounded border border-[#2E2950] bg-[#161329] px-1 py-0.5 text-[8px] text-slate-300 sm:text-[9px]">
                      {version.chip}
                    </span>
                  </div>

                  <div className="my-0.5 flex h-28 w-full items-center justify-center overflow-visible sm:h-32">
                    <div className="h-full w-20 transition-transform duration-300 group-hover:scale-105 sm:w-24">
                      <DeviceMockup
                        modelId={generation.id}
                        name={version.name}
                        type={version.type}
                        colorHex={generation.colorHex}
                        accentHex={generation.accentHex}
                        imageSrc={
  version.thumbnail.startsWith('/')
    ? `${import.meta.env.BASE_URL}${version.thumbnail.slice(1)}`
    : version.thumbnail
}
                        tilted={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-[#2E2950] pt-2 sm:pt-3">
                  <div className="mb-1.5 sm:mb-2">
                    <span className="mb-0.5 block text-[8px] text-slate-400 sm:text-[9px]">Preço a partir de</span>
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="text-lg font-black tracking-tight text-white sm:text-xl">
                        {version.formattedPrice}
                      </span>
                      <span className="text-[8px] text-slate-400 sm:text-[9px]">à vista</span>
                    </div>
                    <span className="mt-0.5 block text-[8px] font-semibold text-[#FF9B32] sm:text-[9px]">
                      ou em até 12x no cartão
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <button
                      onClick={() => addItem(version, generation.name)}
                      disabled={!version.inStock}
                      className={`flex w-full items-center justify-center gap-1 rounded-lg px-1.5 py-2 text-[9px] font-bold shadow-md transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none sm:py-2.5 sm:text-[10px] ${
                        isItemInCart
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-[#6624D8] text-white shadow-apple-sm hover:bg-[#541cb8] active:bg-[#47159c]'
                      }`}
                    >
                      {!version.inStock ? (
                        <span>{version.availabilityLabel ?? 'Indisponível'}</span>
                      ) : isItemInCart ? (
                        <>
                          <Check className="h-3 w-3" />
                          <span>Selecionado no carrinho</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3 w-3" />
                          <span>Tenho interesse</span>
                        </>
                      )}
                    </button>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-1 rounded-lg border border-[#2E2950] bg-[#161329] px-1.5 py-1.5 text-[8px] font-semibold text-slate-300 transition-colors hover:text-white active:bg-[#252042] sm:py-2 sm:text-[9px]"
                    >
                      <MessageCircle className="h-2.5 w-2.5 text-[#FF9B32]" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-2 rounded-lg border border-[#2E2950] bg-[#211D3B]/60 p-2.5 text-left sm:mt-10 sm:gap-3 sm:rounded-2xl sm:p-5">
          <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#FF9B32] sm:h-5 sm:w-5" />
          <p className="text-[9px] leading-relaxed text-slate-300 sm:text-xs">
            <strong className="text-white">Observação importante:</strong> Valores demonstrativos. Confirme preço, armazenamento, saúde da bateria, garantia e disponibilidade antes da compra com nossa equipe no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};