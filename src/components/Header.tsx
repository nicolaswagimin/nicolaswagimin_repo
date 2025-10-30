'use client';

import { useState } from 'react';
import { Button } from "./ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { dictionary } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-card rounded-full border border-border flex items-center justify-center">
              <span className="text-foreground text-sm font-bold">N</span>
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
          
          {/* Navigation Menu - Desktop */}
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
            <Button 
              variant="outline" 
              className="w-10 h-10 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {dictionary.header.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {dictionary.header.nav.projects}
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {dictionary.header.nav.skills}
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {dictionary.header.nav.experience}
              </button>
              <div className="flex items-center gap-4 pt-2">
                <LanguageToggle />
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 h-9"
                >
                  {dictionary.header.nav.contact}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
