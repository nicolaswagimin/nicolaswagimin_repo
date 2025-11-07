import { NextResponse } from 'next/server';
import { fetchGitHubRepos } from '@/services/github.service';
import { APP_CONFIG } from '@/config';

export async function GET() {
  try {
    const repos = await fetchGitHubRepos(APP_CONFIG.githubUsername);
    return NextResponse.json({ repos });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}

