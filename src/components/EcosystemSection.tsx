import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { ECOSYSTEM_PRODUCTS, buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const EcosystemSection: React.FC = () => {
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const productImage = (thumbnail: string) => {
    if (!thumbnail) return '';

    return thumbnail.startsWith('/')
      ? assetUrl(thumbnail.slice(1))
      : thumbnail;
  };

  return (
    <section id="ecossistema" className="relative py-12 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-16">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#FFEBF4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF3C91] sm:mb-3 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Mais que um iPhone</span>
          </div>
          <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-[#201B32] sm:mb-4 sm:text-4xl md:text-5xl">
            Complete sua experiência.
          </h2>
          <p className="text-xs text-[#726B82] sm:text-base md:text-lg">
            Conectividade total e produtividade no seu dia a dia com a linha completa da Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-3">
          {ECOSYSTEM_PRODUCTS.map((item, index) => {
            const whatsappLink = buildWhatsAppLink(item.whatsappMessage, WHATSAPP_NUMBER);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mobile-scroll-reveal group flex flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition-all duration-300 hover:shadow-apple-md sm:rounded-3xl sm:hover:shadow-apple-lg"
              >
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-tr ${item.gradient} p-4 sm:h-56 sm:p-6`}>
                  <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/10 blur-xl" />

                  <img
                    src={productImage(item.thumbnail)}
                    alt={item.name}
                    className="relative z-10 h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-grow flex-col justify-between p-4 sm:p-8">
                  <div>
                    <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-[#6624D8] sm:mb-1 sm:text-xs">
                      {item.startingPrice}
                    </span>
                    <h3 className="mb-1 text-xl font-black text-[#201B32] sm:mb-2 sm:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mb-2 text-xs font-semibold text-[#FF3C91] sm:mb-3 sm:text-sm">
                      “{item.tagline}”
                    </p>
                    <p className="mb-4 text-xs leading-relaxed text-[#726B82] sm:mb-6 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F3EBFF] px-4 py-3 text-xs font-bold text-[#6624D8] shadow-sm transition-all duration-200 hover:bg-[#6624D8] hover:text-white active:scale-95 sm:rounded-2xl sm:py-3.5 sm:text-sm"
                  >
                    <MessageCircle className="h-4 w-4 text-[#6624D8] transition-colors group-hover/btn:text-white" />
                    <span>Consultar disponibilidade</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};