/** Shared shapes for marketing / info content. Edit the data files, not this. */

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  priceFrom: string;
  includes: string[];
  /** Label used in the inquiry form dropdown */
  inquiryLabel: string;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  rating: number;
  service: string;
  text: string;
};

export type JobRecord = {
  id: string;
  status: string;
  title: string;
  service: string;
  location: string;
  date: string;
  quote: string;
  client: string;
  outcome: string;
};

export type PageIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type NavLink = {
  href: string;
  label: string;
};
