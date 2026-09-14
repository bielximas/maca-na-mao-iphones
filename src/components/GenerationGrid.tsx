import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { IPHONE_GENERATIONS } from '../data/products';
import type { GenerationModel } from '../data/products';
import { DeviceMockup } from './DeviceMockup';

interface GenerationGridProps {
  selectedGeneration: GenerationModel;
  onSelectGeneration: (gen: GenerationModel) => void;
}

export const GenerationGrid: React.FC<GenerationGridProps> = ({
  selectedGeneration,
  onSelectGeneration,
}) => {
  return (
    <section id="geracoes" className="py-10 sm:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBFF] text-[#6624D8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Completo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#201B32] tracking-tight mb-2 sm:mb-4">
            Encontre sua geração.
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#726B82] leading-relaxed max-w-xl mx-auto">
            Toque em qualquer modelo para ver as versões padrão, Pro e Pro Max, cada uma com sua miniatura e valor.
          </p>

          {/* Quick-select horizontal pill strip for mobile thumbs */}
          <div className="flex sm:hidden items-center gap-2 overflow-x-auto pt-4 pb-2 px-1 scrollbar-none snap-x">
            {IPHONE_GENERATIONS.map((gen) => {
              const isSelected = selectedGeneration.id === gen.id;
              return (
                <button
                  key={`pill-${gen.id}`}
                  onClick={() => {
                    onSelectGeneration(gen);
                    setTimeout(() => {
                      const el = document.getElementById('opcoes-linha');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all snap-start ${
                    isSelected
                      ? 'bg-[#6624D8] text-white shadow-sm scale-105'
                      : 'bg-white text-[#201B32] border border-purple-100 hover:border-[#6624D8]'
                  }`}
                >
                  iPhone {gen.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Generations Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {IPHONE_GENERATIONS.map((gen, index) => {
            const isSelected = selectedGeneration.id === gen.id;

            return (
              <motion.div
                key={gen.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                onClick={() => {
                  onSelectGeneration(gen);
                  setTimeout(() => {
                    const el = document.getElementById('opcoes-linha');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 50);
                }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 cursor-pointer transition-all duration-300 group flex flex-col justify-between min-h-[250px] sm:min-h-[300px] ${
                  isSelected
                    ? 'ring-2 ring-[#6624D8] shadow-apple-md sm:shadow-apple-lg scale-[1.01] bg-white'
                    : 'bg-white/90 hover:bg-white hover:shadow-apple-sm active:scale-[0.98] border border-purple-100/70'
                }`}
              >
                {/* Background Subtle Gradient Glow */}
                <div
                  className={`absolute -right-10 -top-10 w-32 sm:w-44 h-32 sm:h-44 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity duration-300 ${
                    isSelected ? 'opacity-40' : 'group-hover:opacity-30'
                  }`}
                  style={{ backgroundColor: gen.colorHex }}
                />

                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1 sm:mb-2">
                    <span className="text-[9px] sm:text-[11px] font-extrabold tracking-widest text-[#726B82] uppercase">
                      APPLE
                    </span>
                    {gen.badge && (
                      <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FFEBF4] text-[#FF3C91] truncate max-w-[80px]">
                        {gen.badge}
                      </span>
                    )}
                    {isSelected && !gen.badge && (
                      <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-bold text-[#6624D8] bg-[#F3EBFF] px-1.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#6624D8]" />
                        <span>Ativo</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-2xl font-extrabold text-[#201B32] group-hover:text-[#6624D8] transition-colors leading-tight">
                    {gen.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#726B82] mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                    {gen.description}
                  </p>
                </div>

                {/* Center / Bottom Illustration Thumbnail: Tilted device mockup */}
                <div className="relative my-2 sm:my-3 flex items-center justify-center sm:justify-end h-24 sm:h-36 overflow-hidden">
                  <div className="w-20 sm:w-28 transform sm:translate-x-3 sm:translate-y-2 group-hover:scale-105 transition-transform duration-300 ease-out">
                    <DeviceMockup
                      modelId={gen.id}
                      name={gen.name}
                      type="standard"
                      colorHex={gen.colorHex}
                      accentHex={gen.accentHex}
                      imageSrc={gen.thumbnail}
                      tilted={true}
                    />
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 sm:pt-3 border-t border-purple-100/50 flex items-center justify-between">
                  <span
                    className={`text-[11px] sm:text-xs font-bold transition-colors inline-flex items-center gap-1 ${
                      isSelected ? 'text-[#6624D8]' : 'text-[#726B82] group-hover:text-[#6624D8]'
                    }`}
                  >
                    <span>Ver opções</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>

                  <span className="text-[10px] sm:text-[11px] text-[#726B82]/70 font-medium">
                    3 versões
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
