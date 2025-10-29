import { es } from './es';
import { en } from './en';

export type Dictionary = typeof es;

export const dictionaries = {
  es,
  en,
} as const;

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale];
};
