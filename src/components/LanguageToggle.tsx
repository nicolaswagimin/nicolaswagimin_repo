'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { locale, toggleLanguage, dictionary } = useLanguage();

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="px-4 h-9"
    >
      {locale === 'es' ? dictionary.common.languageToggle : dictionary.common.languageToggleES}
    </Button>
  );
}
