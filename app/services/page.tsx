import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">What we clean</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        BnB, hotel, and move-out
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        One team for guest changeovers, room attendants, and empty-property cleans. Every visit gets a job
        reference you can file with the host, GM, or letting agent.
      </p>
      <div className="mt-12 space-y-8">
        {services.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid gap-8 rounded-3xl border border-[var(--line)] bg-white p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10"
          >
            <div>
              <p className="text-xs tracking-wide text-[var(--gold)] uppercase">{s.eyebrow}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">{s.title}</h2>
              <p className="mt-3 text-[var(--muted)]">{s.summary}</p>
              <p className="mt-4 font-medium text-[var(--teal)]">{s.priceFrom}</p>
              <Link href="/inquiry" className="btn-primary mt-6">
                Inquire about this service
              </Link>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-[var(--muted)]">
              {s.includes.map((item) => (
                <li key={item} className="border-b border-[var(--line)] pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
