import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GenerationGrid } from './components/GenerationGrid';
import { ModelDetails } from './components/ModelDetails';
import { MaintenanceCard } from './components/MaintenanceCard';
import TradeInCalculator from './components/TradeInCalculator';
import { TrustSection } from './components/TrustSection';
import { EcosystemSection } from './components/EcosystemSection';
import { LocationSection } from './components/LocationSection';
import { CartDrawer } from './components/CartDrawer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { IPHONE_GENERATIONS } from './data/products';
import type { GenerationModel } from './data/products';

function AppContent() {
  const [selectedGeneration, setSelectedGeneration] = useState<GenerationModel>(
    () =>
      IPHONE_GENERATIONS.find((g) => g.id === 15) ||
      IPHONE_GENERATIONS[4],
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7FB] text-[#201B32] font-sans antialiased selection:bg-[#6624D8] selection:text-white">
      <TopBar />

      <Navbar />

      <main className="flex-grow">
        <Hero />

        <div id="iphones">
          <GenerationGrid
            selectedGeneration={selectedGeneration}
            onSelectGeneration={setSelectedGeneration}
          />
        </div>

        <ModelDetails generation={selectedGeneration} />

        <MaintenanceCard />

        <section
          id="calculadora-troca"
          className="trade-in-section px-4 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="trade-in-heading">
              <h2>Seu iPhone atual pode virar parte do próximo.</h2>
              <p>
                Avaliamos o seu iPhone e aceitamos o aparelho como parte do
                pagamento. Você paga somente a diferença e ainda pode parcelar
                o restante em até 12x, conforme as condições disponíveis.
              </p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        <TrustSection />

        <EcosystemSection />

        <LocationSection />
      </main>

      <Footer />

      <MobileQuickBar />

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