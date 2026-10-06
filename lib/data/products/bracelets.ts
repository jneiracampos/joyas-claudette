import type { Product } from '@/types';

/**
 * Bracelet catalog. Photos live in public/images/products/bracelets/
 */
export const bracelets: Product[] = [
  {
    id: 'bracelet-001',
    name: { en: 'Beaded Wrap Bracelet', es: 'Pulsera Envolvente con Cuentas' },
    description: { en: 'Multi-wrap leather bracelet with natural stone beads. A Chan Luu signature style.', es: 'Pulsera de cuero de varias vueltas con cuentas de piedras naturales. Un estilo clásico.' },
    price: 195.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: 'Natural Stones', es: 'Piedras naturales' },
      { en: 'Leather', es: 'Cuero' },
      { en: 'Sterling Silver', es: 'Plata esterlina' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'bracelet-002',
    name: { en: 'Pearl Strand Bracelet', es: 'Pulsera de Hilo de Perlas' },
    description: { en: 'Classic freshwater pearl bracelet with adjustable clasp. Timeless elegance.', es: 'Clásica pulsera de perlas de río con broche ajustable. Elegancia atemporal.' },
    price: 165.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: 'Freshwater Pearl', es: 'Perla de río' },
      { en: 'Sterling Silver', es: 'Plata esterlina' },
    ],
    inStock: true,
  },
  {
    id: 'bracelet-003',
    name: { en: 'Turquoise Chain Bracelet', es: 'Pulsera de Cadena con Turquesa' },
    description: { en: 'Vibrant turquoise stones linked with delicate gold chain. Bohemian chic.', es: 'Vibrantes piedras de turquesa unidas con delicada cadena dorada. Chic bohemio.' },
    price: 185.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: 'Turquoise', es: 'Turquesa' },
      { en: '14K Gold Filled', es: 'Oro laminado 14K' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'bracelet-004',
    name: { en: 'Leather Cuff', es: 'Brazalete de Cuero' },
    description: { en: 'Wide leather cuff with metal stud details. Bold and edgy.', es: 'Ancho brazalete de cuero con tachuelas metálicas. Atrevido y rebelde.' },
    price: 125.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: 'Leather', es: 'Cuero' },
      { en: 'Brass', es: 'Latón' },
    ],
    inStock: true,
  },
  {
    id: 'bracelet-005',
    name: { en: 'Rose Quartz Bracelet', es: 'Pulsera de Cuarzo Rosa' },
    description: { en: 'Soft pink rose quartz beads on elastic. Gentle and feminine.', es: 'Suaves cuentas de cuarzo rosa en elástico. Delicado y femenino.' },
    price: 145.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: 'Rose Quartz', es: 'Cuarzo rosa' },
      { en: 'Sterling Silver', es: 'Plata esterlina' },
    ],
    inStock: true,
  },
  {
    id: 'bracelet-006',
    name: { en: 'Gold Charm Bracelet', es: 'Pulsera Dorada con Dijes' },
    description: { en: 'Delicate gold chain with assorted charms. Personalized elegance.', es: 'Delicada cadena dorada con dijes variados. Elegancia personalizada.' },
    price: 210.00,
    currency: 'USD',
    category: 'bracelets',
    images: [],
    materials: [
      { en: '14K Gold Filled', es: 'Oro laminado 14K' },
    ],
    inStock: false,
  },
];
