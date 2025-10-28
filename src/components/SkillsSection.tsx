'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function SkillsSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-muted/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground uppercase tracking-wider mb-4 text-sm font-medium">
              {dictionary.skills.sectionTitle}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {dictionary.skills.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {dictionary.skills.description}
            </p>
          </div>
          
          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">⚛</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {dictionary.skills.categories.frontend}
              </h3>
              <p className="text-sm text-muted-foreground">
                {dictionary.skills.categories.frontendDesc}
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {dictionary.skills.categories.backend}
              </h3>
              <p className="text-sm text-muted-foreground">
                {dictionary.skills.categories.backendDesc}
              </p>
            </div>
            
            <div className="bg-primary rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary-hover/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dictionary.skills.categories.frameworks}
              </h3>
              <p className="text-sm text-white/80">
                {dictionary.skills.categories.frameworksDesc}
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {dictionary.skills.categories.tools}
              </h3>
              <p className="text-sm text-muted-foreground">
                {dictionary.skills.categories.toolsDesc}
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {dictionary.skills.categories.deploy}
              </h3>
              <p className="text-sm text-muted-foreground">
                {dictionary.skills.categories.deployDesc}
              </p>
            </div>
          </div>
          
          {/* Detailed Skills */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Technical Skills */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.skills.technical.title}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">
                    {dictionary.skills.technical.subtitle}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: 'HTML / CSS', level: 70 },
                    { name: 'JavaScript', level: 60 },
                    { name: 'Next.js', level: 50 },
                    { name: 'Python', level: 50 },
                    { name: 'Java', level: 50 },
                    { name: 'Git / GitHub', level: 60 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills & Languages */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                      {dictionary.skills.soft.title}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {dictionary.skills.soft.subtitle}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="px-4 py-3 bg-card rounded-lg border border-border">
                      <span className="text-sm font-medium text-foreground">
                        {dictionary.skills.soft.collaboration}
                      </span>
                    </div>
                    <div className="px-4 py-3 bg-card rounded-lg border border-border">
                      <span className="text-sm font-medium text-foreground">
                        {dictionary.skills.soft.learning}
                      </span>
                    </div>
                    <div className="px-4 py-3 bg-card rounded-lg border border-border">
                      <span className="text-sm font-medium text-foreground">
                        {dictionary.skills.soft.adaptability}
                      </span>
                    </div>
                    <div className="px-4 py-3 bg-primary rounded-lg">
                      <span className="text-sm font-medium text-white">
                        {dictionary.skills.soft.problemSolving}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                      {dictionary.skills.languages.title}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {dictionary.skills.languages.subtitle}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="font-medium text-foreground">
                        {dictionary.skills.languages.spanish}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {dictionary.skills.languages.native}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="font-medium text-foreground">
                        {dictionary.skills.languages.english}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {dictionary.skills.languages.basicIntermediate}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                      {dictionary.skills.methodologies.title}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {dictionary.skills.methodologies.subtitle}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      dictionary.skills.methodologies.scrum,
                      dictionary.skills.methodologies.kanban,
                      dictionary.skills.methodologies.designPatterns,
                    ].map((methodology, index) => (
                      <div key={index} className="px-4 py-3 bg-card rounded-lg border border-border">
                        <span className="text-sm font-medium text-foreground">{methodology}</span>
                      </div>
                    ))}
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
