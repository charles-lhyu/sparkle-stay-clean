"use client";

import Link from "next/link";
import { useState } from "react";
import { bookCta, company, navLinks } from "@/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--cream)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)]">
            {company.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--ink)]">
              {l.label}
            </Link>
          ))}
          <Link href={bookCta.href} className="btn-primary !py-2 !px-4 text-sm">
            {bookCta.label}
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-[var(--line)] px-4 py-4 text-sm md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={bookCta.href}
            onClick={() => setOpen(false)}
            className="btn-primary w-fit text-sm"
          >
            {bookCta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
