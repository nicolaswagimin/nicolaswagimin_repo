'use client';

import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-400 rounded-full opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Text */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full mb-6">
              <span className="text-gray-700 text-sm font-medium">{dictionary.hero.location}</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-600 uppercase tracking-wider">{dictionary.hero.subtitle}</p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                    {dictionary.hero.title}{" "}
                    <span className="text-gray-600">{dictionary.hero.titleHighlight}</span>
                  </h1>
                </div>
                
                <div className="space-y-3 max-w-lg">
                  <p className="text-gray-600 text-lg">
                    {dictionary.hero.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 h-12 rounded-full"
                >
                  {dictionary.hero.buttons.viewProjects}
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline" 
                  className="border-gray-400 text-gray-700 px-8 h-12 rounded-full"
                >
                  {dictionary.hero.buttons.contact}
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">6+</div>
                  <div className="text-sm text-gray-500">{dictionary.hero.stats.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">2</div>
                  <div className="text-sm text-gray-500">{dictionary.hero.stats.years}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">Active</div>
                  <div className="text-sm text-gray-500">{dictionary.hero.stats.status}</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Magazine Style Layout */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image */}
                <div className="w-full h-96 bg-gray-300 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-semibold text-lg mb-2">{dictionary.hero.magazine.title}</div>
                    <div className="text-white/80 text-sm">{dictionary.hero.magazine.subtitle}</div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 w-24 h-32 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                  <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                  <div className="text-xs text-gray-600 mb-1">{dictionary.hero.magazine.latestProject}</div>
                  <div className="text-xs text-gray-400">{dictionary.hero.magazine.project}</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-gray-800 rounded-lg p-4">
                  <div className="text-white text-sm font-medium mb-2">{dictionary.hero.magazine.javaSpring}</div>
                  <div className="text-gray-300 text-xs">{dictionary.hero.magazine.learning}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
