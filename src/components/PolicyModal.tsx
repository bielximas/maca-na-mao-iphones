import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'troca' | 'termos' | null;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const isTroca = type === 'troca';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="min-h-full flex items-center justify-center p-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 text-left shadow-2xl relative z-10 border border-purple-100"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F3EBFF] text-[#6624D8] flex items-center justify-center">
                  {isTroca ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-bold text-[#201B32]">
                  {isTroca ? 'Política de Troca & Avaliação' : 'Termos de Atendimento'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-[#201B32] rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-sm text-[#726B82] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {isTroca ? (
                <>
                  <p>
                    A <strong>Maca na Mão iPhones</strong> oferece um programa facilitado de troca para clientes de Saquarema e toda a Região dos Lagos que desejam atualizar seu aparelho Apple.
                  </p>
                  <h4 className="font-bold text-[#201B32] text-sm mt-3">Critérios de Avaliação do Aparelho:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Modelo, capacidade de armazenamento e cor;</li>
                    <li>Condição estética externa (ausência de trincados, riscos profundos ou amassados);</li>
                    <li>Saúde percentual da bateria e histórico de trocas de peças;</li>
                    <li>Funcionamento integral do Face ID / Touch ID, câmeras, autofoco, alto-falantes e microfones;</li>
                    <li>Aparelhos sem bloqueio de iCloud, operadora ou pendências financeiras.</li>
                  </ul>
                  <p className="text-xs">
                    A análise prévia realizada via WhatsApp é estimativa. O valor final de abatimento é confirmado mediante conferência física do aparelho pela nossa equipe.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bem-vindo aos Termos de Atendimento da <strong>Maca na Mão iPhones</strong>. Nossa atuação é focada em oferecer transparência e segurança na escolha de aparelhos seminovos selecionados e lacrados.
                  </p>
                  <h4 className="font-bold text-[#201B32] text-sm mt-3">Condições Gerais:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Todos os valores exibidos neste site são demonstrativos e servem como referência de mercado para modelos disponíveis;</li>
                    <li>A disponibilidade de cores, capacidades (64GB, 128GB, 256GB, 512GB, 1TB) e estado deve ser confirmada diretamente no WhatsApp;</li>
                    <li>Opções de parcelamento em até 12x no cartão de crédito possuem simulação de taxas conforme a operadora;</li>
                    <li>A entrega ou retirada em Saquarema e cidades vizinhas é combinada individualmente respeitando a segurança do cliente e da loja.</li>
                  </ul>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-purple-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#6624D8] hover:bg-[#541cb8] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
