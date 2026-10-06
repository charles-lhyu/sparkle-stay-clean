# Editing site content

All marketing and info-page copy lives in this `content/` folder as plain TypeScript.
Open the matching file, change the strings, save — no CMS or external JSON hunt.

| What to change | File |
| --- | --- |
| Business name, phone, email, hours, tagline | `company.ts` |
| Header nav labels / book button | `nav.ts` |
| Service titles, prices, bullet lists | `services.ts` |
| Featured reviews | `reviews.ts` |
| Job reference cards (also validates forum comments) | `jobs.ts` |
| Page titles and intro paragraphs | `pages.ts` |
| Inquiry form dropdowns and status messages | `inquiry.ts` |
| Chat widget wording | `chat.ts` |

After editing, run `npm run dev` (or redeploy) to see changes.

**Do not edit** `data/comments.json` by hand for marketing — that file stores live forum posts.
WhatsApp / Messenger numbers stay in `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_MESSENGER_PAGE`).
