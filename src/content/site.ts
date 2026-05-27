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
    title: "Undercarriage parts",
    src: "/categories/undercarriage-parts.png",
    alt: "Yellow track chain, idler, sprocket, roller, and recoil spring undercarriage spare parts with SEW branding",
  },
  {
    title: "Frames and body parts",
    src: "/categories/frames-and-body-parts.png",
    alt: "Excavator H-link structural body part with engraved SEW logo and Parts to perfection tagline",
  },
  {
    title: "Hydraulic systems",
    src: "/categories/hydraulic-systems.png",
    alt: "Three B2SEW hydraulic pumps and motors on marble with power density, lifespan, and OEM quality callouts",
  },
  {
    title: "Ground engaging tools",
    src: "/categories/ground-engaging-tools.png",
    alt: "B2SEW bucket tooth with embossed branding and benefits including wear resistance and self-sharpening tip",
  },
  {
    title: "Filters and consumables",
    src: "/categories/filters-and-consumables.png",
    alt: "SEW hydraulic filter on a workshop bench with filter benefits panel for duration, filtration, and OE-matched fit",
  },
  {
    title: "Electrical parts",
    src: "/categories/electrical-parts.jpg",
    alt: "Assortment of electrical parts for heavy equipment including ECUs, displays, starter motor, sensors, and harnesses",
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
    image: "/categories/undercarriage-parts.png",
    href: "#contact",
  },
  {
    title: "Hydraulics",
    blurb: "Precision seals, cylinders, and line assemblies for high-pressure systems.",
    image: "/categories/hydraulic-systems.png",
    href: "#contact",
  },
  {
    title: "Ground engaging",
    blurb: "Bucket teeth and wear parts engineered for cutting force, fitment, and uptime in abrasive conditions.",
    image: "/categories/ground-engaging-tools.png",
    href: "#contact",
  },
];
