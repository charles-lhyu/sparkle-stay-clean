# Sparkle Stay Clean

Website for a hospitality cleaning company: BnB turnovers, hotel rooms, and move-out cleans.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect WhatsApp and Messenger

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, country code included (e.g. `447700900123`)
- `NEXT_PUBLIC_MESSENGER_PAGE` — your Facebook Page username so `https://m.me/yourpage` works

Replace placeholder phone, email, and sample job references in `lib/contact.ts` and `lib/data.ts`.

Inquiry submissions are logged by `app/api/inquiry/route.ts`. Forum comments are stored in `data/comments.json` after the job reference is checked against `data/jobs.json`. Photos are saved under `public/uploads/comments`.
