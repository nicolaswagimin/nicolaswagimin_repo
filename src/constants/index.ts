// Application constants

export const ROUTES = {
  HOME: '/',
  ENTRADA: '/entrada',
} as const;

export const STORAGE_KEYS = {
  LOCALE: 'locale',
  THEME: 'theme',
  HAS_VISITED_PORTFOLIO: 'hasVisitedPortfolio',
} as const;

export const COOKIE_OPTIONS = {
  HAS_VISITED_PORTFOLIO: 'hasVisitedPortfolio=true; path=/; max-age=31536000', // 1 year
} as const;

export const GITHUB_CONFIG = {
  API_BASE_URL: 'https://api.github.com',
  REPOS_PER_PAGE: 100,
  REVALIDATE_TIME: 3600, // 1 hour in seconds
} as const;

export const ANIMATION_DELAYS = {
  PROJECT_ITEM_BASE: 0.1,
  PROJECT_ITEM_RANDOM: 0.05,
  GRADIENT_FADE_THRESHOLD: 10,
} as const;

export const SCROLL_OPTIONS = {
  BEHAVIOR: 'smooth' as ScrollBehavior,
  EXTRA_MARGIN: 20,
} as const;

