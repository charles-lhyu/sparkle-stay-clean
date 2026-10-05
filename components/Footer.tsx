import Link from "next/link";
import { company, messengerUrl, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
            {company.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--muted)]">{company.tagline}</p>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p className="mb-2 font-medium text-[var(--ink)]">Visit</p>
          <p>{company.area}</p>
          <p>{company.hours}</p>
          <p className="mt-2">
            <a href={`tel:${company.phoneDisplay.replace(/\s/g, "")}`}>{company.phoneDisplay}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-medium text-[var(--ink)]">Chat with us</p>
          <div className="flex flex-col gap-2">
            <a href={whatsappUrl("Hi, I have a cleaning question.")} className="text-[var(--teal)]">
              WhatsApp
            </a>
            <a href={messengerUrl()} className="text-[var(--teal)]">
              Facebook Messenger
            </a>
            <Link href="/inquiry" className="text-[var(--teal)]">
              Online inquiry form
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
