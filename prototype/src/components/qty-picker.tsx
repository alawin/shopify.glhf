"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { tierFor, unitPriceFor, type BulkTier } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function QtyPicker({
  sku,
  bulk,
  disabled,
}: {
  sku: string;
  bulk: BulkTier[];
  disabled?: boolean;
}) {
  const [qty, setQty] = useState(1);
  const { add, open } = useCart();
  const tier = tierFor(qty, bulk);
  const unit = unitPriceFor(qty, bulk);
  const total = unit * qty;

  return (
    <div className="space-y-3">
      <div className="flex items-stretch gap-3">
        <div className="flex items-center rounded-md border border-axis-line">
          <button
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2.5 text-axis-mid hover:text-axis-navy disabled:opacity-40"
            disabled={qty <= 1}
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <input
            type="text"
            inputMode="numeric"
            value={qty}
            onChange={(e) => {
              const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
              setQty(Number.isNaN(n) ? 1 : Math.max(1, Math.min(99999, n)));
            }}
            className="w-16 border-x border-axis-line py-2.5 text-center text-sm font-semibold text-axis-navy focus:outline-none"
            aria-label="Quantity"
          />
          <button
            aria-label="Increase quantity"
            onClick={() => setQty((q) => Math.min(99999, q + 1))}
            className="px-3 py-2.5 text-axis-mid hover:text-axis-navy"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          disabled={disabled}
          onClick={() => {
            add(sku, qty);
            open();
          }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-axis-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-axis-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingCart className="h-4 w-4" />
          {disabled ? "Backordered" : "Add to cart"}
        </button>
      </div>

      <div className="flex items-baseline justify-between text-sm">
        <span className="text-axis-mid">
          {tier.price} / unit
          {tier.save && (
            <span className="ml-2 rounded bg-emerald-100 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-800">
              −{tier.save} bulk
            </span>
          )}
        </span>
        <span className="font-bold text-axis-navy">
          ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}
