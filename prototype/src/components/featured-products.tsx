import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function FeaturedProducts() {
  const featured = products.slice(0, 6);
  return (
    <section id="catalog" className="bg-white px-4 py-20 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col justify-between gap-6 border-b border-axis-line pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-axis-mid">
              Catalog / Featured
            </div>
            <h2 className="text-4xl font-black tracking-tight text-axis-navy md:text-5xl">
              Every SKU, spec-verified.
            </h2>
            <p className="mt-4 max-w-xl text-axis-mid">
              1,300+ items across 24 categories. Filter by material, grade, and
              certification. Bulk pricing at 100/500/1000 units.
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-axis-navy px-6 py-3 text-sm font-semibold text-white hover:bg-axis-ink"
          >
            Browse full catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.sku} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
