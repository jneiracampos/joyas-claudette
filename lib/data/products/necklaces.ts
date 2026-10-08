import type { Product } from '@/types';

/**
 * Necklace catalog. Photos live in public/images/products/necklaces/
 */
export const necklaces: Product[] = [
  {
    id: 'necklace-001',
    name: { en: 'Natural Baroque Pearl Necklace', es: 'Collar de Perlas Naturales Barrocas' },
    description: {
      en: 'Handmade with natural baroque pearls. Silver clasp.',
      es: 'Hecho a mano con perlas naturales barrocas. Broche de plata.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/baroque-pearl-1.jpeg',
      '/images/products/necklaces/baroque-pearl-2.jpeg',
    ],
    materials: [
      { en: 'Natural Baroque Pearls', es: 'Perlas naturales barrocas' },
      { en: 'Silver Clasp', es: 'Broche de plata' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'necklace-002',
    name: { en: 'Coin Pearl Necklace', es: 'Collar de Perlas Tipo Moneda' },
    description: {
      en: 'Handmade with flat freshwater coin pearls. Silver clasp.',
      es: 'Hecho a mano con perlas planas de agua dulce tipo moneda. Broche de plata.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/coin-pearl-1.jpeg',
      '/images/products/necklaces/coin-pearl-2.jpeg',
    ],
    materials: [
      { en: 'Freshwater Coin Pearls', es: 'Perlas de agua dulce tipo moneda' },
      { en: 'Silver Clasp', es: 'Broche de plata' },
    ],
    inStock: true,
  },
  {
    id: 'necklace-003',
    name: { en: 'Mother-of-Pearl & Baroque Pearl Necklace', es: 'Collar de Nácar y Perlas Barrocas' },
    description: {
      en: 'Long handmade necklace combining colorful mother-of-pearl pieces with freshwater baroque pearls.',
      es: 'Collar largo hecho a mano que combina piezas de nácar de colores con perlas barrocas de agua dulce.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/mother-of-pearl-1.jpeg',
      '/images/products/necklaces/mother-of-pearl-2.jpeg',
    ],
    materials: [
      { en: 'Mother-of-Pearl', es: 'Nácar' },
      { en: 'Freshwater Baroque Pearls', es: 'Perlas barrocas de agua dulce' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'necklace-004',
    name: { en: 'Rectangular Pearl Necklace', es: 'Collar de Perlas Rectangulares' },
    description: {
      en: 'Handmade with lustrous white rectangular freshwater pearls. Silver clasp.',
      es: 'Hecho a mano con lustrosas perlas blancas rectangulares de agua dulce. Broche de plata.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/rectangular-pearl-1.jpeg',
      '/images/products/necklaces/rectangular-pearl-2.jpeg',
    ],
    materials: [
      { en: 'Freshwater Rectangular Pearls', es: 'Perlas rectangulares de agua dulce' },
      { en: 'Silver Clasp', es: 'Broche de plata' },
    ],
    inStock: true,
  },
  {
    id: 'necklace-005',
    name: { en: 'Shell & Pearl Statement Necklace', es: 'Collar de Conchas y Perlas' },
    description: {
      en: 'Statement necklace of iridescent shell pieces alternated with freshwater pearls.',
      es: 'Collar llamativo de conchas irisadas combinadas con perlas de agua dulce.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/shell-pearl-1.jpeg',
      '/images/products/necklaces/shell-pearl-2.jpeg',
    ],
    materials: [
      { en: 'Shell', es: 'Concha' },
      { en: 'Freshwater Pearls', es: 'Perlas de agua dulce' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'necklace-006',
    name: { en: 'Pearl Disc Necklace', es: 'Collar de Perlas Disco' },
    description: {
      en: 'Handmade with freshwater disc pearls knotted on black thread. Magnetic clasp.',
      es: 'Hecho a mano con perlas de agua dulce tipo disco anudadas en hilo negro. Cierre magnético.',
    },
    price: 600000,
    currency: 'COP',
    category: 'necklaces',
    images: [
      '/images/products/necklaces/disc-pearl-1.jpeg',
      '/images/products/necklaces/disc-pearl-2.jpeg',
      '/images/products/necklaces/disc-pearl-3.jpeg',
    ],
    materials: [
      { en: 'Freshwater Disc Pearls', es: 'Perlas de agua dulce tipo disco' },
      { en: 'Magnetic Clasp', es: 'Cierre magnético' },
    ],
    inStock: true,
    featured: true,
  },
];
