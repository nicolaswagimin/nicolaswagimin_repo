import { Button } from "./ui/button";

export function HeroSection() {
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
              <span className="text-gray-700 text-sm font-medium">Estudiante de Ingeniería de Software · Pasto, Colombia</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-600 uppercase tracking-wider">DEVELOPER PORTFOLIO</p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                    Construyendo ideas en 
                    <span className="text-gray-600"> código</span>
                  </h1>
                </div>
                
                <div className="space-y-3 max-w-lg">
                  <p className="text-gray-600 text-lg">
                    Soy Nicolás Wagimin Bravo, desarrollador en formación con interés en desarrollo web y backend, utilizando tecnologías modernas y buenas prácticas aprendidas en la universidad.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 h-12 rounded-full">
                  Ver Proyectos
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-700 px-8 h-12 rounded-full">
                  Contacto
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">6+</div>
                  <div className="text-sm text-gray-500">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">2</div>
                  <div className="text-sm text-gray-500">Años aprendiendo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">Active</div>
                  <div className="text-sm text-gray-500">Estudiante</div>
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
                    <div className="text-white font-semibold text-lg mb-2">Code & Learn</div>
                    <div className="text-white/80 text-sm">Portfolio 2025</div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 w-24 h-32 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                  <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                  <div className="text-xs text-gray-600 mb-1">Latest</div>
                  <div className="text-xs text-gray-400">Project</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-gray-800 rounded-lg p-4">
                  <div className="text-white text-sm font-medium mb-2">Java + Spring</div>
                  <div className="text-gray-300 text-xs">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
