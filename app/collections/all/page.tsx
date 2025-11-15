'use client';

import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/lib/data/products";
import { useLanguage } from "@/context/LanguageContext";

/**
 * All products page
 * Displays all available products in the store
 */
export default function AllProductsPage() {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-light tracking-wider text-gray-900 mb-4">
          {t('collections.all.title')}
        </h1>
        <p className="text-gray-600">
          {t('collections.all.subtitle')}
        </p>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
}
