'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";

export function ExperienceSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-muted/30" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground uppercase tracking-wider mb-4 text-sm font-medium">
              {dictionary.experience.sectionTitle}
            </p>
            <SplitText
              text={dictionary.experience.title}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              tag="h2"
              delay={80}
              duration={0.7}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {dictionary.experience.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Academic Experience */}
            <div className="lg:col-span-7">
              <div className="space-y-4 mb-12">
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                  {dictionary.experience.academic.title}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {dictionary.experience.academic.subtitle}
                </h3>
              </div>
              
              <div className="space-y-12">
                {/* Current Education */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-card border-2 border-border rounded-full"></div>
                  <div className="absolute left-2 top-6 w-px h-full bg-border"></div>
                  
                  <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-foreground">
                            {dictionary.experience.currentEducation.title}
                          </h4>
                          <p className="text-muted-foreground font-medium">
                            {dictionary.experience.currentEducation.institution}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-sm text-primary">
                          {dictionary.experience.currentEducation.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          {dictionary.experience.currentEducation.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Java</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Python</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Patrones de Diseño</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Scrum</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Experience */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-card border-2 border-border rounded-full"></div>
                  <div className="absolute left-2 top-6 w-px h-full bg-border"></div>
                  
                  <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-foreground">
                            {dictionary.experience.projectExperience.title}
                          </h4>
                          <p className="text-muted-foreground font-medium">
                            {dictionary.experience.projectExperience.institution}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground border border-border">
                          {dictionary.experience.projectExperience.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          {dictionary.experience.projectExperience.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Spring Boot</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">React</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Next.js</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Vercel</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Learning Phase */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-card border-2 border-border rounded-full"></div>
                  
                  <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-foreground">
                            {dictionary.experience.selfLearning.title}
                          </h4>
                          <p className="text-muted-foreground font-medium">
                            {dictionary.experience.selfLearning.institution}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground border border-border">
                          {dictionary.experience.selfLearning.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          {dictionary.experience.selfLearning.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">HTML/CSS</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">JavaScript</span>
                        <span className="px-2 py-1 bg-card rounded text-xs text-foreground border border-border">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education & Status */}
            <div className="lg:col-span-5 space-y-16">
              {/* Current Education */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.experience.education.title}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {dictionary.experience.education.subtitle}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {dictionary.experience.degree.title}
                      </h4>
                      <p className="text-muted-foreground font-medium">
                        {dictionary.experience.degree.institution}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {dictionary.experience.degree.campus}
                        </span>
                        <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded text-xs">
                          {dictionary.experience.degree.status}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {dictionary.experience.degree.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Learning Areas */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.experience.focus.title}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {dictionary.experience.focus.subtitle}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img src="/images/Webdeloper.png" alt="Web Developer" className="w-6 h-6 object-contain" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">
                        {dictionary.experience.areas.webDev.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {dictionary.experience.areas.webDev.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img src="/images/Backend.png" alt="Backend" className="w-6 h-6 object-contain" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">
                        {dictionary.experience.areas.softwareEng.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {dictionary.experience.areas.softwareEng.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img src="/images/Frontend.png" alt="Frontend" className="w-6 h-6 object-contain" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">
                        {dictionary.experience.areas.appDev.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {dictionary.experience.areas.appDev.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.experience.status.title}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    {dictionary.experience.status.subtitle}
                  </h3>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-semibold text-primary">
                      {dictionary.experience.availability.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {dictionary.experience.availability.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
