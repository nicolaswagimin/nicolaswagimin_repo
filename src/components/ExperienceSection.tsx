'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function ExperienceSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="py-24 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">{dictionary.experience.sectionTitle}</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{dictionary.experience.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.experience.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Academic Experience */}
            <div className="lg:col-span-7">
              <div className="space-y-4 mb-12">
                <p className="text-gray-500 uppercase tracking-wider">{dictionary.experience.academic.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{dictionary.experience.academic.subtitle}</h3>
              </div>
              
              <div className="space-y-12">
                {/* Current Education */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-px h-full bg-gray-300"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-gray-800">{dictionary.experience.currentEducation.title}</h4>
                          <p className="text-gray-600 font-medium">{dictionary.experience.currentEducation.institution}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-700">
                          {dictionary.experience.currentEducation.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          {dictionary.experience.currentEducation.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Java</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Python</span>
                        <span className="px-2 py-1 bg-gray-800 rounded text-xs text-white">Patrones de Diseño</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Scrum</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Experience */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-px h-full bg-gray-300"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-gray-800">{dictionary.experience.projectExperience.title}</h4>
                          <p className="text-gray-600 font-medium">{dictionary.experience.projectExperience.institution}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {dictionary.experience.projectExperience.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          {dictionary.experience.projectExperience.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Spring Boot</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">React</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Next.js</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Vercel</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Learning Phase */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-gray-800">{dictionary.experience.selfLearning.title}</h4>
                          <p className="text-gray-600 font-medium">{dictionary.experience.selfLearning.institution}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {dictionary.experience.selfLearning.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          {dictionary.experience.selfLearning.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">HTML/CSS</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">JavaScript</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Tailwind CSS</span>
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
                  <p className="text-gray-500 uppercase tracking-wider">{dictionary.experience.education.title}</p>
                  <h3 className="text-xl font-bold text-gray-800">{dictionary.experience.education.subtitle}</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800">{dictionary.experience.degree.title}</h4>
                      <p className="text-gray-600 font-medium">{dictionary.experience.degree.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{dictionary.experience.degree.campus}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{dictionary.experience.degree.status}</span>
                      </div>
                      <span className="text-sm text-gray-500">{dictionary.experience.degree.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Learning Areas */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">{dictionary.experience.focus.title}</p>
                  <h3 className="text-xl font-bold text-gray-800">{dictionary.experience.focus.subtitle}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🌐</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800">{dictionary.experience.areas.webDev.title}</h4>
                      <p className="text-sm text-gray-500">{dictionary.experience.areas.webDev.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl text-white">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xl">⚙️</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">{dictionary.experience.areas.softwareEng.title}</h4>
                      <p className="text-sm text-gray-300">{dictionary.experience.areas.softwareEng.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-600 text-xl">📱</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800">{dictionary.experience.areas.appDev.title}</h4>
                      <p className="text-sm text-gray-500">{dictionary.experience.areas.appDev.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">{dictionary.experience.status.title}</p>
                  <h3 className="text-xl font-bold text-gray-800">{dictionary.experience.status.subtitle}</h3>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800">{dictionary.experience.availability.status}</span>
                  </div>
                  <p className="text-green-700 text-sm">
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
