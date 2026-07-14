# AXIS — Shopify Hardware Theme (GLHF × Dwiki)

> GLHF project contract. This is a PRODUCT to sell, not client work. Revenue split: GLHF × Dwiki 50-50.

## Overview
- **Partners:** GLHF (Jivan) × Dwiki (design), 50-50
- **Product:** Premium Shopify theme for hardware/industrial stores. Positioning: "Marketing pages that impress. Storefront that sells. One theme, both engineered." Competing against 12 existing generic Hardware themes.
- **Demo:** LIVE at shopify.goodluckhavefun.space (AXIS is the demo store name, NOT the final product name)
- **Repo:** github.com/alawin/shopify.glhf, auto-deploy Vercel on push to main
- **Status:** prototype live, pre-Liquid port

## Stack

| Layer | Tech | Deploy |
|---|---|---|
| Prototype | Next.js (this repo) | Vercel, auto on main |
| Target product | Shopify Liquid theme (port path being de-risked) | Shopify Theme Store |
| Second product | The Next.js prototype itself | ThemeForest HTML category |

## Distribution path (from docs/03)
Shopify Theme Store (primary) → ThemeForest Shopify category (same theme) → ThemeForest HTML category (Next.js prototype as second product) → direct.

## Key docs
- `docs/01-dwiki-visual-brief.md` — visual direction for Dwiki's design pass
- `docs/02-envato-asset-brief.md` — asset sourcing (Envato product photos for demo, CC0 3D)
- `docs/03-component-platform-map.md` — component to platform mapping

## Built (prototype)
- Scroll-jacked hero + 3D drill (CC0 Poly Haven, 188KB, license-safe to ship)
- Full landing: stats, manifesto, capabilities, featured products, hubs, certs, CTA
- /catalog (12 SKU, filter sidebar) + full PDP (spec table, bulk pricing tiers, per-hub stock, docs)
- B2B cart drawer (bulk tier hints, PO number, convert-to-quote) + Cmd+K search

## Open decisions (Jivan only)
- [ ] Final theme name (AXIS is placeholder)
- [ ] Envato exclusivity: non-exclusive (Japra's earlier advice, keeps multi-platform open) vs exclusive
- [ ] Pricing per platform (Theme Store / ThemeForest / direct) — never assume, ask Jivan
- [ ] Continue prototype polish vs jump to Liquid port

## Rules
1. Dev docs in English.
2. Commit after every completed item; every push to main deploys the live demo, so main stays presentable.
3. The Liquid port question ("can it pass Theme Store review?") is the live-or-die question. De-risk it before polishing anything cosmetic.
4. 50-50 means decisions that affect Dwiki's half (name, pricing, exclusivity) need both partners; Jivan speaks for GLHF.
