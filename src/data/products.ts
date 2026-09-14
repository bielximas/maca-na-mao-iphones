/**
 * MACA NA MÃO IPHONES — CATÁLOGO DE PRODUTOS E CONFIGURAÇÃO
 * 
 * Saquarema, RJ — Atendimento para toda a Região dos Lagos
 * 
 * COMO ALTERAR O NÚMERO DO WHATSAPP:
 * Altere a constante WHATSAPP_NUMBER abaixo inserindo o DDI (55) + DDD + número (apenas dígitos).
 * Exemplo: const WHATSAPP_NUMBER = "5522998877665";
 * 
 * COMO ALTERAR PREÇOS OU IMAGENS:
 * Cada produto possui os campos `price` (número para cálculos) e `thumbnail` (caminho da imagem em /public/images).
 * Para trocar imagens, basta substituir os arquivos na pasta /public/images/ com os mesmos nomes ou alterar os caminhos aqui.
 */

export const WHATSAPP_NUMBER = "5521999999999";
export const STORE_NAME = "Maca na Mão iPhones";
export const STORE_CITY = "Saquarema";
export const STORE_STATE = "RJ";
export const INSTAGRAM_HANDLE = "@macanamaoiphones";
export const INSTAGRAM_URL = "https://instagram.com/macanamaoiphones";

export interface VersionOption {
  id: string;
  name: string;
  type: 'standard' | 'pro' | 'pro-max';
  price: number;
  formattedPrice: string;
  description: string;
  screenSize: string;
  camera: string;
  chip: string;
  thumbnail: string;
  inStock: boolean;
}

export interface GenerationModel {
  id: number;
  name: string;
  generation: string;
  colorName: string;
  colorHex: string;
  accentHex: string;
  cardBgLight: string;
  cardBgDark: string;
  description: string;
  thumbnail: string;
  badge?: string;
  versions: [VersionOption, VersionOption, VersionOption]; // Exatamente 3 versões: Padrão, Pro, Pro Max
}

export interface EcosystemProduct {
  id: string;
  name: string;
  category: 'ipad' | 'watch' | 'acessorios';
  tagline: string;
  description: string;
  startingPrice: string;
  gradient: string;
  thumbnail: string;
  whatsappMessage: string;
}

export const IPHONE_GENERATIONS: GenerationModel[] = [
  {
    id: 11,
    name: "iPhone 11",
    generation: "Geração 11",
    colorName: "Roxo Suave",
    colorHex: "#A480F2",
    accentHex: "#6624D8",
    cardBgLight: "from-[#F5EEFF] to-[#EDE0FF]",
    cardBgDark: "from-[#22183D] to-[#171229]",
    description: "Câmera dupla de 12 MP com Modo Noite e chip A13 Bionic confiável para o dia a dia.",
    thumbnail: "/images/iphone-11.webp",
    versions: [
      {
        id: "iphone-11-standard",
        name: "iPhone 11",
        type: "standard",
        price: 2499,
        formattedPrice: "R$ 2.499",
        description: "Tela Liquid Retina HD de 6,1 polegadas com sistema de câmera dupla versátil.",
        screenSize: "6,1 pol.",
        camera: "Dupla 12 MP (Ultra-angular e Grande-angular)",
        chip: "A13 Bionic",
        thumbnail: "/images/iphone-11.webp",
        inStock: true
      },
      {
        id: "iphone-11-pro",
        name: "iPhone 11 Pro",
        type: "pro",
        price: 2999,
        formattedPrice: "R$ 2.999",
        description: "Estrutura premium em aço inoxidável, tela Super Retina XDR e câmera tripla.",
        screenSize: "5,8 pol. OLED",
        camera: "Tripla 12 MP com Teleobjetiva",
        chip: "A13 Bionic",
        thumbnail: "/images/iphone-11.webp",
        inStock: true
      },
      {
        id: "iphone-11-pro-max",
        name: "iPhone 11 Pro Max",
        type: "pro-max",
        price: 3499,
        formattedPrice: "R$ 3.499",
        description: "Tela imersiva de 6,5 polegadas, bateria de longa duração e acabamento fosco elegante.",
        screenSize: "6,5 pol. OLED",
        camera: "Tripla 12 MP profissional com zoom óptico",
        chip: "A13 Bionic",
        thumbnail: "/images/iphone-11.webp",
        inStock: true
      }
    ]
  },
  {
    id: 12,
    name: "iPhone 12",
    generation: "Geração 12",
    colorName: "Azul Oceano",
    colorHex: "#0870B4",
    accentHex: "#0D47A1",
    cardBgLight: "from-[#E8F4FD] to-[#D5EBFB]",
    cardBgDark: "from-[#11243A] to-[#14152A]",
    description: "Design renovado com laterais planas, Ceramic Shield e conexão 5G ultrarrápida.",
    thumbnail: "/images/iphone-12.webp",
    versions: [
      {
        id: "iphone-12-standard",
        name: "iPhone 12",
        type: "standard",
        price: 2799,
        formattedPrice: "R$ 2.799",
        description: "Tela Super Retina XDR OLED com cores vivas e suporte ao MagSafe.",
        screenSize: "6,1 pol. OLED",
        camera: "Dupla 12 MP avançada com gravação HDR Dolby Vision",
        chip: "A14 Bionic",
        thumbnail: "/images/iphone-12.webp",
        inStock: true
      },
      {
        id: "iphone-12-pro",
        name: "iPhone 12 Pro",
        type: "pro",
        price: 3299,
        formattedPrice: "R$ 3.299",
        description: "Câmera tripla com scanner LiDAR para foco rápido no escuro e fotos noturnas.",
        screenSize: "6,1 pol. OLED",
        camera: "Tripla 12 MP + Sensor LiDAR",
        chip: "A14 Bionic",
        thumbnail: "/images/iphone-12.webp",
        inStock: true
      },
      {
        id: "iphone-12-pro-max",
        name: "iPhone 12 Pro Max",
        type: "pro-max",
        price: 3799,
        formattedPrice: "R$ 3.799",
        description: "Tela gigante de 6,7 polegadas e sensor de câmera ampliado com estabilização mecânica.",
        screenSize: "6,7 pol. OLED",
        camera: "Tripla 12 MP com Sensor-shift OIS + LiDAR",
        chip: "A14 Bionic",
        thumbnail: "/images/iphone-12.webp",
        inStock: true
      }
    ]
  },
  {
    id: 13,
    name: "iPhone 13",
    generation: "Geração 13",
    colorName: "Rosa Elegance",
    colorHex: "#FF3C91",
    accentHex: "#C2185B",
    cardBgLight: "from-[#FFF0F6] to-[#FFE0EE]",
    cardBgDark: "from-[#30162A] to-[#161329]",
    description: "Notch reduzido, Modo Cinema para vídeos cinematográficos e bateria aprimorada.",
    thumbnail: "/images/iphone-13.webp",
    versions: [
      {
        id: "iphone-13-standard",
        name: "iPhone 13",
        type: "standard",
        price: 3299,
        formattedPrice: "R$ 3.299",
        description: "Câmeras na diagonal com sensor maior que capta 47% mais luz para fotos nítidas.",
        screenSize: "6,1 pol. OLED",
        camera: "Dupla 12 MP com Modo Cinema 1080p a 30 fps",
        chip: "A15 Bionic",
        thumbnail: "/images/iphone-13.webp",
        inStock: true
      },
      {
        id: "iphone-13-pro",
        name: "iPhone 13 Pro",
        type: "pro",
        price: 3999,
        formattedPrice: "R$ 3.999",
        description: "Tela ProMotion fluida de 120 Hz e macrofotografia detalhada a 2 cm de distância.",
        screenSize: "6,1 pol. ProMotion 120Hz",
        camera: "Tripla 12 MP com Fotografia Macro + LiDAR",
        chip: "A15 Bionic (GPU 5 núcleos)",
        thumbnail: "/images/iphone-13.webp",
        inStock: true
      },
      {
        id: "iphone-13-pro-max",
        name: "iPhone 13 Pro Max",
        type: "pro-max",
        price: 4499,
        formattedPrice: "R$ 4.499",
        description: "Autonomia de bateria recorde, tela de 6,7 polegadas 120 Hz e zoom óptico de 3x.",
        screenSize: "6,7 pol. ProMotion 120Hz",
        camera: "Tripla 12 MP Pro com zoom óptico 3x + Macro",
        chip: "A15 Bionic (GPU 5 núcleos)",
        thumbnail: "/images/iphone-13.webp",
        inStock: true
      }
    ]
  },
  {
    id: 14,
    name: "iPhone 14",
    generation: "Geração 14",
    colorName: "Lilás Deep",
    colorHex: "#8A4DFF",
    accentHex: "#5E25C7",
    cardBgLight: "from-[#F6F2FF] to-[#EBE2FF]",
    cardBgDark: "from-[#20173B] to-[#151229]",
    description: "Detecção de Acidente, Modo Ação para vídeos estabilizados e câmera frontal autofoco.",
    thumbnail: "/images/iphone-14.webp",
    versions: [
      {
        id: "iphone-14-standard",
        name: "iPhone 14",
        type: "standard",
        price: 3999,
        formattedPrice: "R$ 3.999",
        description: "Processamento de imagem Photonic Engine com cores incríveis mesmo com pouca luz.",
        screenSize: "6,1 pol. OLED",
        camera: "Dupla 12 MP com Photonic Engine e Modo Ação",
        chip: "A15 Bionic aperfeiçoado",
        thumbnail: "/images/iphone-14.webp",
        inStock: true
      },
      {
        id: "iphone-14-pro",
        name: "iPhone 14 Pro",
        type: "pro",
        price: 4799,
        formattedPrice: "R$ 4.799",
        description: "Estreia da Dynamic Island mágica, Câmera Principal de 48 MP e Tela Sempre Ativa.",
        screenSize: "6,1 pol. ProMotion + Dynamic Island",
        camera: "Principal 48 MP + Ultra-angular + Teleobjetiva",
        chip: "A16 Bionic",
        thumbnail: "/images/iphone-14.webp",
        inStock: true
      },
      {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        type: "pro-max",
        price: 5299,
        formattedPrice: "R$ 5.299",
        description: "O modelo mais desejado da linha 14: tela 6,7 polegadas, Dynamic Island e 48 MP.",
        screenSize: "6,7 pol. ProMotion + Dynamic Island",
        camera: "Principal 48 MP com sensor quad-pixel Pro",
        chip: "A16 Bionic",
        thumbnail: "/images/iphone-14.webp",
        inStock: true
      }
    ]
  },
  {
    id: 15,
    name: "iPhone 15",
    generation: "Geração 15",
    colorName: "Laranja Solar",
    colorHex: "#FF9B32",
    accentHex: "#E65100",
    cardBgLight: "from-[#FFF6EC] to-[#FFE8D1]",
    cardBgDark: "from-[#321E14] to-[#181328]",
    description: "Entrada universal USB-C, Dynamic Island em todos os modelos e câmera de 48 MP.",
    thumbnail: "/images/iphone-15.webp",
    badge: "Alta Procura",
    versions: [
      {
        id: "iphone-15-standard",
        name: "iPhone 15",
        type: "standard",
        price: 4499,
        formattedPrice: "R$ 4.499",
        description: "Traseira em vidro com infusão de cor, Dynamic Island integrada e conexão USB-C.",
        screenSize: "6,1 pol. OLED com Dynamic Island",
        camera: "Principal 48 MP + Ultra-angular 12 MP (Zoom 2x óptico)",
        chip: "A16 Bionic",
        thumbnail: "/images/iphone-15.webp",
        inStock: true
      },
      {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        type: "pro",
        price: 5499,
        formattedPrice: "R$ 5.499",
        description: "Estrutura leve em Titânio aeroespacial, Botão de Ação e chip A17 Pro para jogos de console.",
        screenSize: "6,1 pol. Titânio ProMotion",
        camera: "Pro 48 MP com múltiplos pontos focais + USB 3",
        chip: "A17 Pro com Ray Tracing",
        thumbnail: "/images/iphone-15.webp",
        inStock: true
      },
      {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        type: "pro-max",
        price: 6099,
        formattedPrice: "R$ 6.099",
        description: "Lente teleobjetiva tetraprisma com zoom óptico de 5x e estrutura resistente em Titânio.",
        screenSize: "6,7 pol. Titânio ProMotion",
        camera: "Pro 48 MP com Zoom Óptico de 5x (120 mm)",
        chip: "A17 Pro com Ray Tracing",
        thumbnail: "/images/iphone-15.webp",
        inStock: true
      }
    ]
  },
  {
    id: 16,
    name: "iPhone 16",
    generation: "Geração 16",
    colorName: "Roxo Puro",
    colorHex: "#6624D8",
    accentHex: "#4512A0",
    cardBgLight: "from-[#F3EBFF] to-[#E4D4FF]",
    cardBgDark: "from-[#241344] to-[#151228]",
    description: "Criado para a inteligência avançada, botão de Controle da Câmera e chip A18 ultraveloz.",
    thumbnail: "/images/iphone-16.webp",
    badge: "Destaque",
    versions: [
      {
        id: "iphone-16-standard",
        name: "iPhone 16",
        type: "standard",
        price: 5499,
        formattedPrice: "R$ 5.499",
        description: "Novo Controle da Câmera háptico, botão de Ação e gravação de Áudio Espacial imersivo.",
        screenSize: "6,1 pol. OLED com Controle da Câmera",
        camera: "Dupla vertical 48 MP Fusion + Ultra-angular Macro",
        chip: "A18",
        thumbnail: "/images/iphone-16.webp",
        inStock: true
      },
      {
        id: "iphone-16-pro",
        name: "iPhone 16 Pro",
        type: "pro",
        price: 6499,
        formattedPrice: "R$ 6.499",
        description: "Tela maior de 6,3 pol. com bordas ultrafinas, gravação 4K Dolby Vision a 120 fps e 4 microfones de estúdio.",
        screenSize: "6,3 pol. Titânio ProMotion",
        camera: "Câmera Fusion 48 MP + Ultra 48 MP + Tele 5x",
        chip: "A18 Pro",
        thumbnail: "/images/iphone-16.webp",
        inStock: true
      },
      {
        id: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        type: "pro-max",
        price: 7199,
        formattedPrice: "R$ 7.199",
        description: "O ápice da tecnologia Apple: tela expansiva de 6,9 polegadas e a melhor autonomia de bateria já vista.",
        screenSize: "6,9 pol. Titânio ProMotion",
        camera: "Sistema Pro completo 48 MP + Zoom 5x tetraprisma",
        chip: "A18 Pro",
        thumbnail: "/images/iphone-16.webp",
        inStock: true
      }
    ]
  },
  {
    id: 17,
    name: "iPhone 17",
    generation: "Geração 17",
    colorName: "Magenta Neon",
    colorHex: "#FF1493",
    accentHex: "#990055",
    cardBgLight: "from-[#FFF0F7] to-[#FED6EC]",
    cardBgDark: "from-[#35122B] to-[#151128]",
    description: "Próxima fronteira em design fino, tela com revestimento anti-reflexo cerâmico e IA contextual.",
    thumbnail: "/images/iphone-17.webp",
    badge: "Nova Geração",
    versions: [
      {
        id: "iphone-17-standard",
        name: "iPhone 17",
        type: "standard",
        price: 6499,
        formattedPrice: "R$ 6.499",
        description: "Tela ProMotion 120 Hz para toda a linha, corpo ultrafino e processamento neural ampliado.",
        screenSize: "6,27 pol. ProMotion 120Hz",
        camera: "Dual Fusion 48 MP com sensor de profundidade",
        chip: "A19 Bionic",
        thumbnail: "/images/iphone-17.webp",
        inStock: true
      },
      {
        id: "iphone-17-pro",
        name: "iPhone 17 Pro",
        type: "pro",
        price: 7499,
        formattedPrice: "R$ 7.499",
        description: "Todas as 3 lentes com sensores de 48 MP, Face ID sob o display e chassi híbrido de alumínio e titânio.",
        screenSize: "6,3 pol. ProMotion anti-reflexo",
        camera: "Trio 48 MP (Fusion, Ultra-Wide e Tele 5x)",
        chip: "A19 Pro",
        thumbnail: "/images/iphone-17.webp",
        inStock: true
      },
      {
        id: "iphone-17-pro-max",
        name: "iPhone 17 Pro Max",
        type: "pro-max",
        price: 8299,
        formattedPrice: "R$ 8.299",
        description: "Dynamic Island microscópica, resfriamento com câmara de vapor para performance sustentada extrema.",
        screenSize: "6,9 pol. Super Retina XDR Pro",
        camera: "Trio 48 MP Pro com novo teleobjetivo mecânico",
        chip: "A19 Pro",
        thumbnail: "/images/iphone-17.webp",
        inStock: true
      }
    ]
  },
  {
    id: 18,
    name: "iPhone 18",
    generation: "Geração 18",
    colorName: "Ouro Âmbar",
    colorHex: "#FFB300",
    accentHex: "#BF360C",
    cardBgLight: "from-[#FFF9ED] to-[#FFEECB]",
    cardBgDark: "from-[#352614] to-[#161228]",
    description: "Visão futurista com câmeras de abertura variável mecânica e biometria óptica de tela completa.",
    thumbnail: "/images/iphone-18.webp",
    badge: "Exclusividade",
    versions: [
      {
        id: "iphone-18-standard",
        name: "iPhone 18",
        type: "standard",
        price: 7499,
        formattedPrice: "R$ 7.499",
        description: "Tecnologia de tela sem bordas perceptíveis, processador quântico neural e recarga wireless de 45W.",
        screenSize: "6,3 pol. Infinity Display",
        camera: "Fusion 48 MP com abertura inteligente",
        chip: "A20 Pro",
        thumbnail: "/images/iphone-18.webp",
        inStock: true
      },
      {
        id: "iphone-18-pro",
        name: "iPhone 18 Pro",
        type: "pro",
        price: 8499,
        formattedPrice: "R$ 8.499",
        description: "Abertura variável física na câmera principal, permitindo controle real de profundidade de campo e bokeh óptico.",
        screenSize: "6,4 pol. Infinity ProMotion",
        camera: "Câmera com Abertura Mecânica Variável f/1.4 - f/4.0",
        chip: "A20 Ultra",
        thumbnail: "/images/iphone-18.webp",
        inStock: true
      },
      {
        id: "iphone-18-pro-max",
        name: "iPhone 18 Pro Max",
        type: "pro-max",
        price: 9399,
        formattedPrice: "R$ 9.399",
        description: "A experiência definitiva em smartphone: estrutura de titânio de grau cirúrgico, abertura variável e zoom contínuo.",
        screenSize: "6,9 pol. Infinity ProMotion XDR",
        camera: "Trio Pro com Abertura Variável + Periscópio Contínuo",
        chip: "A20 Ultra Max",
        thumbnail: "/images/iphone-18.webp",
        inStock: true
      }
    ]
  }
];

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: "ipad",
    name: "iPad",
    category: "ipad",
    tagline: "Para estudar, trabalhar, criar e aproveitar seus conteúdos.",
    description: "A potência do chip Apple aliada à versatilidade do iPadOS. Perfeito para desenho com Apple Pencil, produtividade com teclado Magic Keyboard e consumo de mídias em tela de alta resolução.",
    startingPrice: "A partir de R$ 3.490",
    gradient: "from-[#6624D8] via-[#FF3C91] to-[#0870B4]",
    thumbnail: "/images/ipad.webp",
    whatsappMessage: "Olá! Gostaria de consultar a disponibilidade e modelos de iPad na Maca na Mão iPhones."
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    category: "watch",
    tagline: "Mais saúde, conexão e praticidade no seu pulso.",
    description: "Monitore treinos, frequência cardíaca, sono e receba notificações instantâneas com design icônico, resistência à água e ampla variedade de pulseiras esportivas e elegantes.",
    startingPrice: "A partir de R$ 2.190",
    gradient: "from-[#FF3C91] via-[#FF9B32] to-[#6624D8]",
    thumbnail: "/images/apple-watch.webp",
    whatsappMessage: "Olá! Gostaria de consultar a disponibilidade e valores dos modelos de Apple Watch na Maca na Mão iPhones."
  },
  {
    id: "acessorios",
    name: "Acessórios",
    category: "acessorios",
    tagline: "Proteção e estilo para deixar seu aparelho do seu jeito.",
    description: "Capas MagSafe originais e transparentes, películas cerâmicas de alta resistência, carregadores rápidos USB-C certificados de 20W/35W e cabos trançados de durabilidade militar.",
    startingPrice: "A partir de R$ 79",
    gradient: "from-[#0870B4] via-[#6624D8] to-[#FF3C91]",
    thumbnail: "/images/acessorios.webp",
    whatsappMessage: "Olá! Gostaria de ver o catálogo de capas, películas e carregadores para iPhone disponíveis."
  }
];

export const TRADE_IN_DATA = {
  title: "Seu iPhone atual pode virar parte do próximo.",
  subtitle: "Avaliamos o seu iPhone e aceitamos o aparelho como parte do pagamento. Você paga somente a diferença e ainda pode parcelar o restante em até 12x, conforme as condições disponíveis.",
  steps: [
    {
      number: "1",
      title: "Avaliação",
      description: "Envie fotos e informações do seu aparelho para uma análise inicial detalhada com nossos especialistas."
    },
    {
      number: "2",
      title: "Abatimento",
      description: "O valor aprovado é abatido diretamente na compra do novo aparelho, reduzindo imediatamente o saldo."
    },
    {
      number: "3",
      title: "Parcelamento",
      description: "Consulte as opções de parcelamento, taxas e condições facilitadas no atendimento personalizado."
    }
  ],
  buttonText: "Avaliar meu iPhone",
  whatsappMessage: "Olá! Quero avaliar meu iPhone para usar como parte do pagamento.",
  disclaimer: "O valor de avaliação depende do modelo, armazenamento, estado físico, saúde da bateria, funcionamento, acessórios e análise final do aparelho. Valores e condições sujeitos a confirmação no atendimento."
};

export const TRUST_PILLARS = [
  {
    title: "Produtos selecionados",
    description: "Curadoria rigorosa com atenção à procedência, autenticidade e estado impecável de cada aparelho.",
    icon: "ShieldCheck"
  },
  {
    title: "Atendimento humano",
    description: "Orientação transparente sobre modelo ideal, armazenamento, saúde da bateria e faixa de preço.",
    icon: "HeartHandshake"
  },
  {
    title: "Compra personalizada",
    description: "Escolha a versão que faz sentido real para o seu estilo de uso, trabalho e orçamento.",
    icon: "Sparkles"
  }
];

export const LOCATION_INFO = {
  title: "De Saquarema para toda a região.",
  badge: "SAQUAREMA — RJ",
  description: "Somos de Saquarema, no Rio de Janeiro, e atendemos clientes de toda a Região dos Lagos e cidades próximas. Avaliamos a melhor possibilidade de entrega rápida ou retirada segura conforme a sua localização.",
  buttonText: "Falar com a loja",
  whatsappMessage: "Olá! Sou da região e gostaria de conhecer os produtos disponíveis."
};

/**
 * Função utilitária para gerar links do WhatsApp já codificados
 */
export function buildWhatsAppLink(message: string, phone: string = WHATSAPP_NUMBER): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
