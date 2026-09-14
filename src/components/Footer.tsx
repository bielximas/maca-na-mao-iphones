import React, { useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { STORE_NAME, STORE_CITY, STORE_STATE, INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_NUMBER, buildWhatsAppLink } from '../data/products';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'troca' | 'termos' | null>(null);

  const whatsappFooterUrl = buildWhatsAppLink(
    "Olá! Acessei o site da Maca na Mão e gostaria de mais informações.",
    WHATSAPP_NUMBER
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161329] text-white pt-12 sm:pt-16 pb-24 md:pb-12 border-t border-[#2E2950]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2950]">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6624D8] via-[#FF3C91] to-[#FF9B32] p-0.5">
                <div className="w-full h-full bg-[#161329] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-white text-base">M</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                  {STORE_NAME}
                </h3>
                <span className="text-xs text-[#FF9B32] font-semibold">
                  {STORE_CITY}, {STORE_STATE}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mb-6">
              Sua vitrine de iPhones selecionados e ecossistema Apple em Saquarema e toda a Região dos Lagos. Atendimento humano, troca facilitada e segurança em cada detalhe.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#211D3B] hover:bg-[#6624D8] text-white border border-[#2E2950] flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#211D3B] hover:bg-[#FF3C91] text-white border border-[#2E2950] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Catálogo em Destaque
            </h4>
            <p className="text-xs font-semibold text-[#FF3C91] mb-3">
              iPhones · iPad · Apple Watch · Acessórios
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#geracoes" className="hover:text-white transition-colors">
                  Linha iPhones (11 ao 18)
                </a>
              </li>
              <li>
                <a href="#troca" className="hover:text-white transition-colors">
                  Avaliação de Troca em até 12x
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors">
                  iPads para Estudo e Trabalho
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-white transition-colors">
                  Apple Watch e Saúde
                </a>
              </li>
              <li>
                <a href="#regiao" className="hover:text-white transition-colors">
                  Atendimento Saquarema e Lagos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Transparência & Contato
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => setModalType('troca')}
                  className="hover:text-[#FF9B32] transition-colors text-left"
                >
                  Política de troca
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType('termos')}
                  className="hover:text-[#FF9B32] transition-colors text-left"
                >
                  Termos de atendimento
                </button>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF3C91] transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram: {INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappFooterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6624D8] transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp de Vendas</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {STORE_NAME}. Todos os direitos reservados. {STORE_CITY}, {STORE_STATE} — Brasil.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-[#211D3B] hover:bg-[#6624D8] px-3.5 py-1.5 rounded-full border border-[#2E2950] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Policy and Terms Modal */}
      <PolicyModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </footer>
  );
};
