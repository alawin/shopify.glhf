import {
  ArrowRight,
  BadgeCheck,
  Braces,
  Cpu,
  Route,
  ScanSearch,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { Reveal } from "./reveal";

const stats = [
  { value: "1,300+", label: "SKUs in catalog" },
  { value: "24", label: "Product categories" },
  { value: "3", label: "Dispatch hubs" },
  { value: "99.2%", label: "On-time in-full" },
  { value: "≤ 4h", label: "Quote turnaround" },
  { value: "8,400", label: "Orders last year" },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI-driven sourcing",
    body: "Spec, quantity, and delivery window route directly to matched suppliers. Our sourcing engine reads datasheets, not sales decks — no RFQ ping-pong.",
  },
  {
    icon: ScanSearch,
    title: "Verification lab",
    body: "Every inbound batch passes dimensional checks, material verification, and certification review before a single unit is listed as in stock.",
  },
  {
    icon: Warehouse,
    title: "Three-hub network",
    body: "Portland, Dallas, and Newark hubs hold live inventory. You see per-hub quantities and lead times on every product page — no phantom stock.",
  },
  {
    icon: Route,
    title: "Route-optimized dispatch",
    body: "Orders consolidate across hubs to cut freight cost. QR-tagged manifests mean every crate arrives labeled, sorted, and audit-ready.",
  },
  {
    icon: Braces,
    title: "Procurement API & punchout",
    body: "Plug AXIS into your ERP. Live pricing, stock, and order status over API — plus punchout catalogs for Coupa, Ariba, and SAP.",
  },
  {
    icon: Users,
    title: "Named account teams",
    body: "No ticket queues. Every account gets a named engineer-backed team that knows your BOM, your sites, and your compliance requirements.",
  },
];

const hubs = [
  {
    name: "Hub West",
    city: "Portland, OR",
    coverage: "West Coast & Mountain",
    leadTime: "Same-day dispatch",
    sqft: "140,000 sq ft",
  },
  {
    name: "Hub Central",
    city: "Dallas, TX",
    coverage: "Central & South",
    leadTime: "1-day dispatch",
    sqft: "210,000 sq ft",
  },
  {
    name: "Hub East",
    city: "Newark, NJ",
    coverage: "East Coast & Northeast",
    leadTime: "2-day dispatch",
    sqft: "115,000 sq ft",
  },
];

const certs = ["ISO 9001:2015", "ISO 14001", "OSHA VPP", "UL Certified Supplier", "C-TPAT"];

export function StatsBand() {
  return (
    <section className="bg-axis-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-14 sm:grid-cols-3 md:px-16 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-4">
            <div className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section id="company" className="bg-white px-4 py-20 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-axis-mid">
            Why AXIS exists
          </div>
          <h2 className="text-4xl font-black tracking-tight text-axis-navy md:text-5xl">
            Forty years of catalogs. Zero tolerance for downtime.
          </h2>
        </div>
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-axis-mid md:text-xl">
            <p>
              Industrial distribution hasn&apos;t changed in forty years: paper
              catalogs turned into PDF catalogs, and phone tag turned into email
              tag. Meanwhile, one missing $4 bearing can idle a
              $40,000-per-hour line.
            </p>
            <p>
              We started AXIS because MRO buyers deserve the same tooling that
              modern software teams take for granted — live data, verified
              inputs, and systems that answer in seconds instead of days.
            </p>
            <p className="font-semibold text-axis-navy">
              Nothing ships until it&apos;s verified. Nothing is listed unless
              it&apos;s real. And nobody waits on hold to find out.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="about" className="bg-axis-bg-soft px-4 py-20 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-axis-mid">
            Capabilities
          </div>
          <h2 className="max-w-2xl text-4xl font-black tracking-tight text-axis-navy md:text-5xl">
            Built like infrastructure, run like a lab.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <article className="h-full rounded-lg border border-axis-line bg-white p-6">
                <c.icon className="h-6 w-6 text-axis-blue" />
                <h3 className="mt-5 text-lg font-bold text-axis-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-axis-mid">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HubNetwork() {
  return (
    <section className="bg-axis-navy px-4 py-20 text-white md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
            Network
          </div>
          <h2 className="max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
            Three hubs. Every time zone covered.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {hubs.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.08}>
              <article className="h-full rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{h.name}</h3>
                  <Truck className="h-5 w-5 text-axis-cyan" />
                </div>
                <div className="mt-1 text-sm text-white/60">{h.city}</div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between border-t border-white/10 pt-3">
                    <dt className="text-white/50">Coverage</dt>
                    <dd className="font-medium">{h.coverage}</dd>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-3">
                    <dt className="text-white/50">Lead time</dt>
                    <dd className="font-medium">{h.leadTime}</dd>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-3">
                    <dt className="text-white/50">Floor</dt>
                    <dd className="font-medium">{h.sqft}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="border-y border-axis-line bg-white px-4 py-12 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {certs.map((c) => (
          <div
            key={c}
            className="flex items-center gap-2 text-sm font-semibold text-axis-mid"
          >
            <BadgeCheck className="h-4 w-4 text-axis-blue" />
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-white px-4 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-axis-navy md:text-6xl">
            Put your MRO spend on rails.
          </h2>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-axis-navy px-8 py-4 text-sm font-semibold text-white hover:bg-axis-ink"
          >
            Contact sales
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
