import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { SearchButton } from "./search-overlay";
import { CartButton } from "./cart-button";

export function Nav() {
  return (
    <nav className="pointer-events-auto absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
      <div className="flex items-center gap-6 text-xs font-semibold tracking-widest text-axis-navy md:gap-10">
        <Link href="/catalog" className="hover:opacity-70">
          CATALOG
        </Link>
        <Link href="/#company" className="hidden hover:opacity-70 sm:inline">
          COMPANY
        </Link>
      </div>

      <Link
        href="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black tracking-[0.2em] text-axis-navy"
      >
        AXIS
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <SearchButton />
        <CartButton />
        <a
          href="#quote"
          className="hidden rounded-full bg-white/50 px-4 py-2 text-xs font-semibold tracking-widest text-axis-navy backdrop-blur hover:bg-white/80 lg:inline-flex md:px-5 md:py-3"
        >
          QUOTE
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-axis-navy px-4 py-2 text-xs font-semibold tracking-widest text-white hover:bg-axis-ink md:px-5 md:py-3"
        >
          CONTACT SALES
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button
          aria-label="Open menu"
          className="rounded-full bg-white/50 p-2.5 text-axis-navy backdrop-blur hover:bg-white/80 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
