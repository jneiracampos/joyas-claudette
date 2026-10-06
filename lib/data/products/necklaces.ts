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
      '/images/products/necklaces/baroque-pearl-1.jpg',
      '/images/products/necklaces/baroque-pearl-2.jpg',
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
    name: { en: 'Smoky Quartz Pendant', es: 'Colgante de Cuarzo Ahumado' },
    description: { en: 'Natural smoky quartz stone on adjustable cord. A statement piece with earthy elegance.', es: 'Piedra natural de cuarzo ahumado en cordón ajustable. Una pieza llamativa de elegancia terrosa.' },
    price: 225.00,
    currency: 'USD',
    category: 'necklaces',
    images: [],
    materials: [
      { en: 'Smoky Quartz', es: 'Cuarzo ahumado' },
      { en: 'Leather Cord', es: 'Cordón de cuero' },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'necklace-003',
    name: { en: 'Citrine Drop Necklace', es: 'Collar Gota de Citrino' },
    description: { en: 'Radiant citrine gemstone with sterling silver accents. Brings warmth and light to any outfit.', es: 'Radiante piedra de citrino con detalles en plata esterlina. Aporta calidez y luz a cualquier atuendo.' },
    price: 290.00,
    currency: 'USD',
    category: 'necklaces',
    images: [],
    materials: [
      { en: 'Citrine', es: 'Citrino' },
      { en: 'Sterling Silver', es: 'Plata esterlina' },
    ],
    inStock: true,
  },
  {
    id: 'necklace-004',
    name: { en: 'Layered Chain Necklace', es: 'Collar de Cadenas en Capas' },
    description: { en: 'Multi-strand delicate chain necklace. Modern and versatile for everyday wear.', es: 'Delicado collar de varias cadenas. Moderno y versátil para el uso diario.' },
    price: 175.00,
    currency: 'USD',
    category: 'necklaces',
    images: [],
    materials: [
      { en: '14K Gold Filled', es: 'Oro laminado 14K' },
    ],
    inStock: true,
  },
  {
    id: 'necklace-005',
    name: { en: 'Moonstone Collar', es: 'Gargantilla de Piedra Luna' },
    description: { en: 'Stunning moonstone beads in a collar style. Ethereal and sophisticated.', es: 'Impresionantes cuentas de piedra luna en estilo gargantilla. Etéreo y sofisticado.' },
    price: 395.00,
    currency: 'USD',
    category: 'necklaces',
    images: [],
    materials: [
      { en: 'Moonstone', es: 'Piedra luna' },
      { en: 'Sterling Silver', es: 'Plata esterlina' },
    ],
    inStock: false,
    featured: true,
  },
  {
    id: 'necklace-006',
    name: { en: 'Onyx Bar Necklace', es: 'Collar Barra de Ónix' },
    description: { en: 'Minimalist black onyx bar on delicate chain. Sleek and contemporary.', es: 'Barra minimalista de ónix negro en delicada cadena. Elegante y contemporáneo.' },
    price: 150.00,
    currency: 'USD',
    category: 'necklaces',
    images: [],
    materials: [
      { en: 'Onyx', es: 'Ónix' },
      { en: '14K Gold Filled', es: 'Oro laminado 14K' },
    ],
    inStock: true,
  },
];
