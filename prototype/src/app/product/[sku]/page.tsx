import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ChevronRight,
  Download,
  FileText,
  MessageSquareQuote,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { getProduct, products, warehousesFor } from "@/lib/products";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProductThumb } from "@/components/product-thumb";
import { QtyPicker } from "@/components/qty-picker";

export function generateStaticParams() {
  return products.map((p) => ({ sku: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sku: string }>;
}): Promise<Metadata> {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) return { title: "Not found — AXIS" };
  return {
    title: `${product.name} | ${product.sku} — AXIS`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) notFound();

  const warehouses = warehousesFor(product);
  const related = product.compatible
    .map((s) => products.find((p) => p.sku === s))
    .filter((p) => p !== undefined);

  return (
    <>
      <div className="relative border-b border-axis-line bg-axis-bg-soft">
        <Nav />
        <div className="h-16 md:h-20" />
      </div>

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-16 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-axis-mid">
            <Link href="/catalog" className="hover:text-axis-navy">
              Catalog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>{product.category}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-mono text-axis-navy">{product.sku}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            {/* Left: image + specs */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-axis-line bg-axis-bg-soft">
                <ProductThumb sku={product.sku} />
                <span
                  className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider ${
                    product.tag === "In stock"
                      ? "bg-emerald-100 text-emerald-800"
                      : product.tag === "Low stock"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {product.tag.toUpperCase()}
                </span>
              </div>

              {/* Spec table */}
              <section className="mt-10">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-axis-mid">
                  Technical specifications
                </h2>
                <dl className="divide-y divide-axis-line border-y border-axis-line text-sm">
                  {product.specs.map((s) => (
                    <div
                      key={s.label}
                      className="grid grid-cols-[200px_1fr] gap-4 py-2.5"
                    >
                      <dt className="text-axis-mid">{s.label}</dt>
                      <dd className="font-medium text-axis-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Documents */}
              <section className="mt-10">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-axis-mid">
                  Documentation
                </h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {product.docs.map((d) => (
                    <li key={d.name}>
                      <a
                        href="#datasheet"
                        className="group flex items-center gap-3 rounded-md border border-axis-line px-4 py-3 hover:border-axis-navy"
                      >
                        <FileText className="h-4 w-4 shrink-0 text-axis-mid" />
                        <span className="flex-1 text-sm font-medium text-axis-navy">
                          {d.name}
                          <span className="ml-2 text-xs font-normal text-axis-mid">
                            {d.type} · {d.size}
                          </span>
                        </span>
                        <Download className="h-4 w-4 text-axis-mid transition-transform group-hover:translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right: buy box */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="mb-1 font-mono text-xs uppercase tracking-widest text-axis-mid">
                {product.sku}
              </div>
              <h1 className="text-3xl font-black tracking-tight text-axis-navy md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-axis-mid">
                {product.description}
              </p>

              {/* Bulk pricing */}
              <div className="mt-6 overflow-hidden rounded-lg border border-axis-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-axis-line bg-axis-bg-soft text-left text-[11px] uppercase tracking-widest text-axis-mid">
                      <th className="px-4 py-2 font-semibold">Quantity</th>
                      <th className="px-4 py-2 font-semibold">Unit price</th>
                      <th className="px-4 py-2 text-right font-semibold">Save</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-axis-line">
                    {product.bulk.map((t) => (
                      <tr key={t.qty}>
                        <td className="px-4 py-2 text-axis-ink">{t.qty}</td>
                        <td className="px-4 py-2 font-semibold text-axis-navy">
                          {t.price}
                        </td>
                        <td className="px-4 py-2 text-right text-emerald-700">
                          {t.save ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <QtyPicker
                  sku={product.sku}
                  bulk={product.bulk}
                  disabled={product.stock === 0}
                />
              </div>

              <a
                href="#quote"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-axis-line px-6 py-2.5 text-sm font-semibold text-axis-navy hover:bg-axis-bg-soft"
              >
                <MessageSquareQuote className="h-4 w-4" />
                Request volume quote
              </a>

              {/* Warehouse availability */}
              <div className="mt-8">
                <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-axis-mid">
                  <Truck className="h-3.5 w-3.5" />
                  Availability by hub
                </h2>
                <ul className="divide-y divide-axis-line border-y border-axis-line text-sm">
                  {warehouses.map((w) => (
                    <li
                      key={w.name}
                      className="flex items-center justify-between py-2.5"
                    >
                      <span className="text-axis-ink">{w.name}</span>
                      <span className="text-right">
                        <span
                          className={`font-semibold ${
                            w.qty > 0 ? "text-axis-navy" : "text-rose-600"
                          }`}
                        >
                          {w.qty > 0 ? w.qty.toLocaleString() : "0"}
                        </span>
                        <span className="ml-2 text-xs text-axis-mid">
                          {w.qty > 0 ? w.leadTime : "Backorder"}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-start gap-2.5 rounded-md bg-axis-bg-soft px-4 py-3 text-xs text-axis-mid">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-axis-blue" />
                <span>
                  Spec-verified on intake. Batch traceability and 3.1 material
                  certs available on request for every order.
                </span>
              </div>
            </aside>
          </div>

          {/* Compatible parts */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-axis-line pt-10">
              <h2 className="mb-6 text-xl font-black tracking-tight text-axis-navy">
                Frequently ordered together
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.sku}
                    href={`/product/${p.slug}`}
                    className="group flex items-center gap-4 rounded-lg border border-axis-line p-4 hover:border-axis-navy"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-axis-bg-soft">
                      <ProductThumb sku={p.sku} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-mono text-[10px] uppercase tracking-widest text-axis-mid">
                        {p.sku}
                      </div>
                      <div className="truncate text-sm font-semibold text-axis-navy">
                        {p.name}
                      </div>
                      <div className="text-sm font-bold text-axis-navy">
                        {p.price}
                        <span className="ml-1 text-xs font-normal text-axis-mid">
                          / unit
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-axis-mid transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
