/**
 * Utility functions for the jewelry e-commerce application
 */

/**
 * Format currency to USD
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Format product name for URL
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Capitalize first letter of each word
 */
export function capitalize(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Get color hex value from color name
 */
export function getColorHex(colorName: string): string {
  const colors: Record<string, string> = {
    white: '#ffffff',
    black: '#000000',
    gold: '#ffd700',
    silver: '#c0c0c0',
    brown: '#8b4513',
    pink: '#ffc0cb',
    blue: '#4169e1',
    turquoise: '#40e0d0',
    yellow: '#ffff00',
    multi: 'transparent',
  };

  return colors[colorName.toLowerCase()] || '#cccccc';
}
