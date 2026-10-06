/**
 * Utility functions for the jewelry e-commerce application
 */

import type { Currency } from '@/types';

/**
 * Format a price as shown across the site: "$295.00" for USD, "$400.000" for COP
 */
export function formatPrice(price: number, currency: Currency): string {
  if (currency === 'COP') {
    return `$${Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
  return `$${price.toFixed(2)}`;
}
