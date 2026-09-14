import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, MessageCircle, ChevronRight, Smartphone, RefreshCw, Tablet, Watch, Shield, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '../data/products';

export const Navbar: React.FC = () => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'iPhones', href: '#iphones', icon: Smartphone },
    { label: 'Troque seu iPhone', href: '#troca', icon: RefreshCw },
    { label: 'iPad', href: '#ecossistema', icon: Tablet },
    { label: 'Apple Watch', href: '#ecossistema', icon: Watch },
    { label: 'Acessórios', href: '#ecossistema', icon: Shield },
    { label: 'Nossa região', href: '#regiao', icon: MapPin },
  ];

  const whatsappGeneralUrl = buildWhatsAppLink(
    "Olá! Gostaria de falar com o atendimento da Maca na Mão iPhones.",
    WHATSAPP_NUMBER
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF7FB]/95 backdrop-blur-md shadow-apple-sm border-b border-[#6624D8]/10 py-2 sm:py-3'
          : 'bg-[#FFF7FB]/85 backdrop-blur-sm py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Custom "M" Monogram */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#6624D8] via-[#FF3C91] to-[#FF9B32] p-0.5 shadow-sm group-hover:shadow-apple-glow transition-all duration-300 flex-shrink-0">
            <div className="w-full h-full bg-[#161329] rounded-[10px] flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 28V12L20 22L30 12V28"
                  stroke="url(#logoGradMobile)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="30" cy="9" r="2" fill="#FF9B32" />
                <defs>
                  <linearGradient id="logoGradMobile" x1="10" y1="12" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF3C91" />
                    <stop offset="0.5" stopColor="#6624D8" />
                    <stop offset="1" stopColor="#0870B4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-xl tracking-tight text-[#201B32] group-hover:text-[#6624D8] transition-colors leading-none">
              Maca na Mão
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#726B82] uppercase mt-0.5">
              iPhones · Saquarema
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#726B82] hover:text-[#6624D8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#6624D8] after:to-[#FF3C91] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: WhatsApp & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Direct Action (Desktop) */}
          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#6624D8] hover:bg-[#541cb8] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-apple-sm hover:shadow-apple-glow transition-all duration-300 active:scale-95"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Interest Cart Button with Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-white hover:bg-[#F3EBFF] border border-[#6624D8]/15 text-[#201B32] hover:text-[#6624D8] transition-all shadow-sm active:scale-95 flex items-center justify-center min-w-[42px] min-h-[42px]"
            aria-label="Abrir seleção de interesse"
            title="Ver produtos selecionados"
          >
            <ShoppingBag className="w-5 h-5 text-[#6624D8]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF3C91] to-[#6624D8] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-[#201B32] hover:text-[#6624D8] focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF7FB] border-b border-purple-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[#201B32] hover:bg-[#F3EBFF] active:bg-[#F3EBFF] font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-purple-100 flex items-center justify-center text-[#6624D8]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}

            <div className="pt-3 border-t border-purple-100/60 mt-2">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#6624D8] active:bg-[#541cb8] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp da Loja</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
