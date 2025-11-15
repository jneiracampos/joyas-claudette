'use client';

import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/lib/data/products";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Necklaces collection page
 */
export default function NecklacesPage() {
  const necklaces = getProductsByCategory('necklaces');
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-light tracking-wider text-gray-900 mb-4">
          {t('collections.necklaces.title')}
        </h1>
        <p className="text-gray-600">
          {t('collections.necklaces.subtitle')}
        </p>
      </div>
      
      <ProductGrid products={necklaces} />
    </div>
  );
}
