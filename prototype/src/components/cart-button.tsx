"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartButton() {
  const { open, count } = useCart();
  return (
    <button
      onClick={open}
      aria-label={`Open cart (${count} items)`}
      className="relative inline-flex items-center rounded-full bg-white/50 p-2.5 text-axis-navy backdrop-blur hover:bg-white/80"
    >
      <ShoppingCart className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-axis-accent px-1 font-mono text-[9px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
