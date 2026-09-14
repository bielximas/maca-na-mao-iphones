import React from 'react';
import { MapPin, MessageCircle, Truck, Store, Compass } from 'lucide-react';
import { LOCATION_INFO, buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const LocationSection: React.FC = () => {
  const whatsappLocationUrl = buildWhatsAppLink(
    LOCATION_INFO.whatsappMessage,
    WHATSAPP_NUMBER
  );

  const nearbyCities = [
    'Saquarema',
    'Araruama',
    'Cabo Frio',
    'Búzios',
    'São Pedro da Aldeia',
    'Iguaba Grande',
    'Arraial do Cabo',
    'Maricá',
  ];

  return (
    <section id="regiao" className="py-12 sm:py-20 md:py-28 bg-[#161329] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#6624D8]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#211D3B]/85 border border-[#2E2950] rounded-2xl sm:rounded-3xl md:rounded-4xl p-5 sm:p-10 lg:p-16 backdrop-blur-md shadow-apple-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Text and Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge Visual Highlight */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-[#6624D8] to-[#FF3C91] text-white text-[11px] sm:text-sm font-extrabold tracking-wider shadow-md mb-4 sm:mb-6">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF9B32]" />
                <span>{LOCATION_INFO.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-tight">
                {LOCATION_INFO.title}
              </h2>

              <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
                {LOCATION_INFO.description}
              </p>

              {/* Delivery & Pickup Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
                <div className="flex items-start gap-3 bg-[#161329]/70 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E2950]">
                  <div className="p-2 rounded-lg sm:rounded-xl bg-[#6624D8]/20 text-[#FF9B32] flex-shrink-0">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Possibilidade de Entrega</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Avaliamos a entrega segura na sua localidade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#161329]/70 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#2E2950]">
                  <div className="p-2 rounded-lg sm:rounded-xl bg-[#FF3C91]/20 text-[#FF3C91] flex-shrink-0">
                    <Store className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Opção de Retirada</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Combine a retirada com nossa equipe.</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#6624D8] hover:bg-[#541cb8] active:bg-[#47159c] text-white font-bold text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-apple-md transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{LOCATION_INFO.buttonText}</span>
              </a>
            </div>

            {/* Right Column: Visual Regional Map & Cities tags */}
            <div className="lg:col-span-5 bg-[#161329] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#2E2950] flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#6624D8] via-[#FF3C91] to-[#FF9B32] flex items-center justify-center text-white mb-4 sm:mb-5 shadow-lg">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                Atendimento Região dos Lagos
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-4 sm:mb-6">
                Consulte disponibilidade para sua cidade com rapidez pelo WhatsApp
              </p>

              {/* Cities Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                {nearbyCities.map((city) => (
                  <span
                    key={city}
                    className={`text-[11px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border transition-colors ${
                      city === 'Saquarema'
                        ? 'bg-[#6624D8] text-white font-bold border-[#6624D8] shadow-sm'
                        : 'bg-[#211D3B] text-slate-300 border-[#2E2950]'
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
