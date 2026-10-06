import type { Review } from "./types";

/** Featured reviews on the home page and /reviews. */
export const reviews: Review[] = [
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
