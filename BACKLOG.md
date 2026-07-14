# AXIS Theme Backlog

> Status flow: `todo → planned → in_progress → done`
> Order below follows Jivan's own priority (2026-07-13). Item 2 is the live-or-die item.
> **Kanban mirror (shareable with Dwiki):** Notion → GLHF wiki → "AXIS — Shopify Theme"
> https://app.notion.com/p/AXIS-Shopify-Theme-39de227ef3e781319902c754a7cbfd39

---

## Epic 1: From live prototype to sellable theme

**Goal:** A theme submitted to the Shopify Theme Store, with the prototype reusable as a second product on ThemeForest HTML.

---

#### E1.1 — Send demo to Dwiki, kick off design pass
**Status:** `[done]` | **Estimate:** 1 | **Depends on:** None

Done before this backlog existed. Demo sent, Dwiki confirmed and is actively working on his pass ("lagi nyoba bikin", 2026-07-13). Demo mounted at shopify.goodluckhavefun.space.

**Acceptance Criteria:**
- [x] Dwiki has the link + brief and confirmed he's starting
- [x] Demo publicly reachable at shopify.goodluckhavefun.space

**Follow-up (moved to E1.1b):** agree where design feedback lands (Figma / annotated screenshots) and a rough date for the first pass, so "Dwiki lagi bikin" doesn't quietly become "Dwiki ilang sebulan".

---

#### E1.1b — Dwiki feedback channel & ETA
**Status:** `[todo]` | **Estimate:** 1 | **Depends on:** E1.1

**Acceptance Criteria:**
- [ ] Feedback format agreed and noted here
- [ ] Rough first-pass date noted here

---

#### E1.2 — De-risk the Liquid port (the live-or-die item)
**Status:** `[done]` (2026-07-14) | **Estimate:** 3 | **Depends on:** None (parallel with E1.1)

Shopify partner account + dev store (free). Port ONLY the 3D hero as a Liquid section. Measure Lighthouse. This answers: "can this concept pass Theme Store review at all?"

**Acceptance Criteria:**
- [x] Partner account + dev store live (good-luck-have-fun-cmhwhkyg.myshopify.com)
- [x] Hero (3D drill + scroll behavior) works as a Liquid section with theme editor settings — `theme/sections/hero-story.liquid`, verified rendering in headless Chrome on `shopify theme dev` preview
- [x] Lighthouse mobile measured (2026-07-14, via local dev proxy — production CDN will score higher):
      Performance **52**, A11y 88, FCP 2.0s, LCP 9.9s, TBT 510ms, CLS 0.
      Theme Check: 40 files, 0 offenses.
- [x] **VERDICT: port viable with static fallback + lazy-load.** The concept works in Liquid: schema-driven section, editor toggle, reduced-motion/no-WebGL static fallback all functional. Perf 52 is below the ~60 Theme Store bar but measured on a dev proxy with hot-reload scripts and a 690ms server response; the fix path is known and standard: (1) lazy-load the 714KB three.js bundle after LCP/on idle, (2) poster image so LCP lands on a static element, (3) defer GLB fetch until hero is near viewport. No architectural blocker found. NOT pivoting to ThemeForest-only.

**Follow-up (new item E1.2b):** implement the three perf fixes above, re-measure on a production-like preview (theme push + preview URL, not the dev proxy).

**Porting gotchas logged (for the full port later):**
- esbuild IIFE: three's DRACOLoader uses top-level `new URL(..., import.meta.url)` — must `--define:import.meta.url='"https://cdn.shopify.com/"'` or the bundle dies on load
- `data-enable-3d` does NOT map to `dataset.enable3d` (digit after hyphen) — use `getAttribute`
- Import maps are unreliable on the theme dev proxy (its own injected scripts race them) — bundle instead
- Rebuild command: `npm run build:theme` (in prototype/)

---

#### E1.3 — Asset sourcing
**Status:** `[todo]` | **Estimate:** 2 | **Depends on:** E1.1

Per `docs/02`: consistent product photos from Envato for the demo store, 3D models and bundle assets from CC0 sources.

**Acceptance Criteria:**
- [ ] All 12 demo SKUs have consistent photography
- [ ] Every asset's license verified as safe for a commercial theme demo (no license bombs at review time)
- [ ] Asset sources logged in docs/02

---

#### E1.4 — Prototype polish
**Status:** `[todo]` | **Estimate:** 2 | **Depends on:** E1.2 verdict

Mobile perf + static hero fallback for weak devices. Only worth full effort if E1.2 says the prototype also ships as the ThemeForest HTML product.

**Acceptance Criteria:**
- [ ] Static hero fallback triggers on low-end devices (no 3D jank)
- [ ] Lighthouse mobile 85+ on landing, catalog, PDP
- [ ] No horizontal scroll at 375px anywhere

---

## Epic 2: Full Liquid port (starts after Dwiki's design pass locks)

**Goal:** Complete theme, submission-ready. All items `[backlog]`, owners in the Notion kanban.

- E2.1 — Collection template + native filters (Search & Discovery)
- E2.2 — PDP template: metafields spec table + volume pricing
- E2.3 — Cart drawer: Cart AJAX, PO number (cart attributes), quote CTA
- E2.4 — Predictive search UI
- E2.5 — Header/footer sections + theme settings + design tokens
- E2.6 — Implement Dwiki's design pass across the theme
- E2.7 — Style presets, 2-3 variants (Theme Store requirement) — Dwiki
- E2.8 — A11y + Lighthouse pass on all templates
- E2.9 — Theme docs + support channel (submission requirement) — Jivan
- E2.10 — Theme Store submission — Jivan

---

## Open decisions (blocked on Jivan, mirrored in AGENTS.md)
- [ ] Final theme name
- [ ] Envato non-exclusive vs exclusive
- [ ] Pricing per platform
- [x] Polish-first vs Liquid-first — resolved by E1.2: Liquid port is viable, so both tracks proceed (E1.2b/E1.4 polish + E2 port after design lock)
