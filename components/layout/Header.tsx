'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Main header component with navigation
 * Features: Logo, navigation menu, language toggle, WhatsApp contact
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light tracking-wider text-gray-900">
              JOYAS CLAUDETTE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/collections/necklaces" 
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('nav.necklaces')}
            </Link>
            <Link 
              href="/collections/bracelets" 
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('nav.bracelets')}
            </Link>
            <Link 
              href="/collections/all" 
              className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('nav.shopAll')}
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <a 
              href={`https://wa.me/573112150040?text=${encodeURIComponent(t('whatsapp.general'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Contact via WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm">{t('nav.contact')}</span>
            </a>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/collections/necklaces" 
                className="text-sm tracking-wide text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.necklaces')}
              </Link>
              <Link 
                href="/collections/bracelets" 
                className="text-sm tracking-wide text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.bracelets')}
              </Link>
              <Link 
                href="/collections/all" 
                className="text-sm tracking-wide text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.shopAll')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
