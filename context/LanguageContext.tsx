'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Detects the browser's language and returns 'es' or 'en'
 */
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'es'; // Default to Spanish for SSR
  
  const browserLang = navigator.language.toLowerCase();
  
  // If browser language starts with 'es', use Spanish, otherwise English
  return browserLang.startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // Detect language on client side
    const savedLanguage = localStorage.getItem('language') as Language;
    const detectedLanguage = savedLanguage || detectBrowserLanguage();
    setLanguageState(detectedLanguage);
  }, []);

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
