'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Footer component with company info and links
 */
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Link */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              {t('footer.about')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t('footer.about.text')}
            </p>
            <Link href="/about" className="text-sm text-gray-900 hover:text-gray-600 font-semibold">
              {t('footer.about.link')} →
            </Link>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              {t('footer.shop')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/necklaces" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('nav.necklaces')}
                </Link>
              </li>
              <li>
                <Link href="/collections/bracelets" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('nav.bracelets')}
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="text-sm text-gray-600 hover:text-gray-900">
                  {t('nav.shopAll')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Joyas Claudette. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
