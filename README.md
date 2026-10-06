# Sparkle Stay Clean

Website for a hospitality cleaning company: BnB turnovers, hotel rooms, and move-out cleans.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit site copy

Marketing and info-page content lives in the **`content/`** folder (typed TypeScript modules). See [`content/README.md`](content/README.md) for which file to open — company details, services, reviews, job references, page intros, nav, and inquiry form options are all there. No separate CMS or hunting through JSON for copy.

## GitHub Pages preview

A static preview deploys from GitHub Actions to:

https://charles-lhyu.github.io/sparkle-stay-clean/

GitHub Pages cannot run the comment/inquiry APIs. Browsing services, jobs, and reviews works; posting comments and the on-site inquiry save need `npm run dev` (or a Node host such as Vercel).

The repository must be public, or your GitHub plan must include Pages for private repos. In the repo: **Settings → Pages → Source: GitHub Actions**.

## Connect WhatsApp and Messenger

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, country code included (e.g. `447700900123`)
- `NEXT_PUBLIC_MESSENGER_PAGE` — your Facebook Page username so `https://m.me/yourpage` works

Replace placeholder phone, email, and sample job references in `content/company.ts` and `content/jobs.ts`.

Inquiry submissions are logged by `app/api/inquiry/route.ts`. Forum comments are stored in `data/comments.json` after the job reference is checked against `content/jobs.ts`. Photos are saved under `public/uploads/comments`.
