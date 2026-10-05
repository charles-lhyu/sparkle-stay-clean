import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/lib/data";

export const metadata: Metadata = { title: "Job references" };

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">Proof of work</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">Job references</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Each completed visit is logged in the job record database with a reference (JR-xxxx). Comments on
        the forum are accepted only when that reference matches a real job.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {jobs.map((job) => (
          <article key={job.id} className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wide text-[var(--teal)]">
              <span>{job.id}</span>
              <span>
                {job.service} · {job.date}
              </span>
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl">{job.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {job.location} · {job.client}
            </p>
            <p className="mt-4 text-sm leading-6">“{job.quote}”</p>
            <p className="mt-4 text-sm font-medium text-[var(--ink)]">{job.outcome}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-[var(--muted)]">
        Worked with us?{" "}
        <Link href="/forum" className="text-[var(--teal)]">
          Leave a comment with your job reference
        </Link>{" "}
        or{" "}
        <Link href="/reviews" className="text-[var(--teal)]">
          read guest and GM reviews
        </Link>
        .
      </p>
    </main>
  );
}
