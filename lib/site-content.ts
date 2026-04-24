export const navItems = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const companyDetails = {
  phoneDisplay: "+1 (281) 745-8884",
  phoneHref: "tel:+12817458884",
  email: "iancuandre@yahoo.com",
  emailHref: "mailto:iancuandre@yahoo.com",
  location: "Houston, TX",
  mission: "Premium JDM and European imports for serious enthusiasts.",
  instagramHref: "https://www.instagram.com/",
  facebookHref: "https://www.facebook.com/",
};

export const footerColumns = [
  {
    title: "Inventory",
    links: [
      { href: "/inventory?category=jdm", label: "JDM Imports" },
      { href: "/inventory?category=european", label: "European Imports" },
      { href: "/inventory?category=new-arrivals", label: "New Arrivals" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#sourcing", label: "Sourcing" },
      { href: "/services#transport", label: "Transport" },
      { href: "/services#financing", label: "Financing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export const utilityLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export type InventoryVehicle = {
  id: string;
  year: string;
  make: string;
  model: string;
  price: string;
  priceValue: number;
  body: string;
  bodyStyle: "Sedan" | "Coupe" | "Wagon";
  chassis: string;
  source: string;
  status: "Available" | "Incoming" | "Sourcing";
  category: "jdm" | "european";
  regionLabel: "JDM" | "European";
  imageClass: string;
  transmission: string;
  mileage: string;
  location: string;
  newArrival: boolean;
  highlights: string[];
  palette: {
    base: string;
    accent: string;
    glow: string;
  };
};

export const inventoryVehicles: InventoryVehicle[] = [
  {
    id: "toyota-mark-ii-tourer-v",
    year: "1998",
    make: "Toyota",
    model: "Mark II Tourer V",
    price: "$31,500",
    priceValue: 31500,
    body: "JZX100 Sedan",
    bodyStyle: "Sedan",
    chassis: "JZX100",
    source: "Japan Auction",
    status: "Available",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-markii",
    transmission: "5-speed manual",
    mileage: "76k km",
    location: "Houston, TX",
    newArrival: true,
    highlights: ["Fresh service inspection", "Turbo inline-six", "Texas title in process"],
    palette: {
      base: "#111827",
      accent: "#b91c1c",
      glow: "#fca5a5",
    },
  },
  {
    id: "toyota-chaser-tourer-v",
    year: "1999",
    make: "Toyota",
    model: "Chaser Tourer V",
    price: "$34,900",
    priceValue: 34900,
    body: "JZX100 Sedan",
    bodyStyle: "Sedan",
    chassis: "JZX100",
    source: "Curated Inventory",
    status: "Available",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-chaser",
    transmission: "5-speed manual",
    mileage: "92k km",
    location: "Houston, TX",
    newArrival: false,
    highlights: ["Buyer-ready interior", "Straight body lines", "Compression-tested before listing"],
    palette: {
      base: "#1f2937",
      accent: "#0f766e",
      glow: "#67e8f9",
    },
  },
  {
    id: "toyota-supra-rz",
    year: "1994",
    make: "Toyota",
    model: "Supra RZ",
    price: "$58,000",
    priceValue: 58000,
    body: "JZA80 Coupe",
    bodyStyle: "Coupe",
    chassis: "JZA80",
    source: "Client Import",
    status: "Sourcing",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-supra",
    transmission: "6-speed manual",
    mileage: "61k km",
    location: "Japan-to-Texas sourcing",
    newArrival: false,
    highlights: ["Factory twin-turbo car", "RZ trim priority", "Inspection reports shared before purchase"],
    palette: {
      base: "#172554",
      accent: "#f97316",
      glow: "#fdba74",
    },
  },
  {
    id: "nissan-silvia-spec-r",
    year: "1999",
    make: "Nissan",
    model: "Silvia Spec-R",
    price: "$29,750",
    priceValue: 29750,
    body: "S15 Coupe",
    bodyStyle: "Coupe",
    chassis: "S15",
    source: "Japan Auction",
    status: "Incoming",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-s15",
    transmission: "6-speed manual",
    mileage: "88k km",
    location: "Port arrival pending",
    newArrival: true,
    highlights: ["Aero package car", "Auction grade documentation", "Arrival ETA shared with serious buyers"],
    palette: {
      base: "#111827",
      accent: "#7c3aed",
      glow: "#c4b5fd",
    },
  },
  {
    id: "nissan-skyline-gtt",
    year: "1996",
    make: "Nissan",
    model: "Skyline GT-T",
    price: "$37,250",
    priceValue: 37250,
    body: "R33 Coupe",
    bodyStyle: "Coupe",
    chassis: "R33",
    source: "Curated Inventory",
    status: "Available",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-skyline",
    transmission: "5-speed manual",
    mileage: "94k km",
    location: "Houston, TX",
    newArrival: false,
    highlights: ["RB25DET drivetrain", "Cold-start video on request", "Dealer-grade detail completed"],
    palette: {
      base: "#0f172a",
      accent: "#2563eb",
      glow: "#93c5fd",
    },
  },
  {
    id: "honda-nsx",
    year: "1991",
    make: "Honda",
    model: "NSX",
    price: "$71,000",
    priceValue: 71000,
    body: "NA1 Coupe",
    bodyStyle: "Coupe",
    chassis: "NA1",
    source: "Private Network",
    status: "Sourcing",
    category: "jdm",
    regionLabel: "JDM",
    imageClass: "gallery-nsx",
    transmission: "5-speed manual",
    mileage: "58k km",
    location: "Private seller network",
    newArrival: false,
    highlights: ["Aluminum body verification", "Service-history screening", "Targeted buyer search only"],
    palette: {
      base: "#3f0d12",
      accent: "#ef4444",
      glow: "#fca5a5",
    },
  },
  {
    id: "bmw-m3-coupe",
    year: "2003",
    make: "BMW",
    model: "M3 Coupe",
    price: "$46,800",
    priceValue: 46800,
    body: "E46 Coupe",
    bodyStyle: "Coupe",
    chassis: "E46",
    source: "Curated Inventory",
    status: "Available",
    category: "european",
    regionLabel: "European",
    imageClass: "gallery-skyline",
    transmission: "6-speed manual",
    mileage: "79k mi",
    location: "Houston, TX",
    newArrival: true,
    highlights: ["Subframe inspection addressed", "Compression and VANOS review", "Clean-title Texas car"],
    palette: {
      base: "#111827",
      accent: "#1d4ed8",
      glow: "#bfdbfe",
    },
  },
  {
    id: "audi-rs4-avant",
    year: "2001",
    make: "Audi",
    model: "RS4 Avant",
    price: "$54,500",
    priceValue: 54500,
    body: "B5 Avant",
    bodyStyle: "Wagon",
    chassis: "B5",
    source: "Private Network",
    status: "Incoming",
    category: "european",
    regionLabel: "European",
    imageClass: "gallery-chaser",
    transmission: "6-speed manual",
    mileage: "112k km",
    location: "EU purchase secured",
    newArrival: true,
    highlights: ["Rare performance wagon", "Importer compliance review", "Buyer photoset available before arrival"],
    palette: {
      base: "#1f2937",
      accent: "#ca8a04",
      glow: "#fde68a",
    },
  },
];

export const services = [
  {
    id: "sourcing",
    title: "Vehicle Sourcing",
    description:
      "Identify the right chassis, trim, condition, and purchase path before money moves.",
  },
  {
    id: "transport",
    title: "Transport Coordination",
    description:
      "Handle auction logistics, shipping, customs, and arrival planning with a clear timeline.",
  },
  {
    id: "financing",
    title: "Financing Guidance",
    description:
      "Help buyers understand next-step financing conversations alongside inventory review and delivery planning.",
  },
];

export const importProcessSteps = [
  {
    step: "01",
    title: "Discovery and Vehicle Brief",
    description:
      "Every import starts with a real conversation about budget, target chassis, transmission, condition tolerance, and delivery goals.",
    milestones: [
      "Confirm your budget range and target models before sourcing starts",
      "Review realistic market pricing, lead times, and availability",
      "Set a sourcing brief so everyone is aligned on the same vehicle standard",
    ],
    documents: [
      "Buyer profile with model, trim, and condition targets",
      "Initial pricing range and sourcing plan",
    ],
    assurance:
      "The goal is to define the right car before asking you to commit to the wrong one.",
  },
  {
    step: "02",
    title: "Shortlist, Inspection, and Approval",
    description:
      "Walltap narrows the search to credible candidates and flags condition, history, and pricing before any purchase decision is made.",
    milestones: [
      "Receive candidate vehicles with photos, notes, and purchase rationale",
      "Review auction sheet details, known flaws, and comparable pricing",
      "Approve the exact vehicle before funds move forward",
    ],
    documents: [
      "Vehicle shortlist with inspection or auction notes",
      "Condition disclosures and approval checkpoint",
    ],
    assurance:
      "No vehicle is treated like a blind buy. You see why it was chosen, what stands out, and what to expect.",
  },
  {
    step: "03",
    title: "Purchase, Export, and Transit",
    description:
      "Once approved, the vehicle moves through purchase, export booking, and shipping with milestone updates instead of vague status messages.",
    milestones: [
      "Secure the vehicle and confirm the purchase record",
      "Coordinate export handling, port scheduling, and transit timing",
      "Share progress updates when the car moves into the next stage",
    ],
    documents: [
      "Purchase confirmation and export booking details",
      "Shipping and transit status checkpoints",
    ],
    assurance:
      "You are not left guessing where the car is or whether the transaction is progressing.",
  },
  {
    step: "04",
    title: "Arrival, Customs, and Final Handoff",
    description:
      "After arrival, Walltap coordinates the next practical steps so the vehicle can move from port to pickup or delivery with fewer surprises.",
    milestones: [
      "Confirm arrival timing and customs-related next steps",
      "Review final logistics for release, transport, and handoff",
      "Coordinate pickup or delivery planning with clear expectations",
    ],
    documents: [
      "Arrival and customs checkpoint communication",
      "Final handoff or delivery plan",
    ],
    assurance:
      "The final stage is handled like a handoff, not a disappearing act after payment.",
  },
];

export const importProcessTrustPoints = [
  "A specific vehicle is approved before purchase, not substituted after the fact.",
  "Known flaws, condition notes, and realistic timing are discussed early.",
  "Key checkpoints are communicated in plain language so buyers know what is happening.",
  "Paperwork and milestone updates are part of the process, not an afterthought.",
];
