"use client";

import Link from "next/link";
import { useState } from "react";
import { chatWidget } from "@/content";
import { messengerUrl, whatsappUrl } from "@/lib/contact";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-72 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_18px_50px_rgba(24,49,42,0.16)]">
          <p className="font-[family-name:var(--font-display)] text-lg text-[var(--ink)]">
            {chatWidget.title}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">{chatWidget.description}</p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={whatsappUrl(chatWidget.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              {chatWidget.whatsappLabel}
            </a>
            <a
              href={messengerUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0084FF] px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              {chatWidget.messengerLabel}
            </a>
            <Link
              href="/inquiry"
              className="rounded-full border border-[var(--line)] px-4 py-2.5 text-center text-sm font-medium text-[var(--ink)]"
            >
              {chatWidget.inquiryLabel}
            </Link>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white shadow-lg"
        aria-label={open ? chatWidget.closeAria : chatWidget.openAria}
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
