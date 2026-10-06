import { Product } from '@/types';

/**
 * Sample product data for the jewelry store
 * In a production environment, this would come from a database or CMS
 */
export const products: Product[] = [
  // Necklaces
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
    images: ['/images/products/necklace-baroque-pearl.jpg'],
    materials: [
      { en: 'Natural Baroque Pearls', es: 'Perlas naturales barrocas' },
      { en: 'Silver Clasp', es: 'Broche de plata' },
    ],
    inStock: true,
    featured: true,
    colors: ['White', 'Silver']
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
    colors: ['Brown', 'Black']
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
    colors: ['Yellow', 'Silver']
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
    colors: ['Gold']
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
    colors: ['White', 'Blue', 'Silver']
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
    colors: ['Black', 'Gold']
  },

  // Bracelets
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
    colors: ['Brown', 'Multi']
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
    colors: ['White', 'Silver']
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
    colors: ['Turquoise', 'Gold']
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
    colors: ['Black', 'Brown']
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
    colors: ['Pink', 'Silver']
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
    colors: ['Gold']
  },
];

/**
 * Get featured products
 */
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

/**
 * Get products by category
 */
export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

/**
 * Get product by ID
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
