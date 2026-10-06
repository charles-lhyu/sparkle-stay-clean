import type { JobRecord } from "./types";

/**
 * Completed job references — shown on /jobs and the home “job book”,
 * and used to validate forum comments (must match an id here).
 */
export const jobs: JobRecord[] = [
  {
    id: "JR-2418",
    status: "completed",
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
    status: "completed",
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
    status: "completed",
    title: "End of tenancy, 2-bed flat",
    service: "Move-out",
    location: "North quarter",
    date: "Jul 2026",
    quote: "Agent reused our checklist as the inventory addendum. Deposit returned in full.",
    client: "Letting agent",
    outcome: "Full inventory clean + oven; reference photos attached.",
  },
  {
    id: "JR-2310",
    status: "completed",
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
