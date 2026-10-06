'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/lib/config';
import { NAV_LINKS } from '@/lib/navigation';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

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
            {NAV_LINKS.map(({ href, labelKey }) => (
              <Link
                key={href}
                href={href}
                className="text-sm tracking-wide text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t(labelKey)}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <a 
              href={buildWhatsAppUrl(t('whatsapp.general'))}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
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
              {NAV_LINKS.map(({ href, labelKey }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm tracking-wide text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(labelKey)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
