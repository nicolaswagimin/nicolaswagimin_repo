'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialsSection() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-500 uppercase tracking-wider mb-4">{dictionary.testimonials.sectionTitle}</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{dictionary.testimonials.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.testimonials.description}
            </p>
          </div>
          
          {/* Featured Comment */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-16 border border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <div className="space-y-6 mb-8">
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed">
                  &ldquo;{dictionary.testimonials.featured.quote}&rdquo;
                </blockquote>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">{dictionary.testimonials.featured.author}</p>
                <p className="text-gray-500">{dictionary.testimonials.featured.role}</p>
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comment 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-gray-400 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial1.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">S</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800">{dictionary.testimonials.testimonial1.author}</p>
                    <p className="text-sm text-gray-500">{dictionary.testimonials.testimonial1.role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comment 2 */}
            <div className="bg-gray-800 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-gray-400 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial2.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">{dictionary.testimonials.testimonial2.author}</p>
                    <p className="text-sm text-gray-400">{dictionary.testimonials.testimonial2.role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comment 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-gray-400 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial3.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">L</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800">{dictionary.testimonials.testimonial3.author}</p>
                    <p className="text-sm text-gray-500">{dictionary.testimonials.testimonial3.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
              <span className="text-gray-700 font-medium">{dictionary.testimonials.cta.question}</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {dictionary.testimonials.cta.link}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
