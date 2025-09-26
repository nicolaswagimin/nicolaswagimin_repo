export function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <div className="space-y-4">
                <p className="text-gray-500 uppercase tracking-wider">ABOUT</p>
                <h2 className="text-4xl font-bold text-gray-800">Mi historia</h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4 max-w-2xl">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Desarrollador en formación con interés en desarrollo web y backend, utilizando tecnologías modernas y buenas prácticas aprendidas en la universidad.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left - Magazine Style Content */}
            <div className="lg:col-span-5 space-y-8">
              {/* Featured Image */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">NW</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/90 text-sm">Estudiante Ingeniería de Software · Universidad Cooperativa de Colombia</p>
                  </div>
                </div>
                
                {/* Small Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-xs">FE</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 mb-1">Frontend</p>
                    <p className="text-xs text-gray-500">En progreso</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <p className="text-sm font-medium text-white mb-1">Backend</p>
                    <p className="text-xs text-gray-400">Aprendiendo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Content Grid */}
            <div className="lg:col-span-7 space-y-12">
              {/* Bio Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Desde que empecé la carrera de Ingeniería de Software me interesó entender cómo las ideas se convierten en aplicaciones útiles. A lo largo de mis estudios he desarrollado proyectos académicos que me han permitido aprender tanto del frontend como del backend, aplicando lenguajes como Python y Java junto a frameworks modernos.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Mi metodología se basa en el aprendizaje constante, la práctica y la colaboración. Creo que cada proyecto, por pequeño que sea, enseña algo nuevo y fortalece la disciplina de construir software de manera estructurada.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Me motiva seguir mejorando y tener la oportunidad de aportar a proyectos que mezclen tecnología con impacto real en las personas.
                  </p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">2</div>
                    <div className="text-sm text-gray-500">Años experiencia académica</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">6</div>
                    <div className="text-sm text-gray-500">Proyectos universitarios</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">2021</div>
                    <div className="text-sm text-gray-500">Inicio en UCC</div>
                  </div>
                </div>
              </div>
              
              {/* Skills Categories */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      HTML/CSS
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      JavaScript
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      Next.js
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-white">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      Java
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      Django
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm text-gray-700">
                      Spring Boot
                    </span>
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
