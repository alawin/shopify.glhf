"use client";

import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart";

// Sits inside a <Link> card — must not trigger navigation
export function AddButton({ sku }: { sku: string }) {
  const { add, open } = useCart();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        add(sku);
        open();
      }}
      className="inline-flex items-center gap-1.5 rounded-md bg-axis-navy px-3 py-2 text-xs font-semibold text-white hover:bg-axis-ink"
    >
      <Plus className="h-3 w-3" />
      Add
    </button>
  );
}
