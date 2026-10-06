"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  bathroomOptions,
  bedroomOptions,
  hotelRoomOptions,
  inquiryCopy,
  inquiryDefaults,
  inquiryServices,
  propertyTypes,
  services,
} from "@/content";
import { inquiryWhatsappText, messengerUrl, whatsappUrl } from "@/lib/contact";
import { withBase } from "@/lib/site";

type Service = (typeof inquiryServices)[number];
type PropertyType = (typeof propertyTypes)[number];

const hotelInquiryLabel =
  services.find((s) => s.slug === "hotel")?.inquiryLabel ?? "Hotel / serviced rooms";

function roomFieldsFor(service: Service, propertyType: PropertyType) {
  const isHotelLike =
    service === hotelInquiryLabel ||
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
  const [service, setService] = useState<Service>(inquiryServices[0]);
  const [propertyType, setPropertyType] = useState<PropertyType>(
    propertyTypes[inquiryDefaults.propertyTypeIndex],
  );
  const [bedrooms, setBedrooms] = useState<(typeof bedroomOptions)[number]>(
    inquiryDefaults.bedrooms,
  );
  const [bathrooms, setBathrooms] = useState<(typeof bathroomOptions)[number]>(
    inquiryDefaults.bathrooms,
  );
  const [roomCount, setRoomCount] = useState<(typeof hotelRoomOptions)[number]>(
    inquiryDefaults.roomCount,
  );

  const { showBedrooms, showBathrooms, showHotelRooms } = useMemo(
    () => roomFieldsFor(service, propertyType),
    [service, propertyType],
  );

  function resetSelections() {
    setService(inquiryServices[0]);
    setPropertyType(propertyTypes[inquiryDefaults.propertyTypeIndex]);
    setBedrooms(inquiryDefaults.bedrooms);
    setBathrooms(inquiryDefaults.bathrooms);
    setRoomCount(inquiryDefaults.roomCount);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const res = await fetch(withBase("/api/inquiry"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setMessage(inquiryCopy.success);
      form.reset();
      resetSelections();
    } catch {
      setStatus("error");
      setMessage(inquiryCopy.error);
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
            {inquiryServices.map((s) => (
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
              onChange={(e) => setBedrooms(e.target.value as (typeof bedroomOptions)[number])}
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
              onChange={(e) => setBathrooms(e.target.value as (typeof bathroomOptions)[number])}
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
              onChange={(e) => setRoomCount(e.target.value as (typeof hotelRoomOptions)[number])}
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
          placeholder={inquiryCopy.detailsPlaceholder}
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary">
          {inquiryCopy.submitLabel}
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
          {inquiryCopy.whatsappInstead}
        </a>
        <a className="btn-ghost" href={messengerUrl()} target="_blank" rel="noopener noreferrer">
          {inquiryCopy.messenger}
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
