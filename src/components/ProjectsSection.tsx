'use client';

import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { fetchGitHubRepos, getLanguageColor, type GitHubRepo } from "@/lib/github";

export function ProjectsSection() {
  const { dictionary } = useLanguage();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        setLoading(true);
        const githubRepos = await fetchGitHubRepos('nicolaswagimin');
        setRepos(githubRepos);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los proyectos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  const openGitHub = () => {
    window.open('https://github.com/nicolaswagimin', '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="space-y-4">
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                  {dictionary.projects.sectionTitle}
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {dictionary.projects.title}
                </h2>
                <p className="text-muted-foreground max-w-md text-lg">
                  {dictionary.projects.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 flex items-end justify-end">
              <Button 
                onClick={openGitHub}
                variant="outline" 
                className="px-6 h-12"
              >
                {dictionary.projects.viewGitHub}
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-muted-foreground mt-4">Cargando proyectos...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Reintentar
              </Button>
            </div>
          )}

          {/* Projects List */}
          {!loading && !error && repos.length > 0 && (
            <div className="space-y-4">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/50"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-card border-2 border-border rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                {repo.name}
                                <svg
                                  className="w-4 h-4 text-muted-foreground"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            </h3>
                            {repo.language && (
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                                ></div>
                                <span className="text-sm text-muted-foreground">
                                  {repo.language}
                                </span>
                              </div>
                            )}
                          </div>
                          {repo.description && (
                            <p className="text-muted-foreground mt-2 text-sm">
                              {repo.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Topics */}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 ml-5">
                          {repo.topics.slice(0, 5).map((topic, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-muted rounded-md text-xs text-foreground border border-border"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground ml-5">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Actualizado {formatDate(repo.updated_at)}</span>
                        </div>
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 md:flex-shrink-0">
                      {repo.homepage && (
                        <Button
                          variant="outline"
                          onClick={() => window.open(repo.homepage!, '_blank')}
                          className="text-xs px-4 h-8"
                        >
                          Demo
                        </Button>
                      )}
                      <Button
                        variant="default"
                        onClick={() => window.open(repo.html_url, '_blank')}
                        className="text-xs px-4 h-8"
                      >
                        Ver código
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && repos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron proyectos públicos.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
