# AXIS — Component → Platform Map

Prototype (Next.js) sengaja dipecah jadi komponen mandiri supaya satu design system bisa dijual di beberapa platform. Ini petanya.

## Inventori komponen (per Juli 2026)

| Komponen prototype | Shopify (Liquid) | Catatan porting |
|---|---|---|
| `hero-scroll` + `scene-3d` | Section `hero-story.liquid` + web component `<axis-hero-3d>` | GSAP + Three.js vanilla, tanpa React. Model GLB & draco decoder di-bundle di `assets/`. Schema: headline, sub, 4 chapter (title/body), URL model. **Wajib lazy-load + fallback statis mobile** demi Lighthouse |
| `stats-band` | Section `stats.liquid` | Blocks repeatable (value + label), max 6 |
| `featured-products` | Section `featured-collection.liquid` | Native: ambil dari collection picker di schema |
| `manifesto` | Section `rich-text-editorial.liquid` | Blocks paragraf, opsi label sticky |
| `capabilities` | Section `icon-cards.liquid` | Blocks (icon picker + title + body). Icon = sprite SVG Lucide di assets |
| `hub-network` | Section `location-cards.liquid` | Blocks per hub (nama, kota, 3 baris dl) |
| `certifications` | Section `logo-list.liquid` | Standar |
| `cta-band` | Section `cta.liquid` | Standar |
| `product-grid` + filter sidebar | Template `collection.json` + section `main-collection.liquid` | Filter = **Shopify Search & Discovery** native (storefront filtering), bukan buatan sendiri |
| PDP (spec table, bulk tier, hub availability, docs) | Template `product.json` + section `main-product.liquid` | Spec table & docs dari **metafields** (definisi di-ship bareng theme). Bulk tier dari **volume pricing / quantity price breaks** (native B2B) atau metafield untuk non-Plus |
| `qty-picker` (harga turun per tier) | Snippet + JS vanilla `quantity-tier.js` | Baca price breaks dari product JSON |
| `cart-drawer` (tier hint, PO field, quote CTA) | Section `cart-drawer.liquid` + Cart AJAX API | PO number → `cart attributes` (native). "Convert to quote" → link ke form/draft order app |
| `search-overlay` (Cmd+K) | Snippet `predictive-search.liquid` | **Predictive Search API** native Shopify — logic filter kita buang, UI-nya dipertahankan |
| `add-button`, `cart-button` | Snippet + Cart AJAX API | Trivial |
| `reveal` | Util JS `reveal.js` (IntersectionObserver) | Tanpa GSAP biar ringan |
| `nav` | Section `header.liquid` | Menu dari Navigation admin, bukan hardcode |
| `footer` | Section `footer.liquid` | Menu + blocks |

Prinsip porting: **state React → API native Shopify**. Cart context → Cart AJAX. Search filter → Predictive Search. Data produk hardcode → metafields + price breaks. Yang bener-bener dipindahin cuma markup, CSS, dan interaksi.

## Strategi multi-platform (urutan effort)

1. **Shopify Theme Store** — produk utama. Effort terbesar (review ketat, berbulan-bulan), payoff terbesar (traffic organik, harga premium, recurring). Semua keputusan arsitektur tunduk ke syarat ini.
2. **ThemeForest — kategori Shopify** — theme Liquid yang SAMA dijual di Envato. Hampir zero effort tambahan setelah #1 jadi. Kurasi jauh lebih longgar, bisa rilis duluan di sini sambil nunggu review Shopify. Cek exclusivity: pilih akun **non-exclusive** di Envato biar boleh jual di tempat lain (rev share lebih kecil, tapi kebebasan multi-platform kejaga).
3. **ThemeForest — kategori HTML/Site Templates** — prototype Next.js ini sendiri, dirapihin, jadi produk kedua ("AXIS — Industrial Next.js Template"). Komponen udah modular, tinggal dokumentasi. Pasar beda: developer, bukan merchant.
4. **Direct (site GLHF / Gumroad / Lemon Squeezy)** — margin 100%, tapi butuh traffic sendiri. Jalan setelah ada bukti sosial dari #1–#3.

Syarat teknis biar semua jalur tetap terbuka:
- Aset yang di-bundle **harus CC0 / bikinan sendiri** (model drill Poly Haven ✅, icon Lucide ✅, font Inter ✅)
- Zero dependency berbayar/berlisensi aneh di runtime (GSAP sekarang 100% free ✅)
- Design token terpusat (warna, radius, spacing) — re-skin sekali edit
- Copy demo netral bahasa Inggris, gampang diganti merchant

## Belum diputusin (butuh Jivan)

- Harga per platform & positioning harga antar platform
- Exclusive vs non-exclusive di Envato (ngunci strategi multi-platform — rekomendasi: non-exclusive)
- Nama theme final (AXIS itu nama demo store, bukan nama produk theme)
