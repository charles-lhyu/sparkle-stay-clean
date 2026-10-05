import Link from "next/link";
import { jobs, reviews, services } from "@/lib/data";
import { company } from "@/lib/contact";

export default function Home() {
  return (
    <main>
      <section className="hero-grid">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">Hospitality cleaning</p>
            <h1 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-5xl leading-[1.1] text-[var(--ink)] sm:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--muted)]">
              Sparkle Stay Clean turns over BnBs, hotels, and empty homes to a guest-ready standard —
              with job references, photo packs, and a coordinator on WhatsApp or Messenger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/inquiry" className="btn-primary">
                Request a quote
              </Link>
              <Link href="/services" className="btn-ghost">
                See services
              </Link>
            </div>
          </div>
          <aside className="rounded-3xl border border-[var(--line)] bg-white/80 p-6 shadow-[0_20px_60px_rgba(28,49,43,0.08)]">
            <p className="text-sm text-[var(--muted)]">Typical response</p>
            <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--teal)]">under 15 min</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Chat during {company.hours}. Same-day BnB changeovers subject to route.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Named job reference on every visit", "Linen & amenity reset for hosts", "Inventory photos for move-outs"].map(
                (item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--gold)]">◆</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">Services</h2>
          <Link href="/services" className="text-sm text-[var(--teal)]">
            Full details
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href="/services"
              className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-6 transition hover:-translate-y-0.5"
            >
              <p className="text-xs tracking-wide text-[var(--gold)] uppercase">{s.eyebrow}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{s.summary}</p>
              <p className="mt-4 text-sm font-medium text-[var(--teal)]">{s.priceFrom}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">From the job book</h2>
          <Link href="/jobs" className="text-sm text-[var(--teal)]">
            All references
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {jobs.slice(0, 2).map((job) => (
            <article key={job.id} className="rounded-3xl bg-[var(--ink)] p-6 text-[var(--cream)]">
              <p className="text-xs tracking-wide text-[var(--gold)] uppercase">
                {job.id} · {job.service}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{job.title}</h3>
              <p className="mt-3 text-sm leading-6 opacity-85">“{job.quote}”</p>
              <p className="mt-4 text-xs opacity-70">
                {job.client} · {job.location}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl">Host & hotel comments</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <blockquote key={r.id} className="rounded-3xl border border-[var(--line)] bg-white p-6">
              <p className="text-sm leading-6 text-[var(--muted)]">“{r.text}”</p>
              <footer className="mt-4 text-sm">
                <span className="font-medium text-[var(--ink)]">{r.name}</span>
                <span className="block text-[var(--muted)]">{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
