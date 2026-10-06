/**
 * Utility functions for the jewelry e-commerce application
 */

/**
 * Format a price as shown across the site, e.g. "$295.00"
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
