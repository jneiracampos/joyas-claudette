'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

/**
 * About page - Biography of the artist and business information
 */
export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Artist Photo and Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            {/* Photo */}
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/artist.jpeg"
                alt="Claudette - Artista Joyera"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Biography */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light tracking-wider text-gray-900 mb-4">
                  {t('about.bio.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('about.bio.text')}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('about.mission.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('about.mission.card')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('about.quality.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('about.quality.text')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('about.love.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('about.love.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light tracking-wider text-white mb-4">
            ¿Lista para encontrar tu pieza perfecta?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Explora nuestra colección y descubre la joya que cuenta tu historia
          </p>
          <a
            href="/collections/all"
            className="inline-block px-8 py-3 bg-white text-gray-900 tracking-wide hover:bg-gray-100 transition-colors"
          >
            VER COLECCIÓN
          </a>
        </div>
      </section>
    </div>
  );
}
