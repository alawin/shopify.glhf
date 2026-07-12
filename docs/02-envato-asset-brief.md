# AXIS — Asset Sourcing Brief (Envato & alternatives)

Panduan buat sourcing aset visual demo store + theme. Target pembaca: Jivan & Dwiki.

## ⚠️ Lisensi dulu, sebelum download apa pun

Ini penting dan sering kelewat:

- **Envato Elements license itu per-project registration** — sah dipakai untuk **demo store** kita (screenshot, preview theme, marketing).
- **TAPI aset yang di-bundle di dalam theme yang dijual ulang** (misal image placeholder yang ikut ke-ship di zip theme) itu **redistribusi** — TIDAK dicover lisensi Elements. Shopify Theme Store juga mensyaratkan kita punya hak distribusinya.
- Solusi: aset yang ikut ke-ship di theme harus dari sumber CC0 / public domain (Unsplash license, Pexels, Poly Haven untuk 3D/HDRI) atau bikinan sendiri (Dwiki). Envato hanya untuk **demo store & preview**, bukan isi zip theme.

## 1. Model 3D hero (prioritas paling tinggi)

Sneaker sekarang cuma placeholder — gak nyambung sama industrial supply.

- **Objek yang dicari**: power drill / impact driver, ball bearing assembly, ball valve, gear cluster, PLC module. Satu objek "hero" cukup — yang siluetnya menarik dari banyak sudut (drill paling fotogenik).
- **Format**: `.glb` atau `.gltf` (langsung), atau `.fbx`/`.obj` (kita convert). Hindari `.max`/`.blend`-only kecuali mau buka Blender.
- **Poly budget**: ≤ 150k triangles sebelum optimasi; setelah Draco compress target file **≤ 2 MB**.
- **Tekstur**: PBR (base color + roughness + metalness + normal), masing-masing ≤ 2048×2048. Kalau modelnya untextured malah lebih gampang — kita kasih material matte seragam kayak sekarang, estetikanya lebih clean.
- **Sumber**: Envato 3D koleksinya tipis untuk industrial. Lebih bagus: **Sketchfab** (filter: downloadable, CC-BY/CC0), **Poly Haven** (CC0, aman di-ship), **CGTrader**.

## 2. Foto produk (catalog grid + PDP)

- **Style**: satu objek, background putih/abu netral seragam (#f2f5fa biar nyatu sama `axis-bg-soft`), pencahayaan soft, tanpa props.
- **Rasio**: 4:3 (grid card sekarang `aspect-[4/3]`). Ambil master 1:1 kalau ragu, crop belakangan.
- **Resolusi master**: minimal 1600×1200. Serve-nya nanti via `next/image` → WebP/AVIF otomatis, jadi simpan master PNG/JPG kualitas tinggi.
- **Budget per image (served)**: 60–150 KB.
- **Keyword Envato**: `hex bolt isolated`, `ball bearing white background`, `industrial valve product shot`, `safety gloves isolated`, `cable spool isolated`, `M12 connector`.
- **Konsistensi > kualitas individual**: 6 foto dari 6 fotografer beda bakal keliatan murahan. Cari satu bundle/series dari kontributor yang sama, atau foto yang tone-nya seragam terus di-grade bareng.

## 3. Imagery marketing (hero section lain, capabilities, about)

- **Subjek**: warehouse aisle, forklift, CNC machining close-up, logistics/loading dock, worker with tablet. Tone: biru-abu dingin, bukan orange-teal stock-photo cliché.
- **Rasio**: 16:9 atau 21:9 untuk full-bleed band; master ≥ 2560px lebar.
- **Keyword**: `modern warehouse interior`, `cnc machining sparks`, `distribution center aerial`, `industrial worker tablet`.
- **Hindari**: foto orang tersenyum ke kamera sambil pegang helm. Semua orang tahu itu stock photo.

## 4. Tekstur & background pendukung

- Blueprint grid, noise halus, brushed metal — opsional, jangan ramai. Kalau perlu, bikin sendiri di CSS/SVG (gratis, ringan, dan legal buat di-ship).

## 5. Yang TIDAK perlu dibeli

- **Icons**: sudah pakai Lucide (open source, ISC license — aman di-ship).
- **Font**: Inter (OFL — aman di-ship).
- **Ilustrasi/lottie**: skip, gak sesuai estetika utility.

## Ringkasan spend

Kalau langganan Envato Elements sudah ada, tambahan biaya = Rp 0 untuk fase demo. Model 3D kemungkinan dari Sketchfab/Poly Haven (gratis). Belum ada kebutuhan beli lisensi extended sampai kita beneran bundle aset ke theme zip — dan untuk itu strateginya pakai CC0.
