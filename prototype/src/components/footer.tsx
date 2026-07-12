import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-axis-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 md:px-16 md:pt-32">
        <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Ready to route your next order?
        </h2>
        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-axis-navy hover:bg-axis-bg">
          Request a quote
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="mt-16 grid gap-0 border-t border-white/10 md:grid-cols-3">
          <Link
            href="/catalog"
            className="group flex items-center justify-between border-b border-white/10 px-2 py-6 text-white transition-colors duration-300 hover:bg-white hover:text-axis-navy md:border-b-0 md:border-r md:px-6"
          >
            <span className="text-xl font-semibold md:text-2xl">Catalog</span>
            <ArrowUpRight className="h-5 w-5 text-axis-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="/#company"
            className="group flex items-center justify-between border-b border-white/10 px-2 py-6 text-white transition-colors duration-300 hover:bg-white hover:text-axis-navy md:border-b-0 md:border-r md:px-6"
          >
            <span className="text-xl font-semibold md:text-2xl">Company</span>
            <ArrowUpRight className="h-5 w-5 text-axis-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <a
            href="#contact"
            className="group flex items-center justify-between px-2 py-6 text-white transition-colors duration-300 hover:bg-white hover:text-axis-navy md:px-6"
          >
            <span className="text-xl font-semibold md:text-2xl">Contact sales</span>
            <ArrowUpRight className="h-5 w-5 text-axis-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="mt-16 select-none text-center">
          <div className="text-[clamp(4rem,20vw,16rem)] font-black leading-none tracking-tighter">
            AXIS
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} AXIS Industrial Supply. Prototype demo.</div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms
            </a>
            <a href="#compliance" className="hover:text-white">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
