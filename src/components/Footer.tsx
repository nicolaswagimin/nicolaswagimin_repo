export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold">N</span>
                </div>
                <span className="text-2xl font-bold text-white">Nicolás Wagimin</span>
              </div>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  Estudiante de Ingeniería de Software especializado en desarrollo web y backend, aplicando tecnologías modernas y buenas prácticas en cada proyecto de aprendizaje.
                </p>
              </div>
              
              {/* Contact */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Colaboremos</h4>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    placeholder="¿Tienes un proyecto en mente?"
                    className="flex-1 h-12 bg-gray-700 rounded-full border border-gray-600 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <button className="w-24 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <span className="text-gray-800 font-bold">→</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
              {/* Navegación */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Navegación</h4>
                <div className="space-y-3">
                  <a href="#about" className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Acerca de</a>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Proyectos</a>
                  <a href="#skills" className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Habilidades</a>
                  <a href="#experience" className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Experiencia</a>
                </div>
              </div>
              
              {/* Tecnologías */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Tecnologías</h4>
                <div className="space-y-3">
                  <p className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Frontend Web</p>
                  <p className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Backend APIs</p>
                  <p className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Java & Python</p>
                  <p className="text-gray-400 hover:text-white cursor-pointer block transition-colors">Desarrollo Full Stack</p>
                </div>
              </div>
              
              {/* Contacto */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Contacto</h4>
                <div className="space-y-3">
                  <p className="text-gray-400">nicolaswagimin@gmail.com</p>
                  <p className="text-gray-400">Pasto, Colombia</p>
                  <p className="text-gray-400">Estudiante activo</p>
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-3 pt-4">
                  <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-black cursor-pointer transition-colors">
                    <span className="text-white font-bold text-sm">GH</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    <span className="text-white font-bold text-sm">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                    <span className="text-white font-bold text-sm">𝕏</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500">© 2025 Nicolás Wagimin Bravo. Portafolio académico.</p>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition-colors">Universidad Cooperativa</a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition-colors">Campus Pasto</a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition-colors">Ingeniería de Software</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
