'use client';

import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";
import AnimatedListProjects from "./AnimatedListProjects";

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
            <AnimatedListProjects
              projects={repos}
              onProjectSelect={(project) => {
                window.open(project.html_url, '_blank');
              }}
              showGradients={true}
              displayScrollbar={true}
              className="mx-auto"
              itemClassName="text-center"
            />
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
