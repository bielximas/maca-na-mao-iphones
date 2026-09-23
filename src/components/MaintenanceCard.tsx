import React from 'react';
import { MessageCircle, Wrench } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const MaintenanceCard: React.FC = () => {
  const technicianUrl = buildWhatsAppLink(
    'Olá! Gostaria de falar com o técnico sobre a manutenção do meu iPhone.',
    WHATSAPP_NUMBER,
  );

  return (
    <section id="manutencao" className="px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate min-h-[390px] overflow-hidden rounded-3xl border border-[#2E2950] bg-[#161329] shadow-2xl sm:min-h-[430px] md:min-h-[390px]">
          <img
            src={`${import.meta.env.BASE_URL}images/escritorio2.png`}
            alt="Técnico realizando manutenção em um iPhone"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161329]/80 via-[#161329]/45 to-[#161329]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161329]/55 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[390px] max-w-xl flex-col justify-center p-6 sm:min-h-[430px] sm:p-10 md:min-h-[390px] md:p-14">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
              <Wrench className="h-4 w-4 text-[#FFB35C]" />
              <span>Manutenção de iPhone</span>
            </div>
            <h2 className="max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Cliente nosso tem desconto em serviços de manutenção do seu iPhone.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Conte com nosso técnico para cuidar do seu aparelho com atenção e segurança.
            </p>
            <a
              href={technicianUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#6624D8] shadow-lg transition-all hover:bg-[#F3EBFF] active:scale-[0.98] sm:w-fit"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar com o técnico</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};