// Shared types across the application

export type { Locale, Dictionary } from '@/lib/dictionaries';

export type Theme = 'light' | 'dark';

export interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

export interface LocalStorageValue<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}

