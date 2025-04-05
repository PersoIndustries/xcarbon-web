
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import es from './translations/es.json';
import en from './translations/en.json';
import fr from './translations/fr.json';

export type Language = 'es' | 'en' | 'fr';

type TranslationsType = {
  [key: string]: any;
};

const translations: Record<Language, TranslationsType> = {
  es,
  en,
  fr
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get language from localStorage or default to Spanish
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, k)) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
