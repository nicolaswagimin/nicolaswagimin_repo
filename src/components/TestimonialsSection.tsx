'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";
import Carousel from "./Carousel";
import { FiCircle, FiLayers, FiLayout, FiCode } from 'react-icons/fi';

export function TestimonialsSection() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground uppercase tracking-wider mb-4 text-sm font-medium">
              {dictionary.testimonials.sectionTitle}
            </p>
            <SplitText
              key={`testimonials-title-${dictionary.testimonials.title}`}
              text={dictionary.testimonials.title}
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
              {dictionary.testimonials.description}
            </p>
          </div>
          
          {/* Carousel de Testimonios */}
          <div className="flex justify-center mb-16 py-12">
            <div style={{ height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Carousel
                items={[
                  {
                    id: 1,
                    title: dictionary.testimonials.featured.author,
                    description: dictionary.testimonials.featured.quote,
                    icon: <FiCircle className="carousel-icon" />
                  },
                  {
                    id: 2,
                    title: dictionary.testimonials.testimonial1.author,
                    description: dictionary.testimonials.testimonial1.quote,
                    icon: <FiLayers className="carousel-icon" />
                  },
                  {
                    id: 3,
                    title: dictionary.testimonials.testimonial2.author,
                    description: dictionary.testimonials.testimonial2.quote,
                    icon: <FiLayout className="carousel-icon" />
                  },
                  {
                    id: 4,
                    title: dictionary.testimonials.testimonial3.author,
                    description: dictionary.testimonials.testimonial3.quote,
                    icon: <FiCode className="carousel-icon" />
                  }
                ]}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-card rounded-full border border-border">
              <span className="text-foreground font-medium">
                {dictionary.testimonials.cta.question}
              </span>
              <div className="w-px h-4 bg-border"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-primary hover:text-primary-hover transition-colors font-medium"
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
