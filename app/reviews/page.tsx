import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/lib/data";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">What clients say</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        Reviews tied to job references
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Comments below came from completed jobs. For live discussion with other hosts and agents, use the
        forum.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {reviews.map((r) => (
          <blockquote key={r.id} className="rounded-3xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs tracking-wide text-[var(--gold)] uppercase">
              {r.service} · {"★".repeat(r.rating)}
            </p>
            <p className="mt-3 text-lg leading-7">“{r.text}”</p>
            <footer className="mt-5 text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--ink)]">{r.name}</span>
              <br />
              {r.role}
            </footer>
          </blockquote>
        ))}
      </div>
      <Link href="/forum" className="btn-primary mt-10">
        Add a comment on the forum
      </Link>
    </main>
  );
}
