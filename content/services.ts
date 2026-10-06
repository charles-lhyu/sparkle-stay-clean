import type { Service } from "./types";

/**
 * Service catalog — powers /services, the home services strip, and inquiry labels.
 * Add a new service here; it shows on the marketing pages automatically.
 */
export const services: Service[] = [
  {
    slug: "bnb",
    title: "BnB & short-stay turnover",
    eyebrow: "Airbnb · Vrbo · guest houses",
    summary:
      "Same-day changeovers so the next guest walks into a hotel-standard stay.",
    priceFrom: "From £85 per turnover",
    inquiryLabel: "BnB / short-stay",
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
    inquiryLabel: "Hotel / serviced rooms",
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
    inquiryLabel: "Move-out / end of tenancy",
    includes: [
      "Kitchen degrease, oven, hob, and appliance interiors",
      "Bathrooms descaled, grout and glass polished",
      "Skirting, doors, switches, and inside cupboards",
      "Carpets vacuumed; optional steam / oven extras",
      "Job reference pack: checklist + photos for the agent",
    ],
  },
];

/** Extra inquiry-form option when the request does not match a catalog service. */
export const otherInquiryService = "Other";
