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

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface FilterOptions {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  inStockOnly?: boolean;
}
