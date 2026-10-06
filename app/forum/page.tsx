import type { Metadata } from "next";
import { Forum } from "@/components/Forum";
import { pages } from "@/content";
import { listComments } from "@/lib/db";

export const metadata: Metadata = { title: "Host forum" };

export default async function ForumPage() {
  const comments = await listComments();
  const copy = pages.forum;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">{copy.eyebrow}</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">{copy.description}</p>
      <div className="mt-10">
        <Forum initialComments={comments} />
      </div>
    </main>
  );
}
