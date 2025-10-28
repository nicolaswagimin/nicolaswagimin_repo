'use client';

import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { dictionary } = useLanguage();

  const openGitHub = () => {
    window.open('https://github.com/nicolaswagimin', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          
          {/* Featured Project */}
          <div className="mb-16">
            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 relative">
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-primary rounded-full text-white text-xs font-medium">
                        {dictionary.projects.featured.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center shadow-lg border border-border">
                        <span className="text-primary text-xl">🏥</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {dictionary.projects.featured.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {dictionary.projects.featured.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-card rounded-full border border-border text-xs text-foreground">
                        Java
                      </span>
                      <span className="px-3 py-1 bg-card rounded-full border border-border text-xs text-foreground">
                        Spring Boot
                      </span>
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs">
                        React
                      </span>
                      <span className="px-3 py-1 bg-card rounded-full border border-border text-xs text-foreground">
                        Patrones de Diseño
                      </span>
                    </div>
                    
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="px-6 h-10 w-fit"
                    >
                      {dictionary.projects.featured.viewDetails}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 relative">
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {dictionary.projects.project1.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {dictionary.projects.project1.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {dictionary.projects.project1.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Spring Boot
                  </span>
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Postman
                  </span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 relative">
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {dictionary.projects.project2.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {dictionary.projects.project2.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {dictionary.projects.project2.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Java
                  </span>
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Patrones de Diseño
                  </span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 relative">
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💼</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {dictionary.projects.project3.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {dictionary.projects.project3.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {dictionary.projects.project3.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">
                    Vercel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
