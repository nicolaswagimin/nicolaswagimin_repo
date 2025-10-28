'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {dictionary.footer.brand.name}
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {dictionary.footer.brand.description}
                </p>
              </div>
              
              {/* Contact */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">
                  {dictionary.footer.collaboration.title}
                </h4>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    placeholder={dictionary.footer.collaboration.placeholder}
                    className="flex-1 h-12 bg-background rounded-full border border-border px-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="w-24 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg">
                    <span className="text-white font-bold">→</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
              {/* Navegación */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {dictionary.footer.navigation.title}
                </h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors"
                  >
                    {dictionary.footer.navigation.about}
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors"
                  >
                    {dictionary.footer.navigation.projects}
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors"
                  >
                    {dictionary.footer.navigation.skills}
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors"
                  >
                    {dictionary.footer.navigation.experience}
                  </button>
                </div>
              </div>
              
              {/* Tecnologías */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {dictionary.footer.technologies.title}
                </h4>
                <div className="space-y-3">
                  <p className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors">
                    {dictionary.footer.technologies.frontend}
                  </p>
                  <p className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors">
                    {dictionary.footer.technologies.backend}
                  </p>
                  <p className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors">
                    {dictionary.footer.technologies.javaPython}
                  </p>
                  <p className="text-muted-foreground hover:text-foreground cursor-pointer block transition-colors">
                    {dictionary.footer.technologies.fullStack}
                  </p>
                </div>
              </div>
              
              {/* Contacto */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {dictionary.footer.contact.title}
                </h4>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    {dictionary.footer.contact.email}
                  </p>
                  <p className="text-muted-foreground">
                    {dictionary.footer.contact.location}
                  </p>
                  <p className="text-muted-foreground">
                    {dictionary.footer.contact.status}
                  </p>
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-3 pt-4">
                  <a 
                    href="https://github.com/nicolaswagimin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold text-sm">GH</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nicolas-wagimin-bravo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold text-sm">in</span>
                  </a>
                  <a 
                    href="https://twitter.com/nicolaswagimin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold text-sm">𝕏</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-muted-foreground">
                  {dictionary.footer.copyright.text}
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {dictionary.footer.links.university}
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {dictionary.footer.links.campus}
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {dictionary.footer.links.degree}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
