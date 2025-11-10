'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";

export function AboutSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <div className="space-y-4">
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                  {dictionary.about.sectionTitle}
                </p>
                <SplitText
                  text={dictionary.about.title}
                  className="text-4xl lg:text-5xl font-bold text-foreground"
                  tag="h2"
                  delay={80}
                  duration={0.7}
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  textAlign="left"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4 max-w-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {dictionary.about.description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left - Image Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative group">
                <div className="w-full aspect-square bg-muted rounded-2xl border-2 border-border overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-primary">NW</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {dictionary.about.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">FE</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {dictionary.about.skills.frontend}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dictionary.about.skills.frontendStatus}
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {dictionary.about.skills.backend}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {dictionary.about.skills.backendStatus}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Bio Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {dictionary.about.bio.p1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {dictionary.about.bio.p2}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {dictionary.about.bio.p3}
                  </p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">2</div>
                    <div className="text-sm text-muted-foreground">
                      {dictionary.about.metrics.years}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">6</div>
                    <div className="text-sm text-muted-foreground">
                      {dictionary.about.metrics.projects}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">2021</div>
                    <div className="text-sm text-muted-foreground">
                      {dictionary.about.metrics.startYear}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills Categories */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {dictionary.about.skills.frontend}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      HTML/CSS
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      JavaScript
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Next.js
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {dictionary.about.skills.backend}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Java
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Django
                    </span>
                    <span className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground">
                      Spring Boot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
