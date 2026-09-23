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
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const selectGeneration = (gen: GenerationModel) => {
    onSelectGeneration(gen);

    setTimeout(() => {
      document.getElementById('opcoes-linha')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  const generationImage = (thumbnail: string) => {
    if (!thumbnail) return '';

    return thumbnail.startsWith('/')
      ? assetUrl(thumbnail.slice(1))
      : thumbnail;
  };

  return (
    <section id="geracoes" className="relative py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#F3EBFF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6624D8] sm:mb-3 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Catálogo Completo</span>
          </div>

          <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-[#201B32] sm:mb-4 sm:text-4xl md:text-5xl">
            Encontre sua geração.
          </h2>

          <p className="mx-auto max-w-xl text-xs leading-relaxed text-[#726B82] sm:text-base md:text-lg">
            Toque em qualquer modelo para ver as versões padrão, Pro e Pro Max, cada uma com sua miniatura e valor.
          </p>

          <div className="scrollbar-none flex snap-x items-center gap-2 overflow-x-auto px-1 pb-2 pt-4 sm:hidden">
            {IPHONE_GENERATIONS.map((gen) => {
              const isSelected = selectedGeneration.id === gen.id;

              return (
                <button
                  key={`pill-${gen.id}`}
                  onClick={() => selectGeneration(gen)}
                  className={`flex-shrink-0 snap-start rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    isSelected
                      ? 'scale-105 bg-[#6624D8] text-white shadow-sm'
                      : 'border border-purple-100 bg-white text-[#201B32] hover:border-[#6624D8]'
                  }`}
                >
                  iPhone {gen.id}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {IPHONE_GENERATIONS.map((gen, index) => {
            const isSelected = selectedGeneration.id === gen.id;

            return (
              <motion.div
                key={gen.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => selectGeneration(gen)}
                className={`mobile-scroll-reveal group relative flex min-h-[250px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-3.5 transition-all duration-300 sm:min-h-[300px] sm:rounded-3xl sm:p-5 lg:p-6 ${
                  isSelected
                    ? 'scale-[1.01] bg-white shadow-apple-md ring-2 ring-[#6624D8] sm:shadow-apple-lg'
                    : 'border border-purple-100/70 bg-white/90 hover:bg-white hover:shadow-apple-sm active:scale-[0.98]'
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[${gen.colorHex}] opacity-20 blur-2xl transition-opacity duration-300 sm:h-44 sm:w-44 ${
                    isSelected ? 'opacity-40' : 'group-hover:opacity-30'
                  }`}
                  style={{ backgroundColor: gen.colorHex }}
                />

                <div>
                  <div className="mb-1 flex items-center justify-between gap-1 sm:mb-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#726B82] sm:text-[11px]">
                      APPLE
                    </span>
                    {gen.badge && (
                      <span className="max-w-[80px] truncate rounded-full bg-[#FFEBF4] px-1.5 py-0.5 text-[9px] font-bold text-[#FF3C91] sm:text-[10px]">
                        {gen.badge}
                      </span>
                    )}
                    {isSelected && !gen.badge && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-[#F3EBFF] px-1.5 py-0.5 text-[9px] font-bold text-[#6624D8] sm:text-[11px]">
                        <CheckCircle2 className="h-2.5 w-2.5" />
                        <span>Ativo</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold leading-tight text-[#201B32] transition-colors group-hover:text-[#6624D8] sm:text-2xl">
                    {gen.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#726B82] sm:mt-2 sm:text-xs">
                    {gen.description}
                  </p>
                </div>

                <div className="relative my-2 flex h-24 items-center justify-center overflow-hidden sm:my-3 sm:h-36 sm:justify-end">
                  <div className="h-full w-20 transition-transform duration-300 ease-out group-hover:scale-105 sm:w-28 sm:translate-x-3">
                    <DeviceMockup
                      modelId={gen.id}
                      name={gen.name}
                      type="standard"
                      colorHex={gen.colorHex}
                      accentHex={gen.accentHex}
                      imageSrc={generationImage(gen.thumbnail)}
                      tilted
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-purple-100/50 pt-2 sm:pt-3">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold transition-colors sm:text-xs ${
                      isSelected ? 'text-[#6624D8]' : 'text-[#726B82] group-hover:text-[#6624D8]'
                    }`}
                  >
                    <span>Ver opções</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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