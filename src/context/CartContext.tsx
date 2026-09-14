import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { WHATSAPP_NUMBER, buildWhatsAppLink } from '../data/products';
import type { VersionOption } from '../data/products';

export interface CartItem {
  id: string;
  name: string;
  generationName?: string;
  price: number;
  formattedPrice: string;
  thumbnail: string;
  screenSize?: string;
  camera?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: VersionOption, generationName: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
  totalPrice: number;
  formattedTotal: string;
  getWhatsAppCheckoutLink: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'maca_na_mao_interest_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: VersionOption, generationName: string) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        setIsCartOpen(true);
        return prev;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          generationName: generationName,
          price: product.price,
          formattedPrice: product.formattedPrice,
          thumbnail: product.thumbnail,
          screenSize: product.screenSize,
          camera: product.camera,
        }
      ];
    });

    // Celebratory micro-interaction confetti
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6624D8', '#FF3C91', '#FF9B32', '#0870B4']
      });
    } catch {
      // Confetti fallback
    }

    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const formattedTotal = `R$ ${totalPrice.toLocaleString('pt-BR')}`;

  const getWhatsAppCheckoutLink = () => {
    if (items.length === 0) {
      return buildWhatsAppLink("Olá! Gostaria de tirar dúvidas sobre os iPhones disponíveis na Maca na Mão.");
    }

    const itemsText = items
      .map(item => `- ${item.name} — ${item.formattedPrice}`)
      .join('\n');

    const message = `Olá! Tenho interesse nos seguintes produtos:\n${itemsText}\n\nGostaria de confirmar disponibilidade, armazenamento, estado do aparelho, garantia e formas de pagamento.`;

    return buildWhatsAppLink(message, WHATSAPP_NUMBER);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        itemCount,
        totalPrice,
        formattedTotal,
        getWhatsAppCheckoutLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
