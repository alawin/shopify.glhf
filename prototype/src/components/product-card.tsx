import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductThumb } from "./product-thumb";
import { AddButton } from "./add-button";

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-axis-line bg-white transition-colors hover:border-axis-navy"
    >
      {/* Product thumb placeholder */}
      <div className="relative aspect-[4/3] bg-axis-bg-soft">
        <div className="absolute inset-0 flex items-center justify-center">
          <ProductThumb sku={p.sku} />
        </div>
        <span
          className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider ${
            p.tag === "In stock"
              ? "bg-emerald-100 text-emerald-800"
              : p.tag === "Low stock"
                ? "bg-amber-100 text-amber-800"
                : "bg-rose-100 text-rose-800"
          }`}
        >
          {p.tag.toUpperCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-axis-mid">
          {p.sku}
        </div>
        <h3 className="mb-2 text-sm font-semibold leading-tight text-axis-navy">
          {p.name}
        </h3>
        <dl className="mb-4 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-axis-mid">
          <div>
            <dt className="uppercase tracking-wider opacity-70">Material</dt>
            <dd className="text-axis-ink">{p.material}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wider opacity-70">Grade</dt>
            <dd className="text-axis-ink">{p.grade}</dd>
          </div>
        </dl>
        <div className="mt-auto flex items-end justify-between border-t border-axis-line pt-3">
          <div>
            <div className="text-lg font-bold text-axis-navy">{p.price}</div>
            <div className="text-[11px] text-axis-mid">
              per unit · qty {p.stock.toLocaleString()}
            </div>
          </div>
          <AddButton sku={p.sku} />
        </div>
      </div>
    </Link>
  );
}
