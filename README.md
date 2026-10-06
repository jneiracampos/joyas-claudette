# Joyas Claudette

Storefront for handcrafted Colombian jewelry (necklaces and bracelets), live at https://joyas-claudette.vercel.app.

There is no cart or checkout: each product has a WhatsApp button that opens a chat with a prefilled message about that piece.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Playfair Display + Inter fonts. Deployed on Vercel.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run build` | Production build (needs network for Google Fonts) |

## How it works

- **Products** are static data in `lib/data/products.ts`. To add one, append an entry following the `Product` type in `types/index.ts`.
- **Languages**: Spanish and English strings live in `lib/translations.ts`. The language is picked from `localStorage['language']` if set, otherwise from the browser language (Spanish if it starts with `es`, else English).
- **WhatsApp**: the number and link builder are in `lib/config.ts`.

Project layout and coding conventions are in [AGENTS.md](AGENTS.md).
