// Theme utility functions

import type { Theme } from '@/types';

/**
 * Applies theme classes to the document
 */
export const applyTheme = (theme: Theme): void => {
  if (typeof document === 'undefined') return;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
};

/**
 * Gets the current system theme preference
 */
export const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

