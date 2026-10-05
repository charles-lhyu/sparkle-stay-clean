import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/contact";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — BnB, hotel & move-out cleaning`,
    template: `%s · ${company.name}`,
  },
  description:
    "Professional turnover cleaning for BnBs and hotels, plus inventory-ready move-out cleans. Book online or chat on WhatsApp and Messenger.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--cream)] text-[var(--ink)]">
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
