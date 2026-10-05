"use client";

import { FormEvent, useMemo, useState } from "react";
import { inquiryWhatsappText, messengerUrl, whatsappUrl } from "@/lib/contact";

const services = [
  "BnB / short-stay",
  "Hotel / serviced rooms",
  "Move-out / end of tenancy",
  "Other",
] as const;

const propertyTypes = [
  "Studio",
  "Apartment / flat",
  "House",
  "Townhouse",
  "Guest house / BnB",
  "Hotel",
  "Aparthotel",
  "Other",
] as const;

const bedroomOptions = ["1", "2", "3", "4", "5", "6+"];
const bathroomOptions = ["1", "2", "3", "4+"];
const hotelRoomOptions = ["1–5", "6–10", "11–20", "21–50", "50+"];

type Service = (typeof services)[number];
type PropertyType = (typeof propertyTypes)[number];

function roomFieldsFor(service: Service, propertyType: PropertyType) {
  const isHotelLike =
    service === "Hotel / serviced rooms" ||
    propertyType === "Hotel" ||
    propertyType === "Aparthotel";
  const isStudio = propertyType === "Studio";
  const showBedrooms = !isHotelLike && !isStudio;
  const showBathrooms = !isHotelLike;
  const showHotelRooms = isHotelLike;

  return { showBedrooms, showBathrooms, showHotelRooms };
}

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState<Service>(services[0]);
  const [propertyType, setPropertyType] = useState<PropertyType>(propertyTypes[1]);
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1");
  const [roomCount, setRoomCount] = useState("1–5");

  const { showBedrooms, showBathrooms, showHotelRooms } = useMemo(
    () => roomFieldsFor(service, propertyType),
    [service, propertyType],
  );

  function resetSelections() {
    setService(services[0]);
    setPropertyType(propertyTypes[1]);
    setBedrooms("2");
    setBathrooms("1");
    setRoomCount("1–5");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setMessage("Inquiry received. Open WhatsApp or Messenger below to talk to a coordinator now.");
      form.reset();
      resetSelections();
    } catch {
      setStatus("error");
      setMessage("Could not save the inquiry. You can still message us on WhatsApp or Messenger.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          Name
          <input required name="name" className="field" autoComplete="name" />
        </label>
        <label className="block text-sm">
          Email
          <input required type="email" name="email" className="field" autoComplete="email" />
        </label>
        <label className="block text-sm">
          Phone
          <input name="phone" className="field" autoComplete="tel" />
        </label>
        <label className="block text-sm">
          Service
          <select
            name="service"
            className="field"
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          Property type
          <select
            name="propertyType"
            className="field"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value as PropertyType)}
          >
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          Property / hotel name
          <input name="property" className="field" />
        </label>
        {showBedrooms ? (
          <label className="block text-sm">
            Bedrooms
            <select
              name="bedrooms"
              className="field"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              {bedroomOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {showBathrooms ? (
          <label className="block text-sm">
            Bathrooms
            <select
              name="bathrooms"
              className="field"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            >
              {bathroomOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {showHotelRooms ? (
          <label className="block text-sm sm:col-span-2">
            Number of rooms to clean
            <select
              name="roomCount"
              className="field"
              value={roomCount}
              onChange={(e) => setRoomCount(e.target.value)}
            >
              {hotelRoomOptions.map((n) => (
                <option key={n} value={n}>
                  {n} rooms
                </option>
              ))}
            </select>
          </label>
        ) : null}
        <label className="block text-sm">
          Preferred date
          <input type="date" name="date" className="field" />
        </label>
      </div>
      <label className="block text-sm">
        Job details
        <textarea
          name="details"
          rows={5}
          className="field"
          placeholder="Checkout time, linen, access instructions…"
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary">
          Send inquiry
        </button>
        <a
          className="btn-ghost"
          href={whatsappUrl(
            inquiryWhatsappText({
              name: "Website visitor",
              service,
              propertyType,
              bedrooms: showBedrooms ? bedrooms : undefined,
              bathrooms: showBathrooms ? bathrooms : undefined,
              roomCount: showHotelRooms ? roomCount : undefined,
            }),
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp instead
        </a>
        <a className="btn-ghost" href={messengerUrl()} target="_blank" rel="noopener noreferrer">
          Messenger
        </a>
      </div>
      {status !== "idle" ? (
        <p className={status === "ok" ? "text-sm text-[var(--teal)]" : "text-sm text-red-700"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
