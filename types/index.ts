/**
 * Type definitions for the jewelry e-commerce application
 */

export type ProductCategory = 'necklaces' | 'bracelets';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  materials: string[];
  inStock: boolean;
  featured?: boolean;
  colors?: string[];
}
