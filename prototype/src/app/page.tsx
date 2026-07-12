import { Nav } from "@/components/nav";
import { HeroScroll } from "@/components/hero-scroll";
import { FeaturedProducts } from "@/components/featured-products";
import {
  Capabilities,
  Certifications,
  CtaBand,
  HubNetwork,
  Manifesto,
  StatsBand,
} from "@/components/company-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Nav />
        <HeroScroll />
      </div>
      <StatsBand />
      <Manifesto />
      <Capabilities />
      <FeaturedProducts />
      <HubNetwork />
      <Certifications />
      <CtaBand />
      <Footer />
    </>
  );
}
