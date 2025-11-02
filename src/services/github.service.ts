// GitHub API service

import { GITHUB_CONFIG } from '@/constants';
import type { GitHubRepo, GitHubApiResponse } from '@/types/github';

export interface FetchReposOptions {
  username: string;
  sort?: 'updated' | 'created' | 'pushed' | 'full_name';
  perPage?: number;
  revalidate?: number;
}

export interface FetchReposResult {
  data: GitHubRepo[];
  error: Error | null;
}

/**
 * Internal function to fetch GitHub repositories
 */
async function fetchGitHubReposInternal(
  options: FetchReposOptions
): Promise<FetchReposResult> {
  const {
    username,
    sort = 'updated',
    perPage = GITHUB_CONFIG.REPOS_PER_PAGE,
    revalidate = GITHUB_CONFIG.REVALIDATE_TIME,
  } = options;

  try {
    const url = `${GITHUB_CONFIG.API_BASE_URL}/users/${username}/repos?sort=${sort}&per_page=${perPage}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate },
    });

    if (!response.ok) {
      const errorMessage = `Failed to fetch repositories: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const repos = (await response.json()) as GitHubApiResponse[];

    // Filter out forks and return only public repos
    const filteredRepos: GitHubRepo[] = repos
      .filter((repo) => !repo.fork && repo.visibility === 'public')
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        homepage: repo.homepage,
        default_branch: repo.default_branch,
      }));

    return {
      data: filteredRepos,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return {
      data: [],
      error: error instanceof Error ? error : new Error('Unknown error'),
    };
  }
}

/**
 * Fetches GitHub repositories for a user (backwards compatible)
 * @param username - GitHub username
 * @returns Array of GitHub repositories
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const result = await fetchGitHubReposInternal({ username });
  return result.data;
}

/**
 * Fetches GitHub repositories with error handling
 * @param options - Fetch options
 * @returns Result with data and error
 */
export async function fetchGitHubReposWithError(
  options: FetchReposOptions
): Promise<FetchReposResult> {
  return fetchGitHubReposInternal(options);
}

/**
 * Gets the color for a programming language
 */
export function getLanguageColor(language: string | null): string {
  if (!language) return '#64748b';

  const colors: Record<string, string> = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3776ab',
    Java: '#ed8b00',
    HTML: '#e34c26',
    CSS: '#563d7c',
    React: '#61dafb',
    'Next.js': '#000000',
    Django: '#092e20',
    Spring: '#6db33f',
    'C++': '#00599c',
    'C#': '#239120',
    Go: '#00add8',
    Rust: '#000000',
    PHP: '#777bb4',
    Ruby: '#cc342d',
    Swift: '#fa7343',
    Kotlin: '#7f52ff',
  };

  return colors[language] || '#64748b';
}

