"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CornerDownLeft, Search, X } from "lucide-react";
import { products } from "@/lib/products";
import { ProductThumb } from "./product-thumb";

export function SearchButton() {
  const [open, setOpen] = useState(false);

  // Cmd+K / Ctrl+K opens from anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search catalog"
        className="inline-flex items-center gap-2 rounded-full bg-white/50 px-3 py-2.5 text-xs font-semibold tracking-widest text-axis-navy backdrop-blur hover:bg-white/80 md:px-4"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden lg:inline">SEARCH</span>
        <kbd className="hidden rounded border border-axis-line px-1.5 py-0.5 font-mono text-[10px] font-normal text-axis-mid lg:inline">
          ⌘K
        </kbd>
      </button>
      {open && <SearchOverlay onClose={() => setOpen(false)} />}
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 5);
    return products
      .filter((p) =>
        [p.sku, p.name, p.category, p.material, p.grade]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 8);
  }, [query]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-axis-navy/40 backdrop-blur-sm"
      />
      <div className="absolute left-1/2 top-20 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-axis-line px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-axis-mid" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SKU, spec, or category — e.g. M8 stainless"
            className="flex-1 bg-transparent text-sm text-axis-navy placeholder:text-axis-mid focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-1.5 text-axis-mid hover:bg-axis-bg-soft hover:text-axis-navy"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {results.length === 0 ? (
          <div className="px-4 py-10 text-center text-sm text-axis-mid">
            No SKU matches &quot;{query}&quot;. Try a material, size, or
            category.
          </div>
        ) : (
          <ul className="max-h-96 overflow-y-auto py-2">
            {!query.trim() && (
              <li className="px-4 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-axis-mid">
                Popular
              </li>
            )}
            {results.map((p) => (
              <li key={p.sku}>
                <Link
                  href={`/product/${p.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-3 px-4 py-2.5 hover:bg-axis-bg-soft"
                >
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md bg-axis-bg-soft">
                    <ProductThumb sku={p.sku} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[10px] uppercase tracking-widest text-axis-mid">
                      {p.sku} · {p.category}
                    </div>
                    <div className="truncate text-sm font-semibold text-axis-navy">
                      {p.name}
                    </div>
                  </div>
                  <div className="shrink-0 text-sm font-bold text-axis-navy">
                    {p.price}
                  </div>
                  <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-axis-line group-hover:text-axis-mid" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-axis-line bg-axis-bg-soft px-4 py-2 text-[11px] text-axis-mid">
          <kbd className="rounded border border-axis-line bg-white px-1 font-mono">
            esc
          </kbd>{" "}
          to close · searches SKU, name, material, grade, category
        </div>
      </div>
    </div>
  );
}
