'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { locale, toggleLanguage, dictionary } = useLanguage();

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="border-gray-300 text-gray-700 px-4 h-9 rounded-full hover:bg-gray-50 transition-colors"
    >
      {locale === 'es' ? dictionary.common.languageToggle : dictionary.common.languageToggleES}
    </Button>
  );
}
