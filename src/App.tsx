import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GenerationGrid } from './components/GenerationGrid';
import { ModelDetails } from './components/ModelDetails';
import { TradeInProgress } from './components/TradeInProgress';
import { TrustSection } from './components/TrustSection';
import { EcosystemSection } from './components/EcosystemSection';
import { LocationSection } from './components/LocationSection';
import { CartDrawer } from './components/CartDrawer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { IPHONE_GENERATIONS } from './data/products';
import type { GenerationModel } from './data/products';

function AppContent() {
  // Default to iPhone 15 as prominent generation
  const [selectedGeneration, setSelectedGeneration] = useState<GenerationModel>(
    () => IPHONE_GENERATIONS.find((g) => g.id === 15) || IPHONE_GENERATIONS[4]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7FB] text-[#201B32] font-sans antialiased selection:bg-[#6624D8] selection:text-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Sticky Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 3. Hero Principal */}
        <Hero />

        {/* 4. Seção de Modelos de iPhone (8 gerações) */}
        <div id="iphones">
          <GenerationGrid
            selectedGeneration={selectedGeneration}
            onSelectGeneration={setSelectedGeneration}
          />
        </div>

        {/* 5. Seção de Opções da Linha Selecionada (Padrão, Pro, Pro Max) */}
        <ModelDetails generation={selectedGeneration} />

        {/* 7. Seção de Troca de iPhone */}
        <TradeInProgress />

        {/* 8. Seção de Confiança */}
        <TrustSection />

        {/* 9. Seção de iPad, Apple Watch e Acessórios */}
        <EcosystemSection />

        {/* 10. Seção de Localização (Saquarema & Região dos Lagos) */}
        <LocationSection />
      </main>

      {/* 11. Rodapé */}
      <Footer />

      {/* Barra Rápida Flutuante para Celular */}
      <MobileQuickBar />

      {/* 6. Seleção de Produto e Carrinho Lateral de Interesse */}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
