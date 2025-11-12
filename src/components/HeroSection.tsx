'use client';

import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";
import Stack from "./Stack";

export function HeroSection() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-muted rounded-full">
              <span className="text-muted-foreground text-sm font-medium">{dictionary.hero.location}</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.hero.subtitle}
                  </p>
                  <div className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    <SplitText
                      text={dictionary.hero.title}
                      className="font-bold"
                      tag="span"
                      delay={50}
                      duration={0.8}
                      splitType="chars"
                      from={{ opacity: 0, y: 50 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.2}
                      textAlign="left"
                    />
                    {" "}
                    <SplitText
                      text={dictionary.hero.titleHighlight}
                      className="font-bold text-primary"
                      tag="span"
                      delay={50}
                      duration={0.8}
                      splitType="chars"
                      from={{ opacity: 0, y: 50 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.2}
                      textAlign="left"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 max-w-lg">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dictionary.hero.description}
                  </p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 h-12"
                >
                  {dictionary.hero.buttons.viewProjects}
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline" 
                  className="px-8 h-12"
                >
                  {dictionary.hero.buttons.contact}
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">{dictionary.hero.stats.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">2</div>
                  <div className="text-sm text-muted-foreground">{dictionary.hero.stats.years}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">Active</div>
                  <div className="text-sm text-muted-foreground">{dictionary.hero.stats.status}</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Stack */}
            <div className="lg:col-span-5">
              <div className="relative group flex items-center justify-center p-4" style={{ height: '600px' }}>
                <div className="relative w-full max-w-md flex items-center justify-center">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 300, height: 400 }}
                    cardsData={[
                      { id: 1, img: "/images/hero-1.webp" },
                      { id: 2, img: "/images/hero-2.webp" }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
