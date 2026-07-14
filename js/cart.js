/* ============================================================
   SYALUNE v4 — Modul Keranjang (localStorage)
   Key: "syalune_cart_v4" — terpisah dari versi lain
   Format: [{ id, qty }, ...]
   ============================================================ */

const CART_KEY = "syalune_cart_v4";

const Cart = {
  getRaw() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:change"));
  },

  all() { return this.getRaw(); },

  getDetailed() {
    return this.getRaw()
      .map(item => {
        const p = getProductById(item.id);
        if (!p) return null;
        const cartId = item.cartId || item.id;
        return { ...p, cartId: cartId, qty: item.qty, subtotal: p.price * item.qty, size: item.size, color: item.color };
      })
      .filter(Boolean);
  },

  add(id, qty = 1, size = null, color = null) {
    const p = getProductById(id);
    if (!p) return;
    const s = size || (p.sizes && p.sizes.length > 0 ? p.sizes[0] : "");
    const c = color || (p.colors && p.colors.length > 0 ? p.colors[0] : "");
    const cartId = `${id}-${s}-${c}`;
    
    const items = this.getRaw();
    const found = items.find(i => i.cartId === cartId);
    if (found) {
      found.qty += qty;
    } else {
      items.push({ id, cartId, qty, size: s, color: c });
    }
    this.save(items);
  },

  remove(cartId) {
    const items = this.getRaw();
    const found = items.find(i => i.cartId === cartId || i.id === cartId);
    if (found && found.qty > 1) { 
      found.qty -= 1; 
      this.save(items); 
    } else { 
      this.save(items.filter(i => i.cartId !== cartId && i.id !== cartId)); 
    }
  },

  removeAll(cartId) {
    const items = this.getRaw();
    this.save(items.filter(i => i.cartId !== cartId && i.id !== cartId));
  },

  setQty(cartId, qty) {
    let items = this.getRaw();
    if (qty <= 0) { 
      items = items.filter(i => i.cartId !== cartId); 
    } else { 
      const f = items.find(i => i.cartId === cartId); 
      if (f) f.qty = qty; 
    }
    this.save(items);
  },

  clear() { this.save([]); },

  count() { return this.getRaw().reduce((s, i) => s + i.qty, 0); },

  subtotal() { return this.getDetailed().reduce((s, i) => s + i.subtotal, 0); },
};