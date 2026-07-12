import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";

export const metadata: Metadata = {
  title: "Catalog — AXIS Industrial Supply",
  description:
    "1,300+ spec-verified SKUs across 24 categories. Filter by material, grade, and certification with bulk pricing on every line.",
};

export default function CatalogPage() {
  return (
    <>
      <div className="relative border-b border-axis-line bg-axis-bg-soft">
        <Nav />
        <div className="h-16 md:h-20" />
      </div>
      <ProductGrid />
      <Footer />
    </>
  );
}
