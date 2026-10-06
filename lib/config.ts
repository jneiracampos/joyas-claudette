/**
 * Site-wide constants
 */

export const WHATSAPP_NUMBER = '573112150040';

/**
 * Build a WhatsApp click-to-chat URL with a prefilled message
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
