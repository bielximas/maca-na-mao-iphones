# 📱 Maca na Mão iPhones — Loja Virtual Premium

> **Vitrine Virtual & E-commerce Apple para Saquarema e toda a Região dos Lagos, RJ.**  
> Desenvolvido com **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **Lucide Icons**, inspirado na estética refinada, fluidez e sofisticação minimalista dos produtos Apple.

---

## 🌟 Identidade Visual & Diferenciais

- **Cores Oficiais**:
  - Roxo Principal: `#6624D8`
  - Rosa Vibrante: `#FF3C91`
  - Laranja Solar: `#FF9B32`
  - Azul Oceano: `#0870B4`
  - Fundo Claro Levemente Rosado: `#FFF7FB`
  - Fundo Escuro Tecnológico: `#161329`
  - Texto Escuro: `#201B32`
- **Catálogo de 8 Gerações**: iPhone 11, 12, 13, 14, 15, 16, 17 e 18.
- **Trio de Opções por Linha**: Cada geração possui exatamente as 3 versões (**Padrão**, **Pro** e **Pro Max**), com preços demonstrativos e especificações claras.
- **Otimizado para Celular (Mobile-First)**:
  - Grid de 2 colunas nos modelos de iPhone para telas de celular;
  - Seletor rápido horizontal deslizável com o polegar;
  - Barra rápida de ações flutuante no rodapé no celular com WhatsApp e carrinho de interesse;
  - Gaveta de seleção em largura total no celular para facilidade tátil;
  - Espaçamentos e fontes calibrados sem quebras de layout.
- **Carrinho de Interesse & WhatsApp**: O cliente seleciona os aparelhos desejados e envia uma mensagem formatada diretamente para o WhatsApp oficial da loja.
- **Troca Facilitada**: Seção com 3 etapas para avaliação do iPhone usado como parte do pagamento em até 12x.
- **Ecossistema Apple**: Cards dedicados para iPad, Apple Watch e Acessórios.
- **Localização Regional**: Foco em Saquarema, Araruama, Cabo Frio, Búzios, São Pedro da Aldeia e cidades vizinhas, informando opções de entrega e retirada.

---

## 🚀 Como Instalar e Executar Localmente

### Pré-requisitos
- Ter o **Node.js** (versão 18 ou superior) instalado em seu computador.

### Passo a passo
1. Abra o terminal na pasta do projeto:
   ```bash
   cd anti
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```
4. O terminal exibirá um link local, normalmente:
   ```
   http://localhost:5173/
   ```
   Abra essa URL no navegador (Chrome, Edge, Safari ou Firefox).

---

## 📞 Como Alterar o Número do WhatsApp

Todo o direcionamento do site para o WhatsApp está centralizado em um único arquivo:

👉 Abra o arquivo: **`src/data/products.ts`**

Localize a linha:
```typescript
export const WHATSAPP_NUMBER = "5521999999999";
```
Substitua pelo número oficial da sua loja, mantendo o formato **DDI (55) + DDD (21 ou 22) + 9 dígitos**, sem espaços nem traços.  
*Exemplo para Região dos Lagos (DDD 22):*
```typescript
export const WHATSAPP_NUMBER = "5522998765432";
```
Todos os botões do site atualizarão automaticamente!

---

## 💰 Como Alterar Preços dos iPhones

Todos os preços ficam centralizados no mesmo arquivo: **`src/data/products.ts`**.

Cada geração possui a lista de `versions` com 3 modelos:
```typescript
versions: [
  {
    id: "iphone-13-standard",
    name: "iPhone 13",
    type: "standard",
    price: 3299,                  // Número para cálculo no carrinho
    formattedPrice: "R$ 3.299",   // Texto exibido no card
    ...
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    type: "pro",
    price: 3999,
    formattedPrice: "R$ 3.999",
    ...
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    type: "pro-max",
    price: 4499,
    formattedPrice: "R$ 4.499",
    ...
  }
]
```
Basta alterar os campos `price` e `formattedPrice`.

---

## 📸 Como Trocar as Fotos dos Produtos

As imagens dos produtos ficam salvas na pasta:
```
/public/images/
```

### Nomes dos arquivos:
- `iphone-11.webp`
- `iphone-12.webp`
- `iphone-13.webp`
- `iphone-14.webp`
- `iphone-15.webp`
- `iphone-16.webp`
- `iphone-17.webp`
- `iphone-18.webp`
- `hero-iphone.webp` (foto do aparelho em destaque no topo)
- `ipad.webp`
- `apple-watch.webp`
- `acessorios.webp`

> 💡 **Dica**: O site possui um componente inteligente (`DeviceMockup.tsx`) que renderiza ilustrações vetoriais em alta resolução estilo Apple com acabamento em titânio e vidro caso você ainda não tenha fotos reais salvas na pasta. Quando você adicionar as fotos reais com os nomes acima (em formato `.webp` ou `.png`), elas serão exibidas automaticamente!

---

## ✍️ Como Alterar Textos, Redes Sociais e Cidade

No arquivo **`src/data/products.ts`**:
```typescript
export const STORE_NAME = "Maca na Mão iPhones";
export const STORE_CITY = "Saquarema";
export const STORE_STATE = "RJ";
export const INSTAGRAM_HANDLE = "@macanamaoiphones";
export const INSTAGRAM_URL = "https://instagram.com/macanamaoiphones";
```

Para editar as etapas de troca ou informações de localização, basta editar as constantes `TRADE_IN_DATA` e `LOCATION_INFO` no mesmo arquivo.

---

## 🌐 Como Publicar na Web Gratuitamente

### Opção 1: Publicação na Vercel (Recomendado)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba o projeto para o seu GitHub.
3. No painel da Vercel, clique em **Add New Project** e selecione o repositório.
4. A Vercel detectará o Vite automaticamente. Clique em **Deploy**.
5. Em menos de 1 minuto seu site estará online com certificado SSL (HTTPS) gratuito!

### Opção 2: Publicação no Netlify
1. Gere a pasta de build rodando:
   ```bash
   npm run build
   ```
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
3. Arraste a pasta `dist` gerada para a janela do navegador. O site entrará no ar instantaneamente.

---

## 📁 Estrutura de Arquivos

```
anti/
├── public/
│   ├── favicon.svg             # Ícone do site com monograma M
│   └── images/                 # Imagens dos produtos
├── src/
│   ├── components/
│   │   ├── TopBar.tsx          # Barra superior de frete e WhatsApp
│   │   ├── Navbar.tsx          # Cabeçalho fixo com logo e carrinho
│   │   ├── Hero.tsx            # Seção principal com iPhone flutuante
│   │   ├── GenerationGrid.tsx  # 8 cards de gerações clicáveis
│   │   ├── ModelDetails.tsx    # As 3 versões da linha selecionada
│   │   ├── DeviceMockup.tsx    # Mockup vetorial e fotográfico
│   │   ├── TradeInProgress.tsx # Seção de troca de aparelho
│   │   ├── TrustSection.tsx    # 3 pilares de procedência e confiança
│   │   ├── EcosystemSection.tsx# iPad, Apple Watch e Acessórios
│   │   ├── LocationSection.tsx # Saquarema e Região dos Lagos
│   │   ├── CartDrawer.tsx      # Gaveta lateral de seleção de interesse
│   │   ├── Footer.tsx          # Rodapé com links e redes sociais
│   │   └── PolicyModal.tsx     # Modal com termos e política de troca
│   ├── context/
│   │   └── CartContext.tsx     # Gerenciamento de estado do carrinho
│   ├── data/
│   │   └── products.ts         # Preços, produtos e número do WhatsApp
│   ├── App.tsx                 # Montagem principal da página
│   ├── main.tsx                # Entrada React
│   └── index.css               # Estilos Tailwind e gradientes
├── index.html                  # SEO, meta tags e fontes
├── tailwind.config.js          # Paleta e tokens de design
├── tsconfig.json               # Configurações TypeScript
└── package.json                # Dependências
```

---

## 📜 Licença
Projeto desenvolvido exclusivamente para **Maca na Mão iPhones** — Saquarema, RJ.
