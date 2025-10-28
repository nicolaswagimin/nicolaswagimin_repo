export function SkillsSection() {
  return (
    <section className="py-24 bg-gray-100" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">HABILIDADES</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Mi stack tecnológico</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tecnologías y herramientas que estoy aprendiendo y aplicando en mis proyectos académicos y personales.
            </p>
          </div>
          
          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Category 1 - Frontend */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚛</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h3>
              <p className="text-sm text-gray-500">React & Next.js</p>
            </div>
            
            {/* Category 2 - Backend */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Backend</h3>
              <p className="text-sm text-gray-500">Python & Java</p>
            </div>
            
            {/* Category 3 - Frameworks (Featured) */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Frameworks</h3>
              <p className="text-sm text-gray-400">Django & Spring</p>
            </div>
            
            {/* Category 4 - Tools */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Herramientas</h3>
              <p className="text-sm text-gray-500">Git & Postman</p>
            </div>
            
            {/* Category 5 - Deploy */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Deploy</h3>
              <p className="text-sm text-gray-500">Vercel</p>
            </div>
          </div>
          
          {/* Detailed Skills */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Technical Skills */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-gray-500 uppercase tracking-wider">HABILIDADES TÉCNICAS</p>
                  <h3 className="text-2xl font-bold text-gray-800">Nivel de progreso</h3>
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
                    <p className="text-gray-500 uppercase tracking-wider">HABILIDADES BLANDAS</p>
                    <h3 className="text-xl font-bold text-gray-800">Competencias</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Colaboración</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Aprendizaje</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Adaptabilidad</span>
                    </div>
                    <div className="px-4 py-3 bg-gray-800 rounded-lg">
                      <span className="text-sm font-medium text-white">Resolución problemas</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider">IDIOMAS</p>
                    <h3 className="text-xl font-bold text-gray-800">Fluency</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">Español</span>
                      <span className="text-sm text-gray-500">Nativo</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="font-medium text-gray-800">Inglés</span>
                      <span className="text-sm text-gray-500">Básico-Intermedio</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional Tools */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-wider">METODOLOGÍAS</p>
                    <h3 className="text-xl font-bold text-gray-800">Conocimientos</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Scrum básico</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Kanban</span>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">Patrones de diseño</span>
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
