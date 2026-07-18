export const site = {
  name: "Pezzente Services",
  shortName: "Pezzente",
  established: 2021,
  phone: "860-929-8262",
  phoneHref: "tel:8609298262",
  email: "Pezzenteservices@gmail.com",
  emailHref: "mailto:Pezzenteservices@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61573995129722",
  // Recurring maintenance is the core business and stays close to home;
  // larger one-time projects range further into surrounding towns.
  serviceArea: "Glastonbury, CT and the surrounding Hartford County towns",
  primaryServiceArea: "Glastonbury & nearby neighborhoods",
  extendedServiceArea: "surrounding Hartford County towns",
  addressLine: "Glastonbury, CT",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
  tier: "maintenance" | "project";
};

export const services: Service[] = [
  // --- Recurring maintenance: the core of the business ---
  {
    id: "lawn-mowing",
    title: "Lawn Mowing & Care",
    description:
      "Weekly lawn mowing and turf care that keeps your grass dense, even, and healthy from the first cut of spring through fall.",
    icon: "Sprout",
    bullets: ["Weekly mowing & edging", "Aeration & overseeding", "Fertilization-friendly programs", "New lawn installation"],
    tier: "maintenance",
  },
  {
    id: "garden-shrub-maintenance",
    title: "Garden & Shrub Maintenance",
    description:
      "Ongoing garden maintenance and shrub trimming that keeps beds tidy and plantings healthy all season, not just after a one-time visit.",
    icon: "Scissors",
    bullets: ["Weekly garden upkeep", "Shrub & hedge trimming", "Pruning & deadheading", "Seasonal color refresh"],
    tier: "maintenance",
  },
  {
    id: "mulching",
    title: "Mulching & Bed Care",
    description:
      "Fresh mulch and crisp bed edges installed each season to protect your plantings and keep curb appeal sharp.",
    icon: "Layers",
    bullets: ["Fresh mulch installation", "Crisp bed edging", "Weed prevention", "Color options"],
    tier: "maintenance",
  },
  {
    id: "seasonal-cleanups",
    title: "Seasonal Clean-Ups",
    description:
      "Thorough spring and fall clean-ups that clear the clutter and reset your property for the season ahead.",
    icon: "Wind",
    bullets: ["Spring clean-up", "Fall leaf removal", "Bed edging & tidy-up", "Debris haul-away"],
    tier: "maintenance",
  },
  {
    id: "residential-maintenance",
    title: "Residential Maintenance Plans",
    description:
      "A recurring maintenance plan built around your property — the same crew, on the same schedule, every time.",
    icon: "Home",
    bullets: ["Weekly or biweekly visits", "Consistent crew & schedule", "Flexible seasonal add-ons", "Clear, upfront pricing"],
    tier: "maintenance",
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Property Maintenance",
    description:
      "Scheduled grounds care for offices, retail properties, and HOAs that keeps shared spaces consistently presentable.",
    icon: "Building2",
    bullets: ["Scheduled grounds upkeep", "HOA & association accounts", "Curb-appeal focused", "Reliable, professional crews"],
    tier: "maintenance",
  },
  // --- Larger, less frequent projects ---
  {
    id: "garden-installations",
    title: "Garden Installations & Design",
    description:
      "New garden beds and planting designs for homeowners ready to add color, structure, or curb appeal to their property.",
    icon: "Flower2",
    bullets: ["Custom planting design", "New garden beds", "Plant & shrub selection"],
    tier: "project",
  },
  {
    id: "yard-restorations",
    title: "Yard Restorations & Major Clean-Outs",
    description:
      "For overgrown or neglected properties, a full reset — brush clearing, junk removal, and a clean slate to build from.",
    icon: "Trees",
    bullets: ["Overgrown property clean-outs", "Brush & debris clearing", "Junk & yard waste removal", "Full yard resets"],
    tier: "project",
  },
  {
    id: "hardscape-projects",
    title: "Hardscape & Landscape Construction",
    description:
      "Paver patios, walkways, and retaining walls built on proper base and drainage — for property owners planning a bigger transformation.",
    icon: "BrickWall",
    bullets: ["Paver Patios", "Retaining walls & steps", "Fire pits & seat walls", "Drainage & grading"],
    tier: "project",
  },
];

export type GalleryCategory =
  | "All"
  | "Patios"
  | "Retaining Walls"
  | "Outdoor Living"
  | "Garden Design"
  | "Lawn Care";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  tag: string;
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-patio-wall-01.jpg", alt: "Paver patio with a natural stone seat wall bordering a lawn", category: "Patios", tag: "Paver Patio — Seat Wall", width: 1440, height: 1920 },
  { src: "/images/gallery-firepit-01.jpg", alt: "Paver patio with a built-in fire pit and string lighting for evening entertaining", category: "Outdoor Living", tag: "Fire Pit Patio", width: 1920, height: 1440 },
  { src: "/images/gallery-pool-deck-01.jpg", alt: "Paver pool deck surrounding an inground pool", category: "Outdoor Living", tag: "Pool Deck Pavers", width: 1440, height: 1920 },
  { src: "/images/gallery-retaining-wall-01.jpg", alt: "Natural stone retaining wall with integrated steps", category: "Retaining Walls", tag: "Stone Retaining Wall", width: 1440, height: 1920 },
  { src: "/images/gallery-garden-bed-01.jpg", alt: "Foundation garden bed with mulch and mixed shrubs along a front walkway", category: "Garden Design", tag: "Foundation Planting", width: 1920, height: 1080 },
  { src: "/images/gallery-walkway-01.jpg", alt: "Paver walkway leading through a landscaped front yard", category: "Patios", tag: "Paver Walkway", width: 1920, height: 1440 },
  { src: "/images/gallery-firepit-02.jpg", alt: "Backyard patio with fire pit and stone seat wall", category: "Outdoor Living", tag: "Fire Pit & Seat Wall", width: 1440, height: 1920 },
  { src: "/images/gallery-retaining-wall-02.jpg", alt: "Tiered stone retaining wall on a sloped property", category: "Retaining Walls", tag: "Tiered Stone Wall", width: 1440, height: 1920 },
  { src: "/images/gallery-garden-bed-02.jpg", alt: "Mixed perennial and shrub garden bed with fresh mulch", category: "Garden Design", tag: "Perennial Garden Bed", width: 1920, height: 1440 },
  { src: "/images/gallery-walkway-steps-01.jpg", alt: "Paver walkway with stone steps connecting two levels of a yard", category: "Patios", tag: "Paver Steps", width: 1440, height: 1920 },
  { src: "/images/gallery-pool-deck-02.jpg", alt: "Wide paver pool deck with patterned border", category: "Outdoor Living", tag: "Pool Deck Pavers", width: 1440, height: 1920 },
  { src: "/images/gallery-retaining-wall-03.jpg", alt: "Block retaining wall holding back a raised planting bed", category: "Retaining Walls", tag: "Segmental Block Wall", width: 1920, height: 1440 },
  { src: "/images/gallery-garden-bed-03.jpg", alt: "Mulched garden bed with layered shrub plantings", category: "Garden Design", tag: "Layered Shrub Bed", width: 1440, height: 1920 },
  { src: "/images/gallery-patio-02.jpg", alt: "Paver patio with covered pergola seating area", category: "Patios", tag: "Patio & Pergola", width: 1440, height: 1920 },
  { src: "/images/gallery-walkway-02.jpg", alt: "Curved paver walkway bordered by planting beds", category: "Patios", tag: "Paver Walkway", width: 1920, height: 1440 },
  { src: "/images/gallery-lawn-01.jpg", alt: "Freshly installed lawn with sharp mowing lines", category: "Lawn Care", tag: "Lawn Installation", width: 1440, height: 1920 },
  { src: "/images/gallery-retaining-wall-04.jpg", alt: "Natural stone retaining wall steps set into a wooded hillside", category: "Retaining Walls", tag: "Stone Hillside Steps", width: 1440, height: 1920 },
  { src: "/images/gallery-patio-03.jpg", alt: "Paver patio with clean geometric layout", category: "Patios", tag: "Paver Patio", width: 1440, height: 1920 },
  { src: "/images/gallery-garden-bed-04.jpg", alt: "Foundation planting bed with fresh mulch along a home's exterior", category: "Garden Design", tag: "Foundation Planting", width: 1440, height: 1920 },
  { src: "/images/gallery-patio-steps-01.jpg", alt: "Paver patio with integrated stone steps", category: "Patios", tag: "Patio & Steps", width: 1440, height: 1920 },
  { src: "/images/gallery-driveway-01.jpg", alt: "Paver driveway with clean border edging", category: "Patios", tag: "Paver Driveway", width: 1187, height: 842 },
  { src: "/images/gallery-driveway-02.jpg", alt: "Wide paver driveway installation", category: "Patios", tag: "Paver Driveway", width: 1920, height: 1440 },
  { src: "/images/gallery-patio-furniture-01.jpg", alt: "Paver patio furnished with outdoor seating", category: "Outdoor Living", tag: "Patio Living Space", width: 1440, height: 1920 },
  { src: "/images/gallery-patio-aerial-01.jpg", alt: "Aerial view of a paver patio installation", category: "Patios", tag: "Paver Patio", width: 1920, height: 1440 },
  { src: "/images/gallery-lawn-02.jpg", alt: "Well-maintained lawn with crisp bed edges", category: "Lawn Care", tag: "Lawn Maintenance", width: 1080, height: 1920 },
  { src: "/images/gallery-pool-deck-03.jpg", alt: "Paver pool deck with surrounding landscaping", category: "Outdoor Living", tag: "Pool Deck Pavers", width: 1440, height: 1920 },
  { src: "/images/gallery-walkway-evening-01.jpg", alt: "Stone walkway and steps lit by a lantern-style post light at dusk", category: "Patios", tag: "Evening Walkway", width: 1440, height: 1920 },
  {
  src: "/images/IMG_5997.jpeg",
  alt: "Backyard landscaping with pool, retaining walls, and manicured lawn",
  category: "Outdoor Living",
  tag: "Backyard Landscape",
  width: 1440,
  height: 1920,
},
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Patios",
  "Retaining Walls",
  "Outdoor Living",
  "Garden Design",
  "Lawn Care",
];

export type WhyUsItem = {
  title: string;
  description: string;
  icon: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Locally Owned & Operated",
    description: "Based right in Glastonbury — not a franchise, not a call center. You'll always know who's showing up to mow, trim, or maintain your property.",
    icon: "MapPin",
  },
  {
    title: "Free, No-Pressure Estimates",
    description: "We'll walk the property with you, talk through a maintenance plan that fits, and put together a clear estimate.",
    icon: "ClipboardCheck",
  },
  {
    title: "Built for New England Seasons",
    description: "From spring green-up to fall clean-up, every lawn, garden, and bed is cared for with our Connecticut seasons in mind.",
    icon: "Snowflake",
  },
  {
    title: "Reliable Communication",
    description: "You'll know your schedule, your scope, and your costs upfront — no guessing games, no surprise visits.",
    icon: "MessagesSquare",
  },
  {
    title: "Consistent, Careful Work",
    description: "Clean edges, tidy beds, and a job site left better than we found it — on every recurring visit, not just the first one.",
    icon: "HardHat",
  },
  {
    title: "One Team, Start to Finish",
    description: "From weekly maintenance to a larger project down the road, the same crew stays accountable to the result.",
    icon: "Users",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

// Placeholder testimonials — swap in real Google/Facebook reviews before launch.
export const testimonials: Testimonial[] = [
  {
    name: "Tom H.",
    location: "Glastonbury, CT",
    rating: 5,
    quote: "Our lawn has never looked better. They show up every week like clockwork.",
  },
  {
    name: "Linda P.",
    location: "Glastonbury, CT",
    rating: 5,
    quote: "The gardens always look amazing. One less thing I have to think about.",
  },
  {
    name: "Rich D.",
    location: "South Glastonbury, CT",
    rating: 5,
    quote: "Very reliable and always on time. Can't really ask for more than that.",
  },
  {
    name: "Property Manager",
    location: "Commercial account, Glastonbury, CT",
    rating: 5,
    quote:
      "Our property always looks clean and put together for tenants and visitors. Pezzente handles the whole grounds schedule so we don't have to think about it.",
  },
  {
    name: "Priya S.",
    location: "Manchester, CT",
    rating: 5,
    quote: "After our garden installation, the whole front of the house looks beautiful. Great design sense.",
  },
  {
    name: "Karen T.",
    location: "Glastonbury, CT",
    rating: 5,
    quote: "Highly recommend them for lawn maintenance — easy to schedule, easy to reach, and it shows in the results.",
  },
];

// Hero stats — value is the large display line, label is the smaller line beneath it.
export const stats = [
  { value: "5+", label: "Years Serving Glastonbury" },
  { value: "100+", label: "Properties Maintained" },
  { value: "Residential", label: "& Commercial Service" },
  { value: "Free", label: "Estimates" },
];
