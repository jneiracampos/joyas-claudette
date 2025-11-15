'use client';

import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data/products';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Product detail page
 * Displays full product information with WhatsApp contact functionality
 */
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { t } = useLanguage();

  if (!product) {
    notFound();
  }

  const handleContactWhatsApp = () => {
    const message = `${t('whatsapp.product')} ${product.name} - $${product.price.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/573112150040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
              ${product.price.toFixed(2)}
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
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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
