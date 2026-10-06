import type { PageIntro } from "./types";

/**
 * Page titles and intros for every marketing / info page.
 * Edit copy here — page components only render layout.
 */
export const pages = {
  home: {
    eyebrow: "Hospitality cleaning",
    description:
      "Sparkle Stay Clean turns over BnBs, hotels, and empty homes to a guest-ready standard — with job references, photo packs, and a coordinator on WhatsApp or Messenger.",
    responseLabel: "Typical response",
    responseValue: "under 15 min",
    responseNote: "Chat during {hours}. Same-day BnB changeovers subject to route.",
    highlights: [
      "Named job reference on every visit",
      "Linen & amenity reset for hosts",
      "Inventory photos for move-outs",
    ],
    servicesHeading: "Services",
    servicesLink: "Full details",
    jobsHeading: "From the job book",
    jobsLink: "All references",
    reviewsHeading: "Host & hotel comments",
    primaryCta: { href: "/inquiry", label: "Request a quote" },
    secondaryCta: { href: "/services", label: "See services" },
  },
  services: {
    eyebrow: "What we clean",
    title: "BnB, hotel, and move-out",
    description:
      "One team for guest changeovers, room attendants, and empty-property cleans. Every visit gets a job reference you can file with the host, GM, or letting agent.",
    inquireLabel: "Inquire about this service",
  } satisfies PageIntro & { inquireLabel: string },
  jobs: {
    eyebrow: "Proof of work",
    title: "Job references",
    description:
      "Each completed visit is logged in the job record database with a reference (JR-xxxx). Comments on the forum are accepted only when that reference matches a real job.",
    footerBefore: "Worked with us?",
    forumLinkLabel: "Leave a comment with your job reference",
    footerOr: "or",
    reviewsLinkLabel: "read guest and GM reviews",
  } satisfies PageIntro & {
    footerBefore: string;
    forumLinkLabel: string;
    footerOr: string;
    reviewsLinkLabel: string;
  },
  reviews: {
    eyebrow: "What clients say",
    title: "Reviews tied to job references",
    description:
      "Comments below came from completed jobs. For live discussion with other hosts and agents, use the forum.",
    forumCta: "Add a comment on the forum",
  } satisfies PageIntro & { forumCta: string },
  forum: {
    eyebrow: "Community",
    title: "Comments & host forum",
    description:
      "Share a note with a completed job reference (checked against our job records). You can attach up to five photos. For a private quote, use WhatsApp or Messenger from the chat button.",
  } satisfies PageIntro,
  inquiry: {
    eyebrow: "Online booking",
    title: "Job inquiry",
    description:
      "Tell us the service, property type, and how many rooms. We store the request and you can continue on WhatsApp or Facebook Messenger — same thread the coordinators already watch.",
  } satisfies PageIntro,
} as const;
