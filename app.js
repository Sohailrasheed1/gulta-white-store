/**
 * GULTA WHITE™ - Official E-Commerce & WhatsApp Engine
 * High quality state management, cart handling & WhatsApp order dispatch
 */

// Default Configuration & Storage
const CONFIG = {
  defaultWhatsApp: '923001234567', // Replaceable by client
  currency: 'Rs.',
  freeShipping: true,
  storeName: 'Gulta White™ Official'
};

// State
let cart = JSON.parse(localStorage.getItem('gulta_cart')) || [];
let currentWhatsApp = localStorage.getItem('gulta_whatsapp_number') || CONFIG.defaultWhatsApp;

// Products Data
const PRODUCTS = [
  {
    id: 'gw-facewash',
    title: 'Face Wash',
    category: 'wash',
    badge: 'Popular',
    desc: 'Deep cleanses & refreshes for a healthy glow.',
    details: 'Formulated with L-Glutathione, Niacinamide, and gentle botanical extracts. Gently removes stubborn dirt, excess oil, and impurities without stripping the skin of natural moisture.',
    volume: '100 ml',
    price: 1499,
    oldPrice: 1850,
    image: 'assets/images/face-wash.jpg',
    ingredients: 'L-Glutathione, Niacinamide, Licorice Extract, Vitamin B5, Rose Water',
    usage: 'Wet face with lukewarm water, lather a pea-sized amount onto face in circular motions, then rinse thoroughly. Use morning & night.'
  },
  {
    id: 'gw-daycream',
    title: 'Day Cream',
    category: 'cream',
    badge: 'Best Seller',
    desc: 'Brightens • Moisturizes • Protects with Glutathione.',
    details: 'Luxury brightening and daily protective day cream. Formulated to fade pigmentation, enhance radiant luminosity, and keep skin deeply hydrated throughout the day.',
    volume: '30 gm',
    price: 1899,
    oldPrice: 2250,
    image: 'assets/images/day-cream.jpg',
    ingredients: 'Pure L-Glutathione, Vitamin C, Hyaluronic Acid, Kojic Acid, Shea Butter',
    usage: 'Apply evenly on clean face and neck in upward circular motions every morning before sun exposure or makeup.'
  },
  {
    id: 'gw-nightcream',
    title: 'Night Cream',
    category: 'cream',
    badge: 'Customer Choice',
    desc: 'Repairs • Nourishes • Renews during sleep.',
    details: 'Intense nighttime cellular repair formula. Helps repair daily environmental damage, stimulates cell turnover, and diminishes fine lines while restoring youthfulness.',
    volume: '30 gm',
    price: 1999,
    oldPrice: 2400,
    image: 'assets/images/night-cream.jpg',
    ingredients: 'Glutathione Complex, Peptides, Niacinamide 5%, Retinol Micro-encapsulated, Argan Oil',
    usage: 'Gently massage a small amount onto face and neck before sleeping. Leave overnight for maximum glow.'
  },
  {
    id: 'gw-sunscreen',
    title: 'Sunscreen',
    category: 'sun',
    badge: 'SPF 50+',
    desc: 'UVA/UVB Protection • Non-Greasy • Lightweight.',
    details: 'Broad spectrum SPF 50 PA+++ daily sun shield. Ultra-light, zero white cast, sweat-resistant, and leaves skin with a velvety matte finish designed specifically for the Pakistani climate.',
    volume: '50 ml',
    price: 1699,
    oldPrice: 2100,
    image: 'assets/images/sunscreen.jpg',
    ingredients: 'Zinc Oxide, Titanium Dioxide, Vitamin E, Aloe Vera, Chamomile Extract',
    usage: 'Apply generously 15 minutes before sun exposure. Reapply every 2 hours if continuously outdoors.'
  },
  {
    id: 'gw-set',
    title: 'Complete Skin Care Set',
    category: 'set',
    badge: 'Save Rs. 1,700',
    desc: 'Face Wash + Day Cream + Night Cream + Sunscreen.',
    details: 'The ultimate 4-step dermatological regimen for radiant glass skin. Includes Face Wash (100ml), Day Cream (30gm), Night Cream (30gm), and Sunscreen (50ml) in a luxury collector packaging.',
    volume: 'Full 4-in-1 Kit',
    price: 5499,
    oldPrice: 7200,
    image: 'assets/images/complete-set.jpg',
    ingredients: 'Full synergistic set with medical-grade Glutathione, Vitamin C & Hyaluronic complexes.',
    usage: 'Follow the 4-step routine daily: Cleanse -> Day Protection / Night Repair -> Sun Protection.'
  }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppNumber();
  renderProducts(PRODUCTS);
  updateCartUI();
  initEventListeners();
});

// Initialize WhatsApp Configuration
function initWhatsAppNumber() {
  const display = document.getElementById('currentWhatsAppDisplay');
  const adminInput = document.getElementById('adminWhatsApp');
  
  if (display) display.textContent = '+' + currentWhatsApp;
  if (adminInput) adminInput.value = currentWhatsApp;
  
  updateAllWhatsAppLinks();
}

// Update all static WhatsApp buttons
function updateAllWhatsAppLinks() {
  const heroWa = document.getElementById('heroWhatsappBtn');
  const footerWa = document.getElementById('footerWaLink');
  const floatingWa = document.getElementById('floatingWaBtn');

  const baseMsg = encodeURIComponent('Hello Gulta White! I want to know more about your skincare collection and place an order.');
  const waUrl = `https://wa.me/${currentWhatsApp}?text=${baseMsg}`;

  if (heroWa) heroWa.href = waUrl;
  if (footerWa) footerWa.href = waUrl;
  if (floatingWa) floatingWa.href = waUrl;

  document.querySelectorAll('.whatsapp-link-trigger').forEach(el => {
    el.href = `https://wa.me/${currentWhatsApp}?text=` + encodeURIComponent('Hi Gulta White! I have questions regarding ingredients and ordering.');
  });
}

// Render Products Grid
function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 2.5rem; color: #ebd3d8; margin-bottom: 12px; display:block;"></i>
        <p>No products found matching your search.</p>
        <button class="btn btn-primary" onclick="filterProducts('all')" style="margin-top: 15px;">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <span class="product-badge-tag">${prod.badge}</span>
      <div class="product-img-wrapper" onclick="openQuickView('${prod.id}')" title="Click to view details">
        <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">
        <button class="quick-view-overlay-btn"><i class="fa-solid fa-eye"></i> Quick View</button>
      </div>
      <div class="product-info">
        <h3 class="product-name" onclick="openQuickView('${prod.id}')" style="cursor: pointer;">${prod.title}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-volume">${prod.volume}</div>
        <div class="product-price-box">
          <span class="product-current-price">${CONFIG.currency} ${prod.price.toLocaleString()}</span>
          <span class="product-old-price">${CONFIG.currency} ${prod.oldPrice.toLocaleString()}</span>
        </div>
        <div class="product-actions-wrap">
          <button class="btn btn-add-cart" onclick="addToCart('${prod.id}')">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>
          <button class="btn btn-quick-wa" onclick="instantWhatsAppOrder('${prod.id}')" title="1-Click Direct WhatsApp Order">
            <i class="fa-brands fa-whatsapp"></i> Buy via WhatsApp
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Tabs
function filterProducts(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  if (category === 'all') {
    renderProducts(PRODUCTS);
  } else {
    const filtered = PRODUCTS.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

// Add to Cart Logic
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      volume: product.volume,
      image: product.image,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.title}" added to cart!`);
  openCartDrawer();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

// Update Cart Item Quantity
function updateCartQty(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('gulta_cart', JSON.stringify(cart));
}

// Update Cart UI Everywhere
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Badges
  const topBadge = document.getElementById('topCartBadge');
  const drawerBadge = document.getElementById('cartDrawerBadge');
  if (topBadge) topBadge.textContent = totalCount;
  if (drawerBadge) drawerBadge.textContent = totalCount;

  // Drawer Container
  const container = document.getElementById('cartItemsContainer');
  const cartFooter = document.getElementById('cartDrawerFooter');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon"><i class="fa-solid fa-bag-shopping"></i></div>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Explore our natural skincare collection and add your favorite products!</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); window.location.href='#products'" style="margin-top: 18px;">
          Start Shopping
        </button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (cartFooter) cartFooter.style.display = 'block';

    container.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${CONFIG.currency} ${(item.price * item.qty).toLocaleString()}</div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-number">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    if (subtotalEl) subtotalEl.textContent = `${CONFIG.currency} ${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `${CONFIG.currency} ${subtotal.toLocaleString()}`;
  }
}

// Drawer Visibility
function openCartDrawer() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Instant 1-Click WhatsApp Order for Single Product
function instantWhatsAppOrder(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const orderNum = 'GW-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' });

  const msg = 
`🌸 *INSTANT ORDER - GULTA WHITE OFFICIAL* 🌸
-----------------------------------------
*Order Ref:* #${orderNum}
*Date:* ${now}

🛍️ *ITEM REQUESTED:*
• *Product:* ${prod.title} (${prod.volume})
• *Quantity:* 1
• *Price:* ${CONFIG.currency} ${prod.price.toLocaleString()}
• *Delivery:* FREE All Over Pakistan 🚚
• *Total Payable:* ${CONFIG.currency} ${prod.price.toLocaleString()}
• *Payment:* Cash on Delivery (COD)

-----------------------------------------
👤 *MY DELIVERY DETAILS:*
• *My Name:* 
• *My Mobile/WhatsApp:* 
• *My Complete Address & City:* 

Please confirm availability and dispatch my parcel! Thank you!`;

  const waUrl = `https://wa.me/${currentWhatsApp}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Order Cart Direct via WhatsApp
function orderCartViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add products first.');
    return;
  }

  const orderNum = 'GW-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let itemsList = '';
  cart.forEach((item, index) => {
    itemsList += `${index + 1}. *${item.title}* (${item.volume}) x ${item.qty} = ${CONFIG.currency} ${(item.price * item.qty).toLocaleString()}\n`;
  });

  const msg = 
`🌸 *NEW CART ORDER - GULTA WHITE OFFICIAL* 🌸
-----------------------------------------
*Order Ref:* #${orderNum}
*Date:* ${now}

🛍️ *ORDERED ITEMS:*
${itemsList}
💰 *TOTAL SUMMARY:*
• *Subtotal:* ${CONFIG.currency} ${subtotal.toLocaleString()}
• *Shipping:* FREE (All Pakistan) 🚚
• *Total Amount:* ${CONFIG.currency} ${subtotal.toLocaleString()}
• *Payment:* Cash on Delivery (COD)

-----------------------------------------
👤 *MY DELIVERY DETAILS:*
• *Name:* 
• *Mobile Number:* 
• *Full Address & City:* 

Please confirm my order and send tracking details!`;

  const waUrl = `https://wa.me/${currentWhatsApp}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Checkout Modal Open & Populate
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Please add items to cart before proceeding!');
    return;
  }
  closeCartDrawer();

  const checkoutModal = document.getElementById('checkoutModal');
  const itemsContainer = document.getElementById('checkoutItemsList');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const totalEl = document.getElementById('checkoutTotal');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="summary-item-line">
        <span>${item.qty}x ${item.title}</span>
        <strong>${CONFIG.currency} ${(item.price * item.qty).toLocaleString()}</strong>
      </div>
    `).join('');
  }

  if (subtotalEl) subtotalEl.textContent = `${CONFIG.currency} ${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `${CONFIG.currency} ${subtotal.toLocaleString()}`;

  checkoutModal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Handle Checkout Form Submission (Sends Formatted WhatsApp Order)
function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('custName')?.value.trim();
  const phone = document.getElementById('custPhone')?.value.trim();
  const city = document.getElementById('custCity')?.value.trim();
  const address = document.getElementById('custAddress')?.value.trim();
  const notes = document.getElementById('custNotes')?.value.trim() || 'None';
  
  const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = paymentMethodInput ? paymentMethodInput.value : 'Cash on Delivery (COD)';

  const orderNum = 'GW-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let itemsText = '';
  cart.forEach((item, idx) => {
    itemsText += `${idx + 1}. *${item.title}* (${item.volume}) x ${item.qty} = ${CONFIG.currency} ${(item.price * item.qty).toLocaleString()}\n`;
  });

  const whatsappMessage = 
`🌟 *VERIFIED ORDER - GULTA WHITE STORE* 🌟
-----------------------------------------
*Order ID:* #${orderNum}
*Order Date:* ${now}

👤 *CUSTOMER INFORMATION:*
• *Full Name:* ${name}
• *Mobile / WhatsApp:* ${phone}
• *City:* ${city}
• *Delivery Address:* ${address}
• *Payment Option:* ${paymentMethod}
• *Special Delivery Notes:* ${notes}

🛍️ *ORDERED PRODUCTS:*
${itemsText}
💰 *FINAL INVOICE:*
• *Subtotal:* ${CONFIG.currency} ${subtotal.toLocaleString()}
• *Nationwide Delivery:* FREE
• *Net Payable:* ${CONFIG.currency} ${subtotal.toLocaleString()}
-----------------------------------------
✅ *Action Required:* Please confirm my order dispatch! Thank you!`;

  const waUrl = `https://wa.me/${currentWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

  // Save order id for success modal
  const successOrderIdEl = document.getElementById('successOrderId');
  const successWaLinkEl = document.getElementById('successWhatsappLink');

  if (successOrderIdEl) successOrderIdEl.textContent = '#' + orderNum;
  if (successWaLinkEl) successWaLinkEl.href = waUrl;

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Close Checkout Modal & Open WhatsApp in new tab
  closeCheckoutModal();
  window.open(waUrl, '_blank');

  // Open Success Modal
  document.getElementById('orderSuccessModal')?.classList.add('active');
}

function closeSuccessModal() {
  document.getElementById('orderSuccessModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Quick View Modal
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const content = document.getElementById('quickViewContent');
  if (!content) return;

  content.innerHTML = `
    <div class="quickview-img-col">
      <img src="${prod.image}" alt="${prod.title}" class="quickview-img">
    </div>
    <div class="quickview-info">
      <span class="product-volume" style="margin-bottom: 8px;">${prod.volume} • ${prod.badge}</span>
      <h2>${prod.title}</h2>
      <div class="quickview-price">${CONFIG.currency} ${prod.price.toLocaleString()} <span style="font-size: 0.9rem; color: #888; text-decoration: line-through;">${CONFIG.currency} ${prod.oldPrice.toLocaleString()}</span></div>
      <p style="font-size: 0.95rem; color: #444; margin-bottom: 14px; line-height: 1.5;">${prod.details}</p>
      
      <div style="background: #fdf5f7; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 0.85rem; border: 1px solid #fae1e6;">
        <p style="margin-bottom: 6px;"><strong>Key Ingredients:</strong> ${prod.ingredients}</p>
        <p><strong>How to Apply:</strong> ${prod.usage}</p>
      </div>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="addToCart('${prod.id}'); closeQuickViewModal();">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
        <button class="btn btn-whatsapp-order" onclick="instantWhatsAppOrder('${prod.id}')">
          <i class="fa-brands fa-whatsapp"></i> Buy via WhatsApp
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickViewModal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  document.getElementById('quickViewModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// WhatsApp Settings
function openSettingsModal() {
  document.getElementById('settingsModal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
  document.getElementById('settingsModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

function saveWhatsAppSettings(event) {
  event.preventDefault();
  const input = document.getElementById('adminWhatsApp');
  if (!input) return;

  let cleaned = input.value.replace(/[^0-9]/g, '');
  if (!cleaned || cleaned.length < 10) {
    alert('Please enter a valid WhatsApp number with country code (e.g. 923001234567)');
    return;
  }

  currentWhatsApp = cleaned;
  localStorage.setItem('gulta_whatsapp_number', currentWhatsApp);
  initWhatsAppNumber();
  closeSettingsModal();
  showToast('Store WhatsApp number updated to +' + currentWhatsApp);
}

// Policies Modal
function openPolicyModal(title) {
  const modal = document.getElementById('policyModal');
  const titleEl = document.getElementById('policyModalTitle');
  const bodyEl = document.getElementById('policyModalContent');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = title;

  const contentMap = {
    'FAQs': `
      <div style="display:flex; flex-direction:column; gap:14px; font-size:0.9rem; line-height:1.6;">
        <div><strong>Q: How do I order via WhatsApp?</strong><br>A: Simply click the "Order via WhatsApp" button on any product or your cart. It automatically drafts your order so you can send it in one click!</div>
        <div><strong>Q: How long does delivery take?</strong><br>A: Normal delivery across major cities (Karachi, Lahore, Islamabad, etc.) takes 2 to 3 working days. Other areas take 3 to 5 days.</div>
        <div><strong>Q: Is delivery really free?</strong><br>A: Yes! We offer 100% Free Nationwide Delivery on all orders.</div>
        <div><strong>Q: Are products 100% original and safe?</strong><br>A: Yes, Gulta White products are dermatologically formulated, steroid-free, and tested for all skin types.</div>
      </div>
    `,
    'Shipping Policy': `
      <p style="font-size:0.9rem; line-height:1.6; color:#444;">
        We provide Free Nationwide Delivery across all cities, towns, and villages in Pakistan through trusted courier partners (TCS, Leopards, Trax, PostEx).<br><br>
        • Orders placed before 4:00 PM are dispatched on the same business day.<br>
        • Cash on Delivery (COD) is available everywhere with SMS/WhatsApp parcel tracking.
      </p>
    `,
    'Return Policy': `
      <p style="font-size:0.9rem; line-height:1.6; color:#444;">
        Customer satisfaction is our highest priority. We offer a <strong>7-Day Easy Return & Exchange Guarantee</strong> if you receive any damaged, incorrect, or defective parcel.<br><br>
        Simply take a picture and share it with our customer support on WhatsApp for an immediate replacement or refund.
      </p>
    `,
    'Privacy Policy': `
      <p style="font-size:0.9rem; line-height:1.6; color:#444;">
        Gulta White respects your privacy. Your name, phone number, and delivery address are strictly used for shipping and delivery confirmation. We never share or sell customer data to third parties.
      </p>
    `,
    'Terms & Conditions': `
      <p style="font-size:0.9rem; line-height:1.6; color:#444;">
        By placing an order on Gulta White, you agree to receive order status updates and shipping notifications via WhatsApp or SMS. All product trademarks, imagery, and formulas belong to Gulta White Collection.
      </p>
    `
  };

  bodyEl.innerHTML = contentMap[title] || '<p>Details will be updated shortly.</p>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
  document.getElementById('policyModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Login Modal
function openLoginModal(e) {
  if (e) e.preventDefault();
  openPolicyModal('Customer Account');
  const titleEl = document.getElementById('policyModalTitle');
  const bodyEl = document.getElementById('policyModalContent');
  if (titleEl) titleEl.textContent = 'Account Login / Register';
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 20px 0;">
        <i class="fa-solid fa-user-shield" style="font-size: 3rem; color: var(--primary-maroon); margin-bottom: 12px;"></i>
        <h4 style="color: var(--primary-maroon); margin-bottom: 8px;">Fast Guest Checkout Active</h4>
        <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">
          No account registration is needed! You can order directly in seconds using our seamless WhatsApp & Cash on Delivery checkout.
        </p>
        <button class="btn btn-primary" onclick="closePolicyModal(); window.location.href='#products'">Browse Products</button>
      </div>
    `;
  }
}

// Newsletter Subscription
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (input && input.value) {
    showToast('Thank you! You have been subscribed for exclusive discounts.');
    input.value = '';
  }
}

// Toast Notification Helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Initialize Global Event Listeners
function initEventListeners() {
  // Cart open / close
  document.getElementById('topCartBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCartDrawer);

  // Cart action buttons
  document.getElementById('quickWhatsappCartBtn')?.addEventListener('click', orderCartViaWhatsApp);
  document.getElementById('openCheckoutModalBtn')?.addEventListener('click', openCheckoutModal);

  // Settings
  document.getElementById('openSettingsBtn')?.addEventListener('click', openSettingsModal);

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterProducts(cat);
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderProducts(PRODUCTS);
        return;
      }
      const filtered = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.details.toLowerCase().includes(q)
      );
      renderProducts(filtered);
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.details.toLowerCase().includes(q)
      );
      renderProducts(filtered);
      window.location.href = '#products';
    });
  }

  // Payment radio selection card styling
  document.querySelectorAll('.payment-radio-card input').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-radio-card').forEach(c => c.classList.remove('active'));
      radio.closest('.payment-radio-card')?.classList.add('active');
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    // Close nav on click outside
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}
