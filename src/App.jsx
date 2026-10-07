import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import SkinCareTips from './components/SkinCareTips';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import WhatsAppAdminModal from './components/WhatsAppAdminModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';
import MobileAppDrawer from './components/MobileAppDrawer';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('gulta_cart_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    return localStorage.getItem('gulta_whatsapp_v2') || '923001234567';
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutPayload, setCheckoutPayload] = useState(null);

  useEffect(() => {
    localStorage.setItem('gulta_cart_v2', JSON.stringify(cart));
  }, [cart]);

  // Cart Handlers
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleBuyNow = (product, quantity = 1) => {
    handleAddToCart(product, quantity);
    const subtotal = product.price * quantity;
    setCheckoutPayload({
      cart: [{ ...product, quantity }],
      subtotal: subtotal,
      discountAmount: 0,
      finalTotal: subtotal
    });
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = (data) => {
    setCheckoutPayload(data);
    setIsCheckoutOpen(true);
  };

  const handleDirectWhatsAppOrder = ({ cart: orderCart, finalTotal }) => {
    const itemsText = orderCart.map(i => `• ${i.title} (x${i.quantity}) - Rs. ${(i.price * i.quantity).toLocaleString()}`).join('%0A');
    const message = `👋 *Hi Gulta White™! I want to order the following items:*%0A%0A${itemsText}%0A%0A💰 *Total Amount*: Rs. ${finalTotal.toLocaleString()}%0A🚚 *Shipping*: Free Express Delivery%0A%0APlease confirm my order!`;
    const cleanNum = whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=${message}`, '_blank');
  };

  const handleSaveWhatsAppNumber = (newNum) => {
    setWhatsappNumber(newNum);
    localStorage.setItem('gulta_whatsapp_v2', newNum);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        whatsappNumber={whatsappNumber}
      />

      {/* Hero Showcase */}
      <HeroSection
        onShopClick={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onQuickBuyKit={() => {
          const kit = PRODUCTS.find(p => p.id === 'gw-set');
          if (kit) handleBuyNow(kit, 1);
        }}
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Products Grid */}
      <ProductGrid
        products={PRODUCTS}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        onBuyNow={handleBuyNow}
        searchFilter={searchFilter}
      />

      {/* Skincare Routine */}
      <SkinCareTips />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp whatsappNumber={whatsappNumber} />

      {/* Mobile Sticky Bottom App Navigation Bar */}
      <MobileBottomNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        whatsappNumber={whatsappNumber}
      />

      {/* Mobile App Drawer (Burger Menu) */}
      <MobileAppDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        whatsappNumber={whatsappNumber}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        onDirectWhatsAppOrder={handleDirectWhatsAppOrder}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartData={checkoutPayload}
        targetWhatsApp={whatsappNumber}
      />

      {/* WhatsApp Store Config Admin Modal */}
      <WhatsAppAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentNumber={whatsappNumber}
        onSaveNumber={handleSaveWhatsAppNumber}
      />
    </div>
  );
}
