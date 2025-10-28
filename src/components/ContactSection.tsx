import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">CONTACTO</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Conversemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto interesante o quieres colaborar en algo? Me encantaría conocer tus ideas y explorar oportunidades de aprendizaje y crecimiento juntos.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">ENVIAR MENSAJE</p>
                  <h3 className="text-2xl font-bold text-gray-800">Cuéntame tu idea</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-gray-600 font-medium">Nombre</label>
                      <input 
                        type="text" 
                        placeholder="Tu nombre"
                        className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-600 font-medium">Email</label>
                      <input 
                        type="email" 
                        placeholder="tu@email.com"
                        className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-gray-600 font-medium">Asunto</label>
                    <input 
                      type="text" 
                      placeholder="¿En qué podemos colaborar?"
                      className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-gray-600 font-medium">Mensaje</label>
                    <textarea 
                      placeholder="Comparte tu proyecto, idea o propuesta de colaboración. Me gusta conocer los detalles y el contexto..."
                      className="w-full h-32 bg-white border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 h-12 rounded-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <p className="text-gray-500 uppercase tracking-wider">INFORMACIÓN DE CONTACTO</p>
                <h3 className="text-2xl font-bold text-gray-800">Conectemos</h3>
                <p className="text-gray-600">
                  Siempre estoy abierto a discutir proyectos interesantes, oportunidades de colaboración o simplemente charlar sobre tecnología y desarrollo.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">Email</p>
                    <p className="text-gray-800 font-medium">nicolaswagimin@gmail.com</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">Ubicación</p>
                    <p className="text-gray-800 font-medium">Pasto, Colombia</p>
                  </div>
                </div>
                
                {/* Status */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">Estado</p>
                    <p className="text-gray-800 font-medium">Estudiante activo</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-gray-500 uppercase tracking-wider text-sm">ENCUÉNTRAME</p>
                  <h4 className="text-lg font-semibold text-gray-800">Redes y plataformas</h4>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <span className="text-white font-bold">GH</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    <span className="text-white font-bold">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                    <span className="text-white font-bold">𝕏</span>
                  </a>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gray-800 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">¿Proyecto de práctica?</h4>
                  <p className="text-gray-300">
                    Si tienes una idea interesante para un proyecto de práctica o colaboración académica, no dudes en contactarme. Me gusta aprender trabajando en equipo.
                  </p>
                  <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700 px-6 h-10 rounded-full">
                    Hablemos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
