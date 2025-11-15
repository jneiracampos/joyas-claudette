import { Product } from '@/types';

/**
 * Sample product data for the jewelry store
 * In a production environment, this would come from a database or CMS
 */
export const products: Product[] = [
  // Necklaces
  {
    id: 'necklace-001',
    name: 'Pearl Cascade Necklace',
    description: 'Elegant freshwater pearl necklace with delicate gold chain. Perfect for both casual and formal occasions.',
    price: 295.00,
    category: 'necklaces',
    images: ['/products/necklace-pearl-1.jpg'],
    materials: ['Freshwater Pearl', '14K Gold Filled'],
    inStock: true,
    featured: true,
    colors: ['White', 'Gold']
  },
  {
    id: 'necklace-002',
    name: 'Smoky Quartz Pendant',
    description: 'Natural smoky quartz stone on adjustable cord. A statement piece with earthy elegance.',
    price: 225.00,
    category: 'necklaces',
    images: ['/products/necklace-quartz-1.jpg'],
    materials: ['Smoky Quartz', 'Leather Cord'],
    inStock: true,
    featured: true,
    colors: ['Brown', 'Black']
  },
  {
    id: 'necklace-003',
    name: 'Citrine Drop Necklace',
    description: 'Radiant citrine gemstone with sterling silver accents. Brings warmth and light to any outfit.',
    price: 290.00,
    category: 'necklaces',
    images: ['/products/necklace-citrine-1.jpg'],
    materials: ['Citrine', 'Sterling Silver'],
    inStock: true,
    colors: ['Yellow', 'Silver']
  },
  {
    id: 'necklace-004',
    name: 'Layered Chain Necklace',
    description: 'Multi-strand delicate chain necklace. Modern and versatile for everyday wear.',
    price: 175.00,
    category: 'necklaces',
    images: ['/products/necklace-chain-1.jpg'],
    materials: ['14K Gold Filled'],
    inStock: true,
    colors: ['Gold']
  },
  {
    id: 'necklace-005',
    name: 'Moonstone Collar',
    description: 'Stunning moonstone beads in a collar style. Ethereal and sophisticated.',
    price: 395.00,
    category: 'necklaces',
    images: ['/products/necklace-moonstone-1.jpg'],
    materials: ['Moonstone', 'Sterling Silver'],
    inStock: false,
    featured: true,
    colors: ['White', 'Blue', 'Silver']
  },
  {
    id: 'necklace-006',
    name: 'Onyx Bar Necklace',
    description: 'Minimalist black onyx bar on delicate chain. Sleek and contemporary.',
    price: 150.00,
    category: 'necklaces',
    images: ['/products/necklace-onyx-1.jpg'],
    materials: ['Onyx', '14K Gold Filled'],
    inStock: true,
    colors: ['Black', 'Gold']
  },

  // Bracelets
  {
    id: 'bracelet-001',
    name: 'Beaded Wrap Bracelet',
    description: 'Multi-wrap leather bracelet with natural stone beads. A Chan Luu signature style.',
    price: 195.00,
    category: 'bracelets',
    images: ['/products/bracelet-wrap-1.jpg'],
    materials: ['Natural Stones', 'Leather', 'Sterling Silver'],
    inStock: true,
    featured: true,
    colors: ['Brown', 'Multi']
  },
  {
    id: 'bracelet-002',
    name: 'Pearl Strand Bracelet',
    description: 'Classic freshwater pearl bracelet with adjustable clasp. Timeless elegance.',
    price: 165.00,
    category: 'bracelets',
    images: ['/products/bracelet-pearl-1.jpg'],
    materials: ['Freshwater Pearl', 'Sterling Silver'],
    inStock: true,
    colors: ['White', 'Silver']
  },
  {
    id: 'bracelet-003',
    name: 'Turquoise Chain Bracelet',
    description: 'Vibrant turquoise stones linked with delicate gold chain. Bohemian chic.',
    price: 185.00,
    category: 'bracelets',
    images: ['/products/bracelet-turquoise-1.jpg'],
    materials: ['Turquoise', '14K Gold Filled'],
    inStock: true,
    featured: true,
    colors: ['Turquoise', 'Gold']
  },
  {
    id: 'bracelet-004',
    name: 'Leather Cuff',
    description: 'Wide leather cuff with metal stud details. Bold and edgy.',
    price: 125.00,
    category: 'bracelets',
    images: ['/products/bracelet-cuff-1.jpg'],
    materials: ['Leather', 'Brass'],
    inStock: true,
    colors: ['Black', 'Brown']
  },
  {
    id: 'bracelet-005',
    name: 'Rose Quartz Bracelet',
    description: 'Soft pink rose quartz beads on elastic. Gentle and feminine.',
    price: 145.00,
    category: 'bracelets',
    images: ['/products/bracelet-rosequartz-1.jpg'],
    materials: ['Rose Quartz', 'Sterling Silver'],
    inStock: true,
    colors: ['Pink', 'Silver']
  },
  {
    id: 'bracelet-006',
    name: 'Gold Charm Bracelet',
    description: 'Delicate gold chain with assorted charms. Personalized elegance.',
    price: 210.00,
    category: 'bracelets',
    images: ['/products/bracelet-charm-1.jpg'],
    materials: ['14K Gold Filled'],
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

/**
 * Get all available categories
 */
export const getCategories = (): Array<{ value: Product['category']; label: string }> => {
  return [
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'bracelets', label: 'Bracelets' },
  ];
};
