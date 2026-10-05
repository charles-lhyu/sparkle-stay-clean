"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Comment = {
  id: string;
  author: string;
  jobRef: string;
  body: string;
  images: string[];
  createdAt: string;
};

type DraftImage = {
  id: string;
  file: File;
  url: string;
};

const MAX_IMAGES = 5;

export function Forum({ initialComments }: { initialComments: Comment[] }) {
  const [posts, setPosts] = useState<Comment[]>(initialComments);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [images, setImages] = useState<DraftImage[]>([]);
  const imagesRef = useRef<DraftImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  imagesRef.current = images;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/comments")
      .then(async (res) => {
        if (!res.ok) throw new Error("load failed");
        return res.json() as Promise<{ comments?: Comment[] }>;
      })
      .then((data) => {
        if (!cancelled && data.comments) setPosts(data.comments);
      })
      .catch(() => {
        if (!cancelled) setError("Could not refresh comments.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      for (const image of imagesRef.current) URL.revokeObjectURL(image.url);
    };
  }, []);

  function clearImages() {
    setImages((current) => {
      for (const image of current) URL.revokeObjectURL(image.url);
      return [];
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeImage(id: string) {
    setImages((current) => {
      const next = current.filter((image) => image.id !== id);
      const removed = current.find((image) => image.id === id);
      if (removed) URL.revokeObjectURL(removed.url);
      return next;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function addImages(list: FileList | null) {
    const incoming = Array.from(list ?? []).filter((file) => file.type.startsWith("image/"));
    if (!incoming.length) return;

    setImages((current) => {
      const room = MAX_IMAGES - current.length;
      if (room <= 0) return current;
      const existing = new Set(current.map((image) => `${image.file.name}:${image.file.size}`));
      const extra: DraftImage[] = [];
      for (const file of incoming) {
        if (extra.length >= room) break;
        const key = `${file.name}:${file.size}`;
        if (existing.has(key)) continue;
        existing.add(key);
        extra.push({ id: crypto.randomUUID(), file, url: URL.createObjectURL(file) });
      }
      return extra.length ? [...current, ...extra] : current;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (images.length > MAX_IMAGES) {
      setError("You can attach up to 5 images.");
      return;
    }

    const payload = new FormData(form);
    payload.delete("images");
    for (const image of images) payload.append("images", image.file);

    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/comments", { method: "POST", body: payload });
      const data = (await res.json()) as { comment?: Comment; error?: string };
      if (!res.ok || !data.comment) {
        setError(data.error ?? "Could not post this comment.");
        return;
      }
      setPosts((prev) => [...prev, data.comment!]);
      form.reset();
      clearImages();
    } catch {
      setError("Could not reach the job records service.");
    } finally {
      setBusy(false);
    }
  }

  const remaining = MAX_IMAGES - images.length;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">No comments yet. Completed job references can post below.</p>
        ) : null}
        {posts.map((p) => (
          <article key={p.id} className="rounded-2xl border border-[var(--line)] bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium text-[var(--ink)]">{p.author}</p>
              <p className="text-xs text-[var(--muted)]">
                {p.createdAt.slice(0, 10)} · ref {p.jobRef}
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.body}</p>
            {p.images?.length ? (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {p.images.map((src) => (
                  <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Photo for job ${p.jobRef}`}
                      className="h-28 w-full rounded-xl object-cover"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <form
        onSubmit={onSubmit}
        className="h-fit space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5"
      >
        <p className="font-[family-name:var(--font-display)] text-xl">Leave a note</p>
        <p className="text-xs text-[var(--muted)]">
          Job reference is checked against completed jobs (e.g. JR-2391). Add up to 5 photos; you can remove
          any before posting.
        </p>
        <input name="author" className="field" placeholder="Your name or company" />
        <input required name="jobRef" className="field" placeholder="Job ref e.g. JR-2391" />
        <textarea name="body" required rows={4} className="field" placeholder="How did the clean go?" />

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span>Photos</span>
            <span className="text-xs text-[var(--muted)]">
              {images.length} of {MAX_IMAGES}
            </span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={(e) => addImages(e.target.files)}
          />
          {images.length ? (
            <div className="grid grid-cols-3 gap-2">
              {images.map((image) => (
                <div key={image.id} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={image.file.name}
                    className="h-20 w-full rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 rounded-full bg-[var(--ink)] px-2 py-0.5 text-xs text-white"
                    onClick={() => removeImage(image.id)}
                    aria-label={`Remove ${image.file.name}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[var(--muted)]">No photos yet. JPEG, PNG, WebP, or GIF.</p>
          )}
          {remaining > 0 ? (
            <button
              type="button"
              className="btn-ghost w-full !py-2 text-sm"
              onClick={() => fileInputRef.current?.click()}
            >
              {images.length === 0 ? "Add photos" : `Add more (${remaining} left)`}
            </button>
          ) : (
            <p className="text-xs text-[var(--teal)]">Photo limit reached. Remove one to add another.</p>
          )}
        </div>

        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <button type="submit" className="btn-primary w-full" disabled={busy}>
          {busy ? "Checking job record…" : "Post comment"}
        </button>
      </form>
    </div>
  );
}
