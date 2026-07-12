"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Minus,
  MessageSquareQuote,
  Plus,
  ShoppingCart,
  TrendingDown,
  X,
} from "lucide-react";
import { useCart } from "@/lib/cart";
import { getBySku, nextTier, tierFor, tierMin, unitPriceFor } from "@/lib/products";
import { ProductThumb } from "./product-thumb";

function money(n: number): string {
  return `$${n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function CartDrawer() {
  const { lines, isOpen, close, setQty, remove } = useCart();

  // Esc closes, body scroll locks while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const resolved = lines
    .map((l) => ({ line: l, product: getBySku(l.sku) }))
    .filter((x) => x.product !== undefined)
    .map((x) => ({ ...x, product: x.product! }));

  const subtotal = resolved.reduce(
    (sum, { line, product }) => sum + unitPriceFor(line.qty, product.bulk) * line.qty,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 transition-[visibility] ${
        isOpen ? "visible" : "invisible delay-300"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-axis-navy/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-axis-line px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-axis-navy">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </div>
          <button
            onClick={close}
            aria-label="Close cart"
            className="rounded-full p-2 text-axis-mid hover:bg-axis-bg-soft hover:text-axis-navy"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {resolved.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingCart className="h-10 w-10 text-axis-line" />
            <p className="text-sm text-axis-mid">
              Cart is empty. Every line you add gets bulk pricing automatically.
            </p>
            <Link
              href="/catalog"
              onClick={close}
              className="inline-flex items-center gap-2 rounded-full bg-axis-navy px-5 py-2.5 text-xs font-semibold tracking-widest text-white hover:bg-axis-ink"
            >
              BROWSE CATALOG
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-axis-line overflow-y-auto px-6">
              {resolved.map(({ line, product }) => {
                const tier = tierFor(line.qty, product.bulk);
                const next = nextTier(line.qty, product.bulk);
                const unit = unitPriceFor(line.qty, product.bulk);
                return (
                  <li key={line.sku} className="flex gap-4 py-5">
                    <Link
                      href={`/product/${product.slug}`}
                      onClick={close}
                      className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-axis-bg-soft"
                    >
                      <ProductThumb sku={product.sku} />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="truncate font-mono text-[10px] uppercase tracking-widest text-axis-mid">
                            {product.sku}
                          </div>
                          <Link
                            href={`/product/${product.slug}`}
                            onClick={close}
                            className="block truncate text-sm font-semibold text-axis-navy hover:underline"
                          >
                            {product.name}
                          </Link>
                        </div>
                        <button
                          onClick={() => remove(line.sku)}
                          aria-label={`Remove ${product.name}`}
                          className="shrink-0 p-1 text-axis-mid hover:text-rose-600"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-md border border-axis-line">
                          <button
                            onClick={() => setQty(line.sku, line.qty - 1)}
                            aria-label="Decrease quantity"
                            className="px-2 py-1.5 text-axis-mid hover:text-axis-navy"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-10 border-x border-axis-line px-2 py-1.5 text-center text-xs font-semibold text-axis-navy">
                            {line.qty}
                          </span>
                          <button
                            onClick={() => setQty(line.sku, line.qty + 1)}
                            aria-label="Increase quantity"
                            className="px-2 py-1.5 text-axis-mid hover:text-axis-navy"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-axis-navy">
                            {money(unit * line.qty)}
                          </div>
                          <div className="text-[11px] text-axis-mid">
                            {money(unit)} / unit
                            {tier.save && (
                              <span className="ml-1 font-semibold text-emerald-700">
                                −{tier.save}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {next && (
                        <div className="mt-2 flex items-center gap-1.5 rounded-md bg-axis-bg-soft px-2.5 py-1.5 text-[11px] text-axis-mid">
                          <TrendingDown className="h-3 w-3 shrink-0 text-emerald-700" />
                          Add {(tierMin(next) - line.qty).toLocaleString()} more
                          to unlock {next.price} / unit
                          {next.save && ` (−${next.save})`}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <footer className="border-t border-axis-line px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-axis-mid">
                  Subtotal · bulk pricing applied
                </span>
                <span className="text-lg font-bold text-axis-navy">
                  {money(subtotal)}
                </span>
              </div>

              <label
                htmlFor="po"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-axis-mid"
              >
                PO number (optional)
              </label>
              <input
                id="po"
                type="text"
                placeholder="e.g. PO-2026-0142"
                className="mb-4 w-full rounded-md border border-axis-line px-3 py-2 text-sm placeholder:text-axis-mid focus:border-axis-blue focus:outline-none"
              />

              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-axis-navy px-6 py-3 text-sm font-semibold text-white hover:bg-axis-ink">
                Checkout
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-axis-line px-6 py-3 text-sm font-semibold text-axis-navy hover:bg-axis-bg-soft">
                <MessageSquareQuote className="h-4 w-4" />
                Convert cart to quote
              </button>
              <p className="mt-3 text-center text-[11px] text-axis-mid">
                Freight calculated at dispatch. Certs available per line on request.
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
