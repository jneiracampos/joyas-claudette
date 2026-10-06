'use client';

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import type { LocalizedText } from '@/types';

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
  /** Pick the current language from a localized text */
  localize: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Detects the saved or browser language and returns 'es' or 'en'
 */
function detectLanguage(): Language {
  const savedLanguage = localStorage.getItem('language') as Language | null;
  if (savedLanguage) return savedLanguage;

  // If browser language starts with 'es', use Spanish, otherwise English
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

// The language never changes while the page is open, so there is nothing to subscribe to
const subscribe = () => () => {};

// Server and hydration render default to Spanish; the client then switches if needed
const getServerLanguage = (): Language => 'es';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, detectLanguage, getServerLanguage);

  const t = useCallback(
    (key: TranslationKey): string => (translations[language] as Record<string, string>)[key] || key,
    [language],
  );

  const localize = useCallback((text: LocalizedText): string => text[language], [language]);

  const value = useMemo(() => ({ language, t, localize }), [language, t, localize]);

  return (
    <LanguageContext.Provider value={value}>
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
