'use client';

import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScroll } from "@/hooks/useScroll";
import { APP_CONFIG } from "@/config";

export function ProjectsSection() {
  const { dictionary } = useLanguage();
  const { scroll } = useScroll();

  const openGitHub = () => {
    window.open(`https://github.com/${APP_CONFIG.githubUsername}`, '_blank');
  };

  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="space-y-4">
                <p className="text-gray-500 uppercase tracking-wider">{dictionary.projects.sectionTitle}</p>
                <h2 className="text-4xl font-bold text-gray-800">{dictionary.projects.title}</h2>
                <p className="text-gray-600 max-w-md">
                  {dictionary.projects.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 flex items-end justify-end">
              <Button 
                onClick={openGitHub}
                variant="outline" 
                className="border-gray-400 text-gray-700 px-6 h-12 rounded-full"
              >
                {dictionary.projects.viewGitHub}
              </Button>
            </div>
          </div>
          
          {/* Featured Project */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-300 relative">
                    <div className="absolute inset-0 bg-blue-200 opacity-80"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-white text-xs font-medium">
                        {dictionary.projects.featured.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-blue-600 text-xl">🏥</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-800">{dictionary.projects.featured.title}</h3>
                      <p className="text-gray-600">
                        {dictionary.projects.featured.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-xs text-gray-700">
                        Java
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-xs text-gray-700">
                        Spring Boot
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-white">
                        React
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-xs text-gray-700">
                        Patrones de Diseño
                      </span>
                    </div>
                    
                    <Button 
                      onClick={() => scroll('contact')}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-6 h-10 rounded-full w-fit"
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-300 relative">
                <div className="absolute inset-0 bg-green-200 opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{dictionary.projects.project1.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{dictionary.projects.project1.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {dictionary.projects.project1.description}
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Spring Boot</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Postman</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-300 relative">
                <div className="absolute inset-0 bg-purple-200 opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{dictionary.projects.project2.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{dictionary.projects.project2.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {dictionary.projects.project2.description}
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Java</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Patrones de Diseño</span>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-300 relative">
                <div className="absolute inset-0 bg-orange-200 opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💼</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{dictionary.projects.project3.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{dictionary.projects.project3.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {dictionary.projects.project3.description}
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Next.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
