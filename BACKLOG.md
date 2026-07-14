# AXIS Theme Backlog

> Status flow: `todo → planned → in_progress → done`
> Order below follows Jivan's own priority (2026-07-13). Item 2 is the live-or-die item.

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
**Status:** `[in_progress]` (started 2026-07-14) | **Estimate:** 3 | **Depends on:** None (parallel with E1.1)

Shopify partner account + dev store (free). Port ONLY the 3D hero as a Liquid section. Measure Lighthouse. This answers: "can this concept pass Theme Store review at all?"

**Acceptance Criteria:**
- [ ] Partner account + dev store live
- [ ] Hero (3D drill + scroll behavior) works as a Liquid section with theme editor settings
- [ ] Lighthouse mobile measured and recorded here (Theme Store requires strong scores)
- [ ] Verdict written: port viable / port viable with static fallback / not viable, pivot to ThemeForest-only

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

## Open decisions (blocked on Jivan, mirrored in AGENTS.md)
- [ ] Final theme name
- [ ] Envato non-exclusive vs exclusive
- [ ] Pricing per platform
- [ ] Polish-first vs Liquid-first (E1.2 result should decide this one honestly)
