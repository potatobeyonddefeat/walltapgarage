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

export const inventoryVehicles = [
  {
    year: "1998",
    model: "Toyota Mark II Tourer V",
    price: "$31,500",
    body: "JZX100 Sedan",
    source: "Japan Auction",
    status: "Available",
    imageClass: "gallery-markii",
  },
  {
    year: "1999",
    model: "Toyota Chaser Tourer V",
    price: "$34,900",
    body: "JZX100 Sedan",
    source: "Curated Inventory",
    status: "Available",
    imageClass: "gallery-chaser",
  },
  {
    year: "1994",
    model: "Toyota Supra RZ",
    price: "$58,000",
    body: "JZA80 Coupe",
    source: "Client Import",
    status: "Sourcing",
    imageClass: "gallery-supra",
  },
  {
    year: "1999",
    model: "Nissan Silvia Spec-R",
    price: "$29,750",
    body: "S15 Coupe",
    source: "Japan Auction",
    status: "Available",
    imageClass: "gallery-s15",
  },
  {
    year: "1996",
    model: "Nissan Skyline GT-T",
    price: "$37,250",
    body: "R33 Coupe",
    source: "Curated Inventory",
    status: "Available",
    imageClass: "gallery-skyline",
  },
  {
    year: "1991",
    model: "Honda NSX",
    price: "$71,000",
    body: "NA1 Coupe",
    source: "Private Network",
    status: "Sourcing",
    imageClass: "gallery-nsx",
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
