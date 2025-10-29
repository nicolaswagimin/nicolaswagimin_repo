'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function SkillsSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-gray-100" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">{dictionary.skills.sectionTitle}</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{dictionary.skills.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.skills.description}
            </p>
          </div>
          
          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Category 1 - Frontend */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚛</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{dictionary.skills.categories.frontend}</h3>
              <p className="text-sm text-gray-500">{dictionary.skills.categories.frontendDesc}</p>
            </div>
            
            {/* Category 2 - Backend */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{dictionary.skills.categories.backend}</h3>
              <p className="text-sm text-gray-500">{dictionary.skills.categories.backendDesc}</p>
            </div>
            
            {/* Category 3 - Frameworks (Featured) */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{dictionary.skills.categories.frameworks}</h3>
              <p className="text-sm text-gray-400">{dictionary.skills.categories.frameworksDesc}</p>
            </div>
            
            {/* Category 4 - Tools */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{dictionary.skills.categories.tools}</h3>
              <p className="text-sm text-gray-500">{dictionary.skills.categories.toolsDesc}</p>
            </div>
            
            {/* Category 5 - Deploy */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{dictionary.skills.categories.deploy}</h3>
              <p className="text-sm text-gray-500">{dictionary.skills.categories.deployDesc}</p>
            </div>
          </div>
          
          {/* Detailed Skills */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Technical Skills */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-500 uppercase tracking-wider">{dictionary.skills.technical.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">{dictionary.skills.technical.subtitle}</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">HTML / CSS</span>
                      <span className="text-sm text-gray-500">70%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[70%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">JavaScript</span>
                      <span className="text-sm text-gray-500">60%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[60%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Next.js</span>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[50%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Python</span>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[50%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Java</span>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[50%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Git / GitHub</span>
                      <span className="text-sm text-gray-500">60%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-[60%] h-full bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft Skills & Languages */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider">{dictionary.skills.soft.title}</p>
                    <h3 className="text-xl font-bold text-gray-800">{dictionary.skills.soft.subtitle}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.soft.collaboration}</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.soft.learning}</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.soft.adaptability}</span>
                    </div>
                    <div className="px-4 py-3 bg-gray-800 rounded-lg">
                      <span className="text-sm font-medium text-white">{dictionary.skills.soft.problemSolving}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider">{dictionary.skills.languages.title}</p>
                    <h3 className="text-xl font-bold text-gray-800">{dictionary.skills.languages.subtitle}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">{dictionary.skills.languages.spanish}</span>
                      <span className="text-sm text-gray-500">{dictionary.skills.languages.native}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="font-medium text-gray-800">{dictionary.skills.languages.english}</span>
                      <span className="text-sm text-gray-500">{dictionary.skills.languages.basicIntermediate}</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional Tools */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider">{dictionary.skills.methodologies.title}</p>
                    <h3 className="text-xl font-bold text-gray-800">{dictionary.skills.methodologies.subtitle}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.methodologies.scrum}</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.methodologies.kanban}</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{dictionary.skills.methodologies.designPatterns}</span>
                    </div>
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
