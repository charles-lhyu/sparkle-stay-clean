import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { pages } from "@/content";

export const metadata: Metadata = { title: "Book / inquiry" };

export default function InquiryPage() {
  const copy = pages.inquiry;

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">{copy.eyebrow}</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{copy.title}</h1>
      <p className="mt-4 text-[var(--muted)]">{copy.description}</p>
      <div className="mt-10 rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8">
        <InquiryForm />
      </div>
    </main>
  );
}
