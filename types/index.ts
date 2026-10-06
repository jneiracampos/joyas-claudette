/**
 * Type definitions for the jewelry e-commerce application
 */

import type { Language } from '@/lib/translations';

/** Text available in every supported language */
export type LocalizedText = Record<Language, string>;

export type Currency = 'USD' | 'COP';

export type ProductCategory = 'necklaces' | 'bracelets';

export interface Product {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Amount in `currency` (COP has no decimals) */
  price: number;
  currency: Currency;
  category: ProductCategory;
  images: string[];
  materials: LocalizedText[];
  inStock: boolean;
  featured?: boolean;
}
