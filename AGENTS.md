# Joyas Claudette

Handcrafted-jewelry storefront. Next.js 16 (App Router) + React 19 + Tailwind 4, deployed on Vercel. No backend: products are static data and "checkout" is a WhatsApp click-to-chat.

## Commands

- `npm run dev` — dev server
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (must pass with no errors)
- `npm run build` — production build (fetches Google Fonts, needs network)

Run `typecheck` and `lint` after every change.

## Layout

- `app/` — routes: `/`, `/about`, `/collections/{all,necklaces,bracelets}`, `/products/[id]`
- `components/layout/` — Header, Footer
- `components/products/` — ProductCard, ProductGrid, CollectionPage (shared collection layout)
- `components/ui/` — small shared pieces (WhatsAppIcon, ColorSwatch)
- `context/LanguageContext.tsx` — `useLanguage()` returns `{ language, t }`
- `lib/translations.ts` — `en`/`es` strings; `TranslationKey` type makes `t()` keys type-checked
- `lib/config.ts` — WhatsApp number and `buildWhatsAppUrl()`
- `lib/navigation.ts` — `NAV_LINKS` used by both header menus
- `lib/data/products.ts` — product catalog and lookup helpers
- `lib/utils.ts` — `formatPrice()`
- `docs/` — older design notes (partly stale: they mention a language toggle that does not exist)

## Conventions

- All user-facing text goes through `t('key')`. Add the key to **both** `en` and `es` in `lib/translations.ts`.
- Language is detected client-side (localStorage `language`, else browser language). SSR/hydration renders Spanish first, by design.
- Never inline the WhatsApp number or the WhatsApp SVG; use `buildWhatsAppUrl()` and `<WhatsAppIcon />`.
- Prices are USD and displayed with `formatPrice()`.
- To add a product, append to `lib/data/products.ts` (unique `id`, category `necklaces` | `bracelets`). Images live in `public/`.
- Next 16: `params` is a Promise. In client pages unwrap with `use(params)`; in server pages `await` it.
- Styling is Tailwind utility classes only; do not change the visual design without being asked.

## Known gaps (left as-is on purpose)

- `<html lang="en">` is static although the UI can be Spanish.
- A few strings are hard-coded: the About page CTA (Spanish), "Image placeholder", "Product Image", "OUT OF STOCK", the ProductGrid empty message.
- Product images are placeholders; `Product.images` is unused.
- No per-page metadata beyond the root layout; no sitemap/robots.
