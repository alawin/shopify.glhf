# STATUS & NEXT ACTIONS — baca ini kalau lupa

_Update terakhir: 14 Juli 2026_

## Project
Shopify Hardware/Industrial theme — kolaborasi Jivan × Dwiki (50-50, belum ada perjanjian formal, sengaja).
Positioning: **"Marketing pages that impress. Storefront that sells. One theme, both engineered."**

## Kondisi sekarang
- ✅ Prototype demo **LIVE**: https://shopify.goodluckhavefun.space (Vercel, auto-deploy dari `main`)
- ✅ Repo: https://github.com/alawin/shopify.glhf
- ✅ Isi prototype: hero 3D scroll-jacked, landing lengkap, /catalog (12 SKU), PDP (bulk pricing, stok per hub), cart drawer B2B, search ⌘K
- ❌ Belum ada: design pass Dwiki, port Liquid, aset final, mobile polish

## NEXT ACTION (urutan)
1. **Kirim ke Dwiki** → link live + `docs/01-dwiki-visual-brief.md`. Tunggu design pass dia
2. **De-risk Liquid** → bikin Shopify partner account + dev store (gratis, partners.shopify.com), port hero 3D jadi satu section Liquid, ukur Lighthouse. Ini penentu feasible/nggak buat Theme Store
3. **Aset** → ikutin `docs/02-envato-asset-brief.md` (Envato buat demo doang; yang di-bundle theme wajib CC0)
4. **Polish** → mobile perf, fallback statis hero

## Keputusan yang NUNGGU JIVAN
- [ ] Nama theme final (AXIS cuma nama demo store)
- [ ] Envato exclusive vs **non-exclusive** (saran: non-exclusive biar multi-platform)
- [ ] Harga per platform
- [ ] Lanjut polish prototype dulu vs langsung Liquid

## Jalur distribusi (detail di docs/03)
Shopify Theme Store → ThemeForest (Shopify) → ThemeForest (HTML template) → direct

## Catatan teknis penting
- Dev lokal: `cd prototype && nvm use && PORT=3100 npm run dev` — **JANGAN port 3000** (project lain)
- Model 3D: drill Poly Haven (CC0) di `public/models/drill.glb`
- Risiko #1: hero 3D scroll-jack vs syarat Lighthouse Theme Store — belum terbukti lolos
