import {
  ArrowDownUp,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

const filters = [
  {
    label: "Category",
    options: ["Fasteners", "Bearings", "Electrical", "Safety", "Hydraulics", "Tools"],
    active: false,
  },
  { label: "Material", options: ["Stainless", "Brass", "Copper", "Plastic"], active: true },
  { label: "Size", options: ["M6", "M8", "M10", "M12"], active: false },
  { label: "Grade", options: ["A2", "A4", "8.8", "10.9"], active: false },
  { label: "Availability", options: ["In stock", "Backorder"], active: false },
];

export function ProductGrid() {
  return (
    <section id="catalog" className="bg-white px-4 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col justify-between gap-6 border-b border-axis-line pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-axis-mid">
              Catalog / All categories
            </div>
            <h2 className="text-4xl font-black tracking-tight text-axis-navy md:text-5xl">
              Every SKU, spec-verified.
            </h2>
            <p className="mt-4 max-w-xl text-axis-mid">
              1,300+ items across 24 categories. Filter by material, grade, and
              certification. Bulk pricing at 100/500/1000 units.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-axis-mid">
              <ArrowDownUp className="h-3.5 w-3.5" /> Sort
            </span>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-axis-line px-3 py-1.5 font-medium text-axis-navy hover:bg-axis-bg-soft">
              Best sellers
              <ChevronRight className="h-3 w-3 rotate-90" />
            </button>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          {/* Filter sidebar */}
          <aside className="space-y-6">
            <div className="flex items-center gap-2 border-b border-axis-line pb-3 text-xs font-semibold uppercase tracking-widest text-axis-mid">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
            </div>

            <div>
              <label
                htmlFor="q"
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-axis-mid"
              >
                Search SKU / spec
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-axis-mid" />
                <input
                  id="q"
                  type="text"
                  placeholder="e.g. M8 stainless"
                  className="w-full rounded-md border border-axis-line bg-white py-2 pl-9 pr-3 text-sm placeholder:text-axis-mid focus:border-axis-blue focus:outline-none"
                />
              </div>
            </div>

            {filters.map((f) => (
              <div key={f.label}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-axis-mid">
                  {f.label}
                </div>
                <ul className="space-y-1.5">
                  {f.options.map((opt) => (
                    <li key={opt}>
                      <label className="flex items-center gap-2 text-sm text-axis-ink hover:text-axis-navy">
                        <input
                          type="checkbox"
                          defaultChecked={f.active && opt === f.options[0]}
                          className="h-4 w-4 rounded border-axis-line accent-axis-navy"
                        />
                        {opt}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Product grid */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.sku} product={p} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-12 flex items-center justify-center gap-1 text-sm">
          <button className="inline-flex items-center gap-1 px-3 py-2 text-axis-mid hover:text-axis-navy">
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`h-9 min-w-9 rounded-md px-3 text-sm font-medium ${
                n === 1
                  ? "bg-axis-navy text-white"
                  : "text-axis-mid hover:bg-axis-bg-soft hover:text-axis-navy"
              }`}
            >
              {n}
            </button>
          ))}
          <span className="px-2 text-axis-mid">…</span>
          <button className="h-9 min-w-9 rounded-md px-3 text-sm font-medium text-axis-mid hover:bg-axis-bg-soft hover:text-axis-navy">
            42
          </button>
          <button className="inline-flex items-center gap-1 px-3 py-2 text-axis-navy hover:opacity-70">
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </section>
  );
}
