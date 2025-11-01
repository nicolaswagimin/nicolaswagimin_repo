// Application configuration

export const APP_CONFIG = {
  defaultLocale: 'es' as const,
  defaultTheme: 'dark' as const,
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'nicolaswagimin',
} as const;

