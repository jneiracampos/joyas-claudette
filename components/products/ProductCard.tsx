'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Product card component for displaying individual products in a grid
 * Displays: Product image, name, price, stock status, and WhatsApp contact button
 */
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  
  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `${t('whatsapp.product')} ${product.name} - $${product.price.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/573112150040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group block">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
          {/* Placeholder for product image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">Image placeholder</span>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
          
          {/* Out of stock badge */}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-xs tracking-wide">
              OUT OF STOCK
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-sm text-gray-900 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Color indicators */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex space-x-1 pt-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ 
                    backgroundColor: color.toLowerCase() === 'multi' ? 'transparent' : color.toLowerCase(),
                    background: color.toLowerCase() === 'multi' 
                      ? 'linear-gradient(45deg, #f3f4f6 50%, #d1d5db 50%)' 
                      : undefined
                  }}
                  title={color}
                />
              ))}
            </div>
          )}
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
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span>{t('product.inquire')}</span>
      </button>
    </div>
  );
}
