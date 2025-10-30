// GitHub API types
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
  default_branch: string;
}

// Fetch GitHub repositories
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await response.json() as Array<{
      id: number;
      name: string;
      full_name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      updated_at: string;
      topics: string[];
      homepage: string | null;
      default_branch: string;
      fork: boolean;
      visibility: string;
    }>;
    
    // Filter out forks and return only public repos
    return repos
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
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

// Get language color (common GitHub language colors)
export function getLanguageColor(language: string | null): string {
  if (!language) return '#64748b';
  
  const colors: Record<string, string> = {
    'JavaScript': '#f7df1e',
    'TypeScript': '#3178c6',
    'Python': '#3776ab',
    'Java': '#ed8b00',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'React': '#61dafb',
    'Next.js': '#000000',
    'Django': '#092e20',
    'Spring': '#6db33f',
  };

  return colors[language] || '#64748b';
}

