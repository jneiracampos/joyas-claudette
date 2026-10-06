'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/lib/config';
import { formatPrice } from '@/lib/utils';
import ColorSwatch from '@/components/ui/ColorSwatch';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

/**
 * Product detail page
 * Displays full product information with WhatsApp contact functionality
 */
export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const { t } = useLanguage();

  if (!product) {
    notFound();
  }

  const handleContactWhatsApp = () => {
    const message = `${t('whatsapp.product')} ${product.name} - ${formatPrice(product.price)}`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Materials */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-3">
              {t('product.materials')}
            </h3>
            <ul className="space-y-1">
              {product.materials.map((material, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {material}
                </li>
              ))}
            </ul>
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-3">
                {t('product.colors')}
              </h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <ColorSwatch key={index} color={color} className="w-8 h-8 border-2 border-gray-300" />
                ))}
              </div>
            </div>
          )}

          {/* Contact via WhatsApp */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <button
              onClick={handleContactWhatsApp}
              disabled={!product.inStock}
              className={`w-full py-4 text-sm tracking-wider transition-colors flex items-center justify-center space-x-3 ${
                product.inStock
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>
                {product.inStock 
                  ? t('product.contact')
                  : t('product.outOfStock')
                }
              </span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-600 space-y-2">
            <p>{t('product.info1')}</p>
            <p>{t('product.info2')}</p>
            <p>{t('product.info3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
