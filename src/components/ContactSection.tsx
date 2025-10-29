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
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">{dictionary.contact.sectionTitle}</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{dictionary.contact.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.contact.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
                <div className="space-y-4 mb-8">
                  <p className="text-gray-500 uppercase tracking-wider">{dictionary.contact.form.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">{dictionary.contact.form.subtitle}</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-gray-600 font-medium">{dictionary.contact.form.fields.name}</label>
                      <input 
                        type="text" 
                        placeholder={dictionary.contact.form.fields.namePlaceholder}
                        className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-600 font-medium">{dictionary.contact.form.fields.email}</label>
                      <input 
                        type="email" 
                        placeholder={dictionary.contact.form.fields.emailPlaceholder}
                        className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-gray-600 font-medium">{dictionary.contact.form.fields.subject}</label>
                    <input 
                      type="text" 
                      placeholder={dictionary.contact.form.fields.subjectPlaceholder}
                      className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-gray-600 font-medium">{dictionary.contact.form.fields.message}</label>
                    <textarea 
                      placeholder={dictionary.contact.form.fields.messagePlaceholder}
                      className="w-full h-32 bg-white border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 h-12 rounded-full">
                    {dictionary.contact.form.submit}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <p className="text-gray-500 uppercase tracking-wider">{dictionary.contact.info.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{dictionary.contact.info.subtitle}</h3>
                <p className="text-gray-600">
                  {dictionary.contact.info.description}
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">{dictionary.contact.info.email}</p>
                    <p className="text-gray-800 font-medium">{dictionary.contact.info.emailValue}</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">{dictionary.contact.info.location}</p>
                    <p className="text-gray-800 font-medium">{dictionary.contact.info.locationValue}</p>
                  </div>
                </div>
                
                {/* Status */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-wider text-sm">{dictionary.contact.info.status}</p>
                    <p className="text-gray-800 font-medium">{dictionary.contact.info.statusValue}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-gray-500 uppercase tracking-wider text-sm">{dictionary.contact.social.title}</p>
                  <h4 className="text-lg font-semibold text-gray-800">{dictionary.contact.social.subtitle}</h4>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => openSocialLink('https://github.com/nicolaswagimin')}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <span className="text-white font-bold">GH</span>
                  </button>
                  <button 
                    onClick={() => openSocialLink('https://www.linkedin.com/in/nicolas-wagimin-bravo')}
                    className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors"
                  >
                    <span className="text-white font-bold">in</span>
                  </button>
                  <button 
                    onClick={() => openSocialLink('https://twitter.com/nicolaswagimin')}
                    className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors"
                  >
                    <span className="text-white font-bold">𝕏</span>
                  </button>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gray-800 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">{dictionary.contact.cta.title}</h4>
                  <p className="text-gray-300">
                    {dictionary.contact.cta.description}
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline" 
                    className="border-gray-500 text-gray-300 hover:bg-gray-700 px-6 h-10 rounded-full"
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
