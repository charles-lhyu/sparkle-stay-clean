"use client";

import { FormEvent, useEffect, useState } from "react";
import { forumSeed } from "@/lib/data";

type Post = {
  id: string;
  author: string;
  jobRef: string;
  body: string;
  createdAt: string;
};

const STORAGE_KEY = "ssc-forum-posts";

export function Forum() {
  const [posts, setPosts] = useState<Post[]>(forumSeed);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const extra = JSON.parse(raw) as Post[];
      setPosts([...forumSeed, ...extra]);
    } catch {
      /* ignore */
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const next: Post = {
      id: crypto.randomUUID(),
      author: data.author.trim() || "Guest",
      jobRef: data.jobRef.trim() || "general",
      body: data.body.trim(),
      createdAt: new Date().toISOString(),
    };
    if (!next.body) return;
    const extras = posts.filter((p) => !forumSeed.some((s) => s.id === p.id));
    const stored = [...extras, next];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    setPosts((prev) => [...prev, next]);
    form.reset();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.id} className="rounded-2xl border border-[var(--line)] bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium text-[var(--ink)]">{p.author}</p>
              <p className="text-xs text-[var(--muted)]">
                {p.createdAt.slice(0, 10)} · ref {p.jobRef}
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.body}</p>
          </article>
        ))}
      </div>
      <form onSubmit={onSubmit} className="h-fit space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5">
        <p className="font-[family-name:var(--font-display)] text-xl">Leave a note</p>
        <p className="text-xs text-[var(--muted)]">
          Hosts and agents can comment with a job reference. Posts on this demo stay in your browser.
        </p>
        <input name="author" className="field" placeholder="Your name or company" />
        <input name="jobRef" className="field" placeholder="Job ref e.g. JR-2391" />
        <textarea name="body" required rows={4} className="field" placeholder="How did the clean go?" />
        <button type="submit" className="btn-primary w-full">
          Post comment
        </button>
      </form>
    </div>
  );
}
