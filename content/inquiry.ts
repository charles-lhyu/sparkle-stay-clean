import { otherInquiryService, services } from "./services";

/** Dropdown options for the inquiry form. */
export const inquiryServices = [
  ...services.map((s) => s.inquiryLabel),
  otherInquiryService,
] as const;

export const propertyTypes = [
  "Studio",
  "Apartment / flat",
  "House",
  "Townhouse",
  "Guest house / BnB",
  "Hotel",
  "Aparthotel",
  "Other",
] as const;

export const bedroomOptions = ["1", "2", "3", "4", "5", "6+"] as const;
export const bathroomOptions = ["1", "2", "3", "4+"] as const;
export const hotelRoomOptions = ["1–5", "6–10", "11–20", "21–50", "50+"] as const;

export const inquiryDefaults = {
  bedrooms: "2" as (typeof bedroomOptions)[number],
  bathrooms: "1" as (typeof bathroomOptions)[number],
  roomCount: "1–5" as (typeof hotelRoomOptions)[number],
  propertyTypeIndex: 1, // Apartment / flat
};

export const inquiryCopy = {
  success:
    "Inquiry received. Open WhatsApp or Messenger below to talk to a coordinator now.",
  error:
    "Could not save the inquiry. You can still message us on WhatsApp or Messenger.",
  detailsPlaceholder: "Checkout time, linen, access instructions…",
  submitLabel: "Send inquiry",
  whatsappInstead: "WhatsApp instead",
  messenger: "Messenger",
};
