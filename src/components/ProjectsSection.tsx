'use client';

import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { APP_CONFIG } from "@/config";
import type { GitHubRepo } from "@/types/github";
import AnimatedListProjects from "./AnimatedListProjects";

export function ProjectsSection() {
  const { dictionary } = useLanguage();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        // Usar API route de Next.js para evitar problemas de CORS
        const response = await fetch('/api/github/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data.repos || []);
        setError(null);
      } catch (err) {
        console.error('Error loading GitHub repos:', err);
        setError('Failed to load projects');
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const openGitHub = () => {
    window.open(`https://github.com/${APP_CONFIG.githubUsername}`, '_blank');
  };

  return (
    <section className="py-24 bg-background text-foreground" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="space-y-4">
                <p className="text-muted-foreground uppercase tracking-wider">{dictionary.projects.sectionTitle}</p>
                <h2 className="text-4xl font-bold text-foreground">{dictionary.projects.title}</h2>
                <p className="text-muted-foreground max-w-md">
                  {dictionary.projects.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 flex items-end justify-end">
              <Button 
                onClick={openGitHub}
                variant="outline" 
                className="px-6 h-12 rounded-full"
              >
                {dictionary.projects.viewGitHub}
              </Button>
            </div>
          </div>
          
          {/* GitHub Projects List */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">{error}</p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="mb-16">
              <AnimatedListProjects 
                projects={repos}
                displayScrollbar={true}
                showGradients={true}
              />
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No projects found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
