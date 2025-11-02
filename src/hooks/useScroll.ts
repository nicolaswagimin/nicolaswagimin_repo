// Custom hook for scroll functionality

import { useCallback } from 'react';
import { scrollToSection } from '@/utils/scroll';

/**
 * Custom hook for scrolling to sections
 */
export function useScroll() {
  const scroll = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return { scroll };
}

