export function ExperienceSection() {
  return (
    <section className="py-24 bg-gray-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">EXPERIENCIA</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Mi trayectoria académica</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mi formación en Ingeniería de Software y el desarrollo de proyectos académicos que han fortalecido mis conocimientos técnicos.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Academic Experience */}
            <div className="lg:col-span-7">
              <div className="space-y-4 mb-12">
                <p className="text-gray-500 uppercase tracking-wider">EXPERIENCIA ACADÉMICA</p>
                <h3 className="text-2xl font-bold text-gray-800">Formación y proyectos</h3>
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
                          <h4 className="text-xl font-semibold text-gray-800">Estudiante de Ingeniería de Software</h4>
                          <p className="text-gray-600 font-medium">Universidad Cooperativa de Colombia • Campus Pasto</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-700">
                          2021 - Presente
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          Formación integral en desarrollo de software, incluyendo programación orientada a objetos, patrones de diseño, metodologías ágiles y desarrollo web. Participación activa en proyectos de equipo y aplicación práctica de conceptos teóricos.
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
                          <h4 className="text-xl font-semibold text-gray-800">Desarrollador de Proyectos Académicos</h4>
                          <p className="text-gray-600 font-medium">Proyectos universitarios y personales</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          2022 - Presente
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          Desarrollo de múltiples proyectos aplicando tecnologías modernas como Spring Boot, React y Next.js. Experiencia en trabajo colaborativo, integración de APIs y despliegue de aplicaciones usando plataformas como Vercel.
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
                          <h4 className="text-xl font-semibold text-gray-800">Aprendizaje Autodidacta</h4>
                          <p className="text-gray-600 font-medium">Tecnologías web y frameworks modernos</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          2021 - Presente
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          Complemento la formación universitaria con aprendizaje autodidacta de tecnologías web modernas, frameworks y herramientas de desarrollo. Enfoque en construir proyectos prácticos para aplicar conocimientos teóricos.
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
                  <p className="text-gray-500 uppercase tracking-wider">EDUCACIÓN</p>
                  <h3 className="text-xl font-bold text-gray-800">Formación actual</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800">Ingeniería de Software</h4>
                      <p className="text-gray-600 font-medium">Universidad Cooperativa de Colombia</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Campus Pasto</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">En curso</span>
                      </div>
                      <span className="text-sm text-gray-500">2021 - Presente</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Learning Areas */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">ÁREAS DE ENFOQUE</p>
                  <h3 className="text-xl font-bold text-gray-800">Especialización</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🌐</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800">Desarrollo Web</h4>
                      <p className="text-sm text-gray-500">Frontend y Backend</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl text-white">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xl">⚙️</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">Ingeniería de Software</h4>
                      <p className="text-sm text-gray-300">Patrones y Arquitectura</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-green-600 text-xl">📱</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800">Desarrollo de Aplicaciones</h4>
                      <p className="text-sm text-gray-500">Java y Python</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status */}
              <div>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">ESTADO ACTUAL</p>
                  <h3 className="text-xl font-bold text-gray-800">Disponibilidad</h3>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800">Estudiante Activo</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Abierto a proyectos de práctica, colaboraciones académicas y oportunidades de aprendizaje.
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
