'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/lib/config';
import { formatPrice } from '@/lib/utils';
import ProductGallery from '@/components/products/ProductGallery';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

/**
 * Product card component for displaying individual products in a grid
 * Displays: Product image, name, price, stock status, and WhatsApp contact button
 */
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, localize } = useLanguage();
  const name = localize(product.name);
  
  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `${t('whatsapp.product')} ${name} - ${formatPrice(product.price, product.currency)}`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="group block">
      <Link href={`/products/${product.id}`}>
        <ProductGallery
          images={product.images}
          alt={name}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={false}
          className="mb-4"
        >
          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />

          {/* Out of stock badge */}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-xs tracking-wide">
              OUT OF STOCK
            </div>
          )}
        </ProductGallery>

        <div className="space-y-1">
          <h3 className="text-sm text-gray-900 group-hover:text-gray-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>
      </Link>
      
      {/* WhatsApp Contact Button */}
      <button
        onClick={handleWhatsAppContact}
        disabled={!product.inStock}
        className={`w-full mt-3 py-2 text-xs tracking-wider transition-colors flex items-center justify-center space-x-2 ${
          product.inStock
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span>{t('product.inquire')}</span>
      </button>
    </div>
  );
}
