import { ArrowUpRight, ChartNoAxesCombined, Mic, Target, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Mic,
    title: 'Anote do seu jeito',
    description:
      'Registre seus gastos manualmente ou por voz, de forma prática, sempre que precisar.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Entenda para onde vai',
    description:
      'Organize despesas como saúde, cuidados pessoais e transporte e veja no fim do mês quanto gastou em cada área.',
  },
  {
    icon: Target,
    title: 'Planeje seus objetivos',
    description:
      'Crie metas para comprar um celular novo, trocar de carro e realizar muitos outros planos.',
  },
];

export function XimescashSection() {
  return (
    <section
      id="ximescash"
      className="relative overflow-hidden border-y border-[#D9EFDF] bg-gradient-to-br from-[#F2FBF4] via-white to-[#E9F7ED] py-14 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#65C982]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E4F5E9] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#218344]">
            <Wallet className="h-4 w-4" />
            <span>Conheça o Ximescash</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#201B32] sm:text-4xl md:text-5xl">
            Seu dinheiro, com mais <span className="text-[#218344]">controle.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#726B82] sm:text-lg">
            Maçã na Mão começou através de uma meta financeira e com mais
            controles de gastos pessoais. Conseguimos visualizar onde
            mensalmente o dinheiro estava sendo mal gasto e que poderia ser
            remanejado. Use, faz total diferença na sua vida financeira
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 sm:gap-6">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-[#D9EFDF] bg-white/90 p-5 shadow-sm sm:rounded-3xl sm:p-7"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF8EE] text-[#218344]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#201B32] sm:text-xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#726B82]">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:mt-10">
          <p className="max-w-xl text-sm leading-relaxed text-[#726B82] sm:text-base">
            No fechamento do mês, veja o resumo dos seus gastos e identifique
            oportunidades para economizar e chegar mais perto das suas metas.
          </p>
          <a
            href="https://ximescash.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#218344] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#176B36] hover:shadow-lg active:scale-95 sm:rounded-2xl sm:px-8 sm:text-base"
          >
            <span>Comece a cuidar do seu dinheiro</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
