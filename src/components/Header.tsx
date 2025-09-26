import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Nicolás Wagimin</span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <input 
              type="text" 
              placeholder="Buscar proyectos, habilidades..."
              className="w-full h-10 bg-gray-100 rounded-full border border-gray-200 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">Inicio</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">Proyectos</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800 transition-colors">Habilidades</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-800 transition-colors">Experiencia</a>
            
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 h-9 rounded-full">
              Contacto
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="outline" className="md:hidden w-10 h-10 p-0 border-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
}
