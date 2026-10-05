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

export const jobs = [
  {
    id: "JR-2418",
    title: "12-room boutique hotel, weekend cover",
    service: "Hotel",
    location: "City centre",
    date: "Sep 2026",
    quote:
      "They covered a short-notice Saturday when two attendants called off. Every departure room was guest-ready before 2pm.",
    client: "Front office manager",
    outcome: "12 departures + 8 stayovers completed; signed job sheet on file.",
  },
  {
    id: "JR-2391",
    title: "Superhost turnover — 3-bed townhouse",
    service: "BnB",
    location: "Riverside",
    date: "Aug 2026",
    quote:
      "Same-day changeover between 11am checkout and 3pm check-in. Guests mentioned the smell of clean linen in the review.",
    client: "Airbnb Superhost",
    outcome: "Turnover in 3h 20m; photo report sent to host.",
  },
  {
    id: "JR-2364",
    title: "End of tenancy, 2-bed flat",
    service: "Move-out",
    location: "North quarter",
    date: "Jul 2026",
    quote:
      "Agent reused our checklist as the inventory addendum. Deposit returned in full.",
    client: "Letting agent",
    outcome: "Full inventory clean + oven; reference photos attached.",
  },
  {
    id: "JR-2310",
    title: "Aparthotel deep clean, 24 keys",
    service: "Hotel",
    location: "Business district",
    date: "Jun 2026",
    quote:
      "Quarterly deep clean of kitchens and upholstery. Standard stayed consistent across all units.",
    client: "Ops lead",
    outcome: "24 units over 3 nights; no guest complaints the following week.",
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

export const forumSeed = [
  {
    id: "c1",
    author: "Host circle",
    jobRef: "JR-2391",
    body: "Anyone used them for midweek Airbnbs? We need linen + towel swap only on Tuesdays.",
    createdAt: "2026-09-12T10:00:00.000Z",
  },
  {
    id: "c2",
    author: "Sparkle Stay Clean",
    jobRef: "team",
    body: "Yes — we run linen-only midweek slots. Send the listing address and usual checkout time via the inquiry form or WhatsApp and we'll lock a recurring window.",
    createdAt: "2026-09-12T11:20:00.000Z",
  },
  {
    id: "c3",
    author: "North agents",
    jobRef: "JR-2364",
    body: "Move-out photos were labelled room-by-room. Easy to attach to the checkout report.",
    createdAt: "2026-08-02T16:40:00.000Z",
  },
];
