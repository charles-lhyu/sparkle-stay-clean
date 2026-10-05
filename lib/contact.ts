export const company = {
  name: "Sparkle Stay Clean",
  tagline: "Guest-ready stays. Move-out ready homes.",
  phoneDisplay: "+44 7700 900123",
  email: "hello@sparklestayclean.example",
  hours: "Mon–Sat, 7:00–19:00",
  area: "Hotels, BnBs, and homes across the city",
};

/** WhatsApp in international format, digits only. Replace with your real number. */
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447700900123";

/** Facebook Page username or Page ID for m.me links. */
export const messengerPage =
  process.env.NEXT_PUBLIC_MESSENGER_PAGE ?? "sparkle.stay.clean";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function messengerUrl() {
  return `https://m.me/${messengerPage}`;
}

export function inquiryWhatsappText(payload: {
  name: string;
  service: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  roomCount?: string;
  date?: string;
  details?: string;
}) {
  return [
    `Hi ${company.name}, I'd like a quote.`,
    `Name: ${payload.name}`,
    `Service: ${payload.service}`,
    payload.propertyType ? `Property type: ${payload.propertyType}` : null,
    payload.bedrooms ? `Bedrooms: ${payload.bedrooms}` : null,
    payload.bathrooms ? `Bathrooms: ${payload.bathrooms}` : null,
    payload.roomCount ? `Rooms to clean: ${payload.roomCount}` : null,
    payload.date ? `Date: ${payload.date}` : null,
    payload.details ? `Details: ${payload.details}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
