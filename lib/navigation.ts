import type { TranslationKey } from '@/lib/translations';

/**
 * Main navigation links shared by the header (desktop and mobile menus)
 */
export const NAV_LINKS: ReadonlyArray<{ href: string; labelKey: TranslationKey }> = [
  { href: '/collections/necklaces', labelKey: 'nav.necklaces' },
  { href: '/collections/bracelets', labelKey: 'nav.bracelets' },
  { href: '/collections/all', labelKey: 'nav.shopAll' },
  { href: '/about', labelKey: 'nav.about' },
];
