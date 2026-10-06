'use client';

import ProductGrid from '@/components/products/ProductGrid';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/lib/translations';
import type { Product } from '@/types';

/**
 * Shared layout for collection pages: translated title, subtitle and product grid
 */
interface CollectionPageProps {
  products: Product[];
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
}

export default function CollectionPage({ products, titleKey, subtitleKey }: CollectionPageProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-light tracking-wider text-gray-900 mb-4">
          {t(titleKey)}
        </h1>
        <p className="text-gray-600">
          {t(subtitleKey)}
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
