// Scroll utility functions

import type { ScrollOptions } from '@/types';

/**
 * Smoothly scrolls to an element by ID
 */
export const scrollToSection = (
  sectionId: string,
  options: ScrollOptions = { behavior: 'smooth', block: 'start' }
): void => {
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: options.behavior || 'smooth',
      block: options.block || 'start',
    });
  }
};

/**
 * Scrolls an element into view with custom margin
 */
export const scrollToElement = (
  container: HTMLElement,
  element: HTMLElement,
  margin: number = 20
): void => {
  const containerScrollTop = container.scrollTop;
  const containerHeight = container.clientHeight;
  const itemTop = element.offsetTop;
  const itemBottom = itemTop + element.offsetHeight;

  if (itemTop < containerScrollTop + margin) {
    container.scrollTo({
      top: itemTop - margin,
      behavior: 'smooth',
    });
  } else if (itemBottom > containerScrollTop + containerHeight - margin) {
    container.scrollTo({
      top: itemBottom - containerHeight + margin,
      behavior: 'smooth',
    });
  }
};

