import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  CreditCard,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
export const Hero: React.FC = () => {
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const scrollToGenerations = () => {
    document.getElementById('geracoes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    document.getElementById('calculadora-troca')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMaintenance = () => {
    document.getElementById('manutencao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-12 sm:pt-10 sm:pb-20 md:pt-16 md:pb-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-gradient-to-tr from-[#6624D8]/10 via-[#FF3C91]/10 to-[#FF9B32]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-ambient" />

      <div className="flex flex-col gap-8 lg:gap-12 items-center">
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex flex-col items-start text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mobile-hero-motion inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#6624D8]/20 shadow-sm text-[11px] sm:text-xs font-semibold text-[#6624D8] mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3C91] animate-ping" />
            <span>Saquarema & Região dos Lagos · Loja Oficial</span>
          </motion.div>

          <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-6">
            <motion.img
              src={assetUrl('images/18-.png')}
              alt="iPhone 18 na cor roxa"
              initial={{ opacity: 0, scale: 0.85, x: -15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mobile-hero-motion w-16 h-20 sm:w-20 sm:h-24 lg:w-28 lg:h-32 object-contain flex-shrink-0"
            />

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
              className="mobile-hero-motion text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#201B32] leading-[1.12] sm:leading-[1.08]"
            >
              Seu estilo <br />
              <span className="text-gradient-purple">Sua escolha</span> <br />
              <span className="text-2xl sm:text-3xl lg:text-5xl text-[#726B82]">
                Maçã na mão Iphones
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mobile-hero-motion text-sm sm:text-lg text-[#726B82] max-w-xl font-normal leading-relaxed mb-6 sm:mb-8"
          >
            iPhones selecionados, atendimento de verdade e aquele cuidado que você espera ao comprar seu próximo aparelho.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mobile-hero-motion flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToGenerations}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6624D8] hover:bg-[#541cb8] active:bg-[#47159c] text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-apple-md active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              <span>Escolher meu iPhone</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={scrollToCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3EBFF] active:bg-[#F3EBFF] text-[#201B32] hover:text-[#6624D8] border border-[#6624D8]/20 font-bold px-5 py-3 sm:px-7 sm:py-4 rounded-2xl shadow-sm active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#6624D8]" />
              <span>Avaliar meu iPhone</span>
            </button>

            <button
              onClick={scrollToMaintenance}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFF7FB] hover:bg-[#FFEAF4] active:bg-[#FFEAF4] text-[#6624D8] border border-[#FF3C91]/25 font-bold px-5 py-3 sm:px-7 sm:py-4 rounded-2xl shadow-sm active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3C91]" />
              <span>Manutenção de iPhone</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mobile-hero-motion grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-purple-100/80 w-full max-w-lg text-[10px] sm:text-xs"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2 text-[#726B82] bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border border-purple-50 sm:border-0">
              <ShieldCheck className="w-4 h-4 text-[#6624D8] flex-shrink-0" />
              <span className="font-semibold sm:font-medium">Com Garantia</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2 text-[#726B82] bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border border-purple-50 sm:border-0">
              <CreditCard className="w-4 h-4 text-[#FF3C91] flex-shrink-0" />
              <span className="font-semibold sm:font-medium">Até 12x Cartão</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-2 text-[#726B82] bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl border border-purple-50 sm:border-0">
              <MapPin className="w-4 h-4 text-[#FF9B32] flex-shrink-0" />
              <span className="font-semibold sm:font-medium">Entrega ou Retirada</span>
            </div>
          </motion.div>
        </div>

        <div className="relative w-full bg-white overflow-hidden">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full flex items-center justify-center bg-white"
          >
            <div className="relative w-full flex items-center justify-center bg-white">
              <img
                src={assetUrl('images/hero-iphone.gif')}
                alt="iPhone em destaque"
                className="block w-full h-[360px] sm:h-[500px] md:h-[620px] lg:h-[720px] object-cover object-center select-none"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-3 sm:right-8 md:right-14 top-5 sm:top-8 md:top-12 z-20 whitespace-nowrap"
          >
            <div className="relative rounded-full px-4 py-2 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-xl border border-[#6624D8]/20 shadow-[0_12px_40px_rgba(102,36,216,0.22)]">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6624D8]/10 via-[#FF3C91]/10 to-[#FF9B32]/10 blur-md" />
              <span className="relative text-sm sm:text-lg font-extrabold tracking-[-0.04em] text-gradient-purple">Uma nova Era</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 bottom-6 sm:bottom-10 -translate-x-1/2 z-20 whitespace-nowrap"
          >
            <div className="relative rounded-full px-4 py-2 sm:px-6 sm:py-3 bg-[#161329]/90 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgba(22,19,41,0.3)]">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6624D8]/20 via-[#FF3C91]/15 to-[#0870B4]/20 blur-md" />
              <span className="relative text-sm sm:text-lg font-extrabold tracking-[-0.04em] text-white">iPhone DUO</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};