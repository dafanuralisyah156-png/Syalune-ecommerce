/* ============================================================
   SYALUNE v4 — Data Produk Resmi
   10 Produk: 5 Wanita + 5 Pria
   Korean Casual · Minimalist · Streetwear
   ============================================================ */

const PRODUCTS = [
  /* ───────── PRODUK WANITA ───────── */
  {
    id: "syl-w01",
    name: "Hana Oversized Tweed Cardigan",
    category: "Outerwear Wanita",
    gender: "Wanita",
    price: 185000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.9, reviews: 142,
    image: "../images/1.jpg.jpeg",
    colors: ["Ivory Cream", "Soft Pink", "Soft Mint"],
    short: "Cardigan bergaya Korean Fashion dengan bahan Premium Cotton Tweed Blend. Potongan oversized yang santai namun stylish.",
    desc: "Hana Oversized Tweed Cardigan merupakan cardigan bergaya Korean Fashion yang memadukan desain minimalis dengan sentuhan elegan. Menggunakan bahan Premium Cotton Tweed Blend, cardigan ini memiliki tekstur yang lembut, nyaman dipakai, dan tidak mudah kusut sehingga cocok digunakan sepanjang hari.\n\nPotongan oversized memberikan kesan santai namun tetap stylish, membuatnya mudah dipadukan dengan berbagai outfit seperti kaos basic, tank top, blouse, dress, maupun kemeja. Detail kancing mutiara pada bagian depan menambah kesan mewah tanpa terlihat berlebihan.\n\nCardigan ini cocok digunakan untuk berbagai aktivitas, mulai dari kuliah, bekerja di kantor, menghadiri acara semi formal, hingga bersantai bersama teman di kafe.",
    material: "Premium Cotton Tweed Blend",
    fit: "Oversized Fit, All Size (S–XL)",
    stock: 58,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-w02",
    name: "Yeona Pleated Midi Skirt",
    category: "Rok Wanita",
    gender: "Wanita",
    price: 165000,
    oldPrice: null,
    badge: "BEST",
    rating: 4.8, reviews: 203,
    image: "../images/2.jpg.jpeg",
    colors: ["Midnight Black", "Grey", "Brown"],
    short: "Rok midi pleated bergaya Korean Fashion dengan desain high-waist yang memberikan siluet proporsional dan feminin.",
    desc: "Tampil anggun dan modern dengan Yeona Pleated Midi Skirt, rok bergaya Korean Fashion yang dirancang untuk memberikan kesan feminin sekaligus elegan. Rok ini memiliki desain high-waist yang mampu memberikan ilusi kaki lebih jenjang dan siluet tubuh yang proporsional.\n\nDetail lipit (pleated) yang rapi membuat rok terlihat lebih dinamis saat digunakan. Dengan panjang midi, rok ini cocok dipakai untuk berbagai aktivitas seperti kuliah, bekerja, menghadiri acara semi formal, hingga bersantai bersama teman.\n\nTerbuat dari bahan Premium Polyester berkualitas tinggi yang ringan, tidak mudah kusut, dan nyaman digunakan sepanjang hari.",
    material: "Premium Polyester",
    fit: "High-Waist, Midi Length, S–XL",
    stock: 74,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-w03",
    name: "Puff Sleeve Blouse",
    category: "Atasan Wanita",
    gender: "Wanita",
    price: 149000,
    oldPrice: null,
    badge: null,
    rating: 4.7, reviews: 118,
    image: "../images/3.jpg.jpeg",
    colors: ["Pure White", "Sage Green", "Lilac"],
    short: "Blouse square neck dengan lengan puff sleeve dari bahan Premium Linen Cotton — feminin, anggun, dan nyaman.",
    desc: "Tampilkan gaya feminin yang anggun dengan Puff Sleeve Blouse, atasan bergaya Korean Fashion yang memadukan desain klasik dan modern. Blouse ini memiliki potongan square neck yang memberikan kesan leher lebih jenjang serta mempercantik area bahu, dipadukan dengan lengan puff sleeve yang sedang menjadi tren.\n\nTerbuat dari bahan Premium Linen Cotton, blouse ini terasa lembut, ringan, dan nyaman dipakai sepanjang hari. Cocok digunakan untuk berbagai kesempatan, mulai dari kuliah, bekerja, hingga acara santai bersama teman atau keluarga.\n\nDesainnya yang sederhana namun elegan membuat blouse ini mudah dipadukan dengan berbagai bawahan seperti rok, jeans, maupun celana kain.",
    material: "Premium Linen Cotton",
    fit: "Regular Fit, S–L",
    stock: 85,
    sizes: ["S", "M", "L"],
  },
  {
    id: "syl-w04",
    name: "Soo-Min Tiered Sundress",
    category: "Gaun Wanita",
    gender: "Wanita",
    price: 189000,
    oldPrice: 229000,
    badge: "SALE",
    rating: 4.8, reviews: 96,
    image: "../images/4.jpg.jpeg",
    colors: ["Soft Butter", "Sage Green", "Cotton Candy Pink"],
    short: "Dress berjenjang A-line dari bahan Premium Crinkle Airflow — flowy, ringan, cocok untuk liburan dan santai.",
    desc: "Nikmati tampilan feminin dan anggun dengan Soo-Min Tiered Sundress, dress bergaya Korean Fashion yang dirancang untuk memberikan kenyamanan sekaligus penampilan yang elegan. Dress ini memiliki desain berjenjang (bertingkat) yang menciptakan siluet flowy, sehingga memberikan kesan manis dan ringan saat dikenakan.\n\nPotongan A-line membuat dress terlihat lebih proporsional dan cocok digunakan oleh berbagai bentuk tubuh. Terbuat dari bahan Premium Crinkle Airflow yang ringan, lembut, dan memiliki sirkulasi udara yang baik sehingga tetap nyaman digunakan sepanjang hari.\n\nSoo-Min Tiered Sundress sangat cocok dikenakan saat liburan, piknik, makan malam, menghadiri acara keluarga, hingga sekadar bersantai di kafe.",
    material: "Premium Crinkle Airflow",
    fit: "A-Line, Midi Length, S–XL",
    stock: 43,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-w05",
    name: "Cargo Utility Skirt",
    category: "Rok Wanita",
    gender: "Wanita",
    price: 169000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.6, reviews: 77,
    image: "../images/5.jpg.jpeg",
    colors: ["Jet Black", "Sand Khaki", "Olive Green"],
    short: "Rok cargo bergaya Korean Streetwear dengan detail kantong fungsional dan bahan Premium Cotton Drill yang kuat.",
    desc: "Tampil lebih stylish dengan Cargo Utility Skirt, rok bergaya Korean Streetwear yang memadukan desain feminin dan kasual dalam satu produk. Rok ini mengusung model cargo dengan detail kantong fungsional di kedua sisinya, memberikan tampilan modern yang sedang tren di kalangan anak muda.\n\nDibuat menggunakan Premium Cotton Drill, rok ini memiliki tekstur yang kuat namun tetap ringan dan nyaman digunakan sepanjang hari. Potongan high-waist membantu menciptakan siluet tubuh yang lebih proporsional, sedangkan desain straight fit membuatnya mudah dipadukan dengan berbagai jenis atasan.\n\nCargo Utility Skirt cocok digunakan untuk kuliah, hangout, travelling, hingga aktivitas sehari-hari dengan tampilan yang kasual namun tetap modis.",
    material: "Premium Cotton Drill",
    fit: "High-Waist, Straight Fit, S–XL",
    stock: 62,
    sizes: ["S", "M", "L", "XL"],
  },

  /* ───────── PRODUK PRIA ───────── */
  {
    id: "syl-m01",
    name: "Oversized Boxy Shirt",
    category: "Kemeja Pria",
    gender: "Pria",
    price: 179000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.7, reviews: 134,
    image: "../images/6.jpg.jpeg",
    colors: ["Sage Green", "Off White", "Ash Grey", "Espresso Brown"],
    short: "Kemeja oversized boxy fit bergaya Korean Casual dari Premium Cotton Rayon — nyaman, minimalis, dan mudah dipadukan.",
    desc: "Tampil lebih modern dengan Oversized Boxy Shirt, kemeja pria bergaya Korean Casual yang mengutamakan kenyamanan dan kesan minimalis. Desain oversized boxy fit memberikan siluet yang longgar sehingga nyaman dipakai untuk berbagai aktivitas tanpa membatasi ruang gerak.\n\nTerbuat dari bahan Premium Cotton Rayon yang lembut, ringan, dan memiliki sirkulasi udara yang baik, sehingga tetap nyaman digunakan meskipun dalam cuaca hangat. Model lengan pendek dengan kerah klasik membuat kemeja ini mudah dipadukan dengan berbagai bawahan seperti jeans, chino, cargo pants, maupun celana linen.\n\nOversized Boxy Shirt cocok digunakan untuk kuliah, bekerja, hangout, traveling, hingga acara santai dengan tampilan yang rapi namun tetap kasual.",
    material: "Premium Cotton Rayon",
    fit: "Oversized Boxy Fit, S–XL",
    stock: 70,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-m02",
    name: "Wide Leg Corduroy Pants",
    category: "Celana Pria",
    gender: "Pria",
    price: 199000,
    oldPrice: null,
    badge: null,
    rating: 4.8, reviews: 89,
    image: "../images/7.jpg.jpeg",
    colors: ["Khaki", "Dark Charcoal", "Olive Green"],
    short: "Celana wide leg berbahan Soft Premium Corduroy — tekstur khas garis halus, siluet stylish ala Korean Streetwear.",
    desc: "Lengkapi gaya kasual Anda dengan Wide Leg Corduroy Pants, celana panjang bergaya Korean Streetwear yang menggabungkan kenyamanan dan tampilan modern. Menggunakan desain wide leg dengan potongan longgar, celana ini memberikan ruang gerak yang lebih bebas sekaligus menciptakan siluet yang stylish.\n\nTerbuat dari bahan Soft Premium Corduroy, celana ini memiliki tekstur garis halus yang khas, lembut saat disentuh, dan tetap nyaman digunakan sepanjang hari. Potongan high-waist dengan desain lurus membuat celana ini mudah dipadukan dengan berbagai jenis atasan.\n\nWide Leg Corduroy Pants sangat cocok digunakan untuk kuliah, bekerja, hangout, traveling, maupun aktivitas sehari-hari dengan tampilan yang simpel namun tetap fashionable.",
    material: "Soft Premium Corduroy",
    fit: "Wide Leg, High-Waist, S–XXL",
    stock: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "syl-m03",
    name: "Knit Vest",
    category: "Rompi Pria",
    gender: "Pria",
    price: 159000,
    oldPrice: null,
    badge: null,
    rating: 4.6, reviews: 61,
    image: "../images/8.jpg.jpeg",
    colors: ["Cream", "Navy Blue", "Almond Brown"],
    short: "Rompi rajut V-neck bergaya Korean Smart Casual dari Premium Soft Knit — elegan untuk layering atas kemeja atau kaos.",
    desc: "Lengkapi gaya berpakaian Anda dengan Knit Vest, rompi rajut bergaya Korean Smart Casual yang mengutamakan desain sederhana namun tetap elegan. Rompi ini dirancang dengan potongan regular fit dan kerah V-neck, sehingga cocok digunakan sebagai luaran (layering) di atas kemeja, kaos, maupun turtleneck.\n\nDibuat dari Premium Soft Knit, rompi ini memiliki tekstur rajutan yang lembut, ringan, dan nyaman dipakai sepanjang hari. Bahannya tidak terlalu tebal sehingga tetap memberikan sirkulasi udara yang baik, cocok digunakan di berbagai kondisi cuaca.\n\nKnit Vest menjadi pilihan tepat untuk berbagai aktivitas, mulai dari kuliah, bekerja, menghadiri acara semi formal, hingga sekadar hangout dengan tampilan yang rapi dan modern.",
    material: "Premium Soft Knit",
    fit: "Regular Fit, V-Neck, S–XL",
    stock: 55,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-m04",
    name: "Varsity Jacket",
    category: "Jaket Pria",
    gender: "Pria",
    price: 249000,
    oldPrice: 299000,
    badge: "SALE",
    rating: 4.9, reviews: 178,
    image: "../images/9.jpg.jpeg",
    colors: ["Navy Blue & Ivory", "Forest Green & Cream", "Charcoal Grey & Black"],
    short: "Jaket varsity semi oversized bergaya Korean Streetwear — kombinasi Premium Fleece Cotton dan Synthetic Leather.",
    desc: "Tingkatkan penampilan kasual Anda dengan Varsity Jacket, jaket bergaya Korean Streetwear yang menggabungkan desain klasik varsity dengan sentuhan modern. Jaket ini memiliki potongan semi oversized yang memberikan kenyamanan maksimal sekaligus menciptakan tampilan yang trendi dan maskulin.\n\nMenggunakan kombinasi bahan Premium Fleece Cotton pada bagian badan dan Synthetic Leather berkualitas pada bagian lengan, jaket ini terasa hangat namun tetap ringan saat dikenakan. Dilengkapi dengan rib elastis pada kerah, ujung lengan, dan bagian bawah jaket.\n\nVarsity Jacket sangat cocok digunakan untuk aktivitas sehari-hari, kuliah, hangout, traveling, hingga menghadiri acara santai dengan gaya yang modern dan stylish.",
    material: "Premium Fleece Cotton + Synthetic Leather",
    fit: "Semi Oversized, S–XL",
    stock: 32,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "syl-m05",
    name: "Basic Oversized Hoodie",
    category: "Hoodie Pria",
    gender: "Pria",
    price: 219000,
    oldPrice: null,
    badge: "BEST",
    rating: 4.9, reviews: 256,
    image: "../images/10.jpg.jpeg",
    colors: ["Ivory White", "Jet Black", "Heather Grey", "Olive Green", "Navy Blue"],
    short: "Hoodie oversized Premium Cotton Fleece 330 GSM — hangat, nyaman, minimalis. Cocok untuk semua aktivitas harian.",
    desc: "Tampil nyaman dan tetap stylish dengan Basic Oversized Hoodie, hoodie bergaya Korean Casual Streetwear yang dirancang untuk menemani aktivitas sehari-hari. Mengusung desain oversized fit, hoodie ini memberikan kesan santai namun tetap modern.\n\nMenggunakan bahan Premium Cotton Fleece 330 GSM, hoodie ini memiliki bagian dalam yang lembut, mampu memberikan rasa hangat tanpa terasa berat saat digunakan. Dilengkapi dengan kantong depan (kangaroo pocket) dan hoodie bertali serut yang praktis.\n\nBasic Oversized Hoodie sangat cocok digunakan saat cuaca dingin, bepergian, kuliah, hangout, hingga aktivitas santai lainnya. Desainnya yang sederhana membuat hoodie ini mudah dipadukan dengan berbagai jenis bawahan.",
    material: "Premium Cotton Fleece 330 GSM",
    fit: "Oversized Fit, S–XXL",
    stock: 90,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const CATEGORIES = ["Semua", "Wanita", "Pria", "Outerwear Wanita", "Rok Wanita", "Atasan Wanita", "Gaun Wanita", "Kemeja Pria", "Celana Pria", "Rompi Pria", "Jaket Pria", "Hoodie Pria"];

function formatRupiah(v) { return "Rp" + v.toLocaleString("id-ID"); }
function getProductById(id) { return PRODUCTS.find(p => p.id === id); }

/* ── Color Map: nama warna → kode hex CSS ── */
const COLOR_MAP = {
  /* Whites & Creams */
  "ivory cream":        "#F7F3E3",
  "ivory white":        "#F5F5EC",
  "pure white":         "#F9F9F9",
  "off white":          "#F5F0E8",
  "cream":              "#FFF8DC",
  "soft butter":        "#FFF4B8",
  /* Pinks & Purples */
  "soft pink":          "#FFBDCC",
  "cotton candy pink":  "#FFB3D4",
  "lilac":              "#C3A8DC",
  /* Greens */
  "soft mint":          "#B5EAD7",
  "sage green":         "#87AE6A",
  "olive green":        "#6B7A3A",
  "forest green & cream":"#3E7A3E",
  "forest green":       "#3E7A3E",
  /* Neutrals & Greys */
  "grey":               "#A0A0A0",
  "ash grey":           "#B0B8B4",
  "heather grey":       "#A8A8A8",
  "dark charcoal":      "#4A4A4A",
  "charcoal grey & black":"#4A4A4A",
  "charcoal grey":      "#4A4A4A",
  /* Browns */
  "brown":              "#A07040",
  "almond brown":       "#C8A070",
  "espresso brown":     "#5C3020",
  /* Blacks */
  "midnight black":     "#282828",
  "jet black":          "#1A1A1A",
  /* Blues */
  "navy blue":          "#1E3A78",
  "navy blue & ivory":  "#1E3A78",
  /* Tans & Khakis */
  "sand khaki":         "#C8B480",
  "khaki":              "#C2A870",
};

/**
 * Kembalikan hex color untuk nama warna.
 * Jika tidak ada, kembalikan abu netral.
 */
function getColorHex(colorName) {
  const key = colorName.toLowerCase().trim();
  return COLOR_MAP[key] || "#C8C8C8";
}

/**
 * Buat HTML dots warna dari array colors produk.
 * max: jumlah dots maksimum yang ditampilkan.
 */
function colorDotsHTML(colors, max = 4) {
  const shown = colors.slice(0, max);
  const extra = colors.length > max ? colors.length - max : 0;
  const dots = shown.map(c =>
    `<span class="color-swatch" style="background:${getColorHex(c)}" title="${c}"></span>`
  ).join("");
  const plusLabel = extra > 0
    ? `<span style="font-size:.7rem;color:var(--muted);font-weight:700;line-height:1"> +${extra}</span>`
    : "";
  return `<div style="display:flex;flex-wrap:wrap;gap:4px">${dots}</div>`;
}

/* ── Global Modal ── */
let _modalInit = false;
function initGlobalModal() {
  if (_modalInit) return;
  _modalInit = true;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal" id="global-modal" aria-hidden="true">
      <div class="modal-card">
        <button class="modal-close" id="g-modal-close" aria-label="Tutup">✕</button>
        <div class="modal-grid" id="g-modal-body"></div>
      </div>
    </div>
  `);
  
  const m = document.getElementById("global-modal");
  const mb = document.getElementById("g-modal-body");
  const mc = document.getElementById("g-modal-close");
  
  window.closeGlobalModal = () => {
    m.classList.remove("open"); m.setAttribute("aria-hidden", "true");
  };
  mc.addEventListener("click", window.closeGlobalModal);
  m.addEventListener("click", e => { if (e.target === m) window.closeGlobalModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") window.closeGlobalModal(); });
  
  mb.addEventListener("click", e => {
    const b = e.target.closest("[data-modal-add]"); if (!b) return;
    const p = getProductById(b.dataset.modalAdd); if (!p) return;
    
    const activeSizeBtn = mb.querySelector(".size-btn.active");
    const activeColorBtn = mb.querySelector(".color-btn.active");
    if ((p.sizes && p.sizes.length > 0 && !activeSizeBtn) || (p.colors && p.colors.length > 0 && !activeColorBtn)) {
      alert("Silakan pilih ukuran dan warna terlebih dahulu sebelum menambahkan ke keranjang.");
      return;
    }
    
    const size = activeSizeBtn ? activeSizeBtn.textContent.trim() : null;
    const color = activeColorBtn ? activeColorBtn.dataset.color : null;
    
    if (typeof Cart !== "undefined") {
      Cart.add(p.id, 1, size, color);
    }
    if (window.showToast) window.showToast(`${p.name} ditambahkan 🛍️`); 
    if (window.updateCartBadge) window.updateCartBadge(); 
    window.closeGlobalModal();
  });
}

window.openModal = function(id) {
  initGlobalModal();
  const m = document.getElementById("global-modal");
  const mb = document.getElementById("g-modal-body");
  const p = getProductById(id); if (!p) return;
  const d = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  
  const sizeBtns = p.sizes && p.sizes.length
    ? `<div style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:.5rem 0 .4rem">Pilih Ukuran</div>
       <div class="size-picker">${p.sizes.map((s) => `<button class="size-btn">${s}</button>`).join("")}</div>`
    : "";
  const colorChips = p.colors.map((c) =>
    `<button class="color-btn" data-color="${c}" style="display:inline-flex;align-items:center;gap:6px;background:var(--white);border:2px solid var(--cream-3);border-radius:999px;padding:4px 12px;font-size:.75rem;font-weight:600;cursor:pointer;transition:all .2s">
      <span style="width:10px;height:10px;border-radius:50%;background:${getColorHex(c)};border:1px solid rgba(0,0,0,.12);flex-shrink:0"></span>${c}
    </button>`
  ).join("");
  
  const pImage = p.image.includes("../") ? p.image.replace("../images/", "images/") : p.image;
  mb.innerHTML = `
    <img src="${pImage}" alt="${p.name}" />
    <div class="modal-info">
      <span class="product-cat">${p.gender} · ${p.category}</span>
      <h2 style="font-family:var(--sans);font-weight:800;font-size:1.25rem;line-height:1.3">${p.name}</h2>
      <div class="product-price">
        <span class="price-now" style="font-size:1.4rem;font-weight:800">${formatRupiah(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatRupiah(p.oldPrice)}</span><span class="price-disc">-${d}%</span>` : ""}
      </div>
      <div class="product-rating">
        <span class="stars">${"★".repeat(Math.round(p.rating))}</span>
        <span class="rating-count">${p.rating} (${p.reviews} ulasan)</span>
      </div>
      <p class="desc" style="font-size:.88rem;line-height:1.7;color:var(--bark-2)">${p.short}</p>
      ${sizeBtns}
      <div style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:.75rem 0 .4rem">Pilihan Warna</div>
      <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.75rem">${colorChips}</div>
      <table class="spec-table">
        <tr><td>Bahan</td><td>${p.material}</td></tr>
        <tr><td>Ukuran</td><td>${p.fit}</td></tr>
        <tr><td>Stok</td><td>${p.stock} pcs tersedia</td></tr>
      </table>
      <button class="btn btn-primary btn-block" data-modal-add="${p.id}" style="margin-top:.75rem">🛍️ Tambah ke Keranjang</button>
    </div>`;
  
  m.classList.add("open"); m.setAttribute("aria-hidden", "false");
  mb.querySelectorAll(".size-btn").forEach(sb => sb.addEventListener("click", () => {
    mb.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active")); sb.classList.add("active");
  }));
  mb.querySelectorAll(".color-btn").forEach(cb => cb.addEventListener("click", () => {
    mb.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active")); cb.classList.add("active");
  }));
};

/* Canvas placeholder tetap pakai warna lime-sage Syalune */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("error", e => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (!img.src.match(/\/p\d+\.(jpg|png)/)) return;
    const idx = parseInt(img.src.match(/p0?(\d+)/)?.[1] || "1") - 1;
    const pairs = [
      ["#d8edac","#AFD06E"],["#e8f4c8","#8fb84e"],["#f0f8e2","#AFD06E"],
      ["#ddeebb","#7fa840"],["#cce6a0","#AFD06E"],["#e2f0c8","#8fb84e"],
      ["#d4e8a8","#AFD06E"],["#f5fae8","#7fa840"],["#c8dea0","#AFD06E"],["#e8f2d4","#8fb84e"]
    ];
    const [bg, ac] = pairs[idx % pairs.length];
    const c = document.createElement("canvas");
    c.width = 400; c.height = 520;
    const ctx = c.getContext("2d");
    /* gradient background */
    const grad = ctx.createLinearGradient(0, 0, 400, 520);
    grad.addColorStop(0, bg); grad.addColorStop(1, "#f5fae8");
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 400, 520);
    /* clothing shape */
    ctx.fillStyle = ac + "44";
    ctx.beginPath(); ctx.ellipse(200, 230, 120, 170, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = ac + "22";
    ctx.beginPath(); ctx.roundRect(70, 350, 260, 90, 12); ctx.fill();
    /* brand */
    ctx.fillStyle = "#2e2a24";
    ctx.font = "bold 20px 'Nunito Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SYALUNE", 200, 460);
    ctx.font = "13px 'Nunito Sans', sans-serif";
    ctx.fillStyle = "#9c9488";
    ctx.fillText("Korean · Minimal · Streetwear", 200, 482);
    img.src = c.toDataURL("image/png");
  }, true);
});
