// Re-export types and functions from the service layer for backwards compatibility
export type { GitHubRepo } from '@/types/github';
export { fetchGitHubRepos, getLanguageColor } from '@/services/github.service';

