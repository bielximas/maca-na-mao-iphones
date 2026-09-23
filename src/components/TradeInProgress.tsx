import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, DollarSign, CreditCard, MessageCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { TRADE_IN_DATA, buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const TradeInProgress: React.FC = () => {
  const tradeInWhatsAppUrl = buildWhatsAppLink(
    TRADE_IN_DATA.whatsappMessage,
    WHATSAPP_NUMBER
  );

  const stepIcons = [Camera, DollarSign, CreditCard];

  return (
    <section id="troca" className="py-12 sm:py-20 md:py-28 relative bg-[#FFF7FB] overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-[#FF3C91]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-52 sm:w-80 h-52 sm:h-80 bg-[#6624D8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="bg-gradient-to-br from-white via-[#FFF7FB] to-[#F3EBFF] border border-purple-100 rounded-2xl sm:rounded-3xl md:rounded-4xl p-5 sm:p-10 lg:p-16 shadow-apple-sm sm:shadow-apple-md relative overflow-hidden">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEBF4] text-[#FF3C91] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Troca Inteligente</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#201B32] tracking-tight mb-2 sm:mb-4">
              {TRADE_IN_DATA.title}
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-[#726B82] leading-relaxed">
              {TRADE_IN_DATA.subtitle}
            </p>
          </div>

          {/* 3 Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {TRADE_IN_DATA.steps.map((step, index) => {
              const IconComponent = stepIcons[index];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mobile-scroll-reveal bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:p-8 border border-purple-100/80 shadow-sm hover:shadow-apple-md transition-all duration-300 flex flex-col relative group"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#6624D8] to-[#FF3C91] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-purple-200">
                      0{step.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-[#201B32] mb-1.5 sm:mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#726B82] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA & Disclaimer */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <a
              href={tradeInWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF3C91] via-[#6624D8] to-[#0870B4] text-white font-bold text-sm sm:text-base px-6 py-3.5 sm:px-9 sm:py-4 rounded-xl sm:rounded-2xl shadow-apple-md active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{TRADE_IN_DATA.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-5 sm:mt-8 flex items-start gap-2 sm:gap-2.5 text-left bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-purple-100 text-[10px] sm:text-[11px] text-[#726B82] leading-relaxed">
              <AlertCircle className="w-4 h-4 text-[#FF9B32] flex-shrink-0 mt-0.5" />
              <span>{TRADE_IN_DATA.disclaimer}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
