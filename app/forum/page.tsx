import type { Metadata } from "next";
import { Forum } from "@/components/Forum";

export const metadata: Metadata = { title: "Host forum" };

export default function ForumPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm tracking-[0.18em] text-[var(--teal)] uppercase">Community</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        Comments & host forum
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Share a note with your job reference. For a private quote, use WhatsApp or Messenger from the chat
        button — this board is for hosts, hotels, and agents comparing notes.
      </p>
      <div className="mt-10">
        <Forum />
      </div>
    </main>
  );
}
