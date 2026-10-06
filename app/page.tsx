'use client';

import Link from "next/link";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/lib/data/products";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Home page component
 * Features: Hero section, featured products, category highlights
 */
export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link
            href="/collections/all"
            className="inline-block px-8 py-3 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wider text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-gray-600">
              {t('home.featured.subtitle')}
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-12">
            <Link
              href="/collections/all"
              className="inline-block px-8 py-3 border border-gray-900 text-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
            >
              {t('home.featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

