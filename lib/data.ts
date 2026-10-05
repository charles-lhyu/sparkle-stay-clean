import jobsJson from "@/data/jobs.json";

export const jobs = jobsJson;

export const services = [
  {
    slug: "bnb",
    title: "BnB & short-stay turnover",
    eyebrow: "Airbnb · Vrbo · guest houses",
    summary:
      "Same-day changeovers so the next guest walks into a hotel-standard stay.",
    priceFrom: "From £85 per turnover",
    includes: [
      "Full clean of bedrooms, bathrooms, kitchen, and living areas",
      "Fresh linen change and bed make (linen optional extra)",
      "Restock checklist: toiletries, coffee, welcome notes",
      "Photo report after each turnover if you want proof for hosts",
      "Same-day or next-day slots for high-occupancy calendars",
    ],
  },
  {
    slug: "hotel",
    title: "Hotel & serviced rooms",
    eyebrow: "Boutique hotels · lodges · aparthotels",
    summary:
      "Reliable room attendants for daily service, deep cleans, and peak-season cover.",
    priceFrom: "Contract rates from £18 / room",
    includes: [
      "Stayover and departure cleans to your house standard",
      "Public areas: lobby, corridors, breakfast room on request",
      "Linen handling and minibar / amenity reset",
      "Weekend and late-checkout coverage",
      "Named supervisor and signed job sheets for each shift",
    ],
  },
  {
    slug: "moveout",
    title: "Move-out & end of tenancy",
    eyebrow: "Landlords · agents · tenants",
    summary:
      "Inventory-ready cleans that help deposits come back and listings go live faster.",
    priceFrom: "From £160 (studio)",
    includes: [
      "Kitchen degrease, oven, hob, and appliance interiors",
      "Bathrooms descaled, grout and glass polished",
      "Skirting, doors, switches, and inside cupboards",
      "Carpets vacuumed; optional steam / oven extras",
      "Job reference pack: checklist + photos for the agent",
    ],
  },
];

export const reviews = [
  {
    id: "r1",
    name: "Priya N.",
    role: "Airbnb host · JR-2391",
    rating: 5,
    service: "BnB",
    text: "We were nervous about a 4-hour window. Beds were hotel-tight, bathrooms spotless, and they restocked exactly from our list.",
  },
  {
    id: "r2",
    name: "Marcus Hale",
    role: "Hotel GM · JR-2418",
    rating: 5,
    service: "Hotel",
    text: "Professional, uniformed, and they follow our room standard card. We now keep them on the weekend backup roster.",
  },
  {
    id: "r3",
    name: "Elena Voss",
    role: "Tenant · JR-2364",
    rating: 5,
    service: "Move-out",
    text: "The agent walked through with their photo pack. Nothing to argue about — deposit came back in 8 days.",
  },
  {
    id: "r4",
    name: "Jonah Park",
    role: "Serviced apartment owner",
    rating: 5,
    service: "BnB",
    text: "They message on WhatsApp when a checkout runs late and still protect the next guest's arrival time. That reliability is the product.",
  },
];
