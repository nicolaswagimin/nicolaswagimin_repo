// Custom hook for localStorage with SSR safety

import { useState, useCallback } from 'react';
import { storage } from '@/utils/storage';
import type { LocalStorageValue } from '@/types';

/**
 * Custom hook for managing localStorage with React state
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): LocalStorageValue<T> {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = storage.get<T>(key);
      return item ?? initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        
        // Save state
        setStoredValue(valueToStore);
        
        // Save to local storage
        storage.set(key, valueToStore);
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      storage.remove(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return {
    value: storedValue,
    setValue,
    removeValue,
  };
}

/**
 * Custom hook for managing string values in localStorage
 */
export function useLocalStorageString(
  key: string,
  initialValue: string
): LocalStorageValue<string> {
  const [storedValue, setStoredValue] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      return storage.getString(key) ?? initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string | ((val: string) => string)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        
        setStoredValue(valueToStore);
        storage.setString(key, valueToStore);
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      storage.remove(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return {
    value: storedValue,
    setValue,
    removeValue,
  };
}

