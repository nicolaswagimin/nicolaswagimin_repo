'use client';

import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";

export function ContactSection() {
  const { dictionary } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cargar mensaje de colaboración del localStorage al montar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const message = localStorage.getItem('collaborationMessage');
      if (message) {
        setFormData(prev => ({ ...prev, subject: message }));
        // Limpiar el mensaje del localStorage después de usarlo
        localStorage.removeItem('collaborationMessage');
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const recipientEmail = 'nicolas.wagimin@campusucc.edu.co';
    const subject = formData.subject.trim() || 'Consulta desde portafolio';
    const body = `Hola Nicolás,

Mi nombre es: ${formData.name.trim() || 'No especificado'}
Mi email es: ${formData.email.trim() || 'No especificado'}

${formData.message.trim() || 'Sin mensaje adicional'}

Saludos,`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Limpiar el formulario después de un pequeño delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
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
            <SplitText
              key={`contact-title-${dictionary.contact.title}`}
              text={dictionary.contact.title}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              tag="h2"
              delay={80}
              duration={0.7}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {dictionary.contact.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-card rounded-3xl p-10 border border-border" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                    {dictionary.contact.form.title}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">
                    {dictionary.contact.form.subtitle}
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-foreground font-medium">
                        {dictionary.contact.form.fields.name}
                      </label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={handleInputChange('name')}
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
                        value={formData.email}
                        onChange={handleInputChange('email')}
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
                      value={formData.subject}
                      onChange={handleInputChange('subject')}
                      placeholder={dictionary.contact.form.fields.subjectPlaceholder}
                      className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-foreground font-medium">
                      {dictionary.contact.form.fields.message}
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      placeholder={dictionary.contact.form.fields.messagePlaceholder}
                      className="w-full h-32 bg-background border border-border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="px-8 h-12">
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
                    <img src="/images/Email.png" alt="Email" className="w-6 h-6 object-contain" />
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
                    <img src="/images/Location.png" alt="Location" className="w-6 h-6 object-contain" />
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
                    <img src="/images/Status.png" alt="Status" className="w-6 h-6 object-contain" />
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
              <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">
                    {dictionary.contact.cta.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {dictionary.contact.cta.description}
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="px-6 h-10"
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
