import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRUST_PILLARS } from '../data/products';

export const TrustSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#6624D8]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF3C91]" />,
    Sparkles: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF9B32]" />,
  };

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-white/80 border-y border-purple-100/60 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBFF] text-[#6624D8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Nossos Compromissos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#201B32] tracking-tight mb-2 sm:mb-4">
            Comprar com tranquilidade.
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#726B82]">
            Uma experiência transparente do primeiro contato até o pós-venda na Região dos Lagos.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {TRUST_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mobile-scroll-reveal bg-[#FFF7FB] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-purple-100/80 shadow-sm hover:shadow-apple-md transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 sm:mb-6 border border-purple-50 flex-shrink-0">
                {iconMap[pillar.icon]}
              </div>

              <h3 className="text-base sm:text-xl font-bold text-[#201B32] mb-1.5 sm:mb-3">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#726B82] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
