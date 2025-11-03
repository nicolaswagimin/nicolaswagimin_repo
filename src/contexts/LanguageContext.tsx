'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Dictionary, Locale, getDictionary } from '@/lib/dictionaries';
import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants';
import { APP_CONFIG } from '@/config';

interface LanguageContextType {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLocale?: Locale;
}

const isValidLocale = (value: string): value is Locale => {
  return value === 'es' || value === 'en';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLocale = APP_CONFIG.defaultLocale,
}) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(() => 
    getDictionary(defaultLocale)
  );

  const setLocale = useCallback((newLocale: Locale) => {
    if (!isValidLocale(newLocale)) {
      console.warn(`Invalid locale: ${newLocale}. Using default.`);
      return;
    }

    setLocaleState(newLocale);
    setDictionary(getDictionary(newLocale));
    if (typeof window !== 'undefined') {
      storage.setString(STORAGE_KEYS.LOCALE, newLocale);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLocale: Locale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  }, [locale, setLocale]);

  // Initialize locale from storage on mount (client-side only)
  useEffect(() => {
    const storedLocale = storage.getString(STORAGE_KEYS.LOCALE);
    if (storedLocale && isValidLocale(storedLocale)) {
      setLocaleState(storedLocale);
      setDictionary(getDictionary(storedLocale));
    }
  }, []);

  const value: LanguageContextType = {
    locale,
    dictionary,
    setLocale,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
