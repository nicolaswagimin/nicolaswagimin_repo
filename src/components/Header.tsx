'use client';

import { Button } from "./ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">Nicolás Wagimin</span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <input 
              type="text" 
              placeholder={dictionary.header.searchPlaceholder}
              className="w-full h-10 bg-muted rounded-full border border-border px-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.header.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.header.nav.projects}
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.header.nav.skills}
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.header.nav.experience}
            </button>
            
            <LanguageToggle />
            <ThemeToggle />
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="px-6 h-9"
            >
              {dictionary.header.nav.contact}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="outline" className="w-10 h-10 p-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
