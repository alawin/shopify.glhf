export type BulkTier = { qty: string; price: string; save: string | null };
export type Spec = { label: string; value: string };
export type Warehouse = { name: string; qty: number; leadTime: string };
export type Doc = { name: string; type: string; size: string };

export type Product = {
  sku: string;
  slug: string;
  name: string;
  category: string;
  material: string;
  grade: string;
  price: string;
  stock: number;
  tag: "In stock" | "Low stock" | "Backorder";
  description: string;
  specs: Spec[];
  bulk: BulkTier[];
  docs: Doc[];
  compatible: string[];
};

export const products: Product[] = [
  {
    sku: "FST-M8-A2-25",
    slug: "fst-m8-a2-25",
    name: "Hex Bolt M8 × 25mm",
    category: "Fasteners",
    material: "A2 Stainless",
    grade: "Grade 8.8",
    price: "$0.42",
    stock: 8420,
    tag: "In stock",
    description:
      "DIN 933 full-thread hex bolt in A2 stainless steel. Corrosion-resistant for outdoor, marine-adjacent, and washdown environments. Batch-traceable with 3.1 material certification available per order.",
    specs: [
      { label: "Thread", value: "M8 × 1.25 (coarse)" },
      { label: "Length", value: "25 mm" },
      { label: "Head width (A/F)", value: "13 mm hex" },
      { label: "Standard", value: "DIN 933 / ISO 4017" },
      { label: "Material", value: "A2-70 stainless steel" },
      { label: "Tensile strength", value: "700 MPa min" },
      { label: "Finish", value: "Plain (passivated)" },
      { label: "Thread type", value: "Full thread" },
    ],
    bulk: [
      { qty: "1 – 99", price: "$0.42", save: null },
      { qty: "100 – 499", price: "$0.36", save: "14%" },
      { qty: "500 – 999", price: "$0.31", save: "26%" },
      { qty: "1,000+", price: "$0.27", save: "36%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "180 KB" },
      { name: "Material certificate 3.1", type: "PDF", size: "92 KB" },
      { name: "CAD model", type: "STEP", size: "1.1 MB" },
    ],
    compatible: ["BRG-6205-2RS", "VLV-BLL-1IN-BR"],
  },
  {
    sku: "BRG-6205-2RS",
    slug: "brg-6205-2rs",
    name: "Deep Groove Bearing 6205-2RS",
    category: "Bearings",
    material: "Chrome Steel",
    grade: "ABEC-3",
    price: "$4.80",
    stock: 1230,
    tag: "In stock",
    description:
      "Sealed deep groove ball bearing with rubber contact seals on both sides. Pre-greased for life, maintenance-free operation in conveyors, electric motors, and gearboxes.",
    specs: [
      { label: "Bore (d)", value: "25 mm" },
      { label: "Outer diameter (D)", value: "52 mm" },
      { label: "Width (B)", value: "15 mm" },
      { label: "Seals", value: "2RS — rubber, both sides" },
      { label: "Dynamic load rating", value: "14.8 kN" },
      { label: "Static load rating", value: "7.8 kN" },
      { label: "Limiting speed (grease)", value: "9,000 rpm" },
      { label: "Precision", value: "ABEC-3" },
    ],
    bulk: [
      { qty: "1 – 49", price: "$4.80", save: null },
      { qty: "50 – 199", price: "$4.20", save: "13%" },
      { qty: "200 – 499", price: "$3.75", save: "22%" },
      { qty: "500+", price: "$3.30", save: "31%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "240 KB" },
      { name: "Grease compatibility chart", type: "PDF", size: "88 KB" },
      { name: "CAD model", type: "STEP", size: "2.4 MB" },
    ],
    compatible: ["FST-M8-A2-25", "PLC-M12-4P-3M"],
  },
  {
    sku: "CBL-16AWG-BLK-100",
    slug: "cbl-16awg-blk-100",
    name: "Copper Cable 16AWG 100ft",
    category: "Electrical",
    material: "OFC Copper",
    grade: "UL Listed",
    price: "$28.50",
    stock: 340,
    tag: "In stock",
    description:
      "UL1007-rated stranded hook-up wire in oxygen-free copper. Flexible PVC jacket for panel wiring, control cabinets, and machine internals. Sold in 100 ft spools.",
    specs: [
      { label: "Gauge", value: "16 AWG" },
      { label: "Conductor", value: "OFC stranded 26/0.254" },
      { label: "Insulation", value: "PVC" },
      { label: "Voltage rating", value: "300 V (UL1007)" },
      { label: "Temperature range", value: "−20 °C to +80 °C" },
      { label: "Length", value: "100 ft (30.5 m)" },
      { label: "Jacket color", value: "Black" },
      { label: "Certification", value: "UL Listed, RoHS" },
    ],
    bulk: [
      { qty: "1 – 9", price: "$28.50", save: null },
      { qty: "10 – 24", price: "$25.60", save: "10%" },
      { qty: "25 – 49", price: "$23.90", save: "16%" },
      { qty: "50+", price: "$21.40", save: "25%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "150 KB" },
      { name: "UL certificate", type: "PDF", size: "70 KB" },
    ],
    compatible: ["PLC-M12-4P-3M"],
  },
  {
    sku: "SFT-GLV-L-CUT5",
    slug: "sft-glv-l-cut5",
    name: "Cut-Resistant Gloves L",
    category: "Safety",
    material: "HPPE / Nitrile",
    grade: "ANSI A5",
    price: "$6.90",
    stock: 2100,
    tag: "In stock",
    description:
      "13-gauge HPPE knit shell with sandy nitrile palm coating. ANSI A5 cut protection with high dexterity — sheet metal handling, glass, and blade-adjacent assembly work.",
    specs: [
      { label: "Size", value: "L (EU 9)" },
      { label: "Cut rating", value: "ANSI/ISEA A5" },
      { label: "EN 388 rating", value: "4X43F" },
      { label: "Shell", value: "13-gauge HPPE knit" },
      { label: "Coating", value: "Sandy nitrile palm" },
      { label: "Touchscreen", value: "Yes — thumb & index" },
      { label: "Washable", value: "Up to 5 cycles" },
    ],
    bulk: [
      { qty: "1 – 11 pairs", price: "$6.90", save: null },
      { qty: "12 – 59", price: "$6.10", save: "12%" },
      { qty: "60 – 239", price: "$5.50", save: "20%" },
      { qty: "240+", price: "$4.95", save: "28%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "130 KB" },
      { name: "EN 388 test report", type: "PDF", size: "210 KB" },
    ],
    compatible: ["FST-M8-A2-25"],
  },
  {
    sku: "VLV-BLL-1IN-BR",
    slug: "vlv-bll-1in-br",
    name: 'Ball Valve 1" Brass',
    category: "Valves & Fittings",
    material: "Forged Brass",
    grade: "600 WOG",
    price: "$14.20",
    stock: 92,
    tag: "Low stock",
    description:
      "Full-port forged brass ball valve with PTFE seats and blowout-proof stem. Rated 600 WOG for water, oil, and gas lines. Lever handle with lockout hole.",
    specs: [
      { label: "Connection", value: '1" NPT female × female' },
      { label: "Body", value: "Forged brass, nickel-plated" },
      { label: "Port", value: "Full port" },
      { label: "Pressure rating", value: "600 WOG / 150 WSP" },
      { label: "Seats", value: "PTFE" },
      { label: "Temperature range", value: "−20 °C to +180 °C" },
      { label: "Handle", value: "Steel lever, vinyl grip" },
      { label: "Approvals", value: "WRAS, CE" },
    ],
    bulk: [
      { qty: "1 – 9", price: "$14.20", save: null },
      { qty: "10 – 49", price: "$12.80", save: "10%" },
      { qty: "50 – 99", price: "$11.60", save: "18%" },
      { qty: "100+", price: "$10.50", save: "26%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "190 KB" },
      { name: "Pressure/temp curve", type: "PDF", size: "95 KB" },
      { name: "CAD model", type: "STEP", size: "3.2 MB" },
    ],
    compatible: ["FST-M8-A2-25"],
  },
  {
    sku: "PLC-M12-4P-3M",
    slug: "plc-m12-4p-3m",
    name: "M12 Sensor Cable 4-pin 3m",
    category: "Automation",
    material: "PUR Jacket",
    grade: "IP67",
    price: "$18.00",
    stock: 0,
    tag: "Backorder",
    description:
      "M12 A-coded 4-pin sensor/actuator cable with molded straight connector. Halogen-free PUR jacket resists oils and coolants — drag-chain rated for automation cells.",
    specs: [
      { label: "Connector", value: "M12, A-coded, 4-pin, female straight" },
      { label: "Cable length", value: "3 m" },
      { label: "Jacket", value: "PUR, halogen-free" },
      { label: "Protection", value: "IP67 (mated)" },
      { label: "Rating", value: "250 V / 4 A" },
      { label: "Temperature range", value: "−25 °C to +80 °C" },
      { label: "Drag chain", value: "Yes — 5M flex cycles" },
      { label: "Contacts", value: "Gold-plated brass" },
    ],
    bulk: [
      { qty: "1 – 9", price: "$18.00", save: null },
      { qty: "10 – 24", price: "$16.20", save: "10%" },
      { qty: "25 – 99", price: "$14.90", save: "17%" },
      { qty: "100+", price: "$13.50", save: "25%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "160 KB" },
      { name: "Pinout diagram", type: "PDF", size: "60 KB" },
    ],
    compatible: ["CBL-16AWG-BLK-100", "BRG-6205-2RS"],
  },
  {
    sku: "GRN-FLAP-115-Z60",
    slug: "grn-flap-115-z60",
    name: "Flap Disc 115mm Zirconia G60",
    category: "Abrasives",
    material: "Zirconia Alumina",
    grade: "Type 29",
    price: "$1.85",
    stock: 5600,
    tag: "In stock",
    description:
      "Type 29 conical flap disc with zirconia alumina cloth on a fiberglass backing plate. Grinds and finishes in one pass on steel and stainless — weld blending, deburring, edge chamfering.",
    specs: [
      { label: "Diameter", value: "115 mm (4.5\")" },
      { label: "Bore", value: "22.23 mm" },
      { label: "Grit", value: "G60" },
      { label: "Abrasive", value: "Zirconia alumina" },
      { label: "Shape", value: "Type 29 conical" },
      { label: "Max speed", value: "13,300 rpm" },
      { label: "Backing", value: "Fiberglass" },
    ],
    bulk: [
      { qty: "1 – 24", price: "$1.85", save: null },
      { qty: "25 – 99", price: "$1.62", save: "12%" },
      { qty: "100 – 399", price: "$1.44", save: "22%" },
      { qty: "400+", price: "$1.28", save: "31%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "110 KB" },
      { name: "EN 13743 conformity", type: "PDF", size: "75 KB" },
    ],
    compatible: ["SFT-GLV-L-CUT5", "TLS-DRL-HSS-19"],
  },
  {
    sku: "ELC-CONT-24V-9A",
    slug: "elc-cont-24v-9a",
    name: "IEC Contactor 9A 24VDC",
    category: "Electrical",
    material: "Thermoplastic",
    grade: "IEC 60947",
    price: "$23.40",
    stock: 410,
    tag: "In stock",
    description:
      "3-pole IEC contactor with 24 VDC coil and 1NO auxiliary contact. DIN-rail mount for motor control centers and machine panels. Screw terminals with captive clamps.",
    specs: [
      { label: "Poles", value: "3P (3NO)" },
      { label: "Rated current (AC-3)", value: "9 A" },
      { label: "Coil voltage", value: "24 VDC" },
      { label: "Auxiliary", value: "1NO built-in" },
      { label: "Mounting", value: "35 mm DIN rail" },
      { label: "Standard", value: "IEC 60947-4-1" },
      { label: "Mechanical life", value: "10M operations" },
    ],
    bulk: [
      { qty: "1 – 9", price: "$23.40", save: null },
      { qty: "10 – 24", price: "$21.10", save: "10%" },
      { qty: "25 – 99", price: "$19.20", save: "18%" },
      { qty: "100+", price: "$17.30", save: "26%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "220 KB" },
      { name: "Wiring diagram", type: "PDF", size: "85 KB" },
      { name: "CAD model", type: "STEP", size: "1.8 MB" },
    ],
    compatible: ["CBL-16AWG-BLK-100", "PLC-M12-4P-3M"],
  },
  {
    sku: "PNU-FIT-PU8-14",
    slug: "pnu-fit-pu8-14",
    name: 'Push-In Fitting 8mm × 1/4"',
    category: "Pneumatics",
    material: "Nickel Brass / PBT",
    grade: "10 bar",
    price: "$1.10",
    stock: 6800,
    tag: "In stock",
    description:
      "Straight male push-in fitting for 8 mm OD tube to 1/4\" BSPT thread. Pre-applied sealant, full-flow design. One-touch release collet for fast line changes.",
    specs: [
      { label: "Tube OD", value: "8 mm" },
      { label: "Thread", value: "R 1/4 (BSPT)" },
      { label: "Working pressure", value: "0 – 10 bar" },
      { label: "Vacuum", value: "to −0.9 bar" },
      { label: "Temperature range", value: "−5 °C to +60 °C" },
      { label: "Body", value: "PBT / nickel-plated brass" },
      { label: "Sealant", value: "Pre-applied" },
    ],
    bulk: [
      { qty: "1 – 49", price: "$1.10", save: null },
      { qty: "50 – 199", price: "$0.96", save: "13%" },
      { qty: "200 – 999", price: "$0.85", save: "23%" },
      { qty: "1,000+", price: "$0.74", save: "33%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "95 KB" },
      { name: "CAD model", type: "STEP", size: "0.9 MB" },
    ],
    compatible: ["VLV-BLL-1IN-BR", "HYD-HOSE-2SN-12"],
  },
  {
    sku: "LUB-GRS-EP2-400",
    slug: "lub-grs-ep2-400",
    name: "Lithium Grease EP2 400g",
    category: "Lubricants",
    material: "Lithium Soap",
    grade: "NLGI 2",
    price: "$5.60",
    stock: 950,
    tag: "In stock",
    description:
      "Extreme-pressure lithium grease in a 400 g cartridge for standard grease guns. General-purpose bearing and chassis lubrication with EP additives for shock loads.",
    specs: [
      { label: "Thickener", value: "Lithium soap" },
      { label: "NLGI grade", value: "2" },
      { label: "Base oil viscosity", value: "ISO VG 150" },
      { label: "EP additives", value: "Yes" },
      { label: "Drop point", value: "≥ 190 °C" },
      { label: "Service temp", value: "−30 °C to +120 °C" },
      { label: "Cartridge", value: "400 g DIN 1284" },
    ],
    bulk: [
      { qty: "1 – 11", price: "$5.60", save: null },
      { qty: "12 – 47", price: "$5.00", save: "11%" },
      { qty: "48 – 199", price: "$4.50", save: "20%" },
      { qty: "200+", price: "$4.05", save: "28%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "125 KB" },
      { name: "Safety data sheet (SDS)", type: "PDF", size: "310 KB" },
    ],
    compatible: ["BRG-6205-2RS"],
  },
  {
    sku: "HYD-HOSE-2SN-12",
    slug: "hyd-hose-2sn-12",
    name: 'Hydraulic Hose 2SN 1/2" (per m)',
    category: "Hydraulics",
    material: "NBR / 2-Wire Braid",
    grade: "EN 853 2SN",
    price: "$8.75",
    stock: 260,
    tag: "Low stock",
    description:
      "Two-wire braided hydraulic hose, 1/2\" bore, sold per meter. Oil-resistant NBR tube with abrasion-resistant cover. Crimping service available per order — add fitting SKUs at checkout.",
    specs: [
      { label: "Bore (DN)", value: "12.7 mm (1/2\")" },
      { label: "Standard", value: "EN 853 2SN / SAE 100R2AT" },
      { label: "Working pressure", value: "275 bar" },
      { label: "Burst pressure", value: "1,100 bar" },
      { label: "Reinforcement", value: "2-wire braid" },
      { label: "Temperature range", value: "−40 °C to +100 °C" },
      { label: "Min bend radius", value: "180 mm" },
    ],
    bulk: [
      { qty: "1 – 19 m", price: "$8.75", save: null },
      { qty: "20 – 49 m", price: "$7.90", save: "10%" },
      { qty: "50 – 199 m", price: "$7.20", save: "18%" },
      { qty: "200+ m", price: "$6.50", save: "26%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "170 KB" },
      { name: "Crimp spec chart", type: "PDF", size: "140 KB" },
    ],
    compatible: ["PNU-FIT-PU8-14", "VLV-BLL-1IN-BR"],
  },
  {
    sku: "TLS-DRL-HSS-19",
    slug: "tls-drl-hss-19",
    name: "HSS-G Drill Bit Set 19pc",
    category: "Tools",
    material: "HSS-G",
    grade: "DIN 338",
    price: "$32.00",
    stock: 180,
    tag: "In stock",
    description:
      "19-piece ground HSS twist drill set, 1–10 mm in 0.5 mm steps, in an indexed steel case. 135° split point for reduced walking on steel, stainless, and non-ferrous.",
    specs: [
      { label: "Pieces", value: "19 (1 – 10 mm × 0.5)" },
      { label: "Material", value: "HSS, fully ground" },
      { label: "Standard", value: "DIN 338" },
      { label: "Point", value: "135° split point" },
      { label: "Shank", value: "Cylindrical" },
      { label: "Case", value: "Indexed steel" },
      { label: "Application", value: "Steel, stainless, alu" },
    ],
    bulk: [
      { qty: "1 – 4", price: "$32.00", save: null },
      { qty: "5 – 19", price: "$28.80", save: "10%" },
      { qty: "20 – 49", price: "$26.20", save: "18%" },
      { qty: "50+", price: "$23.70", save: "26%" },
    ],
    docs: [
      { name: "Technical datasheet", type: "PDF", size: "105 KB" },
      { name: "Speed & feed chart", type: "PDF", size: "90 KB" },
    ],
    compatible: ["GRN-FLAP-115-Z60", "LUB-GRS-EP2-400"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug.toLowerCase());
}

export function getBySku(sku: string): Product | undefined {
  return products.find((p) => p.sku === sku);
}

// Tier qty strings look like "1 – 99", "100 – 499", "1,000+"
export function tierMin(t: BulkTier): number {
  const n = parseInt(t.qty.replace(/,/g, ""), 10);
  return Number.isNaN(n) ? 1 : n;
}

export function tierFor(qty: number, bulk: BulkTier[]): BulkTier {
  let match = bulk[0];
  for (const t of bulk) {
    if (qty >= tierMin(t)) match = t;
  }
  return match;
}

export function unitPriceFor(qty: number, bulk: BulkTier[]): number {
  return parseFloat(tierFor(qty, bulk).price.replace("$", ""));
}

// Next better tier the buyer hasn't reached yet (for "add N more" hints)
export function nextTier(qty: number, bulk: BulkTier[]): BulkTier | undefined {
  return bulk.find((t) => tierMin(t) > qty);
}

// Deterministic warehouse split so PDP shows per-hub availability
export function warehousesFor(p: Product): Warehouse[] {
  return [
    { name: "Hub West — Portland", qty: Math.floor(p.stock * 0.5), leadTime: "Same day" },
    { name: "Hub Central — Dallas", qty: Math.floor(p.stock * 0.3), leadTime: "1 day" },
    { name: "Hub East — Newark", qty: p.stock - Math.floor(p.stock * 0.5) - Math.floor(p.stock * 0.3), leadTime: "2 days" },
  ];
}
