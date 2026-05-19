export const brand = {
  name: "B2SEW",
  tagline: "Parts to perfection",
  logoSrc: "/1777797491628.png",
  logoAlt: "B2SEW — SEW, parts to perfection",
  logoWidth: 1210,
  logoHeight: 880,
  phoneDisplay: "+91.7710787777",
  phoneHref: "tel:+917710787777",
  address:
    "MUBARIKPUR, NEAR GILL COLONY, MUBARIKPUR, PB 140201",
};

export type SocialPlatform = "youtube" | "instagram" | "whatsapp";

export const socialLinks = [
  {
    id: "youtube" as const,
    label: "YouTube",
    href: "https://www.youtube.com/@b2sew_india",
    external: true,
  },
  {
    id: "instagram" as const,
    label: "Instagram",
    href: "https://www.threads.com/@b2sew_india",
    external: true,
  },
  {
    id: "whatsapp" as const,
    label: "WhatsApp",
    href: "https://wa.me/919878352677",
    external: true,
  },
] as const;

export const heroSlides = [
  {
    src: "/hero/hero-1.png",
    alt: "Modern office reception with illuminated company branding and city views",
  },
  {
    src: "/hero/hero-parts-showcase.png",
    alt: "SEW branded studio display of heavy-duty bolts, excavator seal kit, pins, bucket teeth, and industrial bearings with blue display packaging",
  },
] as const;

export const images = {
  intro: "/about/intro-track-pins-flyer.png",
  welcome: "/hero/sfsf.png",
  sustain: "/rs=w_1535,m.jpg",
};

export const galleryCategories = [
  {
    title: "Track & undercarriage",
    src: "/gallery/track-workshop.png",
    alt: "Heavy equipment fabrication with excavator bucket and robotic welding sparks",
  },
  {
    title: "Ground engaging tools",
    src: "/gallery/ground-engaging-showcase.png",
    alt: "B2SEW display of bucket teeth, bolts, seals, and industrial bearings kits",
  },
  {
    title: "Hydraulic systems",
    src: "/gallery/hydraulic-industrial.png",
    alt: "Large hex bolt with SEW engraving in an industrial machining context",
  },
  {
    title: "Engine & cooling",
    src: "/gallery/bearings-banner.png",
    alt: "B2SEW tapered roller bearings and branded packaging banner",
  },
  {
    title: "Filters & consumables",
    src: "/gallery/fastener-kit.png",
    alt: "B2SEW heavy-duty hinge bolt set in branded packaging labeled 12.9 grade steel",
  },
  {
    title: "Electrical & sensors",
    src: "/gallery/precision-bolt.png",
    alt: "Precision bolt head with B2SEW logo and Parts to perfection tagline engraving",
  },
] as const;

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    title: "Quality control",
    body: "Rigorous inspection and OEM-grade materials for every batch we ship.",
  },
  {
    title: "Global shipping",
    body: "Reliable logistics with documentation that keeps your fleet running.",
  },
  {
    title: "Technical support",
    body: "Expert guidance on fitment, compatibility, and maintenance windows.",
  },
  {
    title: "Fast turnaround",
    body: "Inventory depth and sourcing partners focused on uptime, not delays.",
  },
];

export const stats = [
  { value: 128, suffix: "+", label: "Countries served" },
  { value: 68, suffix: "", label: "Distribution partners" },
  { value: 1854, suffix: "+", label: "Parts catalog SKUs" },
  { value: 12, suffix: "", label: "Quality checkpoints" },
];

export const products = [
  {
    title: "Undercarriage",
    blurb: "Track groups, rollers, idlers, and sprockets built for severe duty cycles.",
    image: "/1777799957951.png",
    href: "#contact",
  },
  {
    title: "Hydraulics",
    blurb: "Precision seals, cylinders, and line assemblies for high-pressure systems.",
    image: "/1777800546859.png",
    href: "#contact",
  },
  {
    title: "Fasteners & wear",
    blurb: "Grades, coatings, and torque-ready hardware for assemblies that hold.",
    image: "/1777997158758.png",
    href: "#contact",
  },
];
