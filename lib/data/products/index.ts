import type { Product } from '@/types';
import { necklaces } from './necklaces';
import { bracelets } from './bracelets';

/**
 * All products. Sample data: in a production environment this would come from a database or CMS
 */
export const products: Product[] = [...necklaces, ...bracelets];

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
  return category === 'necklaces' ? necklaces : bracelets;
};

/**
 * Get product by ID
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
