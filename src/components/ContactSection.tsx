'use client';

import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { dictionary } = useLanguage();

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted/30" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground uppercase tracking-wider mb-4 text-sm font-medium">
              {dictionary.contact.sectionTitle}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {dictionary.contact.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {dictionary.contact.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-card rounded-3xl p-10 border border-border shadow-lg">
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.contact.form.title}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">
                    {dictionary.contact.form.subtitle}
                  </h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-foreground font-medium">
                        {dictionary.contact.form.fields.name}
                      </label>
                      <input 
                        type="text" 
                        placeholder={dictionary.contact.form.fields.namePlaceholder}
                        className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-foreground font-medium">
                        {dictionary.contact.form.fields.email}
                      </label>
                      <input 
                        type="email" 
                        placeholder={dictionary.contact.form.fields.emailPlaceholder}
                        className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-foreground font-medium">
                      {dictionary.contact.form.fields.subject}
                    </label>
                    <input 
                      type="text" 
                      placeholder={dictionary.contact.form.fields.subjectPlaceholder}
                      className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-foreground font-medium">
                      {dictionary.contact.form.fields.message}
                    </label>
                    <textarea 
                      placeholder={dictionary.contact.form.fields.messagePlaceholder}
                      className="w-full h-32 bg-background border border-border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                    ></textarea>
                  </div>
                  
                  <Button className="px-8 h-12">
                    {dictionary.contact.form.submit}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                  {dictionary.contact.info.title}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {dictionary.contact.info.subtitle}
                </h3>
                <p className="text-muted-foreground">
                  {dictionary.contact.info.description}
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">✉️</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm">
                      {dictionary.contact.info.email}
                    </p>
                    <p className="text-foreground font-medium">
                      {dictionary.contact.info.emailValue}
                    </p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm">
                      {dictionary.contact.info.location}
                    </p>
                    <p className="text-foreground font-medium">
                      {dictionary.contact.info.locationValue}
                    </p>
                  </div>
                </div>
                
                {/* Status */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xl">🎓</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground uppercase tracking-wider text-sm">
                      {dictionary.contact.info.status}
                    </p>
                    <p className="text-foreground font-medium">
                      {dictionary.contact.info.statusValue}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm">
                    {dictionary.contact.social.title}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground">
                    {dictionary.contact.social.subtitle}
                  </h4>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => openSocialLink('https://github.com/nicolaswagimin')}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold">GH</span>
                  </button>
                  <button 
                    onClick={() => openSocialLink('https://www.linkedin.com/in/nicolas-wagimin-bravo')}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold">in</span>
                  </button>
                  <button 
                    onClick={() => openSocialLink('https://twitter.com/nicolaswagimin')}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-hover cursor-pointer transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className="text-white font-bold">𝕏</span>
                  </button>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-primary rounded-2xl p-8 text-white shadow-lg">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">
                    {dictionary.contact.cta.title}
                  </h4>
                  <p className="text-white/80">
                    {dictionary.contact.cta.description}
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 px-6 h-10"
                  >
                    {dictionary.contact.cta.button}
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
