import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Tablet, Watch, Shield } from 'lucide-react';
import { ECOSYSTEM_PRODUCTS, buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecossistema" className="py-12 sm:py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEBF4] text-[#FF3C91] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mais que um iPhone</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#201B32] tracking-tight mb-2 sm:mb-4">
            Complete sua experiência.
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#726B82]">
            Conectividade total e produtividade no seu dia a dia com a linha completa da Apple.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {ECOSYSTEM_PRODUCTS.map((item, index) => {
            const whatsappLink = buildWhatsAppLink(item.whatsappMessage, WHATSAPP_NUMBER);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-apple-md sm:hover:shadow-apple-lg transition-all duration-300 flex flex-col group"
              >
                {/* Visual Top Header with gradient & illustration */}
                <div className={`h-36 sm:h-52 bg-gradient-to-tr ${item.gradient} p-4 sm:p-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  
                  {/* Render tailored device visual based on category */}
                  <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 ease-out flex items-center justify-center">
                    {item.category === 'ipad' && (
                      <div className="w-28 sm:w-36 h-32 sm:h-44 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/30 p-1.5 sm:p-2 shadow-xl flex flex-col justify-between">
                        <div className="w-full h-full bg-[#161329] rounded-lg sm:rounded-xl flex items-center justify-center p-2">
                          <Tablet className="w-8 h-8 sm:w-12 sm:h-12 text-white/80" />
                        </div>
                      </div>
                    )}
                    {item.category === 'watch' && (
                      <div className="w-24 sm:w-32 h-28 sm:h-36 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/30 p-1.5 sm:p-2 shadow-xl flex items-center justify-center">
                        <div className="w-18 sm:w-24 h-20 sm:h-28 bg-[#161329] rounded-xl sm:rounded-2xl flex items-center justify-center">
                          <Watch className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF3C91]" />
                        </div>
                      </div>
                    )}
                    {item.category === 'acessorios' && (
                      <div className="w-28 sm:w-36 h-28 sm:h-36 bg-white/10 backdrop-blur-md rounded-full border border-white/30 p-1.5 sm:p-2 shadow-xl flex items-center justify-center">
                        <div className="w-18 sm:w-24 h-18 sm:h-24 bg-[#161329] rounded-full flex items-center justify-center">
                          <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9B32]" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#6624D8] uppercase tracking-wider block mb-0.5 sm:mb-1">
                      {item.startingPrice}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#201B32] mb-1 sm:mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FF3C91] mb-2 sm:mb-3">
                      “{item.tagline}”
                    </p>
                    <p className="text-xs sm:text-sm text-[#726B82] leading-relaxed mb-4 sm:mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F3EBFF] hover:bg-[#6624D8] active:bg-[#541cb8] text-[#6624D8] hover:text-white active:text-white font-bold py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-sm text-xs sm:text-sm group/btn active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-[#6624D8] group-hover/btn:text-white transition-colors" />
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
