'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Theme } from '@/types';
import { applyTheme } from '@/utils/theme';
import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants';
import { APP_CONFIG } from '@/config';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

const isValidTheme = (value: string): value is Theme => {
  return value === 'light' || value === 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = APP_CONFIG.defaultTheme,
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  const setTheme = useCallback((newTheme: Theme) => {
    if (!isValidTheme(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}. Using default.`);
      return;
    }

    setThemeState(newTheme);
    applyTheme(newTheme);
    if (typeof window !== 'undefined') {
      storage.setString(STORAGE_KEYS.THEME, newTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  // Initialize theme on mount (client-side only)
  useEffect(() => {
    const storedTheme = storage.getString(STORAGE_KEYS.THEME);
    const initialTheme = (storedTheme && isValidTheme(storedTheme)) 
      ? storedTheme 
      : defaultTheme;
    
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, [defaultTheme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

