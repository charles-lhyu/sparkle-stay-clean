"use client";

import { useState } from "react";
import { messengerUrl, whatsappUrl } from "@/lib/contact";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-72 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_18px_50px_rgba(24,49,42,0.16)]">
          <p className="font-[family-name:var(--font-display)] text-lg text-[var(--ink)]">
            Talk to the team
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Job quotes, same-day turnovers, and hotel cover — we reply on the app you already use.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappUrl("Hi Sparkle Stay Clean, I need a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Continue on WhatsApp
            </a>
            <a
              href={messengerUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0084FF] px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Continue on Messenger
            </a>
            <a
              href="/inquiry"
              className="rounded-full border border-[var(--line)] px-4 py-2.5 text-center text-sm font-medium text-[var(--ink)]"
            >
              Send an inquiry on the site
            </a>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white shadow-lg"
        aria-label={open ? "Close chat options" : "Open chat options"}
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
